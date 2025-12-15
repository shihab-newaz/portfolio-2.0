import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shihab Newaz - Software Engineer",
  description:
    "Portfolio website for Shihab Newaz, a fullstack software engineer specializing in web development, blockchain, and AI/ML.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
