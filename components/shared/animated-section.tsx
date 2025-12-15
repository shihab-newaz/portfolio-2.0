"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
