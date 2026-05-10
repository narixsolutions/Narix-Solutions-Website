import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code2, Database, Globe, Target, Users, Zap } from 'lucide-react';

import { CASE_STUDIES } from '@/data/case-studies';
import { ExpertWhatsAppSection } from '@/components/sections/ExpertWhatsApp';

const HERO_IMG =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80';

const techTiles = ['React', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'MongoDB', 'Redis', 'Next.js'];

const homeStudySnippets = CASE_STUDIES.slice(0, 3);

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-24 pb-16 px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">Enterprise Solutions</p>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Build Your <span className="text-accent">Digital Future</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Premium web development and enterprise solutions for businesses ready to scale. We deliver results-driven technology that transforms your vision into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Start Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-all"
                >
                  View Work
                </Link>
              </div>

              <div className="pt-4 space-y-2">
                {['500+ Projects Delivered', '99.9% Uptime Guarantee', '24/7 Expert Support'].map((label) => (
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
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Technology Stack</p>
            <h2 className="text-3xl font-bold">Built with Modern Tools</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">Explore capability briefs inside Technologies — each lens covers security hardening & delivery patterns.</p>
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
              View detailed stack playbooks
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
              { Icon: Code2, title: 'Web Development', description: 'Custom enterprise-grade applications', href: '/services/web-development' },
              { Icon: Database, title: 'Backend Solutions', description: 'Scalable server architecture & databases', href: '/services/node-development' },
              { Icon: Zap, title: 'Performance', description: 'Optimized fast-loading applications', href: '/services' },
              { Icon: Target, title: 'E-Commerce', description: 'Complete online stores with payments', href: '/services/ecommerce' },
              { Icon: Users, title: 'Team Augmentation', description: 'Experienced developers & designers', href: '/services' },
              { Icon: Globe, title: 'Digital Strategy', description: 'Strategic consulting & transformation', href: '/services' },
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
            <h2 className="text-4xl font-bold mb-3">Recent Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Imagery uses placeholders — replace URLs in the case study data file when your screenshots are ready.
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
            <h2 className="text-4xl font-bold">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: '500+', label: 'Projects Delivered', desc: 'Proven track record of success' },
              { stat: '12+', label: 'Years Experience', desc: 'Industry-leading expertise' },
              { stat: '99.9%', label: 'Uptime', desc: 'Enterprise-grade reliability' },
              { stat: '50+', label: 'Countries Served', desc: 'Global client base' },
              { stat: '150+', label: 'Team Members', desc: 'Expert professionals' },
              { stat: '24/7', label: 'Support', desc: 'Always available for you' },
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">Let&apos;s discuss your project and find the perfect solution for your needs.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
