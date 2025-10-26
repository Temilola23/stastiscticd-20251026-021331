"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Activity, Target, Sigma } from "lucide-react"
import { useDataStore } from "@/lib/store"
import { calculateStats } from "@/lib/statistics"

export function StatsDisplay() {
  const { data } = useDataStore()

  if (data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Descriptive Statistics
          </CardTitle>
          <CardDescription>Statistics will appear here after you analyze your data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-[200px] text-muted-foreground">
            <p className="text-sm">No data to display</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const stats = calculateStats(data)

  const statItems = [
    { label: "Mean", value: stats.mean, icon: Target, description: "Average value" },
    { label: "Median", value: stats.median, icon: Activity, description: "Middle value" },
    { label: "Mode", value: stats.mode, icon: TrendingUp, description: "Most frequent" },
    { label: "Std Dev", value: stats.stdDev, icon: Sigma, description: "Spread of data" },
    { label: "Variance", value: stats.variance, icon: Sigma, description: "Data variability" },
    { label: "Range", value: stats.range, icon: Activity, description: "Max - Min" },
    { label: "Min", value: stats.min, icon: Activity, description: "Minimum value" },
    { label: "Max", value: stats.max, icon: Activity, description: "Maximum value" },
    { label: "Count", value: stats.count, icon: Sigma, description: "Sample size", isInteger: true },
    { label: "Sum", value: stats.sum, icon: Sigma, description: "Total sum" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Descriptive Statistics
        </CardTitle>
        <CardDescription>Comprehensive statistical analysis of your dataset</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {statItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-bold">{item.isInteger ? item.value : item.value.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
