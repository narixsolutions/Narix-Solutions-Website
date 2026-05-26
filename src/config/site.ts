export const siteConfig = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME ?? 'NarixSolutions',
  tagline: 'Premium Digital Agency',
  description:
    'Premium digital solutions for global brands. Web development, design, SEO, and digital transformation services.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://narixsolutions.com/',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? 'Info@narixsolutions.com',
  phoneDisplay: process.env.NEXT_PUBLIC_COMPANY_PHONE_DISPLAY ?? '+91 9646193221',
  phoneTel: process.env.NEXT_PUBLIC_COMPANY_PHONE ?? '+919646193221',
  location: process.env.NEXT_PUBLIC_COMPANY_LOCATION ?? 'Chandigarh, India',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919646193221',
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    'Hello, I visited your website and would like to discuss a project.',
} as const;
