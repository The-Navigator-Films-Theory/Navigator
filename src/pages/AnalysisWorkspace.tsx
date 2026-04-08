// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './AnalysisWorkspace.module.scss';
import { fetchFilmById } from '../lib/queries/films';
import type { Film } from '../lib/queries/films';

type Recommendation = {
  title: string;
  score: string;
  description: string;
  tag: 'article' | 'film' | 'theory' | 'book';
};

type PromptSection = {
  title: string;
  bullets: string[];
  placeholder: string;
};

const recommendationsByTheory: Record<string, Recommendation[]> = {
  horror: [
    {
      title: 'Recommended Reading: "Visual Pleasure and Narrative Cinema"',
      score: '95%',
      description:
        'Based on your interest in feminist theory, this foundational essay by Laura Mulvey would enhance your analysis.',
      tag: 'article',
    },
    {
      title: 'Similar Film: "Portrait of a Lady on Fire"',
      score: '88%',
      description:
        'This film offers an interesting counter-example to traditional male gaze cinema.',
      tag: 'film',
    },
    {
      title: 'Theory Connection: Intersectional Analysis',
      score: '82%',
      description:
        'Consider how race and class intersect with gender in your analysis.',
      tag: 'theory',
    },
    {
      title: 'Essential Reading: "Men, Women, and Chain Saws"',
      score: '90%',
      description:
        "Carol Clover's analysis of gender in horror films provides crucial context for horror theory.",
      tag: 'book',
    },
    {
      title: 'Comparative Analysis: "Get Out" and Social Horror',
      score: '85%',
      description:
        "Jordan Peele's film demonstrates how horror can address contemporary racial anxieties.",
      tag: 'film',
    },
  ],
  feminist: [
    {
      title: 'Recommended Reading: "Visual Pleasure and Narrative Cinema"',
      score: '95%',
      description:
        'Based on your selected theory, this foundational essay by Laura Mulvey would enhance your analysis.',
      tag: 'article',
    },
    {
      title: 'Similar Film: "Portrait of a Lady on Fire"',
      score: '88%',
      description:
        'This film offers an interesting counter-example to traditional male gaze cinema.',
      tag: 'film',
    },
    {
      title: 'Theory Connection: Intersectional Analysis',
      score: '82%',
      description:
        'Consider how race and class intersect with gender in your analysis.',
      tag: 'theory',
    },
    {
      title: 'Essential Reading: "Men, Women, and Chain Saws"',
      score: '90%',
      description:
        "Carol Clover's analysis of gender in horror films provides useful context for horror theory.",
      tag: 'book',
    },
  ],
  psychoanalytic: [
    {
      title: 'Recommended Reading: "The Imaginary Signifier"',
      score: '93%',
      description:
        'Christian Metz connects psychoanalysis and cinema in a way that can deepen your reading of spectatorship.',
      tag: 'book',
    },
    {
      title: 'Essential Reading: "Freud and the Cinema"',
      score: '87%',
      description:
        'A useful framework for reading repression, desire, and symbolic imagery in film.',
      tag: 'article',
    },
    {
      title: 'Theory Connection: The Unconscious',
      score: '85%',
      description:
        'Consider how hidden desires, anxieties, and symbolic substitutions shape your interpretation.',
      tag: 'theory',
    },
    {
      title: 'Comparative Film: "Black Swan"',
      score: '86%',
      description:
        'A strong comparative text for thinking through fragmentation, doubling, and psychological instability.',
      tag: 'film',
    },
  ],
  auteur: [
    {
      title: 'Recommended Reading: "Notes on the Auteur Theory"',
      score: '91%',
      description:
        'Andrew Sarris provides a foundational framework for understanding authorship in cinema.',
      tag: 'article',
    },
    {
      title: 'Essential Reading: "A Certain Tendency of the French Cinema"',
      score: '88%',
      description:
        "Truffaut's essay offers historical grounding for auteur criticism and directorial vision.",
      tag: 'article',
    },
    {
      title: 'Theory Connection: Recurring Style',
      score: '84%',
      description:
        "Track recurring themes, visual patterns, and narrative concerns across the director's work.",
      tag: 'theory',
    },
    {
      title: 'Comparative Film: "Breathless"',
      score: '86%',
      description:
        'A useful comparison for examining directorial style, formal innovation, and authorship.',
      tag: 'film',
    },
  ],
  postmodern: [
    {
      title: 'Recommended Reading: "Postmodernism, or, The Cultural Logic of Late Capitalism"',
      score: '94%',
      description:
        "Jameson's work helps frame parody, pastiche, irony, and fragmentation in your analysis.",
      tag: 'book',
    },
    {
      title: 'Comparative Film: "Blade Runner"',
      score: '89%',
      description:
        'A strong comparative film for exploring simulation, hybridity, and postmodern aesthetics.',
      tag: 'film',
    },
    {
      title: 'Theory Connection: Simulation and Irony',
      score: '83%',
      description:
        'Look at how the film destabilizes reality, genre boundaries, and stable identity.',
      tag: 'theory',
    },
    {
      title: 'Comparative Film: "Scream"',
      score: '86%',
      description:
        'A useful case study in self-reference, genre quotation, and postmodern play.',
      tag: 'film',
    },
  ],
};

