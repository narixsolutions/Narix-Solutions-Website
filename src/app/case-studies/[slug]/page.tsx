import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Award, Layers, ShieldCheck, TrendingUp, Zap } from 'lucide-react';

import { getAllCaseStudySlugs, getCaseStudy } from '@/data/case-studies';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return { title: 'Case study' };
  }
  return {
    title: `${study.title} — Case Study`,
    description: study.description,
  };
}

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return (
      <main className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Case study not found</h1>
          <p className="text-foreground/70 mb-8">The project you&apos;re looking for isn&apos;t in our catalog yet.</p>
          <Link href="/case-studies" className="text-accent font-semibold hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to case studies
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-16 pb-6 px-4 sm:px-6 lg:px-8 border-b border-border/60 bg-card/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="/case-studies"
              className="text-sm font-semibold text-foreground/70 hover:text-accent inline-flex items-center gap-2 transition-colors"
            >
              <ArrowLeft size={16} />
              All case studies
            </Link>

            <div className="inline-flex px-4 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent text-sm font-semibold">
              {study.category}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight mb-6">
            {study.title}
          </h1>
          {study.heroSubtitle && (
            <p className="text-base md:text-lg text-accent font-semibold mb-3">{study.heroSubtitle}</p>
          )}
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl">{study.description}</p>
          {study.heroDescription && <p className="text-base text-foreground/65 max-w-4xl mt-4">{study.heroDescription}</p>}

          {study.tags && study.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2.5">
              {study.tags.map((tag) => (
                <span key={tag} className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm text-foreground/80">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {(study.clientWebsite || study.location || study.projectType) && (
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {study.clientWebsite && (
                <a
                  href={study.clientWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-border bg-background/80 p-4 hover:border-accent/30 transition-colors"
                >
                  <p className="text-xs uppercase tracking-wide text-foreground/50 mb-1">Client website</p>
                  <p className="text-sm font-semibold text-foreground break-all">{study.clientWebsite}</p>
                </a>
              )}
              {study.location && (
                <div className="rounded-xl border border-border bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-wide text-foreground/50 mb-1">Location</p>
                  <p className="text-sm font-semibold text-foreground">{study.location}</p>
                </div>
              )}
              {study.projectType && (
                <div className="rounded-xl border border-border bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-wide text-foreground/50 mb-1">Project type</p>
                  <p className="text-sm font-semibold text-foreground">{study.projectType}</p>
                </div>
              )}
            </div>
          )}

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-[#0b1220] p-3 md:p-4">
              <Image
                src={study.heroImage}
                alt={`${study.title} hero`}
                fill
                className="object-contain p-3 md:p-4"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {study.metrics.slice(0, 4).map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-background/80 backdrop-blur-sm p-4 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-wide text-foreground/50 mb-2">{metric.label}</p>
                  <p className="text-base md:text-lg font-semibold text-accent leading-snug">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery strip — swap with product shots later */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {study.gallery.map((src, idx) => (
              <div key={`${src}-${idx}`} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted/20">
                <Image
                  src={src}
                  alt={`${study.title} workspace ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          {study.sections && study.sections.length > 0 && (
            <div className="mt-14 space-y-8">
              {study.sections.map((section, sectionIdx) => (
                <article
                  key={section.title}
                  className="rounded-2xl border border-border bg-card/80 p-5 md:p-7 shadow-sm hover:border-accent/30 transition-colors"
                >
                  <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div className={sectionIdx % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border bg-[#0b1220] p-3 md:p-4">
                        <Image
                          src={section.images[0]}
                          alt={`${study.title} ${section.title}`}
                          fill
                          className="object-contain p-3 md:p-4"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                      </div>
                    </div>

                    <div className={sectionIdx % 2 === 1 ? 'lg:order-1' : ''}>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{section.title}</h3>
                      <p className="text-foreground/70 mb-5 leading-relaxed">{section.description}</p>

                      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-5">
                        {section.features.map((feature) => (
                          <li key={feature} className="text-sm text-foreground/75 flex items-start gap-2">
                            <span className="mt-1 size-1.5 rounded-full bg-accent shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {section.techStack && section.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {section.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/85"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-14">
          <article className="space-y-4">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Layers className="size-5 text-accent" />
              Overview
            </div>
            <p className="text-lg text-foreground/75 leading-relaxed">{study.overview}</p>
          </article>

          <article className="space-y-4">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Award className="size-5 text-amber-500" />
              The challenge
            </div>
            <p className="text-lg text-foreground/75 leading-relaxed">{study.challenge}</p>
          </article>

          <article className="space-y-4">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Zap className="size-5 text-accent" />
              Our solution
            </div>
            <p className="text-lg text-foreground/75 leading-relaxed">{study.solution}</p>
          </article>

          <article className="space-y-6">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <TrendingUp className="size-5 text-emerald-500" />
              Results & impact
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-card px-6 py-5 shadow-sm hover:border-accent/30 transition-colors"
                >
                  <p className="text-sm text-foreground/60 mb-2">{metric.label}</p>
                  <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="space-y-4">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <ShieldCheck className="size-5 text-accent" />
              Technologies & tools
            </div>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium text-foreground/85"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>

          <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-sm uppercase tracking-wide text-foreground/50 mb-2">Timeline</p>
              <p className="text-2xl font-bold text-foreground">{study.timeline}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-foreground/50 mb-2">Team</p>
              <p className="text-lg text-foreground">{study.team}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/50">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{study.cta?.heading ?? 'Planning something similar?'}</h2>
          <p className="text-foreground/70">{study.cta?.description ?? "We'll assemble a roadmap, staffing model, and risk register tailored to your constraints."}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-8 py-3 font-semibold shadow-md hover:opacity-95 transition-opacity"
          >
            {study.cta?.buttonText ?? 'Start the conversation'}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
