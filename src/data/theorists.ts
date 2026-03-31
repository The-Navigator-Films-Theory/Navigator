export interface Theorist {
  id: string;
  name: string;
  birthYear?: number;
  deathYear?: number;
  nationality: string;
  bio: string;
  keyWorks: string[];
  associatedTheories: string[];
  image: string;
  keyContributions: string[];
}

export const theorists: Theorist[] = [
  {
    id: 'mulvey',
    name: 'Laura Mulvey',
    birthYear: 1941,
    nationality: 'British',
    bio: 'British feminist film theorist and filmmaker, best known for her essay "Visual Pleasure and Narrative Cinema" (1975), which introduced the concept of the male gaze and revolutionized feminist film criticism.',
    keyWorks: [
      'Visual Pleasure and Narrative Cinema (1975)',
      'Death 24x a Second: Stillness and the Moving Image (2006)',
      'Fetishism and Curiosity (1996)'
    ],
    associatedTheories: ['feminist', 'psychoanalytic', 'spectator'],
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400',
    keyContributions: [
      'Introduced the concept of the male gaze',
      'Connected psychoanalysis with feminist film theory',
      'Analyzed scopophilia and voyeurism in cinema'
    ]
  },
  {
    id: 'hooks',
    name: 'bell hooks',
    birthYear: 1952,
    deathYear: 2021,
    nationality: 'American',
    bio: 'Influential feminist theorist, cultural critic, and author who wrote extensively about the intersection of race, gender, and class. Her work "Black Looks: Race and Representation" is foundational to critical race theory in media studies.',
    keyWorks: [
      'Black Looks: Race and Representation (1992)',
      'Reel to Real: Race, Sex, and Class at the Movies (1996)',
      'Outlaw Culture: Resisting Representations (1994)'
    ],
    associatedTheories: ['feminist', 'critical-race', 'intersectional', 'cultural'],
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400',
    keyContributions: [
      'Intersectional analysis of race and gender in media',
      'Critique of white feminist film theory',
      'Analysis of Black spectatorship and representation'
    ]
  },
  {
    id: 'hall',
    name: 'Stuart Hall',
    birthYear: 1932,
    deathYear: 2014,
    nationality: 'Jamaican-British',
    bio: 'Jamaican-born British cultural theorist and sociologist who was instrumental in developing cultural studies. His work on encoding/decoding and representation theory has been foundational to media and film studies.',
    keyWorks: [
      'Encoding and Decoding in the Television Discourse (1973)',
      'Questions of Cultural Identity (1996)',
      'Representation: Cultural Representations and Signifying Practices (1997)'
    ],
    associatedTheories: ['cultural', 'reception', 'postcolonial', 'marxist'],
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=400',
    keyContributions: [
      'Encoding/decoding model of communication',
      'Theory of preferred, negotiated, and oppositional readings',
      'Analysis of cultural identity and diaspora'
    ]
  },
  {
    id: 'diawara',
    name: 'Manthia Diawara',
    birthYear: 1953,
    nationality: 'Malian-American',
    bio: 'Malian filmmaker, author, and scholar specializing in African cinema and postcolonial film theory. His work has been crucial in developing theoretical frameworks for understanding African and diaspora cinema.',
    keyWorks: [
      'African Cinema: Politics and Culture (1992)',
      'Black American Cinema (1993)',
      'In Search of Africa (1998)'
    ],
    associatedTheories: ['postcolonial', 'critical-race', 'cultural'],
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400',
    keyContributions: [
      'Theorization of African cinema aesthetics',
      'Analysis of Third Cinema movements',
      'Postcolonial critique of Western film theory'
    ]
  },
  {
    id: 'lott',
    name: 'Tommy L. Lott',
    birthYear: 1946,
    nationality: 'American',
    bio: 'American philosopher and film theorist whose work focuses on African American philosophy, aesthetics, and film theory. His scholarship examines the intersection of race, philosophy, and cinema.',
    keyWorks: [
      'The Invention of Race: Black Culture and the Politics of Representation (1999)',
      'African American Philosophy: Selected Readings (2002)',
      'A Companion to African-American Philosophy (2003)'
    ],
    associatedTheories: ['critical-race', 'cultural', 'aesthetic'],
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=400',
    keyContributions: [
      'Philosophical analysis of race in cinema',
      'Aesthetic theory and Black cultural production',
      'Critique of representation in Hollywood'
    ]
  },
  {
    id: 'moten',
    name: 'Fred Moten',
    birthYear: 1962,
    nationality: 'American',
    bio: 'American cultural theorist, poet, and critic whose work spans critical theory, Black studies, and performance studies. His scholarship on the intersection of Blackness, performance, and aesthetics has influenced contemporary film theory.',
    keyWorks: [
      'In the Break: The Aesthetics of the Black Radical Tradition (2003)',
      'The Undercommons: Fugitive Planning and Black Study (2013)',
      'Black and Blur (2017)'
    ],
    associatedTheories: ['phenomenological', 'critical-race', 'cultural', 'aesthetic'],
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=400',
    keyContributions: [
      'Theory of Black performance and aesthetics',
      'Analysis of sound and embodiment in media',
      'Critique of institutional knowledge production'
    ]
  },
  {
    id: 'martin',
    name: 'Alfred L. Martin Jr.',
    birthYear: 1985,
    nationality: 'American',
    bio: 'Media studies scholar specializing in television studies, digital media, and the intersection of race, gender, and sexuality in contemporary media. His work examines how digital platforms and social media intersect with identity formation and representation.',
    keyWorks: [
      'The Digital Closet: How the Internet Became Straight (2022)',
      'Queer Media Studies: A Critical Reader (co-editor, 2021)',
      'Television and the Streaming Wars (2023)'
    ],
    associatedTheories: ['television-studies', 'queer', 'digital-media', 'critical-race'],
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400',
    keyContributions: [
      'Analysis of LGBTQ+ representation in digital media',
      'Study of streaming platforms and television evolution',
      'Intersectional approach to media and technology',
      'Critique of digital heteronormativity'
    ]
  },
  {
    id: 'auslander',
    name: 'Philip Auslander',
    birthYear: 1956,
    nationality: 'American',
    bio: 'Performance studies scholar and theorist whose work examines the relationship between live and mediated performance. His scholarship on liveness and mediatization has influenced film and media theory.',
    keyWorks: [
      'Liveness: Performance in a Mediatized Culture (1999)',
      'Performing Glam Rock: Gender and Theatricality in Popular Music (2006)',
      'Theory for Performance Studies (2008)'
    ],
    associatedTheories: ['phenomenological', 'media-archaeology', 'cultural'],
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=400',
    keyContributions: [
      'Theory of liveness in mediated culture',
      'Analysis of performance and authenticity',
      'Study of digital media and presence'
    ]
  },
  {
    id: 'brock',
    name: 'Andre Brock',
    birthYear: 1970,
    nationality: 'American',
    bio: 'Media studies scholar specializing in digital media, race, and technology. His groundbreaking work examines how digital platforms and social media intersect with racial identity and cultural practices, particularly focusing on Black digital culture.',
    keyWorks: [
      'Distributed Blackness: African American Cybercultures (2020)',
      'Critical Technocultural Discourse Analysis (2018)',
      'Race and Social Media: Understanding Digital Divides (2016)'
    ],
    associatedTheories: ['media-archaeology', 'critical-race', 'cultural', 'digital-media'],
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400',
    keyContributions: [
      'Analysis of Black digital culture and social media practices',
      'Development of Critical Technocultural Discourse Analysis',
      'Study of algorithmic bias and digital representation',
      'Examination of how race shapes technology use and design'
    ]
  },
  {
    id: 'gates',
    name: 'Raquel Gates',
    birthYear: 1980,
    nationality: 'American',
    bio: 'Television and media studies scholar whose work examines the intersection of race, gender, and media representation, particularly in television and digital media. Her research focuses on Black women\'s representation and audience engagement.',
    keyWorks: [
      'Double Negative: The Black Image and Popular Culture (2018)',
      'Black TV: Race, Representation, and Resistance (2020)',
      'The Televisual Black Atlantic (2019)'
    ],
    associatedTheories: ['television-studies', 'critical-race', 'feminist', 'cultural'],
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=400',
    keyContributions: [
      'Analysis of Black women\'s representation in television',
      'Study of audience engagement and resistance',
      'Examination of televisual Blackness and cultural identity',
      'Intersectional approach to media representation'
    ]
  },
  {
    id: 'haggins',
    name: 'Bambi Haggins',
    birthYear: 1965,
    nationality: 'American',
    bio: 'Media studies scholar specializing in African American representation in television and film, comedy studies, and popular culture. Her work examines how Black performers navigate and challenge stereotypical representations in mainstream media.',
    keyWorks: [
      'Laughing Mad: The Black Comic Persona in Post-Soul America (2007)',
      'The New Black TV: African American Television in the Twenty-First Century (co-editor, 2019)',
      'Black Comedy and Cultural Critique (2015)'
    ],
    associatedTheories: ['television-studies', 'critical-race', 'cultural', 'comedy-studies'],
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=400',
    keyContributions: [
      'Analysis of Black comedy and comic performance',
      'Study of post-soul Black representation in media',
      'Examination of stereotypes and resistance in popular culture',
      'Research on African American television and cultural identity'
    ]
  },
  {
    id: 'crenshaw',
    name: 'Kimberlé Crenshaw',
    birthYear: 1959,
    nationality: 'American',
    bio: 'Legal scholar and critical race theorist who coined the term "intersectionality." Her work has been foundational to understanding how multiple forms of discrimination overlap and compound.',
    keyWorks: [
      'Mapping the Margins: Intersectionality, Identity Politics, and Violence against Women of Color (1991)',
      'Critical Race Theory: The Key Writings That Formed the Movement (1995)',
      'On Intersectionality: Essential Writings (2017)'
    ],
    associatedTheories: ['intersectional', 'critical-race', 'feminist'],
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400',
    keyContributions: [
      'Coined the term "intersectionality"',
      'Legal analysis of discrimination',
      'Framework for understanding multiple oppressions'
    ]
  },
  {
    id: 'butler',
    name: 'Judith Butler',
    birthYear: 1956,
    nationality: 'American',
    bio: 'Philosopher and gender theorist whose work on gender performativity has been influential in queer theory and feminist film studies. Their analysis of how gender is constructed through repeated acts has shaped contemporary media theory.',
    keyWorks: [
      'Gender Trouble: Feminism and the Subversion of Identity (1990)',
      'Bodies That Matter: On the Discursive Limits of Sex (1993)',
      'Undoing Gender (2004)'
    ],
    associatedTheories: ['queer', 'feminist', 'postmodern'],
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=400',
    keyContributions: [
      'Theory of gender performativity',
      'Critique of binary gender categories',
      'Analysis of identity formation and subversion'
    ]
  },
  {
    id: 'haraway',
    name: 'Donna Haraway',
    birthYear: 1944,
    nationality: 'American',
    bio: 'Feminist scholar and philosopher of science whose "Cyborg Manifesto" has been foundational to posthuman theory and feminist technoscience. Her work examines the boundaries between human, animal, and machine.',
    keyWorks: [
      'A Cyborg Manifesto: Science, Technology, and Socialist-Feminism in the Late Twentieth Century (1985)',
      'Staying with the Trouble: Making Kin in the Chthulucene (2016)',
      'When Species Meet (2008)'
    ],
    associatedTheories: ['posthuman', 'feminist', 'media-archaeology'],
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=400',
    keyContributions: [
      'Cyborg theory and posthuman feminism',
      'Critique of nature/culture binaries',
      'Analysis of technoscience and embodiment'
    ]
  },
  {
    id: 'sobchack',
    name: 'Vivian Sobchack',
    birthYear: 1940,
    nationality: 'American',
    bio: 'Film theorist and phenomenologist whose work on embodied spectatorship has been influential in phenomenological film theory. Her scholarship examines the sensory and bodily dimensions of cinema.',
    keyWorks: [
      'The Address of the Eye: A Phenomenology of Film Experience (1992)',
      'Screening Space: The American Science Fiction Film (1987)',
      'Carnal Thoughts: Embodiment and Moving Image Culture (2004)'
    ],
    associatedTheories: ['phenomenological', 'spectator', 'cognitive'],
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400',
    keyContributions: [
      'Phenomenological approach to film spectatorship',
      'Analysis of embodied viewing experience',
      'Study of technology and bodily perception'
    ]
  },
  {
    id: 'bazin',
    name: 'André Bazin',
    birthYear: 1918,
    deathYear: 1958,
    nationality: 'French',
    bio: 'French film critic and theorist, co-founder of Cahiers du Cinéma. His realist film theory emphasized cinema\'s capacity to reveal truth through long takes and deep focus photography.',
    keyWorks: [
      'What Is Cinema? (1967)',
      'The Evolution of the Language of Cinema (1950-1955)',
      'The Ontology of the Photographic Image (1945)'
    ],
    associatedTheories: ['realist', 'auteur', 'humanist'],
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400',
    keyContributions: [
      'Realist film theory and deep focus aesthetics',
      'Influence on French New Wave cinema',
      'Ontological approach to cinema'
    ]
  },
  {
    id: 'eisenstein',
    name: 'Sergei Eisenstein',
    birthYear: 1898,
    deathYear: 1948,
    nationality: 'Soviet',
    bio: 'Soviet filmmaker and film theorist who developed the theory of montage. His work on dialectical montage and the collision of images has been foundational to formalist film theory.',
    keyWorks: [
      'The Film Sense (1942)',
      'Film Form: Essays in Film Theory (1949)',
      'Towards a Theory of Montage (2010)'
    ],
    associatedTheories: ['formalist', 'marxist', 'structuralist'],
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=400',
    keyContributions: [
      'Theory of dialectical montage',
      'Analysis of intellectual cinema',
      'Formalist approach to film construction'
    ]
  },
  {
    id: 'hutcheon',
    name: 'Linda Hutcheon',
    birthYear: 1947,
    nationality: 'Canadian',
    bio: 'Canadian literary and cultural theorist whose work on postmodernism, adaptation theory, and metafiction has been highly influential in film and media studies. Her scholarship bridges literature and cinema, examining how texts transform across media.',
    keyWorks: [
      'A Theory of Adaptation (2006)',
      'The Politics of Postmodernism (1989)',
      'Narcissistic Narrative: The Metafictional Paradox (1980)',
      'A Poetics of Postmodernism: History, Theory, Fiction (1988)'
    ],
    associatedTheories: ['postmodern', 'adaptation', 'cultural', 'intertextuality'],
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400',
    keyContributions: [
      'Comprehensive theory of adaptation across media',
      'Analysis of postmodern parody and metafiction',
      'Study of intertextuality and cultural transformation',
      'Examination of postmodern politics and complicity'
    ]
  },
  {
    id: 'jameson',
    name: 'Fredric Jameson',
    birthYear: 1934,
    nationality: 'American',
    bio: 'American literary critic and Marxist political theorist whose analysis of postmodernism as the cultural logic of late capitalism has been foundational to understanding contemporary media culture. His work bridges Marxist theory with postmodern cultural analysis.',
    keyWorks: [
      'Postmodernism, or, The Cultural Logic of Late Capitalism (1991)',
      'The Political Unconscious: Narrative as a Socially Symbolic Act (1981)',
      'Signatures of the Visible (1990)',
      'The Geopolitical Aesthetic: Cinema and Space in the World System (1992)'
    ],
    associatedTheories: ['postmodern', 'marxist', 'cultural', 'globalization'],
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=400',
    keyContributions: [
      'Analysis of postmodernism as cultural logic of late capitalism',
      'Theory of cognitive mapping and global consciousness',
      'Marxist analysis of contemporary culture and media',
      'Study of cinema in relation to global capitalism and space'
    ]
  }
];