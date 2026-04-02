'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchSkills, Skill } from '@/entities/skill';
import styles from './Skills.module.scss';

export const Skills = () => {
  const { data: skills, isLoading, error } = useQuery<Skill[]>({
    queryKey: ['skills'],
    queryFn: fetchSkills,
  });

  if (isLoading) return <div className={styles.loading}>Загрузка навыков...</div>;
  if (error) return <div className={styles.error}>Ошибка загрузки: {error.message}</div>;

  // Группировка навыков по категориям
  const grouped = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Навыки</h2>
      <div className={styles.categories}>
        {grouped && Object.entries(grouped).map(([category, items]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <ul className={styles.list}>
              {items.map(skill => (
                <li key={skill.id} className={styles.item}>
                  <span className={styles.name}>{skill.name}</span>
                  <div className={styles.level}>
                    <div className={styles.levelFill} style={{ width: `${skill.level * 20}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};