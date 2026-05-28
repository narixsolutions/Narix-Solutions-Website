'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, staggerItem, viewportOnce } from '@/lib/animations';

interface BaseProps {
  children: ReactNode;
  className?: string;
}

/**
 * Scroll-triggered fade+slide-up reveal. Respects prefers-reduced-motion.
 */
export function FadeInView({ children, className }: BaseProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends BaseProps {
  /** Initial delay before first child animates (seconds) */
  delay?: number;
  /** Interval between each child animation (seconds) */
  stagger?: number;
}

/**
 * Stagger container — children (AnimateItem) animate in sequence on scroll.
 * Renders a div with the provided className so grid/flex layouts are preserved.
 */
export function AnimateStagger({ children, className, delay = 0.05, stagger = 0.09 }: StaggerProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated child for use inside AnimateStagger.
 * Inherits animation state from parent — no initial/animate props needed.
 */
export function AnimateItem({ children, className }: BaseProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
