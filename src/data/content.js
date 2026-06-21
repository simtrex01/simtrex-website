// ============================================================
// FICHIER DE DONNÉES — MODIFIEZ CE FICHIER POUR METTRE À JOUR
// LE CONTENU DU SITE SANS TOUCHER AUX COMPOSANTS
// ============================================================

// -----------------------------------------------------------
// INFORMATIONS DE L'ENTREPRISE
// -----------------------------------------------------------
export const companyInfo = {
  name: "Simtrex inc",
  // Tagline affiché dans le logo et le héro
  tagline: "Excavation • Transport • Génie civil",
  // Années clés
  annéeFondation: 2012,
  annéeIncorporation: 2014,
  description:
    "Simtrex inc accompagne les clients résidentiels, commerciaux, municipaux et entrepreneurs dans leurs projets d'excavation, de transport et de travaux de génie civil.",
  phone: "418-617-9467",
  phoneHref: "tel:4186179467",
  email: "simtrex01@hotmail.com",
  contact: "Michael Simard",
  region: "La Malbaie, Charlevoix",
  // Adresse complète
  adresse: {
    rue: "2505 boulevard de Comporté",
    ville: "La Malbaie",
    province: "QC",
    codePostal: "G5A 1N5",
    googleMaps: "https://maps.google.com/?q=2505+boulevard+de+Comporté,+La+Malbaie,+QC,+G5A+1N5",
  },
  // Licence RBQ — Régie du bâtiment du Québec
  rbq: "5717-1738-01",
  // Réseaux sociaux — remplacez par le vrai lien de votre page Facebook
  reseauxSociaux: {
    facebook: "https://www.facebook.com/INSCRIRE-ICI-VOTRE-PAGE-SIMTREX",
  },
  // Zones desservies — modifiez ici
  zonesDesservies: [
    "Charlevoix-Côte-de-Beaupré",
    "Côte-Nord",
  ],
};

