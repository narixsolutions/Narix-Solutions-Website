import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Projects - NarixSolutions',
  description: 'Case studies and portfolio of successful projects we have delivered.',
};

export default function ProjectsPage() {
  const projects = [
    {
      id: 'ecommerce-platform',
      title: 'Premium E-Commerce Platform',
      description: 'Full-featured e-commerce solution for a fashion retailer with multi-currency support',
      category: 'E-Commerce',
      results: {
        sales: '+250%',
        traffic: '+180%',
        conversion: '+45%',
      },
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      id: 'saas-platform',
      title: 'Enterprise SaaS Platform',
      description: 'Complete project management tool for distributed teams',
      category: 'SaaS',
      results: {
        users: '50K+',
        uptime: '99.99%',
        performance: '+60%',
      },
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis'],
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      id: 'mobile-app',
      title: 'Mobile App for Healthcare',
      description: 'HIPAA-compliant mobile application for patient management',
      category: 'Healthcare',
      results: {
        adoption: '15K',
        rating: '4.8★',
        retention: '85%',
      },
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'bg-gradient-to-br from-green-500 to-teal-500',
    },
    {
      id: 'dashboard-analytics',
      title: 'Real-Time Analytics Dashboard',
      description: 'Custom analytics dashboard processing millions of events daily',
      category: 'Analytics',
      results: {
        processing: '100M+',
        latency: '<100ms',
        accuracy: '99.9%',
      },
      technologies: ['React', 'D3.js', 'Node.js', 'ClickHouse'],
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
    },
    {
      id: 'marketplace',
      title: 'Multi-Vendor Marketplace',
      description: 'Scalable marketplace connecting thousands of sellers and buyers',
      category: 'Marketplace',
      results: {
        gmv: '$10M+',
        sellers: '5K+',
        transactions: '1M+',
      },
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Elasticsearch'],
      image: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    },
    {
      id: 'pos-system',
      title: 'Advanced POS System',
      description: 'Comprehensive point-of-sale system for retail chain',
      category: 'Retail',
      results: {
        stores: '200+',
        transactions: '5M+/month',
        efficiency: '+75%',
      },
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Electron'],
      image: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
              Our <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Case Studies</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Proven success stories of businesses transformed through our digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="group relative h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                {/* Project Image Placeholder */}
                <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-black transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="text-white/30 group-hover:text-white/50 transition-all duration-300" size={48} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-foreground/70 mb-4">
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-t border-border">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div key={key}>
                        <div className="font-bold text-accent text-sm">{value}</div>
                        <div className="text-xs text-foreground/60 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded text-foreground/70">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-secondary rounded text-foreground/70">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  {/* View More Link */}
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:translate-x-2 transition-transform">
                    <span className="text-sm">View Case Study</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Create Your Success Story
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get inspired by what we&apos;ve done. Let&apos;s discuss how we can transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
