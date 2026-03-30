"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import myphoto from "@/images/myphoto.png";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Hero = () => {
  const words = [
    { text: "Hi," },
    { text: "I'm" },
    { text: "Rishi Raj", className: "text-indigo-400 dark:text-indigo-400" },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-[#05060f]">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(129,140,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow blob */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.13),transparent)]" />

      {/* Vignette */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_85%)] bg-[#05060f]" />

      <Spotlight className="-top-40 -left-10 md:left-28 md:-top-20" fill="rgba(129,140,248,0.55)" />
      <Spotlight className="top-10 right-0 md:right-32" fill="rgba(167,139,250,0.35)" />

      <div className="relative z-10 flex flex-col items-center gap-5 px-4">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-full bg-indigo-500/15 blur-xl" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-transparent" />
          <Image
            src={myphoto}
            alt="Rishi Raj"
            className="relative z-10 rounded-full border border-indigo-500/30 aspect-square w-36 md:w-44 object-cover shadow-2xl"
          />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TypewriterEffectSmooth
            className="text-3xl sm:text-5xl md:text-6xl font-bold"
            words={words}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/45 text-sm sm:text-base max-w-md leading-relaxed"
        >
          Full-Stack SDE · MS CS @ UNC Charlotte · Building fast, scalable systems
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-1"
        >
          <a
            href="https://drive.google.com/file/d/1aU1L3kvyHMOqC44Ix7024V8o_HWjF113/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex h-11 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#818cf8_0%,#4f46e5_50%,#818cf8_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[#07080f] group-hover:bg-indigo-950/80 transition-colors duration-300 px-6 font-semibold text-white text-sm">
              View Resume →
            </span>
          </a>

          <a
            href="#projects"
            onClick={e => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex h-11 items-center gap-2 px-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-indigo-500/30 text-white/60 hover:text-white text-sm font-medium transition-all duration-200"
          >
            See My Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-8 mt-4 pt-6 border-t border-white/[0.06] w-full max-w-sm"
        >
          {[
            { label: "GPA", value: "4.0 / 4.0" },
            { label: "API Latency Cut", value: "30%" },
            { label: "Concurrent Users", value: "1K+" },
          ].map(stat => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5">
              <span className="text-indigo-400 font-bold text-lg">{stat.value}</span>
              <span className="text-white/30 text-xs">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#05060f] to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
