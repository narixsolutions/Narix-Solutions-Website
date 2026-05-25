'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Cpu } from 'lucide-react';

type TechnologyImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  fit?: 'cover' | 'contain';
  className?: string;
};

export function TechnologyImage({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  objectPosition,
  fit = 'cover',
  className,
}: Readonly<TechnologyImageProps>) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted/60 to-muted/30 text-foreground/45"
        role="img"
        aria-label={alt}
      >
        <Cpu className="size-7 sm:size-8 text-accent/50" aria-hidden />
        <span className="text-[10px] sm:text-xs font-medium px-3 text-center">Image unavailable</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={[
        'h-full w-full',
        fit === 'cover' ? 'object-cover object-center' : 'object-contain object-center',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ objectPosition: objectPosition ?? 'center' }}
      onError={() => setFailed(true)}
    />
  );
}
