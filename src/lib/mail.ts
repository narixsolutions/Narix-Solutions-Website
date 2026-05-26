import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export type SendMailOptions = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

function getSmtpPassword(): string {
  return (process.env.SMTP_PASS ?? '').trim().replace(/\s/g, '');
}

function getSmtpConfig(): SMTPTransport.Options {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER?.trim();
  const pass = getSmtpPassword();

  if (!host || !user || !pass) {
    throw new Error('SMTP is not configured');
  }

  const secure = port === 465;

  return {
    host,
    port,
    secure,
    requireTLS: !secure,
    auth: { user, pass },
    tls: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true,
    },
  };
}

function getFromAddress(): string {
  return (
    process.env.SMTP_FROM?.trim() ||
    process.env.SMTP_USER?.trim() ||
    ''
  );
}

export function isMailConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      getSmtpPassword(),
  );
}

export async function sendMail(options: SendMailOptions): Promise<void> {
  const transporter = nodemailer.createTransport(getSmtpConfig());

  await transporter.verify();

  await transporter.sendMail({
    from: getFromAddress(),
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
    text: options.text,
  });
}

export function getMailErrorMessage(error: unknown): string {
  if (
    process.env.NODE_ENV === 'development' &&
    error &&
    typeof error === 'object' &&
    'code' in error &&
    String(error.code) === 'EAUTH'
  ) {
    return 'Gmail rejected the App Password. Create it on the SAME account as SMTP_USER in .env.local, then restart the dev server.';
  }
  return 'Failed to send your message. Please try again.';
}
