'use client';

import { motion } from 'framer-motion';

import { fadeUp, viewportOnce } from '@/lib/animations';

const steps = [
  { number: '01', title: 'Discovery', description: 'Understanding your goals, market, and vision' },
  { number: '02', title: 'Strategy', description: 'Crafting a comprehensive roadmap for success' },
  { number: '03', title: 'Design', description: 'Creating beautiful, user-focused interfaces' },
  { number: '04', title: 'Development', description: 'Building scalable, performant solutions' },
  { number: '05', title: 'Launch', description: 'Deploying with precision and confidence' },
];

const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function Process() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
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
            <span className="text-sm text-foreground/70 font-medium">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">How We Work</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A structured approach to delivering excellence at every stage.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: easeOut }}
              className="flex gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent text-accent-foreground font-bold text-2xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/60 text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
