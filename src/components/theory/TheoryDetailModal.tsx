import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { fetchTheoryCitations } from '../../lib/queries/theories';
import type { Theory } from '../../types/theory';
import styles from './TheoryDetailModal.module.scss';

import {
  BookOpen,
  CalendarDays,
  Users,
  Film,
  Quote,
} from "lucide-react";

type TheoryDetailModalProps = {
  item: Theory;
  onClose: () => void;
};

export default function TheoryDetailModal({ item, onClose }: TheoryDetailModalProps) {
  const filmItems = item.representative_films ?? [];

  const { data: linkedCitations = [] } = useQuery({
    queryKey: ['citations', item.slug],
    queryFn: () => fetchTheoryCitations(item.slug),
  });

  const fallbackCitations = useMemo(
    () =>
      (item.citations ?? []).slice(0, 3).map((citation, index) => ({
        id: `fallback-${item.slug}-${index}`,
        title: citation,
        author: null,
        year: null,
        description: null,
      })),
    [item.citations, item.slug],
  );

  const citationItems = linkedCitations.length > 0 ? linkedCitations : fallbackCitations;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>

        {/* HEADER */}
        <header className={styles.header}>
          <div className={styles.titleBlock}>
            <h2 className={styles.modalTitle}>{item.title}</h2>
            {item.overview && <p className={styles.caption}>{item.overview}</p>}
          </div>

          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </header>

        {/* CONTENT */}
        <div className={styles.content}>

          {/* LEFT SIDE */}
          <section className={styles.primaryCol}>
            
            <div className={styles.sectionHeading}>
              <BookOpen size={20} strokeWidth={2.2} />
              <h3 className={styles.sectionTitle}>Overview</h3>
            </div>
            <p className={styles.paragraph}>
              {item.description ?? 'No overview yet.'}
            </p>

            <div className={styles.sectionHeading}>
              <CalendarDays size={20} strokeWidth={2.2} />
              <h3 className={styles.sectionTitle}>Historical Context</h3>
            </div>
            <p className={styles.paragraph}>
              {item.history ?? 'Historical context not available yet.'}
            </p>

            {(item.key_points ?? []).length > 0 && (
              <>
                <h3 className={styles.sectionTitle}>Key Points</h3>
                <ul className={styles.pointList}>
                  {(item.key_points ?? []).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </>
            )}
          </section>

          {/* RIGHT SIDE */}
          <aside className={styles.sideCol}>

            {(item.key_thinkers ?? []).length > 0 && (
              <section>
                <div className={styles.sectionHeading}>
                  <Users size={20} strokeWidth={2.2} />
                  <h3 className={styles.sectionTitle}>Key Thinkers</h3>
                </div>

                <div className={styles.pills}>
                  {(item.key_thinkers ?? []).map((t: string) => (
                    <button
                      key={t}
                      className={styles.pill}
                      onClick={() =>
                        window.open(`https://en.wikipedia.org/wiki/${t.replace(/ /g, "_")}`, "_blank")
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </section>
            )}

            {filmItems.length > 0 && (
              <section>
                <div className={styles.sectionHeading}>
                  <Film size={20} strokeWidth={2.2} />
                  <h3 className={styles.sectionTitle}>Representative Films</h3>
                </div>

                <div className={styles.filmList}>
                  {filmItems.map((film) => (
                    <article key={film.title} className={styles.filmCard}>
                      <img
                        className={styles.filmImage}
                        src={film.image}
                        alt={film.title}
                      />
                      <div>
                        <p className={styles.filmTitle}>{film.title}</p>
                        <p className={styles.filmSubtitle}>{film.subtitle}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {citationItems.length > 0 && (
              <section>
                <div className={styles.sectionHeading}>
                  <Quote size={20} strokeWidth={2.2} />
                  <h3 className={styles.sectionTitle}>Key Citations</h3>
                </div>

                <div className={styles.citationList}>
                  {citationItems.map((citation) => (
                    <blockquote key={citation.id} className={styles.citationCard}>
                      <p className={styles.citationTitle}>{citation.title}</p>

                      {(citation.author || citation.year) && (
                        <p className={styles.citationMeta}>
                          {[citation.author, citation.year ? `(${citation.year})` : null]
                            .filter(Boolean)
                            .join(' ')}
                        </p>
                      )}

                      {citation.description && (
                        <p className={styles.citationExcerpt}>
                          {citation.description}
                        </p>
                      )}
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

          </aside>
        </div>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <button className={styles.buttonPrimary}>
            Test Your Knowledge
          </button>
          <button className={styles.buttonSecondary}>
            Analyze a Film
          </button>
        </footer>
      </div>
    </div>
  );
}