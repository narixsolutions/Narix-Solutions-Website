export function ContactHeroSection() {
  return (
    <section className="pt-28 sm:pt-32 lg:pt-36 xl:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground text-balance leading-tight tracking-tight">
          Let&apos;s Build Something{' '}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Exceptional
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
          Whether you&apos;re launching a startup, scaling a SaaS platform, or modernizing your
          business, our team helps transform ideas into high-performance digital products.
        </p>
      </div>
    </section>
  );
}
