"use client"

import { projects } from "@/constants/projects"
import { getRepoStats } from "@/services/github.service"
import { parseGitHubUrl } from "@/lib/github"
import { ProjectCard } from "./project-card"
import { AnimatedSection } from "@/components/shared/animated-section"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const [projectsWithStats, setProjectsWithStats] = useState<any[]>([])
  const controls = useAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    Promise.all(
      projects.map(async (project) => {
        const parsed = parseGitHubUrl(project.github)
        const stats = parsed ? await getRepoStats(parsed.owner, parsed.repo) : null
        return { ...project, stats }
      })
    ).then(setProjectsWithStats)
  }, [])

  const cardWidth = 400
  const gap = 32

  const scrollLeft = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      controls.start({ x: -(newIndex * (cardWidth + gap)) })
    }
  }

  const scrollRight = () => {
    if (currentIndex < projectsWithStats.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      controls.start({ x: -(newIndex * (cardWidth + gap)) })
    }
  }

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of my notable projects that showcase my skills and expertise.
            </p>
          </div>
        </AnimatedSection>
        <div className="relative py-12">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
            onClick={scrollLeft}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="overflow-hidden mx-12">
            <motion.div
              animate={controls}
              transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
              drag="x"
              dragConstraints={{ left: -((projectsWithStats.length - 1) * (cardWidth + gap)), right: 0 }}
              onDragEnd={(_, info) => {
                const offset = info.offset.x
                const velocity = info.velocity.x
                const swipeThreshold = 50

                if (offset < -swipeThreshold || velocity < -500) {
                  scrollRight()
                } else if (offset > swipeThreshold || velocity > 500) {
                  scrollLeft()
                } else {
                  controls.start({ x: -(currentIndex * (cardWidth + gap)) })
                }
              }}
              className="flex gap-8 cursor-grab active:cursor-grabbing"
            >
              {projectsWithStats.map((project, index) => (
                <div key={index} className="min-w-[400px] max-w-[400px]">
                  <ProjectCard project={project} stats={project.stats} />
                </div>
              ))}
            </motion.div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
            onClick={scrollRight}
            disabled={currentIndex === projectsWithStats.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
