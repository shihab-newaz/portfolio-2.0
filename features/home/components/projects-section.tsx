import { projects } from "@/constants/projects"
import { getRepoStats } from "@/actions/github.action"
import { parseGitHubUrl } from "@/lib/github"
import { ProjectCard } from "./project-card"
import { AnimatedSection } from "@/components/shared/animated-section"

export async function ProjectsSection() {
  const projectsWithStats = await Promise.all(
    projects.map(async (project) => {
      const parsed = parseGitHubUrl(project.github)
      const stats = parsed ? await getRepoStats(parsed.owner, parsed.repo) : null
      return { ...project, stats }
    })
  )

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
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          {projectsWithStats.map((project, index) => (
            <ProjectCard key={index} project={project} stats={project.stats} />
          ))}
        </div>
      </div>
    </section>
  )
}
