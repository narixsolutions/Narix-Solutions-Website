'use client';

import Image from 'next/image';

export function About() {
  const features = [
    { title: 'Innovation First', description: 'We stay ahead of industry trends' },
    { title: 'Client Focused', description: 'Your success is our mission' },
    { title: 'Quality Assured', description: 'Rigorous testing on every project' },
    { title: 'Transparent', description: 'Clear communication always' },
    { title: 'Scalable', description: 'Built to grow with your business' },
    { title: 'Reliable', description: '99.9% uptime guarantee' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm text-foreground/80 font-medium">About Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Transforming <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">Businesses</span> Globally
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              With over a decade of experience, we&apos;ve partnered with industry leaders to create transformative digital experiences. Our expertise spans web development, design, and digital strategy.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We combine creative excellence with technical precision to deliver solutions that exceed expectations.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/about-image.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What Makes Us Different
          </h3>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A commitment to excellence that sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group relative bg-background border border-border rounded-xl p-8 hover:border-accent transition-all duration-500 overflow-hidden">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-xl font-bold bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
