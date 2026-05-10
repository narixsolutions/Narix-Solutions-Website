import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code2, Database, Zap, Target, Users, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Compact Professional */}
      <section className="pt-24 pb-16 px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-5">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">Enterprise Solutions</p>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Build Your <span className="text-accent">Digital Future</span>
              </h1>
              
              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
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
                  className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-foreground/5 transition-all"
                >
                  View Work
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent" />
                  <span className="text-foreground/70">500+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent" />
                  <span className="text-foreground/70">99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent" />
                  <span className="text-foreground/70">24/7 Expert Support</span>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-80 rounded-lg overflow-hidden bg-card border border-border">
              <Image
                src="/images/hero/development.jpg"
                alt="Web development workspace"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Technology Stack</p>
            <h2 className="text-3xl font-bold">Built with Modern Tools</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'React', icon: '/images/tech-stack/react.jpg' },
              { name: 'Node.js', icon: '/images/tech-stack/nodejs.jpg' },
              { name: 'TypeScript', icon: '/images/tech-stack/typescript.jpg' },
              { name: 'Tailwind', icon: '/images/tech-stack/tailwind.jpg' },
              { name: 'PostgreSQL', icon: '/images/tech-stack/postgresql.jpg' },
              { name: 'MongoDB', icon: '/images/tech-stack/mongodb.jpg' },
              { name: 'Redis', icon: '/images/tech-stack/redis.jpg' },
              { name: 'Next.js', icon: '/images/tech-stack/react.jpg' },
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-background border border-border hover:border-accent transition-colors">
                <div className="relative w-10 h-10">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-medium text-foreground/80 text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-4xl font-bold mb-3">Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs</p>
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
                  <div className="p-5 rounded-lg bg-card border border-border hover:border-accent transition-all hover:bg-card/80">
                    <div className="p-2.5 w-fit rounded-lg bg-accent/10 mb-3">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-foreground/70 text-sm">{service.description}</p>
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
            <p className="text-foreground/70 max-w-2xl mx-auto">Projects that showcase our expertise and deliver measurable results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'E-Commerce Platform', metric: '250% Revenue Growth', details: 'Custom Shopify integration with advanced analytics', image: '/images/hero/office.jpg', slug: 'ecommerce-platform' },
              { title: 'SaaS Dashboard', metric: '50K+ Users', details: 'Real-time collaboration platform for teams', image: '/images/hero/developers.jpg', slug: 'saas-platform' },
            ].map((project) => (
              <Link key={project.title} href={`/case-studies/${project.slug}`} className="group">
                <div className="relative h-56 rounded-lg overflow-hidden bg-card border border-border hover:border-accent transition-all">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-accent font-semibold text-sm mb-2">{project.metric}</p>
                    <p className="text-xs text-foreground/80">{project.details}</p>
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
            ].map((item, idx) => (
              <div key={idx} className="text-center p-5 rounded-lg bg-card border border-border hover:border-accent transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">{item.stat}</div>
                <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-foreground/70 mb-6">Let's discuss your project and find the perfect solution for your needs.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
