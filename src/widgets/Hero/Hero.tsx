import { Button } from '@/shared/ui/Button/Button';
import { ThemeToggle } from '@/features/theme/ui/ThemeToggle';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ThemeToggle />
      </div>
      <h1 className={styles.title}>Привет, я Виктор</h1>
      <p className={styles.subtitle}>Веб-разработчик</p>
      <div className={styles.buttonGroup}>
        <Button variant="primary">Смотреть проекты</Button>
        <Button variant="secondary">Связаться</Button>
      </div>
    </section>
  );
};