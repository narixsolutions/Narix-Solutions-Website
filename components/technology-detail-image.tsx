'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Cpu } from 'lucide-react';

/** Neutral default until intrinsic size is known — avoids square assets in wide boxes */
const DEFAULT_RATIO = 1;
const MIN_RATIO = 0.85;
const MAX_RATIO = 2.1;

type TechnologyDetailImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  rounded?: '2xl' | 'xl';
  maxHeight?: number;
};

function clampRatio(ratio: number) {
  return Math.min(Math.max(ratio, MIN_RATIO), MAX_RATIO);
}

export function TechnologyDetailImage({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  rounded = '2xl',
  maxHeight = 300,
}: TechnologyDetailImageProps) {
  const [failed, setFailed] = useState(false);
  const [ratio, setRatio] = useState(DEFAULT_RATIO);
  const [loaded, setLoaded] = useState(false);

  const roundedClass = rounded === '2xl' ? 'rounded-2xl' : 'rounded-xl';

  const onLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth > 0 && naturalHeight > 0) {
      setRatio(clampRatio(naturalWidth / naturalHeight));
    }
    setLoaded(true);
  }, []);

  const frameStyle = {
    aspectRatio: ratio,
    maxHeight,
  };

  if (!src || failed) {
    return (
      <div
        className={`relative w-full overflow-hidden border border-border bg-gradient-to-br from-muted via-muted/70 to-muted/40 ${roundedClass}`}
        style={{ aspectRatio: DEFAULT_RATIO, maxHeight }}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-foreground/45">
          <Cpu className="size-7 sm:size-8 text-accent/50" aria-hidden />
          <span className="text-[10px] sm:text-xs font-medium px-3 text-center">Image unavailable</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden border border-border bg-gradient-to-br from-muted via-muted/70 to-muted/40 ${roundedClass} transition-[aspect-ratio] duration-300 ease-out`}
      style={frameStyle}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`h-full w-full object-contain object-center transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={onLoad}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
