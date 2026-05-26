import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Database, Zap, Shield, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMS Development Services',
  description:
    'WordPress and custom CMS development that helps businesses manage content easily, publish faster, and grow online with confidence.',
};

export default function CMSDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
            <span className="text-sm font-semibold text-emerald-600">CMS Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-foreground mb-6 text-balance">
            CMS Development for{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h1>

          <p className="text-base sm:text-lg xl:text-xl text-foreground/70 mb-4 max-w-2xl">
            We build WordPress and custom content management systems that make it easy for your team to update pages, blogs, and products — without waiting on developers for every small change.
          </p>
          <p className="text-base sm:text-lg text-foreground/60 mb-8 max-w-2xl">
            Our CMS solutions are practical, SEO-friendly, and designed around how your business actually publishes content day to day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Discuss Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 border-2 border-emerald-500/30 text-foreground px-8 py-4 rounded-lg font-semibold hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-all duration-300"
            >
              View Related Work
            </Link>
          </div>
        </div>
      </section>

      {/* Why CMS Matters */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground mb-6">Why a Good CMS Matters</h2>
            <p className="text-base sm:text-lg xl:text-xl text-foreground/70 max-w-2xl mx-auto">
              Your website should work for your business — not slow it down. A well-built CMS saves time, keeps content fresh, and helps you stay visible online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
            {[
              {
                icon: Database,
                title: 'Easy Content Control',
                description: 'Update pages, images, and blog posts from a simple admin panel your team can learn quickly.',
              },
              {
                icon: TrendingUp,
                title: 'Built for SEO',
                description: 'Clean page structure, metadata controls, and fast loading to support better search visibility.',
              },
              {
                icon: Shield,
                title: 'Secure & Reliable',
                description: 'Role-based access, regular updates, and backups so your site stays protected and online.',
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 xl:p-8 hover:border-emerald-500/50 transition-all">
                  <IconComponent className="w-12 h-12 text-emerald-500 mb-4" />
                  <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-3">{item.title}</h3>
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
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground mb-6">What We Deliver</h2>
            <p className="text-base sm:text-lg xl:text-xl text-foreground/70 max-w-2xl mx-auto">
              From WordPress business sites to custom admin platforms — we match the right CMS approach to your team and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">
            {[
              {
                title: 'WordPress Development',
                description:
                  'Professional WordPress websites with custom themes, essential plugins, and an admin experience your team can manage confidently.',
                features: [
                  'Custom theme design and development',
                  'Plugin setup and configuration',
                  'WooCommerce store integration',
                  'Speed and performance optimization',
                  'Security hardening and updates',
                  'Backup and recovery setup',
                ],
              },
              {
                title: 'Headless CMS Solutions',
                description:
                  'Modern setups that separate content from design — ideal when you need a fast frontend and flexible content delivery.',
                features: [
                  'Next.js or React frontend',
                  'Content API architecture',
                  'Multi-page and multi-channel publishing',
                  'Real-time content updates',
                  'Structured content models',
                  'Integration with marketing tools',
                ],
              },
              {
                title: 'Custom CMS Development',
                description:
                  'When off-the-shelf tools do not fit, we build admin systems tailored to your workflows, data, and growth plans.',
                features: [
                  'Custom admin dashboard',
                  'Specialized content workflows',
                  'Unique data and page structures',
                  'Integration with existing tools',
                  'Reporting and content analytics',
                  'Scalable architecture for growth',
                ],
              },
              {
                title: 'CMS Migration & Upgrades',
                description:
                  'Move from an outdated platform to a modern CMS without losing content, SEO value, or business continuity.',
                features: [
                  'Content migration planning',
                  'Minimal-downtime migration approach',
                  'Content and media preservation',
                  'SEO URL and metadata preservation',
                  'Team training and documentation',
                  'Post-migration support',
                ],
              },
            ].map((solution, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 xl:p-8 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-4">{solution.title}</h3>
                <p className="text-foreground/70 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
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
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground mb-6">How We Work</h2>
            <p className="text-base sm:text-lg xl:text-xl text-foreground/70 max-w-2xl mx-auto">
              A clear, collaborative process so you know what to expect from discovery through launch and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery', desc: 'We learn your content needs, publishing workflow, and business goals.' },
              { step: '2', title: 'Design', desc: 'We plan page structure and admin areas that are easy for your team to use.' },
              { step: '3', title: 'Development', desc: 'We build your CMS with reliable performance, security, and clean structure.' },
              { step: '4', title: 'Launch & Support', desc: 'We go live, train your team, and provide ongoing help when you need it.' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
                {idx < 3 && <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground mb-6">Technologies We Use</h2>
            <p className="text-base sm:text-lg xl:text-xl text-foreground/70 max-w-2xl mx-auto">
              Trusted, modern tools chosen for reliability, performance, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {['WordPress', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Strapi', 'Contentful', 'Sanity', 'WooCommerce', 'Tailwind CSS', 'Vercel'].map((tech) => (
              <div key={tech} className="bg-card border border-border rounded-lg p-4 text-center hover:border-emerald-500/50 transition-all">
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
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground mb-6">CMS Pricing</h2>
            <p className="text-base sm:text-lg xl:text-xl text-foreground/70 max-w-2xl mx-auto">
              Transparent starting ranges for common CMS projects. We provide a detailed quote after understanding your scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
            {[
              { name: 'WordPress Website', price: '$800 - $3,000', desc: 'Business WordPress site with theme customization and essential plugins' },
              { name: 'Business CMS', price: '$3,000 - $7,000', desc: 'Custom layouts, advanced content types, and integration setup' },
              { name: 'Custom CMS Platform', price: '$7,000 - $15,000+', desc: 'Tailored CMS built around your workflows and growth requirements' },
            ].map((option, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 xl:p-8 hover:border-emerald-500/50 transition-all">
                <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-2">{option.name}</h3>
                <div className="text-3xl font-bold text-emerald-500 mb-4">{option.price}</div>
                <p className="text-foreground/70 mb-6">{option.desc}</p>
                <Link
                  href="/contact"
                  className="text-emerald-500 font-semibold hover:text-emerald-600 flex items-center gap-2"
                >
                  Get Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-foreground/60 mt-8 max-w-2xl mx-auto">
            Final pricing depends on content complexity, integrations, and design scope.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-6">Let&apos;s Build Something Reliable Together</h2>
          <p className="text-base sm:text-lg xl:text-xl text-white/90 mb-8">
            Tell us about your business goals and we&apos;ll help you choose the right CMS solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
