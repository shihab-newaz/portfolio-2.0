export interface Project {
    title: string
    description: string
    image: string
    tags: string[]
    github: string
    demo: string
}

export interface Experience {
    title: string
    company: string
    period: string
    contractual?: boolean
    responsibilities: string[]
}

export interface Education {
    degree: string
    institution: string
    location: string
    period: string
    description: string
}

export interface PersonalInfo {
    name: string
    title: string
    email: string
    github: string
    linkedin: string
    shortBio: string
    longBio: string
}

export interface SkillCategory {
    core?: string[]
    frameworks?: string[]
    tools?: string[]
    languages?: string[]
    databases?: string[]
    platforms?: string[]
    applications?: string[]
    areas?: string[]
}

export interface Skills {
    frontend: SkillCategory
    backend: SkillCategory
    blockchain: SkillCategory
    ai: SkillCategory
}
