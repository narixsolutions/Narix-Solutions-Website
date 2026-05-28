'use client';

import { motion } from 'framer-motion';

import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechVentures Inc',
    text: 'NarixSolutions transformed our digital presence. The team was professional, innovative, and delivered beyond expectations.',
    rating: 5,
  },
  {
    name: 'Mark Chen',
    company: 'Global Brands Ltd',
    text: 'Exceptional work quality and outstanding customer service. They understood our vision and executed flawlessly.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    company: 'StartUp Innovations',
    text: 'Working with NarixSolutions was a game-changer for our business. Highly recommended!',
    rating: 5,
  },
  {
    name: 'David Williams',
    company: 'Enterprise Solutions',
    text: "Best digital agency partnership we've had. Their expertise and dedication are unmatched.",
    rating: 5,
  },
];

export function Testimonials() {
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
            <span className="text-sm text-foreground/70 font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Success stories from businesses we&apos;ve partnered with worldwide.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              className="bg-background border border-border rounded-xl p-8 hover:border-accent transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => i + 1).map((star) => (
                  <span key={star} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-foreground/70 mb-6 text-lg">&quot;{testimonial.text}&quot;</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
