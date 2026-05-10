'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Linkedin, Twitter, Github, ArrowRight, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'React.js Development', href: '/services/react-development' },
      { label: 'Node.js Development', href: '/services/node-development' },
      { label: 'CMS Development', href: '/services/cms-development' },
      { label: 'E-Commerce Solutions', href: '/services/ecommerce' },
      { label: 'All Services', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Technologies', href: '/technologies' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '/contact' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Mail, href: 'mailto:contact@narixsolutions.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/company/narixsolutions', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/narixsolutions', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/narixsolutions', label: 'GitHub' },
];

function hideFooterTopCta(pathname: string | null) {
  if (!pathname) return false;
  if (pathname === '/technologies') return true;
  if (pathname === '/services' || pathname.startsWith('/services/')) return true;
  if (pathname === '/case-studies' || pathname.startsWith('/case-studies/')) return true;
  return false;
}

export function Footer() {
  const pathname = usePathname();
  const showTopCta = !hideFooterTopCta(pathname);

  return (
    <footer className="bg-gradient-to-b from-background to-card/50 border-t border-border/40 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Top CTA Section - Premium (hidden on services, case studies, technologies) */}
      {showTopCta && (
        <div className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Ready to Start Your Project?
                </h3>
                <p className="text-lg text-white/90 font-light leading-relaxed">
                  Get a free consultation and discover how we can transform your business through innovative digital solutions.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
              >
                <span>Get Started Today</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Content - Premium */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand & Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <span className="font-bold text-2xl text-foreground">NarixSolutions</span>
            </Link>
            
            <div className="space-y-4">
              <p className="text-foreground/70 leading-relaxed font-light max-w-sm">
                Premium digital transformation solutions for global enterprises. We deliver innovative technology and strategic design that drives real business impact.
              </p>
            </div>

            {/* Contact Info - Enhanced */}
            <div className="space-y-4 pt-4">
              <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">Contact Us</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-blue-500/15 rounded-lg group-hover:bg-blue-500/25 transition-colors">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <a href="mailto:contact@narixsolutions.com" className="text-foreground/70 hover:text-blue-600 transition-colors font-light">
                    contact@narixsolutions.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-blue-500/15 rounded-lg group-hover:bg-blue-500/25 transition-colors">
                    <Phone size={20} className="text-blue-600" />
                  </div>
                  <span className="text-foreground/70 font-light">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-500/15 rounded-lg group-hover:bg-blue-500/25 transition-colors mt-1">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <span className="text-foreground/70 font-light">San Francisco, CA, USA</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Sections - Enhanced */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-bold text-foreground text-lg tracking-tight">{section.title}</h3>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-foreground/70 hover:text-blue-600 transition-colors text-sm font-light hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider - Enhanced */}
        <div className="border-t border-border/50 my-20"></div>

        {/* Bottom Footer - Enhanced */}
        <div className="space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 py-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="group p-3 rounded-lg border border-gray-200/50 dark:border-slate-700/50 text-foreground/60 hover:text-blue-600 hover:border-blue-500/50 bg-gray-50 dark:bg-slate-900/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pt-6 border-t border-border/50"
          >
            <p className="text-foreground/60 text-sm font-light">
              © 2025 NarixSolutions. All rights reserved. | Designed & Developed with care in San Francisco
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
