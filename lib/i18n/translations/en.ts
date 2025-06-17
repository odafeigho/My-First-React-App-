import type { GuideTranslations } from "../types"

export const en: GuideTranslations = {
  common: {
    loading: "Loading...",
    error: "Error",
    success: "Success",
    warning: "Warning",
    info: "Information",
    print: "Print",
    download: "Download",
    expand: "Expand",
    collapse: "Collapse",
    next: "Next",
    previous: "Previous",
    home: "Home",
    tableOfContents: "Table of Contents",
    selectLanguage: "Select Language",
    languageSupport: "Language Support",
    languagesAvailable: "This application is available in 8 languages",
    viewUserGuide: "View User Guide",
  },
  home: {
    title: "Reservoir Data Harmonizer",
    description:
      "Automatically clean, format, and integrate multi-format reservoir data into a unified model using advanced normalization algorithms",
    tabs: {
      upload: "Data Upload",
      preview: "Data Preview",
      normalize: "Normalization",
      integrate: "Integration",
      algorithm: "Algorithm",
    },
    errors: {
      noDatasets: "Please upload at least one dataset first",
      beforeNormalization: "Please upload at least one dataset before normalization",
      beforeIntegration: "Please normalize your datasets before integration",
    },
  },
  guide: {
    title: "Reservoir Data Harmonizer - User Guide",
    description:
      "Complete step-by-step guide to harmonizing heterogeneous reservoir data using advanced normalization algorithms",
    overview: {
      title: "Overview",
      gettingStarted: {
        title: "Getting Started",
        description: "Understanding the workflow and core concepts",
        whatIs: {
          title: "What is Data Harmonization?",
          description:
            "Data harmonization is the process of bringing together data from different sources, formats, and scales into a unified, consistent format that enables comprehensive analysis.",
        },
        whyImportant: {
          title: "Why is it Important?",
          description:
            "In reservoir engineering, data comes from various sources (logs, seismic, production) with different scales and units. Harmonization enables cross-domain analysis and better decision-making.",
        },
      },
      coreAlgorithm: {
        title: "Core Algorithm",
        description: "The app uses a two-step process: Normalization followed by Integration",
      },
      workflow: {
        steps: {
          upload: {
            title: "Upload Data",
            description: "Add your heterogeneous datasets",
          },
          preview: {
            title: "Preview & Validate",
            description: "Review data quality and structure",
          },
          normalize: {
            title: "Normalize",
            description: "Apply statistical normalization",
          },
          integrate: {
            title: "Integrate",
            description: "Create unified model",
          },
        },
      },
    },
    upload: {
      title: "Data Upload",
      description: "Learn how to add your reservoir datasets to the harmonizer",
      supportedTypes: {
        title: "Supported Data Types",
        wellLogs: {
          label: "Well Logs",
          description: "Gamma ray, resistivity, porosity measurements",
        },
        seismic: {
          label: "Seismic Data",
          description: "Amplitude, frequency, velocity data",
        },
        production: {
          label: "Production Data",
          description: "Oil/gas/water rates, pressure readings",
        },
        core: {
          label: "Core Analysis",
          description: "Permeability, porosity, saturation data",
        },
      },
      instructions: {
        title: "Step-by-Step Instructions",
        step1: {
          title: "Enter Dataset Name",
          description: 'Choose a descriptive name (e.g., "Well-A-Logs", "Field-X-Production")',
        },
        step2: {
          title: "Select Data Type",
          description: "Choose the appropriate category for your data",
        },
        step3: {
          title: "Generate Sample Dataset",
          description: "Click to create a sample dataset for demonstration",
        },
      },
      exampleWorkflow: {
        title: "Example Workflow",
        description:
          "For a comprehensive analysis, upload at least 2-3 different data types. For example: Well logs + Production data + Core analysis for a complete reservoir characterization.",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Common questions about the Reservoir Data Harmonizer",
      questions: {
        dataTypes: {
          question: "Q: What types of reservoir data can I harmonize?",
          answer:
            "A: The app supports four main types of reservoir data: Well Logs (gamma ray, resistivity, porosity), Seismic Data (amplitude, frequency, velocity), Production Data (oil/gas/water rates, pressure), and Core Analysis (permeability, porosity, saturation). Each type is processed according to industry-standard practices.",
        },
        normalization: {
          question: "Q: Why is data normalization necessary?",
          answer:
            "A: Different reservoir measurements have vastly different scales (e.g., porosity: 0-1, pressure: 1000-5000 psi). Without normalization, larger-scale measurements would dominate analysis. Normalization puts all data on the same scale (mean=0, std=1), enabling fair comparison and integration.",
        },
        accuracy: {
          question: "Q: How accurate is the normalization algorithm?",
          answer:
            "A: The app uses the standard Z-score normalization formula (d-μ)/σ, which is mathematically precise and widely accepted in statistical analysis. The algorithm handles edge cases like zero standard deviation and missing values to ensure robust results.",
        },
        security: {
          question: "Q: Is my data secure when using this app?",
          answer:
            "A: Yes, all data processing happens locally in your browser. No data is transmitted to external servers. Your reservoir data remains completely private and secure on your device throughout the entire harmonization process.",
        },
      },
    },
    glossary: {
      title: "Technical Glossary",
      description: "Definitions of technical terms and concepts",
      reservoirTerms: {
        title: "Reservoir Engineering Terms",
        porosity: {
          term: "Porosity",
          definition:
            "The percentage of void space in rock that can contain fluids. Essential for calculating hydrocarbon reserves.",
        },
        permeability: {
          term: "Permeability",
          definition: "A measure of rock's ability to transmit fluids, typically measured in millidarcies (mD).",
        },
        resistivity: {
          term: "Resistivity",
          definition:
            "Electrical resistance of rock formations, used to distinguish between hydrocarbon and water-bearing formations.",
        },
      },
      dataScienceTerms: {
        title: "Data Science Terms",
        normalization: {
          term: "Normalization",
          definition:
            "Statistical technique to scale data to a standard range, typically with mean=0 and standard deviation=1.",
        },
        standardDeviation: {
          term: "Standard Deviation (σ)",
          definition:
            "A measure of data spread or variability around the mean. Used in normalization to scale data proportionally.",
        },
        zScore: {
          term: "Z-Score Normalization",
          definition:
            "The specific normalization formula: (value - mean) / standard_deviation. Results in data with mean=0 and std=1.",
        },
      },
    },
    troubleshooting: {
      title: "Troubleshooting Guide",
      description: "Common issues and solutions",
      problems: {
        noDatasets: {
          problem: "No datasets available for preview",
          cause: "No datasets have been uploaded",
          solution: "Go to the Upload tab and add at least one dataset",
        },
        notNormalized: {
          problem: "Please normalize your datasets before integration",
          cause: "Trying to integrate without normalization",
          solution: "Complete the normalization step first",
        },
        missingValues: {
          problem: "Found X missing values",
          cause: "Dataset contains empty or invalid values",
          solution: 'Use the "Clean All Datasets" button to handle missing values automatically',
        },
      },
      bestPractices: {
        title: "Best Practices for Success",
        items: [
          "Always preview your data before normalization",
          "Use the data cleaning features for better results",
          "Ensure datasets have overlapping depth ranges or time periods",
          "Start with 2-3 datasets before adding more complex data",
          "Export and backup your unified model after integration",
        ],
      },
    },
    print: {
      title: "Printable User Guide",
      description: "Download or print a comprehensive PDF version of the complete user guide",
      whatsIncluded: {
        title: "What's Included",
        items: [
          "Complete step-by-step workflow",
          "Mathematical formulas and explanations",
          "Frequently asked questions",
          "Technical glossary",
          "Troubleshooting guide",
          "Best practices and examples",
        ],
      },
      formatFeatures: {
        title: "Format Features",
        items: [
          "Professional PDF layout",
          "Color-coded sections",
          "Mathematical formulas",
          "Examples and tips",
          "Table of contents",
          "Easy-to-read formatting",
        ],
      },
      printTips: {
        title: "Print Tips",
        items: [
          'Use "Print to PDF" option in your browser for best results',
          'Enable "Background graphics" for color-coded sections',
          'Select "More settings" → "Paper size: A4" for optimal layout',
          'Choose "Margins: Default" for proper spacing',
        ],
      },
    },
  },
}
