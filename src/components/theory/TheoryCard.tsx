import { Link } from 'react-router-dom';
import type { Theory } from '../../types/theory';

type TheoryCardProps = {
  item: Theory;
};

export default function TheoryCard({ item }: TheoryCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-[rgb(var(--panel))] p-4 transition hover:border-white/30">
      <h3 className="font-display text-xl">
        <Link to={`/theory/${item.slug}`}>{item.title}</Link>
      </h3>
      {item.category && <p className="mt-1 text-xs uppercase tracking-wider text-white/60">{item.category}</p>}
      <p className="mt-3 text-sm text-white/75">{item.overview ?? 'No overview yet.'}</p>
    </article>
  );
}
