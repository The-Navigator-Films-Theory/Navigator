import type { Theory } from '../../types/theory';
import styles from './TheoryCard.module.scss';

type TheoryCardProps = {
  item: Theory;
  accentIndex: number;
  onOpen: (item: Theory) => void;
};

const metadataColors = ['dotBlue', 'dotAmber', 'dotViolet', 'dotGreen', 'dotRed', 'dotSky'];

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
}

function MetaIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.metaIcon} aria-hidden="true">
      {children}
    </span>
  );
}

export default function TheoryCard({ item, accentIndex, onOpen }: TheoryCardProps) {
  const colorClass = styles[metadataColors[accentIndex % metadataColors.length]];
  const thinkers = item.key_thinkers ?? [];
  const films = item.representative_films ?? [];

  const handleOpen = () => onOpen(item);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(item);
    }
  };

  return (
    <article
      className={styles.card}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <div className={styles.headerRow}>
        <span className={[styles.dot, colorClass].join(' ')} aria-hidden="true" />
      </div>

      <h3 className={styles.title}>{item.title}</h3>
      {item.category && <p className={styles.category}>{item.category}</p>}

      <p className={styles.overview}>
        {truncate(item.overview ?? 'No overview yet.', 130)}
      </p>

      <div className={styles.metaList}>
        <p className={styles.metaItem}>
          <MetaIcon>👥</MetaIcon>
          <span>
            Thinkers: {thinkers.slice(0, 2).join(', ')}
            {thinkers.length > 2 ? ` +${thinkers.length - 2} more` : ''}
          </span>
        </p>

        <p className={styles.metaItem}>
          <MetaIcon>🗓</MetaIcon>
          <span>
            Context: {truncate(item.history ?? 'Historical notes unavailable.', 68)}
          </span>
        </p>

        <p className={styles.metaItem}>
          <MetaIcon>🎞</MetaIcon>
          <span>{films.length} representative films</span>
        </p>
      </div>

      <span className={styles.learnMore}>Learn More</span>
    </article>
  );
}