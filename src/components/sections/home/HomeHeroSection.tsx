'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HERO_IMG = '/images/hero.png';

const HERO_BULLETS = [
  'Custom Business Websites',
  'SEO & Performance Focused',
  'Long-Term Technical Support',
];

const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const textItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

export function HomeHeroSection() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-14 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">

          {/* Left: text staggered in on mount */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textContainer}
            className="space-y-5"
          >
            <motion.p variants={textItem} className="text-sm font-semibold text-accent uppercase tracking-widest">
              Web Development & Software Agency
            </motion.p>

            <motion.h1 variants={textItem} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Websites & Digital Products Built to{' '}
              <span className="text-accent">Grow Your Business</span>
            </motion.h1>

            <motion.p variants={textItem} className="text-base sm:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-lg xl:max-w-xl">
              We design and develop high-performance websites, e-commerce platforms, CMS solutions, and digital experiences that help businesses scale online with confidence.
            </motion.p>

            <motion.div variants={textItem} className="flex flex-col sm:flex-row gap-3 pt-2">
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
            </motion.div>

            <motion.div variants={textItem} className="pt-4 space-y-2">
              {HERO_BULLETS.map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent shrink-0" />
                  <span className="text-muted-foreground">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: image fades + scales in with slight delay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easeOut }}
            className="relative h-72 sm:h-80 lg:h-[26rem] xl:h-[30rem] rounded-xl overflow-hidden bg-card border border-border shadow-sm"
          >
            <Image
              src={HERO_IMG}
              alt="Collaborative engineering workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/25 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
