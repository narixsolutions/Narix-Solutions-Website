'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { fadeUp, viewportOnce } from '@/lib/animations';

export function HomeFinalCtaSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">Let&apos;s Build Your Next Digital Product</h2>
        <p className="text-muted-foreground mb-6">
          Whether you need a business website, e-commerce platform, or CMS solution — our team is ready to help.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
        >
          Start Your Project
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
