'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@narixsolutions.com',
    link: 'mailto:hello@narixsolutions.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'San Francisco, CA',
    link: '#',
  },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitMessage('Thank you for your message! We&apos;ll be in touch within 24 hours.');
      reset();
      setTimeout(() => setSubmitMessage(null), 5000);
    } catch {
      setSubmitMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-foreground/70 font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Let&apos;s discuss your goals and create a strategy to achieve them together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
              <p className="text-foreground/60 mb-8">
                Have a project in mind? Our team is ready to help bring your ideas to life. Reach out to us today!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-foreground/60 text-sm group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {[
                { number: '24h', label: 'Response Time' },
                { number: '99%', label: 'Satisfaction' },
                { number: '150+', label: 'Team Members' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-bold text-accent text-lg mb-1">{stat.number}</div>
                  <div className="text-xs text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-background border border-border rounded-xl p-8">
              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  {...register('name')}
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Company */}
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                  Company
                </label>
                <input
                  {...register('company')}
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div
                  className={`mb-6 p-3 rounded-lg text-sm ${
                    submitMessage.includes('Thank')
                      ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                      : 'bg-red-500/10 text-red-600 border border-red-500/20'
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight size={18} className={isSubmitting ? '' : 'group-hover:translate-x-1 transition-transform'} />
              </button>

              <p className="text-xs text-foreground/50 text-center mt-4">
                We&apos;ll respond within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
