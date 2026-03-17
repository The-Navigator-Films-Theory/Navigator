import type { Flashcard, Game, QuizQuestion } from '../../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    theoryId: 'auteur',
    question: 'Who popularized Auteur Theory in America?',
    options: ['François Truffaut', 'Andrew Sarris', 'Pauline Kael', 'Jean-Luc Godard'],
    correctAnswer: 1,
    explanation: 'Andrew Sarris popularized Auteur Theory in America through his writings, particularly "Notes on the Auteur Theory in 1962."'
  },
  {
    id: '2',
    theoryId: 'feminist',
    question: 'What concept did Laura Mulvey introduce in "Visual Pleasure and Narrative Cinema"?',
    options: ['The Female Gaze', 'The Male Gaze', 'Counter-Cinema', 'Intersectionality'],
    correctAnswer: 1,
    explanation: 'Laura Mulvey introduced the concept of the "Male Gaze," describing how films are structured around masculine viewing pleasure.'
  },
  {
    id: '3',
    theoryId: 'psychoanalytic',
    question: 'Which psychoanalyst\'s work is most commonly applied to film theory?',
    options: ['Carl Jung', 'Jacques Lacan', 'Sigmund Freud', 'Both Freud and Lacan'],
    correctAnswer: 3,
    explanation: 'Both Freud and Lacan\'s work is extensively used in psychoanalytic film theory, with Lacan\'s concepts particularly influential.'
  },
  {
    id: '4',
    theoryId: 'horror',
    question: 'Who developed the "Final Girl" theory in horror films?',
    options: ['Robin Wood', 'Carol Clover', 'Barbara Creed', 'Noel Carroll'],
    correctAnswer: 1,
    explanation: 'Carol Clover developed the "Final Girl" theory, analyzing the surviving female character in slasher films.'
  },
  {
    id: '5',
    theoryId: 'cognitive',
    question: 'Cognitive film theory emphasizes:',
    options: ['Unconscious desires', 'Mental processing', 'Social structures', 'Historical context'],
    correctAnswer: 1,
    explanation: 'Cognitive film theory focuses on how viewers mentally process and understand films through psychological mechanisms.'
  },
  {
    id: '6',
    theoryId: 'marxist',
    question: 'Who wrote "The Work of Art in the Age of Mechanical Reproduction"?',
    options: ['Karl Marx', 'Walter Benjamin', 'Theodor Adorno', 'Louis Althusser'],
    correctAnswer: 1,
    explanation: 'Walter Benjamin wrote this influential essay examining how mechanical reproduction changes the nature of art and its social function.'
  },
  {
    id: '7',
    theoryId: 'postcolonial',
    question: 'What does "Third Cinema" refer to?',
    options: ['European art cinema', 'Hollywood blockbusters', 'Revolutionary cinema from developing nations', 'Documentary filmmaking'],
    correctAnswer: 2,
    explanation: 'Third Cinema refers to revolutionary filmmaking from developing nations that challenges both Hollywood and European art cinema.'
  },
  {
    id: '8',
    theoryId: 'genre',
    question: 'According to Rick Altman, genres function as:',
    options: ['Fixed categories', 'Cultural contracts', 'Marketing tools', 'Artistic movements'],
    correctAnswer: 1,
    explanation: 'Rick Altman argued that genres function as cultural contracts between filmmakers and audiences, creating shared expectations.'
  },
  {
    id: '9',
    theoryId: 'postmodern',
    question: 'Jean Baudrillard\'s concept of "simulacra" refers to:',
    options: ['Realistic representations', 'Copies without originals', 'Documentary footage', 'Special effects'],
    correctAnswer: 1,
    explanation: 'Baudrillard\'s simulacra are copies or representations that have no original referent, creating a world of pure simulation.'
  },
  {
    id: '10',
    theoryId: 'formalist',
    question: 'The "Kuleshov Effect" demonstrates:',
    options: ['Camera movement', 'The power of montage', 'Sound design', 'Color theory'],
    correctAnswer: 1,
    explanation: 'The Kuleshov Effect shows how editing/montage creates meaning through the juxtaposition of images.'
  },
  {
    id: '11',
    theoryId: 'critical-race',
    question: 'Who wrote "Black Looks: Race and Representation"?',
    options: ['Tommy L. Lott', 'bell hooks', 'Manthia Diawara', 'Jacqueline Stewart'],
    correctAnswer: 1,
    explanation: 'bell hooks wrote this influential work examining how Black people are represented in media and popular culture.'
  },
  {
    id: '12',
    theoryId: 'queer',
    question: 'Judith Butler\'s concept of "gender performativity" suggests that:',
    options: ['Gender is biological', 'Gender is performed through repeated acts', 'Gender is fixed', 'Gender is irrelevant'],
    correctAnswer: 1,
    explanation: 'Butler argues that gender is not innate but performed through repeated acts that create the illusion of a natural gender identity.'
  },
  {
    id: '13',
    theoryId: 'intersectional',
    question: 'The term "intersectionality" was coined by:',
    options: ['bell hooks', 'Kimberlé Crenshaw', 'Patricia Hill Collins', 'Audre Lorde'],
    correctAnswer: 1,
    explanation: 'Kimberlé Crenshaw coined the term "intersectionality" in 1989 to describe how multiple forms of discrimination overlap.'
  },
  {
    id: '14',
    theoryId: 'apparatus',
    question: 'Jean-Louis Baudry\'s apparatus theory focuses on:',
    options: ['Film content', 'Technological ideology', 'Actor performance', 'Box office success'],
    correctAnswer: 1,
    explanation: 'Baudry\'s apparatus theory examines how cinema\'s technological apparatus shapes ideology and spectatorship.'
  },
  {
    id: '15',
    theoryId: 'cultural',
    question: 'Stuart Hall\'s encoding/decoding model identifies how many types of readings?',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctAnswer: 1,
    explanation: 'Hall identified three types of readings: preferred (dominant), negotiated, and oppositional readings.'
  },
  {
    id: '16',
    theoryId: 'spectator',
    question: 'Spectator theory primarily examines:',
    options: ['Film production', 'Audience engagement', 'Technical aspects', 'Historical context'],
    correctAnswer: 1,
    explanation: 'Spectator theory focuses on how audiences engage with and are positioned by films during viewing.'
  },
  {
    id: '17',
    theoryId: 'cultural-industries',
    question: 'The Frankfurt School\'s critique of cultural industries emphasizes:',
    options: ['Artistic freedom', 'Commodification of culture', 'Technological innovation', 'Audience empowerment'],
    correctAnswer: 1,
    explanation: 'The Frankfurt School criticized how culture becomes commodified and standardized under capitalism.'
  },
  {
    id: '18',
    theoryId: 'media-convergence',
    question: 'Henry Jenkins defines media convergence as:',
    options: ['Technological merger', 'Cultural shift', 'Both technological and cultural', 'Economic consolidation'],
    correctAnswer: 2,
    explanation: 'Jenkins argues that media convergence involves both technological changes and cultural shifts in how audiences engage with media.'
  },
  {
    id: '19',
    theoryId: 'fandom',
    question: 'Fan studies emphasizes audiences as:',
    options: ['Passive consumers', 'Active participants', 'Economic units', 'Cultural victims'],
    correctAnswer: 1,
    explanation: 'Fan studies views audiences as active participants who create their own meanings and cultural productions.'
  },
  {
    id: '20',
    theoryId: 'screen',
    question: 'Screen theory combines which theoretical approaches?',
    options: ['Psychoanalysis and semiotics', 'Marxism and feminism', 'All of the above', 'None of the above'],
    correctAnswer: 2,
    explanation: 'Screen theory integrates psychoanalytic, semiotic, and Marxist approaches to analyze cinema\'s ideological effects.'
  },
  {
    id: '21',
    theoryId: 'afrofuturist',
    question: 'The term "Afrofuturism" was coined by:',
    options: ['Octavia Butler', 'Mark Dery', 'Sun Ra', 'Kodwo Eshun'],
    correctAnswer: 1,
    explanation: 'Mark Dery coined the term "Afrofuturism" in 1993 to describe speculative fiction by African American authors.'
  },
  {
    id: '22',
    theoryId: 'posthuman',
    question: 'Donna Haraway\'s "Cyborg Manifesto" challenges the boundary between:',
    options: ['Male and female', 'Human and machine', 'East and West', 'Past and future'],
    correctAnswer: 1,
    explanation: 'Haraway\'s manifesto challenges traditional boundaries between human and machine, nature and culture.'
  },
  {
    id: '23',
    theoryId: 'realist',
    question: 'André Bazin believed cinema should:',
    options: ['Manipulate reality', 'Reveal reality', 'Create fantasy', 'Entertain audiences'],
    correctAnswer: 1,
    explanation: 'Bazin argued that cinema\'s primary function was to reveal reality through its photographic basis.'
  },
  {
    id: '24',
    theoryId: 'horror',
    question: 'According to Noel Carroll, horror films create fear through:',
    options: ['Jump scares', 'Monsters that violate categories', 'Gore and violence', 'Suspenseful music'],
    correctAnswer: 1,
    explanation: 'Carroll argues that horror monsters are frightening because they violate natural categories and boundaries.'
  },
  {
    id: '25',
    theoryId: 'auteur',
    question: 'The "politique des auteurs" was developed by critics at:',
    options: ['Sight & Sound', 'Cahiers du Cinéma', 'Film Quarterly', 'Cineaste'],
    correctAnswer: 1,
    explanation: 'The "politique des auteurs" was developed by French critics at Cahiers du Cinéma in the 1950s.'
  },
  {
    id: '26',
    theoryId: 'feminist',
    question: 'The concept of "counter-cinema" was proposed to:',
    options: ['Increase box office', 'Challenge patriarchal cinema', 'Improve technology', 'Reduce costs'],
    correctAnswer: 1,
    explanation: 'Counter-cinema was proposed as an alternative to mainstream patriarchal cinema structures.'
  },
  {
    id: '27',
    theoryId: 'structuralist',
    question: 'Binary oppositions in film narrative often include:',
    options: ['Good vs. Evil', 'Nature vs. Culture', 'Order vs. Chaos', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Structuralist analysis identifies various binary oppositions that structure film narratives.'
  },
  {
    id: '28',
    theoryId: 'cognitive',
    question: 'Schema theory in film viewing refers to:',
    options: ['Camera angles', 'Mental frameworks', 'Editing patterns', 'Sound design'],
    correctAnswer: 1,
    explanation: 'Schema theory describes the mental frameworks viewers use to understand and interpret films.'
  },
  {
    id: '29',
    theoryId: 'montage',
    question: 'Eisenstein\'s concept of "dialectical montage" involves:',
    options: ['Smooth transitions', 'Collision of opposing images', 'Parallel editing', 'Fade effects'],
    correctAnswer: 1,
    explanation: 'Dialectical montage creates meaning through the collision and conflict between opposing images.'
  },
  {
    id: '30',
    theoryId: 'reception',
    question: 'An "oppositional reading" occurs when viewers:',
    options: ['Accept the intended meaning', 'Partially accept the meaning', 'Reject the intended meaning', 'Ignore the film'],
    correctAnswer: 2,
    explanation: 'Oppositional readings occur when viewers reject or resist the film\'s intended ideological message.'
  },
  {
    id: '31',
    theoryId: 'genre',
    question: 'Film noir is characterized by:',
    options: ['Bright lighting', 'Happy endings', 'Moral ambiguity', 'Musical numbers'],
    correctAnswer: 2,
    explanation: 'Film noir is characterized by moral ambiguity, dark themes, and cynical worldviews.'
  },
  {
    id: '32',
    theoryId: 'apparatus',
    question: 'The cinematic apparatus includes:',
    options: ['Only the camera', 'Camera and projector', 'All technological and institutional elements', 'Just the screen'],
    correctAnswer: 2,
    explanation: 'The cinematic apparatus encompasses all technological, economic, and institutional elements of cinema.'
  },
  {
    id: '33',
    theoryId: 'postmodern',
    question: 'Pastiche in postmodern cinema refers to:',
    options: ['Original storytelling', 'Imitation without satire', 'Documentary realism', 'Linear narrative'],
    correctAnswer: 1,
    explanation: 'Pastiche involves imitation of previous styles without the satirical intent of parody.'
  },
  {
    id: '34',
    theoryId: 'queer',
    question: 'Camp aesthetics in cinema often involve:',
    options: ['Serious drama', 'Exaggerated performance', 'Realistic acting', 'Documentary style'],
    correctAnswer: 1,
    explanation: 'Camp aesthetics involve exaggerated, theatrical, and often ironic performance styles.'
  },
  {
    id: '35',
    theoryId: 'cultural',
    question: 'Hegemony in cultural studies refers to:',
    options: ['Military control', 'Economic dominance', 'Cultural leadership', 'Political power'],
    correctAnswer: 2,
    explanation: 'Hegemony refers to cultural leadership and the dominance of certain ideologies through consent rather than force.'
  },
  {
    id: '36',
    theoryId: 'ecocriticism',
    question: 'Ecocritical film theory primarily examines:',
    options: ['Human relationships', 'Nature and environment', 'Urban settings', 'Technology'],
    correctAnswer: 1,
    explanation: 'Ecocritical theory examines how films represent nature, environment, and ecological relationships.'
  },
  {
    id: '37',
    theoryId: 'disability-studies',
    question: 'The social model of disability emphasizes:',
    options: ['Medical treatment', 'Individual deficits', 'Social barriers', 'Genetic factors'],
    correctAnswer: 2,
    explanation: 'The social model focuses on how society creates barriers rather than individual impairments.'
  },
  {
    id: '38',
    theoryId: 'age-studies',
    question: 'Ageism in cinema often manifests as:',
    options: ['Equal representation', 'Stereotypical portrayals', 'Accurate depictions', 'Diverse casting'],
    correctAnswer: 1,
    explanation: 'Ageism appears through stereotypical and limited representations of different age groups.'
  },
  {
    id: '39',
    theoryId: 'sound-studies',
    question: 'Michel Chion\'s concept of "acousmatic sound" refers to:',
    options: ['Visible sound sources', 'Sound without visible source', 'Musical scores', 'Dialogue'],
    correctAnswer: 1,
    explanation: 'Acousmatic sound is heard without seeing its source, creating mystery and tension.'
  },
  {
    id: '40',
    theoryId: 'animation',
    question: 'What distinguishes animation from live-action cinema?',
    options: ['Color usage', 'Frame-by-frame construction', 'Sound design', 'Narrative structure'],
    correctAnswer: 1,
    explanation: 'Animation is constructed frame-by-frame, allowing complete control over movement and time.'
  }
];

