const DEFAULT_NUMBER = '15551234567';

/** E.164-style digits only (country code without +). Configurable via NEXT_PUBLIC_WHATSAPP_NUMBER */
export function getWhatsAppDigits(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? DEFAULT_NUMBER;
  return raw.replace(/\D/g, '') || DEFAULT_NUMBER.replace(/\D/g, '');
}

export function getWhatsAppHref(message?: string): string {
  const text = encodeURIComponent(
    message ?? "Hi NarixSolutions — I'd like to chat about a project.",
  );
  return `https://wa.me/${getWhatsAppDigits()}?text=${text}`;
}
