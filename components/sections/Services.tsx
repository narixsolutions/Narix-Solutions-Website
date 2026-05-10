'use client';

import { services } from '@/data/services';
import { useUI } from '@/store/ui';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

export function Services() {
  const { setShowServiceModal, setSelectedService } = useUI();

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowServiceModal(true);
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 hover:border-accent/60 transition-all">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm text-foreground/80 font-medium">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Services We <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">Deliver</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs and industry challenges. Expertise meets innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<any>;

            return (
              <div
                key={service.id}
                className="group relative bg-background border border-border rounded-xl p-8 hover:border-accent transition-all duration-500 cursor-pointer overflow-hidden"
                onClick={() => handleServiceClick(service.id)}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-accent/20"></div>

                <div className="relative z-10">
                  {/* Icon with glow */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300 transform group-hover:scale-110">
                    {IconComponent ? <IconComponent size={28} className="text-accent" /> : null}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{service.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 text-base mb-4 leading-relaxed">{service.description}</p>

                  {/* Price with styling */}
                  <p className="text-accent font-bold text-lg mb-6">{service.price}</p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