// -----------------------------------------------------------
// SERVICES — Ajoutez / modifiez les services ici
// ancre: null        → bouton "Voir ce service" pointe vers #contact
// ancre: "mon-id"   → pointe vers la section détaillée
// -----------------------------------------------------------
export const services = [
  {
    id: 1,
    title: "Excavation générale",
    description:
      "Excavation de fondations, déblaiement et remblayage pour tous types de projets résidentiels, commerciaux et municipaux.",
    icon: "🏗️",
    ancre: null,
    image: "/images/deblai-172/deblai-172-4-simtrex.jpg",
    details: [
      "Excavation de fondations",
      "Déblaiement et remblayage",
      "Préparation de site",
      "Tranchées et fouilles",
    ],
  },
  {
    id: 2,
    title: "Terrassement",
    description:
      "Mise en forme du terrain, nivellement et préparation de surface pour construction, aménagement ou drainage.",
    icon: "🌿",
    ancre: null,
    image: "/images/talus-loisirs/talus-loisirs-12-simtrex.jpg",
    details: [
      "Nivellement de terrain",
      "Mise en forme et pente",
      "Préparation avant construction",
      "Aménagement de surface",
    ],
  },
  {
    id: 3,
    title: "Travaux Municipaux",
    description:
      "Réfection de rues, infrastructures urbaines et travaux publics réalisés dans le respect des devis municipaux et des délais.",
    icon: "🏙️",
    ancre: null,
    image: "/images/developpement-clermont/clermont-phase2-1-simtrex.jpg",
    details: [
      "Réfection de chaussées",
      "Infrastructures urbaines",
      "Gestion de chantier",
      "Conformité aux devis municipaux",
    ],
  },
  {
    id: 4,
    title: "Égout & Aqueduc",
    description:
      "Installation, remplacement et réparation de conduites d'égout et d'aqueduc selon les normes municipales en vigueur.",
    icon: "🔧",
    ancre: null,
    image: "/images/developpement-clermont/clermont-phase2-2-simtrex.jpg",
    details: [
      "Installation de conduites",
      "Remplacement de réseaux vétustes",
      "Branchements résidentiels",
      "Travaux d'urgence",
    ],
  },
  {
    id: 5,
    title: "Routes, Canalisations & Ponceaux",
    description:
      "Construction et entretien de routes, installation de canalisations et de ponceaux pour la gestion des eaux de surface.",
    icon: "🛣️",
    ancre: null,
    image: "/images/routes-ponceaux-route138-simtrex.jpg",
    details: [
      "Construction de routes",
      "Installation de ponceaux",
      "Canalisations de surface",
      "Entretien d'accès et chemins",
    ],
  },
  {
    id: 6,
    title: "Drainage",
    description:
      "Conception et installation de systèmes de drainage pour protéger les infrastructures et prévenir les problèmes d'eau.",
    icon: "💧",
    ancre: null,
    image: "/images/ponceaux-138/ponceaux138-excavation-drainage-simtrex.jpg",
    details: [
      "Drainage de terrain",
      "Fossés et canaux",
      "Drainage de fondation",
      "Gestion des eaux pluviales",
    ],
  },
  {
    id: 7,
    title: "Transport de Matériaux",
    description:
      "Transport efficace de matériaux de construction, de roc, de terre, de gravier et de tout autre matériau de chantier.",
    icon: "🚛",
    ancre: "transport-materiaux",
    image: "/images/transport-materiaux-ponceaux-simtrex.jpg",
    details: [
      "Transport de roc et gravier",
      "Livraison de matériaux en vrac",
      "Camions 10 roues",
      "Ponceaux et pièces de chantier",
    ],
  },
  {
    id: 8,
    title: "Transport par Fardier",
    description:
      "Transport de machinerie lourde et d'équipements surdimensionnés par fardier sur l'ensemble du territoire québécois.",
    icon: "🚚",
    ancre: "transport-materiaux",
    image: "/images/transport-fardier-hors-dimension-simtrex.jpg",
    details: [
      "Transport de machinerie lourde",
      "Équipements surdimensionnés",
      "Couverture régionale et provinciale",
      "Service fiable et sécuritaire",
    ],
  },
  {
    id: 9,
    title: "Préparation de Fondation Granulaire",
    description:
      "Préparation et compactage de fondations granulaires pour garantir la durabilité de vos infrastructures et chaussées.",
    icon: "⚙️",
    ancre: null,
    image: "/images/developpement-clermont/clermont-phase2-7-simtrex.jpg",
    details: [
      "Matériaux granulaires certifiés",
      "Compactage contrôlé",
      "Préparation de sous-fondations",
      "Contrôle de la qualité",
    ],
  },
  {
    id: 13,
    title: "Fosses Septiques & Champs d'Épuration",
    description:
      "Installation complète de fosses septiques et de champs d'épuration Enviro-Septic certifié, pour les projets résidentiels et commerciaux.",
    icon: "🌱",
    ancre: "fosses-septiques",
    image: "/images/septique/septique-fosse-installee-simtrex.jpg",
    details: [
      "Systèmes Enviro-Septic certifiés",
      "Fosses septiques résidentielles et commerciales",
      "Champs d'épuration conformes",
      "Installation clé en main",
    ],
  },
  {
    id: 14,
    title: "Fondations de Maison",
    description:
      "Excavation, coffrage et bétonnage de fondations résidentielles complètes, réalisés avec précision en toute saison, même en plein hiver.",
    icon: "🧱",
    ancre: "fondations-maison",
    image: "/images/fondation-maison/fondation-maison-3-simtrex.jpg",
    details: [
      "Excavation de l'emplacement",
      "Coffrage professionnel",
      "Bétonnage et coulée des semelles et murs",
      "Travaux réalisés à l'année",
    ],
  },
  {
    id: 12,
    title: "Déneigement Commercial & Routier",
    description:
      "Service de déneigement pour stationnements commerciaux, accès privés et chemins ruraux dans la région de Charlevoix.",
    icon: "❄️",
    ancre: null,
    image: "/images/deneigement-routier-mtq-simtrex.jpg",
    details: [
      "Déneigement de stationnements",
      "Chemins et accès privés",
      "Routes et chemins ruraux",
      "Service fiable en saison hivernale",
    ],
  },
];

