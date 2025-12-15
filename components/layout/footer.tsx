"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { personalInfo } from "@/constants/personal-info"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="w-full border-t py-6 md:py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
            <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
            <Link href={`mailto:${personalInfo.email}`}>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
