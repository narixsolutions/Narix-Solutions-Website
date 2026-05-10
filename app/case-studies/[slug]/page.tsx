import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, TrendingUp, Users, Zap } from 'lucide-react';

const caseStudiesData: Record<string, any> = {
  'ecommerce-platform': {
    title: 'Premium E-Commerce Platform for Fashion Retailer',
    category: 'E-Commerce',
    description: 'Full-featured e-commerce solution with multi-currency support and global shipping',
    overview: 'We built a complete e-commerce platform for a fashion retailer looking to expand internationally. The solution included a modern storefront, secure payment processing, inventory management, and analytics.',
    challenge: 'The client faced challenges with their legacy system: slow page loads, limited mobile experience, difficulty managing multiple currencies, and poor conversion rates. They needed a modern solution to compete globally.',
    solution: 'We designed and developed a responsive e-commerce platform using React with Next.js for SSR, Node.js backend, PostgreSQL for data storage, and Stripe for payments. Implemented advanced features like product recommendations, wishlists, and abandoned cart recovery.',
    results: {
      metrics: [
        { label: 'Revenue Growth', value: '+250%' },
        { label: 'Traffic Increase', value: '+180%' },
        { label: 'Conversion Rate', value: '+45%' },
        { label: 'Page Load Time', value: '-60%' },
      ],
    },
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    timeline: '6 months',
    team: 'Full-stack team of 8 developers',
  },
  'saas-platform': {
    title: 'Enterprise SaaS Project Management Platform',
    category: 'SaaS',
    description: 'Real-time project management tool for distributed teams',
    overview: 'We developed a comprehensive SaaS platform for team collaboration and project management. The platform serves 50K+ active users with real-time synchronization and advanced reporting features.',
    challenge: 'The market needed a modern alternative to existing project management tools with better real-time collaboration, offline support, and mobile optimization.',
    solution: 'Built with Next.js for frontend, Node.js for backend, MongoDB for flexible data storage, and Redis for real-time features. Implemented WebSockets for live updates, advanced permission systems, and a powerful API.',
    results: {
      metrics: [
        { label: 'Active Users', value: '50K+' },
        { label: 'System Uptime', value: '99.99%' },
        { label: 'Performance Gain', value: '+60%' },
        { label: 'User Satisfaction', value: '4.7★' },
      ],
    },
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'WebSockets', 'AWS', 'Docker'],
    timeline: '9 months',
    team: 'Full-stack team of 12 developers',
  },
  'mobile-app': {
    title: 'HIPAA-Compliant Healthcare Mobile App',
    category: 'Healthcare',
    description: 'Patient management and telemedicine platform',
    overview: 'Developed a fully HIPAA-compliant mobile app for healthcare providers to manage patients and conduct remote consultations securely.',
    challenge: 'Healthcare apps require strict compliance, secure data handling, HIPAA adherence, and seamless telemedicine integration while maintaining excellent user experience.',
    solution: 'Built with React Native for cross-platform support, Node.js backend with encryption, PostgreSQL with HIPAA compliance, and integrated Zoom for video consultations.',
    results: {
      metrics: [
        { label: 'Adoptions', value: '15K+' },
        { label: 'App Rating', value: '4.8★' },
        { label: 'User Retention', value: '85%' },
        { label: 'Compliance Score', value: '100%' },
      ],
    },
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Zoom API', 'AWS', 'Encryption'],
    timeline: '8 months',
    team: 'Mobile + backend team of 10 developers',
  },
  'dashboard-analytics': {
    title: 'Real-Time Analytics Dashboard System',
    category: 'Analytics',
    description: 'Processing and visualizing millions of events daily',
    overview: 'Built a scalable analytics platform processing 100+ million events daily with sub-100ms latency and 99.9% accuracy.',
    challenge: 'Handling massive data volumes in real-time while maintaining accuracy and providing instant insights to users globally.',
    solution: 'Used ClickHouse for data warehousing, React with D3.js for visualizations, Node.js for APIs, and Redis for caching. Implemented efficient data pipelines and optimized queries.',
    results: {
      metrics: [
        { label: 'Events Processed', value: '100M+' },
        { label: 'Query Latency', value: '<100ms' },
        { label: 'Data Accuracy', value: '99.9%' },
        { label: 'System Uptime', value: '99.98%' },
      ],
    },
    technologies: ['React', 'D3.js', 'Node.js', 'ClickHouse', 'Kafka', 'Redis', 'AWS'],
    timeline: '7 months',
    team: 'Data + full-stack team of 9 developers',
  },
  'marketplace': {
    title: 'Multi-Vendor Marketplace Platform',
    category: 'Marketplace',
    description: 'Connecting sellers and buyers at scale',
    overview: 'Developed a scalable marketplace platform with 5,000+ sellers and handling $10M+ in annual GMV.',
    challenge: 'Managing complex interactions between multiple sellers, buyers, payments, logistics, and maintaining platform stability at scale.',
    solution: 'Built with Next.js, Node.js, PostgreSQL with advanced indexing, Elasticsearch for search, and integrated payment and logistics APIs.',
    results: {
      metrics: [
        { label: 'GMV', value: '$10M+' },
        { label: 'Active Sellers', value: '5K+' },
        { label: 'Transactions/Month', value: '1M+' },
        { label: 'Seller Satisfaction', value: '4.6★' },
      ],
    },
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Stripe', 'AWS'],
    timeline: '10 months',
    team: 'Full-stack team of 15 developers',
  },
  'pos-system': {
    title: 'Advanced POS System for Retail Chain',
    category: 'Retail',
    description: 'Point-of-sale system for 200+ stores',
    overview: 'Implemented a comprehensive POS system serving 200+ retail stores with inventory management, analytics, and offline capabilities.',
    challenge: 'Needed offline functionality, real-time inventory sync, multi-store management, and fast performance in varied network conditions.',
    solution: 'Built with React and Electron for desktop app, Node.js backend, PostgreSQL for data, and implemented offline-first architecture.',
    results: {
      metrics: [
        { label: 'Retail Stores', value: '200+' },
        { label: 'Monthly Transactions', value: '5M+' },
        { label: 'Efficiency Gain', value: '+75%' },
        { label: 'System Availability', value: '99.9%' },
      ],
    },
    technologies: ['React', 'Electron', 'Node.js', 'PostgreSQL', 'SQLite'],
    timeline: '6 months',
    team: 'Full-stack team of 8 developers',
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = caseStudiesData[params.slug];
  return {
    title: `${study?.title} - Case Study - NarixSolutions`,
    description: study?.description || 'Case study',
  };
}

