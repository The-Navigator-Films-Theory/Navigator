import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { ErrorState, Loading } from '../components/common';
import { fetchTheoryBySlug } from '../lib/queries/theories';
import styles from './TheoryDetail.module.scss';

export default function TheoryDetail() {
  const { slug = '' } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['theory', slug],
    queryFn: () => fetchTheoryBySlug(slug),
    enabled: Boolean(slug),
  });

  if (isLoading) return <Loading label="Loading theory..." />;
  if (error) return <ErrorState message="Theory could not be loaded." />;
  if (!data) return <ErrorState message="Theory not found." />;

  return (
    <article className={styles.article}>
      <Link to="/theory" className={styles.backLink}>
        Back to library
      </Link>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.overview}>{data.overview}</p>
      {data.key_thinkers && data.key_thinkers.length > 0 && (
        <section>
          <h2 className={styles.historyTitle}>Key Thinkers</h2>
          <div className={styles.pills}>
            {data.key_thinkers.map((thinker) => (
              <span key={thinker} className={styles.pill}>
                {thinker}
              </span>
            ))}
          </div>
        </section>
      )}
      {data.history && (
        <section>
          <h2 className={styles.historyTitle}>Historical Context</h2>
          <p className={styles.historyText}>{data.history}</p>
        </section>
      )}
      {data.key_points && data.key_points.length > 0 && (
        <section>
          <h2 className={styles.historyTitle}>Key Points</h2>
          <ul className={styles.points}>
            {data.key_points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
