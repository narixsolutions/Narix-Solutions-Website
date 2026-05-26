import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { HOME_TECH_TILES } from '@/data/home';

export function HomeTechStackSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Technologies We Use</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Modern Technologies for Scalable Products</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
            We use reliable modern frameworks and tools to build secure, fast, scalable, and maintainable digital products.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {HOME_TECH_TILES.map((name) => (
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
  );
}
