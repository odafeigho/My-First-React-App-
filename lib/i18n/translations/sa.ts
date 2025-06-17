import type { GuideTranslations } from "../types"
import { en } from "./en"

// Using English as a base for Sanskrit, with placeholder translations
export const sa: GuideTranslations = {
  ...en,
  common: {
    ...en.common,
    loading: "प्रतीक्षा करें...",
    error: "त्रुटि",
    success: "सफलता",
    warning: "चेतावनी",
    info: "जानकारी",
    print: "मुद्रण",
    download: "डाउनलोड",
    expand: "विस्तार",
    collapse: "संकुचित",
    next: "अगला",
    previous: "पिछला",
    home: "मुख्य पृष्ठ",
    tableOfContents: "विषय सूची",
    selectLanguage: "भाषा चुनें",
    languageSupport: "भाषा समर्थन",
    languagesAvailable: "यह अनुप्रयोग 11 भाषाओं में उपलब्ध है",
    viewUserGuide: "उपयोगकर्ता मार्गदर्शिका देखें",
  },
  home: {
    ...en.home,
    title: "जलाशय डेटा हार्मोनाइज़र",
    description: "उन्नत सामान्यीकरण एल्गोरिदम का उपयोग करके बहु-प्रारूप जलाशय डेटा को स्वचालित रूप से साफ, प्रारूपित और एकीकृत करें",
    tabs: {
      upload: "डेटा अपलोड करें",
      preview: "डेटा पूर्वावलोकन",
      normalize: "सामान्यीकरण",
      integrate: "एकीकरण",
      algorithm: "एल्गोरिदम",
    },
    errors: {
      noDatasets: "कृपया पहले कम से कम एक डेटासेट अपलोड करें",
      beforeNormalization: "सामान्यीकरण से पहले कृपया कम से कम एक डेटासेट अपलोड करें",
      beforeIntegration: "एकीकरण से पहले कृपया अपने डेटासेट को सामान्य करें",
    },
  },
}
