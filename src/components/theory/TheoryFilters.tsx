import styles from './TheoryFilters.module.scss';

type CategoryPill = {
  value: string;
  label: string;
  count: number;
};

type TheoryFiltersProps = {
  query: string;
  onQueryChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  categories: CategoryPill[];
};

export default function TheoryFilters({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  categories,
}: TheoryFiltersProps) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search theories, thinkers, history..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      <div className={styles.pills}>
        {categories.map((entry) => (
          <button
            key={entry.value || 'all'}
            type="button"
            className={[styles.pill, category === entry.value ? styles.pillActive : ''].filter(Boolean).join(' ')}
            onClick={() => onCategoryChange(entry.value)}
          >
            {entry.label} ({entry.count})
          </button>
        ))}
      </div>
    </div>
  );
}
