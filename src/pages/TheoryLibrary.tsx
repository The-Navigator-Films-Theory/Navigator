import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import EmptyState from '../components/common/EmptyState';
import ErrorState from '../components/common/ErrorState';
import Loading from '../components/common/Loading';
import TheoryFilters from '../components/theory/TheoryFilters';
import TheoryGrid from '../components/theory/TheoryGrid';
import { useDebounce } from '../hooks/useDebounce';
import { fetchTheories } from '../lib/queries/theories';

export default function TheoryLibrary() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  const { data, isLoading, error } = useQuery({
    queryKey: ['theories', debouncedQuery, category],
    queryFn: () => fetchTheories({ q: debouncedQuery, category: category || undefined }),
  });

  const categories = useMemo(() => {
    const values = new Set(
      (data ?? []).map((item) => item.category).filter((value): value is string => value !== null),
    );
    return Array.from(values).sort();
  }, [data]);

  return (
    <section>
      <h1 className="font-display text-3xl">Theory Library</h1>
      <p className="mt-2 text-white/70">Search and filter published film theories.</p>
      <TheoryFilters
        query={query}
        onQueryChange={setQuery}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
      />
      {isLoading && <Loading label="Loading theories..." />}
      {error && <ErrorState message="Could not load theories. Please try again." />}
      {!isLoading && !error && (data?.length ?? 0) === 0 && <EmptyState message="No matching theories found." />}
      {!isLoading && !error && (data?.length ?? 0) > 0 && <TheoryGrid items={data ?? []} />}
    </section>
  );
}
