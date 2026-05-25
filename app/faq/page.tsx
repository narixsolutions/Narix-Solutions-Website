'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. A simple website may take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines after understanding your requirements.',
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile development methodology with regular sprints, client demos, and feedback cycles. This ensures transparency and allows for adjustments throughout the project.',
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes! We offer ongoing support and maintenance packages. We typically provide free support for 30 days post-launch, with optional maintenance plans available thereafter.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies including React, Next.js, Node.js, TypeScript, PostgreSQL, and AWS. We choose the best tech stack based on your project requirements.',
    },
    {
      question: 'Can you work with existing codebases?',
      answer: 'Absolutely! We can join existing projects, audit codebases, implement new features, or refactor legacy code to modern standards.',
    },
    {
      question: 'How do you handle communication?',
      answer: 'We maintain regular communication through video calls, emails, and project management tools. You&apos;ll have a dedicated point of contact throughout your project.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time-and-materials, and dedicated team arrangements. We provide detailed proposals after understanding your needs.',
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes, we respect confidentiality and are happy to sign NDAs or other legal agreements as required.',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Find answers to common questions about our services and process
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground text-left">{faq.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-accent flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-8 py-6 bg-secondary/50 border-t border-border">
                    <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
