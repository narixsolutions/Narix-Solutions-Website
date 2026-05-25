'use client';

import { useUI } from '@/store/ui';
import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Zap } from 'lucide-react';
import Link from 'next/link';

export function ProjectModal() {
  const { showProjectModal, setShowProjectModal, selectedProject } = useUI();

  const project = selectedProject ? projects.find((p) => p.id === selectedProject) : null;

  if (!project) return null;

  return (
    <AnimatePresence>
      {showProjectModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowProjectModal(false)}
            className="fixed inset-0 bg-black/50 z-40"
          ></motion.div>

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowProjectModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors z-10"
            >
              <X size={24} className="text-foreground" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4">
                {project.category}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{project.title}</h2>

              {/* Description */}
              <p className="text-lg text-foreground/60 mb-8">{project.description}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="bg-background border border-border rounded-lg p-4">
                    <p className="text-sm text-foreground/70 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-accent">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-accent" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-8 p-6 bg-accent/5 border border-accent/20 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award size={18} className="text-accent" />
                  Key Highlights
                </h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>✓ Delivered on time and within budget</li>
                  <li>✓ Exceeded all performance metrics</li>
                  <li>✓ Client satisfaction: 5/5 stars</li>
                  <li>✓ Ongoing maintenance and support</li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/#contact"
                  className="w-full block text-center bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  onClick={() => setShowProjectModal(false)}
                >
                  Get Similar Results
                </Link>
                <button
                  onClick={() => setShowProjectModal(false)}
                  className="w-full text-center border border-border text-foreground py-3 rounded-lg font-semibold hover:border-accent hover:text-accent transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