// -----------------------------------------------------------
// RÉALISATIONS — Ajoutez vos projets ici
// image: null       → affiche un placeholder
// image: "/images/photo.jpg" → affiche votre photo
// -----------------------------------------------------------
export const realisations = [
  {
    id: 21,
    titre: "Fondations de maison — Excavation, coffrage et bétonnage",
    categorie: "Génie civil & Environnement",
    description: "Réalisation de fondations résidentielles complètes : excavation de l'emplacement, coffrage et bétonnage des semelles et des murs. Des travaux exécutés avec précision en toute saison, même en plein hiver.",
    image: "/images/fondation-maison/fondation-maison-3-simtrex.jpg",
    imageContain: true,
    annee: "Spécialité",
    ancre: "fondations-maison",
    alt: "Fondation de maison coffrée et bétonnée par Simtrex inc en hiver dans Charlevoix",
  },
  {
    id: 20,
    titre: "Déboisement des Hautes-Gorges — Hydro-Québec",
    categorie: "Génie civil & Environnement",
    description: "Déboisement initial d'une nouvelle emprise de ligne électrique pour Hydro-Québec, dans le secteur des Hautes-Gorges (Charlevoix), afin d'amener le courant jusqu'aux installations de la Sépaq. Projet d'envergure réalisé en 2018 (1 M$).",
    image: "/images/deboisement-hautes-gorges/hautes-gorges-8-simtrex.jpg",
    annee: "2018",
    ancre: "deboisement-hautes-gorges",
    alt: "Déboisement d'une nouvelle ligne électrique pour Hydro-Québec dans les Hautes-Gorges par Simtrex inc",
  },
  {
    id: 19,
    titre: "Reconstruction du pont Gagnon — St-Urbain",
    categorie: "Ouvrages d'art & Ponts",
    description: "Démolition de l'ancien pont Gagnon et construction d'un nouveau pont acier-bois de 90 pieds à St-Urbain, à la suite du désastre naturel de 2023. Structure sur poutres d'acier galvanisé de 1,2 m (l'équivalent de 30 tonnes d'acier), incluant les nouvelles approches de pont. Projet financé par la Sécurité publique (850 k$).",
    image: "/images/pont-gagnon/pont-gagnon-8-simtrex.jpg",
    annee: "2025",
    ancre: "pont-gagnon",
    alt: "Nouveau pont acier-bois Gagnon reconstruit à St-Urbain par Simtrex inc après le désastre de 2023",
  },
  {
    id: 18,
    titre: "Développement résidentiel — Phase 2, Clermont",
    categorie: "Génie civil & Environnement",
    description: "Construction complète des infrastructures de la phase 2 d'un nouveau développement résidentiel (secteur Aréna, Clermont) : égout, aqueduc et réseau pluvial, 30 nouveaux services pour 30 terrains sur les rues Brassard, Asselin et des Érables, pose de membrane, surface granulaire, bordures complètes des phases 1 et 2 et pavage complet (1,7 M$).",
    image: "/images/developpement-clermont/clermont-phase2-1-simtrex.jpg",
    imageContain: true,
    annee: "2025",
    ancre: "developpement-clermont",
    alt: "Construction des infrastructures d'égout, d'aqueduc et de pluvial d'un développement résidentiel à Clermont par Simtrex inc",
  },
  {
    id: 17,
    titre: "Stabilisation de talus — Chemin des Loisirs, La Malbaie",
    categorie: "Excavation & Terrassement",
    description: "Terrassement et stabilisation d'un énorme talus sur le chemin des Loisirs à La Malbaie pour le MTQ Capitale-Nationale : déblai de 15 000 m², enrochement de plus de 18 000 tonnes de pierre, terre végétale, ensemencement et gestion de la circulation en alternance (750 k$).",
    image: "/images/talus-loisirs/talus-loisirs-12-simtrex.jpg",
    annee: "2022",
    ancre: "talus-chemin-loisirs",
    alt: "Stabilisation de talus sur le chemin des Loisirs à La Malbaie par Simtrex inc pour le MTQ",
  },
  {
    id: 16,
    titre: "Déblai en intérieur de courbe — Route 172",
    categorie: "Excavation & Terrassement",
    description: "Important déblai de 21 000 m³ pour améliorer la visibilité d'une courbe de la route 172, dans le secteur des Monts-Valin, réalisé pour le MTQ division Saguenay–Lac-Saint-Jean. Décroché à l'automne, terminé au printemps 2020.",
    image: "/images/deblai-172/deblai-172-3-simtrex.jpg",
    annee: "2019",
    ancre: "deblai-courbe-172",
    alt: "Déblai en intérieur de courbe sur la route 172 par Simtrex inc pour le MTQ",
  },
  {
    id: 15,
    titre: "Stabilisation des berges — Rivière Saint-Jean",
    categorie: "Génie civil & Environnement",
    description: "Stabilisation des berges de la rivière Saint-Jean (rivière à saumon) à L'Anse-Saint-Jean pour le MTQ Saguenay–Lac-Saint-Jean : ponceau TTOG 1800 mm, piste cyclable de 400 m, clôture, ensemencement hydraulique et pavage. Travaux à la pelle guidée par système 3D, en milieu hautement protégé (850 k$).",
    image: "/images/berges-stjean/berges-stjean-9-simtrex.jpg",
    annee: "2021",
    ancre: "berges-riviere-stjean",
    alt: "Stabilisation des berges de la rivière Saint-Jean par Simtrex inc pour le MTQ",
  },
  {
    id: 14,
    titre: "Réfection du barrage de l'étang Malbaie",
    categorie: "Génie civil & Environnement",
    description: "Réfection complète du barrage de l'étang Malbaie, bétonnage de l'empierrement et déviation temporaire du cours d'eau, réalisée pour le ministère de l'Environnement et des Changements climatiques. Un défi environnemental d'envergure (650 k$).",
    image: "/images/barrage-malbaie/barrage-malbaie-9-simtrex.jpg",
    annee: "2021",
    ancre: "barrage-etang-malbaie",
    alt: "Réfection du barrage de l'étang Malbaie par Simtrex inc pour le ministère de l'Environnement",
  },
  {
    id: 13,
    titre: "Ponceau majeur 1800 mm — Route 362",
    categorie: "Ouvrages d'art & Ponts",
    description: "Réfection d'un ponceau de 1800 mm de diamètre à 7 m de profondeur sur la route 362, support de 2 conduites d'aqueduc et chemin de contournement temporaire avec circulation en alternance. Travaux d'envergure (1 M$) pour le ministère des Transports du Québec (MTQ).",
    image: "/images/tba362/tba362-4-simtrex.jpg",
    annee: "2020",
    ancre: "ponceau-tba-route362",
    alt: "Réfection d'un ponceau de 1800 mm sur la route 362 par Simtrex inc pour le MTQ",
  },
  {
    id: 12,
    titre: "Réfection de 9 ponceaux — Route 138",
    categorie: "Ponceaux & Drainage",
    description: "Réfection de 9 ponceaux et drainage de chaussée sur la route 138, réalisée pour le ministère des Transports du Québec (MTQ) en maintenant la circulation.",
    image: "/images/ponceaux-138/ponceaux138-installation-equipe-simtrex.jpg",
    annee: "2024",
    ancre: "ponceaux-route138",
    alt: "Réfection de 9 ponceaux sur la route 138 par Simtrex inc pour le MTQ",
  },
  {
    id: 11,
    titre: "Ouvrage d'art — Route 362, Saint-Irénée",
    categorie: "Ouvrages d'art & Ponts",
    description: "Réfection du ponceau (PBA) de la décharge du lac Saint-Antoine sur la route 362, réalisée pour le ministère des Transports du Québec (MTQ) : sections de béton armé, mur de soutènement Redi-Rock et enrochement.",
    image: "/images/ouvrage-art/ouvrage-pba-termine-route362-simtrex.jpg",
    annee: "2021",
    ancre: "ouvrage-art-route362",
    alt: "Ouvrage d'art route 362 Saint-Irénée réalisé par Simtrex inc",
  },
  {
    id: 10,
    titre: "Recouvrement final de cellule — L.E.T. MRC de Charlevoix-Est",
    categorie: "Génie civil & Environnement",
    description: "Recouvrement final d'une cellule d'enfouissement avec membrane géotextile et matériaux granulaires au lieu d'enfouissement technique (L.E.T.) de la MRC de Charlevoix-Est.",
    image: "/images/realisations/let-recouvrement-cellule-charlevoix-simtrex.jpg",
    annee: "2023",
    ancre: "recouvrement-let",
    alt: "Recouvrement final de cellule au L.E.T. de la MRC de Charlevoix-Est par Simtrex inc",
  },
];

