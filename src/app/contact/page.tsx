'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import { z } from 'zod';
import { ContactBusinessHoursSection } from '@/components/sections/contact/ContactBusinessHoursSection';
import { ContactCtaSection } from '@/components/sections/contact/ContactCtaSection';
import { ContactFormSection } from '@/components/sections/contact/ContactFormSection';
import { ContactHeroSection } from '@/components/sections/contact/ContactHeroSection';
import { ContactMethodsSection } from '@/components/sections/contact/ContactMethodsSection';
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  mailtoHref,
  mapsHref,
  SERVICE_OPTIONS,
  whatsappHref,
} from '@/lib/contact';

const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  company: z.string().trim().max(120),
  service: z.string().min(1, 'Please select a service'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message is too long'),
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: CONTACT_EMAIL,
    link: mailtoHref,
    ariaLabel: `Email us at ${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    title: 'Phone',
    value: CONTACT_PHONE_DISPLAY,
    link: `tel:${CONTACT_PHONE_TEL}`,
    ariaLabel: `Call us at ${CONTACT_PHONE_DISPLAY}`,
  },
  {
    icon: MapPin,
    title: 'Address',
    value: CONTACT_LOCATION,
    link: mapsHref,
    ariaLabel: `View our location on Google Maps: ${CONTACT_LOCATION}`,
    external: true,
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    value: CONTACT_PHONE_DISPLAY,
    link: whatsappHref,
    ariaLabel: `Chat with us on WhatsApp at ${CONTACT_PHONE_DISPLAY}`,
    external: true,
  },
];

const whyChooseUs = [
  {
    title: 'Transparent Communication',
    description:
      'Clear timelines, regular updates, and direct access to your project team—no surprises, no jargon.',
  },
  {
    title: 'Scalable Architecture',
    description:
      'We build systems designed to grow with your users, traffic, and product roadmap from day one.',
  },
  {
    title: 'Fast Project Delivery',
    description:
      'Agile sprints and focused execution help you launch faster without cutting corners on quality.',
  },
  {
    title: 'Long-term Technical Support',
    description:
      'Post-launch maintenance, monitoring, and enhancements so your product stays reliable over time.',
  },
  {
    title: 'Performance-focused Development',
    description:
      'Core Web Vitals, optimized assets, and clean code that keeps your site fast and conversion-ready.',
  },
  {
    title: 'Business-oriented Solutions',
    description:
      'Every feature is tied to outcomes—leads, retention, and revenue—not just looking good on paper.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const scrollToForm = () => {
      if (globalThis.location.hash === '#contact-form') {
        document.getElementById('contact-form')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };
    scrollToForm();
    globalThis.addEventListener('hashchange', scrollToForm);
    return () => globalThis.removeEventListener('hashchange', scrollToForm);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldErrors({});

    const parsed = contactFormSchema.safeParse(formData);
    if (!parsed.success) {
      const errors: Partial<Record<keyof FormData, string>> = {};
      for (const issue of parsed.error.errors) {
        const field = issue.path[0] as keyof FormData;
        if (field && !errors[field]) {
          errors[field] = issue.message;
        }
      }
      setFieldErrors(errors);
      toast.error(parsed.error.errors[0]?.message ?? 'Please check the highlighted fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? 'Failed to send message');
      }

      toast.success("Message sent. We'll get back to you soon.");
      setFormData(initialFormData);
    } catch (err) {
      const message =
        err instanceof Error && err.message === 'Please complete the captcha challenge.'
          ? err.message
          : "Couldn't send your message. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Toaster position="top-center" richColors closeButton />
      <ContactHeroSection />
      <ContactMethodsSection contactMethods={contactMethods} />
      <ContactFormSection
        formData={formData}
        fieldErrors={fieldErrors}
        isSubmitting={isSubmitting}
        serviceOptions={SERVICE_OPTIONS}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        whyChooseUs={whyChooseUs}
      />
      <ContactCtaSection />
      <ContactBusinessHoursSection mapsHref={mapsHref} contactLocation={CONTACT_LOCATION} />
    </main>
  );
}
