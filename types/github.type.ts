export interface GitHubRepo {
    stargazers_count: number
    forks_count: number
    language: string | null
    updated_at: string
}

export interface RepoStats {
    stars: number
    forks: number
    language: string | null
    updatedAt: string
}
