"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileText, Activity, BarChart3, Layers } from "lucide-react"
import type { DataSet } from "../page"
import { cleanDataset, deduplicateDataset } from "../../utils/data-cleanup"

interface DataUploadProps {
  datasets: DataSet[]
  setDatasets: (datasets: DataSet[]) => void
}

export function DataUpload({ datasets, setDatasets }: DataUploadProps) {
  const [selectedType, setSelectedType] = useState<"logs" | "seismic" | "production" | "core">("logs")
  const [fileName, setFileName] = useState("")

  const generateSampleData = (type: string) => {
    const baseData = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      depth: 1000 + i * 10,
      timestamp: new Date(Date.now() - i * 3600000).toISOString(),
    }))

    switch (type) {
      case "logs":
        return baseData.map((item) => ({
          ...item,
          gamma_ray: 50 + Math.random() * 100,
          resistivity: 10 + Math.random() * 90,
          porosity: 0.1 + Math.random() * 0.3,
        }))
      case "seismic":
        return baseData.map((item) => ({
          ...item,
          amplitude: -1 + Math.random() * 2,
          frequency: 20 + Math.random() * 60,
          velocity: 2000 + Math.random() * 2000,
        }))
      case "production":
        return baseData.map((item) => ({
          ...item,
          oil_rate: Math.random() * 1000,
          gas_rate: Math.random() * 5000,
          water_rate: Math.random() * 500,
          pressure: 2000 + Math.random() * 1000,
        }))
      case "core":
        return baseData.map((item) => ({
          ...item,
          permeability: Math.random() * 1000,
          porosity: 0.05 + Math.random() * 0.35,
          grain_density: 2.6 + Math.random() * 0.4,
          saturation: 0.3 + Math.random() * 0.7,
        }))
      default:
        return baseData
    }
  }

  const handleAddDataset = () => {
    if (!fileName.trim()) {
      // Alert could be replaced with a toast notification in a production app
      alert("Please enter a dataset name")
      return
    }

    // Check if dataset with same name already exists
    if (datasets.some((d) => d.name === fileName.trim())) {
      alert("A dataset with this name already exists. Please use a different name.")
      return
    }

    try {
      const newDataset: DataSet = {
        id: Date.now().toString(),
        name: fileName.trim(),
        type: selectedType,
        data: generateSampleData(selectedType),
      }

      setDatasets([...datasets, newDataset])
      setFileName("")
    } catch (error) {
      console.error("Error generating sample data:", error)
      alert("Failed to generate sample data. Please try again.")
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "logs":
        return <FileText className="h-5 w-5" />
      case "seismic":
        return <Activity className="h-5 w-5" />
      case "production":
        return <BarChart3 className="h-5 w-5" />
      case "core":
        return <Layers className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Dataset
          </CardTitle>
          <CardDescription>Add heterogeneous reservoir data for processing and integration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="filename">Dataset Name</Label>
            <Input
              id="filename"
              placeholder="Enter dataset name..."
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="datatype">Data Type</Label>
            <Select value={selectedType} onValueChange={(value: any) => setSelectedType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select data type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="logs">Well Logs</SelectItem>
                <SelectItem value="seismic">Seismic Data</SelectItem>
                <SelectItem value="production">Production Data</SelectItem>
                <SelectItem value="core">Core Analysis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Button onClick={handleAddDataset} className="w-full" disabled={!fileName}>
              Generate Sample Dataset
            </Button>

            {datasets.length > 0 && (
              <Button
                onClick={() => {
                  const cleanedDatasets = datasets.map((dataset) => {
                    const cleaned = cleanDataset(dataset)
                    return deduplicateDataset(cleaned)
                  })
                  setDatasets(cleanedDatasets)
                }}
                variant="outline"
                className="w-full"
              >
                Clean All Datasets
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Uploaded Datasets</CardTitle>
          <CardDescription>
            D = {`{d₁, d₂, ..., d${datasets.length}}`} - Heterogeneous datasets ready for processing
          </CardDescription>
        </CardHeader>
        <CardContent>
          {datasets.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No datasets uploaded yet. Add your first dataset to begin.
            </p>
          ) : (
            <div className="space-y-3">
              {datasets.map((dataset, index) => (
                <div key={dataset.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(dataset.type)}
                    <div>
                      <p className="font-medium">{dataset.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {dataset.type} • {dataset.data.length} records
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-mono text-muted-foreground">d₍{index + 1}₎</div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
