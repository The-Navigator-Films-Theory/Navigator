import type { Theory } from '../../types/theory';
import TheoryCard from './TheoryCard';

type TheoryGridProps = {
  items: Theory[];
};

export default function TheoryGrid({ items }: TheoryGridProps) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <TheoryCard key={item.id} item={item} />
      ))}
    </div>
  );
}
