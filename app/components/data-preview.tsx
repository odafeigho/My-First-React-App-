"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import type { DataSet } from "../page"

interface DataPreviewProps {
  datasets: DataSet[]
}

export function DataPreview({ datasets }: DataPreviewProps) {
  if (datasets.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <p className="text-muted-foreground">No datasets available for preview. Please upload data first.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {datasets.map((dataset) => {
        // Check if dataset has data
        if (!dataset.data || dataset.data.length === 0) {
          return (
            <Card key={dataset.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {dataset.name}
                  <Badge variant="secondary">{dataset.type}</Badge>
                </CardTitle>
                <CardDescription>Empty dataset</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">This dataset contains no records.</p>
              </CardContent>
            </Card>
          )
        }

        // Get available fields from the first record
        const fields = Object.keys(dataset.data[0] || {}).slice(0, 6)

        return (
          <Card key={dataset.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {dataset.name}
                    <Badge variant="secondary">{dataset.type}</Badge>
                  </CardTitle>
                  <CardDescription>{dataset.data.length} records • Raw heterogeneous data</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {fields.map((key) => (
                        <TableHead key={key} className="font-medium">
                          {key.replace("_", " ").toUpperCase()}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dataset.data.slice(0, 5).map((row, index) => (
                      <TableRow key={index}>
                        {fields.map((field, cellIndex) => {
                          const value = row[field]
                          return (
                            <TableCell key={cellIndex} className="font-mono text-sm">
                              {typeof value === "number" ? (!isNaN(value) ? value.toFixed(2) : "N/A") : value || "N/A"}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Showing first 5 rows of {dataset.data.length} total records
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
