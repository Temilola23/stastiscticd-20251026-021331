import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Zap, Shield, Users, Sparkles, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 text-balance">About Stastiscticd</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Making statistical analysis accessible, fast, and beautiful
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Stastiscticd was created with a simple yet powerful vision: to democratize statistical analysis by
                making it accessible to everyone, regardless of their technical background or access to expensive
                software.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that data-driven decision making shouldn't be limited to those with advanced statistical
                software or programming knowledge. Whether you're a student learning statistics, a researcher analyzing
                experimental data, or a business professional evaluating metrics, Stastiscticd provides the tools you
                need in a clean, intuitive interface.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <Zap className="w-5 h-5" />
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Get instant results as you type. No waiting, no loading screens. Our optimized algorithms calculate
                  statistics in real-time, providing immediate feedback for your data analysis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <Shield className="w-5 h-5" />
                  </div>
                  <CardTitle>Privacy First</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your data never leaves your browser. All calculations happen locally on your device, ensuring complete
                  privacy and security for sensitive information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <CardTitle>Beautiful Design</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Statistical analysis doesn't have to be boring. We've crafted a modern, elegant interface with dark
                  mode support that makes working with data a pleasure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <Users className="w-5 h-5" />
                  </div>
                  <CardTitle>For Everyone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  From students to professionals, researchers to analysts - Stastiscticd is designed to be intuitive
                  enough for beginners yet powerful enough for advanced users.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What We Offer</CardTitle>
              <CardDescription>Comprehensive statistical analysis tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Descriptive Statistics</h4>
                  <p className="text-sm text-muted-foreground">
                    Mean, median, mode, standard deviation, variance, and more
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Data Visualization</h4>
                  <p className="text-sm text-muted-foreground">
                    Interactive histograms to understand your data distribution
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Real-time Analysis</h4>
                  <p className="text-sm text-muted-foreground">Instant calculations as you input or modify your data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Simplicity Without Sacrifice</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We believe powerful tools don't have to be complicated. Stastiscticd provides professional-grade
                      statistical analysis through an interface that anyone can understand.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Built with Care</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every feature, every interaction, and every pixel has been thoughtfully designed to create the
                      best possible experience for statistical analysis.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <h3 className="text-xl font-semibold">Ready to analyze your data?</h3>
                <p className="text-muted-foreground">
                  Start using Stastiscticd today and experience statistical analysis the way it should be.
                </p>
                <div className="pt-2">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