export function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudiesData[params.slug];

  if (!study) {
    return (
      <main className="min-h-screen bg-background pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <p className="text-foreground/70 mb-8">The case study you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/case-studies" className="text-blue-500 font-semibold hover:text-blue-600">
            Back to Case Studies
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-500/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies" className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2 mb-6">
            <ArrowRight size={18} className="rotate-180" />
            Back to Case Studies
          </Link>

          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-sm font-semibold text-blue-600">{study.category}</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            {study.title}
          </h1>

          <p className="text-xl text-foreground/70 mb-8">{study.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {study.results.metrics.map((metric: any, idx: number) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-4">
                <div className="text-sm text-foreground/70 mb-1">{metric.label}</div>
                <div className="text-2xl font-bold text-blue-500">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">{study.overview}</p>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              The Challenge
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-500" />
              Our Solution
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">{study.solution}</p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
              Results & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.results.metrics.map((metric: any, idx: number) => (
                <div key={idx} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
                  <div className="text-foreground/70 font-medium mb-2">{metric.label}</div>
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {study.technologies.map((tech: string) => (
                <div key={tech} className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg font-medium text-blue-600">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-foreground/70 text-sm mb-2">Project Duration</div>
              <div className="text-3xl font-bold text-foreground">{study.timeline}</div>
            </div>
            <div>
              <div className="text-foreground/70 text-sm mb-2">Team Composition</div>
              <div className="text-lg font-semibold text-foreground">{study.team}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss your project and create your success story.
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
