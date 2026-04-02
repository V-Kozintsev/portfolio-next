import { Hero } from '@/widgets/Hero/Hero';
import { Skills } from '@/widgets/Skills/Skills';
import { Projects } from '@/widgets/Projects/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}