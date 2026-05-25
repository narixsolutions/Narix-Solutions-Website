'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { useUI } from '@/store/ui';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Web Development', 'E-Commerce', 'Mobile Development', 'UI/UX Design'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { setShowProjectModal, setSelectedProject } = useUI();

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    setShowProjectModal(true);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm text-foreground/80 font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Featured <span className="bg-gradient-to-r from-accent to-emerald-700 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Showcase of our most impactful work across diverse industries and technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-accent to-emerald-800 text-accent-foreground shadow-lg shadow-accent/30'
                  : 'bg-background border border-border text-foreground/70 hover:border-accent/60 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-accent/10"
            >
              {/* Image Placeholder with gradient */}
              <div className="w-full h-48 bg-gradient-to-br from-accent/30 via-emerald-600/20 to-teal-500/10 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 group-hover:to-black/50 transition-colors duration-500"></div>
                <div className="relative text-center z-10">
                  <div className="text-6xl font-bold text-white/30 group-hover:text-white/60 transition-colors duration-500">
                    {project.title.split(' ')[0][0]}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                </div>
                <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{project.shortDescription}</p>

                {/* Stats Preview */}
                <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-border/50">
                  {project.stats.slice(0, 2).map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm font-bold bg-gradient-to-r from-accent to-teal-600 bg-clip-text text-transparent">{stat.value}</div>
                      <div className="text-xs text-foreground/60 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 2).map((tech, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-accent/15 text-accent rounded-full group-hover:bg-accent/25 transition-colors duration-300 font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-xs px-3 py-1 bg-border/50 text-foreground/60 rounded-full group-hover:bg-border transition-colors duration-300">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>

                {/* View More */}
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">View Project</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
