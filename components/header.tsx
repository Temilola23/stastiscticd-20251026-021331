import { BarChart3 } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">Stastiscticd</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Analysis
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Documentation
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
