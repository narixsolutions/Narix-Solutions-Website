'use client';

import { motion } from 'framer-motion';

import { HOME_BENEFITS } from '@/data/home';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

export function HomeBenefitsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Why NarixSolutions</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Why Businesses Work With NarixSolutions</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6"
        >
          {HOME_BENEFITS.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="text-center p-5 rounded-xl bg-card border border-border hover:border-accent/35 transition-colors"
            >
              <div className="text-3xl font-bold text-accent mb-2">{item.stat}</div>
              <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
