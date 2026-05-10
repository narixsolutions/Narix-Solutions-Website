import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies - NarixSolutions',
  description: 'Real-world success stories and case studies showcasing transformative projects we have delivered.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ecommerce-platform',
      title: 'Premium E-Commerce Platform',
      description: 'Full-featured e-commerce solution for a fashion retailer with multi-currency support and global reach',
      category: 'E-Commerce',
      results: {
        sales: '+250%',
        traffic: '+180%',
        conversion: '+45%',
      },
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'bg-gradient-to-br from-blue-500 to-blue-600',
      slug: 'ecommerce-platform',
    },
    {
      id: 'saas-platform',
      title: 'Enterprise SaaS Platform',
      description: 'Complete project management tool for distributed teams with real-time collaboration',
      category: 'SaaS',
      results: {
        users: '50K+',
        uptime: '99.99%',
        performance: '+60%',
      },
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis'],
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
      slug: 'saas-platform',
    },
    {
      id: 'mobile-app',
      title: 'Mobile App for Healthcare',
      description: 'HIPAA-compliant mobile application for patient management and telemedicine',
      category: 'Healthcare',
      results: {
        adoption: '15K',
        rating: '4.8★',
        retention: '85%',
      },
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'bg-gradient-to-br from-green-500 to-teal-500',
      slug: 'mobile-app',
    },
    {
      id: 'dashboard-analytics',
      title: 'Real-Time Analytics Dashboard',
      description: 'Custom analytics dashboard processing millions of events daily with real-time insights',
      category: 'Analytics',
      results: {
        processing: '100M+',
        latency: '<100ms',
        accuracy: '99.9%',
      },
      technologies: ['React', 'D3.js', 'Node.js', 'ClickHouse'],
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
      slug: 'dashboard-analytics',
    },
    {
      id: 'marketplace',
      title: 'Multi-Vendor Marketplace',
      description: 'Scalable marketplace platform connecting thousands of sellers and millions of buyers',
      category: 'Marketplace',
      results: {
        gmv: '$10M+',
        sellers: '5K+',
        transactions: '1M+',
      },
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Elasticsearch'],
      image: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      slug: 'marketplace',
    },
    {
      id: 'pos-system',
      title: 'Advanced POS System',
      description: 'Comprehensive point-of-sale system for retail chain with inventory and analytics',
      category: 'Retail',
      results: {
        stores: '200+',
        transactions: '5M+/month',
        efficiency: '+75%',
      },
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Electron'],
      image: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      slug: 'pos-system',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
              Our <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Case Studies</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Real success stories from real clients. Discover how we&apos;ve transformed businesses across industries through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.slug}`}>
                <div className="group h-full bg-card rounded-xl border border-border hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer">
                  {/* Image */}
                  <div className={`w-full h-48 ${study.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4 inline-block px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-foreground">
                      {study.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-500 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">{study.description}</p>

                    {/* Results */}
                    <div className="space-y-2 mb-4 pb-4 border-b border-border">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between text-sm">
                          <span className="text-foreground/60 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-semibold text-blue-500">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-600 rounded">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-foreground/10 text-foreground/70 rounded">
                          +{study.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-blue-500 font-semibold group-hover:translate-x-2 transition-transform">
                      <span className="text-sm">View Case Study</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready for Your Next Success Story?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss your project and create a case study of your own success.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </main>
  );
}
