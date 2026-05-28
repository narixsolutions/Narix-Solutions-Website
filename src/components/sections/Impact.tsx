'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { containerVariants, itemVariants, fadeUp, viewportOnce } from '@/lib/animations';

const impacts = [
  {
    metric: '500+',
    label: 'Projects Delivered',
    description: 'From startups to Fortune 500 companies',
  },
  {
    metric: '$2.3B+',
    label: 'Client Revenue Generated',
    description: 'Direct impact on client business growth',
  },
  {
    metric: '98%',
    label: 'Client Satisfaction',
    description: 'Long-term partnerships and repeat clients',
  },
  {
    metric: '150+',
    label: 'Team Members',
    description: 'Diverse talent across 5 continents',
  },
];

export function Impact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-foreground/70 font-medium">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Numbers That Matter
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our success is measured by the success of our clients and the positive impact we create.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {impacts.map((impact) => (
            <motion.div
              key={impact.metric}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-8 text-center hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all"
            >
              <div className="text-4xl font-bold text-accent mb-2">{impact.metric}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{impact.label}</h3>
              <p className="text-sm text-foreground/60">{impact.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center pt-8 border-t border-border"
        >
          <p className="text-foreground/60 mb-4">Ready to be part of our success story?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
