import { HeroSection } from "@/components/hero-section"
import { ProofStrip } from "@/components/proof-strip"
import { AboutSection } from "@/components/about-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { TimelineSection } from "@/components/timeline-section"
import { TechStackSection } from "@/components/tech-stack"
import { CtaSection } from "@/components/cta-section"
import { ThemeToggle } from "@/components/ui/theme-toggle"

function App() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <ProofStrip />
      <AboutSection />
      <ExpertiseSection />
      <TimelineSection />
      <TechStackSection />
      <CtaSection />

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t">
        <p>© {new Date().getFullYear()} Jonathan Hofmann. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