function normalizeTheoryId(theory: string): string {
  const lower = theory.trim().toLowerCase();

  if (lower.includes('horror')) return 'horror';
  if (lower.includes('feminist')) return 'feminist';
  if (lower.includes('psychoanalytic')) return 'psychoanalytic';
  if (lower.includes('auteur')) return 'auteur';
  if (lower.includes('postmodern')) return 'postmodern';

  return lower;
}

function getAnalysisQuestions(theory: string): PromptSection[] | null {
  const theoryId = normalizeTheoryId(theory);

  const questionSets: Record<string, PromptSection[]> = {
    horror: [
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
    ],
    feminist: [
      {
        title: 'Gender Representation',
        bullets: [
          'How are women represented in the film?',
          'Do female characters challenge or reinforce stereotypes?',
          'How are masculinity and femininity constructed?',
        ],
        placeholder:
          'Analyze gender representation, stereotypes, and visual framing...',
      },
      {
        title: 'Power and Agency',
        bullets: [
          'Who has narrative power in the film?',
          'Do female characters act with agency or remain constrained?',
          'How do relationships reflect structures of power?',
        ],
        placeholder:
          'Examine how the film distributes power, agency, and control...',
      },
      {
        title: 'The Gaze and Spectatorship',
        bullets: [
          'How does the camera position the viewer?',
          'Does the film reproduce or disrupt the male gaze?',
          'How are bodies framed and looked at?',
        ],
        placeholder:
          'Discuss the gaze, spectatorship, and visual pleasure in the film...',
      },
    ],
    psychoanalytic: [
      {
        title: 'Unconscious Desires and Fears',
        bullets: [
          'What hidden desires or anxieties drive the characters?',
          'How does the film externalize psychological conflict?',
          'What repressed material returns through symbols or actions?',
        ],
        placeholder:
          'Analyze unconscious desire, repression, and psychic conflict...',
      },
      {
        title: 'Dream Logic and Symbolism',
        bullets: [
          'Does the film use dream-like structures or irrational imagery?',
          'What recurring symbols carry psychological meaning?',
          'How do fantasy and reality interact?',
        ],
        placeholder:
          'Examine dream logic, symbols, and unconscious meaning...',
      },
      {
        title: 'Spectatorship and Identification',
        bullets: [
          'How does the viewer identify with particular characters or perspectives?',
          'What pleasures or anxieties are produced in spectatorship?',
          'How does the film shape desire through looking?',
        ],
        placeholder:
          'Discuss identification, spectatorship, and psychoanalytic viewing...',
      },
    ],
    auteur: [
      {
        title: 'Directorial Style and Vision',
        bullets: [
          "What recurring stylistic choices define the director's voice?",
          'How do visual or narrative patterns reflect authorship?',
          'What distinguishes this film from others in the genre?',
        ],
        placeholder:
          "Analyze the director's stylistic signature and authorial vision...",
      },
      {
        title: 'Recurring Themes',
        bullets: [
          "What themes connect this film to the director's broader body of work?",
          'How are familiar motifs or concerns expressed?',
          'What worldview seems to emerge?',
        ],
        placeholder:
          "Examine recurring themes and concerns across the director's work...",
      },
      {
        title: 'Creative Control and Collaboration',
        bullets: [
          "How visible is the director's control over the film?",
          'What role do genre, industry, or collaborators play?',
          'How does the film balance authorship with collaboration?',
        ],
        placeholder:
          'Discuss authorship, collaboration, and the limits of auteur theory...',
      },
    ],
    postmodern: [
      {
        title: 'Fragmentation and Irony',
        bullets: [
          'How does the film use irony, parody, or fragmentation?',
          'Does it resist stable meaning or unified identity?',
          'How does it destabilize traditional storytelling?',
        ],
        placeholder:
          'Analyze fragmentation, irony, and instability in the film...',
      },
      {
        title: 'Pastiche and Intertextuality',
        bullets: [
          'What other genres, films, or cultural references does the film quote?',
          'How does it reuse or remix existing styles?',
          'Is it parody, homage, or pastiche?',
        ],
        placeholder:
          'Examine intertextuality, quotation, and postmodern pastiche...',
      },
      {
        title: 'Simulation and Reality',
        bullets: [
          'How does the film blur the line between reality and representation?',
          'Are there signs of simulation, hyperreality, or media saturation?',
          'How does technology shape identity or perception?',
        ],
        placeholder:
          'Discuss simulation, hyperreality, and the instability of the real...',
      },
    ],
  };

  return questionSets[theoryId] ?? null;
}

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

