import type { Skills } from "@/types"

export const skills: Skills = {
  frontend: {
    core: [
      "HTML5 / CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "Responsive Design",
    ],
    frameworks: ["React.js", "Next.js", "Tailwind CSS"],
    tools: ["Webpack", "Mocha", "React Testing Library", "Turbopack"],
  },
  backend: {
    languages: ["Node.js", "Python", "PHP"],
    frameworks: ["Express.js", "Nest.js", "Django", "Laravel"],
    databases: [
      "MongoDB",
      "MySQL / PostgreSQL",
      "Redis",
      "Docker / Kubernetes",
    ],
  },
  blockchain: {
    languages: ["Solidity", "Web3.js / ethers.js", "Truffle / Hardhat", "IPFS"],
    platforms: ["Ethereum", "Polygon", "Solana"],
    applications: [
      "Smart Contract Development",
      "DApp Development",
      "NFT Marketplaces",
      "Token Standards (ERC20, ERC721)",
    ],
  },
  ai: {
    languages: ["Python", "scikit-learn"],
    areas: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Recommendation Systems",
    ],
    tools: ["Jupyter Notebooks", "Google Colab", "Hugging Face"],
  },
};
