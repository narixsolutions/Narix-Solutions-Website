export const WHATSAPP_NUMBER = '919893471888';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello NarixSolutions, I visited your website and would like to discuss a project.';

/** E.164-style digits only (country code without +). Configurable via NEXT_PUBLIC_WHATSAPP_NUMBER */
export function getWhatsAppDigits(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? WHATSAPP_NUMBER;
  return raw.replace(/\D/g, '') || WHATSAPP_NUMBER;
}

export function getWhatsAppHref(message?: string): string {
  const text = encodeURIComponent(message ?? WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${getWhatsAppDigits()}?text=${text}`;
}
