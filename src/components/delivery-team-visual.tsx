import Image from 'next/image';

type DeliveryTeamVisualVariant = 'product' | 'frontend' | 'backend' | 'design';

const visuals: Record<DeliveryTeamVisualVariant, { src: string; alt: string }> = {
  product: {
    src: '/images/cross-funtional.png',
    alt: 'Cross-functional team illustration',
  },
  frontend: {
    src: '/images/frontend.png',
    alt: 'Frontend engineering illustration',
  },
  backend: {
    src: '/images/backend.png',
    alt: 'Backend infrastructure illustration',
  },
  design: {
    src: '/images/design.png',
    alt: 'Design strategy illustration',
  },
};

type DeliveryTeamVisualProps = {
  readonly variant: DeliveryTeamVisualVariant;
  readonly className?: string;
};

export function DeliveryTeamVisual({ variant, className }: DeliveryTeamVisualProps) {
  const visual = visuals[variant];
  return (
    <div
      className={`w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-1 ring-emerald-200/70 dark:ring-emerald-800/50 shadow-sm ${className ?? ''}`}
    >
      <Image
        src={visual.src}
        alt={visual.alt}
        width={96}
        height={96}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export type { DeliveryTeamVisualVariant };
