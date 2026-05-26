import { NextResponse } from 'next/server';
import { z } from 'zod';
import { siteConfig } from '@/config/site';
import { SERVICE_OPTIONS } from '@/lib/contact';
import {
  buildContactInquiryEmailHtml,
  buildContactInquiryEmailText,
} from '@/lib/emails/contact-inquiry';
import { getMailErrorMessage, isMailConfigured, sendMail } from '@/lib/mail';

const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  service: z.enum(SERVICE_OPTIONS, {
    errorMap: () => ({ message: 'Please select a service' }),
  }),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message is too long'),
});

function getRecipientEmail(): string {
  return process.env.CONTACT_EMAIL_TO?.trim() || siteConfig.email;
}

export async function POST(request: Request) {
  try {
    if (!isMailConfigured()) {
      console.error('SMTP environment variables are not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 503 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? 'Invalid form data';
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, phone, company, service, message } = parsed.data;
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const emailData = {
      name,
      email,
      phone,
      company: company ?? '',
      service,
      message,
      submittedAt,
    };

    await sendMail({
      to: getRecipientEmail(),
      replyTo: email,
      subject: 'New Project Inquiry from Website',
      html: buildContactInquiryEmailHtml(emailData),
      text: buildContactInquiryEmailText(emailData),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: getMailErrorMessage(err) },
      { status: 502 },
    );
  }
}
