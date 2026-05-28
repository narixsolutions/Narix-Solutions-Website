'use client';

import { motion } from 'framer-motion';

import { containerVariants, itemVariants, fadeUp, viewportOnce } from '@/lib/animations';

const milestones = [
  {
    year: '2013',
    title: 'Foundation',
    description: 'NarixSolutions founded with a vision to transform digital experiences globally.',
  },
  {
    year: '2015',
    title: 'First 100 Clients',
    description: 'Reached milestone of serving 100+ satisfied clients across multiple continents.',
  },
  {
    year: '2017',
    title: 'Team Expansion',
    description: 'Grew to 50+ team members and opened offices in 5 countries.',
  },
  {
    year: '2019',
    title: 'Industry Recognition',
    description: 'Won multiple awards for design excellence and innovation.',
  },
  {
    year: '2021',
    title: 'Scale & Success',
    description: 'Surpassed 500 completed projects with 98% client satisfaction rate.',
  },
  {
    year: 'Present',
    title: 'Leading the Future',
    description: 'Continuing to innovate with 150+ team members and a global presence.',
  },
];

export function History() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-foreground/70 font-medium">Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Journey</h2>
          <p className="text-lg text-foreground/60">
            From a startup vision to a global digital agency, our story is one of growth, innovation, and unwavering commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="space-y-6"
        >
          {milestones.map((milestone) => (
            <motion.div
              key={milestone.year}
              variants={itemVariants}
              className="flex gap-6 items-start md:items-center"
            >
              <div className="flex-shrink-0 w-24 md:w-32">
                <div className="text-3xl font-bold text-accent">{milestone.year}</div>
              </div>
              <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                <p className="text-foreground/60">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
