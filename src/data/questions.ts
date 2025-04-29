export interface Question {
  id: number;
  productName: string;
  imageUrl: string;
  category: 'origine' | 'saisonnalité' | 'distribution';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

export const questions: Question[] = [
  // Combinaison: facile + origine (10 questions)
  {
    id: 1,
    productName: 'Fraises',
    imageUrl: 'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg',
    category: 'origine',
    question: 'Ces fraises en hiver sont-elles probablement locales ou importées ?',
    options: ['Locales', 'Importées'],
    correctAnswer: 'Importées',
    explanation: 'Les fraises sont généralement hors saison en hiver dans la plupart des régions. Les fraises d\'hiver sont généralement importées de climats plus chauds.',
    difficulty: 'facile'
  },
  {
    id: 2,
    productName: 'Pommes',
    imageUrl: 'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg',
    category: 'origine',
    question: 'Ces pommes en automne sont très probablement :',
    options: ['Locales', 'Importées'],
    correctAnswer: 'Locales',
    explanation: 'L\'automne est la saison des pommes dans la plupart des régions tempérées, ce qui rend les pommes locales abondantes et fraîches à cette période.',
    difficulty: 'facile'
  },
  {
    id: 3,
    productName: 'Bananes',
    imageUrl: 'https://images.pexels.com/photos/1166648/pexels-photo-1166648.jpeg',
    category: 'origine',
    question: 'En Amérique du Nord et en Europe, les bananes sont généralement :',
    options: ['Locales', 'Importées'],
    correctAnswer: 'Importées',
    explanation: 'Les bananes nécessitent des climats tropicaux pour pousser, elles sont donc importées vers des régions plus froides depuis des pays près de l\'équateur.',
    difficulty: 'facile'
  },
  {
    id: 4,
    productName: 'Oranges',
    imageUrl: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg',
    category: 'origine',
    question: 'Les oranges en hiver en Europe sont généralement :',
    options: ['Locales', 'Importées d\'Espagne', 'Importées d\'Afrique du Sud', 'Importées des USA'],
    correctAnswer: 'Importées d\'Espagne',
    explanation: 'L\'Espagne est le principal fournisseur d\'oranges pour l\'Europe en hiver, avec une production locale dans les régions méditerranéennes.',
    difficulty: 'facile'
  },
  {
    id: 5,
    productName: 'Kiwi',
    imageUrl: 'https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg',
    category: 'origine',
    question: 'Les kiwis vendus en France en été proviennent principalement :',
    options: ['De France', 'De Nouvelle-Zélande', 'D\'Italie', 'De Chine'],
    correctAnswer: 'De Nouvelle-Zélande',
    explanation: 'En été européen (hiver en NZ), la majorité des kiwis viennent de Nouvelle-Zélande, premier exportateur mondial.',
    difficulty: 'facile'
  },
  {
    id: 6,
    productName: 'Carottes',
    imageUrl: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',
    category: 'origine',
    question: 'Les carottes en hiver sont généralement :',
    options: ['Importées', 'Locales (de conservation)', 'Des deux', 'Aucune de ces réponses'],
    correctAnswer: 'Locales (de conservation)',
    explanation: 'Les carottes se conservent bien en chambre froide et sont souvent disponibles localement même en hiver.',
    difficulty: 'facile'
  },
  {
    id: 7, //
    productName: 'Raisin',
    imageUrl: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg',
    category: 'origine',
    question: 'Du raisin en janvier en France provient généralement :',
    options: ['De France', 'D\'Espagne', 'Du Chili', 'D\'Afrique du Sud'],
    correctAnswer: 'Du Chili',
    explanation: 'En hiver, le raisin consommé en Europe provient principalement de l\'hémisphère sud, notamment du Chili.',
    difficulty: 'facile'
  },
  {
    id: 8,
    productName: 'Courgettes',
    imageUrl: 'https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg',
    category: 'origine',
    question: 'Des courgettes en décembre en France sont :',
    options: ['De saison locale', 'Importées', 'De serre locale', 'Soit importées soit de serre'],
    correctAnswer: 'Soit importées soit de serre',
    explanation: 'Les courgettes ne poussent pas en hiver, elles sont donc soit importées de pays chauds, soit cultivées sous serre chauffée.',
    difficulty: 'facile'
  },
  {
    id: 9,
    productName: 'Poivrons',
    imageUrl: 'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg',
    category: 'origine',
    question: 'Des poivrons rouges en hiver sont généralement :',
    options: ['Locaux', 'Importés', 'De serre', 'Toutes ces réponses'],
    correctAnswer: 'Importés',
    explanation: 'La majorité des poivrons consommés en hiver dans les pays tempérés sont importés de pays comme l\'Espagne ou le Maroc.',
    difficulty: 'facile'
  },
  {
    id: 10, //  
    productName: 'Myrtilles',
    imageUrl: 'https://images.pexels.com/photos/2539170/pexels-photo-2539170.jpeg',
    category: 'origine',
    question: 'Des myrtilles en hiver proviennent :',
    options: ['De production locale', 'D\'importation', 'De congélation', 'De serre'],
    correctAnswer: 'D\'importation',
    explanation: 'Les myrtilles fraîches en hiver sont presque toujours importées de l\'hémisphère sud (Chili, Argentine).',
    difficulty: 'facile'
  },

  // Combinaison: facile + saisonnalité (10 questions)
  {
    id: 11,
    productName: 'Tomates',
    imageUrl: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
    category: 'saisonnalité',
    question: 'Quelle est la saison naturelle de croissance des tomates ?',
    options: ['Hiver', 'Printemps', 'Été', 'Toute l\'année'],
    correctAnswer: 'Été',
    explanation: 'Les tomates poussent naturellement pendant les mois d\'été lorsque les températures sont chaudes. Les tomates hors saison sont généralement cultivées en serre ou importées.',
    difficulty: 'facile'
  },
  {
    id: 12,
    productName: 'Asperges',
    imageUrl: 'https://images.pexels.com/photos/351679/pexels-photo-351679.jpeg',
    category: 'saisonnalité',
    question: 'Quelle est la haute saison pour les asperges fraîches ?',
    options: ['Hiver', 'Printemps', 'Été', 'Automne'],
    correctAnswer: 'Printemps',
    explanation: 'Les asperges ont une courte saison de croissance, culminant généralement au printemps. Les asperges hors saison sont généralement importées de l\'hémisphère opposé.',
    difficulty: 'facile'
  },
  {
    id: 13, //
    productName: 'Citrouilles',
    imageUrl: 'https://images.pexels.com/photos/673073/pexels-photo-673073.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison des citrouilles ?',
    options: ['Été', 'Automne', 'Printemps', 'Hiver'],
    correctAnswer: 'Automne',
    explanation: 'Les citrouilles sont récoltées en automne et sont associées aux récoltes d\'automne et à Halloween.',
    difficulty: 'facile'
  },
  {
    id: 14,
    productName: 'Cerises',
    imageUrl: 'https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison des cerises en France ?',
    options: ['Printemps', 'Début d\'été', 'Automne', 'Hiver'],
    correctAnswer: 'Début d\'été',
    explanation: 'La saison des cerises en France s\'étend généralement de mai à juillet selon les variétés et les régions.',
    difficulty: 'facile'
  },
  {
    id: 15, //
    productName: 'Courges',
    imageUrl: 'https://images.pexels.com/photos/4187618/pexels-photo-4187618.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison des courges ?',
    options: ['Printemps', 'Été', 'Automne', 'Hiver'],
    correctAnswer: 'Automne',
    explanation: 'Les courges sont des légumes d\'automne, récoltés en septembre-octobre et qui se conservent tout l\'hiver.',
    difficulty: 'facile'
  },
  {
    id: 16, //
    productName: 'Radis',
    imageUrl: 'https://images.pexels.com/photos/775207/pexels-photo-775207.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison des radis en France ?',
    options: ['Hiver', 'Printemps', 'Été', 'Automne'],
    correctAnswer: 'Printemps',
    explanation: 'Les radis sont parmi les premiers légumes du printemps, avec une saison qui commence dès mars-avril.',
    difficulty: 'facile'
  },
  {
    id: 17, //
    productName: 'Pêches',
    imageUrl: 'https://images.pexels.com/photos/10026608/pexels-photo-10026608.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison des pêches ?',
    options: ['Printemps', 'Début d\'été', 'Mi-été', 'Automne'],
    correctAnswer: 'Mi-été',
    explanation: 'La saison des pêches s\'étend généralement de juin à septembre selon les variétés et les régions.',
    difficulty: 'facile'
  },
  {
    id: 18,
    productName: 'Épinards',
    imageUrl: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la meilleure saison pour les épinards ?',
    options: ['Printemps et automne', 'Été', 'Hiver', 'Toute l\'année'],
    correctAnswer: 'Printemps et automne',
    explanation: 'Les épinards préfèrent les températures fraîches et sont donc meilleurs au printemps et à l\'automne.',
    difficulty: 'facile'
  },
  {
    id: 19, //
    productName: 'Framboises',
    imageUrl: 'https://images.pexels.com/photos/52536/raspberry-fruits-fresh-red-52536.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison des framboises ?',
    options: ['Printemps', 'Été', 'Automne', 'Été et automne pour les remontantes'],
    correctAnswer: 'Été et automne pour les remontantes',
    explanation: 'Les framboisiers non remontants donnent en été, tandis que les variétés remontantes produisent de l\'été à l\'automne.',
    difficulty: 'facile'
  },
  {
    id: 20, //
    productName: 'Chou-fleur',
    imageUrl: 'https://images.pexels.com/photos/1227806/pexels-photo-1227806.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison du chou-fleur ?',
    options: ['Printemps', 'Été', 'Automne', 'Toute l\'année selon les variétés'],
    correctAnswer: 'Toute l\'année selon les variétés',
    explanation: 'Il existe des variétés de chou-fleur pour chaque saison, permettant une production presque toute l\'année.',
    difficulty: 'facile'
  },

  // Combinaison: facile + distribution (10 questions)
  {
    id: 21, //
    productName: 'Miel',
    imageUrl: 'https://images.pexels.com/photos/302163/pexels-photo-302163.jpeg',
    category: 'distribution',
    question: 'Quel circuit de distribution a la plus faible empreinte carbone pour le miel ?',
    options: ['Marché de producteurs', 'Supermarché', 'Boutique en ligne', 'Grossiste'],
    correctAnswer: 'Marché de producteurs',
    explanation: 'Les marchés de producteurs locaux ont généralement la plus faible empreinte carbone car ils impliquent un transport minimal et moins d\'intermédiaires.',
    difficulty: 'facile'
  },
  {
    id: 22,
    productName: 'Légumes',
    imageUrl: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg',
    category: 'distribution',
    question: 'Quelle option est généralement la plus durable pour acheter des légumes ?',
    options: ['Drive de supermarché', 'AMAP', 'Livraison à domicile', 'Épicerie de quartier'],
    correctAnswer: 'AMAP',
    explanation: 'Les AMAP (Associations pour le Maintien d\'une Agriculture Paysanne) créent un lien direct entre producteurs et consommateurs, réduisant les intermédiaires et les transports.',
    difficulty: 'facile'
  },
  {
    id: 23,
    productName: 'Fromage',
    imageUrl: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg',
    category: 'distribution',
    question: 'Où acheter du fromage avec la meilleure traçabilité ?',
    options: ['Grande surface', 'Fromagerie spécialisée', 'Marché local', 'En ligne'],
    correctAnswer: 'Fromagerie spécialisée',
    explanation: 'Les fromageries spécialisées ont généralement une meilleure connaissance de la provenance et des méthodes de production des fromages qu\'elles vendent.',
    difficulty: 'facile'
  },
  {
    id: 24,
    productName: 'Pain',
    imageUrl: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    category: 'distribution',
    question: 'Quelle option a le plus faible impact environnemental pour acheter du pain ?',
    options: ['Boulangerie industrielle', 'Boulangerie artisanale locale', 'Pain surgelé en supermarché', 'Livraison de pain'],
    correctAnswer: 'Boulangerie artisanale locale',
    explanation: 'Une boulangerie artisanale locale utilise souvent des ingrédients locaux et nécessite moins de transport que les options industrielles.',
    difficulty: 'facile'
  },
  {
    id: 25,
    productName: 'Œufs',
    imageUrl: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    category: 'distribution',
    question: 'Où acheter des œufs avec la meilleure traçabilité ?',
    options: ['Supermarché', 'Magasin bio', 'Producteur local', 'Drive fermier'],
    correctAnswer: 'Producteur local',
    explanation: 'Acheter directement au producteur permet de connaître exactement les conditions d\'élevage des poules.',
    difficulty: 'facile'
  },
  {
    id: 26,
    productName: 'Viande',
    imageUrl: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg',
    category: 'distribution',
    question: 'Quel circuit est préférable pour une viande plus durable ?',
    options: ['Boucherie industrielle', 'Boucherie artisanale', 'Vente directe à la ferme', 'Grande distribution'],
    correctAnswer: 'Vente directe à la ferme',
    explanation: 'La vente directe à la ferme réduit les intermédiaires et permet de connaître l\'origine et les conditions d\'élevage des animaux.',
    difficulty: 'facile'
  },
  {
    id: 27, //
    productName: 'Poisson',
    imageUrl: 'https://images.pexels.com/photos/8963384/pexels-photo-8963384.jpeg',
    category: 'distribution',
    question: 'Où acheter du poisson le plus frais et local ?',
    options: ['Poissonnerie de supermarché', 'Poissonnerie artisanale', 'Marché aux poissons', 'Criée locale'],
    correctAnswer: 'Criée locale',
    explanation: 'Les criées locales reçoivent le poisson directement des bateaux de pêche locaux, garantissant fraîcheur et provenance locale.',
    difficulty: 'facile'
  },
  {
    id: 28,
    productName: 'Fruits',
    imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
    category: 'distribution',
    question: 'Quel est le meilleur endroit pour acheter des fruits de saison locaux ?',
    options: ['Supermarché', 'Drive fermier', 'Marché de producteurs', 'Magasin bio'],
    correctAnswer: 'Marché de producteurs',
    explanation: 'Les marchés de producteurs garantissent des fruits locaux et de saison, souvent cueillis à maturité.',
    difficulty: 'facile'
  },
  {
    id: 29,
    productName: 'Lait',
    imageUrl: 'https://images.pexels.com/photos/221083/pexels-photo-221083.jpeg',
    category: 'distribution',
    question: 'Quelle option est la plus durable pour acheter du lait ?',
    options: ['Lait UHT en supermarché', 'Lait cru en vente directe', 'Lait en poudre', 'Lait végétal'],
    correctAnswer: 'Lait cru en vente directe',
    explanation: 'Le lait cru vendu directement par le producteur évite les traitements intensifs et les longs transports.',
    difficulty: 'facile'
  },
  {
    id: 30,
    productName: 'Pommes de terre',
    imageUrl: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg',
    category: 'distribution',
    question: 'Où acheter des pommes de terre avec le moins d\'emballage ?',
    options: ['En vrac au marché', 'En sac au supermarché', 'En filet bio', 'Livrées à domicile'],
    correctAnswer: 'En vrac au marché',
    explanation: 'Les marchés permettent souvent d\'acheter en vrac avec ses propres contenants, évitant tout emballage inutile.',
    difficulty: 'facile'
  },

  // Combinaison: moyen + origine (10 questions)
  {
    id: 31,
    productName: 'Avocats',
    imageUrl: 'https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg',
    category: 'origine',
    question: 'D\'où proviennent la plupart des avocats consommés en Europe ?',
    options: ['Espagne', 'Pérou', 'Kenya', 'Tous ces pays'],
    correctAnswer: 'Tous ces pays',
    explanation: 'Les avocats européens proviennent de divers pays selon la saison : Espagne (été), Pérou et Kenya (hiver).',
    difficulty: 'moyen'
  },
  {
    id: 32,
    productName: 'Café',
    imageUrl: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    category: 'origine',
    question: 'Le café consommé en France provient principalement :',
    options: ['D\'Amérique du Sud', 'D\'Afrique', 'D\'Asie', 'Des trois continents'],
    correctAnswer: 'Des trois continents',
    explanation: 'La France importe du café de multiples origines : Brésil (Amérique), Éthiopie (Afrique), Vietnam (Asie) selon les mélanges.',
    difficulty: 'moyen'
  },
  {
    id: 33, //
    productName: 'Chocolat',
    imageUrl: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg',
    category: 'origine',
    question: 'D\'où provient le cacao utilisé dans le chocolat français ?',
    options: ['Exclusivement d\'Afrique', 'Principalement d\'Afrique de l\'Ouest', 'D\'Amérique du Sud', 'D\'Asie'],
    correctAnswer: 'Principalement d\'Afrique de l\'Ouest',
    explanation: 'Environ 70% du cacao utilisé en France vient d\'Afrique de l\'Ouest (Côte d\'Ivoire, Ghana), le reste d\'Amérique latine.',
    difficulty: 'moyen'
  },
  {
    id: 34, //
    productName: 'Riz',
    imageUrl: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg',
    category: 'origine',
    question: 'Le riz consommé en France provient principalement :',
    options: ['De Camargue', 'D\'Italie', 'D\'Asie', 'Des trois origines'],
    correctAnswer: 'Des trois origines',
    explanation: 'La France consomme du riz de Camargue (20%), d\'Italie (risotto) et d\'Asie (basmati, thaï) selon les types.',
    difficulty: 'moyen'
  },
  {
    id: 35,
    productName: 'Thé',
    imageUrl: 'https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg',
    category: 'origine',
    question: 'D\'où provient la majorité du thé consommé en France ?',
    options: ['Chine', 'Inde', 'Kenya', 'Sri Lanka'],
    correctAnswer: 'Chine',
    explanation: 'La Chine est le premier fournisseur de thé pour la France (thés verts notamment), devant l\'Inde (Darjeeling) et le Kenya (thés noirs).',
    difficulty: 'moyen'
  },
  {
    id: 36,
    productName: 'Saumon',
    imageUrl: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg',
    category: 'origine',
    question: 'Le saumon frais en France provient principalement :',
    options: ['De Norvège', 'D\'Écosse', 'D\'Irlande', 'Des trois pays'],
    correctAnswer: 'Des trois pays',
    explanation: 'Le saumon d\'élevage consommé en France vient principalement de Norvège (60%), mais aussi d\'Écosse et d\'Irlande.',
    difficulty: 'moyen'
  },
  {
    id: 37,
    productName: 'Mangues',
    imageUrl: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg',
    category: 'origine',
    question: 'En hiver, les mangues en France proviennent principalement :',
    options: ['Du Brésil', 'Du Pérou', 'D\'Afrique', 'D\'Inde'],
    correctAnswer: 'Du Pérou',
    explanation: 'En hiver européen, la majorité des mangues importées viennent du Pérou, premier exportateur vers l\'Europe.',
    difficulty: 'moyen'
  },
  {
    id: 38,
    productName: 'Amandes',
    imageUrl: 'https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg',
    category: 'origine',
    question: 'Les amandes consommées en France proviennent principalement :',
    options: ['De Californie', 'D\'Espagne', 'D\'Italie', 'De France'],
    correctAnswer: 'De Californie',
    explanation: '80% des amandes mondiales viennent de Californie. La France importe aussi d\'Espagne mais en moindre quantité.',
    difficulty: 'moyen'
  },
  {
    id: 39,
    productName: 'Noix de cajou',
    imageUrl: 'https://images.pexels.com/photos/4202955/pexels-photo-4202955.jpeg',
    category: 'origine',
    question: 'La plupart des noix de cajou sont cultivées en :',
    options: ['Afrique de l\'Ouest', 'Asie du Sud-Est', 'Amérique du Sud', 'Inde'],
    correctAnswer: 'Afrique de l\'Ouest',
    explanation: 'La Côte d\'Ivoire et le Vietnam sont les principaux producteurs de noix de cajou, mais elles sont souvent transformées en Inde.',
    difficulty: 'moyen'
  },
  {
    id: 40,
    productName: 'Ananas',
    imageUrl: 'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg',
    category: 'origine',
    question: 'Les ananas vendus en France proviennent principalement :',
    options: ['De Côte d\'Ivoire', 'Du Costa Rica', 'De Martinique', 'Du Cameroun'],
    correctAnswer: 'Du Costa Rica',
    explanation: 'Le Costa Rica est le premier exportateur mondial d\'ananas, fournissant la majorité du marché européen.',
    difficulty: 'moyen'
  },

  // Combinaison: moyen + saisonnalité (10 questions)
  {
    id: 41,
    productName: 'Pommes de terre',
    imageUrl: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg',
    category: 'saisonnalité',
    question: 'Les pommes de terre sont généralement récoltées en quelle saison ?',
    options: ['Printemps', 'Été', 'Automne', 'Hiver'],
    correctAnswer: 'Automne',
    explanation: 'Bien que certaines variétés précoces soient récoltées en été, la principale récolte de pommes de terre a lieu en automne et peut être stockée tout l\'hiver.',
    difficulty: 'moyen'
  },
  {
    id: 42,
    productName: 'Poireaux',
    imageUrl: 'https://images.pexels.com/photos/4198000/pexels-photo-4198000.jpeg',
    category: 'saisonnalité',
    question: 'Quelle est la meilleure saison pour les poireaux ?',
    options: ['Été', 'Automne-hiver', 'Printemps', 'Toute l\'année'],
    correctAnswer: 'Automne-hiver',
    explanation: 'Les poireaux sont des légumes d\'automne et d\'hiver par excellence, avec des variétés adaptées à chaque période froide.',
    difficulty: 'moyen'
  },
  {
    id: 43, //
    productName: 'Artichauts',
    imageUrl: 'https://images.pexels.com/photos/3647046/pexels-photo-3647046.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison des artichauts en France ?',
    options: ['Printemps', 'Début d\'été', 'Automne', 'Printemps et début d\'été'],
    correctAnswer: 'Printemps et début d\'été',
    explanation: 'La saison des artichauts s\'étend d\'avril à juillet selon les variétés (camus de Bretagne, violet de Provence).',
    difficulty: 'moyen'
  },
  {
    id: 44, //
    productName: 'Figues',
    imageUrl: 'https://images.pexels.com/photos/33791/fig-sliced-plate-wooden-table.jpg',
    category: 'saisonnalité',
    question: 'Quelle est la saison des figues fraîches ?',
    options: ['Début d\'été', 'Fin d\'été/début automne', 'Printemps', 'Hiver'],
    correctAnswer: 'Fin d\'été/début automne',
    explanation: 'Les figues arrivent à maturité entre août et octobre selon les variétés et les régions.',
    difficulty: 'moyen'
  },
  {
    id: 45, //
    productName: 'Champignons de Paris',
    imageUrl: 'https://images.pexels.com/photos/36438/mushrooms-brown-mushrooms-cook-eat.jpg',
    category: 'saisonnalité',
    question: 'Quelle est la saison des champignons de Paris ?',
    options: ['Printemps', 'Été', 'Automne', 'Toute l\'année (culture en cave)'],
    correctAnswer: 'Toute l\'année (culture en cave)',
    explanation: 'Les champignons de Paris sont cultivés en cave sous contrôle climatique et sont donc disponibles toute l\'année.',
    difficulty: 'moyen'
  },
  {
    id: 46, //
    productName: 'Noix',
    imageUrl: 'https://images.pexels.com/photos/3640631/pexels-photo-3640631.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison des noix fraîches ?',
    options: ['Été', 'Automne', 'Hiver', 'Printemps'],
    correctAnswer: 'Automne',
    explanation: 'Les noix sont récoltées en septembre-octobre et peuvent être consommées fraîches à cette période ou sèches ensuite.',
    difficulty: 'moyen'
  },
  {
    id: 47, //
    productName: 'Endives',
    imageUrl: 'https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg',
    category: 'saisonnalité',
    question: 'Quelle est la saison des endives ?',
    options: ['Printemps', 'Été', 'Automne', 'Hiver'],
    correctAnswer: 'Hiver',
    explanation: 'L\'endive est un légume d\'hiver, produit par forçage des racines de chicorée de septembre à mars.',
    difficulty: 'moyen'
  },
  {
    id: 48,
    productName: 'Prunes',
    imageUrl: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison des prunes en France ?',
    options: ['Début d\'été', 'Mi-été', 'Fin d\'été/début automne', 'Printemps'],
    correctAnswer: 'Mi-été',
    explanation: 'La saison des prunes s\'étend généralement de juillet à septembre selon les variétés (Mirabelle, Reine-Claude, Quetsche).',
    difficulty: 'moyen'
  },
  {
    id: 49, //
    productName: 'Brocolis',
    imageUrl: 'https://images.pexels.com/photos/53821/pexels-photo-53821.jpeg',
    category: 'saisonnalité',
    question: 'Quelle est la meilleure saison pour le brocoli ?',
    options: ['Printemps', 'Été', 'Automne', 'Printemps et automne'],
    correctAnswer: 'Printemps et automne',
    explanation: 'Le brocoli préfère les températures fraîches et est donc meilleur au printemps et à l\'automne.',
    difficulty: 'moyen'
  },
  {
    id: 50, //
    productName: 'Châtaignes',
    imageUrl: 'https://images.pexels.com/photos/1448673/pexels-photo-1448673.jpeg',
    category: 'saisonnalité',
    question: 'Quand est la saison des châtaignes ?',
    options: ['Été', 'Automne', 'Hiver', 'Printemps'],
    correctAnswer: 'Automne',
    explanation: 'Les châtaignes sont récoltées d\'octobre à novembre et sont associées aux mois d\'automne.',
    difficulty: 'moyen'
  },

  // Combinaison: moyen + distribution (10 questions)
  {
    id: 51,
    productName: 'Carottes',
    imageUrl: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',
    category: 'distribution',
    question: 'Quel circuit est préférable pour réduire l\'empreinte carbone des légumes ?',
    options: ['Livraison à domicile', 'Drive supermarché', 'AMAP locale', 'Épicerie bio'],
    correctAnswer: 'AMAP locale',
    explanation: 'Les AMAP réduisent les intermédiaires et les distances de transport, avec souvent des paniers de saison directement du producteur au consommateur.',
    difficulty: 'moyen'
  },
  {
    id: 52, //
    productName: 'Poisson',
    imageUrl: 'https://images.pexels.com/photos/8963384/pexels-photo-8963384.jpeg',
    category: 'distribution',
    question: 'Quel label garantit une pêche durable en grande surface ?',
    options: ['MSC', 'AB', 'AOP', 'Label Rouge'],
    correctAnswer: 'MSC',
    explanation: 'Le label MSC (Marine Stewardship Council) certifie les produits de la pêche durable, même en grande distribution.',
    difficulty: 'moyen'
  },
  {
    id: 53,
    productName: 'Fromage AOP',
    imageUrl: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg',
    category: 'distribution',
    question: 'Où l\'achat d\'un fromage AOP a-t-il le plus d\'impact positif ?',
    options: ['Fromagerie spécialisée', 'Rayon fromager de supermarché', 'Vente directe à la ferme', 'Marché local'],
    correctAnswer: 'Vente directe à la ferme',
    explanation: 'Acheter en direct à la ferme soutient pleinement le producteur et garantit la fraîcheur, tout en réduisant les intermédiaires.',
    difficulty: 'moyen'
  },
  {
    id: 54,
    productName: 'Café',
    imageUrl: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    category: 'distribution',
    question: 'Quel mode d\'achat est le plus éthique pour le café ?',
    options: ['Capsules grande marque', 'Café équitable en vrac', 'Café discount', 'Café de torréfacteur local'],
    correctAnswer: 'Café équitable en vrac',
    explanation: 'Le café équitable garantit un prix juste aux producteurs, et le vrac réduit les déchets d\'emballage.',
    difficulty: 'moyen'
  },
  {
    id: 55,
    productName: 'Fruits exotiques',
    imageUrl: 'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg',
    category: 'distribution',
    question: 'Comment réduire l\'impact des fruits exotiques ?',
    options: ['Privilégier le transport maritime', 'Acheter bio', 'Choisir des produits surgelés', 'Éviter les promotions'],
    correctAnswer: 'Privilégier le transport maritime',
    explanation: 'Le transport par bateau a une empreinte carbone 50 fois moindre que le transport aérien pour les fruits exotiques.',
    difficulty: 'moyen'
  },
  {
    id: 56,
    productName: 'Pain',
    imageUrl: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    category: 'distribution',
    question: 'Quelle option a le meilleur rapport qualité/empreinte écologique ?',
    options: ['Pain industriel emballé', 'Pain de boulangerie artisanale', 'Pain maison', 'Pain bio en grande surface'],
    correctAnswer: 'Pain de boulangerie artisanale',
    explanation: 'Le pain artisanal local utilise souvent des ingrédients régionaux et évite les additifs, avec un circuit court.',
    difficulty: 'moyen'
  },
  {
    id: 57,
    productName: 'Œufs',
    imageUrl: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    category: 'distribution',
    question: 'Quel code sur les œufs indique la meilleure conditions d\'élevage ?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '0',
    explanation: 'Le code 0 correspond à des œufs bio, avec les normes de bien-être animal les plus strictes.',
    difficulty: 'moyen'
  },
  {
    id: 58, //
    productName: 'Légumes secs',
    imageUrl: 'https://images.pexels.com/photos/5336711/pexels-photo-5336711.jpeg',
    category: 'distribution',
    question: 'Quel conditionnement est le plus durable pour les lentilles ?',
    options: ['Brique carton', 'Sachet plastique', 'Vrac', 'Boîte métal'],
    correctAnswer: 'Vrac',
    explanation: 'Le vrac permet de n\'acheter que la quantité nécessaire et génère zéro déchet d\'emballage.',
    difficulty: 'moyen'
  },
  {
    id: 59, //
    productName: 'Chocolat',
    imageUrl: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg',
    category: 'distribution',
    question: 'Quel label garantit un cacao éthique ?',
    options: ['Fairtrade', 'AB', 'Rainforest Alliance', 'Tous ces labels'],
    correctAnswer: 'Tous ces labels',
    explanation: 'Ces trois certifications imposent des critères sociaux et environnementaux pour la production de cacao.',
    difficulty: 'moyen'
  },
  {
    id: 60,
    productName: 'Lait',
    imageUrl: 'https://images.pexels.com/photos/221083/pexels-photo-221083.jpeg',
    category: 'distribution',
    question: 'Quelle option a la plus faible empreinte carbone ?',
    options: ['Lait UHT en brique', 'Lait cru en vrac', 'Lait végétal', 'Lait frais en bouteille'],
    correctAnswer: 'Lait cru en vrac',
    explanation: 'Le lait cru vendu en vrac directement à la ferme évite tout traitement énergivore et emballage.',
    difficulty: 'moyen'
  },

  // Combinaison: difficile + origine (10 questions)
  {
    id: 61, //
    productName: 'Quinoa',
    imageUrl: 'https://images.pexels.com/photos/1306548/pexels-photo-1306548.jpeg',
    category: 'origine',
    question: 'D\'où provient le quinoa "durable" ayant le moins d\'impact social négatif ?',
    options: ['Pérou', 'Bolivie', 'France', 'États-Unis'],
    correctAnswer: 'France',
    explanation: 'Le quinoa français évite les problèmes de surproduction qui ont affecté les pays andins, tout en réduisant les distances de transport.',
    difficulty: 'difficile'
  },
  {
    id: 62,
    productName: 'Vanille',
    imageUrl: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg',
    category: 'origine',
    question: 'La vanille de quel pays a l\'empreinte sociale la plus positive ?',
    options: ['Madagascar', 'Mexique', 'Réunion', 'Comores'],
    correctAnswer: 'Réunion',
    explanation: 'La vanille Bourbon de La Réunion bénéficie d\'un label français avec des normes sociales et environnementales strictes.',
    difficulty: 'difficile'
  },
  {
    id: 63,
    productName: 'Crevettes',
    imageUrl: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
    category: 'origine',
    question: 'Quelle origine éviter pour les crevettes à cause de la déforestation ?',
    options: ['Madagascar', 'Vietnam', 'Équateur', 'Thaïlande'],
    correctAnswer: 'Thaïlande',
    explanation: 'L\'élevage de crevettes en Thaïlande est associé à la destruction de mangroves, cruciales pour le climat.',
    difficulty: 'difficile'
  },
  {
    id: 64,
    productName: 'Amandes',
    imageUrl: 'https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg',
    category: 'origine',
    question: 'Pourquoi les amandes californiennes posent-elles problème ?',
    options: ['Pesticides', 'Consommation d\'eau', 'Conditions de travail', 'Tous ces aspects'],
    correctAnswer: 'Tous ces aspects',
    explanation: 'La Californie utilise 80% des ressources mondiales en amandes, avec des impacts hydriques et sociaux majeurs.',
    difficulty: 'difficile'
  },
  {
    id: 65, //
    productName: 'Huile de palme',
    imageUrl: 'https://images.pexels.com/photos/21852240/pexels-photo-21852240/free-photo-of-nature-clairiere-terrain-fleurs.jpeg',
    category: 'origine',
    question: 'Quel pays produit de l\'huile de palme "durable" certifiée ?',
    options: ['Indonésie', 'Malaisie', 'Colombie', 'Les trois'],
    correctAnswer: 'Les trois',
    explanation: 'La certification RSPO existe dans ces pays, bien que controversée quant à son efficacité réelle.',
    difficulty: 'difficile'
  },
  {
    id: 66,
    productName: 'Café',
    imageUrl: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    category: 'origine',
    question: 'Quelle région produit du café "bird-friendly" ?',
    options: ['Éthiopie', 'Colombie', 'Amérique centrale', 'Toutes ces régions'],
    correctAnswer: 'Toutes ces régions',
    explanation: 'Certains cafés d\'ombre préservent les écosystèmes aviaires dans toutes ces zones de production.',
    difficulty: 'difficile'
  },
  {
    id: 67,
    productName: 'Cacao',
    imageUrl: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
    category: 'origine',
    question: 'Quel pays a le plus fort taux de travail des enfants dans le cacao ?',
    options: ['Côte d\'Ivoire', 'Ghana', 'Nigeria', 'Cameroun'],
    correctAnswer: 'Côte d\'Ivoire',
    explanation: '60% du cacao ivoirien serait produit avec du travail infantile selon les ONG.',
    difficulty: 'difficile'
  },
  {
    id: 68, //
    productName: 'Avocats',
    imageUrl: 'https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg',
    category: 'origine',
    question: 'La production d\'avocats au Chili impacte particulièrement :',
    options: ['Les nappes phréatiques', 'Les forêts', 'Les travailleurs migrants', 'Tous ces aspects'],
    correctAnswer: 'Tous ces aspects',
    explanation: 'La "fièvre verte" au Chili entraîne stress hydrique, déforestation et exploitation des saisonniers.',
    difficulty: 'difficile'
  },
  {
    id: 69,
    productName: 'Bananes',
    imageUrl: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg',
    category: 'origine',
    question: 'Quelle origine de bananes a le pire impact environnemental ?',
    options: ['Guadeloupe', 'Cameroun', 'Costa Rica', 'Équateur'],
    correctAnswer: 'Costa Rica',
    explanation: 'Les monocultures intensives au Costa Rica utilisent 30kg de pesticides/hectare/an, contaminant les sols.',
    difficulty: 'difficile'
  },
  {
    id: 70, 
    productName: 'Riz',
    imageUrl: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg',
    category: 'origine',
    question: 'Le riz de Camargue est préférable car :',
    options: ['Sans arsenic', 'Moins d\'eau', 'Sans travail forcé', 'Tous ces avantages'],
    correctAnswer: 'Tous ces avantages',
    explanation: 'Comparé au riz asiatique, le riz camarguais évite l\'arsenic naturel, utilise l\'eau raisonnablement et respecte le droit du travail français.',
    difficulty: 'difficile'
  },

  // Combinaison: difficile + saisonnalité (10 questions)

  {
    id: 71,
    productName: 'Tomates',
    imageUrl: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
    category: 'saisonnalité',
    question: 'Quelle est l\'empreinte carbone des tomates françaises sous serre chauffée en hiver ?',
    options: ['Équivalente aux tomates espagnoles', '2x plus élevée', '5x plus élevée', '10x plus élevée'],
    correctAnswer: '5x plus élevée',
    explanation: 'Le chauffage des serres en hiver consomme énormément d\'énergie, rendant ces tomates très polluantes.',
    difficulty: 'difficile'
  },
  {
    id: 72,
    productName: 'Fraises',
    imageUrl: 'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg',
    category: 'saisonnalité',
    question: 'Quand exactement se termine la saison française des fraises de plein champ ?',
    options: ['Juin', 'Juillet', 'Août', 'Septembre'],
    correctAnswer: 'Juillet',
    explanation: 'La vraie saison des fraises locales s\'étend de mai à juillet, les autres périodes impliquent des cultures sous abris ou importations.',
    difficulty: 'difficile'
  },
  {
    id: 73,
    productName: 'Asperges',
    imageUrl: 'https://images.pexels.com/photos/351679/pexels-photo-351679.jpeg',
    category: 'saisonnalité',
    question: 'Pourquoi ne pas acheter des asperges en automne ?',
    options: ['Elles viennent du Pérou', 'Sont cultivées sous serre', 'Sont surgelées puis décongelées', 'Proviennent de stocks irradiés'],
    correctAnswer: 'Elles viennent du Pérou',
    explanation: 'Les asperges d\'automne sont importées de l\'hémisphère sud, avec un transport aérien très polluant.',
    difficulty: 'difficile'
  },
  {
    id: 74, //
    productName: 'Haricots verts',
    imageUrl: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg',
    category: 'saisonnalité',
    question: 'Quelle est la saison naturelle des haricots verts en France ?',
    options: ['Mai à juillet', 'Juin à septembre', 'Juillet à octobre', 'Toute l\'année'],
    correctAnswer: 'Juin à septembre',
    explanation: 'Les haricots verts poussent naturellement en été. Hors saison, ils sont importés du Kenya ou du Maroc par avion.',
    difficulty: 'difficile'
  },
  {
    id: 75, //
    productName: 'Poires',
    imageUrl: 'https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg',
    category: 'saisonnalité',
    question: 'Comment sont conservées les poires d\'hiver ?',
    options: ['Congélation', 'Atmosphère contrôlée', 'Irradiation', 'Cire alimentaire'],
    correctAnswer: 'Atmosphère contrôlée',
    explanation: 'Les poires d\'hiver sont stockées en chambres froides avec atmosphère appauvrie en oxygène pour ralentir le mûrissement.',
    difficulty: 'difficile'
  },
  {
    id: 76, //
    productName: 'Raisin',
    imageUrl: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg',
    category: 'saisonnalité',
    question: 'Quelle est la saison exacte du raisin français de table ?',
    options: ['Juillet à septembre', 'Août à octobre', 'Septembre à novembre', 'Mai à juillet'],
    correctAnswer: 'Août à octobre',
    explanation: 'Le raisin de table arrive à maturité entre août et octobre selon les variétés (Chasselas, Muscat).',
    difficulty: 'difficile'
  },
  {
    id: 77,
    productName: 'Agrumes',
    imageUrl: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg',
    category: 'saisonnalité',
    question: 'Quand exactement est la saison des clémentines corses ?',
    options: ['Octobre à décembre', 'Novembre à janvier', 'Décembre à février', 'Septembre à novembre'],
    correctAnswer: 'Novembre à janvier',
    explanation: 'Les clémentines corses, une IGP, sont récoltées de novembre à janvier uniquement.',
    difficulty: 'difficile'
  },
  {
    id: 78, //
    productName: 'Salade',
    imageUrl: 'https://images.pexels.com/photos/31782675/pexels-photo-31782675.jpeg',
    category: 'saisonnalité',
    question: 'Pourquoi éviter la laitue en été ?',
    options: ['Elle monte en graine', 'Vient de serres climatisées', 'Est traitée aux nitrates', 'Tous ces facteurs'],
    correctAnswer: 'Tous ces facteurs',
    explanation: 'La laitue d\'été a souvent des qualités inférieures et nécessite des conditions de culture énergivores.',
    difficulty: 'difficile'
  },
  {
    id: 79, //
    productName: 'Courges',
    imageUrl: 'https://images.pexels.com/photos/4187618/pexels-photo-4187618.jpeg',
    category: 'saisonnalité',
    question: 'Jusqu\'à quand peut-on consommer des courges locales ?',
    options: ['Décembre', 'Mars', 'Juin', 'Septembre'],
    correctAnswer: 'Mars',
    explanation: 'Bien que récoltées en automne, les courges se conservent naturellement jusqu\'au printemps dans de bonnes conditions.',
    difficulty: 'difficile'
  },
  {
    id: 80,
    productName: 'Mâche',
    imageUrl: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg',
    category: 'saisonnalité',
    question: 'Quelle est la vraie saison de la mâche sauvage ?',
    options: ['Été', 'Automne', 'Hiver', 'Printemps'],
    correctAnswer: 'Hiver',
    explanation: 'La mâche est une salade d\'hiver par excellence, résistante au froid et récoltée de novembre à mars.',
    difficulty: 'difficile'
  },

  // Combinaison : difficile + distribution (10 questions)

  {
    id: 81,
    productName: 'Saumon',
    imageUrl: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg',
    category: 'distribution',
    question: 'Quel circuit évite le plus le gaspillage pour le poisson frais ?',
    options: ['Criée en direct', 'Supermarché', 'Poissonnerie traditionnelle', 'Livraison sous vide'],
    correctAnswer: 'Criée en direct',
    explanation: 'Les criées vendent le poisson du jour sans stockage intermédiaire, réduisant les pertes et la chaîne du froid.',
    difficulty: 'difficile'
  },
  {
    id: 82,
    productName: 'Viande',
    imageUrl: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg',
    category: 'distribution',
    question: 'Quel mode d\'achat réduit le plus l\'impact carbone de la viande ?',
    options: ['Achat d\'un demi-bœuf', 'Colis chez le boucher', 'Viande sous vide en grande surface', 'Abattage à la ferme'],
    correctAnswer: 'Achat d\'un demi-bœuf',
    explanation: 'Acheter une grande quantité directement à l\'éleveur optimise les transports et réduit les emballages.',
    difficulty: 'difficile'
  },
  {
    id: 83,
    productName: 'Fromage',
    imageUrl: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg',
    category: 'distribution',
    question: 'Pourquoi les fromages en grande surface ont-ils une plus faible qualité ?',
    options: ['Stockage prolongé', 'Suremballage', 'Traitement UV', 'Tous ces facteurs'],
    correctAnswer: 'Tous ces facteurs',
    explanation: 'Les grandes surfaces imposent des DLC longues (donc traitements), des emballages individuels et une exposition lumineuse néfaste.',
    difficulty: 'difficile'
  },
  {
    id: 84,
    productName: 'Fruits exotiques',
    imageUrl: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg',
    category: 'distribution',
    question: 'Comment identifier un fruit importé par avion ?',
    options: ['Code PLU à 4 chiffres', 'Mention "transport aérien"', 'Prix très élevé', 'Aucun moyen fiable'],
    correctAnswer: 'Mention "transport aérien"',
    explanation: 'La réglementation impose d\'indiquer "transport aérien" pour ces produits très polluants.',
    difficulty: 'difficile'
  },
  {
    id: 85,
    productName: 'Pain',
    imageUrl: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    category: 'distribution',
    question: 'Quel pain a le pire bilan carbone ?',
    options: ['Pain industriel emballé', 'Baguette de supermarché', 'Pain bio livré', 'Pain surgelé à cuire'],
    correctAnswer: 'Pain bio livré',
    explanation: 'Les livraisons individuelles de pain en camionnette ont une empreinte carbone supérieure aux circuits classiques.',
    difficulty: 'difficile'
  },
  {
    id: 86,
    productName: 'Légumes',
    imageUrl: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg',
    category: 'distribution',
    question: 'Quel système réduit le plus le gaspillage alimentaire ?',
    options: ['Vente en vrac', 'Circuits courts', 'Paniers "imperfections"', 'Tous ces systèmes'],
    correctAnswer: 'Tous ces systèmes',
    explanation: 'Ces trois modes évitent respectivement les emballages, les pertes en transport et le rejet des légumes "moches".',
    difficulty: 'difficile'
  },
  {
    id: 87,
    productName: 'Œufs',
    imageUrl: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    category: 'distribution',
    question: 'Pourquoi les œufs en grande surface sont-ils moins frais ?',
    options: ['DLC prolongée', 'Stockage à température variable', 'Transport lent', 'Tous ces facteurs'],
    correctAnswer: 'Tous ces facteurs',
    explanation: 'La grande distribution allonge artificiellement les DLC et a des chaînes logistiques complexes.',
    difficulty: 'difficile'
  },
  {
    id: 88,
    productName: 'Bières',
    imageUrl: 'https://images.pexels.com/photos/1267700/pexels-photo-1267700.jpeg',
    category: 'distribution',
    question: 'Quel conditionnement a la meilleure empreinte écologique ?',
    options: ['Bouteille verre consignée', 'Canette aluminium', 'Bouteille PET', 'Fût inox'],
    correctAnswer: 'Fût inox',
    explanation: 'Les fûts réutilisables en inox ont une durée de vie de 30 ans et nécessitent peu de transport.',
    difficulty: 'difficile'
  },
  {
    id: 89,
    productName: 'Eau minérale',
    imageUrl: 'https://images.pexels.com/photos/66090/pexels-photo-66090.jpeg',
    category: 'distribution',
    question: 'Quelle eau a le pire impact environnemental ?',
    options: ['Eau locale en bouteille verre', 'Eau importée en plastique', 'Eau gazeuse en canette', 'Eau déminéralisée'],
    correctAnswer: 'Eau importée en plastique',
    explanation: 'Le transport longue distance combiné au plastique à usage unique crée un désastre écologique.',
    difficulty: 'difficile'
  },
  {
    id: 90, //
    productName: 'Chocolat',
    imageUrl: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg',
    category: 'distribution',
    question: 'Quel chocolat équitable a aussi un bon bilan carbone ?',
    options: ['Chocolat 100% Pérou', 'Chocolat UE à base de fèves africaines', 'Chocolat local de planteur', 'Chocolat industriel'],
    correctAnswer: 'Chocolat UE à base de fèves africaines',
    explanation: 'Transformer les fèves en Europe (proche des consommateurs) tout en achetant équitable aux producteurs africains est le meilleur compromis.',
    difficulty: 'difficile'
  }
];