export const flashcards: Flashcard[] = [
  {
    id: '1',
    theoryId: 'auteur',
    term: 'Auteur',
    definition: 'A filmmaker whose personal influence and artistic control over a movie are so significant that they are regarded as the author of the movie.'
  },
  {
    id: '2',
    theoryId: 'feminist',
    term: 'Male Gaze',
    definition: 'The way visual arts and literature depict women from a masculine, heterosexual perspective, presenting women as sexual objects for male pleasure.'
  },
  {
    id: '3',
    theoryId: 'psychoanalytic',
    term: 'Suture',
    definition: 'The process by which the viewer is sewn into the film text, creating identification and narrative involvement.'
  },
  {
    id: '4',
    theoryId: 'horror',
    term: 'Final Girl',
    definition: 'The last surviving female character in horror films who confronts and defeats the killer, often after witnessing the deaths of her friends.'
  },
  {
    id: '5',
    theoryId: 'structuralist',
    term: 'Binary Opposition',
    definition: 'A pair of related terms or concepts that are opposite in meaning, used to structure narrative and meaning in films.'
  },
  {
    id: '6',
    theoryId: 'cognitive',
    term: 'Schema',
    definition: 'Mental frameworks that help viewers organize and interpret information, including expectations about film genres and narratives.'
  },
  {
    id: '7',
    theoryId: 'apparatus',
    term: 'Cinematic Apparatus',
    definition: 'The entire technological, economic, and institutional system that produces and presents films to audiences.'
  },
  {
    id: '8',
    theoryId: 'marxist',
    term: 'Ideology',
    definition: 'A system of ideas and ideals that forms the basis of economic or political theory, often unconsciously reproduced in cultural products like films.'
  },
  {
    id: '9',
    theoryId: 'postcolonial',
    term: 'Orientalism',
    definition: 'The Western representation of Eastern cultures as exotic, backward, and inferior, often perpetuated through cinema.'
  },
  {
    id: '10',
    theoryId: 'genre',
    term: 'Iconography',
    definition: 'The visual elements, symbols, and motifs that are characteristic of a particular film genre.'
  },
  {
    id: '11',
    theoryId: 'cultural',
    term: 'Hegemony',
    definition: 'The dominance of one group over others, maintained through cultural means rather than force, often reflected in media representations.'
  },
  {
    id: '12',
    theoryId: 'postmodern',
    term: 'Pastiche',
    definition: 'An artistic work that imitates the style of previous works, often mixing different styles without the satirical intent of parody.'
  },
  {
    id: '13',
    theoryId: 'formalist',
    term: 'Montage',
    definition: 'The editing technique of combining separate shots to create new meaning through their juxtaposition.'
  },
  {
    id: '14',
    theoryId: 'reception',
    term: 'Preferred Reading',
    definition: 'The interpretation of a text that aligns with the dominant ideology and the intended meaning of the creators.'
  },
  {
    id: '15',
    theoryId: 'critical-race',
    term: 'Whiteness',
    definition: 'The invisible norm in media representation that positions white experience as universal while marking other racial identities as "other."'
  },
  {
    id: '16',
    theoryId: 'queer',
    term: 'Heteronormativity',
    definition: 'The assumption that heterosexuality is the normal or preferred sexual orientation, often reinforced through media representation.'
  },
  {
    id: '17',
    theoryId: 'intersectional',
    term: 'Intersectionality',
    definition: 'The interconnected nature of social categorizations such as race, class, and gender, creating overlapping systems of discrimination.'
  },
  {
    id: '18',
    theoryId: 'spectator',
    term: 'Identification',
    definition: 'The psychological process by which viewers align themselves with characters or perspectives in a film.'
  },
  {
    id: '19',
    theoryId: 'cultural-industries',
    term: 'Commodification',
    definition: 'The transformation of cultural products into market commodities, potentially reducing their artistic or social value.'
  },
  {
    id: '20',
    theoryId: 'media-convergence',
    term: 'Transmedia Storytelling',
    definition: 'A narrative technique where a single story or experience is told across multiple platforms and formats.'
  },
  {
    id: '21',
    theoryId: 'fandom',
    term: 'Participatory Culture',
    definition: 'A culture where members actively engage with media and create their own content, rather than just consuming it.'
  },
  {
    id: '22',
    theoryId: 'screen',
    term: 'Subject Position',
    definition: 'The ideological position that a text constructs for its reader or viewer, shaping how they understand themselves and the world.'
  },
  {
    id: '23',
    theoryId: 'afrofuturist',
    term: 'Afrofuturism',
    definition: 'A cultural aesthetic that combines science fiction, technology, and African diaspora themes to envision Black futures and possibilities.'
  },
  {
    id: '24',
    theoryId: 'posthuman',
    term: 'Cyborg',
    definition: 'A being that combines organic and artificial components, challenging traditional boundaries between human and machine.'
  },
  {
    id: '25',
    theoryId: 'realist',
    term: 'Deep Focus',
    definition: 'A cinematographic technique that keeps all elements in the frame in sharp focus, allowing viewers to choose what to look at.'
  },
  {
    id: '26',
    theoryId: 'horror',
    term: 'Uncanny',
    definition: 'Something familiar yet strange, creating psychological discomfort and fear, often used in horror films.'
  },
  {
    id: '27',
    theoryId: 'feminist',
    term: 'Counter-Cinema',
    definition: 'Alternative filmmaking practices that challenge dominant patriarchal cinema through formal and narrative innovations.'
  },
  {
    id: '28',
    theoryId: 'psychoanalytic',
    term: 'Scopophilia',
    definition: 'The pleasure derived from looking, particularly at other people as objects, central to psychoanalytic film theory.'
  },
  {
    id: '29',
    theoryId: 'auteur',
    term: 'Mise-en-scène',
    definition: 'Everything placed in front of the camera to be photographed, including sets, props, lighting, costumes, and actor movement.'
  },
  {
    id: '30',
    theoryId: 'genre',
    term: 'Generic Convention',
    definition: 'Established features of a particular genre that audiences expect and filmmakers either fulfill or subvert.'
  },
  {
    id: '31',
    theoryId: 'structuralist',
    term: 'Paradigm',
    definition: 'A set of elements from which choices are made in creating meaning, such as different camera angles or editing techniques.'
  },
  {
    id: '32',
    theoryId: 'cognitive',
    term: 'Attention',
    definition: 'The cognitive process by which viewers focus on specific elements of a film while filtering out others.'
  },
  {
    id: '33',
    theoryId: 'apparatus',
    term: 'Projection',
    definition: 'Both the technical process of displaying films and the psychological process of attributing one\'s feelings to external objects.'
  },
  {
    id: '34',
    theoryId: 'marxist',
    term: 'Base and Superstructure',
    definition: 'Marx\'s model where economic base determines cultural superstructure, including films and media.'
  },
  {
    id: '35',
    theoryId: 'postcolonial',
    term: 'Third Cinema',
    definition: 'Revolutionary cinema from developing nations that challenges both Hollywood and European art cinema.'
  },
  {
    id: '36',
    theoryId: 'cultural',
    term: 'Encoding/Decoding',
    definition: 'Stuart Hall\'s model of how media messages are produced (encoded) and interpreted (decoded) by audiences.'
  },
  {
    id: '37',
    theoryId: 'postmodern',
    term: 'Simulacra',
    definition: 'Copies or representations that have no original referent, creating a world of pure simulation.'
  },
  {
    id: '38',
    theoryId: 'reception',
    term: 'Negotiated Reading',
    definition: 'When audiences partially accept a text\'s intended meaning while modifying it based on their own experiences.'
  },
  {
    id: '39',
    theoryId: 'formalist',
    term: 'Kuleshov Effect',
    definition: 'The phenomenon where viewers derive meaning from the sequence of shots rather than individual shots themselves.'
  },
  {
    id: '40',
    theoryId: 'spectator',
    term: 'Interpellation',
    definition: 'The process by which ideology addresses individuals as subjects, positioning them within particular viewing relationships.'
  },
  {
    id: '41',
    theoryId: 'critical-race',
    term: 'Stereotype',
    definition: 'Oversimplified and often negative representations of racial or ethnic groups that reinforce prejudice.'
  },
  {
    id: '42',
    theoryId: 'queer',
    term: 'Camp',
    definition: 'An aesthetic style characterized by exaggeration, theatricality, and ironic appreciation of popular culture.'
  },
  {
    id: '43',
    theoryId: 'intersectional',
    term: 'Matrix of Domination',
    definition: 'Patricia Hill Collins\' concept describing how multiple systems of oppression intersect and reinforce each other.'
  },
  {
    id: '44',
    theoryId: 'cultural-industries',
    term: 'Standardization',
    definition: 'The process by which cultural products become formulaic and predictable under industrial production.'
  },
  {
    id: '45',
    theoryId: 'media-convergence',
    term: 'Participatory Culture',
    definition: 'A culture where audiences actively participate in creating and sharing media content rather than just consuming it.'
  },
  {
    id: '46',
    theoryId: 'fandom',
    term: 'Textual Poaching',
    definition: 'Henry Jenkins\' term for how fans appropriate and transform media texts for their own purposes.'
  },
  {
    id: '47',
    theoryId: 'screen',
    term: 'Ideological State Apparatus',
    definition: 'Althusser\'s concept of institutions like cinema that reproduce dominant ideology through cultural means.'
  },
  {
    id: '48',
    theoryId: 'afrofuturist',
    term: 'Speculative Fiction',
    definition: 'Literature and film that imagines alternative futures, often used to explore social and political possibilities.'
  },
  {
    id: '49',
    theoryId: 'posthuman',
    term: 'Transhumanism',
    definition: 'The belief that humans can and should enhance themselves through technology to transcend biological limitations.'
  },
  {
    id: '50',
    theoryId: 'realist',
    term: 'Ontology',
    definition: 'The philosophical study of being and existence, central to Bazin\'s theory of cinema\'s relationship to reality.'
  },
  {
    id: '51',
    theoryId: 'humanist',
    term: 'Universal Themes',
    definition: 'Fundamental human experiences and emotions that transcend cultural and historical boundaries.'
  },
  {
    id: '52',
    theoryId: 'modernist',
    term: 'Self-Reflexivity',
    definition: 'When films draw attention to their own construction and artifice, breaking the illusion of reality.'
  },
  {
    id: '53',
    theoryId: 'montage',
    term: 'Dialectical Montage',
    definition: 'Eisenstein\'s editing technique where meaning emerges from the collision between opposing images.'
  },
  {
    id: '54',
    theoryId: 'horror',
    term: 'Abjection',
    definition: 'Julia Kristeva\'s concept of things that disturb identity and order, often central to horror films.'
  },
  {
    id: '55',
    theoryId: 'feminist',
    term: 'Female Gaze',
    definition: 'Alternative way of looking that centers female experience and challenges male-dominated visual culture.'
  },
  {
    id: '56',
    theoryId: 'psychoanalytic',
    term: 'Mirror Stage',
    definition: 'Lacan\'s concept of how children develop self-awareness, applied to cinema spectatorship.'
  },
  {
    id: '57',
    theoryId: 'auteur',
    term: 'Camera Stylo',
    definition: 'Alexandre Astruc\'s concept of the camera as a pen, allowing directors to write with images.'
  },
  {
    id: '58',
    theoryId: 'genre',
    term: 'Hybrid Genre',
    definition: 'Films that combine elements from multiple genres, creating new generic possibilities.'
  },
  {
    id: '59',
    theoryId: 'structuralist',
    term: 'Syntagm',
    definition: 'A sequence of signs that creates meaning through their combination and relationship.'
  },
  {
    id: '60',
    theoryId: 'cognitive',
    term: 'Emotional Contagion',
    definition: 'The process by which viewers automatically mimic and experience emotions displayed on screen.'
  },
  {
    id: '61',
    theoryId: 'apparatus',
    term: 'Dispositif',
    definition: 'French term for the entire cinematic apparatus including technology, space, and spectator positioning.'
  },
  {
    id: '62',
    theoryId: 'marxist',
    term: 'False Consciousness',
    definition: 'Marx\'s concept of how dominant ideology prevents people from recognizing their true class interests.'
  },
  {
    id: '63',
    theoryId: 'postcolonial',
    term: 'Hybridity',
    definition: 'Homi Bhabha\'s concept of cultural mixing that occurs in postcolonial contexts.'
  },
  {
    id: '64',
    theoryId: 'cultural',
    term: 'Articulation',
    definition: 'Stuart Hall\'s concept of how different elements are connected to create meaning and identity.'
  },
  {
    id: '65',
    theoryId: 'postmodern',
    term: 'Hyperreality',
    definition: 'Baudrillard\'s concept of a condition where simulations become more real than reality itself.'
  },
  {
    id: '66',
    theoryId: 'reception',
    term: 'Horizon of Expectations',
    definition: 'The set of assumptions and expectations that audiences bring to their interpretation of texts.'
  },
  {
    id: '67',
    theoryId: 'formalist',
    term: 'Defamiliarization',
    definition: 'Making the familiar strange to force audiences to see things in new ways.'
  },
  {
    id: '68',
    theoryId: 'spectator',
    term: 'Voyeurism',
    definition: 'The pleasure derived from looking at others without their knowledge, central to film spectatorship.'
  },
  {
    id: '69',
    theoryId: 'critical-race',
    term: 'Double Consciousness',
    definition: 'W.E.B. Du Bois\' concept of seeing oneself through the eyes of a hostile other.'
  },
  {
    id: '70',
    theoryId: 'queer',
    term: 'Performativity',
    definition: 'Judith Butler\'s concept that gender is created through repeated performances rather than being innate.'
  },
  {
    id: '71',
    theoryId: 'intersectional',
    term: 'Single-Axis Framework',
    definition: 'Analysis that focuses on only one aspect of identity, criticized by intersectional theory.'
  },
  {
    id: '72',
    theoryId: 'cultural-industries',
    term: 'Pseudo-Individualization',
    definition: 'Adorno\'s concept of how mass culture creates the illusion of choice while maintaining standardization.'
  },
  {
    id: '73',
    theoryId: 'media-convergence',
    term: 'Collective Intelligence',
    definition: 'Pierre Lévy\'s concept of enhanced capacity that results from collaboration and networking.'
  },
  {
    id: '74',
    theoryId: 'fandom',
    term: 'Affective Labor',
    definition: 'Work that produces feelings and relationships, often performed by fans in media communities.'
  },
  {
    id: '75',
    theoryId: 'screen',
    term: 'Suture Theory',
    definition: 'How films create seamless narrative flow while positioning spectators within ideological frameworks.'
  },
  {
    id: '76',
    theoryId: 'afrofuturist',
    term: 'Chronopolitics',
    definition: 'The politics of time and how different groups experience and imagine temporality.'
  },
  {
    id: '77',
    theoryId: 'posthuman',
    term: 'Assemblage',
    definition: 'Deleuze and Guattari\'s concept of heterogeneous components working together as a functional unit.'
  },
  {
    id: '78',
    theoryId: 'realist',
    term: 'Photogénie',
    definition: 'The unique aesthetic quality that cinema can capture and reveal in reality.'
  },
  {
    id: '79',
    theoryId: 'humanist',
    term: 'Empathy',
    definition: 'The ability to understand and share the feelings of others, central to humanist film theory.'
  },
  {
    id: '80',
    theoryId: 'modernist',
    term: 'Alienation Effect',
    definition: 'Brecht\'s technique of preventing emotional identification to encourage critical thinking.'
  },
  {
    id: '81',
    theoryId: 'montage',
    term: 'Intellectual Montage',
    definition: 'Eisenstein\'s concept of editing that creates abstract ideas through image collision.'
  },
  {
    id: '82',
    theoryId: 'horror',
    term: 'Monstrous Feminine',
    definition: 'Barbara Creed\'s concept of how horror films represent female sexuality as threatening.'
  },
  {
    id: '83',
    theoryId: 'feminist',
    term: 'Écriture Féminine',
    definition: 'Hélène Cixous\' concept of feminine writing that challenges patriarchal language.'
  },
  {
    id: '84',
    theoryId: 'psychoanalytic',
    term: 'Fetishism',
    definition: 'Freudian concept of disavowal applied to how cinema manages castration anxiety.'
  },
  {
    id: '85',
    theoryId: 'auteur',
    term: 'Interior Meaning',
    definition: 'Andrew Sarris\' concept of the personal vision that distinguishes great directors.'
  },
  {
    id: '86',
    theoryId: 'genre',
    term: 'Semantic/Syntactic',
    definition: 'Rick Altman\'s distinction between genre elements (semantic) and structures (syntactic).'
  },
  {
    id: '87',
    theoryId: 'structuralist',
    term: 'Langue/Parole',
    definition: 'Saussure\'s distinction between language system (langue) and individual speech acts (parole).'
  },
  {
    id: '88',
    theoryId: 'cognitive',
    term: 'Theory of Mind',
    definition: 'The ability to understand that others have beliefs and desires different from one\'s own.'
  },
  {
    id: '89',
    theoryId: 'apparatus',
    term: 'Ideological Apparatus',
    definition: 'Althusser\'s concept of institutions that reproduce dominant ideology through cultural means.'
  },
  {
    id: '90',
    theoryId: 'marxist',
    term: 'Reification',
    definition: 'The process by which social relationships become thing-like and appear natural.'
  },
  {
    id: '91',
    theoryId: 'postcolonial',
    term: 'Mimicry',
    definition: 'Homi Bhabha\'s concept of colonial subjects imitating but never perfectly replicating colonial culture.'
  },
  {
    id: '92',
    theoryId: 'cultural',
    term: 'Conjuncture',
    definition: 'Gramsci\'s concept of specific historical moments when change becomes possible.'
  },
  {
    id: '93',
    theoryId: 'postmodern',
    term: 'Metanarrative',
    definition: 'Lyotard\'s concept of grand stories that claim to explain everything, rejected in postmodernity.'
  },
  {
    id: '94',
    theoryId: 'reception',
    term: 'Implied Reader',
    definition: 'Wolfgang Iser\'s concept of the ideal reader inscribed within a text.'
  },
  {
    id: '95',
    theoryId: 'formalist',
    term: 'Ostranenie',
    definition: 'Russian formalist concept of making the familiar strange to renew perception.'
  },
  {
    id: '96',
    theoryId: 'spectator',
    term: 'Diegesis',
    definition: 'The fictional world of the film, as opposed to non-diegetic elements like music or titles.'
  },
  {
    id: '97',
    theoryId: 'critical-race',
    term: 'Colorblind Racism',
    definition: 'Eduardo Bonilla-Silva\'s concept of racism that claims not to see race while maintaining inequality.'
  },
  {
    id: '98',
    theoryId: 'queer',
    term: 'Heterosexual Matrix',
    definition: 'Judith Butler\'s concept of the cultural grid that makes certain identities intelligible.'
  },
  {
    id: '99',
    theoryId: 'intersectional',
    term: 'Standpoint Theory',
    definition: 'The idea that marginalized groups have epistemic privilege in understanding oppression.'
  },
  {
    id: '100',
    theoryId: 'cultural-industries',
    term: 'Culture Industry',
    definition: 'Adorno and Horkheimer\'s concept of how culture becomes industrialized under capitalism.'
  },
  {
    id: '101',
    theoryId: 'ecocriticism',
    term: 'Anthropocene',
    definition: 'The current geological age characterized by significant human impact on Earth\'s climate and ecosystems.'
  },
  {
    id: '102',
    theoryId: 'ecocriticism',
    term: 'Ecocide',
    definition: 'The destruction of the natural environment by deliberate or negligent human action.'
  },
  {
    id: '103',
    theoryId: 'disability-studies',
    term: 'Ableism',
    definition: 'Discrimination and social prejudice against people with disabilities based on the belief that typical abilities are superior.'
  },
  {
    id: '104',
    theoryId: 'disability-studies',
    term: 'Crip Theory',
    definition: 'A cultural model that views disability as a valuable form of human diversity rather than a medical problem.'
  },
  {
    id: '105',
    theoryId: 'age-studies',
    term: 'Ageism',
    definition: 'Stereotyping, prejudice, and discrimination against people on the basis of their age.'
  },
  {
    id: '106',
    theoryId: 'age-studies',
    term: 'Gerontophobia',
    definition: 'Fear or hatred of elderly people and the aging process.'
  },
  {
    id: '107',
    theoryId: 'sound-studies',
    term: 'Acousmatic Sound',
    definition: 'Sound that is heard without its source being visible, creating mystery and tension.'
  },
  {
    id: '108',
    theoryId: 'sound-studies',
    term: 'Diegetic Sound',
    definition: 'Sound that exists within the fictional world of the film and can be heard by the characters.'
  },
  {
    id: '109',
    theoryId: 'anime',
    term: 'Otaku',
    definition: 'A Japanese term for people with consuming interests, particularly in anime and manga.'
  },
  {
    id: '110',
    theoryId: 'anime',
    term: 'Kawaii',
    definition: 'Japanese aesthetic concept meaning "cute" or "adorable," central to anime culture.'
  },
  {
    id: '111',
    theoryId: 'animation',
    term: 'Cel Animation',
    definition: 'Traditional animation technique using transparent sheets (cels) painted with characters and objects.'
  },
  {
    id: '112',
    theoryId: 'animation',
    term: 'Squash and Stretch',
    definition: 'Animation principle that gives weight and flexibility to drawn objects and characters.'
  },
  {
    id: '113',
    theoryId: 'television-studies',
    term: 'Flow',
    definition: 'Raymond Williams\' concept of television as continuous stream rather than discrete programs.'
  },
  {
    id: '114',
    theoryId: 'television-studies',
    term: 'Seriality',
    definition: 'The ongoing narrative structure that connects episodes and seasons in television programming.'
  },
  {
    id: '115',
    theoryId: 'ecocriticism',
    term: 'Deep Ecology',
    definition: 'Environmental philosophy that sees all living beings as having intrinsic value regardless of their utility to humans.'
  },
  {
    id: '116',
    theoryId: 'disability-studies',
    term: 'Universal Design',
    definition: 'Design approach that aims to create products and environments accessible to all people regardless of ability.'
  },
  {
    id: '117',
    theoryId: 'age-studies',
    term: 'Intergenerational Conflict',
    definition: 'Tensions and disagreements between different age groups, often depicted in media.'
  },
  {
    id: '118',
    theoryId: 'sound-studies',
    term: 'Soundscape',
    definition: 'The acoustic environment as perceived by humans, including all sounds in a given area.'
  },
  {
    id: '119',
    theoryId: 'anime',
    term: 'Mecha',
    definition: 'Anime and manga genre featuring giant robots or mechanical suits, often piloted by humans.'
  },
  {
    id: '120',
    theoryId: 'animation',
    term: 'Rotoscoping',
    definition: 'Animation technique where animators trace over live-action film footage frame by frame.'
  },
  {
    id: '121',
    theoryId: 'television-studies',
    term: 'Appointment Television',
    definition: 'Programming designed to be watched at a specific time, creating shared cultural experiences.'
  },
  {
    id: '122',
    theoryId: 'ecocriticism',
    term: 'Solastalgia',
    definition: 'Emotional distress caused by environmental change in one\'s home environment.'
  },
  {
    id: '123',
    theoryId: 'disability-studies',
    term: 'Inspiration Porn',
    definition: 'Media representation that objectifies disabled people for the benefit of non-disabled people.'
  },
  {
    id: '124',
    theoryId: 'age-studies',
    term: 'Successful Aging',
    definition: 'Concept promoting active, healthy, and productive aging as the ideal model.'
  },
  {
    id: '125',
    theoryId: 'sound-studies',
    term: 'Leitmotif',
    definition: 'A recurring musical theme associated with a particular character, place, or idea in film.'
  }
];

