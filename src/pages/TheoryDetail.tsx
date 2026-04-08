// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ErrorState, Loading } from '../components/common';
import { trackEngagementEvent } from '../lib/engagement';
import { fetchTheoryBySlug } from '../lib/queries/theories';
import styles from './TheoryDetail.module.scss';

export default function TheoryDetail() {
  const { slug = '' } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['theory', slug],
    queryFn: () => fetchTheoryBySlug(slug),
    enabled: Boolean(slug),
  });

  useEffect(() => {
    if (!data?.id) return;

    void trackEngagementEvent({
      eventType: 'viewed_theory',
      relatedType: 'theory',
      relatedId: data.id,
      metadata: { slug },
    });
  }, [data?.id, slug]);

  if (isLoading) return <Loading label="Loading theory..." />;
  if (error) return <ErrorState message="Theory could not be loaded." />;
  if (!data) return <ErrorState message="Theory not found." />;

  return (
    <article className={styles.article}>
      <Link to="/theory" className={styles.backLink}>
        Back to library
      </Link>

      <header className={styles.hero}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.caption}>{data.overview}</p>
      </header>

      <div className={styles.layout}>
        <div className={styles.mainColumn}>
          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.description}>{data.description}</p>
          </section>

          {data.history && (
            <section className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>Historical Context</h2>
              <p className={styles.historyText}>{data.history}</p>
            </section>
          )}

          {data.key_points && data.key_points.length > 0 && (
            <section className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>Key Points</h2>
              <ul className={styles.points}>
                {data.key_points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className={styles.sideColumn}>
          {data.key_thinkers && data.key_thinkers.length > 0 && (
            <section className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>Key Thinkers</h2>
              <div className={styles.pills}>
                {data.key_thinkers.map((thinker) => (
                  <span key={thinker} className={styles.pill}>
                    {thinker}
                  </span>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>
    </article>
  );
}