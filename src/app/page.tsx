import { HomeBenefitsSection } from '@/components/sections/home/HomeBenefitsSection';
import { HomeCaseStudiesSection } from '@/components/sections/home/HomeCaseStudiesSection';
import { HomeFinalCtaSection } from '@/components/sections/home/HomeFinalCtaSection';
import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection';
import { HomeServicesSection } from '@/components/sections/home/HomeServicesSection';
import { HomeTechStackSection } from '@/components/sections/home/HomeTechStackSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HomeHeroSection />
      <HomeTechStackSection />
      <HomeServicesSection />
      <HomeCaseStudiesSection />
      <HomeBenefitsSection />
      <HomeFinalCtaSection />
    </main>
  );
}
