'use client';

import { containerVariants, itemVariants } from '@/lib/animations';

const teamMembers = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    bio: 'Digital strategist with 15+ years of experience building high-growth tech companies.',
    specialty: 'Strategy & Leadership',
  },
  {
    name: 'James Chen',
    role: 'CTO & Co-Founder',
    bio: 'Full-stack engineer passionate about scalable architecture and cutting-edge technologies.',
    specialty: 'Engineering & Architecture',
  },
  {
    name: 'Emma Rodriguez',
    role: 'VP of Design',
    bio: 'Award-winning designer focused on creating intuitive and beautiful user experiences.',
    specialty: 'UX/UI Design',
  },
  {
    name: 'Michael Thompson',
    role: 'Head of Projects',
    bio: 'Project management expert ensuring flawless delivery on every single engagement.',
    specialty: 'Project Management',
  },
];

export function Team() {
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
            <span className="text-sm text-foreground/70 font-medium">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A diverse team of visionary leaders and experts dedicated to excellence and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              variants={itemVariants}
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-accent transition-colors group"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <span className="text-2xl font-bold text-accent">{member.name.charAt(0)}</span>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-accent font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-foreground/60 mb-3">{member.bio}</p>
              <div className="pt-3 border-t border-border">
                <p className="text-xs text-accent font-medium">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-border"
        >
          {[
            { number: '150+', label: 'Team Members' },
            { number: '12', label: 'Years in Business' },
            { number: '50+', label: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
