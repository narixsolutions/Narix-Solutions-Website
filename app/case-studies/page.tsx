import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { CASE_STUDIES } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies - NarixSolutions',
  description: 'Real-world success stories and projects showcasing how we ship resilient digital products.',
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-border/60 bg-card/30">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Proof of work</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-5 text-balance">Case studies</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Narratives, architectures, and outcomes from recent programs. Imagery uses curated placeholders — drop in your
            screenshots when assets are ready.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block h-full">
              <article className="h-full flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:border-accent/40 hover:shadow-md transition-all">
                <div className="relative aspect-[16/11] bg-muted">
                  <Image
                    src={study.heroImage}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/25 to-transparent" />
                  <span className="absolute top-4 right-4 rounded-full border border-border/70 bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
                    {study.category}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl font-bold text-white drop-shadow">{study.title}</h2>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-foreground/70 mb-5 line-clamp-3">{study.description}</p>

                  <dl className="space-y-2 mb-6 pb-6 border-b border-border">
                    {Object.entries(study.highlights).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between gap-4 text-sm">
                        <dt className="text-foreground/60 capitalize">{key}</dt>
                        <dd className="font-semibold text-accent">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-md border border-border bg-secondary/60 text-foreground/80">
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 4 && (
                      <span className="text-xs px-2.5 py-1 rounded-md border border-border text-foreground/60">
                        +{study.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    View project brief
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/40">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Ready for your own story?</h2>
          <p className="text-foreground/70">Brief us on KPIs and constraints—we&apos;ll co-author the delivery plan.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent text-accent-foreground px-8 py-3 font-semibold shadow-md hover:opacity-95 transition-opacity"
          >
            Speak with NarixSolutions
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
