import { Skill } from './types';

// Пока это заглушка, позже заменим на реальный запрос к API
export const fetchSkills = async (): Promise<Skill[]> => {
  // Имитация задержки сети
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    { id: '1', name: 'JavaScript (ES6+)', level: 4, category: 'frontend' },
    { id: '2', name: 'TypeScript', level: 3, category: 'frontend' },
    { id: '3', name: 'React', level: 3, category: 'frontend' },
    { id: '4', name: 'Next.js', level: 2, category: 'frontend' },
    { id: '5', name: 'HTML/CSS', level: 4, category: 'frontend' },
    { id: '6', name: 'SCSS', level: 3, category: 'frontend' },
    { id: '7', name: 'Git', level: 3, category: 'tools' },
    { id: '8', name: 'Node.js', level: 2, category: 'backend' },
    { id: '9', name: 'Zustand', level: 2, category: 'frontend' },
    { id: '10', name: 'TanStack Query', level: 2, category: 'frontend' },
  ];
};