import { Suspense } from "react"
import { HeroSection } from "@/features/home/components/hero-section"
import { AboutSection } from "@/features/home/components/about-section"
import { ProjectsSection } from "@/features/home/components/projects-section"
import { ExperienceSection } from "@/features/home/components/experience-section"
import { SkillsSection } from "@/features/home/components/skills-section"
import { ContactSection } from "@/features/home/components/contact-section"
import { Footer } from "@/components/layout/footer"
import { Navigation } from "@/components/layout/navigation"
import { ProjectsSkeleton } from "@/components/shared/project-skeleton"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectsSection />
        </Suspense>
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}