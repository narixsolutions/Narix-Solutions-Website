import { siteConfig } from '@/config/site';
import { getWhatsAppHref } from '@/lib/whatsapp';

export const CONTACT_EMAIL = siteConfig.email;
export const CONTACT_PHONE_DISPLAY = siteConfig.phoneDisplay;
export const CONTACT_PHONE_TEL = siteConfig.phoneTel;
export const CONTACT_LOCATION = siteConfig.location;

export const MAILTO_SUBJECT = `Project Inquiry from ${siteConfig.name} Website`;
export const MAILTO_BODY = `Hi ${siteConfig.name} Team,%0D%0A%0D%0AI would like to discuss a project with you.`;

export const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(MAILTO_SUBJECT)}&body=${MAILTO_BODY}`;

export const whatsappHref = getWhatsAppHref();

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_LOCATION)}`;

export const SERVICE_OPTIONS = [
  'Business Website',
  'SaaS Platform',
  'E-Commerce Website',
  'Custom Web Application',
  'UI/UX Design',
  'SEO & Marketing',
  'Maintenance & Support',
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
