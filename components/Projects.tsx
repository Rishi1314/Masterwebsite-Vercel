import React from 'react'
import ProjectWork from './ui/projectWork'
import { projects } from '@/data/profile'

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="w-full flex bg-[#0a0b18] mt-5 py-10 gap-4 flex-col items-center">
      <h2 id="projects-heading" className="text-white text-4xl md:text-5xl font-bold mb-2">My Projects</h2>
      <p className="text-white/60 text-lg mb-4">Things I&apos;ve built that I&apos;m proud of</p>
      <ProjectWork data={projects} />
    </section>
  );
}

export default Projects
