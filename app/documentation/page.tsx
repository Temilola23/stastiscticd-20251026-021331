import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, BarChart3, Database, TrendingUp, Info } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 text-balance">Documentation</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Learn how to use Stastiscticd for your statistical analysis needs
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Database className="w-5 h-5" />
                </div>
                <CardTitle>Getting Started</CardTitle>
              </div>
              <CardDescription>How to input your data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Data Input Methods</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Enter numbers directly in the text area, separated by commas, spaces, or new lines</li>
                  <li>Use the "Load Sample Data" button to see an example dataset</li>
                  <li>Paste data from spreadsheets or other sources</li>
                  <li>Mix different separators - the app automatically parses your input</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-mono">Example: 12, 15, 18, 22, 25, 28, 30, 35, 40, 45</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Calculator className="w-5 h-5" />
                </div>
                <CardTitle>Statistical Measures</CardTitle>
              </div>
              <CardDescription>Understanding the calculated statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Mean</h4>
                  <p className="text-sm text-muted-foreground">
                    The average of all values. Sum of all numbers divided by the count.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Median</h4>
                  <p className="text-sm text-muted-foreground">
                    The middle value when data is sorted. For even counts, it's the average of the two middle values.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    The most frequently occurring value(s) in your dataset.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Standard Deviation</h4>
                  <p className="text-sm text-muted-foreground">
                    Measures the spread of data around the mean. Higher values indicate more variation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Variance</h4>
                  <p className="text-sm text-muted-foreground">
                    The square of standard deviation. Shows how far data points are from the mean.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Range</h4>
                  <p className="text-sm text-muted-foreground">
                    The difference between the maximum and minimum values in your dataset.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <CardTitle>Data Visualization</CardTitle>
              </div>
              <CardDescription>Understanding the histogram</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The histogram displays the distribution of your data by grouping values into bins. Each bar represents
                the frequency of values within a specific range.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">How to Read the Histogram:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>The x-axis shows the value ranges (bins)</li>
                  <li>The y-axis shows how many data points fall within each range</li>
                  <li>Taller bars indicate more values in that range</li>
                  <li>The shape reveals patterns like normal distribution, skewness, or outliers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <CardTitle>Best Practices</CardTitle>
              </div>
              <CardDescription>Tips for accurate analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ensure your data contains only numeric values for accurate calculations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Remove any outliers or errors before analysis if they don't represent valid data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use at least 10-20 data points for meaningful statistical analysis</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Consider the context of your data when interpreting results</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Compare multiple statistical measures together for a complete picture</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <Info className="w-5 h-5" />
                </div>
                <CardTitle>Common Use Cases</CardTitle>
              </div>
              <CardDescription>When to use Stastiscticd</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Academic Research</h4>
                  <p className="text-sm text-muted-foreground">
                    Analyze experimental data, survey results, and research findings quickly.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Business Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Evaluate sales figures, customer metrics, and performance indicators.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Quality Control</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor manufacturing processes and product consistency.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn statistical concepts with immediate visual feedback.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
