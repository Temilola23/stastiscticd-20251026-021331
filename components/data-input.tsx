"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calculator, Upload, Trash2 } from "lucide-react"
import { useDataStore } from "@/lib/store"

export function DataInput() {
  const [inputValue, setInputValue] = useState("")
  const { setData, clearData } = useDataStore()
  const [error, setError] = useState("")

  const handleAnalyze = () => {
    setError("")

    if (!inputValue.trim()) {
      setError("Please enter some data to analyze")
      return
    }

    // Parse comma or space separated numbers
    const numbers = inputValue
      .split(/[\s,]+/)
      .map((s) => s.trim())
      .filter((s) => s !== "")
      .map((s) => Number.parseFloat(s))
      .filter((n) => !isNaN(n))

    if (numbers.length === 0) {
      setError("No valid numbers found. Please enter numeric values separated by commas or spaces.")
      return
    }

    if (numbers.length < 2) {
      setError("Please enter at least 2 numbers for statistical analysis")
      return
    }

    setData(numbers)
  }

  const handleClear = () => {
    setInputValue("")
    setError("")
    clearData()
  }

  const handleSampleData = () => {
    const sampleData = "23, 45, 67, 34, 89, 12, 56, 78, 90, 43, 21, 65, 87, 32, 54, 76, 98, 11, 33, 55"
    setInputValue(sampleData)
    setError("")
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Data Input
        </CardTitle>
        <CardDescription>Enter your numeric data separated by commas or spaces</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="data-input">Your Data</Label>
          <Textarea
            id="data-input"
            placeholder="e.g., 12, 45, 67, 23, 89, 34, 56, 78..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="min-h-[200px] font-mono text-sm"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button onClick={handleAnalyze} className="flex-1 min-w-[120px]">
            <Calculator className="w-4 h-4 mr-2" />
            Analyze
          </Button>
          <Button onClick={handleClear} variant="outline" className="flex-1 min-w-[120px] bg-transparent">
            <Trash2 className="w-4 h-4 mr-2" />
            Clear
          </Button>
        </div>

        <Button onClick={handleSampleData} variant="secondary" className="w-full">
          Load Sample Data
        </Button>
      </CardContent>
    </Card>
  )
}
