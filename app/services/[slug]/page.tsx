import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Building2, CheckCircle, Layers } from 'lucide-react';

import { getAllServicePageSlugs, getServicePage } from '@/data/service-pages';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) {
    return { title: 'Service — NarixSolutions' };
  }
  return {
    title: `${service.title} — NarixSolutions`,
    description: service.description,
  };
}

export function generateStaticParams() {
  return getAllServicePageSlugs().map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8 border-b border-border bg-card/40">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            All services
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 items-start">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Capability</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight mb-5">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-foreground/75 mb-6">{service.description}</p>
              <p className="text-foreground/65 leading-relaxed mb-8">{service.heroLead}</p>

              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {service.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-background/80 backdrop-blur px-4 py-3">
                    <p className="text-xs uppercase tracking-wide text-foreground/45 mb-1">{s.label}</p>
                    <p className="text-sm font-semibold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center gap-2 rounded-xl bg-accent text-accent-foreground px-7 py-3.5 font-semibold shadow-md hover:opacity-95 transition-opacity"
                >
                  Discuss this scope
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex justify-center items-center gap-2 rounded-xl border border-border px-7 py-3.5 font-semibold text-foreground hover:bg-secondary/80 transition-colors"
                >
                  See related work
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={service.heroImage}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — replace URLs in data/service-pages.ts */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-border/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground/60 mb-4">
            <Layers className="size-4 text-accent" />
            Program snapshots
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.gallery.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted/30">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-background/90 border border-border px-2 py-0.5 text-xs font-medium text-foreground/70">
                  Reference {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">What we deliver</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {service.features.map((feature) => (
              <div key={feature} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={22} />
                <p className="text-foreground/85 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">How we work with you</h2>
          <div className="relative space-y-0">
            <div className="absolute left-[22px] top-3 bottom-3 w-px bg-border hidden sm:block" aria-hidden />
            <ul className="space-y-8">
              {service.process.map((item, index) => (
                <li key={item.step} className="flex gap-5 sm:gap-6">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-accent to-emerald-800 text-accent-foreground flex items-center justify-center text-sm font-bold shadow-sm z-[1] border-2 border-background">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.step}</h3>
                    <p className="text-foreground/70 leading-relaxed max-w-2xl">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/40 border-y border-border/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground/60 mb-8">
            <Building2 className="size-4 text-accent" />
            Stack & sectors
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span key={tech} className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground/90">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Industries</h3>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {service.industries.map((industry) => (
                  <div
                    key={industry}
                    className="rounded-lg border border-border bg-card px-3 py-2.5 text-center text-sm font-medium text-foreground/85"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-border bg-card/60 p-10 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Kick off with a focused workshop</h2>
          <p className="text-foreground/70 mb-8">
            Share goals, constraints, and timelines — we respond with an outline you can circulate internally before any heavy commitment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-8 py-3.5 font-semibold shadow-md hover:opacity-95 transition-opacity"
          >
            Book a session
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
