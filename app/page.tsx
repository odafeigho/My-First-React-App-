"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DataUpload } from "./components/data-upload"
import { DataPreview } from "./components/data-preview"
import { NormalizationEngine } from "./components/normalization-engine"
import { IntegrationResults } from "./components/integration-results"
import { AlgorithmVisualization } from "./components/algorithm-visualization"
import { PWAInstall } from "../components/pwa-install"
import { OfflineIndicator } from "../components/offline-indicator"
import { BookOpen, Database, Zap, BarChart3, Settings, Activity } from "lucide-react"
import Link from "next/link"
import { I18nProvider, useI18n } from "../lib/i18n/context"
import { HeaderLanguageSelector } from "../components/header-language-selector"
import { NotificationCenter } from "../components/notification-center"

export interface DataSet {
  id: string
  name: string
  type: "logs" | "seismic" | "production" | "core"
  data: any[]
  normalized?: any[]
  statistics?: {
    mean: number
    stdDev: number
    min: number
    max: number
  }
}

export interface UnifiedModel {
  id: string
  timestamp: string
  depth: number
  pressure: number
  temperature: number
  porosity: number
  permeability: number
  saturation: number
  source: string
  dataType: string
}

function ReservoirDataHarmonizerContent() {
  const [datasets, setDatasets] = useState<DataSet[]>([])
  const [unifiedModel, setUnifiedModel] = useState<UnifiedModel[]>([])
  const [activeTab, setActiveTab] = useState("upload")
  const [error, setError] = useState<string | null>(null)
  const { t } = useI18n()

  // Function to safely change tabs with validation
  const changeTab = (tab: string) => {
    setError(null)

    if (tab === "preview" && datasets.length === 0) {
      setError(t.home.errors.noDatasets)
      return
    }

    if (tab === "normalize" && datasets.length === 0) {
      setError(t.home.errors.beforeNormalization)
      return
    }

    if (tab === "integrate" && !datasets.some((d) => d.normalized)) {
      setError(t.home.errors.beforeIntegration)
      return
    }

    setActiveTab(tab)
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="petroleum-header sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-100">{t.home.title}</h1>
                  <p className="text-sm text-slate-400">Professional Reservoir Data Management</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded-full text-xs font-medium">
                <Activity className="h-3 w-3" />
                System Online
              </div>
              <NotificationCenter />
              <HeaderLanguageSelector />
              <Link href="/user-guide">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-slate-700/50 border-slate-600/50 text-slate-200 hover:bg-slate-600/50"
                >
                  <BookOpen className="h-4 w-4" />
                  {t.common.viewUserGuide}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="petroleum-card p-8 mb-8 fade-in">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-100 mb-3">Advanced Reservoir Data Harmonization Platform</h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">{t.home.description}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="metric-card">
              <div className="metric-value">{datasets.length}</div>
              <div className="metric-label">Active Datasets</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{datasets.filter((d) => d.normalized).length}</div>
              <div className="metric-label">Normalized</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{unifiedModel.length}</div>
              <div className="metric-label">Unified Records</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">99.7%</div>
              <div className="metric-label">Accuracy</div>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/30 text-red-300 px-6 py-4 rounded-lg mb-6 relative slide-up">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5" />
              <span>{error}</span>
            </div>
            <button className="absolute top-4 right-4 text-red-300 hover:text-red-100" onClick={() => setError(null)}>
              ×
            </button>
          </div>
        )}

        {/* Main Tabs */}
        <div className="petroleum-card p-6">
          <Tabs value={activeTab} onValueChange={changeTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-slate-800/30 p-1 rounded-lg">
              <TabsTrigger value="upload" className="petroleum-tab flex items-center gap-2">
                <Database className="h-4 w-4" />
                {t.home.tabs.upload}
              </TabsTrigger>
              <TabsTrigger
                value="preview"
                disabled={datasets.length === 0}
                className="petroleum-tab flex items-center gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                {t.home.tabs.preview}
              </TabsTrigger>
              <TabsTrigger
                value="normalize"
                disabled={datasets.length === 0}
                className="petroleum-tab flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                {t.home.tabs.normalize}
              </TabsTrigger>
              <TabsTrigger
                value="integrate"
                disabled={!datasets.some((d) => d.normalized)}
                className="petroleum-tab flex items-center gap-2"
              >
                <Zap className="h-4 w-4" />
                {t.home.tabs.integrate}
              </TabsTrigger>
              <TabsTrigger value="algorithm" className="petroleum-tab flex items-center gap-2">
                <Activity className="h-4 w-4" />
                {t.home.tabs.algorithm}
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="upload" className="fade-in">
                <DataUpload datasets={datasets} setDatasets={setDatasets} />
              </TabsContent>

              <TabsContent value="preview" className="fade-in">
                <DataPreview datasets={datasets} />
              </TabsContent>

              <TabsContent value="normalize" className="fade-in">
                <NormalizationEngine
                  datasets={datasets}
                  setDatasets={setDatasets}
                  onNext={() => changeTab("integrate")}
                />
              </TabsContent>

              <TabsContent value="integrate" className="fade-in">
                <IntegrationResults datasets={datasets} unifiedModel={unifiedModel} setUnifiedModel={setUnifiedModel} />
              </TabsContent>

              <TabsContent value="algorithm" className="fade-in">
                <AlgorithmVisualization datasets={datasets} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>

      {/* PWA Components */}
      <OfflineIndicator />
      <PWAInstall />
    </div>
  )
}

export default function ReservoirDataHarmonizer() {
  return (
    <I18nProvider defaultLanguage="en">
      <ReservoirDataHarmonizerContent />
    </I18nProvider>
  )
}
