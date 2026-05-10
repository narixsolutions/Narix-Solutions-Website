import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

import { getWhatsAppHref } from '@/lib/whatsapp';

/** Consultation strip: WhatsApp only (no scheduling/booking widgets). Swap photo or copy freely. */
export function ExpertWhatsAppSection() {
  const href = getWhatsAppHref();

  return (
    <section className="py-16 px-6 lg:px-8 border-y border-border bg-card/50">
      <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-background/95 dark:bg-card/80 shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-0">
          <div className="relative min-h-[280px] md:min-h-[320px] bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
              alt="NarixSolutions team member"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/25 to-transparent md:from-background/50" />
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center gap-5">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Talk to us</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance leading-tight">
                Prefer WhatsApp? Message our team directly.
              </h2>
              <p className="text-foreground/70 mt-3 leading-relaxed">
                Skip the form — share context, links, or files in chat. We route you to the right delivery lead and reply as soon as we&apos;re online.
              </p>
            </div>

            <div>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-3.5 font-semibold shadow-md hover:brightness-110 transition-all"
              >
                <MessageCircle className="size-5" aria-hidden />
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
