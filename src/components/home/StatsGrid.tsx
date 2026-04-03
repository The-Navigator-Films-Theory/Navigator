import { BookOpen, BrainCircuit, Clapperboard, Gamepad2, Zap } from 'lucide-react';
import styles from './StatsGrid.module.scss';

const stats = [
  { icon: BookOpen, value: '25+', label: 'Film Theories' },
  { icon: Clapperboard, value: '125+', label: 'Vocabulary Terms' },
  { icon: BrainCircuit, value: '35+', label: 'Interactive Quizzes' },
  { icon: Zap, value: '100+', label: 'Study Flashcards' },
  { icon: Gamepad2, value: '12+', label: 'Learning Games' },
];

export default function StatsGrid() {
  return (
    <section className={styles.grid}>
      {stats.map((stat) => (
        <div className={styles.statCard} key={stat.label}>
          <div className={styles.iconWrapper}>
            <stat.icon size={24} />
          </div>
          <p className={styles.value}>{stat.value}</p>
          <p className={styles.label}>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}