// Catégories pour les filtres de la section Réalisations
// L'ordre ici détermine l'ordre des boutons de filtre
export const categoriesRealisations = [
  "Tous",
  "Ouvrages d'art & Ponts",
  "Génie civil & Environnement",
  "Excavation & Terrassement",
  "Ponceaux & Drainage",
];

// -----------------------------------------------------------
// ÉQUIPEMENTS
// -----------------------------------------------------------
export const equipements = [
  {
    id: 1,
    nom: "Pelle Mécanique",
    description: "Pelle hydraulique de grande capacité pour excavation précise et efficace.",
    specs: "20-30 tonnes",
    icon: "🦾",
  },
  {
    id: 2,
    nom: "Camions 10 Roues",
    description: "Flotte de camions 10 roues pour le transport de matériaux de chantier.",
    specs: "16-18 tonnes",
    icon: "🚛",
  },
  {
    id: 3,
    nom: "Fardier",
    description: "Fardier pour le transport de charges exceptionnelles et machinerie lourde.",
    specs: "Jusqu'à 50 tonnes",
    icon: "🚚",
  },
  {
    id: 4,
    nom: "Bulldozer",
    description: "Bouteur pour nivellement, déblaiement et préparation de terrain.",
    specs: "Lame frontale hydraulique",
    icon: "🏗️",
  },
  {
    id: 5,
    nom: "Équipements de Compactage",
    description: "Rouleaux compacteurs et plaques vibrantes pour compactage de qualité.",
    specs: "Rouleau vibrant & plaques",
    icon: "⚙️",
  },
  {
    id: 6,
    nom: "Mini-Pelle",
    description: "Mini-pelle pour travaux en espace restreint et précision sur petits chantiers.",
    specs: "1,5-5 tonnes",
    icon: "🔩",
  },
  {
    id: 7,
    nom: "Conteneurs de Chantier",
    description: "Conteneurs pour stockage et transport de matériaux sur les sites de travaux.",
    specs: "Divers formats",
    icon: "📦",
  },
  {
    id: 8,
    nom: "Équipements de Transport",
    description: "Équipements spécialisés pour le transport de matériaux en vrac et de ponceaux.",
    specs: "Adapté aux charges",
    icon: "🚜",
  },
];

