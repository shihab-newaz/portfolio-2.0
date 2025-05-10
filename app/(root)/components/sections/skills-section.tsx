"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Cpu, Brain } from "lucide-react"
import { skills } from "@/constants/skills"
import { AnimatedSection } from "@/app/(root)/components/ui/animated-section"
import { motion } from "framer-motion"
import { useState } from "react"

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My expertise across different technology domains.
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <TabsTrigger value="frontend" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Frontend
                </TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <TabsTrigger value="backend" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Backend
                </TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <TabsTrigger value="blockchain" className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  Blockchain
                </TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <TabsTrigger value="ai" className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  AI/ML
                </TabsTrigger>
              </motion.div>
            </TabsList>

            {["frontend", "backend", "blockchain", "ai"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  key={activeTab}
                >
                  <Card className="bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {Object.entries(skills[tab as keyof typeof skills]).map(([category, skillList], index) => (
                          <motion.div
                            key={category}
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <h4 className="font-semibold">{formatCategory(category)}</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {skillList.map((skill, skillIndex) => (
                                <motion.li
                                  key={skillIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                                >
                                  {skill}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function formatCategory(category: string): string {
  switch (category) {
    case "core":
      return "Core"
    case "frameworks":
      return "Frameworks & Libraries"
    case "tools":
      return "Tools & Testing"
    case "languages":
      return "Languages"
    case "databases":
      return "Databases & Tools"
    case "platforms":
      return "Platforms"
    case "applications":
      return "DeFi & NFTs"
    case "areas":
      return "Areas"
    default:
      return category.charAt(0).toUpperCase() + category.slice(1)
  }
}
