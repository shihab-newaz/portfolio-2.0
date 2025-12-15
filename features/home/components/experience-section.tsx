"use client"

import { experience } from "@/constants/experience"
import { AnimatedSection } from "@/components/shared/animated-section"
import { motion } from "framer-motion"

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey in software development.
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative pl-8 border-l-2 border-muted-foreground/20"
            >
              <motion.div
                className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">• {exp.company}</span>
                  {exp.contractual && (
                    <motion.span
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      Contractual
                    </motion.span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
                <motion.ul
                  className="list-disc pl-5 text-muted-foreground space-y-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + respIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
