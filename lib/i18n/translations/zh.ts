import type { GuideTranslations } from "../types"

export const zh: GuideTranslations = {
  common: {
    loading: "加载中",
    error: "错误",
    success: "成功",
    warning: "警告",
    info: "信息",
    print: "打印",
    download: "下载",
    expand: "展开",
    collapse: "收起",
    next: "下一步",
    previous: "上一步",
    home: "首页",
    tableOfContents: "目录",
    selectLanguage: "选择语言",
    languageSupport: "语言支持",
    languagesAvailable: "支持11种语言",
    viewUserGuide: "查看用户指南",
  },
  home: {
    title: "储层数据协调器",
    description: "自动清理、格式化并将多格式数据集成到统一模型中的应用程序。",
    tabs: {
      upload: "上传数据",
      preview: "预览数据",
      normalize: "标准化",
      integrate: "集成",
      algorithm: "算法",
    },
    errors: {
      noDatasets: "请先上传数据集",
      beforeNormalization: "请先预览数据再进行标准化",
      beforeIntegration: "请先标准化数据再进行集成",
    },
  },
  guide: {
    title: "储层数据协调器用户指南",
    description: "学习如何有效使用储层数据协调器来清理、标准化和集成您的储层数据。",
    overview: {
      title: "概述",
      gettingStarted: {
        title: "入门指南",
        description: "了解储层数据协调器的基础知识以及为什么它对现代储层工程至关重要。",
        whatIs: {
          title: "什么是储层数据协调器？",
          description:
            "储层数据协调器是一个强大的应用程序，旨在解决石油和天然气行业中数据异构性和集成挑战。它自动清理、格式化并将来自各种来源的多格式数据集成到统一的、一致的模型中。",
        },
        whyImportant: {
          title: "为什么重要？",
          description:
            "在储层工程中，数据来自多个来源——测井、地震、生产、岩心数据等——通常格式不同且集成度差。我们的应用程序通过提供标准化的数据标准化和集成方法来解决这个关键问题。",
        },
      },
      coreAlgorithm: {
        title: "核心算法",
        description:
          "我们的数据标准化和集成算法基于统计标准化和模式匹配原理。该算法处理异构数据集，对其进行标准化，并将其集成到主表中。",
      },
      workflow: {
        steps: {
          upload: {
            title: "1. 上传数据",
            description: "首先上传您的储层数据文件。支持多种格式，包括CSV、Excel和专有储层数据格式。",
          },
          preview: {
            title: "2. 预览数据",
            description: "在处理之前检查您的数据。预览功能允许您验证数据结构并识别潜在问题。",
          },
          normalize: {
            title: "3. 标准化数据",
            description: "应用我们的标准化算法来清理和标准化您的数据集，确保所有数据集之间的一致性。",
          },
          integrate: {
            title: "4. 集成数据",
            description: "将标准化的数据集合并到统一的主表中，为分析和建模做好准备。",
          },
        },
      },
    },
    upload: {
      title: "上传数据",
      description: "了解如何将储层数据上传到系统中进行处理。",
      supportedTypes: {
        title: "支持的数据类型",
        wellLogs: {
          label: "测井数据",
          description: "测井数据，包括伽马射线、电阻率、孔隙度和渗透率测量。",
        },
        seismic: {
          label: "地震数据",
          description: "地震调查数据，包括2D和3D地震解释和属性。",
        },
        production: {
          label: "生产数据",
          description: "井生产数据，包括流量、压力和流体特性。",
        },
        core: {
          label: "岩心数据",
          description: "岩心分析数据，包括岩石物理和地球化学测量。",
        },
      },
      instructions: {
        title: "上传说明",
        step1: {
          title: "选择文件",
          description: "点击上传区域或拖放文件到指定区域。您可以一次选择多个文件。",
        },
        step2: {
          title: "验证格式",
          description: "系统将自动检测文件格式并验证数据结构。任何问题都会突出显示。",
        },
        step3: {
          title: "确认上传",
          description: "查看文件摘要并确认上传。数据将被处理并准备进行预览。",
        },
      },
      exampleWorkflow: {
        title: "示例工作流程",
        description:
          "典型的数据上传会话可能包括上传测井数据CSV文件、地震属性Excel文件和生产数据文本文件。系统将处理每个文件并准备进行标准化。",
      },
    },
    faq: {
      title: "常见问题",
      description: "查找有关储层数据协调器的常见问题答案。",
      questions: {
        dataTypes: {
          question: "支持哪些数据类型？",
          answer:
            "我们支持广泛的储层数据类型，包括测井数据、地震数据、生产数据和岩心分析数据。支持的格式包括CSV、Excel、LAS和各种专有格式。",
        },
        normalization: {
          question: "标准化过程如何工作？",
          answer:
            "我们的标准化算法使用统计方法（Z分数标准化）来标准化不同数据集中的值。这确保了来自不同来源的数据可以有意义地进行比较和集成。",
        },
        accuracy: {
          question: "标准化过程有多准确？",
          answer:
            "我们的算法在各种储层数据集上进行了广泛测试，通常实现95%以上的准确率。该系统包括验证检查以确保数据完整性。",
        },
        security: {
          question: "我的数据安全吗？",
          answer:
            "是的，我们认真对待数据安全。所有数据都经过加密传输和存储，我们遵循行业最佳实践来保护您的敏感储层数据。",
        },
      },
    },
    glossary: {
      title: "术语表",
      description: "储层工程和数据科学术语的定义。",
      reservoirTerms: {
        title: "储层术语",
        porosity: {
          term: "孔隙度",
          definition: "岩石中孔隙空间占总体积的百分比。这是储层质量的关键指标。",
        },
        permeability: {
          term: "渗透率",
          definition: "流体通过多孔介质流动的能力的度量。以达西或毫达西为单位。",
        },
        resistivity: {
          term: "电阻率",
          definition: "材料抵抗电流流动的能力。在测井中用于确定流体饱和度。",
        },
      },
      dataScienceTerms: {
        title: "数据科学术语",
        normalization: {
          term: "标准化",
          definition: "将数据转换为通用尺度的过程，通常通过减去均值并除以标准差。",
        },
        standardDeviation: {
          term: "标准差",
          definition: "数据集中变异性或离散程度的度量。",
        },
        zScore: {
          term: "Z分数",
          definition: "表示值距离均值多少个标准差的统计度量。",
        },
      },
    },
    troubleshooting: {
      title: "故障排除",
      description: "解决储层数据协调器常见问题的指南。",
      problems: {
        noDatasets: {
          problem: "没有可用的数据集",
          cause: "尚未上传数据文件或上传失败。",
          solution: "使用上传选项卡上传一个或多个数据文件。确保文件格式受支持且未损坏。",
        },
        notNormalized: {
          problem: "数据未标准化",
          cause: "在尝试集成之前必须标准化数据。",
          solution: "转到标准化选项卡并对所有上传的数据集运行标准化过程。",
        },
        missingValues: {
          problem: "数据中缺少值",
          cause: "某些数据集可能包含空值或缺失值。",
          solution: "检查原始数据的完整性。系统可以处理一些缺失值，但过多的缺失可能影响结果。",
        },
      },
      bestPractices: {
        title: "最佳实践",
        items: [
          "在上传之前确保数据文件格式正确且完整",
          "在标准化之前预览数据以识别潜在问题",
          "对相似类型的数据集使用一致的命名约定",
          "定期备份处理后的数据",
          "验证集成结果的准确性",
        ],
      },
    },
    print: {
      title: "打印指南",
      description: "生成储层数据协调器用户指南的可打印版本。",
      whatsIncluded: {
        title: "包含内容",
        items: [
          "完整的用户指南，包含所有部分",
          "分步说明和工作流程",
          "故障排除指南和最佳实践",
          "术语表和技术定义",
          "常见问题和答案",
        ],
      },
      formatFeatures: {
        title: "格式特性",
        items: [
          "针对打印优化的布局",
          "清晰的标题和部分分隔",
          "页码和目录",
          "高对比度文本，便于阅读",
          "紧凑格式以节省纸张",
        ],
      },
      printTips: {
        title: "打印提示",
        items: [
          "使用双面打印以节省纸张",
          "选择'适合页面'以确保正确缩放",
          "考虑以小册子格式打印以便于参考",
          "使用高质量纸张以获得最佳效果",
        ],
      },
    },
  },
}
