'use client';

import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-6">
          {/* Badge with animation */}
          <div className="flex items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <Sparkles size={16} className="text-accent animate-pulse" />
              <span className="text-sm text-foreground/80 font-medium">Premium Digital Solutions</span>
            </div>
          </div>

          {/* Main Heading with gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
            Transform Your <span className="bg-gradient-to-r from-accent via-blue-500 to-purple-500 bg-clip-text text-transparent">Digital Presence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
            We create premium digital experiences that drive growth, inspire action, and build lasting brand loyalty. Trusted by global leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 group w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center justify-center gap-2 border-2 border-accent/40 text-foreground px-8 py-4 rounded-lg font-semibold hover:border-accent hover:bg-accent/5 transition-all duration-300 group w-full sm:w-auto">
              <Play size={18} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '150+', label: 'Team Members' },
              { number: '50+', label: 'Countries' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent group-hover:from-accent group-hover:to-blue-500 transition-all">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 lg:h-screen lg:sticky lg:top-0 flex items-center">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-image.jpg"
              alt="Digital solutions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
