'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@narixsolutions.com',
      link: 'mailto:hello@narixsolutions.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'San Francisco, CA',
      link: '#',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Premium */}
      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground text-balance leading-tight tracking-tight">
            Let&apos;s Talk About Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Project</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
            Connect with our expert team to discuss your vision, explore solutions, and start your digital transformation journey
          </p>
        </div>
      </section>

      {/* Contact Methods - Premium */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-500/3 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                className="group p-8 bg-white dark:bg-slate-900/50 rounded-2xl border border-gray-200/50 dark:border-slate-700/50 hover:border-blue-500/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-4 text-white mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-foreground/70 group-hover:text-blue-600 transition-colors font-light">{method.value}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="web-development">Custom Web Development</option>
                  <option value="react">React.js Development</option>
                  <option value="node">Node.js Development</option>
                  <option value="ecommerce">E-Commerce Development</option>
                  <option value="pos">POS Billing Software</option>
                  <option value="seo">SEO & Digital Marketing</option>
                  <option value="automation">Business Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-700 text-center font-medium">
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Info & FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Us</h2>
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-2">Expert Team</h3>
                <p className="text-foreground/70">
                  Our experienced developers and designers have delivered 500+ successful projects.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-2">24/7 Support</h3>
                <p className="text-foreground/70">
                  Dedicated support team available round the clock to assist you.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-2">Affordable Pricing</h3>
                <p className="text-foreground/70">
                  Flexible pricing packages to fit any budget without compromising quality.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-2">Fast Turnaround</h3>
                <p className="text-foreground/70">
                  Quick project delivery without sacrificing quality or attention to detail.
                </p>
              </div>
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
              <h3 className="font-bold text-foreground mb-2">Monday - Friday</h3>
              <p className="text-foreground/70">9:00 AM - 6:00 PM EST</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Saturday</h3>
              <p className="text-foreground/70">10:00 AM - 4:00 PM EST</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Sunday</h3>
              <p className="text-foreground/70">Closed (Emergency Support)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
