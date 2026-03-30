import React from 'react'
import ProjectWork from './ui/projectWork'

const Projects = () => {
const data = [
  {
    title: "GoShare – Real-Time P2P File Transfer",
    date: "2025",
    abstract:
      "Learned Go independently and built a peer-to-peer file transfer service from scratch. Achieved sub-100ms latency under load tests with 1,000+ concurrent sessions and reduced redundant transfers by 35% via deduplication. Features fault-tolerant reconnection logic, containerized with Docker, and tested across Linux, Windows, and macOS.",
    techStack: ["Go", "Gin", "WebSockets", "Docker"],
    projectUrl: "https://github.com/Rishi1314/GoShare",
  },

  {
    title: "LLM-Powered Analytics Platform",
    date: "2025",
    abstract:
      "Built a Python/FastAPI backend with a scikit-learn NLP classifier that intelligently routes queries to PostgreSQL or the Claude API. React/TypeScript frontend with an 85% latency reduction via Redis caching deployed on AWS Lambda. Maintained with a pytest test suite at 90%+ coverage, Docker containerization, and CI/CD pipelines.",
    techStack: ["Python", "FastAPI", "scikit-learn", "React", "TypeScript", "PostgreSQL", "Redis", "AWS Lambda"],
    projectUrl: "https://github.com/Rishi1314/LLMAnalytics",
  },

  {
    title: "Decentralized File Sharing Platform",
    date: "2024",
    abstract:
      "Built a distributed storage platform on IPFS, PostgreSQL, and Redis. Improved file retrieval by 180x (514ms → 2.8ms) through caching and query optimization. Secured with OAuth 2.0 and JWT. Deployed on AWS with Docker, 90%+ test coverage, and maintained via CI/CD.",
    imageUrl: "/tosharephoto.png",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "IPFS", "Docker", "AWS"],
    projectUrl: "https://sharenit.vercel.app",
  },

  {
    title: "ToShare – Word-Based IPFS File Sharing",
    date: "2023",
    abstract:
      "A web app that makes decentralized file sharing simple. Uses IPFS and Web3Storage for secure storage and lets you retrieve files with easy-to-remember word-based strings — no long CIDs or links needed. Clean, user-friendly UI makes sharing and accessing files effortless.",
    imageUrl: "/tosharephoto.png",
    techStack: ["React", "Chakra UI", "IPFS", "Web3Storage", "Firebase"],
    projectUrl: "https://toshare.vercel.app",
  },
];

  return (
    <div id="projects" className="w-full flex bg-[#010206] mt-5 py-10 gap-4 flex-col items-center">
      <div className="text-white text-4xl md:text-5xl font-bold mb-2">My Projects</div>
      <p className="text-white/45 text-lg mb-4">Things I&apos;ve built that I&apos;m proud of</p>
      <ProjectWork data={data} />
    </div>
  );
}

export default Projects
