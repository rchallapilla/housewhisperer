"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BarChart3,
  Home as HomeIcon,
  Building2,
  Shield,
  Clock,
  FileText,
  Database,
  Calendar,
  Sparkles,
  CheckCircle2,
  Zap,
  TrendingUp,
  ExternalLink,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">House Whisperer</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.loom.com/share/024151e3afe44348a082548262590768"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden sm:inline-flex items-center gap-1"
              >
                Demo
              </Link>
              <div className="flex items-center gap-2">
                <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-sm" asChild>
                  <Link href="https://house-whisperer-demoday.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Join Pilot
                  </Link>
                </Button>
                <Badge variant="secondary" className="text-xs hidden sm:inline-flex">Pilot Program</Badge>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero: Inspector-Focused */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Home Inspections</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight tracking-tight">
              Save{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                1-3 hours
              </span>{" "}
              per inspection
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Record voice notes during inspections. AI generates compliant reports in minutes—not hours. InterNACHI & ASHI standards built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 gap-2 group" asChild>
                <Link href="https://house-whisperer-demoday.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Join the Pilot <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link
                  href="https://www.loom.com/share/024151e3afe44348a082548262590768"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Demo
                </Link>
              </Button>
            </div>
            <div className="flex justify-center pt-2">
              <Badge variant="secondary" className="text-xs">Pilot Program • Free for First 10 Inspectors</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Video Embed Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="secondary" className="mb-2">Watch the Demo</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">See It In Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch how House Whisperer transforms home inspections into living digital records in just minutes.
            </p>
          </div>

          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: "54.375%" }}>
                <iframe
                  src="https://www.loom.com/embed/024151e3afe44348a082548262590768"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="House Whisperer Demo Video"
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8 space-y-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-md gap-2" asChild>
              <Link href="https://house-whisperer-demoday.vercel.app/" target="_blank" rel="noopener noreferrer">
                Join the Pilot <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">Free for first 10 inspectors • No signup required</p>
          </div>
        </div>
      </section>

      {/* The Immediate Problem & Solution */}
      <section className="py-16 sm:py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Problem */}
            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">The Problem Today</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <Clock className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Inspectors spend <strong className="text-primary">1-3 hours</strong> writing one report
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <FileText className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-foreground">
                      Reports are 50-page PDFs full of jargon buyers don't understand
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <Database className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-foreground">Critical inspection data is lost after closing</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <Calendar className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-foreground">Industry still uses templates from the 1990s</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">Our Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <p className="font-semibold text-primary">Inspector records voice notes + photos</p>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">During the inspection, not at the desk</p>
                </div>
                <div className="border-t border-primary/20 pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <p className="font-semibold text-primary">AI generates compliant reports in minutes</p>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">InterNACHI & ASHI standards built in</p>
                </div>
                <div className="border-t border-primary/20 pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <p className="font-semibold text-primary">Data captured and preserved</p>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">Becomes the home's permanent record</p>
                </div>
                <Card className="mt-6 bg-primary/10 border-primary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">Result</p>
                        <p className="text-foreground">
                          Inspectors save <strong className="text-primary">1-3 hours</strong> per report. The data
                          never disappears.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 sm:py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why This Works Now</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The perfect convergence of technology, regulation, and market need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Multimodal AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  GPT-4o, Whisper, and RAG make voice + photo report generation accurate and affordable
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Regulatory Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  InterNACHI & ASHI standards are the data schema. Compliance is a feature, not a blocker.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Massive Friction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  1-3 hours of desk work per inspection = inspectors will pay for solutions immediately
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Inspectors - Pilot Program */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="default" className="mb-2">For Inspectors</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Join Our Pilot Program</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Save 1-3 hours per inspection. Free during pilot phase. No signup required—just use the app with your login.
            </p>
          </div>

          <Card className="border-2 border-primary/30 bg-card shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Early Access to AI Report Generation</p>
                    <p className="text-sm text-muted-foreground">
                      Be among the first to experience voice-to-report automation that saves hours per inspection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Free During Pilot Phase</p>
                    <p className="text-sm text-muted-foreground">
                      No cost to you. We're building this with you, and your feedback shapes the product.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Direct Feedback Channel</p>
                    <p className="text-sm text-muted-foreground">
                      Your voice matters. Help us build the tool that works best for real inspectors.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/20">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                    <p className="text-sm font-semibold text-primary mb-2">Limited Pilot Spots</p>
                    <p className="text-foreground font-bold text-2xl mb-1">First 10 Inspectors</p>
                    <p className="text-xs text-muted-foreground">Free access for early adopters</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg gap-2 group" asChild>
                    <Link href="https://house-whisperer-demoday.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Join the Pilot <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <Link
                      href="https://www.loom.com/share/024151e3afe44348a082548262590768"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Demo First
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Traction */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Progress</h2>
            <p className="text-lg text-muted-foreground">Building the future of home inspections</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:scale-105">
              <CardHeader>
                <div className="text-5xl sm:text-6xl font-bold text-primary mb-4">4</div>
                <CardTitle className="text-xl">Weeks to MVP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built and launched MVP with working AI report generation
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:scale-105">
              <CardHeader>
                <div className="text-5xl sm:text-6xl font-bold text-primary mb-4">5</div>
                <CardTitle className="text-xl">Active Pilots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Onboarding inspectors in Charlotte & NYC this month</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:scale-105">
              <CardHeader>
                <div className="text-5xl sm:text-6xl font-bold text-primary mb-4">∞</div>
                <CardTitle className="text-xl">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Realtor and Buyer console build in progress</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Long-Term Vision */}
      <section className="py-16 sm:py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">The Bigger Picture</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              One inspection isn't worth much.{" "}
              <span className="font-semibold text-foreground">A home's inspection history is invaluable.</span>
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 shadow-xl">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                <Card className="bg-card/50 backdrop-blur-sm border hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <HomeIcon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">For Buyers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Interactive dashboards that explain inspections in plain English. Track repairs over time.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">For Real Estate Agents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Lifetime property records that follow homes through multiple sales. Competitive advantage.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">For Insurers & Service Providers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Structured, machine-readable home data powers risk models and maintenance recommendations.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/20 text-center space-y-3">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">The network effect:</strong> More inspections → Better data →
                  More valuable to everyone → More users
                </p>
                <p className="text-sm font-semibold text-primary">
                  We're not automating report writing. We're building real estate's data layer.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Ready to join the pilot?</h2>
            <p className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto">
              Join our pilot program and start saving 1-3 hours per inspection. Free for first 10 inspectors.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl gap-2 group"
              asChild
            >
              <Link href="https://house-whisperer-demoday.vercel.app/" target="_blank" rel="noopener noreferrer">
                Join the Pilot <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent shadow-lg"
              asChild
            >
              <Link
                href="https://www.loom.com/share/024151e3afe44348a082548262590768"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Demo First
              </Link>
            </Button>
          </div>
          <p className="text-sm opacity-90">No signup required • Just use the app with your login</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">House Whisperer</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered home inspection platform. Building the CarFax for houses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="https://house-whisperer-demoday.vercel.app/" className="hover:text-primary transition-colors">
                    Join the Pilot
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.loom.com/share/024151e3afe44348a082548262590768"
                    className="hover:text-primary transition-colors"
                  >
                    Watch Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Questions? Reach out at{" "}
                <a
                  href="mailto:raghu.challapilla@alumni.ie.edu"
                  className="text-primary hover:underline font-medium"
                >
                  raghu.challapilla@alumni.ie.edu
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Built by</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 overflow-hidden flex-shrink-0 bg-muted">
                    <img
                      src="/founders/raghu.png"
                      alt="Raghu Challapilla"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = "none"
                        e.currentTarget.parentElement!.innerHTML =
                          '<div class="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">RC</div>'
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium">Raghu Challapilla</p>
                    <p className="text-muted-foreground text-xs mb-1">Co-Founder</p>
                    <a
                      href="https://www.linkedin.com/in/raghuscrum/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1 text-xs"
                    >
                      LinkedIn <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 overflow-hidden flex-shrink-0 bg-muted">
                    <img
                      src="/founders/nilay.png"
                      alt="Nilay Jhaveri"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.style.display = "none"
                        e.currentTarget.parentElement!.innerHTML =
                          '<div class="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">NJ</div>'
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium">Nilay Jhaveri</p>
                    <p className="text-muted-foreground text-xs mb-1">Co-Founder</p>
                    <a
                      href="https://www.linkedin.com/in/nilay320/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1 text-xs"
                    >
                      LinkedIn <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} House Whisperer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
