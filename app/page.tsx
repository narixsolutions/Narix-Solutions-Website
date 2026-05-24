import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Database,
  Dumbbell,
  Globe,
  Megaphone,
  Palette,
  ShoppingCart,
  Smartphone,
  Zap,
} from 'lucide-react';

import { CASE_STUDIES } from '@/data/case-studies';
import { ExpertWhatsAppSection } from '@/components/sections/ExpertWhatsApp';

const HERO_IMG = '/images/hero.png';

const techTiles = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'MongoDB',
  'PostgreSQL',
  'Redis',
];

const homeStudySnippets = CASE_STUDIES.slice(0, 3);

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-24 pb-16 px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">Web Development & Software Agency</p>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Websites & Digital Products Built to <span className="text-accent">Grow Your Business</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                We design and develop high-performance websites, e-commerce platforms, CMS solutions, mobile apps, and digital experiences that help businesses scale online with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Book Free Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-all"
                >
                  Explore Projects
                </Link>
              </div>

              <div className="pt-4 space-y-2">
                {['Custom Business Websites', 'SEO & Performance Focused', 'Long-Term Technical Support'].map((label) => (
                  <div key={label} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    <span className="text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden bg-card border border-border shadow-sm">
              <Image src={HERO_IMG} alt="Collaborative engineering workspace" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/25 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp concierge — standalone CTA */}
      <ExpertWhatsAppSection />

      {/* Tech Stack Section */}
      <section className="py-12 px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Technologies We Use</p>
            <h2 className="text-3xl font-bold">Modern Technologies for Scalable Products</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
              We use reliable modern frameworks and tools to build secure, fast, scalable, and maintainable digital products.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techTiles.map((name) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-accent/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                  {name.slice(0, 2).toUpperCase()}
                </div>
                <p className="text-xs font-semibold text-foreground/85 text-center">{name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/technologies" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm">
              Explore Our Tech Expertise
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-4xl font-bold mb-3">Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                Icon: Globe,
                title: 'Custom Website Development',
                description: 'Responsive business websites designed for performance, branding, and lead generation.',
                href: '/services/web-development',
              },
              {
                Icon: ShoppingCart,
                title: 'E-Commerce Development',
                description: 'Modern online stores with secure payments, product management, and optimized shopping experiences.',
                href: '/services/ecommerce',
              },
              {
                Icon: Database,
                title: 'CMS Development',
                description: 'Flexible CMS platforms for businesses that need easy content management and scalability.',
                href: '/services/cms-development',
              },
              {
                Icon: Zap,
                title: 'SEO & Performance Optimization',
                description: 'Technical SEO, speed optimization, and structure improvements to increase visibility and conversions.',
                href: '/services/seo-marketing',
              },
              {
                Icon: Smartphone,
                title: 'Mobile App Development',
                description: 'Cross-platform mobile applications designed for smooth user experiences and scalable growth.',
                href: '/services/mobile-app-development',
              },
              {
                Icon: Megaphone,
                title: 'Digital Marketing',
                description: 'Growth-focused digital campaigns, social media marketing, and customer acquisition strategies.',
                href: '/services/seo-marketing',
              },
              {
                Icon: Dumbbell,
                title: 'Gym & Fitness Websites',
                description: 'Professional fitness websites with memberships, schedules, trainer profiles, and lead capture.',
                href: '/services/web-development',
              },
              {
                Icon: Palette,
                title: 'UI/UX Design',
                description: 'Modern user experiences and interface systems focused on usability and engagement.',
                href: '/services',
              },
            ].map((service) => {
              const Icon = service.Icon;
              return (
                <Link key={service.title} href={service.href}>
                  <div className="p-5 rounded-xl bg-card border border-border hover:border-accent/40 transition-all hover:bg-card/90 shadow-sm">
                    <div className="p-2.5 w-fit rounded-lg bg-accent/10 mb-3">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-16 px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Case Studies</p>
            <h2 className="text-4xl font-bold mb-3">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Selected client projects across business websites, e-commerce, healthcare, and service industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {homeStudySnippets.map((project) => (
              <Link key={project.slug} href={`/case-studies/${project.slug}`} className="group block">
                <div className="relative h-72 rounded-xl overflow-hidden bg-card border border-border hover:border-accent/40 transition-all shadow-sm">
                  <Image
                    src={project.heroImage}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                  <div className="absolute top-4 right-4 rounded-full bg-background/85 border border-border px-3 py-1 text-xs font-semibold text-foreground">{project.category}</div>
                  <div className="absolute inset-x-4 bottom-4 space-y-1">
                    <h3 className="text-xl font-bold text-white drop-shadow-sm">{project.title}</h3>
                    <p className="text-sm text-accent font-semibold">{Object.values(project.highlights)[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Why NarixSolutions</p>
            <h2 className="text-4xl font-bold">Why Businesses Work With NarixSolutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: 'Clear',
                label: 'Transparent Communication',
                desc: 'Regular updates and honest timelines throughout your project',
              },
              {
                stat: 'Modern',
                label: 'Modern Scalable Development',
                desc: 'Current frameworks and architecture built to grow with your business',
              },
              {
                stat: 'SEO+',
                label: 'SEO & Performance Focused',
                desc: 'Technical SEO and speed optimization built into every delivery',
              },
              {
                stat: '24/7',
                label: 'Long-Term Technical Support',
                desc: 'Maintenance and technical assistance after launch when you need it',
              },
              {
                stat: 'ROI',
                label: 'Business-Centered Solutions',
                desc: 'Development aligned with your goals, audience, and growth priorities',
              },
              {
                stat: 'On-Time',
                label: 'Reliable Project Delivery',
                desc: 'Structured milestones and dependable handoffs from kickoff to launch',
              },
            ].map((item) => (
              <div key={item.label} className="text-center p-5 rounded-xl bg-card border border-border hover:border-accent/35 transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">{item.stat}</div>
                <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">Let&apos;s Build Your Next Digital Product</h2>
          <p className="text-muted-foreground mb-6">
            Whether you need a business website, e-commerce platform, CMS solution, or mobile application — our team is ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
