"use server"

import { unstable_cache } from "next/cache"
import type { GitHubRepo, RepoStats } from "@/types"

async function fetchRepoStats(owner: string, repo: string): Promise<RepoStats | null> {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                ...(process.env.GITHUB_PERSONAL_ACCESS_TOKEN && {
                    Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
                }),
            },
        })

        if (!response.ok) return null

        const data: GitHubRepo = await response.json()
        return {
            stars: data.stargazers_count,
            forks: data.forks_count,
            language: data.language,
            updatedAt: data.updated_at,
        }
    } catch {
        return null
    }
}

export const getRepoStats = unstable_cache(
    async (owner: string, repo: string) => fetchRepoStats(owner, repo),
    ["github-repo-stats"],
    { revalidate: 3600 }
)

