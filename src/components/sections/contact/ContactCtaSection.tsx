import { ArrowRight } from 'lucide-react';

export function ContactCtaSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900"></div>
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-balance leading-tight">
            Ready to discuss your next digital product?
          </h2>
          <p className="text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Book a free consultation and get expert guidance on your website, SaaS platform, or
            custom software project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#contact-form"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-background text-accent rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-800"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform duration-300"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
