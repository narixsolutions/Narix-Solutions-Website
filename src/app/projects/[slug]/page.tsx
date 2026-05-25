import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

const projectDetails: Record<string, any> = {
  'ecommerce-platform': {
    title: 'Premium E-Commerce Platform',
    category: 'E-Commerce',
    overview: 'Complete redesign and development of a fashion retailer&apos;s e-commerce platform, resulting in significant revenue growth.',
    challenge: 'The client faced declining sales due to outdated platform, poor user experience, and lack of modern features.',
    solution: 'Built a modern, scalable e-commerce platform with advanced features, seamless checkout, and analytics.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    metrics: [
      { label: 'Sales Growth', value: '+250%' },
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'Traffic Increase', value: '+180%' },
      { label: 'Page Speed', value: '2.1s' },
    ],
    testimonial: 'The team delivered an exceptional platform that exceeded our expectations. Our revenue tripled within the first year.',
    testimonialAuthor: 'Sarah Johnson, CEO',
  },
  'saas-platform': {
    title: 'Enterprise SaaS Platform',
    category: 'SaaS',
    overview: 'Built a comprehensive project management platform for distributed teams with real-time collaboration.',
    challenge: 'Need for a scalable platform supporting thousands of concurrent users with real-time updates.',
    solution: 'Developed a robust SaaS platform with advanced features, real-time collaboration, and enterprise security.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Socket.io', 'AWS'],
    metrics: [
      { label: 'Active Users', value: '50K+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Response Time', value: '<100ms' },
      { label: 'Daily Active Users', value: '12K+' },
    ],
    testimonial: 'Exceptional work! The platform is fast, reliable, and our team loves using it daily.',
    testimonialAuthor: 'Michael Chen, Product Lead',
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectDetails[params.slug];
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.title} - NarixSolutions`,
    description: project.overview,
  };
}

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default function ProjectDetailPage({ params }: Readonly<{ params: { slug: string } }>) {
  const project = projectDetails[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/90 transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/25 mb-6">
            <span className="text-sm font-semibold text-accent">{project.category}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            {project.title}
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            {project.overview}
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.metrics.map((metric: any) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text mb-2">
                  {metric.value}
                </div>
                <p className="text-foreground/70">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-3 rounded-lg bg-card border border-border text-foreground font-medium hover:border-accent/45 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/25 rounded-2xl">
            <div className="text-4xl text-accent mb-4">"</div>
            <p className="text-2xl text-foreground mb-6 leading-relaxed italic">
              {project.testimonial}
            </p>
            <p className="text-lg font-semibold text-foreground">{project.testimonialAuthor}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Inspired by This Project?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let&apos;s discuss how we can help you achieve similar results for your business.
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