export const games: Game[] = [
  {
    id: 'theory-matching',
    title: 'Theory Matching Challenge',
    description: 'Match film theories with their key concepts and thinkers.',
    type: 'matching',
    difficulty: 'easy',
    theoryIds: ['auteur', 'feminist', 'psychoanalytic', 'horror']
  },
  {
    id: 'cinema-timeline',
    title: 'Cinema Theory Timeline',
    description: 'Arrange major film theories in chronological order of their development.',
    type: 'timeline',
    difficulty: 'medium',
    theoryIds: ['formalist', 'auteur', 'structuralist', 'feminist', 'postmodern']
  },
  {
    id: 'genre-categorization',
    title: 'Film Genre Categorization',
    description: 'Categorize films into their appropriate theoretical frameworks.',
    type: 'categorization',
    difficulty: 'medium',
    theoryIds: ['genre', 'horror', 'feminist', 'postcolonial']
  },
  {
    id: 'analysis-scenario',
    title: 'Film Analysis Scenario',
    description: 'Choose the best theoretical approach for analyzing different film scenarios.',
    type: 'scenario',
    difficulty: 'hard',
    theoryIds: ['psychoanalytic', 'marxist', 'queer', 'critical-race']
  },
  {
    id: 'thinker-theory-match',
    title: 'Thinker-Theory Connection',
    description: 'Connect key theorists with their associated film theories.',
    type: 'matching',
    difficulty: 'medium',
    theoryIds: ['feminist', 'auteur', 'cultural', 'apparatus']
  },
  {
    id: 'concept-definition',
    title: 'Concept Definition Game',
    description: 'Match theoretical concepts with their correct definitions.',
    type: 'matching',
    difficulty: 'easy',
    theoryIds: ['spectator', 'reception', 'genre', 'cognitive']
  },
  {
    id: 'film-theory-application',
    title: 'Theory Application Challenge',
    description: 'Apply different theories to analyze specific film scenes.',
    type: 'scenario',
    difficulty: 'hard',
    theoryIds: ['postmodern', 'intersectional', 'afrofuturist', 'posthuman']
  },
  {
    id: 'historical-context',
    title: 'Historical Context Quiz',
    description: 'Place film theories within their proper historical and cultural contexts.',
    type: 'timeline',
    difficulty: 'medium',
    theoryIds: ['marxist', 'postcolonial', 'screen', 'cultural-industries']
  },
  {
    id: 'advanced-concepts',
    title: 'Advanced Theory Concepts',
    description: 'Test your knowledge of complex theoretical concepts and their applications.',
    type: 'categorization',
    difficulty: 'hard',
    theoryIds: ['media-convergence', 'fandom', 'apparatus', 'posthuman']
  },
  {
    id: 'vocabulary-builder',
    title: 'Film Theory Vocabulary Builder',
    description: 'Learn and practice essential film theory terminology.',
    type: 'matching',
    difficulty: 'easy',
    theoryIds: ['formalist', 'structuralist', 'realist', 'modernist']
  },
  {
    id: 'director-auteur',
    title: 'Director as Auteur',
    description: 'Identify auteur directors and their distinctive styles.',
    type: 'categorization',
    difficulty: 'medium',
    theoryIds: ['auteur', 'modernist', 'realist']
  },
  {
    id: 'theory-evolution',
    title: 'Evolution of Film Theory',
    description: 'Trace how film theories have developed and influenced each other over time.',
    type: 'timeline',
    difficulty: 'hard',
    theoryIds: ['formalist', 'structuralist', 'postmodern', 'posthuman']
  },
  {
    id: 'ecocritical-analysis',
    title: 'Ecocritical Film Analysis',
    description: 'Apply ecocritical theory to environmental themes in cinema.',
    type: 'scenario',
    difficulty: 'medium',
    theoryIds: ['ecocriticism', 'posthuman', 'cultural']
  },
  {
    id: 'disability-representation',
    title: 'Disability Representation Challenge',
    description: 'Analyze how films represent disability and challenge ableist assumptions.',
    type: 'categorization',
    difficulty: 'medium',
    theoryIds: ['disability-studies', 'cultural', 'feminist']
  },
  {
    id: 'sound-design-game',
    title: 'Sound Design Theory Game',
    description: 'Explore how sound contributes to cinematic meaning and emotion.',
    type: 'matching',
    difficulty: 'easy',
    theoryIds: ['sound-studies', 'apparatus', 'cognitive']
  },
  {
    id: 'animation-principles',
    title: 'Animation Theory Principles',
    description: 'Learn the unique properties and techniques of animation as a medium.',
    type: 'categorization',
    difficulty: 'easy',
    theoryIds: ['animation', 'formalist', 'apparatus']
  }
];