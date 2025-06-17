"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { SupportedLanguage, GuideTranslations } from "./types"
import { en } from "./translations/en"
import { es } from "./translations/es"
import { fr } from "./translations/fr"
import { it } from "./translations/it"
import { xh } from "./translations/xh"
import { sa } from "./translations/sa"
import { zh } from "./translations/zh"

// Create a translations object with all supported languages
const translations: Record<SupportedLanguage, GuideTranslations> = {
  en,
  es,
  fr,
  it,
  xh,
  sa,
  zh, // Now using proper Chinese translations instead of English fallback
  // Add placeholders for other languages
  de: en, // German - using English as fallback for now
  ar: en, // Arabic - using English as fallback for now
  pt: en, // Portuguese - using English as fallback for now
  ru: en, // Russian - using English as fallback for now
}

interface I18nContextType {
  language: SupportedLanguage
  setLanguage: (lang: SupportedLanguage) => void
  t: GuideTranslations & { language: SupportedLanguage }
  isRTL: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
  defaultLanguage?: SupportedLanguage
}

export function I18nProvider({ children, defaultLanguage = "en" }: I18nProviderProps) {
  const [language, setLanguage] = useState<SupportedLanguage>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true)
    try {
      const savedLanguage = localStorage.getItem("guide-language") as SupportedLanguage
      if (savedLanguage && translations[savedLanguage]) {
        setLanguage(savedLanguage)
      }
    } catch (error) {
      console.error("Error loading language from localStorage:", error)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("guide-language", language)
      } catch (error) {
        console.error("Error saving language to localStorage:", error)
      }
    }
  }, [language, mounted])

  const isRTL = language === "ar"

  // Add the current language to the translations object
  const translationsWithLanguage = {
    ...translations[language],
    language,
  }

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translationsWithLanguage,
    isRTL,
  }

  return (
    <I18nContext.Provider value={value}>
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "text-right" : "text-left"}>
        {children}
      </div>
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

// Helper hook for nested translations
export function useTranslation(path?: string) {
  const { t } = useI18n()

  if (!path) return t

  const keys = path.split(".")
  let result: any = t

  for (const key of keys) {
    result = result?.[key]
    if (result === undefined) break
  }

  return result || path
}
