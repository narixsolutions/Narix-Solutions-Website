import type { JSX } from 'react';

type DeliveryTeamVisualVariant = 'product' | 'frontend' | 'backend' | 'design';

const ACCENT = '#059669';
const ACCENT_LIGHT = '#10b981';
const TEAL = '#0d9488';
const SLATE = '#64748b';
const SLATE_LIGHT = '#94a3b8';
const SURFACE = '#f8fafc';
const BORDER = '#e2e8f0';
const WHITE = '#ffffff';

function ProductTeamsVisual() {
  return (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="96" height="96" fill={`url(#product-bg)`} />
      <defs>
        <linearGradient id="product-bg" x1="0" y1="0" x2="96" y2="96">
          <stop stopColor="#ecfdf5" />
          <stop offset="1" stopColor="#f0fdfa" />
        </linearGradient>
      </defs>
      <rect x="10" y="14" width="76" height="68" rx="8" fill={WHITE} stroke={BORDER} strokeWidth="1.5" />
      <circle cx="22" cy="26" r="4" fill={ACCENT_LIGHT} opacity="0.9" />
      <circle cx="34" cy="26" r="4" fill={TEAL} opacity="0.85" />
      <circle cx="46" cy="26" r="4" fill={SLATE_LIGHT} opacity="0.7" />
      <rect x="18" y="36" width="18" height="38" rx="4" fill={SURFACE} stroke={BORDER} strokeWidth="1" />
      <rect x="39" y="36" width="18" height="38" rx="4" fill={SURFACE} stroke={BORDER} strokeWidth="1" />
      <rect x="60" y="36" width="18" height="38" rx="4" fill={SURFACE} stroke={BORDER} strokeWidth="1" />
      <rect x="20" y="40" width="14" height="6" rx="2" fill={ACCENT} opacity="0.85" />
      <rect x="20" y="49" width="14" height="6" rx="2" fill={ACCENT_LIGHT} opacity="0.5" />
      <rect x="41" y="40" width="14" height="6" rx="2" fill={TEAL} opacity="0.7" />
      <rect x="41" y="52" width="14" height="6" rx="2" fill={TEAL} opacity="0.4" />
      <rect x="62" y="44" width="14" height="6" rx="2" fill={ACCENT} opacity="0.55" />
      <path d="M48 22v6M45 25h6" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FrontendVisual() {
  return (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="96" height="96" fill="url(#frontend-bg)" />
      <defs>
        <linearGradient id="frontend-bg" x1="0" y1="0" x2="96" y2="96">
          <stop stopColor="#ecfdf5" />
          <stop offset="1" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>
      <rect x="12" y="16" width="72" height="64" rx="8" fill={WHITE} stroke={BORDER} strokeWidth="1.5" />
      <rect x="12" y="16" width="72" height="12" rx="8" fill={SURFACE} />
      <rect x="12" y="24" width="72" height="4" fill={SURFACE} />
      <circle cx="20" cy="22" r="2" fill="#ef4444" opacity="0.8" />
      <circle cx="28" cy="22" r="2" fill="#eab308" opacity="0.8" />
      <circle cx="36" cy="22" r="2" fill={ACCENT_LIGHT} opacity="0.9" />
      <rect x="16" y="34" width="14" height="40" rx="3" fill={SURFACE} stroke={BORDER} strokeWidth="1" />
      <rect x="18" y="38" width="10" height="3" rx="1" fill={ACCENT} opacity="0.8" />
      <rect x="18" y="44" width="10" height="3" rx="1" fill={SLATE_LIGHT} opacity="0.5" />
      <rect x="18" y="50" width="10" height="3" rx="1" fill={SLATE_LIGHT} opacity="0.35" />
      <rect x="34" y="34" width="44" height="18" rx="3" fill={SURFACE} stroke={BORDER} strokeWidth="1" />
      <rect x="38" y="40" width="16" height="6" rx="1.5" fill={ACCENT} opacity="0.75" />
      <rect x="58" y="40" width="16" height="6" rx="1.5" fill={TEAL} opacity="0.55" />
      <rect x="34" y="56" width="44" height="18" rx="3" fill={SURFACE} stroke={BORDER} strokeWidth="1" />
      <rect x="38" y="62" width="6" height="8" rx="1" fill={ACCENT_LIGHT} />
      <rect x="47" y="58" width="6" height="12" rx="1" fill={ACCENT} />
      <rect x="56" y="60" width="6" height="10" rx="1" fill={TEAL} />
      <rect x="65" y="56" width="6" height="14" rx="1" fill={ACCENT_LIGHT} opacity="0.6" />
      <path
        d="M72 30c3 0 5 2 5 5s-2 5-5 5"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function BackendVisual() {
  return (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="96" height="96" fill="url(#backend-bg)" />
      <defs>
        <linearGradient id="backend-bg" x1="0" y1="0" x2="96" y2="96">
          <stop stopColor="#f0fdfa" />
          <stop offset="1" stopColor="#ecfdf5" />
        </linearGradient>
      </defs>
      <path
        d="M48 18c-8 0-14 5-14 11 0 4 3 7 7 9l-2 10h18l-2-10c4-2 7-5 7-9 0-6-6-11-14-11z"
        fill={WHITE}
        stroke={BORDER}
        strokeWidth="1.5"
      />
      <path d="M38 38h20" stroke={ACCENT_LIGHT} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <rect x="22" y="52" width="20" height="24" rx="4" fill={WHITE} stroke={BORDER} strokeWidth="1.5" />
      <rect x="26" y="58" width="12" height="3" rx="1" fill={ACCENT} opacity="0.8" />
      <rect x="26" y="64" width="12" height="3" rx="1" fill={SLATE_LIGHT} opacity="0.45" />
      <rect x="26" y="70" width="8" height="2" rx="1" fill={TEAL} opacity="0.6" />
      <rect x="54" y="52" width="20" height="24" rx="4" fill={WHITE} stroke={BORDER} strokeWidth="1.5" />
      <rect x="58" y="58" width="12" height="3" rx="1" fill={TEAL} opacity="0.75" />
      <rect x="58" y="64" width="12" height="3" rx="1" fill={ACCENT_LIGHT} opacity="0.5" />
      <rect x="58" y="70" width="8" height="2" rx="1" fill={ACCENT} opacity="0.55" />
      <circle cx="48" cy="46" r="4" fill={ACCENT} opacity="0.9" />
      <path d="M42 50h12M48 46v8" stroke={WHITE} strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M32 52v-4M42 48h6M54 48h6M64 52v-4"
        stroke={SLATE_LIGHT}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <rect x="38" y="80" width="20" height="4" rx="2" fill={ACCENT} opacity="0.25" />
    </svg>
  );
}

function DesignVisual() {
  return (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="96" height="96" fill="url(#design-bg)" />
      <defs>
        <linearGradient id="design-bg" x1="0" y1="0" x2="96" y2="96">
          <stop stopColor="#faf5ff" />
          <stop offset="1" stopColor="#ecfdf5" />
        </linearGradient>
      </defs>
      <rect x="14" y="18" width="52" height="60" rx="6" fill={WHITE} stroke={BORDER} strokeWidth="1.5" />
      <rect x="18" y="24" width="44" height="8" rx="2" fill={SURFACE} stroke={BORDER} strokeWidth="1" />
      <rect x="18" y="36" width="20" height="14" rx="2" fill={SURFACE} stroke={BORDER} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="42" y="36" width="20" height="6" rx="2" fill={SURFACE} stroke={BORDER} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="42" y="46" width="20" height="18" rx="2" fill={SURFACE} stroke={BORDER} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="18" y="54" width="20" height="10" rx="2" fill={ACCENT} opacity="0.15" stroke={ACCENT} strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="72" cy="28" r="3" fill="#a855f7" opacity="0.75" />
      <circle cx="80" cy="36" r="3" fill={TEAL} opacity="0.75" />
      <circle cx="72" cy="44" r="3" fill={ACCENT_LIGHT} opacity="0.85" />
      <path
        d="M70 52l14 14"
        stroke={SLATE}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M82 64l4 4-6 6-4-4 6-6z"
        fill={WHITE}
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="18" y="68" width="28" height="4" rx="1" fill={SLATE_LIGHT} opacity="0.4" />
      <rect x="18" y="74" width="18" height="2" rx="1" fill={SLATE_LIGHT} opacity="0.25" />
    </svg>
  );
}

const visuals: Record<DeliveryTeamVisualVariant, () => JSX.Element> = {
  product: ProductTeamsVisual,
  frontend: FrontendVisual,
  backend: BackendVisual,
  design: DesignVisual,
};

type DeliveryTeamVisualProps = {
  variant: DeliveryTeamVisualVariant;
  className?: string;
};

export function DeliveryTeamVisual({ variant, className }: DeliveryTeamVisualProps) {
  const Visual = visuals[variant];
  return (
    <div
      className={`w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-1 ring-emerald-200/70 dark:ring-emerald-800/50 shadow-sm ${className ?? ''}`}
    >
      <Visual />
    </div>
  );
}

export type { DeliveryTeamVisualVariant };
