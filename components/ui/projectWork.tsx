/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import React from "react";
import { FaLink } from "react-icons/fa";

interface ProjectEntry {
  title: string;
  date?: string;
  abstract: string;
  imageUrl: string;
  techStack: string[];
  projectUrl?: string;
}

const ProjectWork = ({ data }: { data: ProjectEntry[] }) => {
  return (
    <div className="w-full max-w-[90vw] lg:max-w-[70vw] mx-auto grid gap-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 rounded-2xl p-4 flex flex-col lg:flex-row gap-6 shadow-lg hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
        >
          {/* Image Section */}
          <div className="flex-shrink-0 relative overflow-hidden rounded-xl w-full lg:w-[300px]">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={500}
              height={300}
              className="object-cover w-full h-auto max-h-60 lg:max-h-full rounded-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-between flex-1 gap-4">
            {/* Title & Link */}
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              {item.projectUrl && (
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-transform duration-200"
                  title="View Project"
                >
                  <FaLink />
                </a>
              )}
            </div>

            {/* Date */}
            {item.date && (
              <p className="text-gray-400 text-sm">{item.date}</p>
            )}

            {/* Abstract */}
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              {item.abstract}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs lg:text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-md hover:bg-white/10 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectWork;
