import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { EmptyState, ErrorState, Loading } from '../components/common';
import { TheoryDetailModal, TheoryFilters, TheoryGrid } from '../components/theory';
import { useDebounce } from '../hooks/useDebounce';
import { fetchTheories } from '../lib/queries/theories';
import type { Theory } from '../types/theory';
import styles from './TheoryLibrary.module.scss';

export default function TheoryLibrary() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [activeTheory, setActiveTheory] = useState<Theory | null>(null);
  const debouncedQuery = useDebounce(query, 300);

  const { data, isLoading, error } = useQuery({
    queryKey: ['theories'],
    queryFn: () => fetchTheories({}),
  });

  const allItems = data ?? [];

  const filteredItems = useMemo(() => {
    const normalizedQuery = debouncedQuery.trim().toLowerCase();
    return allItems.filter((item) => {
      const byCategory = category ? item.category === category : true;
      if (!byCategory) return false;
      if (!normalizedQuery) return true;

      const haystack = [
        item.title,
        item.overview ?? '',
        item.history ?? '',
        ...(item.key_thinkers ?? []),
        ...(item.key_points ?? []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [allItems, category, debouncedQuery]);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();

    allItems.forEach((item) => {
      if (!item.category) return;
      counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
    });

    const dynamic = Array.from(counts.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([value, count]) => ({ value, label: value, count }));

    return [{ value: '', label: 'All Theories', count: allItems.length }, ...dynamic];
  }, [allItems]);

  const statCards = useMemo(() => {
    const values = new Set(
      allItems.map((item) => item.category).filter((value): value is string => value !== null),
    );
    const thinkerCount = new Set(
      allItems.flatMap((item) => item.key_thinkers ?? []),
    ).size;

    return [
      { label: 'Theories', value: `${allItems.length}+` },
      { label: 'Categories', value: `${values.size}+` },
      { label: 'Thinkers', value: `${thinkerCount}+` },
    ];
  }, [allItems]);

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Film &amp; Media Theory Library</h1>
      <p className={styles.subtitle}>
        Explore the foundational theories that shape our understanding of cinema and media. Each theory offers
        unique insights into how films create meaning, engage audiences, and reflect cultural values.
      </p>

      <div className={styles.statsRow}>
        {statCards.map((card) => (
          <article key={card.label} className={styles.statCard}>
            <p className={styles.statValue}>{card.value}</p>
            <p className={styles.statLabel}>{card.label}</p>
          </article>
        ))}
      </div>

      <TheoryFilters
        query={query}
        onQueryChange={setQuery}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
      />
      {isLoading && <Loading label="Loading theories..." />}
      {error && <ErrorState message="Could not load theories. Please try again." />}
      {!isLoading && !error && filteredItems.length === 0 && <EmptyState message="No matching theories found." />}
      {!isLoading && !error && filteredItems.length > 0 && <TheoryGrid items={filteredItems} onOpen={setActiveTheory} />}
      {activeTheory && <TheoryDetailModal item={activeTheory} onClose={() => setActiveTheory(null)} />}
    </section>
  );
}
