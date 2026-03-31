import { Link } from 'react-router-dom';
import StatsGrid from '../components/home/StatsGrid';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Navigate the World of Film Theory</h1>

          <p className={styles.subtitle}>
            Your comprehensive guide to understanding film and media. Explore theories, test your
            knowledge, and contribute to a growing community of scholars and enthusiasts.
          </p>

          <div className={styles.actions}>
            <Link to="/theory" className={styles.ctaPrimary}>
              Start Exploring
            </Link>

            <Link to="/learn" className={styles.ctaSecondary}>
              Take a Quiz
            </Link>
          </div>
        </div>
      </section>

      <StatsGrid />
    </div>
  );
}