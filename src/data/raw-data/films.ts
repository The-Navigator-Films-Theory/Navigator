import type { Film } from '../../types';

export const films: Film[] = [
  // CLASSIC FOUNDATIONAL FILMS
  {
    id: 'citizen-kane',
    title: 'Citizen Kane',
    director: 'Orson Welles',
    year: 1941,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'A newspaper magnate\'s rise and fall, told through innovative narrative structure and deep focus cinematography.',
    relevantTheories: ['auteur', 'formalist', 'realist']
  },
  {
    id: 'vertigo',
    title: 'Vertigo',
    director: 'Alfred Hitchcock',
    year: 1958,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'A detective\'s obsession with a mysterious woman explores themes of voyeurism and male desire.',
    relevantTheories: ['psychoanalytic', 'feminist', 'auteur']
  },
  {
    id: 'mulholland-drive',
    title: 'Mulholland Drive',
    director: 'David Lynch',
    year: 2001,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'A surreal neo-noir that fragments narrative structure and challenges conventional storytelling.',
    relevantTheories: ['postmodern', 'psychoanalytic', 'feminist']
  },
  {
    id: 'battleship-potemkin',
    title: 'Battleship Potemkin',
    director: 'Sergei Eisenstein',
    year: 1925,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Revolutionary Soviet film demonstrating the power of montage editing and dialectical cinema.',
    relevantTheories: ['formalist', 'marxist', 'montage']
  },
  {
    id: 'get-out',
    title: 'Get Out',
    director: 'Jordan Peele',
    year: 2017,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Horror film that uses genre conventions to explore contemporary racism and liberal hypocrisy.',
    relevantTheories: ['horror', 'critical-race', 'genre']
  },
  {
    id: 'black-panther',
    title: 'Black Panther',
    director: 'Ryan Coogler',
    year: 2018,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Afrofuturist superhero film that imagines advanced African civilization and addresses diaspora themes.',
    relevantTheories: ['afrofuturist', 'critical-race', 'postcolonial']
  },
  {
    id: 'psycho',
    title: 'Psycho',
    director: 'Alfred Hitchcock',
    year: 1960,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Psychological horror that revolutionized the genre and challenged audience expectations.',
    relevantTheories: ['horror', 'psychoanalytic', 'auteur']
  },
  {
    id: 'tokyo-story',
    title: 'Tokyo Story',
    director: 'Yasujirō Ozu',
    year: 1953,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Contemplative family drama using distinctive low camera angles and minimal camera movement.',
    relevantTheories: ['auteur', 'realist', 'humanist']
  },
  {
    id: 'la-dolce-vita',
    title: 'La Dolce Vita',
    director: 'Federico Fellini',
    year: 1960,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Italian art film exploring decadence, celebrity culture, and spiritual emptiness in modern Rome.',
    relevantTheories: ['auteur', 'modernist', 'cultural']
  },
  {
    id: 'star-wars',
    title: 'Star Wars',
    director: 'George Lucas',
    year: 1977,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Space opera that revolutionized special effects and established the modern blockbuster template.',
    relevantTheories: ['genre', 'apparatus', 'cultural-industries']
  },

  // JAPANESE ANIMATION AND CINEMA
  {
    id: 'spirited-away',
    title: 'Spirited Away',
    director: 'Hayao Miyazaki',
    year: 2001,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Studio Ghibli masterpiece about a girl trapped in a spirit world, exploring themes of environmental destruction, capitalism, and coming-of-age through traditional Japanese animation.',
    relevantTheories: ['animation', 'ecocriticism', 'cultural']
  },
  {
    id: 'belle',
    title: 'Belle',
    director: 'Mamoru Hosoda',
    year: 2021,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Contemporary anime exploring virtual reality, digital identity, and social media culture through the story of a shy girl who becomes a global sensation in a virtual world.',
    relevantTheories: ['anime', 'media-convergence', 'posthuman']
  },
  {
    id: 'ghost-in-the-shell',
    title: 'Ghost in the Shell',
    director: 'Mamoru Oshii',
    year: 1995,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Cyberpunk anime exploring the boundaries between human and machine consciousness, questioning what defines identity in a world of cybernetic enhancement and artificial intelligence.',
    relevantTheories: ['anime', 'posthuman', 'apparatus']
  },

  // CONTEMPORARY AND RECENT FILMS
  {
    id: 'the-substance',
    title: 'The Substance',
    director: 'Coralie Fargeat',
    year: 2024,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Body horror film exploring ageism, beauty standards, and female identity through a grotesque transformation narrative.',
    relevantTheories: ['feminist', 'horror', 'age-studies']
  },
  {
    id: 'anora',
    title: 'Anora',
    director: 'Sean Baker',
    year: 2024,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama about a sex worker who marries the son of a Russian oligarch, exploring class, immigration, and economic disparity.',
    relevantTheories: ['marxist', 'intersectional', 'cultural']
  },
  {
    id: 'barbie',
    title: 'Barbie',
    director: 'Greta Gerwig',
    year: 2023,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Comedy-fantasy film exploring gender roles, consumerism, and identity through the lens of the iconic doll.',
    relevantTheories: ['feminist', 'postmodern', 'cultural-industries']
  },
  {
    id: 'tangerine',
    title: 'Tangerine',
    director: 'Sean Baker',
    year: 2015,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Groundbreaking film shot entirely on iPhone, following transgender sex workers in Los Angeles.',
    relevantTheories: ['queer', 'apparatus', 'intersectional']
  },
  {
    id: 'fruitvale-station',
    title: 'Fruitvale Station',
    director: 'Ryan Coogler',
    year: 2013,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama based on the true story of Oscar Grant, exploring police violence and systemic racism.',
    relevantTheories: ['critical-race', 'realist', 'cultural']
  },
  {
    id: 'gravity',
    title: 'Gravity',
    director: 'Alfonso Cuarón',
    year: 2013,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Space thriller using groundbreaking visual effects to explore survival and human resilience.',
    relevantTheories: ['apparatus', 'feminist', 'cognitive']
  },
  {
    id: 'ex-machina',
    title: 'Ex Machina',
    director: 'Alex Garland',
    year: 2014,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Science fiction thriller examining artificial intelligence, consciousness, and gender.',
    relevantTheories: ['posthuman', 'feminist', 'apparatus']
  },
  {
    id: 'guardians-of-the-galaxy',
    title: 'Guardians of the Galaxy',
    director: 'James Gunn',
    year: 2014,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Marvel superhero film that blends comedy with space opera, featuring diverse characters.',
    relevantTheories: ['postmodern', 'media-convergence', 'genre']
  },
  {
    id: 'wonder-woman',
    title: 'Wonder Woman',
    director: 'Patty Jenkins',
    year: 2017,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Superhero film directed by a woman, featuring a female protagonist and addressing gender representation.',
    relevantTheories: ['feminist', 'genre', 'cultural']
  },
  {
    id: 'green-book',
    title: 'Green Book',
    director: 'Peter Farrelly',
    year: 2018,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama about friendship between a Black pianist and white driver during a 1960s concert tour.',
    relevantTheories: ['critical-race', 'cultural', 'humanist']
  },

  // CLASSIC HOLLYWOOD AND GOLDEN AGE
  {
    id: 'casablanca',
    title: 'Casablanca',
    director: 'Michael Curtiz',
    year: 1942,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Wartime romance set in Morocco during World War II, exploring themes of sacrifice and moral choice.',
    relevantTheories: ['genre', 'humanist', 'cultural']
  },
  {
    id: 'gone-with-the-wind',
    title: 'Gone with the Wind',
    director: 'Victor Fleming',
    year: 1939,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Epic historical romance about the American Civil War and Reconstruction era.',
    relevantTheories: ['critical-race', 'genre', 'cultural']
  },
  {
    id: 'singin-in-the-rain',
    title: 'Singin\' in the Rain',
    director: 'Gene Kelly & Stanley Donen',
    year: 1952,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Musical comedy about Hollywood\'s transition from silent films to talkies.',
    relevantTheories: ['genre', 'apparatus', 'modernist']
  },
  {
    id: 'sunset-boulevard',
    title: 'Sunset Boulevard',
    director: 'Billy Wilder',
    year: 1950,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Film noir about a faded silent film star and a struggling screenwriter.',
    relevantTheories: ['genre', 'age-studies', 'cultural']
  },
  {
    id: 'all-about-eve',
    title: 'All About Eve',
    director: 'Joseph L. Mankiewicz',
    year: 1950,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Backstage drama about aging, ambition, and female rivalry in the theater world.',
    relevantTheories: ['feminist', 'age-studies', 'cultural']
  },
  {
    id: 'double-indemnity',
    title: 'Double Indemnity',
    director: 'Billy Wilder',
    year: 1944,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Classic film noir about an insurance salesman seduced into murder.',
    relevantTheories: ['genre', 'feminist', 'psychoanalytic']
  },
  {
    id: 'the-maltese-falcon',
    title: 'The Maltese Falcon',
    director: 'John Huston',
    year: 1941,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Detective film noir featuring private investigator Sam Spade.',
    relevantTheories: ['genre', 'auteur', 'cultural']
  },

  // HORROR AND THRILLER CLASSICS
  {
    id: 'the-exorcist',
    title: 'The Exorcist',
    director: 'William Friedkin',
    year: 1973,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Supernatural horror about demonic possession that redefined the horror genre.',
    relevantTheories: ['horror', 'psychoanalytic', 'cultural']
  },
  {
    id: 'halloween',
    title: 'Halloween',
    director: 'John Carpenter',
    year: 1978,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Slasher film that established many horror conventions and the Final Girl trope.',
    relevantTheories: ['horror', 'feminist', 'genre']
  },
  {
    id: 'the-birds',
    title: 'The Birds',
    director: 'Alfred Hitchcock',
    year: 1963,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Horror film about nature\'s revolt against humanity, exploring environmental anxiety.',
    relevantTheories: ['horror', 'ecocriticism', 'auteur']
  },
  {
    id: 'rosemarys-baby',
    title: 'Rosemary\'s Baby',
    director: 'Roman Polanski',
    year: 1968,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Psychological horror about pregnancy, paranoia, and conspiracy.',
    relevantTheories: ['horror', 'feminist', 'psychoanalytic']
  },
  {
    id: 'night-of-the-living-dead',
    title: 'Night of the Living Dead',
    director: 'George A. Romero',
    year: 1968,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Zombie horror film that created the modern zombie genre and social commentary.',
    relevantTheories: ['horror', 'critical-race', 'cultural']
  },

  // SCIENCE FICTION CLASSICS
  {
    id: 'planet-of-the-apes',
    title: 'Planet of the Apes',
    director: 'Franklin J. Schaffner',
    year: 1968,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Science fiction allegory about racism and social hierarchy through ape civilization.',
    relevantTheories: ['critical-race', 'genre', 'cultural']
  },
  {
    id: 'the-day-the-earth-stood-still',
    title: 'The Day the Earth Stood Still',
    director: 'Robert Wise',
    year: 1951,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Science fiction film about an alien visitor warning humanity about nuclear weapons.',
    relevantTheories: ['genre', 'cultural', 'apparatus']
  },
  {
    id: 'soylent-green',
    title: 'Soylent Green',
    director: 'Richard Fleischer',
    year: 1973,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Dystopian science fiction exploring overpopulation and environmental collapse.',
    relevantTheories: ['ecocriticism', 'marxist', 'genre']
  },
  {
    id: '2001-a-space-odyssey',
    title: '2001: A Space Odyssey',
    director: 'Stanley Kubrick',
    year: 1968,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Epic science fiction exploring human evolution, artificial intelligence, and cosmic mystery.',
    relevantTheories: ['posthuman', 'apparatus', 'auteur']
  },
  {
    id: 'blade-runner',
    title: 'Blade Runner',
    director: 'Ridley Scott',
    year: 1982,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Neo-noir science fiction about artificial humans and questions of identity.',
    relevantTheories: ['posthuman', 'genre', 'apparatus']
  },

  // WESTERNS
  {
    id: 'the-searchers',
    title: 'The Searchers',
    director: 'John Ford',
    year: 1956,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Western exploring racism, obsession, and the mythology of the American frontier.',
    relevantTheories: ['genre', 'critical-race', 'auteur']
  },
  {
    id: 'unforgiven',
    title: 'Unforgiven',
    director: 'Clint Eastwood',
    year: 1992,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Revisionist Western that deconstructs the mythology of the Old West.',
    relevantTheories: ['genre', 'auteur', 'postmodern']
  },
  {
    id: 'tombstone',
    title: 'Tombstone',
    director: 'George P. Cosmatos',
    year: 1993,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Western about Wyatt Earp and Doc Holliday, exploring themes of law and masculine friendship.',
    relevantTheories: ['genre', 'cultural', 'humanist']
  },

  // ANIMATION
  {
    id: 'toy-story',
    title: 'Toy Story',
    director: 'John Lasseter',
    year: 1995,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'First fully computer-animated feature film that revolutionized animation technology.',
    relevantTheories: ['animation', 'apparatus', 'cultural']
  },
  {
    id: 'wall-e',
    title: 'WALL-E',
    director: 'Andrew Stanton',
    year: 2008,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Pixar animation exploring environmental themes and human-technology relationships.',
    relevantTheories: ['ecocriticism', 'animation', 'posthuman']
  },
  {
    id: 'steamboat-willie',
    title: 'Steamboat Willie',
    director: 'Walt Disney & Ub Iwerks',
    year: 1928,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Mickey Mouse\'s debut cartoon that pioneered synchronized sound in animation.',
    relevantTheories: ['animation', 'sound-studies', 'apparatus']
  },

  // EARLY CINEMA AND PIONEERS
  {
    id: 'a-trip-to-the-moon',
    title: 'A Trip to the Moon',
    director: 'Georges Méliès',
    year: 1902,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Pioneering science fiction film that established many cinematic techniques.',
    relevantTheories: ['apparatus', 'genre', 'formalist']
  },
  {
    id: 'the-birth-of-a-nation',
    title: 'The Birth of a Nation',
    director: 'D.W. Griffith',
    year: 1915,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Controversial epic that advanced film technique while promoting racist ideology.',
    relevantTheories: ['critical-race', 'apparatus', 'formalist']
  },
  {
    id: 'the-cabinet-of-dr-caligari',
    title: 'The Cabinet of Dr. Caligari',
    director: 'Robert Wiene',
    year: 1920,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'German Expressionist horror film with distinctive visual style and psychological themes.',
    relevantTheories: ['horror', 'formalist', 'modernist']
  },

  // INTERNATIONAL CINEMA
  {
    id: 'bicycle-thieves',
    title: 'Bicycle Thieves',
    director: 'Vittorio De Sica',
    year: 1948,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Italian neorealist film about poverty and desperation in post-war Rome.',
    relevantTheories: ['realist', 'marxist', 'humanist']
  },
  {
    id: 'the-400-blows',
    title: 'The 400 Blows',
    director: 'François Truffaut',
    year: 1959,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'French New Wave coming-of-age story about a troubled adolescent.',
    relevantTheories: ['auteur', 'modernist', 'humanist']
  },
  {
    id: 'breathless',
    title: 'Breathless',
    director: 'Jean-Luc Godard',
    year: 1960,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'French New Wave crime film that revolutionized editing and narrative conventions.',
    relevantTheories: ['modernist', 'auteur', 'formalist']
  },
  {
    id: 'seven-samurai',
    title: 'Seven Samurai',
    director: 'Akira Kurosawa',
    year: 1954,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Epic samurai film about honor, sacrifice, and social class in feudal Japan.',
    relevantTheories: ['auteur', 'genre', 'cultural']
  },

  // DOCUMENTARIES
  {
    id: 'man-on-wire',
    title: 'Man on Wire',
    director: 'James Marsh',
    year: 2008,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Documentary about Philippe Petit\'s illegal high-wire walk between the Twin Towers.',
    relevantTheories: ['realist', 'cultural', 'apparatus']
  },
  {
    id: 'man-with-a-movie-camera',
    title: 'Man with a Movie Camera',
    director: 'Dziga Vertov',
    year: 1929,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Revolutionary Soviet documentary experimenting with cinematic technique.',
    relevantTheories: ['formalist', 'apparatus', 'modernist']
  },

  // FILM NOIR
  {
    id: 'the-killers',
    title: 'The Killers',
    director: 'Robert Siodmak',
    year: 1946,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Film noir based on Hemingway\'s story, featuring complex narrative structure.',
    relevantTheories: ['genre', 'structuralist', 'psychoanalytic']
  },
  {
    id: 'mildred-pierce',
    title: 'Mildred Pierce',
    director: 'Michael Curtiz',
    year: 1945,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Film noir about a working mother\'s sacrifice and ambition.',
    relevantTheories: ['feminist', 'genre', 'marxist']
  },

  // SOCIAL DRAMAS
  {
    id: 'to-kill-a-mockingbird',
    title: 'To Kill a Mockingbird',
    director: 'Robert Mulligan',
    year: 1962,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Adaptation exploring racial injustice in the American South.',
    relevantTheories: ['critical-race', 'humanist', 'cultural']
  },
  {
    id: 'nothing-but-a-man',
    title: 'Nothing But a Man',
    director: 'Michael Roemer',
    year: 1964,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Independent drama about a Black railroad worker facing racism in the 1960s South.',
    relevantTheories: ['critical-race', 'realist', 'cultural']
  },
  {
    id: 'driving-miss-daisy',
    title: 'Driving Miss Daisy',
    director: 'Bruce Beresford',
    year: 1989,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama about the relationship between an elderly Jewish woman and her African American chauffeur.',
    relevantTheories: ['critical-race', 'age-studies', 'cultural']
  },
  {
    id: 'monsters-ball',
    title: 'Monster\'s Ball',
    director: 'Marc Forster',
    year: 2001,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama exploring racial tensions, grief, and redemption in the American South.',
    relevantTheories: ['critical-race', 'intersectional', 'cultural']
  },

  // CONTROVERSIAL AND CHALLENGING FILMS
  {
    id: 'freaks',
    title: 'Freaks',
    director: 'Tod Browning',
    year: 1932,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Controversial horror film featuring real circus performers with disabilities.',
    relevantTheories: ['disability-studies', 'horror', 'cultural']
  },
  {
    id: 'blue-velvet',
    title: 'Blue Velvet',
    director: 'David Lynch',
    year: 1986,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Surreal neo-noir exploring the dark underbelly of suburban America.',
    relevantTheories: ['postmodern', 'psychoanalytic', 'auteur']
  },

  // COMING-OF-AGE AND YOUTH FILMS
  {
    id: 'rebel-without-a-cause',
    title: 'Rebel Without a Cause',
    director: 'Nicholas Ray',
    year: 1955,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama about teenage alienation and rebellion in 1950s America.',
    relevantTheories: ['cultural', 'psychoanalytic', 'humanist']
  },
  {
    id: 'big',
    title: 'Big',
    director: 'Penny Marshall',
    year: 1988,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Fantasy comedy about a boy who wishes to be "big" and wakes up in an adult\'s body.',
    relevantTheories: ['genre', 'cultural', 'humanist']
  },

  // MILITARY AND WAR FILMS
  {
    id: 'crimson-tide',
    title: 'Crimson Tide',
    director: 'Tony Scott',
    year: 1995,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Military thriller about a power struggle between submarine officers during a nuclear crisis.',
    relevantTheories: ['genre', 'cultural', 'apparatus']
  },
  {
    id: 'apocalypse-now',
    title: 'Apocalypse Now',
    director: 'Francis Ford Coppola',
    year: 1979,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Vietnam War epic exploring the psychological horror of warfare.',
    relevantTheories: ['auteur', 'postcolonial', 'psychoanalytic']
  },

  // MUSICALS AND PERFORMANCE
  {
    id: 'purple-rain',
    title: 'Purple Rain',
    director: 'Albert Magnoli',
    year: 1984,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Musical drama starring Prince exploring artistic expression and the music industry.',
    relevantTheories: ['genre', 'cultural', 'auteur']
  },
  {
    id: 'michael-jackson-thriller',
    title: 'Michael Jackson\'s Thriller',
    director: 'John Landis',
    year: 1983,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Groundbreaking music video that revolutionized the medium.',
    relevantTheories: ['media-convergence', 'horror', 'cultural']
  },
  {
    id: 'chicago',
    title: 'Chicago',
    director: 'Rob Marshall',
    year: 2002,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Musical exploring media spectacle, celebrity culture, and female agency.',
    relevantTheories: ['feminist', 'cultural', 'genre']
  },

  // ADDITIONAL CLASSICS AND IMPORTANT FILMS
  {
    id: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Prison drama exploring themes of hope, friendship, and institutional corruption.',
    relevantTheories: ['humanist', 'marxist', 'cultural']
  },
  {
    id: 'pulp-fiction',
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: 1994,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Postmodern crime film with non-linear narrative and pop culture references.',
    relevantTheories: ['postmodern', 'genre', 'auteur']
  },
  {
    id: 'the-godfather',
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: 1972,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Epic crime saga about an Italian-American crime family.',
    relevantTheories: ['genre', 'auteur', 'cultural']
  },
  {
    id: 'goodfellas',
    title: 'Goodfellas',
    director: 'Martin Scorsese',
    year: 1990,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Crime film about the rise and fall of a mob associate.',
    relevantTheories: ['genre', 'auteur', 'cultural']
  },
  {
    id: 'taxi-driver',
    title: 'Taxi Driver',
    director: 'Martin Scorsese',
    year: 1976,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Psychological drama about urban alienation and violence.',
    relevantTheories: ['psychoanalytic', 'auteur', 'cultural']
  },
  {
    id: 'raging-bull',
    title: 'Raging Bull',
    director: 'Martin Scorsese',
    year: 1980,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Biographical drama about boxer Jake LaMotta exploring violence and masculinity.',
    relevantTheories: ['auteur', 'psychoanalytic', 'cultural']
  },
  {
    id: 'whatever-happened-baby-jane',
    title: 'Whatever Happened to Baby Jane?',
    director: 'Robert Aldrich',
    year: 1962,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Psychological horror about aging female stars, exploring celebrity and sisterhood.',
    relevantTheories: ['horror', 'feminist', 'age-studies']
  },

  // NEW FILMS FROM PREVIOUS BATCHES
  {
    id: 'cat-on-a-hot-tin-roof',
    title: 'Cat on a Hot Tin Roof',
    director: 'Richard Brooks',
    year: 1958,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Tennessee Williams adaptation exploring family dysfunction, sexuality, and Southern Gothic themes.',
    relevantTheories: ['psychoanalytic', 'queer', 'cultural']
  },
  {
    id: 'on-the-waterfront',
    title: 'On the Waterfront',
    director: 'Elia Kazan',
    year: 1954,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama about corruption and moral courage among dock workers.',
    relevantTheories: ['marxist', 'realist', 'humanist']
  },
  {
    id: 'marty',
    title: 'Marty',
    director: 'Delbert Mann',
    year: 1955,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Intimate character study of a lonely butcher finding love.',
    relevantTheories: ['realist', 'humanist', 'cultural']
  },
  {
    id: 'gladiator',
    title: 'Gladiator',
    director: 'Ridley Scott',
    year: 2000,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Epic historical drama about a Roman general seeking revenge.',
    relevantTheories: ['genre', 'spectacle', 'cultural']
  },
  {
    id: 'hercules',
    title: 'Hercules',
    director: 'Ron Clements & John Musker',
    year: 1997,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Disney animated musical retelling the Greek myth of Hercules.',
    relevantTheories: ['animation', 'genre', 'cultural']
  },
  {
    id: 'streetcar-named-desire',
    title: 'A Streetcar Named Desire',
    director: 'Elia Kazan',
    year: 1951,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Tennessee Williams adaptation exploring desire, madness, and class conflict.',
    relevantTheories: ['psychoanalytic', 'feminist', 'cultural']
  },
  {
    id: 'parasite',
    title: 'Parasite',
    director: 'Bong Joon-ho',
    year: 2019,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Korean thriller exploring class inequality and social stratification.',
    relevantTheories: ['marxist', 'postcolonial', 'genre']
  },
  {
    id: 'boys-dont-cry',
    title: 'Boys Don\'t Cry',
    director: 'Kimberly Peirce',
    year: 1999,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama about transgender man Brandon Teena\'s tragic story.',
    relevantTheories: ['queer', 'feminist', 'critical-race']
  },
  {
    id: 'million-dollar-baby',
    title: 'Million Dollar Baby',
    director: 'Clint Eastwood',
    year: 2004,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Boxing drama exploring mentorship, determination, and moral complexity.',
    relevantTheories: ['feminist', 'disability-studies', 'humanist']
  },
  {
    id: 'gran-torino',
    title: 'Gran Torino',
    director: 'Clint Eastwood',
    year: 2008,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama about an aging veteran confronting his prejudices.',
    relevantTheories: ['critical-race', 'age-studies', 'cultural']
  },
  {
    id: 'frankenstein',
    title: 'Frankenstein',
    director: 'James Whale',
    year: 1931,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Classic horror film about a scientist creating life from death.',
    relevantTheories: ['horror', 'posthuman', 'genre']
  },
  {
    id: 'nosferatu',
    title: 'Nosferatu',
    director: 'F.W. Murnau',
    year: 1922,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Silent vampire film that established many horror conventions.',
    relevantTheories: ['horror', 'formalist', 'apparatus']
  },
  {
    id: 'ghost',
    title: 'Ghost',
    director: 'Jerry Zucker',
    year: 1990,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Supernatural romance about love transcending death.',
    relevantTheories: ['genre', 'psychoanalytic', 'cultural']
  },
  {
    id: 'glory',
    title: 'Glory',
    director: 'Edward Zwick',
    year: 1989,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Civil War drama about the first African American regiment.',
    relevantTheories: ['critical-race', 'genre', 'cultural']
  },
  {
    id: 'm',
    title: 'M',
    director: 'Fritz Lang',
    year: 1931,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'German thriller about a child murderer and mob justice.',
    relevantTheories: ['genre', 'apparatus', 'psychoanalytic']
  },
  {
    id: 'the-third-man',
    title: 'The Third Man',
    director: 'Carol Reed',
    year: 1949,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Post-war noir thriller set in divided Vienna.',
    relevantTheories: ['genre', 'apparatus', 'cultural']
  },
  {
    id: 'american-graffiti',
    title: 'American Graffiti',
    director: 'George Lucas',
    year: 1973,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Coming-of-age film about teenagers in 1960s California.',
    relevantTheories: ['cultural', 'auteur', 'humanist']
  },
  {
    id: 'american-beauty',
    title: 'American Beauty',
    director: 'Sam Mendes',
    year: 1999,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Satirical drama about suburban alienation and midlife crisis.',
    relevantTheories: ['cultural', 'psychoanalytic', 'feminist']
  },
  {
    id: 'american-sniper',
    title: 'American Sniper',
    director: 'Clint Eastwood',
    year: 2014,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Biographical war drama about Navy SEAL Chris Kyle.',
    relevantTheories: ['genre', 'cultural', 'apparatus']
  },
  {
    id: 'the-thin-blue-line',
    title: 'The Thin Blue Line',
    director: 'Errol Morris',
    year: 1988,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Documentary investigating a murder case and police corruption.',
    relevantTheories: ['realist', 'apparatus', 'cultural']
  },
  {
    id: 'red-headed-woman',
    title: 'Red Headed Woman',
    director: 'Jack Conway',
    year: 1932,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Pre-Code drama about a woman using sexuality for social advancement.',
    relevantTheories: ['feminist', 'cultural', 'genre']
  },
  {
    id: 'baby-face',
    title: 'Baby Face',
    director: 'Alfred E. Green',
    year: 1933,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Pre-Code film about a woman climbing the social ladder through relationships.',
    relevantTheories: ['feminist', 'marxist', 'cultural']
  },
  {
    id: 'pinky',
    title: 'Pinky',
    director: 'Elia Kazan',
    year: 1949,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama about a light-skinned Black woman passing for white.',
    relevantTheories: ['critical-race', 'feminist', 'cultural']
  },
  {
    id: 'imitation-of-life',
    title: 'Imitation of Life',
    director: 'Douglas Sirk',
    year: 1959,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Melodrama exploring racial passing and mother-daughter relationships.',
    relevantTheories: ['critical-race', 'feminist', 'genre']
  },
  {
    id: 'pariah',
    title: 'Pariah',
    director: 'Dee Rees',
    year: 2011,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Coming-of-age drama about a Black lesbian teenager.',
    relevantTheories: ['queer', 'critical-race', 'intersectional']
  },
  {
    id: 'gentlemen-prefer-blondes',
    title: 'Gentlemen Prefer Blondes',
    director: 'Howard Hawks',
    year: 1953,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Musical comedy starring Marilyn Monroe and Jane Russell.',
    relevantTheories: ['feminist', 'genre', 'cultural']
  },
  {
    id: 'some-like-it-hot',
    title: 'Some Like It Hot',
    director: 'Billy Wilder',
    year: 1959,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Comedy about two musicians disguising themselves as women.',
    relevantTheories: ['queer', 'genre', 'feminist']
  },
  {
    id: 'niagara',
    title: 'Niagara',
    director: 'Henry Hathaway',
    year: 1953,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Film noir thriller starring Marilyn Monroe as a femme fatale.',
    relevantTheories: ['genre', 'feminist', 'psychoanalytic']
  },
  {
    id: 'twilight',
    title: 'Twilight',
    director: 'Catherine Hardwicke',
    year: 2008,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Vampire romance that became a cultural phenomenon.',
    relevantTheories: ['genre', 'fandom', 'cultural']
  },
  {
    id: 'cuties',
    title: 'Cuties',
    director: 'Maïmouna Doucouré',
    year: 2020,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Coming-of-age drama about an 11-year-old girl joining a dance group.',
    relevantTheories: ['feminist', 'cultural', 'age-studies']
  },
  {
    id: 'in-his-house',
    title: 'His House',
    director: 'Remi Weekes',
    year: 2020,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Horror film about refugees haunted by their past.',
    relevantTheories: ['horror', 'postcolonial', 'cultural']
  },
  {
    id: 'single-white-female',
    title: 'Single White Female',
    director: 'Barbet Schroeder',
    year: 1992,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Psychological thriller about obsession and identity.',
    relevantTheories: ['psychoanalytic', 'feminist', 'genre']
  },
  {
    id: 'godzilla',
    title: 'Godzilla',
    director: 'Ishirō Honda',
    year: 1954,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Japanese kaiju film serving as nuclear war allegory.',
    relevantTheories: ['genre', 'cultural', 'ecocriticism']
  },
  {
    id: 'jurassic-park',
    title: 'Jurassic Park',
    director: 'Steven Spielberg',
    year: 1993,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Science fiction thriller about dinosaurs brought back to life.',
    relevantTheories: ['genre', 'apparatus', 'ecocriticism']
  },
  {
    id: 'passing',
    title: 'Passing',
    director: 'Rebecca Hall',
    year: 2021,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama about two Black women who can pass for white in 1920s New York.',
    relevantTheories: ['critical-race', 'feminist', 'intersectional']
  },
  {
    id: 'shakespeare-in-love',
    title: 'Shakespeare in Love',
    director: 'John Madden',
    year: 1998,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Romantic comedy imagining Shakespeare\'s inspiration for Romeo and Juliet.',
    relevantTheories: ['genre', 'postmodern', 'cultural']
  },
  {
    id: 'love-story',
    title: 'Love Story',
    director: 'Arthur Hiller',
    year: 1970,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Romantic drama about young love and tragedy.',
    relevantTheories: ['genre', 'cultural', 'humanist']
  },
  {
    id: 'one-flew-over-the-cuckoos-nest',
    title: 'One Flew Over the Cuckoo\'s Nest',
    director: 'Miloš Forman',
    year: 1975,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Drama about rebellion against institutional authority in a mental hospital.',
    relevantTheories: ['marxist', 'disability-studies', 'humanist']
  },

  // LATEST BATCH - NEW FILMS
  {
    id: 'jaws',
    title: 'Jaws',
    director: 'Steven Spielberg',
    year: 1975,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Blockbuster thriller about a great white shark terrorizing a beach town, establishing the summer movie phenomenon.',
    relevantTheories: ['genre', 'apparatus', 'cultural-industries']
  },
  {
    id: 'cast-away',
    title: 'Cast Away',
    director: 'Robert Zemeckis',
    year: 2000,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Survival drama about a FedEx executive stranded on a deserted island, exploring isolation and human resilience.',
    relevantTheories: ['humanist', 'apparatus', 'cultural']
  },
  {
    id: 'school-daze',
    title: 'School Daze',
    director: 'Spike Lee',
    year: 1988,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Musical exploring colorism, class divisions, and identity politics at a historically Black college.',
    relevantTheories: ['critical-race', 'intersectional', 'cultural']
  },
  {
    id: 'the-dirty-dozen',
    title: 'The Dirty Dozen',
    director: 'Robert Aldrich',
    year: 1967,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'War film about convicted soldiers given a chance at redemption through a suicide mission.',
    relevantTheories: ['genre', 'cultural', 'marxist']
  },
  {
    id: 'bullitt',
    title: 'Bullitt',
    director: 'Peter Yates',
    year: 1968,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Crime thriller famous for its realistic San Francisco car chase sequence.',
    relevantTheories: ['genre', 'apparatus', 'auteur']
  },
  {
    id: 'goldfinger',
    title: 'Goldfinger',
    director: 'Guy Hamilton',
    year: 1964,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Iconic James Bond film featuring the memorable villain Auric Goldfinger.',
    relevantTheories: ['genre', 'cultural', 'spectacle']
  },
  {
    id: 'dr-no',
    title: 'Dr. No',
    director: 'Terence Young',
    year: 1962,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'The first James Bond film that launched the iconic spy franchise.',
    relevantTheories: ['genre', 'cultural-industries', 'postcolonial']
  },
  {
    id: 'hollywood-shuffle',
    title: 'Hollywood Shuffle',
    director: 'Robert Townsend',
    year: 1987,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Satirical comedy critiquing Hollywood\'s racial stereotypes and limited roles for Black actors.',
    relevantTheories: ['critical-race', 'cultural', 'postmodern']
  },
  {
    id: 'vampire-in-brooklyn',
    title: 'Vampire in Brooklyn',
    director: 'Wes Craven',
    year: 1995,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Horror comedy starring Eddie Murphy as a vampire seeking a mate in Brooklyn.',
    relevantTheories: ['horror', 'genre', 'critical-race']
  },
  {
    id: 'coming-to-america',
    title: 'Coming to America',
    director: 'John Landis',
    year: 1988,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Comedy about an African prince who travels to Queens to find a bride.',
    relevantTheories: ['postcolonial', 'cultural', 'genre']
  },

  // NEW FILMS ADDED IN THIS BATCH
  {
    id: 'a-clockwork-orange',
    title: 'A Clockwork Orange',
    director: 'Stanley Kubrick',
    year: 1971,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Dystopian crime film exploring free will, violence, and behavioral conditioning in a futuristic society.',
    relevantTheories: ['psychoanalytic', 'marxist', 'apparatus', 'posthuman']
  },
  {
    id: 'metropolis',
    title: 'Metropolis',
    director: 'Fritz Lang',
    year: 1927,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Silent science fiction epic about class struggle in a futuristic city, featuring groundbreaking visual effects.',
    relevantTheories: ['marxist', 'apparatus', 'formalist', 'posthuman']
  },
  {
    id: 'city-lights',
    title: 'City Lights',
    director: 'Charlie Chaplin',
    year: 1931,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Silent romantic comedy about the Tramp\'s love for a blind flower seller, blending comedy with pathos.',
    relevantTheories: ['humanist', 'formalist', 'apparatus', 'disability-studies']
  },
  {
    id: 'the-great-dictator',
    title: 'The Great Dictator',
    director: 'Charlie Chaplin',
    year: 1940,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Political satire where Chaplin plays both a Jewish barber and a Hitler-like dictator, critiquing fascism.',
    relevantTheories: ['marxist', 'cultural', 'auteur', 'humanist']
  },
  {
    id: 'modern-times',
    title: 'Modern Times',
    director: 'Charlie Chaplin',
    year: 1936,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Comedy about industrialization and its dehumanizing effects on workers, featuring the iconic factory sequence.',
    relevantTheories: ['marxist', 'apparatus', 'humanist', 'formalist']
  },
  {
    id: 'sherlock-jr',
    title: 'Sherlock Jr.',
    director: 'Buster Keaton',
    year: 1924,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Silent comedy about a projectionist who dreams himself into a movie, featuring innovative visual effects.',
    relevantTheories: ['apparatus', 'formalist', 'modernist', 'auteur']
  },
  {
    id: 'bringing-up-baby',
    title: 'Bringing Up Baby',
    director: 'Howard Hawks',
    year: 1938,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Screwball comedy starring Cary Grant and Katharine Hepburn, featuring rapid-fire dialogue and gender role reversals.',
    relevantTheories: ['genre', 'feminist', 'auteur', 'cultural']
  },
  {
    id: 'body-heat',
    title: 'Body Heat',
    director: 'Lawrence Kasdan',
    year: 1981,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Neo-noir thriller about a lawyer seduced into murder by a femme fatale, updating classic noir themes.',
    relevantTheories: ['genre', 'feminist', 'psychoanalytic', 'postmodern']
  },
  {
    id: 'devil-in-a-blue-dress',
    title: 'Devil in a Blue Dress',
    director: 'Carl Franklin',
    year: 1995,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=400',
    description: 'Neo-noir featuring a Black detective in 1940s Los Angeles, exploring race and class in post-war America.',
    relevantTheories: ['critical-race', 'genre', 'cultural', 'intersectional']
  }
];