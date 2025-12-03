"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">House Whisperer</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.loom.com/share/024151e3afe44348a082548262590768"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary transition hidden sm:inline"
            >
              Demo
            </Link>
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="https://house-whisperer-demoday.vercel.app/" target="_blank" rel="noopener noreferrer">
                Try Now
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero: The Problem & Vision */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Turn inspections into <span className="text-primary">data that lives forever</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance mb-8">
            Inspectors generate 50-page PDFs that disappear after the sale. We're building the CarFax for houses—a
            permanent digital twin that compounds in value with every inspection.
          </p>
          <div className="flex gap-3 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2" asChild>
              <Link
                href="https://www.loom.com/share/024151e3afe44348a082548262590768"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Immediate Problem & Solution */}
      <section className="bg-secondary/5 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">The Problem Today</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    Inspectors spend <strong>1-3 hours</strong> writing one report
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Reports are 50-page PDFs full of jargon buyers don't understand</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Critical inspection data is lost after closing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Industry still uses templates from the 1990s</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Solution</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Inspector records voice notes + photos</p>
                  <p className="text-sm text-muted-foreground">During the inspection, not at the desk</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-primary mb-1">AI generates compliant reports in minutes</p>
                  <p className="text-sm text-muted-foreground">InterNACHI & ASHI standards built in</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-primary mb-1">Data captured and preserved</p>
                  <p className="text-sm text-muted-foreground">Becomes the home's permanent record</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded border border-primary/20">
                <p className="text-sm font-semibold text-primary mb-1">Result</p>
                <p className="text-foreground">
                  Inspectors save <strong>1-2+ hours</strong> per report. The data never disappears.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Long-Term Vision */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">The Real Opportunity</h2>
            <p className="text-lg text-muted-foreground">
              One inspection isn't worth much.{" "}
              <span className="font-semibold">A home's inspection history is invaluable.</span>
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">For Buyers</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive dashboards that explain inspections in plain English. Track repairs over time.
                </p>
              </div>
              <div>
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">For Real Estate Agents</h3>
                <p className="text-sm text-muted-foreground">
                  Lifetime property records that follow homes through multiple sales. Competitive advantage.
                </p>
              </div>
              <div>
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">For Insurers & Service Providers</h3>
                <p className="text-sm text-muted-foreground">
                  Structured, machine-readable home data powers risk models and maintenance recommendations.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/20 text-center">
              <p className="text-muted-foreground mb-3">
                <strong>The network effect:</strong> More inspections → Better data → More valuable to everyone → More
                users
              </p>
              <p className="text-sm font-semibold text-primary">
                We're not automating report writing. We're building real estate's data layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="bg-secondary/5 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why This Works Now</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-sm font-semibold text-primary mb-2">Multimodal AI</p>
              <p className="text-muted-foreground">
                GPT-4o, Whisper, and RAG make voice + photo report generation accurate and affordable
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-sm font-semibold text-primary mb-2">Regulatory Clarity</p>
              <p className="text-muted-foreground">
                InterNACHI & ASHI standards are the data schema. Compliance is a feature, not a blocker.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-sm font-semibold text-primary mb-2">Massive Friction</p>
              <p className="text-muted-foreground">
                1-3 hours of desk work per inspection = inspectors will pay for solutions immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Progress</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-4xl font-bold text-primary mb-2">4 weeks</p>
              <p className="text-muted-foreground">Built and launched MVP with working AI report generation</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-4xl font-bold text-primary mb-2">5 pilots</p>
              <p className="text-muted-foreground">Onboarding inspectors in Charlotte & NYC this month</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-4xl font-bold text-primary mb-2">In Progress</p>
              <p className="text-muted-foreground">Realtor and Buyer console build in progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to see it work?</h2>
          <p className="text-lg mb-8 opacity-90">
            Watch a 2-minute demo or try the live app with sample inspection data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link
                href="https://www.loom.com/share/024151e3afe44348a082548262590768"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Demo
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="https://house-whisperer-demoday.vercel.app/" target="_blank" rel="noopener noreferrer">
                Live App
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-muted-foreground">
          <p className="mb-3">House Whisperer | AI-powered home inspection platform</p>
          <p className="mb-4">Building the CarFax for houses. One inspection at a time.</p>
          <p>
            Questions? Reach out at{" "}
            <a href="mailto:raghu.challapilla@alumni.ie.edu" className="text-primary hover:underline">
              raghu.challapilla@alumni.ie.edu
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
