import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HERO_IMG = '/images/hero.png';

const HERO_BULLETS = [
  'Custom Business Websites',
  'SEO & Performance Focused',
  'Long-Term Technical Support',
];

export function HomeHeroSection() {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 xl:pt-36 pb-14 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Web Development & Software Agency</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Websites & Digital Products Built to <span className="text-accent">Grow Your Business</span>
            </h1>

            <p className="text-base sm:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-lg xl:max-w-xl">
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
              {HERO_BULLETS.map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent shrink-0" />
                  <span className="text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-72 sm:h-80 lg:h-[26rem] xl:h-[30rem] rounded-xl overflow-hidden bg-card border border-border shadow-sm">
            <Image src={HERO_IMG} alt="Collaborative engineering workspace" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/25 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