// -----------------------------------------------------------
// POURQUOI CHOISIR SIMTREX — Section accueil
// -----------------------------------------------------------
export const avantages = [
  {
    titre: "Actifs depuis 2012",
    description: "Plus de 10 ans d'expérience dans l'excavation, le transport et le génie civil en Charlevoix.",
    icon: "📅",
  },
  {
    titre: "Service direct avec le propriétaire",
    description: "Vous parlez directement à Michael Simard. Pas d'intermédiaire, pas de délai de communication.",
    icon: "🤝",
  },
  {
    titre: "Expertise terrain",
    description: "Une équipe habituée aux exigences des chantiers municipaux, commerciaux et résidentiels.",
    icon: "🏆",
  },
  {
    titre: "Équipements adaptés",
    description: "Flotte complète entretenue régulièrement pour répondre à tous les types de travaux.",
    icon: "⚙️",
  },
  {
    titre: "Connaissance du territoire",
    description: "Nous connaissons La Malbaie, Charlevoix et Charlevoix-Est. Vos contraintes locales sont les nôtres.",
    icon: "📍",
  },
  {
    titre: "Approche rigoureuse",
    description: "Travaux exécutés selon les normes, dans les délais et avec le souci du travail bien fait.",
    icon: "✅",
  },
  {
    titre: "Tous types de projets",
    description: "Résidentiel, commercial, municipal et génie civil — nous nous adaptons à l'envergure de votre projet.",
    icon: "🏗️",
  },
  {
    titre: "Incorporée depuis 2014",
    description: "Une structure d'entreprise solide, licenciée RBQ, pour des engagements fiables et professionnels.",
    icon: "🏢",
  },
];

// -----------------------------------------------------------
// TYPES DE PROJETS — Utilisé dans le formulaire de contact
// -----------------------------------------------------------
export const typesProjet = [
  "Excavation résidentielle",
  "Excavation commerciale",
  "Terrassement",
  "Travaux municipaux",
  "Égout et aqueduc",
  "Fosses septiques et champs d'épuration",
  "Routes, canalisations et ponceaux",
  "Drainage",
  "Transport de matériaux",
  "Transport par fardier",
  "Préparation de fondation granulaire",
  "Déneigement commercial ou routier",
  "Autre",
];
