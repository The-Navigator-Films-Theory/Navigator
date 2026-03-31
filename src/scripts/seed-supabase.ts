import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import rawData from '../data/raw_data.json';

type RawTheory = {
  id: string;
  name?: string;
  title?: string;
  slug?: string;
};

type RawQuizOption = {
  id: string;
  text: string;
};

type RawQuizQuestion = {
  id: string;
  theoryId: string;
  question: string;
  options: RawQuizOption[];
  correctAnswer: string;
  explanation?: string;
};

type RawGame = {
  title: string;
  description: string;
  type: string;
  difficulty?: string;
};

type RawFlashcard = {
  id: string;
  term?: string;
  definition?: string;
  front?: string;
  back?: string;
  theoryId?: string;
};

type RawVocabulary = {
  id: string;
  term: string;
  pronunciation?: string;
  definition: string;
  etymology?: string;
  categories?: string[];
  difficulty?: string;
  relatedTerms?: string[];
  relatedTheories?: string[];
  usageExample?: string;
  featured?: boolean;
};

type RawFilm = {
  id: string;
  title: string;
  director?: string;
  year?: number;
  poster?: string;
  description?: string;
  relevantTheories?: string[];
};

dotenv.config({ path: '.env' });

// You can find these in your Supabase project settings -> API
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_KEY =
  process.env.VITE_SUPABASE_SERVICE_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  throw new Error(
    'Supabase URL or Service Key is missing. Make sure to set VITE_SUPABASE_URL and VITE_SUPABASE_SERVICE_KEY in your .env file.'
  );
}

