'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while larger enterprises may require 3-6 months. We provide detailed timelines during the discovery phase.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes, we offer comprehensive post-launch support packages including maintenance, monitoring, security updates, and performance optimization to ensure your platform stays at peak performance.',
  },
  {
    question: 'How do you ensure quality?',
    answer: 'We implement rigorous testing protocols including unit tests, integration tests, performance testing, and user acceptance testing. Every deliverable goes through our quality assurance team before client review.',
  },
  {
    question: 'Can you work with our existing tech stack?',
    answer: 'Absolutely. We\'re platform-agnostic and work with technologies including React, Vue, Angular, Node.js, Python, Java, AWS, Google Cloud, and more. We can also advise on technology choices.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team models. Pricing depends on project scope, timeline, and team composition. We provide detailed quotes after the discovery phase.',
  },
  {
    question: 'How do you handle communication and updates?',
    answer: 'We believe in transparent communication. You\'ll have a dedicated project manager, weekly status calls, daily stand-ups, and access to our project management platform for real-time updates.',
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes, we regularly sign NDAs and are committed to maintaining strict confidentiality of all client information and intellectual property.',
  },
  {
    question: 'What geographies do you serve?',
    answer: 'We serve clients globally across North America, Europe, Asia, and more. Our distributed team enables 24/7 support and coverage across multiple time zones.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-foreground/70 font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/60">
            Find answers to common questions about our services, process, and partnerships.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-background hover:bg-background/50 transition-colors text-left group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-border">
                  <p className="p-6 text-foreground/70">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-foreground/60 mb-4">Didn&apos;t find what you&apos;re looking for?</p>
          <a
            href="#contact"
            className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
