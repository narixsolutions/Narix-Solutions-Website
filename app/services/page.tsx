import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code2, Database, Zap, ShoppingCart, Smartphone, TrendingUp, Cog, Layout } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - NarixSolutions',
  description: 'Premium digital transformation services including web development, mobile apps, e-commerce, and more.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'web-development',
      icon: Code2,
      title: 'Custom Web Development',
      description: 'Enterprise-grade web applications built with cutting-edge technologies and best practices.',
      benefits: ['High Performance', 'Scalable Architecture', 'Security First'],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      id: 'react-development',
      icon: Smartphone,
      title: 'React.js Development',
      description: 'Modern, responsive web applications using React with TypeScript and best patterns.',
      benefits: ['Fast & Responsive', 'SEO Optimized', 'Modern UX'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'node-development',
      icon: Database,
      title: 'Node.js Development',
      description: 'Robust backend services and APIs built with Node.js for scalable applications.',
      benefits: ['High Concurrency', 'Real-time Capable', 'Microservices Ready'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-Commerce Development',
      description: 'Complete e-commerce solutions with payment integration, inventory, and analytics.',
      benefits: ['Payment Gateway Integration', 'Inventory Management', 'Analytics'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 'pos-billing',
      icon: Zap,
      title: 'POS Billing Software',
      description: 'Custom point-of-sale systems designed for retail and restaurant operations.',
      benefits: ['Real-time Reporting', 'Multi-outlet Support', 'Offline Capable'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'seo-marketing',
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive digital marketing services to grow your online presence.',
      benefits: ['Ranking Improvement', 'Traffic Growth', 'Lead Generation'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      id: 'automation',
      icon: Cog,
      title: 'Business Automation',
      description: 'Automate your business processes to increase efficiency and reduce costs.',
      benefits: ['Process Optimization', 'Cost Reduction', 'Productivity Boost'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      id: 'cms-development',
      icon: Layout,
      title: 'CMS Development',
      description: 'WordPress, headless CMS, and custom content management solutions.',
      benefits: ['Easy Content Management', 'SEO-Friendly', 'Multi-channel Publishing'],
      gradient: 'from-cyan-500 to-blue-500',
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

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-20">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground text-balance leading-tight tracking-tight">
              Enterprise Digital <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive solutions designed to transform your business, accelerate digital innovation, and drive measurable growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Premium */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-500/3 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <div className="group relative h-full bg-white dark:bg-slate-900/50 border border-gray-200/50 dark:border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.gradient}`}></div>
                    
                    <div className="relative z-10 space-y-5">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-3 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 flex items-center justify-center`}>
                        <IconComponent size={32} />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
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
                      
                      <div className="pt-4 border-t border-gray-200/50 dark:border-slate-700/50 flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-white text-balance leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss your project and find the perfect solution to accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
