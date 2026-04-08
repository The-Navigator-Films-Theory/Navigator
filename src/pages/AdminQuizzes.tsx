// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { Plus } from 'lucide-react';
import styles from './AdminQuizzes.module.scss';

export default function AdminQuizzes() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Manage Quizzes</h1>
        <p className={styles.subtitle}>Create quizzes and manage quiz questions.</p>
      </div>

      <div className={styles.content}>
        <Plus className={styles.icon} />
        <p>Quizzes management coming soon...</p>
        <p style={{ fontSize: 'var(--font-size-sm)', marginTop: '1rem' }}>
          You'll be able to create quizzes and manage questions here.
        </p>
      </div>
    </section>
  );
}
