import { Button } from '@/shared/ui/Button/Button';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Привет, я веб-разработчик</h1>
      <Button variant="primary">Связаться</Button>
      <Button variant="secondary">Портфолио</Button>
    </div>
  );
}