import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Works, WORKS_ANIMATION_END_DELAY } from '@/components/works';
import { AdringWidget } from '@/components/adring-widget';

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
      <Works />
      <AdringWidget delay={WORKS_ANIMATION_END_DELAY} />
    </main>
  );
}
