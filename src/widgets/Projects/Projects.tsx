'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchGitHubProjects, Project } from '@/entities/project';
import styles from './Projects.module.scss';

export const Projects = () => {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ['github-projects', 'vercel'], // можно заменить на свой GitHub username
    queryFn: () => fetchGitHubProjects('vercel'), // замени 'vercel' на свой логин
  });

  if (isLoading) return <div className={styles.loading}>Загрузка проектов...</div>;
  if (error) return <div className={styles.error}>Ошибка загрузки: {error.message}</div>;

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Мои проекты</h2>
      <div className={styles.grid}>
        {projects?.map((project) => (
          <div key={project.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{project.name}</h3>
            <p className={styles.description}>
              {project.description || 'Описание отсутствует'}
            </p>
            <div className={styles.meta}>
              <span>⭐ {project.stargazers_count}</span>
              <span>{project.language || 'N/A'}</span>
              <span>📅 {new Date(project.updated_at).toLocaleDateString()}</span>
            </div>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};