'use client';

import { useThemeStore } from '../themeStore';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};