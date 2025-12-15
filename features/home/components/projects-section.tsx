"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/constants/projects"
import { AnimatedList, AnimatedListItem } from "@/components/shared/animated-list"
import { AnimatedSection } from "@/components/shared/animated-section"
import { motion } from "framer-motion"

export function ProjectsSection() {
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
        <AnimatedList className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedListItem key={index}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm h-full">
                  <CardHeader className="p-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      width={600}
                      height={300}
                      alt={project.title}
                      className="w-full object-cover h-48"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 pt-0">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} className="gap-1">
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </div>
    </section>
  )
}
