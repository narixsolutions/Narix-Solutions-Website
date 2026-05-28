'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { HOME_SERVICE_CARDS } from '@/data/home';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

export function HomeServicesSection() {
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
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5"
        >
          {HOME_SERVICE_CARDS.map((service) => {
            const Icon = service.Icon;
            return (
              <motion.div key={service.title} variants={staggerItem}>
                <Link href={service.href} className="block h-full">
                  <div className="h-full p-5 rounded-xl bg-card border border-border hover:border-accent/40 transition-all hover:bg-card/90 shadow-sm">
                    <div className="p-2.5 w-fit rounded-lg bg-accent/10 mb-3">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
