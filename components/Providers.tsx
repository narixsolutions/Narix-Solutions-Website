'use client';

import { Header } from './Header';
import { Footer } from './Footer';
import { ServiceModal } from './modals/ServiceModal';
import { ProjectModal } from './modals/ProjectModal';
import { FloatingButtons } from './FloatingButtons';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-16">
        {children}
      </div>
      <Footer />
      <ServiceModal />
      <ProjectModal />
      <FloatingButtons />
    </>
  );
}
