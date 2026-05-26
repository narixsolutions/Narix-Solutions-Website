import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { CASE_STUDIES } from '@/data/case-studies';

const homeStudySnippets = CASE_STUDIES.slice(0, 3);

export function HomeCaseStudiesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Case Studies</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected client projects across business websites, e-commerce, healthcare, and service industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6 mb-8">
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
  );
}
