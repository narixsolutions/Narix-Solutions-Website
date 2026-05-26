import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Cpu, Globe, Lock } from 'lucide-react';

import { TechnologyDetailImage } from '@/components/technology-detail-image';
import { getTechnology, getTechnologySlugs } from '@/data/technologies';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tech = getTechnology(slug);
  if (!tech) {
    return { title: 'Technology — NarixSolutions' };
  }
  return {
    title: `${tech.name} capabilities — NarixSolutions`,
    description: tech.introduction.slice(0, 155),
  };
}

export function generateStaticParams() {
  return getTechnologySlugs().map((slug) => ({ slug }));
}

export default async function TechnologyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tech = getTechnology(slug);

  if (!tech) {
    return (
      <main className="min-h-screen bg-background pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold">Technology not listed</h1>
          <p className="text-foreground/70">Check the technologies index — we rotate this catalog frequently.</p>
          <Link href="/technologies" className="inline-flex gap-2 text-accent font-semibold items-center justify-center">
            <ArrowLeft size={16} />
            Back to stack
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8 border-b border-border/60 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/65 hover:text-accent mb-10 transition-colors"
          >
            <ArrowLeft size={16} />
            Technology catalog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold text-accent">
              {tech.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">{tech.name}</h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl">{tech.tagline}</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <TechnologyDetailImage
              src={tech.heroImage}
              alt={`${tech.name} — engineering delivery and architecture`}
              priority
              rounded="2xl"
              maxHeight={320}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="space-y-5">
              <p className="text-foreground/75 leading-relaxed">{tech.introduction}</p>
              <TechnologyDetailImage
                src={tech.detailImage}
                alt={`${tech.name} — implementation and platform context`}
                rounded="xl"
                maxHeight={280}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center border border-accent/25">
              <Lock className="size-6 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                Security & vulnerability posture
              </h2>
              <p className="text-foreground/75 leading-relaxed">{tech.security}</p>
            </div>
          </div>

          {tech.capabilities.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Globe className="size-6 text-accent" />
                Delivery focus areas
              </h2>
              <p className="text-foreground/65 mb-8 max-w-3xl">
                How we stitch this capability into PWAs, public websites, admin consoles, integrations, and long-term roadmaps.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {tech.capabilities.map((cap) => (
                  <article key={cap.title} className="rounded-2xl border border-border bg-card p-6 space-y-4 shadow-sm">
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <Cpu className="size-5 text-accent" />
                      {cap.title}
                    </div>
                    <p className="text-foreground/75 text-sm leading-relaxed">{cap.description}</p>
                    <ul className="space-y-2 text-sm text-foreground/70 border-t border-border pt-4">
                      {cap.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/40">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-sm uppercase tracking-wide text-accent font-semibold mb-2">Next step</p>
            <h2 className="text-2xl font-bold text-foreground">{tech.cta.heading}</h2>
            <p className="text-foreground/70 mt-2">{tech.cta.description}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-8 py-3 font-semibold shadow-md hover:opacity-95 transition-opacity shrink-0"
          >
            {tech.cta.buttonLabel}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
