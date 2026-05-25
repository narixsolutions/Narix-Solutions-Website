'use client';

import { useUI } from '@/store/ui';
import { services } from '@/data/services';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Link from 'next/link';

export function ServiceModal() {
  const { showServiceModal, setShowServiceModal, selectedService } = useUI();

  const service = selectedService ? services.find((s) => s.id === selectedService) : null;

  if (!service) return null;

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <AnimatePresence>
      {showServiceModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowServiceModal(false)}
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
              onClick={() => setShowServiceModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors z-10"
            >
              <X size={24} className="text-foreground" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Icon */}
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                {IconComponent ? <IconComponent size={32} className="text-accent" /> : null}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>

              {/* Description */}
              <p className="text-lg text-foreground/60 mb-6">{service.description}</p>

              {/* Price */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8">
                <p className="text-sm text-foreground/70">Starting Price</p>
                <p className="text-2xl font-bold text-accent">{service.price}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={16} className="text-accent" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description Text */}
              <div className="mb-8 p-6 bg-background border border-border rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Why This Service?</h4>
                <p className="text-foreground/60 text-sm">
                  Our {service.title.toLowerCase()} service is designed to maximize your ROI and deliver measurable business results. We combine strategic insights with technical expertise to create solutions that truly matter.
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="/#contact"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity group"
                onClick={() => setShowServiceModal(false)}
              >
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Text */}
              <p className="text-center text-sm text-foreground/60 mt-4">
                Or <button onClick={() => setShowServiceModal(false)} className="text-accent hover:underline">
                  view another service
                </button>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
