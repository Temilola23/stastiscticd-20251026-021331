"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"
import { useDataStore } from "@/lib/store"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function DataVisualization() {
  const { data } = useDataStore()

  if (data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Data Visualization
          </CardTitle>
          <CardDescription>Visual representation of your data distribution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-[300px] text-muted-foreground">
            <p className="text-sm">No data to visualize</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Create histogram data
  const min = Math.min(...data)
  const max = Math.max(...data)
  const binCount = Math.min(10, Math.ceil(Math.sqrt(data.length)))
  const binSize = (max - min) / binCount

  const bins = Array.from({ length: binCount }, (_, i) => {
    const binStart = min + i * binSize
    const binEnd = binStart + binSize
    const count = data.filter((d) => d >= binStart && (i === binCount - 1 ? d <= binEnd : d < binEnd)).length
    return {
      range: `${binStart.toFixed(1)}-${binEnd.toFixed(1)}`,
      count,
      binStart,
    }
  })

  const chartConfig = {
    count: {
      label: "Frequency",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Data Visualization
        </CardTitle>
        <CardDescription>Histogram showing the distribution of your data</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bins}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="range" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
