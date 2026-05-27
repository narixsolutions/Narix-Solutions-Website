import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Cog,
  Globe,
  Layout,
  ShoppingCart,
  TrendingUp,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Business websites, e-commerce, CMS, SEO, and custom web applications for startups and growing brands.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'web-development',
      icon: Globe,
      title: 'Business Website Development',
      description:
        'Professional websites designed to establish your online presence, generate leads, and build customer trust.',
      benefits: ['Responsive Design', 'SEO Friendly Structure', 'Fast Performance'],
      gradient: 'from-emerald-600 to-teal-700',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-Commerce Development',
      description:
        'Custom online stores with secure payments, product management, inventory systems, and optimized shopping experiences.',
      benefits: ['Payment Gateway Integration', 'Inventory Management', 'Conversion Focused Design'],
      gradient: 'from-lime-600 to-emerald-800',
    },
    {
      id: 'cms-development',
      icon: Layout,
      title: 'CMS Development',
      description:
        'Flexible CMS solutions that allow businesses to manage content, blogs, products, and pages with ease.',
      benefits: ['Easy Content Management', 'Scalable Architecture', 'SEO Optimized'],
      gradient: 'from-cyan-600 to-emerald-700',
    },
    {
      id: 'seo-marketing',
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description:
        'Data-driven SEO and marketing strategies that help businesses increase visibility, traffic, and customer acquisition.',
      benefits: ['Technical SEO', 'Google Optimization', 'Lead Generation'],
      gradient: 'from-emerald-500 to-lime-600',
    },
    {
      id: 'custom-web-applications',
      icon: Cog,
      title: 'Custom Web Applications',
      description:
        'Tailored web applications built to automate workflows, improve efficiency, and support business operations.',
      benefits: ['Dashboard Systems', 'Workflow Automation', 'Scalable Architecture'],
      gradient: 'from-teal-600 to-emerald-900',
    },
    {
      id: 'website-maintenance',
      icon: Wrench,
      title: 'Website Maintenance & Support',
      description:
        'Reliable maintenance services to keep your website secure, updated, optimized, and running smoothly.',
      benefits: ['Security Updates', 'Performance Monitoring', 'Technical Support'],
      gradient: 'from-emerald-700 to-teal-800',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Premium */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8 mb-14 sm:mb-16 xl:mb-20">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Digital Services</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground text-balance leading-tight tracking-tight">
              Custom Digital Solutions for <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Modern Businesses</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
              We help startups, brands, and growing businesses build high-performance websites, scalable platforms, and digital experiences designed for real business growth.
            </p>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
              From business websites to e-commerce platforms and custom CMS solutions — we turn ideas into reliable digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Premium */}
      <section className="py-20 sm:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-emerald-500/3 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link key={service.title} href={`/services/${service.id}`}>
                  <div className="group relative h-full bg-card border border-border rounded-2xl p-6 xl:p-8 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.gradient}`}></div>
                    
                    <div className="relative z-10 space-y-5">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-3 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 flex items-center justify-center`}>
                        <IconComponent size={32} />
                      </div>
                      
                      <div>
                        <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors text-balance">
                          {service.title}
                        </h3>
                        
                        <p className="text-foreground/70 leading-relaxed font-light">
                          {service.description}
                        </p>
                      </div>
                      
                      <ul className="space-y-3 py-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="text-sm text-foreground/65 flex items-center gap-3">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}></span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 border-t border-border flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                        <span>Learn More</span>
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-20 sm:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900"></div>
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white text-balance leading-tight">
              Need a Reliable Digital Partner?
            </h2>
            <p className="text-base sm:text-lg xl:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re launching a new business, upgrading your online presence, or building a custom platform — our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 xl:px-10 py-4 xl:py-5 bg-background text-accent rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-base xl:text-lg w-full sm:w-auto"
              >
                <span>Start Your Project</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 xl:px-10 py-4 xl:py-5 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-base xl:text-lg w-full sm:w-auto"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
