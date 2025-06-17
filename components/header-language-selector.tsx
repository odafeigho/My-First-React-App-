"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check, ChevronDown } from "lucide-react"
import { useI18n } from "../lib/i18n/context"
import type { SupportedLanguage } from "../lib/i18n/types"
import { languageNames } from "./language-menu"
import { FlagIcon } from "./flag-icon"

export function HeaderLanguageSelector() {
  const { language, setLanguage } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentLanguage = languageNames[language]

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2 flex items-center gap-1.5 text-gray-700">
          <FlagIcon src={currentLanguage.flag} alt={`${currentLanguage.name} flag`} size="sm" />
          <span className="text-sm font-medium">{currentLanguage.name}</span>
          <ChevronDown className="h-3 w-3 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 p-0">
        <ScrollArea className="h-64">
          <div className="p-1">
            {Object.entries(languageNames).map(([code, info]) => (
              <DropdownMenuItem
                key={code}
                onClick={() => {
                  setLanguage(code as SupportedLanguage)
                  setIsOpen(false)
                }}
                className="flex items-center justify-between mx-1 my-0.5"
              >
                <div className="flex items-center gap-2">
                  <FlagIcon src={info.flag} alt={`${info.name} flag`} size="sm" />
                  <span className="text-sm">{info.name}</span>
                </div>
                {language === code && <Check className="h-4 w-4" />}
              </DropdownMenuItem>
            ))}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
