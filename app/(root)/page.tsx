import { HeroSection } from "@/app/(root)/components/sections/hero-section"
import { AboutSection } from "@/app/(root)/components/sections/about-section"
import { ProjectsSection } from "@/app/(root)/components/sections/projects-section"
import { ExperienceSection } from "@/app/(root)/components/sections/experience-section"
import { SkillsSection } from "@/app/(root)/components/sections/skills-section"
import { ContactSection } from "@/app/(root)/components/sections/contact-section"
import { Footer } from "@/app/(root)/components/footer"
import { Navigation } from "@/app/(root)/components/navigation"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
