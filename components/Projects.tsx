import React from 'react'
import ProjectWork from './ui/projectWork'

const Projects = () => {
const data = [
    {
        title: "ToShare",
        date: "2023",
        abstract:"Built ToShare, a web app that makes decentralized file sharing simple and fun. It uses IPFS and Web3Storage for secure storage and lets you retrieve files with easy-to-remember word-based strings no long links or hassle. The user-friendly design keeps everything straightforward, so sharing and accessing files feels effortless.",
    imageUrl: "/tosharephoto.png",
    techStack: ["ReactJS", "|", "ChakraUI", "|", "IPFS", "|", "Web3Storage", "|", "Google Firebase"],
      
    },
    
  ];
  return (
      <div className="w-full flex bg-[#010206]  gap-2  flex-col items-center">
          <div className='text-white text-4xl font-bold' >My Projects</div>
      <ProjectWork data={data} />
    </div>
  );
}

export default Projects