import { useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './AnalysisWorkspace.module.scss';
import { fetchFilmById } from '../lib/queries/films';
import { useEffect, useState } from 'react';
import type { Film } from '../lib/queries/films';

type Recommendation = {
  title: string;
  score: string;
  description: string;
  tag: string;
};

const recommendations: Recommendation[] = [
  {
    title: '"Visual Pleasure and Narrative Cinema"',
    score: '95%',
    description:
      'Based on your selected theory, this foundational reading can deepen your analysis of spectatorship, identity, and representation.',
    tag: 'article',
  },
  {
    title: '"Portrait of a Lady on Fire"',
    score: '88%',
    description:
      'This film offers a useful point of comparison for visual framing, subjectivity, and relational dynamics.',
    tag: 'film',
  },
  {
    title: 'Intersectional Analysis',
    score: '82%',
    description:
      'Consider how race, class, gender, and power intersect with your chosen framework during analysis.',
    tag: 'theory',
  },
  {
    title: '"Men, Women, and Chain Saws"',
    score: '90%',
    description:
      'A strong secondary reading for thinking through genre conventions, embodiment, and audience positioning.',
    tag: 'book',
  },
];

function formatTheoryName(theory: string): string {
  const trimmed = theory.trim();
  const lower = trimmed.toLowerCase();

  if (lower.endsWith('theory')) {
    return trimmed
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    trimmed
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') + ' Theory'
  );
}

function formatMeta(director: string | null, year: number | null) {
  if (director && year) return `${director} (${year})`;
  if (director) return director;
  if (year) return String(year);
  return '';
}

const prompts = [
  {
    title: 'Fear Mechanisms',
    bullets: [
      'How does the film create and sustain fear in viewers?',
      'What formal techniques are used to generate anxiety?',
      'How does the film play with audience expectations?',
    ],
    placeholder:
      'Analyze the specific techniques used to create fear, suspense, and horror...',
  },
  {
    title: 'The Monstrous',
    bullets: [
      'What does the monster or threat represent symbolically?',
      'How does the film define normalcy versus monstrosity?',
      'What social anxieties does the horror element embody?',
    ],
    placeholder:
      'Examine the nature of the monstrous and what it represents culturally and psychologically...',
  },
  {
    title: 'Survival and Resolution',
    bullets: [
      'Who survives and why? What does this suggest about social values?',
      'How is the threat ultimately contained or defeated?',
      "What does the film's resolution reveal about its ideological position?",
    ],
    placeholder:
      'Analyze patterns of survival and how the horror is resolved or contained...',
  },
];

export default function AnalysisWorkspace() {
  const navigate = useNavigate();
  const { filmId } = useParams();
  const [searchParams] = useSearchParams();
  const selectedTheory = searchParams.get('theory') ?? '';

  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilm = async () => {
      if (!filmId) return;

      try {
        setLoading(true);
        const data = await fetchFilmById(filmId);
        setFilm(data);
      } catch (error) {
        console.error('Failed to load film:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFilm();
  }, [filmId]);

  const titleLine = useMemo(() => {
    if (!film) return '';
    return `Using ${formatTheoryName(selectedTheory)} • ${formatMeta(film.director, film.year)}`;
  }, [film, selectedTheory]);

  if (loading) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <p className={styles.state}>Loading analysis workspace...</p>
        </div>
      </main>
    );
  }

  if (!film) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <button type="button" className={styles.backButton} onClick={() => navigate('/analysis')}>
            ← Back to Selection
          </button>
          <p className={styles.state}>Film not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <button type="button" className={styles.backButton} onClick={() => navigate('/analysis')}>
          ← Back to Selection
        </button>

        <div className={styles.layout}>
          <div className={styles.main}>
            <section className={styles.heroCard}>
              <div>
                <h1 className={styles.heroTitle}>Analyzing: {film.title}</h1>
                <p className={styles.heroMeta}>{titleLine}</p>
              </div>

              <button type="button" className={styles.exportButton}>
                Export Analysis
              </button>
            </section>

            {prompts.map((prompt) => (
              <section key={prompt.title} className={styles.promptCard}>
                <h2 className={styles.promptTitle}>{prompt.title}</h2>

                <ul className={styles.bulletList}>
                  {prompt.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <textarea className={styles.textarea} placeholder={prompt.placeholder} />
              </section>
            ))}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h2 className={styles.sidebarTitle}>Reading Recommendations</h2>

              <div className={styles.recommendationList}>
                {recommendations.map((item) => (
                  <article key={item.title} className={styles.recommendationCard}>
                    <div className={styles.recommendationHeader}>
                      <h3 className={styles.recommendationTitle}>{item.title}</h3>
                      <span className={styles.score}>☆ {item.score}</span>
                    </div>

                    <p className={styles.recommendationText}>{item.description}</p>

                    <span className={styles.tag}>{item.tag}</span>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}