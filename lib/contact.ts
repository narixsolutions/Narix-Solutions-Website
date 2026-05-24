export const CONTACT_EMAIL = 'anishrawat53@gmail.com';
export const CONTACT_PHONE_DISPLAY = '+91 9893471888';
export const CONTACT_PHONE_TEL = '+919893471888';
export const CONTACT_LOCATION = 'Indore, Madhya Pradesh, India';

export const MAILTO_SUBJECT = 'Project Inquiry from NarixSolutions Website';
export const MAILTO_BODY =
  'Hi NarixSolutions Team,%0D%0A%0D%0AI would like to discuss a project with you.';

export const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(MAILTO_SUBJECT)}&body=${MAILTO_BODY}`;

import { getWhatsAppHref } from '@/lib/whatsapp';

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
