import React from 'react'
import ProjectWork from './ui/projectWork'

const Projects = () => {
const data = [
    {
        title: "ToShare",
        date: "2023",
        abstract:"Simple File Sharing.",
        imageUrl:"/tosharephoto.png"
      
    },
    
  ];
  return (
      <div className="w-full flex bg-[#010206] gap-2  flex-col items-center">
          <div className='text-white text-4xl font-bold' >My Projects</div>
      <ProjectWork data={data} />
    </div>
  );
}

export default Projects