import type { GuideTranslations } from "../types"
import { en } from "./en"

// Using English as a base, but with Arabic translations and RTL support
export const ar: GuideTranslations = {
  ...en,
  common: {
    ...en.common,
    loading: "جاري التحميل...",
    error: "خطأ",
    success: "نجاح",
    warning: "تحذير",
    info: "معلومات",
    print: "طباعة",
    download: "تنزيل",
    expand: "توسيع",
    collapse: "طي",
    next: "التالي",
    previous: "السابق",
    home: "الرئيسية",
    tableOfContents: "جدول المحتويات",
    selectLanguage: "اختر اللغة",
    languageSupport: "دعم اللغة",
    languagesAvailable: "هذا التطبيق متاح بـ 11 لغات",
    viewUserGuide: "عرض دليل المستخدم",
  },
  home: {
    ...en.home,
    title: "منسق بيانات الخزان",
    description:
      "تنظيف وتنسيق ودمج بيانات الخزان متعددة التنسيقات تلقائيًا في نموذج موحد باستخدام خوارزميات التطبيع المتقدمة",
    tabs: {
      upload: "تحميل البيانات",
      preview: "معاينة البيانات",
      normalize: "تطبيع",
      integrate: "دمج",
      algorithm: "الخوارزمية",
    },
    errors: {
      noDatasets: "يرجى تحميل مجموعة بيانات واحدة على الأقل أولاً",
      beforeNormalization: "يرجى تحميل مجموعة بيانات واحدة على الأقل قبل التطبيع",
      beforeIntegration: "يرجى تطبيع مجموعات البيانات الخاصة بك قبل الدمج",
    },
  },
}
