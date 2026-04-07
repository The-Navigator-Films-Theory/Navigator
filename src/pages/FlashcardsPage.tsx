import { useQuery } from '@tanstack/react-query';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorState from '../components/common/ErrorState';
import Loading from '../components/common/Loading';
import Button from '../components/ui/Button';
import { trackEngagementEvent } from '../lib/engagement';
import { fetchFlashcards } from '../lib/queries/flashcards';
import styles from './FlashcardsPage.module.scss';

export default function FlashcardsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['flashcards'],
    queryFn: () => fetchFlashcards(),
  });

  const cards = useMemo(() => data ?? [], [data]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const totalCards = cards.length;
  const currentCard = cards[currentIndex];

  useEffect(() => {
    if (!currentCard?.id) return;

    void trackEngagementEvent({
      eventType: 'studied_flashcard',
      relatedType: 'flashcard',
      relatedId: currentCard.id,
      metadata: {
        theory: currentCard.theoryLabel,
      },
    });
  }, [currentCard?.id, currentCard?.theoryLabel]);

  const handlePrevious = () => {
    if (totalCards === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
    setIsFlipped(false);
  };

  const handleNext = () => {
    if (totalCards === 0) return;
    setCurrentIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  if (isLoading) {
    return <Loading label="Loading flashcards..." />;
  }

  if (error) {
    return <ErrorState message="Could not load flashcards." />;
  }

  if (!currentCard) {
    return <ErrorState message="No flashcards found. Add published vocabulary terms in Supabase." />;
  }

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <Link to="/learn" className={styles.backLink}>
            <ChevronLeft size={18} />
            Back to Hub
          </Link>
          <span className={styles.counter}>
            Card {currentIndex + 1} of {totalCards}
          </span>
        </div>

        <article className={styles.cardShell}>
          <div className={styles.theoryPill}>{currentCard.theoryLabel}</div>

          <button
            type="button"
            className={`${styles.cardFace} ${isFlipped ? styles.flipped : ''}`}
            onClick={handleFlip}
          >
            <div className={styles.flipInner}>
              <div className={`${styles.facePanel} ${styles.faceFront}`}>
                <h2 className={styles.faceLabel}>Term</h2>
                <p className={styles.faceValue}>{currentCard.term}</p>
                <p className={styles.faceHint}>Click to reveal definition</p>
              </div>

              <div className={`${styles.facePanel} ${styles.faceBack}`}>
                <h2 className={styles.faceLabel}>Definition</h2>
                <p className={styles.faceValue}>{currentCard.definition}</p>
              </div>
            </div>
          </button>

          <div className={styles.controlsRow}>
            <Button variant="secondary" onClick={handlePrevious}>
              Previous
            </Button>
            <Button variant="tertiary" onClick={handleFlip}>
              <span className={styles.flipButtonContent}>
                <RefreshCw size={18} />
                Flip Card
              </span>
            </Button>
            <Button onClick={handleNext} className={styles.nextButton}>Next</Button>
          </div>
        </article>
      </div>
    </section>
  );
}
