"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"
import { personalInfo } from "@/constants/personal-info"
import { AnimatedSection } from "@/components/shared/animated-section"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <p>{personalInfo.email}</p>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link href={personalInfo.linkedin} className="hover:underline">
                    linkedin.com/in/shihabnewaz
                  </Link>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link href={personalInfo.github} className="hover:underline">
                    github.com/shihabnewaz
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                        <Input id="name" placeholder="Your name" />
                      </motion.div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                        <Input id="email" type="email" placeholder="Your email" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                      <Input id="subject" placeholder="Subject of your message" />
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                      <Textarea id="message" placeholder="Your message" className="min-h-32" />
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full gap-1">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
