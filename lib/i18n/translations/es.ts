import type { GuideTranslations } from "../types"

export const es: GuideTranslations = {
  common: {
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    warning: "Advertencia",
    info: "Información",
    print: "Imprimir",
    download: "Descargar",
    expand: "Expandir",
    collapse: "Contraer",
    next: "Siguiente",
    previous: "Anterior",
    home: "Inicio",
    tableOfContents: "Tabla de Contenidos",
    selectLanguage: "Seleccionar Idioma",
    languageSupport: "Soporte de Idiomas",
    languagesAvailable: "Esta aplicación está disponible en 8 idiomas",
    viewUserGuide: "Ver Guía de Usuario",
  },
  home: {
    title: "Armonizador de Datos de Yacimientos",
    description:
      "Limpia, formatea e integra automáticamente datos de yacimientos de múltiples formatos en un modelo unificado utilizando algoritmos avanzados de normalización",
    tabs: {
      upload: "Cargar Datos",
      preview: "Vista Previa",
      normalize: "Normalización",
      integrate: "Integración",
      algorithm: "Algoritmo",
    },
    errors: {
      noDatasets: "Por favor cargue al menos un conjunto de datos primero",
      beforeNormalization: "Por favor cargue al menos un conjunto de datos antes de la normalización",
      beforeIntegration: "Por favor normalice sus conjuntos de datos antes de la integración",
    },
  },
  guide: {
    title: "Armonizador de Datos de Yacimientos - Guía del Usuario",
    description:
      "Guía completa paso a paso para armonizar datos heterogéneos de yacimientos usando algoritmos avanzados de normalización",
    overview: {
      title: "Resumen",
      gettingStarted: {
        title: "Comenzando",
        description: "Entendiendo el flujo de trabajo y conceptos básicos",
        whatIs: {
          title: "¿Qué es la Armonización de Datos?",
          description:
            "La armonización de datos es el proceso de reunir datos de diferentes fuentes, formatos y escalas en un formato unificado y consistente que permite un análisis integral.",
        },
        whyImportant: {
          title: "¿Por qué es Importante?",
          description:
            "En ingeniería de yacimientos, los datos provienen de varias fuentes (registros, sísmicos, producción) con diferentes escalas y unidades. La armonización permite análisis transversal y mejor toma de decisiones.",
        },
      },
      coreAlgorithm: {
        title: "Algoritmo Principal",
        description: "La aplicación usa un proceso de dos pasos: Normalización seguida de Integración",
      },
      workflow: {
        steps: {
          upload: {
            title: "Cargar Datos",
            description: "Agregar sus conjuntos de datos heterogéneos",
          },
          preview: {
            title: "Vista Previa y Validación",
            description: "Revisar calidad y estructura de datos",
          },
          normalize: {
            title: "Normalizar",
            description: "Aplicar normalización estadística",
          },
          integrate: {
            title: "Integrar",
            description: "Crear modelo unificado",
          },
        },
      },
    },
    upload: {
      title: "Carga de Datos",
      description: "Aprenda cómo agregar sus conjuntos de datos de yacimientos al armonizador",
      supportedTypes: {
        title: "Tipos de Datos Soportados",
        wellLogs: {
          label: "Registros de Pozo",
          description: "Mediciones de rayos gamma, resistividad, porosidad",
        },
        seismic: {
          label: "Datos Sísmicos",
          description: "Datos de amplitud, frecuencia, velocidad",
        },
        production: {
          label: "Datos de Producción",
          description: "Tasas de petróleo/gas/agua, lecturas de presión",
        },
        core: {
          label: "Análisis de Núcleos",
          description: "Datos de permeabilidad, porosidad, saturación",
        },
      },
      instructions: {
        title: "Instrucciones Paso a Paso",
        step1: {
          title: "Ingresar Nombre del Conjunto de Datos",
          description: 'Elija un nombre descriptivo (ej., "Registros-Pozo-A", "Producción-Campo-X")',
        },
        step2: {
          title: "Seleccionar Tipo de Datos",
          description: "Elija la categoría apropiada para sus datos",
        },
        step3: {
          title: "Generar Conjunto de Datos de Muestra",
          description: "Haga clic para crear un conjunto de datos de muestra para demostración",
        },
      },
      exampleWorkflow: {
        title: "Flujo de Trabajo de Ejemplo",
        description:
          "Para un análisis integral, cargue al menos 2-3 tipos diferentes de datos. Por ejemplo: Registros de pozo + Datos de producción + Análisis de núcleos para una caracterización completa del yacimiento.",
      },
    },
    faq: {
      title: "Preguntas Frecuentes",
      description: "Preguntas comunes sobre el Armonizador de Datos de Yacimientos",
      questions: {
        dataTypes: {
          question: "P: ¿Qué tipos de datos de yacimientos puedo armonizar?",
          answer:
            "R: La aplicación soporta cuatro tipos principales de datos de yacimientos: Registros de Pozo (rayos gamma, resistividad, porosidad), Datos Sísmicos (amplitud, frecuencia, velocidad), Datos de Producción (tasas de petróleo/gas/agua, presión), y Análisis de Núcleos (permeabilidad, porosidad, saturación). Cada tipo se procesa según prácticas estándar de la industria.",
        },
        normalization: {
          question: "P: ¿Por qué es necesaria la normalización de datos?",
          answer:
            "R: Diferentes mediciones de yacimientos tienen escalas vastamente diferentes (ej., porosidad: 0-1, presión: 1000-5000 psi). Sin normalización, las mediciones de mayor escala dominarían el análisis. La normalización pone todos los datos en la misma escala (media=0, desv=1), permitiendo comparación justa e integración.",
        },
        accuracy: {
          question: "P: ¿Qué tan preciso es el algoritmo de normalización?",
          answer:
            "R: La aplicación usa la fórmula estándar de normalización Z-score (d-μ)/σ, que es matemáticamente precisa y ampliamente aceptada en análisis estadístico. El algoritmo maneja casos especiales como desviación estándar cero y valores faltantes para asegurar resultados robustos.",
        },
        security: {
          question: "P: ¿Están seguros mis datos al usar esta aplicación?",
          answer:
            "R: Sí, todo el procesamiento de datos ocurre localmente en su navegador. No se transmiten datos a servidores externos. Sus datos de yacimientos permanecen completamente privados y seguros en su dispositivo durante todo el proceso de armonización.",
        },
      },
    },
    glossary: {
      title: "Glosario Técnico",
      description: "Definiciones de términos y conceptos técnicos",
      reservoirTerms: {
        title: "Términos de Ingeniería de Yacimientos",
        porosity: {
          term: "Porosidad",
          definition:
            "El porcentaje de espacio vacío en la roca que puede contener fluidos. Esencial para calcular reservas de hidrocarburos.",
        },
        permeability: {
          term: "Permeabilidad",
          definition:
            "Una medida de la capacidad de la roca para transmitir fluidos, típicamente medida en milidarcies (mD).",
        },
        resistivity: {
          term: "Resistividad",
          definition:
            "Resistencia eléctrica de formaciones rocosas, usada para distinguir entre formaciones con hidrocarburos y con agua.",
        },
      },
      dataScienceTerms: {
        title: "Términos de Ciencia de Datos",
        normalization: {
          term: "Normalización",
          definition:
            "Técnica estadística para escalar datos a un rango estándar, típicamente con media=0 y desviación estándar=1.",
        },
        standardDeviation: {
          term: "Desviación Estándar (σ)",
          definition:
            "Una medida de dispersión o variabilidad de datos alrededor de la media. Usada en normalización para escalar datos proporcionalmente.",
        },
        zScore: {
          term: "Normalización Z-Score",
          definition:
            "La fórmula específica de normalización: (valor - media) / desviación_estándar. Resulta en datos con media=0 y desv=1.",
        },
      },
    },
    troubleshooting: {
      title: "Guía de Solución de Problemas",
      description: "Problemas comunes y soluciones",
      problems: {
        noDatasets: {
          problem: "No hay conjuntos de datos disponibles para vista previa",
          cause: "No se han cargado conjuntos de datos",
          solution: "Vaya a la pestaña de Carga y agregue al menos un conjunto de datos",
        },
        notNormalized: {
          problem: "Por favor normalice sus conjuntos de datos antes de la integración",
          cause: "Intentando integrar sin normalización",
          solution: "Complete el paso de normalización primero",
        },
        missingValues: {
          problem: "Se encontraron X valores faltantes",
          cause: "El conjunto de datos contiene valores vacíos o inválidos",
          solution:
            'Use el botón "Limpiar Todos los Conjuntos de Datos" para manejar valores faltantes automáticamente',
        },
      },
      bestPractices: {
        title: "Mejores Prácticas para el Éxito",
        items: [
          "Siempre previsualice sus datos antes de la normalización",
          "Use las características de limpieza de datos para mejores resultados",
          "Asegúrese de que los conjuntos de datos tengan rangos de profundidad o períodos de tiempo superpuestos",
          "Comience con 2-3 conjuntos de datos antes de agregar datos más complejos",
          "Exporte y respalde su modelo unificado después de la integración",
        ],
      },
    },
    print: {
      title: "Guía del Usuario Imprimible",
      description: "Descargue o imprima una versión PDF completa de la guía del usuario",
      whatsIncluded: {
        title: "Qué Está Incluido",
        items: [
          "Flujo de trabajo completo paso a paso",
          "Fórmulas matemáticas y explicaciones",
          "Preguntas frecuentes",
          "Glosario técnico",
          "Guía de solución de problemas",
          "Mejores prácticas y ejemplos",
        ],
      },
      formatFeatures: {
        title: "Características del Formato",
        items: [
          "Diseño PDF profesional",
          "Secciones codificadas por colores",
          "Fórmulas matemáticas",
          "Ejemplos y consejos",
          "Tabla de contenidos",
          "Formato fácil de leer",
        ],
      },
      printTips: {
        title: "Consejos de Impresión",
        items: [
          'Use la opción "Imprimir a PDF" en su navegador para mejores resultados',
          'Habilite "Gráficos de fondo" para secciones codificadas por colores',
          'Seleccione "Más configuraciones" → "Tamaño de papel: A4" para diseño óptimo',
          'Elija "Márgenes: Predeterminado" para espaciado apropiado',
        ],
      },
    },
  },
}
