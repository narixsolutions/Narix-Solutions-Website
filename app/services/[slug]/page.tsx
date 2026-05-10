import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

const serviceDetails: Record<string, any> = {
  'web-development': {
    title: 'Custom Web Development',
    description: 'Enterprise-grade web applications built with cutting-edge technologies',
    hero: 'We specialize in building high-performance web applications that scale with your business.',
    features: [
      'Full-stack development',
      'Responsive design',
      'API integration',
      'Database design',
      'Cloud deployment',
      'Performance optimization',
    ],
    process: [
      { step: 'Discovery', description: 'Understanding your business goals and requirements' },
      { step: 'Design', description: 'Creating intuitive user interfaces and architecture' },
      { step: 'Development', description: 'Building scalable, maintainable code' },
      { step: 'Testing', description: 'Comprehensive testing and quality assurance' },
      { step: 'Deployment', description: 'Smooth launch and ongoing support' },
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    industries: ['Finance', 'E-commerce', 'Healthcare', 'SaaS', 'Marketplace'],
  },
  'react-development': {
    title: 'React.js Development',
    description: 'Modern, responsive web applications using React',
    hero: 'Build fast, interactive user interfaces with React and modern JavaScript.',
    features: [
      'Component-based architecture',
      'Server-side rendering',
      'State management',
      'Performance optimization',
      'Testing & debugging',
      'SEO optimization',
    ],
    process: [
      { step: 'Planning', description: 'Component architecture and state management strategy' },
      { step: 'Development', description: 'Building reusable, maintainable components' },
      { step: 'Integration', description: 'Connecting with APIs and services' },
      { step: 'Optimization', description: 'Performance and bundle size optimization' },
      { step: 'Deployment', description: 'Production-ready deployment' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'SWR'],
    industries: ['SaaS', 'Startups', 'Media', 'EdTech', 'Fintech'],
  },
  // Add more service details as needed
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = serviceDetails[params.slug];
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} - NarixSolutions`,
    description: service.description,
  };
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb & Back Button */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            {service.title}
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            {service.description}
          </p>
          <p className="text-lg text-foreground/60 leading-relaxed mb-8">
            {service.hero}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature: string) => (
              <div key={feature} className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-lg font-medium text-foreground">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Our Process</h2>
          <div className="space-y-6">
            {service.process.map((item: any, index: number) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.step}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-card border border-border text-foreground font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.industries.map((industry: string) => (
              <div
                key={industry}
                className="p-4 rounded-lg bg-card border border-border text-center font-medium text-foreground"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s work together to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
