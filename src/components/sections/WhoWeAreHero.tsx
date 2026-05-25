'use client';

export function WhoWeAreHero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm text-foreground/70 font-medium">Our Story</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Transforming Ideas into <span className="text-accent">Digital Excellence</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-foreground/60 mb-8 max-w-2xl mx-auto text-balance">
          For over a decade, NarixSolutions has been at the forefront of digital innovation, partnering with industry leaders to create transformative digital experiences.
        </p>

        {/* Mission Statement */}
        <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-3">Our Mission</h3>
          <p className="text-foreground/60">
            To empower businesses worldwide by delivering premium digital solutions that drive growth, inspire innovation, and create lasting impact in an ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
