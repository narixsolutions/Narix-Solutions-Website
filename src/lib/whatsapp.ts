import { siteConfig } from '@/config/site';

export function getWhatsAppDigits(): string {
  return siteConfig.whatsappNumber.replace(/\D/g, '') || '919893471888';
}

export function getWhatsAppHref(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${getWhatsAppDigits()}?text=${text}`;
}
