import { Header } from "@/components/header"
import { DataInput } from "@/components/data-input"
import { StatsDisplay } from "@/components/stats-display"
import { DataVisualization } from "@/components/data-visualization"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Statistical Analysis Made Simple
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Perform comprehensive statistical analysis on your data with instant calculations and beautiful
              visualizations
            </p>
          </section>

          <div className="grid gap-8 lg:grid-cols-2">
            <DataInput />
            <div className="space-y-8">
              <StatsDisplay />
              <DataVisualization />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
