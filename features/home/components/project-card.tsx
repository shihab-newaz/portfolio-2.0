"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type { Project, RepoStats } from "@/types"

interface ProjectCardProps {
    project: Project
    stats: RepoStats | null
}

function formatRelativeTime(dateString: string): string {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "today"
    if (diffDays === 1) return "yesterday"
    if (diffDays < 30) return `${diffDays} days ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
}
export function ProjectCard({ project, stats }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
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
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        {stats && (
                            <div className="flex items-center gap-3 text-muted-foreground text-sm">
                                <span className="flex items-center gap-1">
                                    <Star className="h-4 w-4" />
                                    {stats.stars}
                                </span>
                                <span className="flex items-center gap-1">
                                    <GitFork className="h-4 w-4" />
                                    {stats.forks}
                                </span>
                            </div>
                        )}
                    </div>
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
                    {stats?.updatedAt && (
                        <p className="text-xs text-muted-foreground mt-3">
                            Updated {formatRelativeTime(stats.updatedAt)}
                        </p>
                    )}
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
    )
}
