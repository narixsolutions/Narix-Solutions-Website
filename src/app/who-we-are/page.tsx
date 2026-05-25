import { WhoWeAreHero } from '@/components/sections/WhoWeAreHero';
import { Team } from '@/components/sections/Team';
import { History } from '@/components/sections/History';
import { Values } from '@/components/sections/Values';
import { Impact } from '@/components/sections/Impact';

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <WhoWeAreHero />
      <Team />
      <History />
      <Values />
      <Impact />
    </main>
  );
}
