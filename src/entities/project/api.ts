import { Project } from './types';

// Получаем репозитории пользователя GitHub (замени 'your-github-username' на своё имя или оставь как пример)
export const fetchGitHubProjects = async (username: string = 'vercel'): Promise<Project[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  const data = await response.json();
  return data;
};