export default function AnalysisWorkspace() {
  const navigate = useNavigate();
  const { filmId } = useParams();
  const [searchParams] = useSearchParams();
  const selectedTheory = searchParams.get('theory') ?? '';

  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState<Record<string, string>>({});

  const prompts = useMemo(() => getAnalysisQuestions(selectedTheory), [selectedTheory]);

  const recommendations = useMemo(() => {
    const theoryId = normalizeTheoryId(selectedTheory);
    return recommendationsByTheory[theoryId] ?? [];
  }, [selectedTheory]);

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

  const handleResponseChange = (sectionTitle: string, value: string) => {
    setResponses((prev) => ({
      ...prev,
      [sectionTitle]: value,
    }));
  };

  const handleExport = () => {
    if (!film || !prompts) return;

    const content = [
      `Analyzing: ${film.title}`,
      titleLine,
      '',
      ...prompts.flatMap((prompt) => [
        prompt.title,
        ...prompt.bullets.map((bullet) => `- ${bullet}`),
        '',
        responses[prompt.title] || '',
        '',
      ]),
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${film.title}-${formatTheoryName(selectedTheory)}-analysis.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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

  if (!prompts) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.comingSoonCard}>
            <div className={styles.comingSoonIcon} aria-hidden="true">
              <svg
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            </div>

            <h1 className={styles.comingSoonTitle}>Template Coming Soon</h1>

            <p className={styles.comingSoonText}>
              Analysis template for {formatTheoryName(selectedTheory)} is being developed.
            </p>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => navigate('/analysis')}
            >
              Back to Selection
            </button>
          </div>
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

              <button type="button" className={styles.exportButton} onClick={handleExport}>
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

                <textarea
                  className={styles.textarea}
                  placeholder={prompt.placeholder}
                  value={responses[prompt.title] ?? ''}
                  onChange={(event) => handleResponseChange(prompt.title, event.target.value)}
                />
              </section>
            ))}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarHeading}>
                <span className={styles.sidebarIcon} aria-hidden="true">
                  💡
                </span>
                <h2 className={styles.sidebarTitle}>Reading Recommendations</h2>
              </div>

              <div className={styles.recommendationList}>
                {recommendations.map((item) => (
                  <article key={item.title} className={styles.recommendationCard}>
                    <div className={styles.recommendationHeader}>
                      <h3 className={styles.recommendationTitle}>{item.title}</h3>
                      <span className={styles.score}>☆ {item.score}</span>
                    </div>

                    <p className={styles.recommendationText}>{item.description}</p>

                    <span
                      className={`${styles.tag} ${
                        item.tag === 'article'
                          ? styles.tagArticle
                          : item.tag === 'film'
                          ? styles.tagFilm
                          : item.tag === 'theory'
                          ? styles.tagTheory
                          : styles.tagBook
                      }`}
                    >
                      {item.tag}
                    </span>
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