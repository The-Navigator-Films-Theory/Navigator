type TheoryFiltersProps = {
  query: string;
  onQueryChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
};

export default function TheoryFilters({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  categories,
}: TheoryFiltersProps) {
  return (
    <div className="mt-5 flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:flex-row">
      <input
        className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none ring-[rgb(var(--accent))] focus:ring-1"
        placeholder="Search by title..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      <select
        className="rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none ring-[rgb(var(--accent))] focus:ring-1"
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((entry) => (
          <option key={entry} value={entry}>
            {entry}
          </option>
        ))}
      </select>
    </div>
  );
}
