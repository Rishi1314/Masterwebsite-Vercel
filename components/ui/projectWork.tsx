/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from 'react'
interface ProjectEntry {
  title: string;
  date?: string;
  abstract: string;
  // content: React.ReactNode;
}

const projectWork = ({ data }: { data: ProjectEntry[] }) => {
  return (
    <div className='bg-[#151515] w-[80vw] p-2 rounded-[10px]'>
      {
        data.map((item, index) => (
          <div key={index}>
            <div className='w-full flex justify-between'>
              <span className='text-3xl'>{item.title}</span>
              <span className='text-2xl'>{item.date}</span>
            </div>
            <div>
              {item.abstract}
            </div>
          
          </div>
        ))
      }
    </div>
  )
}

export default projectWork