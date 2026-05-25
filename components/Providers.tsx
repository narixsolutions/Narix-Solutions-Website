'use client';

import type { ReactNode } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { ServiceModal } from './modals/ServiceModal';
import { ProjectModal } from './modals/ProjectModal';
import { FloatingButtons } from './FloatingButtons';

type ProvidersProps = {
  readonly children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
      <ServiceModal />
      <ProjectModal />
      <FloatingButtons />
    </>
  );
}
