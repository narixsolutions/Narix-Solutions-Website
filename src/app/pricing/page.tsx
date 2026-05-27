import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Flexible pricing plans for all sizes of projects and businesses.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects and startups',
      price: '$5,000',
      period: 'for 1 month',
      features: [
        'Up to 40 hours of development',
        'Single developer',
        'Weekly check-ins',
        'Basic support',
        'Project documentation',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'Ideal for medium-scale projects',
      price: '$12,000',
      period: 'for 3 months',
      features: [
        'Up to 120 hours of development',
        'Team of 2-3 developers',
        'Bi-weekly demos',
        'Priority support',
        'Full documentation',
        'Free revisions',
        'Performance optimization',
      ],
      cta: 'Choose Plan',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale applications',
      price: 'Custom',
      period: 'based on requirements',
      features: [
        'Unlimited hours',
        'Dedicated team',
        'Daily standups',
        'Premium 24/7 support',
        'Custom solutions',
        'Unlimited revisions',
        'Consulting & strategy',
        'Post-launch support',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-foreground mb-6 text-balance">
            Simple, Transparent <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-base sm:text-lg xl:text-xl text-foreground/70 max-w-2xl mx-auto">
            Flexible plans that scale with your business. From startups to enterprises, we have a plan for you.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 xl:p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? 'border-emerald-500 bg-gradient-to-br from-emerald-500/8 to-teal-500/8 ring-2 ring-emerald-500/20 relative'
                  : 'border-border bg-card hover:border-emerald-500/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-foreground/70 mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                  {plan.price}
                </div>
                <p className="text-foreground/60 text-sm">{plan.period}</p>
              </div>

              <Link
                href="/contact"
                className={`block w-full py-3 px-4 rounded-lg font-semibold text-center mb-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:-translate-y-1'
                    : 'bg-secondary text-foreground hover:bg-emerald-500/10 hover:text-emerald-700'
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 sm:mb-12 text-center">Optional Add-ons</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
            {[
              { title: 'Hosting & Deployment', price: '$500/month' },
              { title: 'Maintenance & Support', price: '$1,000/month' },
              { title: 'SEO Optimization', price: '$2,000/month' },
              { title: 'Performance Audit', price: '$1,500 one-time' },
              { title: 'Security Audit', price: '$2,000 one-time' },
              { title: 'Content Migration', price: 'Custom' },
            ].map((addon) => (
              <div key={addon.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground">{addon.title}</h3>
                <span className="text-emerald-600 font-bold sm:text-right">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 sm:mb-12 text-center">Pricing FAQ</h2>
          <div className="space-y-8">
            {[
              {
                q: 'What&apos;s included in the project scope?',
                a: 'Each plan includes development hours, design implementation, testing, deployment, and documentation. Specific features depend on the plan level.',
              },
              {
                q: 'Can I change my plan?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. We&apos;ll adjust your billing accordingly.',
              },
              {
                q: 'Do you offer custom quotes?',
                a: 'Absolutely. For unique projects, we provide custom quotes. Contact our sales team for a detailed proposal.',
              },
              {
                q: 'What payment options do you accept?',
                a: 'We accept credit cards, wire transfers, and bank payments. Payment terms can be negotiated for enterprise clients.',
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Choose a plan and let&apos;s transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
