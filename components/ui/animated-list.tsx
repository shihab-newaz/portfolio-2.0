"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedListProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function AnimatedList({ children, className, staggerDelay = 0.1 }: AnimatedListProps) {
  const { ref, isInView } = useScrollAnimation()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedListItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
