import { films } from './films';

// Re-export films for other modules that might need it
export { films } from './films';

export const theories = [
  {
    id: 'auteur',
    name: 'Auteur Theory',
    summary: 'The director as the primary creative force and "author" of a film, with a distinctive personal style.',
    description: 'Auteur theory positions the director as the primary creative force behind a film, arguing that great directors have a distinctive personal style that can be traced across their body of work. Originally developed by French critics at Cahiers du Cinéma in the 1950s as "politique des auteurs," it was later popularized in America by critic Andrew Sarris. The theory emphasizes the director\'s personal vision, recurring themes, and visual style as markers of authorship.',
    keyThinkers: ['François Truffaut', 'Andrew Sarris', 'Alexandre Astruc', 'Jean-Luc Godard'],
    representativeFilms: films.filter(f => ['citizen-kane', 'vertigo', 'tokyo-story', 'the-400-blows'].includes(f.id)),
    keyPoints: [
      'Director as primary creative author',
      'Consistency of style and themes across films',
      'Personal vision over commercial considerations',
      'Technical competence and interior meaning'
    ],
    historicalContext: 'Developed in 1950s France as a reaction against literary adaptations and studio system filmmaking, promoting cinema as a legitimate art form.',
    color: '#3B82F6'
  },
  {
    id: 'feminist',
    name: 'Feminist Film Theory',
    summary: 'Analysis of how cinema represents gender, challenges patriarchal structures, and explores women\'s experiences.',
    description: 'Feminist film theory examines how cinema represents gender roles, sexuality, and power dynamics. It critiques the male gaze in classical Hollywood cinema and explores how films can challenge or reinforce patriarchal ideologies. Key concepts include the male gaze, counter-cinema, and the analysis of female spectatorship. The theory has evolved to include intersectional approaches that consider race, class, and sexuality alongside gender.',
    keyThinkers: ['Laura Mulvey', 'Teresa de Lauretis', 'bell hooks', 'Claire Johnston'],
    representativeFilms: films.filter(f => ['mulholland-drive', 'get-out', 'wonder-woman', 'barbie'].includes(f.id)),
    keyPoints: [
      'Critique of the male gaze in cinema',
      'Analysis of female representation and agency',
      'Counter-cinema as alternative practice',
      'Intersectional approaches to gender and identity'
    ],
    historicalContext: 'Emerged in the 1970s alongside the women\'s liberation movement, with Laura Mulvey\'s "Visual Pleasure and Narrative Cinema" (1975) as a foundational text.',
    color: '#EC4899'
  },
  {
    id: 'psychoanalytic',
    name: 'Psychoanalytic Film Theory',
    summary: 'Application of Freudian and Lacanian concepts to understand cinema\'s unconscious effects on viewers.',
    description: 'Psychoanalytic film theory applies concepts from Freudian and Lacanian psychoanalysis to understand how cinema works on the unconscious mind. It examines concepts like voyeurism, fetishism, identification, and the mirror stage to explain the psychological mechanisms of film viewing. The theory explores how cinema manages desire, anxiety, and fantasy, and how spectators are positioned in relation to the screen.',
    keyThinkers: ['Christian Metz', 'Jean-Louis Baudry', 'Laura Mulvey', 'Joan Copjec'],
    representativeFilms: films.filter(f => ['vertigo', 'psycho', 'mulholland-drive', 'blue-velvet'].includes(f.id)),
    keyPoints: [
      'Cinema as dream-like experience',
      'Voyeurism and scopophilia in film viewing',
      'Identification and subject positioning',
      'Unconscious desires and repressions'
    ],
    historicalContext: 'Developed in the 1970s by film theorists applying Freudian and Lacanian psychoanalysis to cinema studies.',
    color: '#8B5CF6'
  },
  {
    id: 'horror',
    name: 'Horror Theory',
    summary: 'Analysis of how horror films create fear, explore social anxieties, and challenge cultural boundaries.',
    description: 'Horror theory examines how horror films create fear and unease while exploring deeper social and psychological anxieties. It analyzes the function of monsters, the role of the "Final Girl," and how horror reflects cultural fears about sexuality, death, and social change. The theory considers both the psychological mechanisms of fear and the social functions of horror as a genre.',
    keyThinkers: ['Carol Clover', 'Robin Wood', 'Barbara Creed', 'Noel Carroll'],
    representativeFilms: films.filter(f => ['psycho', 'get-out', 'the-exorcist', 'halloween'].includes(f.id)),
    keyPoints: [
      'Final Girl theory and gender dynamics',
      'Monsters as representations of social fears',
      'Horror as cathartic experience',
      'Boundary crossing and taboo violation'
    ],
    historicalContext: 'Developed from the 1970s onward, with significant contributions in the 1990s analyzing slasher films and their cultural significance.',
    color: '#DC2626'
  },
  {
    id: 'structuralist',
    name: 'Structuralist Film Theory',
    summary: 'Analysis of cinema as a language system with underlying structures that create meaning.',
    description: 'Structuralist film theory applies linguistic and anthropological concepts to analyze cinema as a system of signs and codes. It examines how films create meaning through binary oppositions, narrative structures, and genre conventions. The theory focuses on the underlying patterns and rules that govern cinematic language, treating films as texts that can be decoded through systematic analysis.',
    keyThinkers: ['Christian Metz', 'Roland Barthes', 'Claude Lévi-Strauss', 'Peter Wollen'],
    representativeFilms: films.filter(f => ['citizen-kane', 'the-searchers', 'breathless'].includes(f.id)),
    keyPoints: [
      'Cinema as language system',
      'Binary oppositions in narrative',
      'Genre as structural framework',
      'Codes and conventions analysis'
    ],
    historicalContext: 'Emerged in the 1960s-70s, applying structural linguistics and anthropology to film analysis.',
    color: '#059669'
  },
  {
    id: 'cognitive',
    name: 'Cognitive Film Theory',
    summary: 'Study of how viewers mentally process and understand films through psychological mechanisms.',
    description: 'Cognitive film theory examines how viewers mentally process and understand films, focusing on psychological mechanisms like attention, memory, and emotion. It studies how audiences make sense of narrative, recognize patterns, and engage emotionally with characters. The theory emphasizes the active role of viewers in constructing meaning and the universal cognitive processes involved in film comprehension.',
    keyThinkers: ['David Bordwell', 'Noël Carroll', 'Torben Grodal', 'Carl Plantinga'],
    representativeFilms: films.filter(f => ['citizen-kane', 'pulp-fiction', 'memento'].includes(f.id)),
    keyPoints: [
      'Active viewer participation in meaning-making',
      'Universal cognitive processes in film viewing',
      'Schema theory and pattern recognition',
      'Emotional engagement and empathy'
    ],
    historicalContext: 'Developed in the 1980s-90s as a reaction against psychoanalytic theory, emphasizing empirical psychology.',
    color: '#F59E0B'
  },
  {
    id: 'apparatus',
    name: 'Apparatus Theory',
    summary: 'Analysis of cinema\'s technological and institutional systems and their ideological effects.',
    description: 'Apparatus theory examines the entire technological, economic, and institutional system that produces and presents films to audiences. It analyzes how the cinematic apparatus - including cameras, projectors, theaters, and distribution networks - shapes not just what we see but how we see it. The theory explores the ideological implications of cinematic technology and spectatorship.',
    keyThinkers: ['Jean-Louis Baudry', 'Jean-Louis Comolli', 'Stephen Heath'],
    representativeFilms: films.filter(f => ['man-with-a-movie-camera', 'singin-in-the-rain'].includes(f.id)),
    keyPoints: [
      'Technology as ideologically loaded',
      'Cinematic apparatus shapes perception',
      'Institutional control of meaning',
      'Spectator positioning and subject formation'
    ],
    historicalContext: 'Developed in 1970s France, influenced by Marxist and psychoanalytic theory.',
    color: '#6366F1'
  },
  {
    id: 'marxist',
    name: 'Marxist Film Theory',
    summary: 'Analysis of cinema\'s relationship to economic systems, class struggle, and ideological reproduction.',
    description: 'Marxist film theory examines cinema\'s relationship to economic systems and class struggle. It analyzes how films reflect and reproduce dominant ideologies, serve capitalist interests, or potentially challenge existing power structures. The theory considers both the economic conditions of film production and the ideological content of films themselves.',
    keyThinkers: ['Walter Benjamin', 'Theodor Adorno', 'Louis Althusser', 'Fredric Jameson'],
    representativeFilms: films.filter(f => ['battleship-potemkin', 'bicycle-thieves', 'sorry-to-bother-you'].includes(f.id)),
    keyPoints: [
      'Cinema as ideological apparatus',
      'Class struggle reflected in film content',
      'Economic base determines cultural superstructure',
      'Potential for revolutionary cinema'
    ],
    historicalContext: 'Applied to cinema from the 1920s onward, with significant development in 1960s-70s film theory.',
    color: '#DC2626'
  },
  {
    id: 'postcolonial',
    name: 'Postcolonial Film Theory',
    summary: 'Analysis of cinema\'s role in colonialism and the development of decolonial film practices.',
    description: 'Postcolonial film theory examines how cinema has been used to justify and maintain colonial domination, and how filmmakers from formerly colonized nations have developed alternative cinematic languages. It analyzes orientalism, cultural imperialism, and the development of Third Cinema movements that challenge Western cinematic hegemony.',
    keyThinkers: ['Manthia Diawara', 'Teshome Gabriel', 'Hamid Naficy', 'Ella Shohat'],
    representativeFilms: films.filter(f => ['black-panther', 'fruitvale-station'].includes(f.id)),
    keyPoints: [
      'Critique of orientalism in cinema',
      'Third Cinema as revolutionary practice',
      'Cultural imperialism and resistance',
      'Hybrid identities and diaspora'
    ],
    historicalContext: 'Emerged in the 1960s-70s alongside decolonization movements and Third Cinema manifestos.',
    color: '#059669'
  },
  {
    id: 'genre',
    name: 'Genre Theory',
    summary: 'Study of film categories, their conventions, and how they shape audience expectations.',
    description: 'Genre theory examines how films are categorized into types (horror, western, musical, etc.) and how these categories function as cultural contracts between filmmakers and audiences. It analyzes the conventions, iconography, and narrative patterns that define genres, as well as how genres evolve and respond to social changes.',
    keyThinkers: ['Rick Altman', 'John Hartley', 'Steve Neale', 'Barry Keith Grant'],
    representativeFilms: films.filter(f => ['the-searchers', 'singin-in-the-rain', 'halloween'].includes(f.id)),
    keyPoints: [
      'Genres as cultural contracts',
      'Iconography and visual conventions',
      'Evolution and hybridization of genres',
      'Audience expectations and satisfaction'
    ],
    historicalContext: 'Developed from the 1960s onward, building on earlier industry and critical practices of film categorization.',
    color: '#7C3AED'
  },
  {
    id: 'cultural',
    name: 'Cultural Studies Film Theory',
    summary: 'Analysis of cinema within broader cultural contexts and power relations.',
    description: 'Cultural studies approaches to film examine cinema within broader cultural, social, and political contexts. It analyzes how films both reflect and shape cultural values, identities, and power relations. The approach emphasizes the active role of audiences in creating meaning and the importance of considering films within their specific cultural and historical contexts.',
    keyThinkers: ['Stuart Hall', 'Dick Hebdige', 'Lawrence Grossberg', 'Angela McRobbie'],
    representativeFilms: films.filter(f => ['get-out', 'black-panther', 'tangerine'].includes(f.id)),
    keyPoints: [
      'Films as cultural texts',
      'Active audience interpretation',
      'Power relations and hegemony',
      'Identity formation and representation'
    ],
    historicalContext: 'Emerged from British cultural studies in the 1960s-70s, applied to film from the 1980s onward.',
    color: '#059669'
  },
  {
    id: 'postmodern',
    name: 'Postmodern Film Theory',
    summary: 'Analysis of cinema in the context of postmodern culture, simulation, and fragmented reality.',
    description: 'Postmodern film theory examines cinema within the context of postmodern culture, characterized by simulation, pastiche, and the breakdown of traditional boundaries. It analyzes how films reflect and contribute to a culture of simulation where copies exist without originals, and how postmodern techniques like pastiche and intertextuality function in contemporary cinema.',
    keyThinkers: ['Jean Baudrillard', 'Fredric Jameson', 'Linda Hutcheon', 'Umberto Eco'],
    representativeFilms: films.filter(f => ['pulp-fiction', 'mulholland-drive', 'the-matrix'].includes(f.id)),
    keyPoints: [
      'Simulation and hyperreality',
      'Pastiche and intertextuality',
      'Breakdown of high/low culture distinctions',
      'Fragmentation and non-linear narrative'
    ],
    historicalContext: 'Developed from the 1980s onward, responding to changes in media culture and technology.',
    color: '#EC4899'
  },
  {
    id: 'formalist',
    name: 'Formalist Film Theory',
    summary: 'Focus on cinema\'s formal elements and techniques as the primary source of meaning.',
    description: 'Formalist film theory emphasizes the formal elements of cinema - editing, cinematography, sound, and mise-en-scène - as the primary sources of meaning. It analyzes how cinematic techniques create emotional and intellectual effects, often focusing on the ways films call attention to their own construction and challenge realistic representation.',
    keyThinkers: ['Sergei Eisenstein', 'Vsevolod Pudovkin', 'Rudolf Arnheim', 'Viktor Shklovsky'],
    representativeFilms: films.filter(f => ['battleship-potemkin', 'citizen-kane', 'man-with-a-movie-camera'].includes(f.id)),
    keyPoints: [
      'Emphasis on cinematic technique',
      'Montage as meaning creation',
      'Defamiliarization and estrangement',
      'Cinema as distinct art form'
    ],
    historicalContext: 'Emerged in 1920s Soviet Union and Germany, emphasizing cinema\'s unique artistic properties.',
    color: '#F59E0B'
  },
  {
    id: 'reception',
    name: 'Reception Theory',
    summary: 'Study of how different audiences interpret and respond to films based on their cultural contexts.',
    description: 'Reception theory examines how different audiences interpret and respond to films based on their cultural backgrounds, experiences, and contexts. It analyzes the active role of viewers in creating meaning and how the same film can be understood differently by different audiences. The theory considers preferred, negotiated, and oppositional readings of texts.',
    keyThinkers: ['Stuart Hall', 'Janice Radway', 'Janet Staiger', 'Barbara Klinger'],
    representativeFilms: films.filter(f => ['get-out', 'black-panther', 'star-wars'].includes(f.id)),
    keyPoints: [
      'Active audience interpretation',
      'Multiple possible readings of texts',
      'Cultural context shapes meaning',
      'Preferred vs. oppositional readings'
    ],
    historicalContext: 'Developed from the 1970s onward, influenced by reader-response theory and cultural studies.',
    color: '#10B981'
  },
  {
    id: 'spectator',
    name: 'Spectator Theory',
    summary: 'Analysis of the relationship between films and viewers, including identification and positioning.',
    description: 'Spectator theory examines the relationship between films and their viewers, analyzing how films position spectators and create identification with characters or perspectives. It explores the psychological and ideological mechanisms through which viewers are "sewn into" film texts and how different viewing positions are constructed.',
    keyThinkers: ['Laura Mulvey', 'Christian Metz', 'Miriam Hansen', 'Anne Friedberg'],
    representativeFilms: films.filter(f => ['vertigo', 'rear-window', 'mulholland-drive'].includes(f.id)),
    keyPoints: [
      'Spectator positioning and identification',
      'Suture and narrative involvement',
      'Gendered and racialized viewing positions',
      'Active vs. passive spectatorship'
    ],
    historicalContext: 'Developed in the 1970s-80s, combining psychoanalytic and feminist approaches to film viewing.',
    color: '#8B5CF6'
  },
  {
    id: 'critical-race',
    name: 'Critical Race Theory',
    summary: 'Analysis of how cinema represents race and perpetuates or challenges racial hierarchies.',
    description: 'Critical race theory in film studies examines how cinema represents race and ethnicity, analyzing both the perpetuation of racial stereotypes and the potential for films to challenge racial hierarchies. It considers the intersection of race with other identity categories and the importance of centering marginalized voices in film analysis.',
    keyThinkers: ['bell hooks', 'Tommy L. Lott', 'Manthia Diawara', 'Jacqueline Stewart'],
    representativeFilms: films.filter(f => ['get-out', 'black-panther', 'fruitvale-station'].includes(f.id)),
    keyPoints: [
      'Representation and stereotyping',
      'Whiteness as invisible norm',
      'Intersectionality of race and other identities',
      'Counter-narratives and resistance'
    ],
    historicalContext: 'Applied to film studies from the 1980s onward, building on legal and social critical race theory.',
    color: '#DC2626'
  },
  {
    id: 'queer',
    name: 'Queer Theory',
    summary: 'Analysis of sexuality, gender identity, and the challenge to heteronormative assumptions in cinema.',
    description: 'Queer theory in film studies challenges heteronormative assumptions and analyzes how cinema represents sexuality and gender identity. It examines both explicit LGBTQ+ content and the queer potential in mainstream films, analyzing camp aesthetics, gender performativity, and the subversion of traditional gender and sexuality categories.',
    keyThinkers: ['Judith Butler', 'Lee Edelman', 'José Esteban Muñoz', 'Alexander Doty'],
    representativeFilms: films.filter(f => ['tangerine', 'moonlight', 'call-me-by-your-name'].includes(f.id)),
    keyPoints: [
      'Challenge to heteronormativity',
      'Gender performativity and fluidity',
      'Camp aesthetics and sensibility',
      'Queer readings of mainstream texts'
    ],
    historicalContext: 'Emerged in the 1990s, building on feminist theory and gay/lesbian studies.',
    color: '#EC4899'
  },
  {
    id: 'intersectional',
    name: 'Intersectional Theory',
    summary: 'Analysis of how multiple identity categories intersect to create unique experiences of representation.',
    description: 'Intersectional theory examines how multiple identity categories - race, gender, class, sexuality, disability - intersect to create unique experiences that cannot be understood by analyzing each category separately. In film studies, it analyzes how characters and narratives represent these complex, overlapping identities.',
    keyThinkers: ['Kimberlé Crenshaw', 'Patricia Hill Collins', 'bell hooks', 'Audre Lorde'],
    representativeFilms: films.filter(f => ['moonlight', 'the-color-purple', 'precious'].includes(f.id)),
    keyPoints: [
      'Multiple, overlapping identities',
      'Unique experiences at intersections',
      'Critique of single-axis analysis',
      'Matrix of domination and privilege'
    ],
    historicalContext: 'Developed by Kimberlé Crenshaw in 1989, applied to film studies from the 1990s onward.',
    color: '#7C3AED'
  },
  {
    id: 'cultural-industries',
    name: 'Cultural Industries Theory',
    summary: 'Analysis of how cultural production is organized under capitalism and its effects on artistic content.',
    description: 'Cultural industries theory, developed by the Frankfurt School, analyzes how cultural production becomes industrialized under capitalism. It examines how the economic organization of cultural production affects artistic content, leading to standardization, commodification, and the manipulation of consumer desires.',
    keyThinkers: ['Theodor Adorno', 'Max Horkheimer', 'Herbert Marcuse', 'Walter Benjamin'],
    representativeFilms: films.filter(f => ['citizen-kane', 'network', 'the-player'].includes(f.id)),
    keyPoints: [
      'Commodification of culture',
      'Standardization and pseudo-individualization',
      'Manipulation of consumer desires',
      'Critique of mass culture'
    ],
    historicalContext: 'Developed by Frankfurt School theorists in the 1940s, applied to film and media industries.',
    color: '#DC2626'
  },
  {
    id: 'media-convergence',
    name: 'Media Convergence Theory',
    summary: 'Analysis of how different media forms merge and how audiences participate across platforms.',
    description: 'Media convergence theory examines how different media forms are merging through digital technology and how audiences participate across multiple platforms. It analyzes transmedia storytelling, participatory culture, and the changing relationship between producers and consumers in the digital age.',
    keyThinkers: ['Henry Jenkins', 'Janet Murray', 'Lev Manovich', 'Jay David Bolter'],
    representativeFilms: films.filter(f => ['the-matrix', 'avatar', 'ready-player-one'].includes(f.id)),
    keyPoints: [
      'Convergence of media technologies',
      'Transmedia storytelling',
      'Participatory culture',
      'Producer-consumer relationships'
    ],
    historicalContext: 'Developed from the 1990s onward in response to digital media technologies.',
    color: '#059669'
  },
  {
    id: 'fandom',
    name: 'Fan Studies',
    summary: 'Analysis of fan cultures, their practices, and their relationship to media texts.',
    description: 'Fan studies examines fan cultures and their relationship to media texts, analyzing how fans actively engage with, interpret, and transform media content. It considers fan practices like fan fiction, fan art, and fan communities as forms of cultural participation and resistance to dominant media narratives.',
    keyThinkers: ['Henry Jenkins', 'Anne Jamison', 'Kristina Busse', 'Nancy Baym'],
    representativeFilms: films.filter(f => ['star-wars', 'the-matrix', 'marvel-films'].includes(f.id)),
    keyPoints: [
      'Active fan participation',
      'Transformative fan practices',
      'Fan communities and identity',
      'Resistance to dominant narratives'
    ],
    historicalContext: 'Emerged in the 1990s, studying fan cultures around science fiction and other genres.',
    color: '#F59E0B'
  },
  {
    id: 'screen',
    name: 'Screen Theory',
    summary: 'Synthesis of psychoanalytic, Marxist, and semiotic approaches to film analysis.',
    description: 'Screen theory, associated with the British journal Screen, synthesizes psychoanalytic, Marxist, and semiotic approaches to film analysis. It examines how films position spectators ideologically and psychologically, analyzing the intersection of unconscious desire and political ideology in cinema.',
    keyThinkers: ['Stephen Heath', 'Colin MacCabe', 'Laura Mulvey', 'Peter Wollen'],
    representativeFilms: films.filter(f => ['citizen-kane', 'vertigo', 'godard-films'].includes(f.id)),
    keyPoints: [
      'Integration of multiple theoretical approaches',
      'Ideological positioning of spectators',
      'Intersection of desire and politics',
      'Critique of dominant cinema'
    ],
    historicalContext: 'Developed in 1970s Britain, influential in academic film studies.',
    color: '#6366F1'
  },
  {
    id: 'afrofuturist',
    name: 'Afrofuturist Theory',
    summary: 'Analysis of how science fiction and speculative elements explore Black experiences and futures.',
    description: 'Afrofuturist theory examines how science fiction and speculative elements are used to explore Black experiences, histories, and possible futures. It analyzes how Afrofuturist texts reimagine technology, time, and space from African diasporic perspectives, often challenging Western narratives of progress and modernity.',
    keyThinkers: ['Mark Dery', 'Kodwo Eshun', 'Ytasha Womack', 'Reynaldo Anderson'],
    representativeFilms: films.filter(f => ['black-panther', 'sorry-to-bother-you', 'space-is-the-place'].includes(f.id)),
    keyPoints: [
      'Black speculative imagination',
      'Technology and African diaspora',
      'Alternative futures and histories',
      'Critique of Western progress narratives'
    ],
    historicalContext: 'Term coined by Mark Dery in 1993, building on earlier Black speculative traditions.',
    color: '#7C3AED'
  },
  {
    id: 'posthuman',
    name: 'Posthuman Theory',
    summary: 'Analysis of how technology challenges traditional concepts of humanity and identity.',
    description: 'Posthuman theory examines how technology and other factors challenge traditional concepts of humanity, identity, and the body. In film studies, it analyzes representations of cyborgs, artificial intelligence, and other boundary-crossing figures that question what it means to be human.',
    keyThinkers: ['Donna Haraway', 'N. Katherine Hayles', 'Rosi Braidotti', 'Karen Barad'],
    representativeFilms: films.filter(f => ['blade-runner', 'ghost-in-the-shell', 'ex-machina'].includes(f.id)),
    keyPoints: [
      'Challenge to human-centered thinking',
      'Technology and identity transformation',
      'Boundary crossing and hybridity',
      'New forms of embodiment'
    ],
    historicalContext: 'Emerged in the 1980s-90s, responding to developments in technology and biotechnology.',
    color: '#059669'
  },
  {
    id: 'realist',
    name: 'Realist Film Theory',
    summary: 'Emphasis on cinema\'s capacity to capture and reveal reality through photographic representation.',
    description: 'Realist film theory emphasizes cinema\'s unique capacity to capture and reveal reality through its photographic basis. It argues that cinema\'s primary function is to show rather than manipulate reality, favoring long takes, deep focus, and minimal editing over montage and obvious stylistic intervention.',
    keyThinkers: ['André Bazin', 'Siegfried Kracauer', 'Cesare Zavattini', 'Roberto Rossellini'],
    representativeFilms: films.filter(f => ['bicycle-thieves', 'tokyo-story', 'the-400-blows'].includes(f.id)),
    keyPoints: [
      'Cinema\'s photographic basis',
      'Revelation rather than manipulation of reality',
      'Long takes and deep focus',
      'Minimal stylistic intervention'
    ],
    historicalContext: 'Developed in the 1940s-50s, influenced by Italian Neorealism and French film criticism.',
    color: '#10B981'
  },
  {
    id: 'humanist',
    name: 'Humanist Film Theory',
    summary: 'Focus on universal human experiences and emotions that transcend cultural boundaries.',
    description: 'Humanist film theory focuses on universal human experiences, emotions, and values that are believed to transcend cultural and historical boundaries. It emphasizes cinema\'s capacity to reveal fundamental truths about human nature and to create empathy and understanding across different groups.',
    keyThinkers: ['André Bazin', 'Pauline Kael', 'Andrew Sarris', 'Stanley Cavell'],
    representativeFilms: films.filter(f => ['tokyo-story', 'bicycle-thieves', 'the-shawshank-redemption'].includes(f.id)),
    keyPoints: [
      'Universal human experiences',
      'Transcendence of cultural boundaries',
      'Empathy and understanding',
      'Fundamental human truths'
    ],
    historicalContext: 'Influenced by post-war humanism and liberal democratic values.',
    color: '#F59E0B'
  },
  {
    id: 'modernist',
    name: 'Modernist Film Theory',
    summary: 'Emphasis on formal innovation, self-reflexivity, and the challenge to traditional narrative.',
    description: 'Modernist film theory emphasizes formal innovation, experimentation, and self-reflexivity in cinema. It values films that challenge traditional narrative conventions, call attention to their own construction, and explore the specific properties of the cinematic medium.',
    keyThinkers: ['Jean-Luc Godard', 'Sergei Eisenstein', 'Dziga Vertov', 'Stan Brakhage'],
    representativeFilms: films.filter(f => ['breathless', 'man-with-a-movie-camera', '8-1/2'].includes(f.id)),
    keyPoints: [
      'Formal innovation and experimentation',
      'Self-reflexivity and meta-cinema',
      'Challenge to narrative conventions',
      'Exploration of medium specificity'
    ],
    historicalContext: 'Emerged in the early 20th century, influenced by modernist movements in other arts.',
    color: '#8B5CF6'
  },
  {
    id: 'montage',
    name: 'Montage Theory',
    summary: 'Analysis of editing as the primary means of creating meaning through the collision of images.',
    description: 'Montage theory, developed by Soviet filmmakers, emphasizes editing as the primary means of creating meaning in cinema. It analyzes how the juxtaposition and collision of images creates new meanings that don\'t exist in the individual shots themselves, particularly through dialectical montage.',
    keyThinkers: ['Sergei Eisenstein', 'Vsevolod Pudovkin', 'Dziga Vertov', 'Lev Kuleshov'],
    representativeFilms: films.filter(f => ['battleship-potemkin', 'october', 'man-with-a-movie-camera'].includes(f.id)),
    keyPoints: [
      'Editing as meaning creation',
      'Collision and juxtaposition of images',
      'Dialectical montage',
      'Intellectual and emotional effects'
    ],
    historicalContext: 'Developed in 1920s Soviet Union as part of revolutionary cinema practice.',
    color: '#DC2626'
  },
  {
    id: 'ecocriticism',
    name: 'Ecocritical Film Theory',
    summary: 'Analysis of how films represent nature, environment, and ecological relationships.',
    description: 'Ecocritical film theory examines how films represent nature, environment, and ecological relationships. It analyzes environmental themes, the representation of landscapes, and how cinema can promote or challenge ecological awareness. The theory considers both explicit environmental films and the ecological implications of all cinema.',
    keyThinkers: ['Lawrence Buell', 'Cheryll Glotfelty', 'Scott MacDonald', 'Adrian Ivakhiv'],
    representativeFilms: films.filter(f => ['wall-e', 'the-birds', 'soylent-green'].includes(f.id)),
    keyPoints: [
      'Representation of nature and environment',
      'Ecological consciousness in cinema',
      'Human-nature relationships',
      'Environmental activism through film'
    ],
    historicalContext: 'Emerged in the 1990s, building on literary ecocriticism and environmental movements.',
    color: '#059669'
  },
  {
    id: 'disability-studies',
    name: 'Disability Studies Film Theory',
    summary: 'Analysis of how films represent disability and challenge ableist assumptions.',
    description: 'Disability studies film theory examines how films represent disability and disabled people, analyzing both stereotypical representations and more complex portrayals. It challenges ableist assumptions in cinema and promotes understanding of disability as a form of human diversity rather than a medical problem.',
    keyThinkers: ['Rosemarie Garland-Thomson', 'Tobin Siebers', 'Lennard Davis', 'Carrie Sandahl'],
    representativeFilms: films.filter(f => ['freaks', 'my-left-foot', 'the-theory-of-everything'].includes(f.id)),
    keyPoints: [
      'Representation of disability',
      'Challenge to ableist assumptions',
      'Disability as human diversity',
      'Social model of disability'
    ],
    historicalContext: 'Emerged in the 1990s, building on disability rights movements and social model of disability.',
    color: '#7C3AED'
  },
  {
    id: 'age-studies',
    name: 'Age Studies Film Theory',
    summary: 'Analysis of how films represent aging and different life stages.',
    description: 'Age studies film theory examines how films represent aging, elderly people, and different life stages. It analyzes ageism in cinema, the stereotyping of older characters, and how films can challenge or reinforce age-based discrimination and assumptions.',
    keyThinkers: ['Margaret Morganroth Gullette', 'Kathleen Woodward', 'Leni Marshall', 'Aagje Swinnen'],
    representativeFilms: films.filter(f => ['sunset-boulevard', 'all-about-eve', 'driving-miss-daisy'].includes(f.id)),
    keyPoints: [
      'Representation of aging and elderly',
      'Ageism and stereotyping',
      'Intergenerational relationships',
      'Life course perspectives'
    ],
    historicalContext: 'Emerged in the 2000s, building on gerontology and age studies in other fields.',
    color: '#F59E0B'
  },
  {
    id: 'sound-studies',
    name: 'Sound Studies Film Theory',
    summary: 'Analysis of how sound contributes to cinematic meaning and emotional effect.',
    description: 'Sound studies film theory examines how sound - including dialogue, music, and sound effects - contributes to cinematic meaning and emotional effect. It analyzes the relationship between sound and image, the construction of acoustic space, and how sound shapes spectator experience.',
    keyThinkers: ['Michel Chion', 'Rick Altman', 'Claudia Gorbman', 'Anahid Kassabian'],
    representativeFilms: films.filter(f => ['apocalypse-now', 'a-quiet-place', 'singin-in-the-rain'].includes(f.id)),
    keyPoints: [
      'Sound-image relationships',
      'Acoustic space and atmosphere',
      'Music and emotional manipulation',
      'Sound design and meaning'
    ],
    historicalContext: 'Developed from the 1980s onward, as sound technology became more sophisticated.',
    color: '#8B5CF6'
  },
  {
    id: 'anime',
    name: 'Anime Theory',
    summary: 'Analysis of Japanese animation as a distinct cultural and aesthetic form.',
    description: 'Anime theory examines Japanese animation as a distinct cultural and aesthetic form with its own conventions, themes, and cultural significance. It analyzes anime\'s unique visual style, narrative structures, and cultural contexts, as well as its global circulation and fan cultures.',
    keyThinkers: ['Thomas Lamarre', 'Susan Napier', 'Marc Steinberg', 'Rayna Denison'],
    representativeFilms: films.filter(f => ['spirited-away', 'akira', 'ghost-in-the-shell'].includes(f.id)),
    keyPoints: [
      'Distinct Japanese aesthetic form',
      'Unique visual and narrative conventions',
      'Cultural specificity and global circulation',
      'Fan cultures and otaku identity'
    ],
    historicalContext: 'Emerged as academic field in the 1990s-2000s as anime gained global popularity.',
    color: '#EC4899'
  },
  {
    id: 'animation',
    name: 'Animation Theory',
    summary: 'Analysis of animation as a distinct medium with unique properties and techniques.',
    description: 'Animation theory examines animation as a distinct medium with unique properties that differentiate it from live-action cinema. It analyzes the frame-by-frame construction of movement, the relationship between reality and fantasy in animation, and animation\'s specific aesthetic and narrative possibilities.',
    keyThinkers: ['Sergei Eisenstein', 'Chuck Jones', 'Norman McLaren', 'Alan Cholodenko'],
    representativeFilms: films.filter(f => ['steamboat-willie', 'toy-story', 'spirited-away'].includes(f.id)),
    keyPoints: [
      'Frame-by-frame construction',
      'Unique aesthetic possibilities',
      'Reality and fantasy relationships',
      'Medium-specific properties'
    ],
    historicalContext: 'Developed alongside animation practice from the early 20th century onward.',
    color: '#F59E0B'
  },
  {
    id: 'television-studies',
    name: 'Television Studies Theory',
    summary: 'Analysis of television as a distinct medium with unique properties and cultural functions.',
    description: 'Television studies theory examines television as a distinct medium with unique properties that differentiate it from cinema. It analyzes television\'s flow, seriality, domestic viewing context, and its specific cultural and social functions in everyday life.',
    keyThinkers: ['Raymond Williams', 'John Ellis', 'Lynn Spigel', 'Jason Mittell'],
    representativeFilms: films.filter(f => ['network', 'the-truman-show', 'videodrome'].includes(f.id)),
    keyPoints: [
      'Television flow and programming',
      'Seriality and ongoing narratives',
      'Domestic viewing context',
      'Cultural and social functions'
    ],
    historicalContext: 'Emerged as distinct field in the 1970s-80s as television gained cultural legitimacy.',
    color: '#6366F1'
  },
  {
    id: 'phenomenological',
    name: 'Phenomenological Film Theory',
    summary: 'Analysis of the embodied, sensory experience of cinema and spectator consciousness.',
    description: 'Phenomenological film theory examines the embodied, sensory experience of cinema, focusing on how films engage spectators\' bodies and consciousness. It analyzes the pre-cognitive, experiential dimensions of film viewing and how cinema creates meaning through sensory and emotional engagement.',
    keyThinkers: ['Vivian Sobchack', 'Maurice Merleau-Ponty', 'Jennifer Barker', 'Laura Marks'],
    representativeFilms: films.filter(f => ['2001-a-space-odyssey', 'tree-of-life', 'enter-the-void'].includes(f.id)),
    keyPoints: [
      'Embodied spectatorship',
      'Sensory and pre-cognitive experience',
      'Consciousness and perception',
      'Body-cinema relationships'
    ],
    historicalContext: 'Applied to film studies from the 1990s onward, building on phenomenological philosophy.',
    color: '#10B981'
  },
  {
    id: 'media-archaeology',
    name: 'Media Archaeology',
    summary: 'Analysis of cinema within the broader history of media technologies and practices.',
    description: 'Media archaeology examines cinema within the broader history of media technologies and practices, analyzing how current media forms relate to past technologies and how technological change shapes cultural practices. It challenges linear narratives of media progress.',
    keyThinkers: ['Erkki Huhtamo', 'Jussi Parikka', 'Wenzel Chrostowski', 'Thomas Elsaesser'],
    representativeFilms: films.filter(f => ['man-with-a-movie-camera', 'hugo', 'the-artist'].includes(f.id)),
    keyPoints: [
      'Historical analysis of media technologies',
      'Non-linear media history',
      'Technological and cultural relationships',
      'Archaeological method in media studies'
    ],
    historicalContext: 'Emerged in the 1990s-2000s, influenced by Foucauldian archaeology and German media theory.',
    color: '#7C3AED'
  }
];