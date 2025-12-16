import type { Project } from "@/types"
import { ASSETS } from "@/public"

export const projects: Project[] = [
  {
    title: "Shelter Housing Ltd.",
    description:
      "A landing page for Shelter Housing Limited, a real estate company, built with modern web technologies.",
    image: `${ASSETS.PROJECTS.SHELTER_HOUSING}?height=500&width=600`,
    tags: ["React", "TypeScript", "GSAP"],
    github: "https://github.com/shihab-newaz/shelter_housing_ltd_website",
    demo: "https://www.shelterhousinglimited.com",
  },
  {
    title: "Real Estate NFT Marketplace",
    description:
      "a decentralized platform for buying, selling, and trading tokenized real estate properties as NFTs.",
    image: `${ASSETS.PROJECTS.REAL_ESTATE_NFT}?height=500&width=600`,
    tags: ["Solidity", "React", "Web3.js", "Ethereum"],
    github: "https://github.com/shihab-newaz/real-estate-nft-marketplace",
    demo: "https://real-estate-nft-market-place.vercel.app/",
  },
  {
    title: "CodeEcho",
    description:
      "An intelligent web application that helps users prepare for technical and behavioral interviews through AI-powered voice conversations, question generation, and personalized feedback.",
    image: `${ASSETS.PROJECTS.CODE_ECHO}?height=500&width=600`,
    tags: ["Next.js", "VAPI", "Firebase", "Gemini"],
    github: "https://github.com/shihab-newaz/CodeEcho",
    demo: "https://ai-interview-sepia-eight.vercel.app/sign-in",
  },
  {
    title: "Daeho CC Golf Club",
    description:
      "A minimalist and elegant website for a luxury golf club, built with modern web technologies.",
    image: `${ASSETS.PROJECTS.DAEHO_CC}?height=500&width=600`,
    tags: ["Next.js", "MongoDB", "NexAuth", "TypeScript", "Framer Motion"],
    github: "https://github.com/shihab-newaz/Golf-Club",
    demo: "https://golf-club-bap0gkway-shihab-newazs-projects.vercel.app",
  },
  {
    title: "Sentiment Analyzer",
    description:
      "An AI-powered sentiment analysis tool that processes text data from various sources. Features include real-time analysis, data visualization, and API integration.",
    image: `${ASSETS.PLACEHOLDER}?height=500&width=600`,
    tags: ["Python", "Django", "React"],
    github: "https://github.com/shihab-newaz/TechVibe",
    demo: "#",
  },
  {
    title: "AudioTemple",
    description:
      "A spotify-like website using PHP and MySQL for back-end and HTML,CSS & vanilla-JavaScript for front-end",
    image: `${ASSETS.PLACEHOLDER}?height=500&width=600`,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/shihab-newaz/AudioTemple",
    demo: "#",
  },
];
