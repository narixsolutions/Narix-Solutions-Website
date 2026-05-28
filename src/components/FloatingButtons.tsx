'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { getWhatsAppHref } from '@/lib/whatsapp';

const TOOLTIP_FIRST_SHOW_MS = 4000;
const TOOLTIP_VISIBLE_MS    = 4000;
const TOOLTIP_INTERVAL_MS   = 20000;

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip]     = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const show = () => {
      setShowTooltip(true);
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setShowTooltip(false), TOOLTIP_VISIBLE_MS);
    };

    const firstShow = setTimeout(show, TOOLTIP_FIRST_SHOW_MS);
    const repeat    = setInterval(show, TOOLTIP_INTERVAL_MS);

    return () => {
      clearTimeout(firstShow);
      clearTimeout(hideTimerRef.current);
      clearInterval(repeat);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-40"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">

        {/* Periodic tooltip bubble */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 8 }}
              animate={{ opacity: 1, scale: 1,    y: 0 }}
              exit={{    opacity: 0, scale: 0.75, y: 8 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              onMouseEnter={() => {
                clearTimeout(hideTimerRef.current);
                setShowTooltip(false);
              }}
              className="relative bg-card border border-border/70 rounded-2xl rounded-br-sm px-4 py-2.5 shadow-xl text-sm font-semibold text-foreground whitespace-nowrap select-none"
            >
              💬 Chat with us!<span className="absolute -bottom-[6px] right-3 w-3 h-3 bg-card border-r border-b border-border/70 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button + radar pulse rings */}
        <div className="relative w-14 h-14">

          {/* Radar ring 1 */}
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-emerald-500"
            animate={{ scale: [1, 1.85], opacity: [0, 0.5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          />

          {/* Radar ring 2 — offset by half period for continuous pulse */}
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-emerald-500"
            animate={{ scale: [1, 1.85], opacity: [0, 0.5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
          />

          <motion.a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="relative w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle size={24} />
          </motion.a>

        </div>
      </div>
    </>
  );
}
