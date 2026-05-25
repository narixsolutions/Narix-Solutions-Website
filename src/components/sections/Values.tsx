'use client';

import { containerVariants, itemVariants } from '@/lib/animations';
import { Heart, Zap, Target, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Excellence',
    description: 'We are committed to delivering work of the highest quality in everything we do.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously push boundaries and embrace new technologies and methodologies.',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Our goal is to create meaningful results that drive real business growth.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Success comes through strong partnerships and open communication with our clients.',
  },
];

export function Values() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-foreground/70 font-medium">Core Values</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What We Stand For
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our values guide every decision and shape our culture as we grow.
          </p>
        </div>

        {/* Values Grid */}
        <div
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                variants={itemVariants}
                className="bg-background border border-border rounded-xl p-6 text-center hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-foreground/60 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
