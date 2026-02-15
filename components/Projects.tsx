import React from 'react'
import ProjectWork from './ui/projectWork'

const Projects = () => {
const data = [
    
  {
      title: "ShareIt – Distributed File Storage System",
      date: "2025",
      abstract:
        "Designed and built a production-grade distributed file management system using IPFS (Pinata), PostgreSQL, Prisma ORM, and Redis. Implemented JWT-based authentication, alias-based retrieval, incremental Redis caching, and scalable backend APIs. Optimized for performance, security, and clean UX with a modern Next.js frontend.",
      // imageUrl: "/shareit.png",
      techStack: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "IPFS",
        "AWS",
        "TailwindCSS"
      ],
      projectUrl: "https://your-live-link.com"
    },

    {
      title: "High-Performance Backend System in Go",
      date: "2025",
      abstract:
        "Built a concurrent backend system in Go focusing on performance, scalability, and clean architecture. Implemented RESTful APIs, efficient request handling using goroutines, middleware-based routing, and optimized database interactions. Designed with production-ready error handling and modular service layers.",
      // imageUrl: "/golang-project.png",
      techStack: [
        "Go",
        "Goroutines",
        "REST APIs",
        "PostgreSQL",
        "Docker",
        "Redis"
      ],
      projectUrl: "https://github.com/your-link"
    },

    {
      title: "Multi-Asset Portfolio Analytics Platform",
      date: "2025",
      abstract:
        "Architected a cloud-hosted portfolio analytics platform using PostgreSQL (Neon) and SQLAlchemy 2.x. Implemented financial risk metrics, asset correlation analysis, and portfolio optimization strategies with reproducible data pipelines. Focused on time-series analysis and scalable backend design.",
      // imageUrl: "/portfolio.png",
      techStack: [
        "Python",
        "PostgreSQL",
        "SQLAlchemy",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Cloud Deployment"
      ],
      projectUrl: "https://github.com/your-link"
  },
    {
        title: "ToShare",
        date: "2023",
        abstract:"Built ToShare, a web app that makes decentralized file sharing simple and fun. It uses IPFS and Web3Storage for secure storage and lets you retrieve files with easy-to-remember word-based strings no long links or hassle. The user-friendly design keeps everything straightforward, so sharing and accessing files feels effortless.",
    imageUrl: "/tosharephoto.png",
    techStack: ["ReactJS", "ChakraUI", "IPFS",  "Web3Storage", "Google Firebase"],
      projectUrl:"https://www.toshare.vercel.app"
    },

  ];

  return (
    <div className="w-full flex bg-[#010206] mt-5 py-2 gap-4 flex-col items-center">
      <div className='text-white text-4xl font-bold'>My Projects</div>
      <ProjectWork data={data} />
    </div>
  );
}

export default Projects