// We use the service_role key for admin-level access required for a seeding script.
const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function seedDatabase() {
  console.log('Starting database seed...');

  // 0. Seed Theories
  console.log('Seeding theories...');
  const theories = ((rawData as { theories?: RawTheory[] }).theories ?? []) as RawTheory[];

  if (theories.length === 0) {
    console.warn('No theories found in raw_data.json.');
  } else {
    const theoriesPayload = theories.map((theory: any) => ({
      title: theory.title ?? theory.name ?? '',
      slug: theory.slug ?? theory.id,
      category: theory.category ?? null,
      overview: theory.summary ?? theory.overview ?? null,
      history: theory.description ?? theory.history ?? null,
      description: theory.description ?? null,
      color: theory.color ?? null,
      key_points: theory.keyPoints ?? theory.key_points ?? [],
      key_thinkers: theory.keyThinkers ?? theory.key_thinkers ?? [],
      representative_films:
        theory.representativeFilms ?? theory.representative_films ?? [],
      citations: theory.citations ?? [],
      status: 'published',
    }));

    const { error: theoriesError } = await supabaseAdmin
      .from('theories')
      .upsert(theoriesPayload, { onConflict: 'slug' });

    if (theoriesError) {
      console.error('Error seeding theories:', theoriesError.message);
    } else {
      console.log(`Inserted/updated ${theoriesPayload.length} theories.`);
    }
  }

  // 1. Seed Vocabulary (complete set)
  console.log('\nSeeding vocabulary...');
  const vocabulary = ((rawData as { vocabulary?: RawVocabulary[] }).vocabulary ?? []) as RawVocabulary[];

  if (vocabulary.length === 0) {
    console.warn('No vocabulary found in raw_data.json.');
  } else {
    const vocabPayload = vocabulary.map((term: RawVocabulary) => ({
      term: term.term,
      definition: term.definition,
      example_usage: term.usageExample ?? null,
      difficulty: term.difficulty ?? 'beginner',
      tags: term.categories ?? [],
      related_terms: term.relatedTerms ?? [],
      related_theories: term.relatedTheories ?? [],
      featured: term.featured ?? false,
      status: 'published',
    }));

    const { error: vocabError } = await supabaseAdmin
      .from('vocabulary_terms')
      .upsert(vocabPayload, { onConflict: 'term' });

    if (vocabError) {
      console.error('Error seeding vocabulary:', vocabError.message);
    } else {
      console.log(`Inserted/updated ${vocabPayload.length} vocabulary terms.`);
    }
  }

  // 2. Seed Films
  console.log('\nSeeding films...');
  const films = ((rawData as { films?: RawFilm[] }).films ?? []) as RawFilm[];

  if (films.length === 0) {
    console.warn('No films found in raw_data.json.');
  } else {
    const filmsPayload = films.map((film: RawFilm) => ({
      title: film.title,
      director: film.director ?? null,
      year: film.year ?? null,
      synopsis: film.description ?? null,
      film_id: film.id ?? null,
      poster_url: film.poster ?? null,
      relevant_theories: film.relevantTheories ?? [],
    }));

    const { error: filmsError } = await supabaseAdmin
      .from('films')
      .upsert(filmsPayload, { onConflict: 'film_id' });

    if (filmsError) {
      console.error('Error seeding films:', filmsError.message);
    } else {
      console.log(`Inserted/updated ${filmsPayload.length} films.`);
    }
  }

  // 3. Seed Quizzes and their Questions from JSON quizQuestions grouped by theoryId.
  console.log('\nSeeding quizzes and questions...');
  const allQuestions =
    ((rawData as { quizQuestions?: RawQuizQuestion[] }).quizQuestions ?? []) as RawQuizQuestion[];

  if (allQuestions.length === 0) {
    console.warn(
      'No quizQuestions found in raw_data.json. Re-run extractor.ts before seeding quizzes.'
    );
  }

  const theoryTitleById = new Map<string, string>(
    theories.map((t) => [t.id, t.title ?? t.name ?? t.id])
  );

  const questionsByTheory = new Map<string, RawQuizQuestion[]>();
  for (const question of allQuestions) {
    const existing = questionsByTheory.get(question.theoryId) ?? [];
    existing.push(question);
    questionsByTheory.set(question.theoryId, existing);
  }

  for (const [theoryId, questionsForTheory] of questionsByTheory.entries()) {
    const theoryLabel = theoryTitleById.get(theoryId) ?? theoryId;
    const quizTitle = `${theoryLabel} Quiz`;

    let quizId: string | null = null;
    const { data: existingQuiz, error: existingQuizError } = await supabaseAdmin
      .from('quizzes')
      .select('id, title')
      .eq('topic', theoryId)
      .limit(1)
      .maybeSingle();

    if (existingQuizError) {
      console.error(
        `Error checking existing quiz for topic "${theoryId}":`,
        existingQuizError.message
      );
      continue;
    }

    if (existingQuiz?.id) {
      quizId = existingQuiz.id;
      const { error: updateQuizError } = await supabaseAdmin
        .from('quizzes')
        .update({
          title: quizTitle,
          description: `Quiz for ${theoryLabel}`,
          difficulty: 'medium',
          status: 'published',
        })
        .eq('id', quizId);

      if (updateQuizError) {
        console.error(`Error updating quiz "${quizTitle}":`, updateQuizError.message);
        continue;
      }
    } else {
      const { data: quiz, error: quizError } = await supabaseAdmin
        .from('quizzes')
        .insert({
          title: quizTitle,
          topic: theoryId,
          description: `Quiz for ${theoryLabel}`,
          difficulty: 'medium',
          status: 'published',
        })
        .select('id, title')
        .single();

      if (quizError) {
        console.error(`Error inserting quiz "${quizTitle}":`, quizError.message);
        continue;
      }

      quizId = quiz.id;
      console.log(`Inserted quiz: ${quiz.title} (ID: ${quiz.id})`);
    }

    if (!quizId) {
      continue;
    }

    const { error: deleteQuestionsError } = await supabaseAdmin
      .from('quiz_questions')
      .delete()
      .eq('quiz_id', quizId);

    if (deleteQuestionsError) {
      console.error(
        `Error clearing old questions for quiz "${quizTitle}":`,
        deleteQuestionsError.message
      );
      continue;
    }

    const questionsToInsert = questionsForTheory.map((q: RawQuizQuestion) => {
      const optionA = q.options[0]?.text ?? '';
      const optionB = q.options[1]?.text ?? '';
      const optionC = q.options[2]?.text ?? '';
      const optionD = q.options[3]?.text ?? '';
      const correctIndex = q.options.findIndex((option) => option.id === q.correctAnswer);
      const correctOption = ['A', 'B', 'C', 'D'][correctIndex] ?? 'A';

      return {
        quiz_id: quizId,
        question_text: q.question,
        option_a: optionA,
        option_b: optionB,
        option_c: optionC,
        option_d: optionD,
        correct_option: correctOption,
        explanation: q.explanation ?? null,
      };
    });

    if (questionsToInsert.length > 0) {
      const { error: questionsError } = await supabaseAdmin
        .from('quiz_questions')
        .insert(questionsToInsert);

      if (questionsError) {
        if (questionsError.message.includes('correct_option')) {
          const legacyQuestionsToInsert = questionsForTheory.map((q: RawQuizQuestion) => ({
            quiz_id: quizId,
            question_text: q.question,
            options: q.options.map((option) => option.text),
            correct_answer: q.correctAnswer,
            explanation: q.explanation ?? null,
          }));

          const { error: legacyQuestionsError } = await supabaseAdmin
            .from('quiz_questions')
            .insert(legacyQuestionsToInsert);

          if (legacyQuestionsError) {
            console.error(
              `Error inserting questions for quiz "${quizTitle}" (legacy fallback failed):`,
              legacyQuestionsError.message
            );
          } else {
            console.log(
              `  -> Inserted ${legacyQuestionsToInsert.length} questions for ${quizTitle} using legacy schema.`
            );
          }
        } else {
          console.error(
            `Error inserting questions for quiz "${quizTitle}":`,
            questionsError.message
          );
        }
      } else {
        console.log(`  -> Inserted ${questionsToInsert.length} questions for ${quizTitle}.`);
      }
    }
  }

  // 4. Seed Flashcards into vocabulary_terms
  console.log('\nSeeding flashcards...');
  const flashcards = ((rawData as { flashcards?: RawFlashcard[] }).flashcards ?? []) as RawFlashcard[];

  if (flashcards.length === 0) {
    console.warn('No flashcards found in raw_data.json.');
  } else {
    const flashcardsPayload = flashcards
      .map((card) => {
        const term = (card.term ?? card.front ?? '').trim();
        const definition = (card.definition ?? card.back ?? '').trim();

        if (!term || !definition) {
          return null;
        }

        return {
          term,
          definition,
          example_usage: null,
          difficulty: 'beginner',
          tags: ['flashcards'] as string[],
          related_terms: [] as string[],
          related_theories: card.theoryId ? [card.theoryId] : [],
          featured: false,
          status: 'published',
        };
      })
      .filter((row) => row !== null);

    if (flashcardsPayload.length > 0) {
      const { error: flashcardsError } = await supabaseAdmin
        .from('vocabulary_terms')
        .upsert(flashcardsPayload, { onConflict: 'term' });

      if (flashcardsError) {
        console.error(
          'Error seeding flashcards into vocabulary_terms:',
          flashcardsError.message
        );
      } else {
        console.log(`Inserted/updated ${flashcardsPayload.length} flashcards.`);
      }
    } else {
      console.warn('No valid flashcards to seed (missing term/definition).');
    }
  }

  // 5. Seed Games (optional)
  console.log('\nSeeding games...');
  const games = ((rawData as { games?: RawGame[] }).games ?? []) as RawGame[];

  if (games.length > 0) {
    const { error: gamesTableCheckError } = await supabaseAdmin
      .from('games')
      .select('id')
      .limit(1);

    if (gamesTableCheckError?.message.includes("table 'public.games'")) {
      console.warn('Skipping games seeding: public.games table does not exist in this Supabase project.');
      console.log('\nDatabase seed complete!');
      return;
    }
  }

  for (const gameData of games) {
    const { data: game, error: gameError } = await supabaseAdmin
      .from('games')
      .insert({
        title: gameData.title,
        description: gameData.description,
        type: gameData.type,
        difficulty: gameData.difficulty,
      })
      .select()
      .single();

    if (gameError) {
      console.error(`Error inserting game "${gameData.title}":`, gameError.message);
      continue;
    }
    console.log(`Inserted game: ${game.title} (ID: ${game.id})`);
  }

  console.log('\nDatabase seed complete!');
}

seedDatabase().catch((error) => {
  console.error('An unexpected error occurred during seeding:', error);
});