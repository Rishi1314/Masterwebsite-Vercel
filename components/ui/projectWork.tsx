/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from 'next/image';
import React from 'react'
import { FaLink } from 'react-icons/fa';
interface ProjectEntry {
  title: string;
  date?: string;
  abstract: string;
  imageUrl: string;
  techStack: Array<string>;
  // content: React.ReactNode;
}

const projectWork = ({ data }: { data: ProjectEntry[] }) => {
  return (
    <div className='bg-[#151515] w-[90vw] lg-w-[80vw] p-2 rounded-[10px]'>
      {
        data.map((item, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <div className='w-full flex justify-between px-4'>
              <span className='lg-text-3xl flex items-center gap-2'>{item.title}<a href='https://toshare.vercel.app' target='_blank' className='text-blue-300 hover:scale-110 cursor-pointer '><FaLink /></a></span>
              <span className='lg-text-2xl lg-font-bold'>{item.date}</span>
            </div>
            <div className='w-full flex flex-col lg-flex-row '>
              <Image
                src={item.imageUrl}
                alt="startup template"
                width={500}
                height={500}
                className="hover:scale-125 cursor-pointer duration-200 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-[30%] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <div className='flex  flex-col w-full justify-center items-center'>
                <div className='flex border-b-2 border-solid border-white text-xl gap-2'>
                  {(item.techStack).map((i, k) => (
                    <span key={k}>
                      {i}
                    </span>
                  ))}
                </div>
              <div className='w-[70%] text-lg text-gray-400 text-center'>{item.abstract}</div>

              </div>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default projectWork