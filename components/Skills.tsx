"use client";
import { motion, type Variants } from "framer-motion";
import React from "react";
import { certification, skillCategories } from "@/data/profile";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="w-full bg-[#0a0b18] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold text-white mb-3">
            Tech Stack
          </h2>
          <p className="text-white/60 text-lg">The tools I build with</p>
        </motion.div>

        {/* Skill cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className={`relative rounded-2xl bg-gradient-to-br ${cat.gradient} ${
                /* odd card count: center the last card instead of leaving it stranded at the left */
                i === skillCategories.length - 1 && skillCategories.length % 2 === 1 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              } border ${cat.border} p-6 overflow-hidden transition-all duration-300 cursor-default`}
            >
              {/* Top highlight line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" aria-hidden="true">{cat.emoji}</span>
                <h3 className="text-white font-semibold text-lg">{cat.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className={`text-xs px-3 py-1.5 rounded-full border ${cat.tag} transition-all duration-200 cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-yellow-500/25 bg-yellow-500/5 text-yellow-300/80 text-sm">
            <span aria-hidden="true">🏅</span>
            <span>{certification}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
