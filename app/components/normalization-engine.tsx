"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Play, TrendingUp } from "lucide-react"
import type { DataSet } from "../page"
import { validateDataset } from "../../utils/data-validation"
import { useProcessingNotifications } from "../../hooks/use-processing-notifications"

interface NormalizationEngineProps {
  datasets: DataSet[]
  setDatasets: (datasets: DataSet[]) => void
  onNext: () => void
}

export function NormalizationEngine({ datasets, setDatasets, onNext }: NormalizationEngineProps) {
  const [isNormalizing, setIsNormalizing] = useState(false)
  const [progress, setProgress] = useState(0)

  // Add notification hooks
  const { notifyNormalizationStart, notifyNormalizationProgress, notifyNormalizationComplete, notifyError } =
    useProcessingNotifications()

  const calculateStatistics = (data: any[], field: string) => {
    const values = data.map((item) => item[field]).filter((val) => typeof val === "number" && !isNaN(val))

    if (values.length === 0) {
      return { mean: 0, stdDev: 1, min: 0, max: 0 } // Default values to avoid division by zero
    }

    const mean = values.reduce((sum, val) => sum + val, 0) / values.length
    const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length
    const stdDev = Math.sqrt(variance) || 1 // Use 1 if stdDev is 0 to avoid division by zero
    const min = Math.min(...values)
    const max = Math.max(...values)

    return { mean, stdDev, min, max }
  }

  const normalizeDataset = (dataset: DataSet) => {
    try {
      if (!dataset.data || dataset.data.length === 0 || !dataset.data[0]) {
        throw new Error("Dataset is empty or invalid")
      }

      const numericFields = Object.keys(dataset.data[0]).filter(
        (key) => typeof dataset.data[0][key] === "number" && key !== "id",
      )

      if (numericFields.length === 0) {
        throw new Error("No numeric fields found for normalization")
      }

      const normalizedData = dataset.data.map((item) => {
        const normalizedItem = { ...item }

        numericFields.forEach((field) => {
          const stats = calculateStatistics(dataset.data, field)
          // Apply normalization formula: (x - μ) / σ
          normalizedItem[`${field}_norm`] = (item[field] - stats.mean) / stats.stdDev
        })

        return normalizedItem
      })

      return {
        ...dataset,
        normalized: normalizedData,
        statistics: calculateStatistics(dataset.data, numericFields[0]),
      }
    } catch (error) {
      console.error(`Error normalizing dataset ${dataset.name}:`, error)
      // Return the original dataset without normalization
      return dataset
    }
  }

  // Update the handleNormalization function to include notifications
  const handleNormalization = async () => {
    setIsNormalizing(true)
    setProgress(0)

    // Notify start
    notifyNormalizationStart(datasets.length)

    const normalizedDatasets = []

    for (let i = 0; i < datasets.length; i++) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Validate dataset before normalization
        const validationResults = validateDataset(datasets[i])

        // Proceed with normalization even if there are warnings
        const normalized = normalizeDataset(datasets[i])

        // Add validation results to the dataset
        normalized.validationResults = validationResults

        normalizedDatasets.push(normalized)

        const currentProgress = ((i + 1) / datasets.length) * 100
        setProgress(currentProgress)

        // Notify progress
        notifyNormalizationProgress(currentProgress, datasets[i].name)
      } catch (error) {
        console.error(`Error normalizing dataset ${datasets[i].name}:`, error)
        notifyError("Normalization", `Failed to normalize ${datasets[i].name}`, datasets[i].name)
      }
    }

    setDatasets(normalizedDatasets)
    setIsNormalizing(false)

    // Notify completion
    notifyNormalizationComplete(normalizedDatasets.length)
  }

  const allNormalized = datasets.every((d) => d.normalized)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Data Normalization Engine
          </CardTitle>
          <CardDescription>
            Apply the normalization algorithm: d<sub>i</sub>
            <sup>norm</sup> = (d<sub>i</sub> - μ<sub>i</sub>) / σ<sub>i</sub>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isNormalizing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Normalizing datasets...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}

          <div className="flex gap-4">
            <Button
              onClick={handleNormalization}
              disabled={datasets.length === 0 || isNormalizing}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              {isNormalizing ? "Normalizing..." : "Start Normalization"}
            </Button>

            {allNormalized && (
              <Button onClick={onNext} variant="outline">
                Proceed to Integration →
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {datasets.map((dataset, index) => (
          <Card key={dataset.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{dataset.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">d₍{index + 1}₎</Badge>
                  {dataset.normalized && (
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Normalized
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {dataset.statistics && (
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">Mean (μ):</span>
                      <span className="ml-2 font-mono">{dataset.statistics.mean.toFixed(3)}</span>
                    </div>
                    <div>
                      <span className="font-medium">Std Dev (σ):</span>
                      <span className="ml-2 font-mono">{dataset.statistics.stdDev.toFixed(3)}</span>
                    </div>
                    <div>
                      <span className="font-medium">Min:</span>
                      <span className="ml-2 font-mono">{dataset.statistics.min.toFixed(3)}</span>
                    </div>
                    <div>
                      <span className="font-medium">Max:</span>
                      <span className="ml-2 font-mono">{dataset.statistics.max.toFixed(3)}</span>
                    </div>
                  </div>
                </div>
              )}

              {!dataset.normalized && <p className="text-muted-foreground text-sm mt-2">Ready for normalization</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
