import { useQuery } from '@tanstack/react-query';
import { Award, BrainCircuit, Code, Gamepad2, Layers, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ErrorState, Loading } from '../components/common';
import { fetchLearningHubStats } from '../lib/queries/quiz';
import styles from './InteractiveLearning.module.scss';

export default function InteractiveLearning() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['learning-hub-stats'],
    queryFn: () => fetchLearningHubStats(),
  });

  if (isLoading) return <Loading label="Loading learning hub..." />;
  if (error) return <ErrorState message="Could not load learning hub data." />;
  if (!data) return <ErrorState message="Learning hub data is unavailable." />;

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Interactive Learning Hub</h1>
        <p className={styles.subtitle}>
          Master film theory through engaging quizzes, flashcards, and games designed for deep understanding.
        </p>
      </header>

      <div className={styles.cardGrid}>
        <article className={styles.card}>
          <div className={styles.iconWrapPurple}>
            <Code size={26} />
          </div>
          <h2 className={styles.cardTitle}>Theory Quizzes</h2>
          <p className={styles.cardBody}>
            Test your understanding with comprehensive quizzes covering all major
            theoretical frameworks.
          </p>
          <p className={styles.metaPillPurple}>
            {data.questionCount} questions across {data.theoryCount} theories
          </p>
          <Link to="/quiz/general" className={styles.primaryButton}>
            Start Quiz
          </Link>
        </article>

        <article className={styles.card}>
          <div className={styles.iconWrapBlue}>
            <Layers size={26} />
          </div>
          <h2 className={styles.cardTitle}>Study Flashcards</h2>
          <p className={styles.cardBody}>
            Review key terms and concepts with interactive flashcards for quick
            study sessions.
          </p>
          <p className={styles.metaPillBlue}>
            {data.flashcardCount} cards with definitions and explanations
          </p>
          <button className={styles.primaryButton} type="button" disabled>
            Study Cards
          </button>
        </article>

        <article className={styles.card}>
          <div className={styles.iconWrapGreen}>
            <Gamepad2 size={26} />
          </div>
          <h2 className={styles.cardTitle}>Learning Games</h2>
          <p className={styles.cardBody}>
            Engage with theory through interactive games and challenges.
          </p>
          <p className={styles.metaPillGreen}>
            {data.gameCount} games with varying difficulty levels
          </p>
          <button className={styles.primaryButton} type="button" disabled>
            Play Games
          </button>
        </article>
      </div>

      <div className={styles.progressSection}>
        <h2 className={styles.progressTitle}>Learning Progress</h2>
        <div className={styles.progressGrid}>
          <div className={styles.progressCard}>
            <div className={styles.progressIconWrap}>
              <Award />
            </div>
            <h3 className={styles.progressCardTitle}>Quiz Best Score</h3>
            <p className={styles.progressCardValue}>--</p>
            <p className={styles.progressCardSub}>Complete a quiz to see your score</p>
          </div>
          <div className={styles.progressCard}>
            <div className={styles.progressIconWrap}>
              <BrainCircuit />
            </div>
            <h3 className={styles.progressCardTitle}>Cards Studied</h3>
            <p className={styles.progressCardValue}>--</p>
            <p className={styles.progressCardSub}>Start studying to track progress</p>
          </div>
          <div className={styles.progressCard}>
            <div className={styles.progressIconWrap}>
              <Gamepad2 />
            </div>
            <h3 className={styles.progressCardTitle}>Games Played</h3>
            <p className={styles.progressCardValue}>0</p>
            <p className={styles.progressCardSub}>Play games to track progress</p>
          </div>
          <div className={styles.progressCard}>
            <div className={styles.progressIconWrap}>
              <Target />
            </div>
            <h3 className={styles.progressCardTitle}>Theories Mastered</h3>
            <p className={styles.progressCardValue}>--</p>
            <p className={styles.progressCardSub}>Based on quiz performance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
