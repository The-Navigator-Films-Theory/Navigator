import type { VocabularyTerm } from '../../types';

export const vocabularyTerms: VocabularyTerm[] = [
  // FOUNDATIONAL TERMS
  {
    id: 'auteur',
    term: 'Auteur',
    pronunciation: 'oh-TUR',
    definition: 'A filmmaker whose personal influence and artistic control over a movie are so significant that they are regarded as the author of the movie.',
    etymology: 'From French "auteur" meaning "author"',
    categories: ['auteur-theory', 'film-criticism'],
    difficulty: 'beginner',
    relatedTerms: ['Mise-en-scène', 'Camera Stylo', 'Personal Vision'],
    relatedTheories: ['auteur'],
    usageExample: 'Alfred Hitchcock is considered an auteur because of his distinctive visual style and recurring themes across his films.',
    featured: true
  },
  {
    id: 'male-gaze',
    term: 'Male Gaze',
    definition: 'The way visual arts and literature depict women from a masculine, heterosexual perspective, presenting women as sexual objects for male pleasure.',
    etymology: 'Coined by Laura Mulvey in "Visual Pleasure and Narrative Cinema" (1975)',
    categories: ['feminist-theory', 'spectatorship'],
    difficulty: 'beginner',
    relatedTerms: ['Female Gaze', 'Scopophilia', 'Voyeurism'],
    relatedTheories: ['feminist', 'psychoanalytic'],
    usageExample: 'The male gaze is evident in how the camera lingers on the female character\'s body rather than her face during emotional scenes.',
    featured: true
  },
  {
    id: 'montage',
    term: 'Montage',
    pronunciation: 'mon-TAHZH',
    definition: 'The editing technique of combining separate shots to create new meaning through their juxtaposition.',
    etymology: 'From French "montage" meaning "assembly" or "editing"',
    categories: ['editing', 'formalist-theory'],
    difficulty: 'beginner',
    relatedTerms: ['Dialectical Montage', 'Kuleshov Effect', 'Juxtaposition'],
    relatedTheories: ['formalist', 'montage'],
    usageExample: 'Eisenstein\'s montage in "Battleship Potemkin" creates emotional impact through the collision of contrasting images.',
    featured: true
  },

  // PSYCHOANALYTIC TERMS
  {
    id: 'suture',
    term: 'Suture',
    pronunciation: 'SOO-chur',
    definition: 'The process by which the viewer is sewn into the film text, creating identification and narrative involvement.',
    etymology: 'From medical term meaning "to stitch together," applied to film by Jean-Pierre Oudart',
    categories: ['psychoanalytic-theory', 'spectatorship'],
    difficulty: 'intermediate',
    relatedTerms: ['Identification', 'Shot-Reverse-Shot', 'Interpellation'],
    relatedTheories: ['psychoanalytic', 'spectator'],
    usageExample: 'The shot-reverse-shot pattern creates suture by positioning the viewer within the conversation between characters.'
  },
  {
    id: 'scopophilia',
    term: 'Scopophilia',
    pronunciation: 'skoh-poh-FIL-ee-ah',
    definition: 'The pleasure derived from looking, particularly at other people as objects, central to psychoanalytic film theory.',
    etymology: 'From Greek "skopein" (to look) and "philia" (love), coined by Freud',
    categories: ['psychoanalytic-theory', 'spectatorship'],
    difficulty: 'advanced',
    relatedTerms: ['Voyeurism', 'Male Gaze', 'Visual Pleasure'],
    relatedTheories: ['psychoanalytic', 'feminist'],
    usageExample: 'Hitchcock\'s "Rear Window" explicitly explores scopophilia through its protagonist who watches his neighbors.'
  },
  {
    id: 'uncanny',
    term: 'Uncanny',
    pronunciation: 'un-KAN-ee',
    definition: 'Something familiar yet strange, creating psychological discomfort and fear, often used in horror films. Freud\'s concept describes the return of repressed material that was once familiar.',
    etymology: 'From German "unheimlich" (unhomely), theorized by Freud in 1919',
    categories: ['psychoanalytic-theory', 'horror-theory'],
    difficulty: 'intermediate',
    relatedTerms: ['Repression', 'Heimlich', 'Doppelganger', 'Abjection'],
    relatedTheories: ['psychoanalytic', 'horror'],
    usageExample: 'The uncanny effect in "The Shining" comes from the familiar hotel setting becoming increasingly strange and threatening.',
    featured: false
  },

  // APPARATUS AND TECHNOLOGY TERMS
  {
    id: 'apparatus',
    term: 'Cinematic Apparatus',
    definition: 'The entire technological, economic, and institutional system that produces and presents films to audiences.',
    etymology: 'From Latin "apparatus" meaning "equipment," theorized by Jean-Louis Baudry',
    categories: ['apparatus-theory', 'technology'],
    difficulty: 'intermediate',
    relatedTerms: ['Dispositif', 'Ideology', 'Projection'],
    relatedTheories: ['apparatus', 'marxist'],
    usageExample: 'The cinematic apparatus includes not just cameras and projectors, but also theaters, distribution networks, and viewing practices.'
  },
  {
    id: 'haptic-visuality',
    term: 'Haptic Visuality',
    pronunciation: 'HAP-tik viz-yoo-AL-ih-tee',
    definition: 'A way of seeing that emphasizes the tactile and embodied qualities of vision, where the eye functions like an organ of touch. This concept suggests that some images invite a bodily, sensuous engagement rather than purely optical viewing.',
    etymology: 'From Greek "haptikos" (able to touch), developed by Laura Marks in film theory',
    categories: ['phenomenological-theory', 'spectatorship', 'embodiment'],
    difficulty: 'advanced',
    relatedTerms: ['Embodied Spectatorship', 'Sensory Cinema', 'Tactile Vision', 'Phenomenology'],
    relatedTheories: ['phenomenological', 'spectator'],
    usageExample: 'Haptic visuality is evident in close-up shots of textures in films like "The Piano," where the camera invites viewers to feel the surfaces through sight.',
    featured: false
  },

  // NARRATIVE AND STRUCTURAL TERMS
  {
    id: 'narratology',
    term: 'Narratology',
    pronunciation: 'nar-ah-TOL-oh-jee',
    definition: 'The systematic study of narrative structure, examining how stories are constructed, organized, and function across different media. In film studies, it analyzes the formal properties of cinematic storytelling.',
    etymology: 'From Latin "narratio" (narration) and Greek "logos" (study), coined by Tzvetan Todorov in 1969',
    categories: ['narrative-theory', 'structuralist-theory'],
    difficulty: 'intermediate',
    relatedTerms: ['Fabula', 'Syuzhet', 'Focalization', 'Narrative Structure'],
    relatedTheories: ['structuralist', 'formalist'],
    usageExample: 'Narratology helps us understand how films like "Pulp Fiction" manipulate story order (syuzhet) while maintaining a coherent underlying plot (fabula).',
    featured: false
  },
  {
    id: 'binary-opposition',
    term: 'Binary Opposition',
    definition: 'A pair of related terms or concepts that are opposite in meaning, used to structure narrative and meaning in films.',
    etymology: 'From structuralist linguistics, particularly Claude Lévi-Strauss\'s anthropological work',
    categories: ['structuralist-theory', 'narrative'],
    difficulty: 'intermediate',
    relatedTerms: ['Paradigm', 'Syntagm', 'Structuralism'],
    relatedTheories: ['structuralist', 'formalist'],
    usageExample: 'Western films often use binary oppositions like civilization vs. wilderness, law vs. chaos.'
  },

  // GENRE TERMS
  {
    id: 'iconography',
    term: 'Iconography',
    pronunciation: 'eye-kon-OG-rah-fee',
    definition: 'The visual elements, symbols, and motifs that are characteristic of a particular film genre.',
    etymology: 'From Greek "eikon" (image) and "graphia" (writing)',
    categories: ['genre-theory', 'visual-analysis'],
    difficulty: 'beginner',
    relatedTerms: ['Genre Convention', 'Visual Motif', 'Symbolism'],
    relatedTheories: ['genre', 'formalist'],
    usageExample: 'Film noir iconography includes dark shadows, venetian blind lighting, and urban nighttime settings.'
  },
  {
    id: 'final-girl',
    term: 'Final Girl',
    definition: 'The last surviving female character in horror films who confronts and defeats the killer, often after witnessing the deaths of her friends.',
    etymology: 'Coined by Carol Clover in "Men, Women, and Chain Saws" (1992)',
    categories: ['horror-theory', 'feminist-theory'],
    difficulty: 'intermediate',
    relatedTerms: ['Slasher Film', 'Gender Dynamics', 'Survival Horror'],
    relatedTheories: ['horror', 'feminist'],
    usageExample: 'Laurie Strode in "Halloween" is the archetypal Final Girl who survives through resourcefulness and moral purity.'
  },

  // CULTURAL AND CRITICAL THEORY TERMS
  {
    id: 'hegemony',
    term: 'Hegemony',
    pronunciation: 'heh-JEM-oh-nee',
    definition: 'The dominance of one group over others, maintained through cultural means rather than force, often reflected in media representations.',
    etymology: 'From Greek "hegemonia" meaning "leadership," developed by Antonio Gramsci',
    categories: ['cultural-theory', 'marxist-theory'],
    difficulty: 'intermediate',
    relatedTerms: ['Ideology', 'Cultural Dominance', 'Consent'],
    relatedTheories: ['cultural', 'marxist'],
    usageExample: 'Hollywood\'s global dominance represents cultural hegemony, spreading American values worldwide through entertainment.'
  },
  {
    id: 'intersectionality',
    term: 'Intersectionality',
    definition: 'The interconnected nature of social categorizations such as race, class, and gender, creating overlapping systems of discrimination.',
    etymology: 'Coined by Kimberlé Crenshaw in 1989',
    categories: ['intersectional-theory', 'critical-theory'],
    difficulty: 'intermediate',
    relatedTerms: ['Matrix of Domination', 'Multiple Identities', 'Overlapping Oppressions'],
    relatedTheories: ['intersectional', 'feminist', 'critical-race'],
    usageExample: 'An intersectional analysis of "Moonlight" examines how the protagonist experiences both racism and homophobia simultaneously.'
  },

  // POSTMODERN TERMS
  {
    id: 'pastiche',
    term: 'Pastiche',
    pronunciation: 'pas-TEESH',
    definition: 'An artistic work that imitates the style of previous works, often mixing different styles without the satirical intent of parody.',
    etymology: 'From Italian "pasticcio" meaning "medley," theorized by Fredric Jameson',
    categories: ['postmodern-theory', 'intertextuality'],
    difficulty: 'intermediate',
    relatedTerms: ['Parody', 'Intertextuality', 'Simulation'],
    relatedTheories: ['postmodern', 'cultural'],
    usageExample: 'Quentin Tarantino\'s films are examples of pastiche, combining elements from various film genres and periods.'
  },
  {
    id: 'simulacra',
    term: 'Simulacra',
    pronunciation: 'sim-yuh-LAK-rah',
    definition: 'Copies or representations that have no original referent, creating a world of pure simulation.',
    etymology: 'From Latin "simulacrum" meaning "likeness," theorized by Jean Baudrillard',
    categories: ['postmodern-theory', 'media-theory'],
    difficulty: 'advanced',
    relatedTerms: ['Hyperreality', 'Simulation', 'Baudrillard'],
    relatedTheories: ['postmodern', 'media-convergence'],
    usageExample: 'The Matrix explores simulacra through its premise that perceived reality is actually a computer simulation.'
  },

  // SPECTATORSHIP TERMS
  {
    id: 'identification',
    term: 'Identification',
    definition: 'The psychological process by which viewers align themselves with characters or perspectives in a film.',
    etymology: 'From psychoanalytic theory, applied to cinema by Christian Metz and others',
    categories: ['spectatorship', 'psychoanalytic-theory'],
    difficulty: 'beginner',
    relatedTerms: ['Empathy', 'Point of View', 'Suture'],
    relatedTheories: ['spectator', 'psychoanalytic'],
    usageExample: 'First-person camera work in "Lady in the Lake" forces complete identification with the protagonist\'s perspective.'
  },
  {
    id: 'interpellation',
    term: 'Interpellation',
    pronunciation: 'in-ter-pel-AY-shun',
    definition: 'The process by which ideology addresses individuals as subjects, positioning them within particular viewing relationships.',
    etymology: 'From Louis Althusser\'s Marxist theory, applied to film by apparatus theorists',
    categories: ['apparatus-theory', 'marxist-theory'],
    difficulty: 'advanced',
    relatedTerms: ['Subject Position', 'Ideology', 'Hailing'],
    relatedTheories: ['apparatus', 'marxist'],
    usageExample: 'Classical Hollywood cinema interpellates viewers as unified subjects through seamless editing and narrative closure.'
  },

  // SOUND AND MEDIA TERMS
  {
    id: 'acousmatic-sound',
    term: 'Acousmatic Sound',
    pronunciation: 'ah-koos-MAT-ik',
    definition: 'Sound that is heard without its source being visible, creating mystery and tension.',
    etymology: 'From Greek "akousmatikos," developed by Pierre Schaeffer and Michel Chion',
    categories: ['sound-studies', 'audio-theory'],
    difficulty: 'intermediate',
    relatedTerms: ['Diegetic Sound', 'Sound Design', 'Audio Perspective'],
    relatedTheories: ['sound-studies', 'apparatus'],
    usageExample: 'The shark in "Jaws" is often represented through acousmatic sound before being visually revealed.'
  },
  {
    id: 'diegetic-sound',
    term: 'Diegetic Sound',
    pronunciation: 'die-eh-JET-ik',
    definition: 'Sound that exists within the fictional world of the film and can be heard by the characters.',
    etymology: 'From Greek "diegesis" meaning "narration"',
    categories: ['sound-studies', 'narrative'],
    difficulty: 'beginner',
    relatedTerms: ['Non-diegetic Sound', 'Sound Bridge', 'Audio Perspective'],
    relatedTheories: ['sound-studies', 'formalist'],
    usageExample: 'The radio playing in a character\'s car is diegetic sound because it exists in the film\'s world.'
  },

  // ANIMATION TERMS
  {
    id: 'cel-animation',
    term: 'Cel Animation',
    definition: 'Traditional animation technique using transparent sheets (cels) painted with characters and objects.',
    etymology: 'From "celluloid," the material originally used for animation cels',
    categories: ['animation-theory', 'technique'],
    difficulty: 'beginner',
    relatedTerms: ['Frame-by-frame', 'Traditional Animation', 'Hand-drawn'],
    relatedTheories: ['animation', 'apparatus'],
    usageExample: 'Disney\'s "Snow White" was created using cel animation, with each frame hand-painted on celluloid sheets.'
  },
  {
    id: 'rotoscoping',
    term: 'Rotoscoping',
    definition: 'Animation technique where animators trace over live-action film footage frame by frame.',
    etymology: 'Named after the Rotoscope device invented by Max Fleischer in 1915',
    categories: ['animation-theory', 'technique'],
    difficulty: 'intermediate',
    relatedTerms: ['Motion Capture', 'Live-action Reference', 'Tracing'],
    relatedTheories: ['animation', 'apparatus'],
    usageExample: 'Richard Linklater used rotoscoping in "A Scanner Darkly" to create a distinctive animated look over live-action footage.'
  },

  // TELEVISION AND DIGITAL MEDIA TERMS
  {
    id: 'flow',
    term: 'Flow',
    definition: 'Raymond Williams\' concept of television as continuous stream rather than discrete programs.',
    etymology: 'Coined by Raymond Williams in "Television: Technology and Cultural Form" (1974)',
    categories: ['television-studies', 'media-theory'],
    difficulty: 'intermediate',
    relatedTerms: ['Programming', 'Seriality', 'Broadcast'],
    relatedTheories: ['television-studies', 'cultural'],
    usageExample: 'Television flow includes not just programs but commercials, promos, and transitions that create continuous viewing.'
  },
  {
    id: 'transmedia-storytelling',
    term: 'Transmedia Storytelling',
    definition: 'A narrative technique where a single story or experience is told across multiple platforms and formats.',
    etymology: 'Coined by Henry Jenkins in "Convergence Culture" (2006)',
    categories: ['media-convergence', 'narrative'],
    difficulty: 'intermediate',
    relatedTerms: ['Cross-platform', 'Franchise', 'Media Convergence'],
    relatedTheories: ['media-convergence', 'fandom'],
    usageExample: 'The Marvel Cinematic Universe uses transmedia storytelling across films, TV shows, comics, and games.'
  },

  // CRITICAL RACE AND POSTCOLONIAL TERMS
  {
    id: 'orientalism',
    term: 'Orientalism',
    definition: 'The Western representation of Eastern cultures as exotic, backward, and inferior, often perpetuated through cinema.',
    etymology: 'Theorized by Edward Said in "Orientalism" (1978)',
    categories: ['postcolonial-theory', 'representation'],
    difficulty: 'intermediate',
    relatedTerms: ['Othering', 'Exoticism', 'Cultural Imperialism'],
    relatedTheories: ['postcolonial', 'critical-race'],
    usageExample: 'Early Hollywood films often employed orientalist imagery to depict Middle Eastern and Asian cultures as mysterious and threatening.'
  },
  {
    id: 'double-consciousness',
    term: 'Double Consciousness',
    definition: 'W.E.B. Du Bois\' concept of seeing oneself through the eyes of a hostile other.',
    etymology: 'Coined by W.E.B. Du Bois in "The Souls of Black Folk" (1903)',
    categories: ['critical-race-theory', 'identity'],
    difficulty: 'intermediate',
    relatedTerms: ['Racial Identity', 'Self-perception', 'Othering'],
    relatedTheories: ['critical-race', 'cultural'],
    usageExample: 'Films like "Get Out" explore double consciousness through characters navigating predominantly white spaces.'
  },

  // QUEER THEORY TERMS
  {
    id: 'heteronormativity',
    term: 'Heteronormativity',
    definition: 'The assumption that heterosexuality is the normal or preferred sexual orientation, often reinforced through media representation.',
    etymology: 'Coined by Michael Warner in 1991',
    categories: ['queer-theory', 'sexuality'],
    difficulty: 'intermediate',
    relatedTerms: ['Heterosexual Matrix', 'Normative', 'Sexual Identity'],
    relatedTheories: ['queer', 'feminist'],
    usageExample: 'Romantic comedies typically reinforce heteronormativity by presenting heterosexual romance as the universal ideal.'
  },
  {
    id: 'camp',
    term: 'Camp',
    definition: 'An aesthetic style characterized by exaggeration, theatricality, and ironic appreciation of popular culture.',
    etymology: 'Popularized by Susan Sontag in "Notes on Camp" (1964)',
    categories: ['queer-theory', 'aesthetics'],
    difficulty: 'intermediate',
    relatedTerms: ['Kitsch', 'Irony', 'Performance'],
    relatedTheories: ['queer', 'cultural'],
    usageExample: 'John Waters\' films exemplify camp through their deliberately excessive and theatrical style.'
  },

  // DISABILITY AND AGE STUDIES TERMS
  {
    id: 'ableism',
    term: 'Ableism',
    definition: 'Discrimination and social prejudice against people with disabilities based on the belief that typical abilities are superior.',
    etymology: 'Coined in the 1980s by disability rights activists',
    categories: ['disability-studies', 'discrimination'],
    difficulty: 'beginner',
    relatedTerms: ['Disability', 'Accessibility', 'Social Model'],
    relatedTheories: ['disability-studies', 'intersectional'],
    usageExample: 'Ableism in cinema often manifests through the absence of disabled characters or their portrayal as inspirational objects.'
  },
  {
    id: 'ageism',
    term: 'Ageism',
    definition: 'Stereotyping, prejudice, and discrimination against people on the basis of their age.',
    etymology: 'Coined by Robert Neil Butler in 1969',
    categories: ['age-studies', 'discrimination'],
    difficulty: 'beginner',
    relatedTerms: ['Age Discrimination', 'Stereotyping', 'Generational'],
    relatedTheories: ['age-studies', 'cultural'],
    usageExample: 'Ageism in Hollywood is evident in the limited and stereotypical roles offered to older actors, especially women.'
  },

  // ECOCRITICISM TERMS
  {
    id: 'anthropocene',
    term: 'Anthropocene',
    pronunciation: 'AN-throh-poh-seen',
    definition: 'The current geological age characterized by significant human impact on Earth\'s climate and ecosystems.',
    etymology: 'From Greek "anthropos" (human) and "kainos" (new), coined by Paul Crutzen in 2000',
    categories: ['ecocriticism', 'environmental'],
    difficulty: 'intermediate',
    relatedTerms: ['Climate Change', 'Environmental Impact', 'Geological Age'],
    relatedTheories: ['ecocriticism', 'posthuman'],
    usageExample: 'Films like "The Day After Tomorrow" depict the catastrophic effects of the Anthropocene on global climate.'
  },
  {
    id: 'ecocide',
    term: 'Ecocide',
    pronunciation: 'EE-koh-side',
    definition: 'The destruction of the natural environment by deliberate or negligent human action.',
    etymology: 'From Greek "oikos" (house/environment) and Latin "caedere" (to kill)',
    categories: ['ecocriticism', 'environmental'],
    difficulty: 'intermediate',
    relatedTerms: ['Environmental Destruction', 'Ecological Disaster', 'Anthropocene'],
    relatedTheories: ['ecocriticism', 'cultural'],
    usageExample: 'Documentary films about deforestation often frame industrial logging as a form of ecocide.'
  },

  // ADDITIONAL FOUNDATIONAL TERMS
  {
    id: 'mise-en-scene',
    term: 'Mise-en-scène',
    pronunciation: 'meez-ahn-SEN',
    definition: 'Everything placed in front of the camera to be photographed, including sets, props, lighting, costumes, and actor movement.',
    etymology: 'From French theater, meaning "placing on stage"',
    categories: ['film-technique', 'auteur-theory'],
    difficulty: 'beginner',
    relatedTerms: ['Cinematography', 'Production Design', 'Visual Style'],
    relatedTheories: ['auteur', 'formalist'],
    usageExample: 'Wes Anderson\'s distinctive mise-en-scène includes symmetrical compositions and carefully chosen color palettes.'
  },
  {
    id: 'deep-focus',
    term: 'Deep Focus',
    definition: 'A cinematographic technique that keeps all elements in the frame in sharp focus, allowing viewers to choose what to look at.',
    etymology: 'Developed and theorized by André Bazin in relation to realist cinema',
    categories: ['cinematography', 'realist-theory'],
    difficulty: 'intermediate',
    relatedTerms: ['Depth of Field', 'Composition', 'Realism'],
    relatedTheories: ['realist', 'formalist'],
    usageExample: 'Orson Welles used deep focus extensively in "Citizen Kane" to create complex visual compositions.'
  },
  {
    id: 'kuleshov-effect',
    term: 'Kuleshov Effect',
    definition: 'The phenomenon where viewers derive meaning from the sequence of shots rather than individual shots themselves.',
    etymology: 'Named after Soviet filmmaker Lev Kuleshov who demonstrated the effect in the 1910s',
    categories: ['editing', 'formalist-theory'],
    difficulty: 'intermediate',
    relatedTerms: ['Montage', 'Juxtaposition', 'Editing'],
    relatedTheories: ['formalist', 'cognitive'],
    usageExample: 'The Kuleshov Effect shows how the same shot of an actor\'s face can convey different emotions depending on what shot follows it.'
  }
];