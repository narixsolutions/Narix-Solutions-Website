'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Business Websites', href: '/services/web-development' },
  { label: 'SaaS Applications', href: '/services/custom-web-applications' },
  { label: 'E-Commerce Development', href: '/services/ecommerce' },
  { label: 'Custom Web Apps', href: '/services/custom-web-applications' },
  { label: 'UI/UX Design', href: '/services' },
  { label: 'SEO & Marketing', href: '/services/seo-marketing' },
];

function hideFooterTopCta(pathname: string | null) {
  if (!pathname) return false;
  if (pathname === '/') return true;
  if (pathname.startsWith('/technologies')) return true;
  if (pathname === '/services' || pathname.startsWith('/services/')) return true;
  if (pathname === '/case-studies' || pathname.startsWith('/case-studies/')) return true;
  if (pathname === '/contact') return true;
  return false;
}

export function Footer() {
  const pathname = usePathname();
  const showTopCta = !hideFooterTopCta(pathname);

  return (
    <footer className="bg-gradient-to-b from-background to-card/50 border-t border-border/40 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Top CTA — hidden on home, contact, technologies (incl. detail), services, case studies */}
      {showTopCta && (
        <div className="relative z-10 border-b border-border/50 bg-card/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Ready to Start Your Project?
                </h3>
                <p className="text-lg text-foreground/70 font-light leading-relaxed">
                  Get a free consultation and discover how we can transform your business through innovative digital solutions.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
              >
                <span>Get Started Today</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Content - Premium */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand & Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-5 space-y-7">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/narix-logo-trim.png"
                alt="NarixSolutions logo"
                width={523}
                height={403}
                className="h-12 w-auto object-contain"
              />
              <span className="font-bold text-2xl leading-none tracking-tight text-foreground">NarixSolutions</span>
            </Link>

            <p className="text-foreground/70 leading-relaxed font-light max-w-md">
              NarixSolutions builds scalable websites, SaaS platforms, and modern digital products focused on performance, usability, and long-term business growth.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground/45 mb-4">Contact</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <a
                href="mailto:anishrawat53@gmail.com"
                className="group flex items-center gap-3 rounded-lg border border-border/70 bg-card/55 px-3.5 py-3 text-sm text-foreground/75 hover:text-accent hover:border-accent/35 hover:bg-accent/10 transition-all duration-300"
              >
                <span className="p-2 rounded-md border border-border/70 bg-card/80 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                  <Mail size={15} className="text-accent" />
                </span>
                <span>filmmail62@gmail.com</span>
              </a>
              <a
                href="tel:+919893471888"
                className="group flex items-center gap-3 rounded-lg border border-border/70 bg-card/55 px-3.5 py-3 text-sm text-foreground/75 hover:text-accent hover:border-accent/35 hover:bg-accent/10 transition-all duration-300"
              >
                <span className="p-2 rounded-md border border-border/70 bg-card/80 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                  <Phone size={15} className="text-accent" />
                </span>
                <span>+91 9893471888</span>
              </a>
              <a
                href="https://wa.me/919893471888"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-border/70 bg-card/55 px-3.5 py-3 text-sm text-foreground/75 hover:text-accent hover:border-accent/35 hover:bg-accent/10 transition-all duration-300"
              >
                <span className="p-2 rounded-md border border-border/70 bg-card/80 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                  <MessageCircle size={15} className="text-accent" />
                </span>
                <span>WhatsApp Chat</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Indore%2C%20Madhya%20Pradesh%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-border/70 bg-card/55 px-3.5 py-3 text-sm text-foreground/75 hover:text-accent hover:border-accent/35 hover:bg-accent/10 transition-all duration-300 sm:col-span-2"
              >
                <span className="p-2 rounded-md border border-border/70 bg-card/80 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                  <MapPin size={15} className="text-accent" />
                </span>
                <span>Indore, Madhya Pradesh, India</span>
              </a>
            </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="font-semibold text-foreground text-base mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex text-sm text-foreground/65 hover:text-accent transition-colors duration-300 hover:translate-x-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3 className="font-semibold text-foreground text-base mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link href={link.href} className="inline-flex text-sm text-foreground/65 hover:text-accent transition-colors duration-300 hover:translate-x-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-border/50 pt-6 md:pt-7">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 text-center md:text-left md:flex-row md:items-center md:justify-between"
          >
            <p className="text-xs sm:text-sm text-foreground/60 font-light">
              © 2025 NarixSolutions. Built for scalable digital experiences.
            </p>
            <p className="text-xs sm:text-sm text-foreground/45 font-light">
              Made with Next.js & TypeScript
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
