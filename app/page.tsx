import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import Grid from "@/components/Grid"
import Experience from "@/components/Experience"
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

const page = () => {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="relative flex justify-center items-center flex-col overflow-hidden outline-none">
        <div className="w-full">
          <Hero />
          <Grid />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </>
  )
}

export default page
