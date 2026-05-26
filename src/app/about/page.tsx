import { Metadata } from 'next';
import { Award, Users, Target, Zap } from 'lucide-react';
import { DeliveryTeamVisual, type DeliveryTeamVisualVariant } from '@/components/delivery-team-visual';

export const metadata: Metadata = {
  title: 'About Us - NarixSolutions',
  description:
    'NarixSolutions is a digital product agency building custom web applications, SaaS platforms, and scalable systems for growing businesses.',
};

export default function AboutPage() {
  const stats = [
    { label: 'Products Delivered', value: '45+', icon: Target },
    { label: 'Long-Term Clients', value: '18+', icon: Users },
    { label: 'Years in Production', value: '7+', icon: Award },
    { label: 'Industries Served', value: '9+', icon: Zap },
  ];

  const values = [
    {
      title: 'Product Thinking',
      description:
        'We start with business outcomes — user flows, priorities, and what success looks like before writing code.',
    },
    {
      title: 'Transparent Communication',
      description:
        'Clear timelines, honest trade-offs, and regular updates so you always know where the project stands.',
    },
    {
      title: 'Reliability',
      description:
        'Stable releases, tested integrations, and systems designed to run consistently in production.',
    },
    {
      title: 'Scalability',
      description:
        'Architectures that handle growth — from early traction to higher traffic, more data, and larger teams.',
    },
    {
      title: 'Ownership',
      description:
        'We take responsibility for delivery quality, not just task completion. Problems get solved, not passed along.',
    },
    {
      title: 'Long-Term Partnerships',
      description:
        'Many clients stay with us after launch for iterations, new features, and ongoing product improvements.',
    },
    {
      title: 'Attention to Detail',
      description:
        'Polished interfaces, clean APIs, and thoughtful edge cases — the small things clients and users notice.',
    },
  ];

  const deliveryTeams: {
    title: string;
    focus: string;
    bio: string;
    visual: DeliveryTeamVisualVariant;
  }[] = [
    {
      title: 'Cross-Functional Product Teams',
      focus: 'Aligned delivery ownership',
      bio: 'Lean, multidisciplinary teams that move from discovery to launch with shared accountability, faster decisions, and a clear focus on business outcomes.',
      visual: 'product',
    },
    {
      title: 'Frontend Engineering',
      focus: 'Interfaces built for growth',
      bio: 'We craft polished digital experiences across content-led websites, commerce journeys, and custom product interfaces with strong usability, performance, and long-term maintainability.',
      visual: 'frontend',
    },
    {
      title: 'Backend & Infrastructure',
      focus: 'Reliable systems at scale',
      bio: 'Robust backend foundations with thoughtfully structured data, resilient integrations, and scalable architectures designed for security, observability, and sustained growth.',
      visual: 'backend',
    },
    {
      title: 'Design & Product Strategy',
      focus: 'Clarity before execution',
      bio: 'Experience strategy, interface direction, and product planning that bring teams into alignment early and turn ideas into a more confident roadmap.',
      visual: 'design',
    },
  ];

  const whyWorkWithUs = [
    {
      title: 'Trusted by growing businesses',
      description: 'Startups and established teams rely on us for websites, platforms, and internal tools they use every day.',
    },
    {
      title: 'Long-term client relationships',
      description: 'We stay involved after launch — maintenance, feature work, and architecture decisions as products evolve.',
    },
    {
      title: 'Production-ready architecture',
      description: 'TypeScript, tested APIs, and cloud-native setups designed for real users, not demo environments.',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-foreground mb-6 text-balance">
            Digital products that <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">scale</span>
          </h1>
          <p className="text-base sm:text-lg xl:text-xl text-foreground/70">
            NarixSolutions partners with startups and growing businesses to design and build custom web applications, SaaS platforms, and eCommerce products — with the engineering discipline to support them long after launch.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-foreground/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">
              Help businesses solve real problems with software — not slide decks. We focus on clear requirements, solid architecture, and shipping work that holds up in production.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our best engagements are long-term: we learn your domain, improve what we have built together, and stay accountable as your product and team grow.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Vision</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">
              Make modern technology practical for every business — whether that means a new SaaS platform, a redesigned storefront, or replacing spreadsheets with a proper internal tool.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We want clients to modernize with confidence: reliable infrastructure, maintainable codebases, and teams that can iterate without starting over every year.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 sm:mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6 xl:p-8 bg-card rounded-xl border border-border hover:border-accent transition-all duration-300">
                <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 sm:mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
            {deliveryTeams.map((team) => (
              <div
                key={team.visual}
                className="h-full p-6 xl:p-8 bg-card rounded-xl border border-border hover:border-accent transition-all duration-300 text-left"
              >
                <DeliveryTeamVisual variant={team.visual} className="mx-0 mb-5" />
                <h3 className="text-xl font-bold text-foreground mb-2">{team.title}</h3>
                <p className="text-accent font-semibold mb-3">{team.focus}</p>
                <p className="text-foreground/70">{team.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 sm:mb-12 text-center">Why businesses work with us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
            {whyWorkWithUs.map((item) => (
              <div key={item.title} className="h-full p-6 xl:p-8 bg-card rounded-xl border border-border text-left">
                <Award className="w-12 h-12 text-accent mb-4" />
                <p className="font-bold text-foreground text-lg mb-3">{item.title}</p>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let&apos;s discuss how we can help you achieve your business goals through digital transformation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </section> */}
    </main>
  );
}
