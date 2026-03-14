"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { InsightSection } from "@/components/insight-section"
import { ResultsSection } from "@/components/results-section"
import { CaseStudySection } from "@/components/case-study-section"
import { ApproachSection } from "@/components/approach-section"
import { AboutSection } from "@/components/about-section"
import { ClientsSection } from "@/components/clients-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <InsightSection />
        <ResultsSection />
        <CaseStudySection />
        <ApproachSection />
        <AboutSection />
        <ClientsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
