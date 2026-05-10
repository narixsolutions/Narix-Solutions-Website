import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Database, Zap, Shield, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMS Development Services - NarixSolutions',
  description: 'Expert WordPress, custom CMS, and headless CMS development for enterprise content management.',
};

export default function CMSDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-sm font-semibold text-cyan-600">CMS Solutions</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Powerful <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">CMS Development</span>
          </h1>

          <p className="text-xl text-foreground/70 mb-8 max-w-2xl">
            WordPress, custom CMS, and headless solutions designed for modern content management with scalability, security, and SEO in mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Get Your CMS Solution
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500/30 text-foreground px-8 py-4 rounded-lg font-semibold hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Why CMS Matters */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Why CMS Development Matters</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A powerful CMS is the foundation of digital content strategy. It empowers teams to publish, manage, and optimize content without technical dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'Content Control',
                description: 'Manage all your content from an intuitive admin panel without requiring developer assistance.',
              },
              {
                icon: TrendingUp,
                title: 'SEO Optimization',
                description: 'Built-in SEO features, metadata management, and structured data for better search rankings.',
              },
              {
                icon: Shield,
                title: 'Security First',
                description: 'Enterprise-grade security with role-based access, content versioning, and audit trails.',
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-card border border-border rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                  <IconComponent className="w-12 h-12 text-cyan-500 mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Our CMS Solutions</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We offer multiple CMS platforms tailored to your specific needs and scalability requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'WordPress Development',
                description: 'Leverage the world\'s most popular CMS platform with custom themes, plugins, and optimization.',
                features: [
                  'Custom theme development',
                  'Plugin integration and customization',
                  'WooCommerce e-commerce integration',
                  'Performance optimization',
                  'Security hardening',
                  'Backup and recovery systems',
                ],
              },
              {
                title: 'Headless CMS Solutions',
                description: 'Decouple content from presentation for maximum flexibility across multiple channels.',
                features: [
                  'Next.js or React frontend',
                  'Content API architecture',
                  'Multi-channel publishing',
                  'Real-time content updates',
                  'GraphQL API support',
                  'Advanced workflow automation',
                ],
              },
              {
                title: 'Custom CMS Development',
                description: 'Built-from-scratch CMS tailored to your unique business processes and requirements.',
                features: [
                  'Custom admin interface',
                  'Specialized content workflows',
                  'Unique data models',
                  'Integration with legacy systems',
                  'Custom reporting dashboards',
                  'Scalable architecture',
                ],
              },
              {
                title: 'CMS Migration & Upgrades',
                description: 'Safely migrate from legacy systems or upgrade to modern CMS platforms.',
                features: [
                  'Data migration strategy',
                  'Zero-downtime migration',
                  'Content preservation',
                  'SEO preservation',
                  'User training and documentation',
                  'Post-migration support',
                ],
              },
            ].map((solution, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">{solution.title}</h3>
                <p className="text-foreground/70 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Our Development Process</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A proven methodology ensuring your CMS is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery', desc: 'Understanding your content strategy, workflows, and technical requirements' },
              { step: '2', title: 'Design', desc: 'Creating intuitive admin interfaces and content architecture' },
              { step: '3', title: 'Development', desc: 'Building robust, scalable CMS with security and performance' },
              { step: '4', title: 'Launch & Support', desc: 'Deployment, training, and ongoing maintenance' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
                {idx < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Technologies We Use</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Built with modern, reliable technologies for performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['WordPress', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'AWS', 'Strapi', 'Contentful', 'Sanity', 'GraphQL'].map((tech) => (
              <div key={tech} className="bg-card border border-border rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all">
                <span className="font-semibold text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">CMS Pricing</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Transparent pricing for different CMS solutions and project scopes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'WordPress CMS', price: '$4,500 - $8,000', desc: 'Custom WordPress site with plugins and theme customization' },
              { name: 'Headless CMS', price: '$7,000 - $15,000', desc: 'Modern headless CMS with multi-channel support' },
              { name: 'Custom CMS', price: '$10,000 - $25,000+', desc: 'Fully custom built CMS for enterprise needs' },
            ].map((option, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-2">{option.name}</h3>
                <div className="text-3xl font-bold text-cyan-500 mb-4">{option.price}</div>
                <p className="text-foreground/70 mb-6">{option.desc}</p>
                <Link
                  href="/contact"
                  className="text-cyan-500 font-semibold hover:text-cyan-600 flex items-center gap-2"
                >
                  Get Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready for a Modern CMS?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss your content management needs and build the perfect solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Start Your CMS Project
          </Link>
        </div>
      </section>
    </main>
  );
}
