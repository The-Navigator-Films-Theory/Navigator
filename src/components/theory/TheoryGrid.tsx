import type { Theory } from '../../types/theory';
import TheoryCard from './TheoryCard';
import styles from './TheoryGrid.module.scss';

type TheoryGridProps = {
  items: Theory[];
  onOpen: (item: Theory) => void;
};

export default function TheoryGrid({ items, onOpen }: TheoryGridProps) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <TheoryCard key={item.id} item={item} accentIndex={index} onOpen={onOpen} />
      ))}
    </div>
  );
}
