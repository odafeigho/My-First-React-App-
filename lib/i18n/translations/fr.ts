import type { GuideTranslations } from "../types"

export const fr: GuideTranslations = {
  common: {
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    warning: "Avertissement",
    info: "Information",
    print: "Imprimer",
    download: "Télécharger",
    expand: "Développer",
    collapse: "Réduire",
    next: "Suivant",
    previous: "Précédent",
    home: "Accueil",
    tableOfContents: "Table des Matières",
    selectLanguage: "Sélectionner la Langue",
    languageSupport: "Support Linguistique",
    languagesAvailable: "Cette application est disponible en 8 langues",
    viewUserGuide: "Voir le Guide Utilisateur",
  },
  home: {
    title: "Harmonisateur de Données de Réservoir",
    description:
      "Nettoyez, formatez et intégrez automatiquement des données de réservoir multi-formats dans un modèle unifié en utilisant des algorithmes de normalisation avancés",
    tabs: {
      upload: "Télécharger les Données",
      preview: "Aperçu des Données",
      normalize: "Normalisation",
      integrate: "Intégration",
      algorithm: "Algorithme",
    },
    errors: {
      noDatasets: "Veuillez d'abord télécharger au moins un ensemble de données",
      beforeNormalization: "Veuillez télécharger au moins un ensemble de données avant la normalisation",
      beforeIntegration: "Veuillez normaliser vos ensembles de données avant l'intégration",
    },
  },
  guide: {
    title: "Harmonisateur de Données de Réservoir - Guide Utilisateur",
    description:
      "Guide complet étape par étape pour harmoniser les données hétérogènes de réservoir en utilisant des algorithmes de normalisation avancés",
    overview: {
      title: "Aperçu",
      gettingStarted: {
        title: "Commencer",
        description: "Comprendre le flux de travail et les concepts de base",
        whatIs: {
          title: "Qu'est-ce que l'Harmonisation de Données?",
          description:
            "L'harmonisation de données est le processus de rassembler des données de différentes sources, formats et échelles en un format unifié et cohérent qui permet une analyse complète.",
        },
        whyImportant: {
          title: "Pourquoi est-ce Important?",
          description:
            "En ingénierie de réservoir, les données proviennent de diverses sources (logs, sismique, production) avec différentes échelles et unités. L'harmonisation permet l'analyse transversale et une meilleure prise de décision.",
        },
      },
      coreAlgorithm: {
        title: "Algorithme Principal",
        description: "L'application utilise un processus en deux étapes : Normalisation suivie d'Intégration",
      },
      workflow: {
        steps: {
          upload: {
            title: "Télécharger les Données",
            description: "Ajouter vos jeux de données hétérogènes",
          },
          preview: {
            title: "Aperçu et Validation",
            description: "Examiner la qualité et la structure des données",
          },
          normalize: {
            title: "Normaliser",
            description: "Appliquer la normalisation statistique",
          },
          integrate: {
            title: "Intégrer",
            description: "Créer un modèle unifié",
          },
        },
      },
    },
    upload: {
      title: "Téléchargement de Données",
      description: "Apprenez comment ajouter vos jeux de données de réservoir à l'harmonisateur",
      supportedTypes: {
        title: "Types de Données Supportés",
        wellLogs: {
          label: "Logs de Puits",
          description: "Mesures de rayons gamma, résistivité, porosité",
        },
        seismic: {
          label: "Données Sismiques",
          description: "Données d'amplitude, fréquence, vitesse",
        },
        production: {
          label: "Données de Production",
          description: "Taux de pétrole/gaz/eau, lectures de pression",
        },
        core: {
          label: "Analyse de Carottes",
          description: "Données de perméabilité, porosité, saturation",
        },
      },
      instructions: {
        title: "Instructions Étape par Étape",
        step1: {
          title: "Entrer le Nom du Jeu de Données",
          description: 'Choisissez un nom descriptif (ex., "Logs-Puits-A", "Production-Champ-X")',
        },
        step2: {
          title: "Sélectionner le Type de Données",
          description: "Choisissez la catégorie appropriée pour vos données",
        },
        step3: {
          title: "Générer un Jeu de Données d'Exemple",
          description: "Cliquez pour créer un jeu de données d'exemple pour démonstration",
        },
      },
      exampleWorkflow: {
        title: "Flux de Travail d'Exemple",
        description:
          "Pour une analyse complète, téléchargez au moins 2-3 types différents de données. Par exemple : Logs de puits + Données de production + Analyse de carottes pour une caractérisation complète du réservoir.",
      },
    },
    faq: {
      title: "Questions Fréquemment Posées",
      description: "Questions communes sur l'Harmonisateur de Données de Réservoir",
      questions: {
        dataTypes: {
          question: "Q: Quels types de données de réservoir puis-je harmoniser?",
          answer:
            "R: L'application supporte quatre types principaux de données de réservoir : Logs de Puits (rayons gamma, résistivité, porosité), Données Sismiques (amplitude, fréquence, vitesse), Données de Production (taux de pétrole/gaz/eau, pression), et Analyse de Carottes (perméabilité, porosité, saturation). Chaque type est traité selon les pratiques standard de l'industrie.",
        },
        normalization: {
          question: "Q: Pourquoi la normalisation des données est-elle nécessaire?",
          answer:
            "R: Différentes mesures de réservoir ont des échelles vastement différentes (ex., porosité: 0-1, pression: 1000-5000 psi). Sans normalisation, les mesures à plus grande échelle domineraient l'analyse. La normalisation met toutes les données sur la même échelle (moyenne=0, écart-type=1), permettant une comparaison équitable et l'intégration.",
        },
        accuracy: {
          question: "Q: Quelle est la précision de l'algorithme de normalisation?",
          answer:
            "R: L'application utilise la formule standard de normalisation Z-score (d-μ)/σ, qui est mathématiquement précise et largement acceptée en analyse statistique. L'algorithme gère les cas particuliers comme l'éc art-type zéro et les valeurs manquantes pour assurer des résultats robustes.",
        },
        security: {
          question: "Q: Mes données sont-elles sécurisées lors de l'utilisation de cette application?",
          answer:
            "R: Oui, tout le traitement des données se fait localement dans votre navigateur. Aucune donnée n'est transmise à des serveurs externes. Vos données de réservoir restent complètement privées et sécurisées sur votre appareil tout au long du processus d'harmonisation.",
        },
      },
    },
    glossary: {
      title: "Glossaire Technique",
      description: "Définitions des termes et concepts techniques",
      reservoirTerms: {
        title: "Termes d'Ingénierie de Réservoir",
        porosity: {
          term: "Porosité",
          definition:
            "Le pourcentage d'espace vide dans la roche qui peut contenir des fluides. Essentiel pour calculer les réserves d'hydrocarbures.",
        },
        permeability: {
          term: "Perméabilité",
          definition:
            "Une mesure de la capacité de la roche à transmettre des fluides, typiquement mesurée en millidarcies (mD).",
        },
        resistivity: {
          term: "Résistivité",
          definition:
            "Résistance électrique des formations rocheuses, utilisée pour distinguer entre les formations contenant des hydrocarbures et celles contenant de l'eau.",
        },
      },
      dataScienceTerms: {
        title: "Termes de Science des Données",
        normalization: {
          term: "Normalisation",
          definition:
            "Technique statistique pour mettre à l'échelle les données dans une plage standard, typiquement avec moyenne=0 et écart-type=1.",
        },
        standardDeviation: {
          term: "Écart-Type (σ)",
          definition:
            "Une mesure de la dispersion ou variabilité des données autour de la moyenne. Utilisé en normalisation pour mettre à l'échelle les données proportionnellement.",
        },
        zScore: {
          term: "Normalisation Z-Score",
          definition:
            "La formule spécifique de normalisation : (valeur - moyenne) / écart_type. Résulte en données avec moyenne=0 et écart-type=1.",
        },
      },
    },
    troubleshooting: {
      title: "Guide de Dépannage",
      description: "Problèmes courants et solutions",
      problems: {
        noDatasets: {
          problem: "Aucun jeu de données disponible pour l'aperçu",
          cause: "Aucun jeu de données n'a été téléchargé",
          solution: "Allez à l'onglet Téléchargement et ajoutez au moins un jeu de données",
        },
        notNormalized: {
          problem: "Veuillez normaliser vos jeux de données avant l'intégration",
          cause: "Tentative d'intégration sans normalisation",
          solution: "Complétez d'abord l'étape de normalisation",
        },
        missingValues: {
          problem: "X valeurs manquantes trouvées",
          cause: "Le jeu de données contient des valeurs vides ou invalides",
          solution:
            'Utilisez le bouton "Nettoyer Tous les Jeux de Données" pour gérer automatiquement les valeurs manquantes',
        },
      },
      bestPractices: {
        title: "Meilleures Pratiques pour le Succès",
        items: [
          "Toujours prévisualiser vos données avant la normalisation",
          "Utiliser les fonctionnalités de nettoyage des données pour de meilleurs résultats",
          "S'assurer que les jeux de données ont des plages de profondeur ou des périodes de temps qui se chevauchent",
          "Commencer avec 2-3 jeux de données avant d'ajouter des données plus complexes",
          "Exporter et sauvegarder votre modèle unifié après l'intégration",
        ],
      },
    },
    print: {
      title: "Guide Utilisateur Imprimable",
      description: "Téléchargez ou imprimez une version PDF complète du guide utilisateur",
      whatsIncluded: {
        title: "Ce qui est Inclus",
        items: [
          "Flux de travail complet étape par étape",
          "Formules mathématiques et explications",
          "Questions fréquemment posées",
          "Glossaire technique",
          "Guide de dépannage",
          "Meilleures pratiques et exemples",
        ],
      },
      formatFeatures: {
        title: "Caractéristiques du Format",
        items: [
          "Mise en page PDF professionnelle",
          "Sections codées par couleur",
          "Formules mathématiques",
          "Exemples et conseils",
          "Table des matières",
          "Formatage facile à lire",
        ],
      },
      printTips: {
        title: "Conseils d'Impression",
        items: [
          'Utilisez l\'option "Imprimer en PDF" dans votre navigateur pour de meilleurs résultats',
          'Activez "Graphiques d\'arrière-plan" pour les sections codées par couleur',
          'Sélectionnez "Plus de paramètres" → "Taille du papier : A4" pour une mise en page optimale',
          'Choisissez "Marges : Par défaut" pour un espacement approprié',
        ],
      },
    },
  },
}
