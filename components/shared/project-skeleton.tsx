"use client"
import { motion } from "framer-motion"
export function ProjectsSkeleton() {
  return (
    <motion.section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="h-10 w-64 bg-muted animate-pulse rounded" />
          <div className="h-6 w-96 bg-muted animate-pulse rounded" />
        </motion.div>
        <motion.div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-80 bg-muted animate-pulse rounded-lg" />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}