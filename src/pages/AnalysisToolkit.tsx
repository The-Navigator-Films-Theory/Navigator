import { useEffect, useMemo, useState } from 'react';
import styles from './AnalysisToolkit.module.scss';
import { fetchFilms, type Film } from '../lib/queries/films';

const posterFallback =
  'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400';

const theoryColors = [
  styles.tagRed,
  styles.tagBlue,
  styles.tagPurple,
  styles.tagTeal,
  styles.tagOrange,
  styles.tagGreen,
];

function getTheoryTagClass(index: number) {
  return theoryColors[index % theoryColors.length];
}

export default function AnalysisToolkit() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadFilms = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchFilms();
        setFilms(data);
      } catch (err) {
        console.error('Failed to fetch films:', err);
        setError('Unable to load films right now.');
      } finally {
        setLoading(false);
      }
    };

    loadFilms();
  }, []);

  const filteredFilms = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return films;

    return films.filter((film) => {
      const title = film.title.toLowerCase();
      const director = film.director?.toLowerCase() ?? '';
      return title.includes(search) || director.includes(search);
    });
  }, [films, query]);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1 className={styles.title}>Film Analysis Toolkit</h1>
          <p className={styles.subtitle}>
            Apply theoretical frameworks to analyze films with guided templates and
            reading recommendations.
          </p>
          <p className={styles.subtitleSecondary}>
            Choose a film and theoretical approach to begin your analysis.
          </p>

          <div className={styles.searchWrap}>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search films by title or director..."
              className={styles.searchInput}
            />
            <span className={styles.searchIcon} aria-hidden="true">
              ⌕
            </span>
          </div>
        </header>

        {loading ? (
          <p className={styles.state}>Loading films...</p>
        ) : error ? (
          <p className={styles.state}>{error}</p>
        ) : filteredFilms.length === 0 ? (
          <p className={styles.state}>No films match your search.</p>
        ) : (
          <section className={styles.grid}>
            {filteredFilms.map((film) => {
              const theories = film.relevant_theories ?? [];

              return (
                <article key={film.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <img
                      src={film.poster_url || posterFallback}
                      alt={film.title}
                      className={styles.poster}
                    />

                    <div className={styles.cardHeading}>
                      <h2 className={styles.cardTitle}>{film.title}</h2>
                      <p className={styles.meta}>
                        {film.director || film.year
                          ? [film.director, film.year].filter(Boolean).join(' ')
                          : 'Film details unavailable'}
                      </p>
                    </div>
                  </div>

                  <p className={styles.description}>
                    {film.synopsis || 'No synopsis available.'}
                  </p>

                  {theories.length > 0 && (
                    <>
                      <p className={styles.sectionLabel}>Applicable Theories:</p>

                      <div className={styles.theoryList}>
                        {theories.map((theory, index) => (
                          <span
                            key={`${film.id}-${theory}`}
                            className={`${styles.theoryTag} ${getTheoryTagClass(index)}`}
                          >
                            {theory}
                          </span>
                        ))}
                      </div>

                      <div className={styles.buttonList}>
                        {theories.map((theory) => (
                          <button
                            key={`${film.id}-${theory}-button`}
                            type="button"
                            className={styles.actionButton}
                          >
                            Analyze with {theory}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </article>
              );
            })}
          </section>
        )}
      </div>
    </main>
  );
}