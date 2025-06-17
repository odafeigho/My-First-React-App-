"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown } from "lucide-react"
import type { DataSet } from "../page"

interface AlgorithmVisualizationProps {
  datasets: DataSet[]
}

export function AlgorithmVisualization({ datasets }: AlgorithmVisualizationProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Core Algorithm Visualization</CardTitle>
          <CardDescription>Mathematical representation of the data harmonization process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Heterogeneous Datasets */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 1: Heterogeneous Datasets (D)</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-center mb-4">
                <code className="text-lg">D = {`{d₁, d₂, ..., d${datasets.length}}`}</code>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {datasets.map((dataset, index) => (
                  <div key={dataset.id} className="border rounded-lg p-3 bg-white">
                    <div className="text-center">
                      <Badge variant="secondary" className="mb-2">
                        d₍{index + 1}₎
                      </Badge>
                      <p className="font-medium text-sm">{dataset.name}</p>
                      <p className="text-xs text-muted-foreground">{dataset.type}</p>
                      <p className="text-xs text-muted-foreground">{dataset.data.length} records</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />

          {/* Step 2: Normalization */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 2: Data Normalization</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-center mb-4">
                <code className="text-lg">
                  d<sub>i</sub>
                  <sup>norm</sup> = (d<sub>i</sub> - μ<sub>i</sub>) / σ<sub>i</sub>
                </code>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <p className="font-medium">μᵢ (Mean)</p>
                  <p className="text-muted-foreground">Central tendency of dataset i</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">σᵢ (Standard Deviation)</p>
                  <p className="text-muted-foreground">Spread of dataset i</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">dᵢⁿᵒʳᵐ (Normalized)</p>
                  <p className="text-muted-foreground">Standardized values</p>
                </div>
              </div>
            </div>
          </div>

          <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />

          {/* Step 3: Transformation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 3: Schema Transformation (T)</h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-center mb-4">
                <code className="text-lg">T(dᵢⁿᵒʳᵐ) → Unified Schema</code>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center p-2 border rounded bg-white">
                  <p className="font-medium">Logs</p>
                  <p className="text-xs">→ Porosity, Pressure</p>
                </div>
                <div className="text-center p-2 border rounded bg-white">
                  <p className="font-medium">Seismic</p>
                  <p className="text-xs">→ Pressure, Temperature</p>
                </div>
                <div className="text-center p-2 border rounded bg-white">
                  <p className="font-medium">Production</p>
                  <p className="text-xs">→ Pressure, Temperature</p>
                </div>
                <div className="text-center p-2 border rounded bg-white">
                  <p className="font-medium">Core</p>
                  <p className="text-xs">→ Porosity, Permeability</p>
                </div>
              </div>
            </div>
          </div>

          <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />

          {/* Step 4: Integration */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 4: Data Integration (M)</h3>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-center mb-4">
                <code className="text-lg">M = ⋃ᵢ₌₁ⁿ T(dᵢⁿᵒʳᵐ)</code>
              </div>
              <div className="text-center">
                <div className="inline-block border rounded-lg p-4 bg-white">
                  <p className="font-medium mb-2">Unified Reservoir Model</p>
                  <div className="text-xs text-left space-y-1">
                    <p>• Timestamp</p>
                    <p>• Depth</p>
                    <p>• Pressure</p>
                    <p>• Temperature</p>
                    <p>• Porosity</p>
                    <p>• Permeability</p>
                    <p>• Saturation</p>
                    <p>• Source & Type</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Algorithm Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Data Quality Improvements</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Eliminates scale differences between datasets</li>
                <li>• Standardizes measurement units</li>
                <li>• Reduces noise and outliers</li>
                <li>• Ensures statistical consistency</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Integration Advantages</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Unified schema for all data types</li>
                <li>• Preserves data lineage and source</li>
                <li>• Enables cross-domain analysis</li>
                <li>• Supports machine learning workflows</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
