import { useQuery } from '@tanstack/react-query';
import { Award, BrainCircuit, Gamepad2, RefreshCw, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ErrorState, Loading } from '../components/common';
import Button from '../components/ui/Button';
import { fetchLearningHubStats, fetchLearningProgressStats } from '../lib/queries/quiz';
import styles from './InteractiveLearning.module.scss';

export default function InteractiveLearning() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['learning-hub-stats'],
    queryFn: () => fetchLearningHubStats(),
  });

  const {
    data: progress,
    isLoading: progressLoading,
    error: progressError,
  } = useQuery({
    queryKey: ['learning-progress-stats'],
    queryFn: () => fetchLearningProgressStats(),
    staleTime: 15_000,
    refetchInterval: 30_000,
  });

  if (isLoading) return <Loading label="Loading learning hub..." />;
  if (error) return <ErrorState message="Could not load learning hub data." />;
  if (progressError) return <ErrorState message="Could not load learning progress." />;
  if (!data) return <ErrorState message="Learning hub data is unavailable." />;
  if (!progress || progressLoading) return <Loading label="Loading learning progress..." />;

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Interactive Learning Hub</h1>
        <p className={styles.subtitle}>
          Master film theory through engaging quizzes, flashcards, and games designed for deep
          understanding.
        </p>
      </header>

      <div className={styles.cardGrid}>
        <article className={styles.card}>
          <div className={styles.iconWrap}>
            <BrainCircuit size={26} />
          </div>

          <h2 className={styles.cardTitle}>Theory Quizzes</h2>

          <p className={styles.cardBody}>
            Test your understanding with comprehensive quizzes covering all major theoretical
            frameworks.
          </p>

          <p className={`${styles.metaPill} ${styles.metaPillPurple}`}>
            {data.questionCount} questions across {data.theoryCount} theories
          </p>

          <Button asChild size="lg" className={styles.cardButton}>
            <Link to="/quiz/general">Start Quiz</Link>
          </Button>
        </article>

        <article className={styles.card}>
          <div className={styles.iconWrap}>
            <RefreshCw size={26} />
          </div>

          <h2 className={styles.cardTitle}>Study Flashcards</h2>

          <p className={styles.cardBody}>
            Review key terms and concepts with interactive flashcards for quick study sessions.
          </p>

          <p className={`${styles.metaPill} ${styles.metaPillBlue}`}>
            {data.flashcardCount} cards with definitions and explanations
          </p>

          <Button asChild size="lg" className={styles.cardButton}>
            <Link to="/flashcards">Study Cards</Link>
          </Button>
        </article>

        <article className={styles.card}>
          <div className={styles.iconWrap}>
            <Gamepad2 size={26} />
          </div>

          <h2 className={styles.cardTitle}>Learning Games</h2>

          <p className={styles.cardBody}>
            Engage with theory through interactive games and challenges.
          </p>

          <p className={`${styles.metaPill} ${styles.metaPillGreen}`}>
            {data.gameCount} games with varying difficulty levels
          </p>

          <Button size="lg" className={styles.cardButton} disabled>
            Play Games
          </Button>
        </article>
      </div>

      <section className={styles.progressSection}>
        <h2 className={styles.progressTitle}>Learning Progress</h2>

        <div className={styles.progressGrid}>
          <article className={styles.progressCard}>
            <div className={`${styles.progressIconWrap} ${styles.progressIconPurple}`}>
              <Award size={22} />
            </div>
            <h3 className={styles.progressCardTitle}>Quiz Best Score</h3>
            <p className={styles.progressCardValue}>{progress.quizBestScore ?? '--'}</p>
            <p className={styles.progressCardSub}>
              {progress.quizBestScore ? 'Best completed quiz result' : 'Complete a quiz to see your score'}
            </p>
          </article>

          <article className={styles.progressCard}>
            <div className={`${styles.progressIconWrap} ${styles.progressIconBlue}`}>
              <BrainCircuit size={22} />
            </div>
            <h3 className={styles.progressCardTitle}>Cards Studied</h3>
            <p className={styles.progressCardValue}>{progress.cardsStudied}</p>
            <p className={styles.progressCardSub}>
              {progress.cardsStudied > 0 ? 'Unique flashcards viewed' : 'Start studying to track progress'}
            </p>
          </article>

          <article className={styles.progressCard}>
            <div className={`${styles.progressIconWrap} ${styles.progressIconGreen}`}>
              <Gamepad2 size={22} />
            </div>
            <h3 className={styles.progressCardTitle}>Games Played</h3>
            <p className={styles.progressCardValue}>{progress.gamesPlayed}</p>
            <p className={styles.progressCardSub}>Play games to track progress</p>
          </article>

          <article className={styles.progressCard}>
            <div className={`${styles.progressIconWrap} ${styles.progressIconYellow}`}>
              <Target size={22} />
            </div>
            <h3 className={styles.progressCardTitle}>Theories Mastered</h3>
            <p className={styles.progressCardValue}>{progress.theoriesMastered}</p>
            <p className={styles.progressCardSub}>Based on quiz performance (70%+)</p>
          </article>
        </div>
      </section>
    </section>
  );
}