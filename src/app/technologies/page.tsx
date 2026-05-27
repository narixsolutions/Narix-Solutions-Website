import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { TechnologyImage } from '@/components/technology-image';
import { getTechnologiesByCategory } from '@/data/technologies';

export const metadata: Metadata = {
  title: 'Technologies',
  description:
    'Production-grade engineering stack across frontend, backend, cloud, and platform tooling — with implementation playbooks for scalable product delivery.',
};

export default function TechnologiesPage() {
  const groups = getTechnologiesByCategory();

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-8 px-4 sm:px-6 lg:px-8 border-b border-border/60 bg-card/30">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Engineering stack</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-foreground text-balance">Technologies</h1>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Production-ready ecosystems engineered for scalability, security, and long-term maintainability. Select a capability to review our delivery focus, architecture standards, and enterprise implementation approach.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 space-y-20">
        {groups.map(({ category, items }) => (
          <div key={category} className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-10">{category}</h2>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
              {items.map((item) => (
                <Link key={item.slug} href={`/technologies/${item.slug}`} className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/35 hover:shadow-md transition-all shadow-sm">
                  <div className="relative h-28 sm:h-32 shrink-0 overflow-hidden border-b border-border bg-gradient-to-br from-muted via-muted/70 to-muted/40">
                    <TechnologyImage
                      src={item.heroImage}
                      alt={`${item.name} technology`}
                      fit="cover"
                      className="transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 md:p-6 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{item.name}</h3>
                        <p className="text-xs font-semibold text-foreground/45 mt-1 uppercase tracking-wide">Deep dive →</p>
                      </div>
                      <ArrowRight className="size-5 text-accent shrink-0 translate-y-1 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <p className="text-sm text-foreground/70 line-clamp-3">{item.tagline}</p>
                    <span className="inline-flex text-xs text-foreground/50">Since {item.year}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/40">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Need a stack aligned to your product roadmap?</h2>
          <p className="text-foreground/70">
            We assess scale requirements, compliance constraints, integration needs, and delivery timelines — then recommend a pragmatic architecture your team can execute with confidence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent text-accent-foreground px-8 py-3 font-semibold shadow-md hover:opacity-95 transition-opacity"
          >
            Schedule a stack consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
