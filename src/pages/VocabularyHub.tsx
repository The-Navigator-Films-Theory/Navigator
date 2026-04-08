// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEngagementEvent } from '../lib/engagement';
import { fetchVocabularyTerms, type VocabularyTerm } from '../lib/queries/vocabulary';
import styles from './VocabularyHub.module.scss';

export default function VocabularyHub() {
  const navigate = useNavigate();
  const [terms, setTerms] = useState<VocabularyTerm[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('all');
  const [selectedTerm, setSelectedTerm] = useState<VocabularyTerm | null>(null);

  useEffect(() => {
    async function loadTerms() {
      try {
        const data = await fetchVocabularyTerms();
        setTerms(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadTerms();
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedTerm(null);
      }
    }

    if (selectedTerm) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedTerm]);

  useEffect(() => {
    if (!selectedTerm?.id) return;

    void trackEngagementEvent({
      eventType: 'viewed_vocabulary',
      relatedType: 'vocabulary',
      relatedId: selectedTerm.id,
      metadata: { term: selectedTerm.term },
    });
  }, [selectedTerm?.id, selectedTerm?.term]);

  const termOfTheDay = useMemo(() => {
    if (terms.length === 0) return null;

    const today = new Date();
    const dayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    let total = 0;
    for (let i = 0; i < dayKey.length; i += 1) {
      total += dayKey.charCodeAt(i);
    }

    const index = total % terms.length;
    return terms[index];
  }, [terms]);

  const featuredTerms = useMemo(() => {
    const getFirstByDifficulty = (level: string) =>
      terms.find(
        (term) =>
          term.id !== termOfTheDay?.id &&
          term.difficulty?.toLowerCase() === level
      );

    const beginner = getFirstByDifficulty('beginner');
    const intermediate = getFirstByDifficulty('intermediate');
    const advanced = getFirstByDifficulty('advanced');

    const selected = [beginner, intermediate, advanced].filter(
      (term): term is VocabularyTerm => term !== undefined
    );

    if (selected.length === 3) return selected;

    const usedIds = new Set(selected.map((term) => term.id));
    if (termOfTheDay) usedIds.add(termOfTheDay.id);

    const extras = terms
      .filter((term) => !usedIds.has(term.id))
      .slice(0, 3 - selected.length);

    return [...selected, ...extras];
  }, [terms, termOfTheDay]);

  const filteredTerms = terms.filter((term) => {
    const q = search.toLowerCase();

    const matchesSearch =
      term.term.toLowerCase().includes(q) ||
      term.definition.toLowerCase().includes(q) ||
      (term.etymology ?? '').toLowerCase().includes(q);

    const matchesDifficulty =
      difficulty === 'all' || term.difficulty?.toLowerCase() === difficulty;

    return matchesSearch && matchesDifficulty;
  });

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Film Theory Vocabulary</h1>
        <p className={styles.heroText}>
          Master the language of film theory with our comprehensive vocabulary library.
          From foundational concepts to advanced theoretical terms, build your critical
          vocabulary for deeper understanding and analysis.
        </p>
        <p className={styles.heroMeta}>
          {terms.length} terms • Beginner to Advanced • Cross-referenced
        </p>
      </div>

      <div className={styles.topGrid}>
        {termOfTheDay && (
          <aside className={styles.termOfDay}>
            <p className={styles.termOfDayLabel}>Term of the Day</p>
            <h2 className={styles.termOfDayTitle}>{termOfTheDay.term}</h2>
            <p className={styles.termOfDayText}>
              {truncateText(termOfTheDay.definition, 150)}
            </p>
            <button
              type="button"
              className={styles.learnMoreButton}
              onClick={() => setSelectedTerm(termOfTheDay)}
            >
              Learn More
            </button>
          </aside>
        )}

        <div className={styles.featuredBlock}>
          <h2 className={styles.featuredTitle}>Featured Terms</h2>

          <div className={styles.featuredList}>
            {featuredTerms.map((term) => (
              <button
                key={term.id}
                type="button"
                className={styles.featuredCard}
                onClick={() => setSelectedTerm(term)}
              >
                <span
                  className={`${styles.badge} ${styles[getDifficultyClass(term.difficulty)]}`}
                >
                  {term.difficulty || 'general'}
                </span>

                <h3 className={styles.featuredCardTitle}>{term.term}</h3>
                <p className={styles.featuredCardText}>
                  {truncateText(term.definition, 95)}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search terms, definitions, or concepts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className={styles.filter}
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {loading && <p>Loading...</p>}

      {!loading && terms.length === 0 && <p>No vocabulary terms found.</p>}

      {!loading && (
        <p className={styles.results}>
          Showing {filteredTerms.length} term{filteredTerms.length === 1 ? '' : 's'}
        </p>
      )}

      <div className={styles.list}>
        {filteredTerms.map((term) => (
          <button
            key={term.id}
            type="button"
            className={styles.card}
            onClick={() => setSelectedTerm(term)}
          >
            <div className={styles.cardTop}>
              <div className={styles.cardHeader}>
                <span className={`${styles.badge} ${styles[getDifficultyClass(term.difficulty)]}`}>
                  {term.difficulty || 'general'}
                </span>

                {term.pronunciation && (
                  <span className={styles.pronunciation}>/{term.pronunciation}/</span>
                )}
              </div>

              <h3 className={styles.term}>{term.term}</h3>

              <p className={styles.definition}>{truncateText(term.definition, 150)}</p>

              {term.tags.length > 0 && (
                <div className={styles.tags}>
                  {term.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={tag}
                      className={`${styles.tag} ${
                        index % 3 === 0
                          ? styles.categoryPurple
                          : index % 3 === 1
                            ? styles.categoryBlue
                            : styles.categoryOrange
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {term.tags.length > 2 && (
                    <span className={styles.tagMuted}>+{term.tags.length - 2}</span>
                  )}
                </div>
              )}

              {term.related_terms.length > 0 && (
                <p className={styles.related}>
                  Related: {truncateText(term.related_terms.slice(0, 2).join(', '), 42)}
                  {term.related_terms.length > 2 ? '...' : ''}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {selectedTerm && (
        <div className={styles.modalOverlay} onClick={() => setSelectedTerm(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedTerm(null)}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{selectedTerm.term}</h2>

              <div className={styles.modalMeta}>
                <span
                  className={`${styles.badge} ${styles[getDifficultyClass(selectedTerm.difficulty)]}`}
                >
                  {selectedTerm.difficulty || 'general'}
                </span>

                {selectedTerm.pronunciation && (
                  <span className={styles.modalPronunciation}>
                    /{selectedTerm.pronunciation}/
                  </span>
                )}
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalSection}>
                <h3>Definition</h3>
                <p>{selectedTerm.definition}</p>
              </div>

              {selectedTerm.etymology && (
                <div className={styles.modalSection}>
                  <h3>Etymology</h3>
                  <p>{selectedTerm.etymology}</p>
                </div>
              )}

              {selectedTerm.example_usage && (
                <div className={styles.modalSection}>
                  <h3>Usage Example</h3>
                  <blockquote className={styles.exampleBox}>
                    “{selectedTerm.example_usage}”
                  </blockquote>
                </div>
              )}

              {selectedTerm.tags.length > 0 && (
                <div className={styles.modalSection}>
                  <h3>Categories</h3>
                  <div className={styles.modalPills}>
                    {selectedTerm.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className={`${styles.modalTag} ${
                          index % 3 === 0
                            ? styles.categoryPurple
                            : index % 3 === 1
                              ? styles.categoryBlue
                              : styles.categoryOrange
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedTerm.related_theories.length > 0 && (
                <div className={styles.modalSection}>
                  <h3>Related Theories</h3>
                  <div className={styles.modalTheoryGrid}>
                    {selectedTerm.related_theories.map((theory, index) => (
                      <div key={theory} className={styles.modalTheoryCard}>
                        <span
                          className={`${styles.theoryDot} ${
                            index % 3 === 0
                              ? styles.theoryDotBlue
                              : index % 3 === 1
                                ? styles.theoryDotOrange
                                : styles.theoryDotPurple
                          }`}
                        />
                        <div className={styles.theoryContent}>
                          <span className={styles.theoryTitle}>{theory}</span>
                          <span className={styles.theoryDesc}>
                            Related concept connected to this term.
                          </span>
                        </div>
                        <span className={styles.theoryArrow}>↗</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTerm.related_terms.length > 0 && (
                <div className={styles.modalSection}>
                  <h3>Related Terms</h3>
                  <div className={styles.modalPills}>
                    {selectedTerm.related_terms.map((related) => (
                      <span key={related} className={styles.modalRelatedPill}>
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.modalFooter}>
                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.primaryAction}
                    onClick={() => navigate('/flashcards')}
                  >
                    Study with Flashcards
                  </button>
                  <button
                    type="button"
                    className={styles.secondaryAction}
                    onClick={() => navigate('/theory')}
                  >
                    Explore Theories
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trim()}...`;
}

function getDifficultyClass(difficulty: string | null): string {
  const normalized = difficulty?.toLowerCase();

  if (normalized === 'beginner') return 'beginner';
  if (normalized === 'intermediate') return 'intermediate';
  if (normalized === 'advanced') return 'advanced';

  return 'general';
}