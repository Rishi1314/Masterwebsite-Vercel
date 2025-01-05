import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import Grid from "@/components/Grid"
import Experience from "@/components/Experience"
import Projects from '@/components/Projects'

const page = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
         <Navbar/>
        <Hero />
        <Grid /> 
        <Experience />
        <Projects/>
        
      </div>
      <div className='w-full text-center text-3xl  font-bold p-10 text-orange-500'>
          Website still under Development
        </div>
    </main>
  )
}

export default page