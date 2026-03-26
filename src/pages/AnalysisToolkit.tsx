import { useEffect, useState } from 'react';
import styles from './AnalysisToolkit.module.scss';
import { fetchFilms, type Film } from '../lib/queries/films';

export default function AnalysisToolkit() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Analysis Toolkit</h1>
        <p className={styles.subtitle}>
          Use guided tools and frameworks to support deeper film and media analysis.
        </p>

        {loading ? (
          <p className={styles.state}>Loading films...</p>
        ) : error ? (
          <p className={styles.state}>{error}</p>
        ) : films.length === 0 ? (
          <p className={styles.state}>No films available yet.</p>
        ) : (
          <div className={styles.grid}>
            {films.map((film) => (
              <article key={film.id} className={styles.card}>
                <h2 className={styles.cardTitle}>{film.title}</h2>

                {film.director || film.year ? (
                  <p className={styles.meta}>
                    {[film.director, film.year].filter(Boolean).join(' • ')}
                  </p>
                ) : null}

                {film.synopsis ? (
                  <p className={styles.description}>{film.synopsis}</p>
                ) : (
                  <p className={styles.description}>No synopsis available.</p>
                )}

                {film.relevant_theories && film.relevant_theories.length > 0 ? (
                  <div className={styles.theoryList}>
                    {film.relevant_theories.map((theory) => (
                      <span key={theory} className={styles.theoryTag}>
                        {theory}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}