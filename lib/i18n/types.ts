export type SupportedLanguage = "en" | "es" | "fr" | "de" | "zh" | "ar" | "pt" | "ru" | "it" | "xh" | "sa"

export interface TranslationKey {
  [key: string]: string | TranslationKey
}

export interface GuideTranslations {
  common: {
    loading: string
    error: string
    success: string
    warning: string
    info: string
    print: string
    download: string
    expand: string
    collapse: string
    next: string
    previous: string
    home: string
    tableOfContents: string
    selectLanguage: string
    languageSupport: string
    languagesAvailable: string
    viewUserGuide: string
  }
  home: {
    title: string
    description: string
    tabs: {
      upload: string
      preview: string
      normalize: string
      integrate: string
      algorithm: string
    }
    errors: {
      noDatasets: string
      beforeNormalization: string
      beforeIntegration: string
    }
  }
  guide: {
    title: string
    description: string
    overview: {
      title: string
      gettingStarted: {
        title: string
        description: string
        whatIs: {
          title: string
          description: string
        }
        whyImportant: {
          title: string
          description: string
        }
      }
      coreAlgorithm: {
        title: string
        description: string
      }
      workflow: {
        steps: {
          upload: {
            title: string
            description: string
          }
          preview: {
            title: string
            description: string
          }
          normalize: {
            title: string
            description: string
          }
          integrate: {
            title: string
            description: string
          }
        }
      }
    }
    upload: {
      title: string
      description: string
      supportedTypes: {
        title: string
        wellLogs: {
          label: string
          description: string
        }
        seismic: {
          label: string
          description: string
        }
        production: {
          label: string
          description: string
        }
        core: {
          label: string
          description: string
        }
      }
      instructions: {
        title: string
        step1: {
          title: string
          description: string
        }
        step2: {
          title: string
          description: string
        }
        step3: {
          title: string
          description: string
        }
      }
      exampleWorkflow: {
        title: string
        description: string
      }
    }
    faq: {
      title: string
      description: string
      questions: {
        dataTypes: {
          question: string
          answer: string
        }
        normalization: {
          question: string
          answer: string
        }
        accuracy: {
          question: string
          answer: string
        }
        security: {
          question: string
          answer: string
        }
      }
    }
    glossary: {
      title: string
      description: string
      reservoirTerms: {
        title: string
        porosity: {
          term: string
          definition: string
        }
        permeability: {
          term: string
          definition: string
        }
        resistivity: {
          term: string
          definition: string
        }
      }
      dataScienceTerms: {
        title: string
        normalization: {
          term: string
          definition: string
        }
        standardDeviation: {
          term: string
          definition: string
        }
        zScore: {
          term: string
          definition: string
        }
      }
    }
    troubleshooting: {
      title: string
      description: string
      problems: {
        noDatasets: {
          problem: string
          cause: string
          solution: string
        }
        notNormalized: {
          problem: string
          cause: string
          solution: string
        }
        missingValues: {
          problem: string
          cause: string
          solution: string
        }
      }
      bestPractices: {
        title: string
        items: string[]
      }
    }
    print: {
      title: string
      description: string
      whatsIncluded: {
        title: string
        items: string[]
      }
      formatFeatures: {
        title: string
        items: string[]
      }
      printTips: {
        title: string
        items: string[]
      }
    }
  }
}
