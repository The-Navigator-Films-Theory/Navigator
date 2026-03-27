import type { Flashcard, Game, QuizQuestion } from '../../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    theoryId: 'auteur',
    question: 'Who popularized Auteur Theory in America?',
    options: [
      { id: '1-1', text: 'François Truffaut' },
      { id: '1-2', text: 'Andrew Sarris' },
      { id: '1-3', text: 'Pauline Kael' },
      { id: '1-4', text: 'Jean-Luc Godard' }
    ],
    correctAnswer: '1-2',
    explanation: 'Andrew Sarris popularized Auteur Theory in America through his writings, particularly "Notes on the Auteur Theory in 1962."'
  },
  {
    id: '2',
    theoryId: 'feminist',
    question: 'What concept did Laura Mulvey introduce in "Visual Pleasure and Narrative Cinema"?',
    options: [
      { id: '2-1', text: 'The Female Gaze' },
      { id: '2-2', text: 'The Male Gaze' },
      { id: '2-3', text: 'Counter-Cinema' },
      { id: '2-4', text: 'Intersectionality' }
    ],
    correctAnswer: '2-2',
    explanation: 'Laura Mulvey introduced the concept of the "Male Gaze," describing how films are structured around masculine viewing pleasure.'
  },
  {
    id: '3',
    theoryId: 'psychoanalytic',
    question: 'Which psychoanalyst\'s work is most commonly applied to film theory?',
    options: [
      { id: '3-1', text: 'Carl Jung' },
      { id: '3-2', text: 'Jacques Lacan' },
      { id: '3-3', text: 'Sigmund Freud' },
      { id: '3-4', text: 'Both Freud and Lacan' }
    ],
    correctAnswer: '3-4',
    explanation: 'Both Freud and Lacan\'s work is extensively used in psychoanalytic film theory, with Lacan\'s concepts particularly influential.'
  },
  {
    id: '4',
    theoryId: 'horror',
    question: 'Who developed the "Final Girl" theory in horror films?',
    options: [
      { id: '4-1', text: 'Robin Wood' },
      { id: '4-2', text: 'Carol Clover' },
      { id: '4-3', text: 'Barbara Creed' },
      { id: '4-4', text: 'Noel Carroll' }
    ],
    correctAnswer: '4-2',
    explanation: 'Carol Clover developed the "Final Girl" theory, analyzing the surviving female character in slasher films.'
  },
  {
    id: '5',
    theoryId: 'cognitive',
    question: 'Cognitive film theory emphasizes:',
    options: [
      { id: '5-1', text: 'Unconscious desires' },
      { id: '5-2', text: 'Mental processing' },
      { id: '5-3', text: 'Social structures' },
      { id: '5-4', text: 'Historical context' }
    ],
    correctAnswer: '5-2',
    explanation: 'Cognitive film theory focuses on how viewers mentally process and understand films through psychological mechanisms.'
  },
  {
    id: '6',
    theoryId: 'marxist',
    question: 'Who wrote "The Work of Art in the Age of Mechanical Reproduction"?',
    options: [
      { id: '6-1', text: 'Karl Marx' },
      { id: '6-2', text: 'Walter Benjamin' },
      { id: '6-3', text: 'Theodor Adorno' },
      { id: '6-4', text: 'Louis Althusser' }
    ],
    correctAnswer: '6-2',
    explanation: 'Walter Benjamin wrote this influential essay examining how mechanical reproduction changes the nature of art and its social function.'
  },
  {
    id: '7',
    theoryId: 'postcolonial',
    question: 'What does "Third Cinema" refer to?',
    options: [
      { id: '7-1', text: 'European art cinema' },
      { id: '7-2', text: 'Hollywood blockbusters' },
      { id: '7-3', text: 'Revolutionary cinema from developing nations' },
      { id: '7-4', text: 'Documentary filmmaking' }
    ],
    correctAnswer: '7-3',
    explanation: 'Third Cinema refers to revolutionary filmmaking from developing nations that challenges both Hollywood and European art cinema.'
  },
  {
    id: '8',
    theoryId: 'genre',
    question: 'According to Rick Altman, genres function as:',
    options: [
      { id: '8-1', text: 'Fixed categories' },
      { id: '8-2', text: 'Cultural contracts' },
      { id: '8-3', text: 'Marketing tools' },
      { id: '8-4', text: 'Artistic movements' }
    ],
    correctAnswer: '8-2',
    explanation: 'Rick Altman argued that genres function as cultural contracts between filmmakers and audiences, creating shared expectations.'
  },
  {
    id: '9',
    theoryId: 'postmodern',
    question: 'Jean Baudrillard\'s concept of "simulacra" refers to:',
    options: [
      { id: '9-1', text: 'Realistic representations' },
      { id: '9-2', text: 'Copies without originals' },
      { id: '9-3', text: 'Documentary footage' },
      { id: '9-4', text: 'Special effects' }
    ],
    correctAnswer: '9-2',
    explanation: 'Baudrillard\'s simulacra are copies or representations that have no original referent, creating a world of pure simulation.'
  },
  {
    id: '10',
    theoryId: 'formalist',
    question: 'The "Kuleshov Effect" demonstrates:',
    options: [
      { id: '10-1', text: 'Camera movement' },
      { id: '10-2', text: 'The power of montage' },
      { id: '10-3', text: 'Sound design' },
      { id: '10-4', text: 'Color theory' }
    ],
    correctAnswer: '10-2',
    explanation: 'The Kuleshov Effect shows how editing/montage creates meaning through the juxtaposition of images.'
  },
  {
    id: '11',
    theoryId: 'critical-race',
    question: 'Who wrote "Black Looks: Race and Representation"?',
    options: [
      { id: '11-1', text: 'Tommy L. Lott' },
      { id: '11-2', text: 'bell hooks' },
      { id: '11-3', text: 'Manthia Diawara' },
      { id: '11-4', text: 'Jacqueline Stewart' }
    ],
    correctAnswer: '11-2',
    explanation: 'bell hooks wrote this influential work examining how Black people are represented in media and popular culture.'
  },
  {
    id: '12',
    theoryId: 'queer',
    question: 'Judith Butler\'s concept of "gender performativity" suggests that:',
    options: [
      { id: '12-1', text: 'Gender is biological' },
      { id: '12-2', text: 'Gender is performed through repeated acts' },
      { id: '12-3', text: 'Gender is fixed' },
      { id: '12-4', text: 'Gender is irrelevant' }
    ],
    correctAnswer: '12-2',
    explanation: 'Butler argues that gender is not innate but performed through repeated acts that create the illusion of a natural gender identity.'
  },
  {
    id: '13',
    theoryId: 'intersectional',
    question: 'The term "intersectionality" was coined by:',
    options: [
      { id: '13-1', text: 'bell hooks' },
      { id: '13-2', text: 'Kimberlé Crenshaw' },
      { id: '13-3', text: 'Patricia Hill Collins' },
      { id: '13-4', text: 'Audre Lorde' }
    ],
    correctAnswer: '13-2',
    explanation: 'Kimberlé Crenshaw coined the term "intersectionality" in 1989 to describe how multiple forms of discrimination overlap.'
  },
  {
    id: '14',
    theoryId: 'apparatus',
    question: 'Jean-Louis Baudry\'s apparatus theory focuses on:',
    options: [
      { id: '14-1', text: 'Film content' },
      { id: '14-2', text: 'Technological ideology' },
      { id: '14-3', text: 'Actor performance' },
      { id: '14-4', text: 'Box office success' }
    ],
    correctAnswer: '14-2',
    explanation: 'Baudry\'s apparatus theory examines how cinema\'s technological apparatus shapes ideology and spectatorship.'
  },
  {
    id: '15',
    theoryId: 'cultural',
    question: 'Stuart Hall\'s encoding/decoding model identifies how many types of readings?',
    options: [
      { id: '15-1', text: 'Two' },
      { id: '15-2', text: 'Three' },
      { id: '15-3', text: 'Four' },
      { id: '15-4', text: 'Five' }
    ],
    correctAnswer: '15-2',
    explanation: 'Hall identified three types of readings: preferred (dominant), negotiated, and oppositional readings.'
  },
  {
    id: '16',
    theoryId: 'spectator',
    question: 'Spectator theory primarily examines:',
    options: [
      { id: '16-1', text: 'Film production' },
      { id: '16-2', text: 'Audience engagement' },
      { id: '16-3', text: 'Technical aspects' },
      { id: '16-4', text: 'Historical context' }
    ],
    correctAnswer: '16-2',
    explanation: 'Spectator theory focuses on how audiences engage with and are positioned by films during viewing.'
  },
  {
    id: '17',
    theoryId: 'cultural-industries',
    question: 'The Frankfurt School\'s critique of cultural industries emphasizes:',
    options: [
      { id: '17-1', text: 'Artistic freedom' },
      { id: '17-2', text: 'Commodification of culture' },
      { id: '17-3', text: 'Technological innovation' },
      { id: '17-4', text: 'Audience empowerment' }
    ],
    correctAnswer: '17-2',
    explanation: 'The Frankfurt School criticized how culture becomes commodified and standardized under capitalism.'
  },
  {
    id: '18',
    theoryId: 'media-convergence',
    question: 'Henry Jenkins defines media convergence as:',
    options: [
      { id: '18-1', text: 'Technological merger' },
      { id: '18-2', text: 'Cultural shift' },
      { id: '18-3', text: 'Both technological and cultural' },
      { id: '18-4', text: 'Economic consolidation' }
    ],
    correctAnswer: '18-3',
    explanation: 'Jenkins argues that media convergence involves both technological changes and cultural shifts in how audiences engage with media.'
  },
  {
    id: '19',
    theoryId: 'fandom',
    question: 'Fan studies emphasizes audiences as:',
    options: [
      { id: '19-1', text: 'Passive consumers' },
      { id: '19-2', text: 'Active participants' },
      { id: '19-3', text: 'Economic units' },
      { id: '19-4', text: 'Cultural victims' }
    ],
    correctAnswer: '19-2',
    explanation: 'Fan studies views audiences as active participants who create their own meanings and cultural productions.'
  },
  {
    id: '20',
    theoryId: 'screen',
    question: 'Screen theory combines which theoretical approaches?',
    options: [
      { id: '20-1', text: 'Psychoanalysis and semiotics' },
      { id: '20-2', text: 'Marxism and feminism' },
      { id: '20-3', text: 'All of the above' },
      { id: '20-4', text: 'None of the above' }
    ],
    correctAnswer: '20-3',
    explanation: 'Screen theory integrates psychoanalytic, semiotic, and Marxist approaches to analyze cinema\'s ideological effects.'
  },
  {
    id: '21',
    theoryId: 'afrofuturist',
    question: 'The term "Afrofuturism" was coined by:',
    options: [
      { id: '21-1', text: 'Octavia Butler' },
      { id: '21-2', text: 'Mark Dery' },
      { id: '21-3', text: 'Sun Ra' },
      { id: '21-4', text: 'Kodwo Eshun' }
    ],
    correctAnswer: '21-2',
    explanation: 'Mark Dery coined the term "Afrofuturism" in 1993 to describe speculative fiction by African American authors.'
  },
  {
    id: '22',
    theoryId: 'posthuman',
    question: 'Donna Haraway\'s "Cyborg Manifesto" challenges the boundary between:',
    options: [
      { id: '22-1', text: 'Male and female' },
      { id: '22-2', text: 'Human and machine' },
      { id: '22-3', text: 'East and West' },
      { id: '22-4', text: 'Past and future' }
    ],
    correctAnswer: '22-2',
    explanation: 'Haraway\'s manifesto challenges traditional boundaries between human and machine, nature and culture.'
  },
  {
    id: '23',
    theoryId: 'realist',
    question: 'André Bazin believed cinema should:',
    options: [
      { id: '23-1', text: 'Manipulate reality' },
      { id: '23-2', text: 'Reveal reality' },
      { id: '23-3', text: 'Create fantasy' },
      { id: '23-4', text: 'Entertain audiences' }
    ],
    correctAnswer: '23-2',
    explanation: 'Bazin argued that cinema\'s primary function was to reveal reality through its photographic basis.'
  },
  {
    id: '24',
    theoryId: 'horror',
    question: 'According to Noel Carroll, horror films create fear through:',
    options: [
      { id: '24-1', text: 'Jump scares' },
      { id: '24-2', text: 'Monsters that violate categories' },
      { id: '24-3', text: 'Gore and violence' },
      { id: '24-4', text: 'Suspenseful music' }
    ],
    correctAnswer: '24-2',
    explanation: 'Carroll argues that horror monsters are frightening because they violate natural categories and boundaries.'
  },
  {
    id: '25',
    theoryId: 'auteur',
    question: 'The "politique des auteurs" was developed by critics at:',
    options: [
      { id: '25-1', text: 'Sight & Sound' },
      { id: '25-2', text: 'Cahiers du Cinéma' },
      { id: '25-3', text: 'Film Quarterly' },
      { id: '25-4', text: 'Cineaste' }
    ],
    correctAnswer: '25-2',
    explanation: 'The "politique des auteurs" was developed by French critics at Cahiers du Cinéma in the 1950s.'
  },
  {
    id: '26',
    theoryId: 'feminist',
    question: 'The concept of "counter-cinema" was proposed to:',
    options: [
      { id: '26-1', text: 'Increase box office' },
      { id: '26-2', text: 'Challenge patriarchal cinema' },
      { id: '26-3', text: 'Improve technology' },
      { id: '26-4', text: 'Reduce costs' }
    ],
    correctAnswer: '26-2',
    explanation: 'Counter-cinema was proposed as an alternative to mainstream patriarchal cinema structures.'
  },
  {
    id: '27',
    theoryId: 'structuralist',
    question: 'Binary oppositions in film narrative often include:',
    options: [
      { id: '27-1', text: 'Good vs. Evil' },
      { id: '27-2', text: 'Nature vs. Culture' },
      { id: '27-3', text: 'Order vs. Chaos' },
      { id: '27-4', text: 'All of the above' }
    ],
    correctAnswer: '27-4',
    explanation: 'Structuralist analysis identifies various binary oppositions that structure film narratives.'
  },
  {
    id: '28',
    theoryId: 'cognitive',
    question: 'Schema theory in film viewing refers to:',
    options: [
      { id: '28-1', text: 'Camera angles' },
      { id: '28-2', text: 'Mental frameworks' },
      { id: '28-3', text: 'Editing patterns' },
      { id: '28-4', text: 'Sound design' }
    ],
    correctAnswer: '28-2',
    explanation: 'Schema theory describes the mental frameworks viewers use to understand and interpret films.'
  },
  {
    id: '29',
    theoryId: 'montage',
    question: 'Eisenstein\'s concept of "dialectical montage" involves:',
    options: [
      { id: '29-1', text: 'Smooth transitions' },
      { id: '29-2', text: 'Collision of opposing images' },
      { id: '29-3', text: 'Parallel editing' },
      { id: '29-4', text: 'Fade effects' }
    ],
    correctAnswer: '29-2',
    explanation: 'Dialectical montage creates meaning through the collision and conflict between opposing images.'
  },
  {
    id: '30',
    theoryId: 'reception',
    question: 'An "oppositional reading" occurs when viewers:',
    options: [
      { id: '30-1', text: 'Accept the intended meaning' },
      { id: '30-2', text: 'Partially accept the meaning' },
      { id: '30-3', text: 'Reject the intended meaning' },
      { id: '30-4', text: 'Ignore the film' }
    ],
    correctAnswer: '30-3',
    explanation: 'Oppositional readings occur when viewers reject or resist the film\'s intended ideological message.'
  },
  {
    id: '31',
    theoryId: 'genre',
    question: 'Film noir is characterized by:',
    options: [
      { id: '31-1', text: 'Bright lighting' },
      { id: '31-2', text: 'Happy endings' },
      { id: '31-3', text: 'Moral ambiguity' },
      { id: '31-4', text: 'Musical numbers' }
    ],
    correctAnswer: '31-3',
    explanation: 'Film noir is characterized by moral ambiguity, dark themes, and cynical worldviews.'
  },
  {
    id: '32',
    theoryId: 'apparatus',
    question: 'The cinematic apparatus includes:',
    options: [
      { id: '32-1', text: 'Only the camera' },
      { id: '32-2', text: 'Camera and projector' },
      { id: '32-3', text: 'All technological and institutional elements' },
      { id: '32-4', text: 'Just the screen' }
    ],
    correctAnswer: '32-3',
    explanation: 'The cinematic apparatus encompasses all technological, economic, and institutional elements of cinema.'
  },
  {
    id: '33',
    theoryId: 'postmodern',
    question: 'Pastiche in postmodern cinema refers to:',
    options: [
      { id: '33-1', text: 'Original storytelling' },
      { id: '33-2', text: 'Imitation without satire' },
      { id: '33-3', text: 'Documentary realism' },
      { id: '33-4', text: 'Linear narrative' }
    ],
    correctAnswer: '33-2',
    explanation: 'Pastiche involves imitation of previous styles without the satirical intent of parody.'
  },
  {
    id: '34',
    theoryId: 'queer',
    question: 'Vito Russo\'s "The Celluloid Closet" documents:',
    options: [
      { id: '34-1', text: 'The history of sound in film' },
      { id: '34-2', text: 'Representations of LGBTQ+ characters' },
      { id: '34-3', text: 'The rise of the Hollywood studio system' },
      { id: '34-4', text: 'The development of special effects' }
    ],
    correctAnswer: '34-2',
    explanation: 'Russo\'s book and the subsequent documentary film document the history of LGBTQ+ representation in Hollywood films.'
  }
];

export const games: Game[] = [
  {
    id: '1',
    title: 'Auteur or Not?',
    description: 'Identify which director is considered a classic auteur.',
    type: 'identification',
    theoryIds: ['auteur']
  },
  {
    id: '2',
    title: 'Gaze Detective',
    description: 'Analyze scenes to identify the "Male Gaze" at work.',
    type: 'analysis',
    theoryIds: ['feminist']
  }
];

export const flashcards: Flashcard[] = [
  {
    id: '1',
    term: 'Auteur Theory',
    definition: 'A theory that views the director as the primary author of a film.',
    theoryId: 'auteur'
  },
  {
    id: '2',
    term: 'Male Gaze',
    definition: 'The way visual arts depict women from a masculine, heterosexual perspective.',
    theoryId: 'feminist'
  }
];