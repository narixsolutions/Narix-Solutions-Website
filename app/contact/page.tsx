'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import { z } from 'zod';
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
      if (window.location.hash === '#contact-form') {
        document.getElementById('contact-form')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };
    scrollToForm();
    window.addEventListener('hashchange', scrollToForm);
    return () => window.removeEventListener('hashchange', scrollToForm);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      toast.error(parsed.error.errors[0]?.message ?? 'Please check the form and try again.');
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

      toast.success("Thank you! We've received your inquiry and will respond within one business day.");
      setFormData(initialFormData);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Toaster position="top-center" richColors closeButton />

      {/* Hero Section - Premium */}
      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground text-balance leading-tight tracking-tight">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Exceptional
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
            Whether you&apos;re launching a startup, scaling a SaaS platform, or modernizing your
            business, our team helps transform ideas into high-performance digital products.
          </p>
        </div>
      </section>

      {/* Contact Methods - Premium */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-emerald-500/3 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <a
                key={method.title}
                href={method.link}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                aria-label={method.ariaLabel}
                className="group cursor-pointer p-8 bg-white dark:bg-slate-900/50 rounded-2xl border border-gray-200/50 dark:border-slate-700/50 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-emerald-800 p-4 text-white mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <IconComponent size={28} aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-foreground/70 group-hover:text-accent transition-colors duration-300 font-light">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="Your name"
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="+91 98934 71888"
                  />
                  {fieldErrors.phone && (
                    <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(fieldErrors.service)}
                  aria-describedby={fieldErrors.service ? 'service-error' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-accent transition-colors duration-200 cursor-pointer"
                >
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {fieldErrors.service && (
                  <p id="service-error" className="text-red-500 text-sm mt-1" role="alert">
                    {fieldErrors.service}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project goals, timeline, and budget range..."
                ></textarea>
                {fieldErrors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-emerald-800 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Info & FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Us</h2>
            <div className="space-y-6">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900"></div>
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-white text-balance leading-tight">
              Ready to discuss your next digital product?
            </h2>
            <p className="text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Book a free consultation and get expert guidance on your website, SaaS platform, or
              custom software project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-background text-accent rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-800"
              >
                <span>Schedule a Free Consultation</span>
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-2">Monday – Saturday</h3>
              <p className="text-foreground/70">10:00 AM – 7:00 PM IST</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Sunday</h3>
              <p className="text-foreground/70">Emergency support only</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                {CONTACT_LOCATION}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
