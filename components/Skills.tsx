"use client";
import { motion } from "framer-motion";
import React from "react";

const skillCategories = [
  {
    category: "Languages",
    emoji: "🧠",
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    border: "border-violet-500/25 hover:border-violet-400/50",
    tag: "bg-violet-500/10 border-violet-400/25 text-violet-300 hover:bg-violet-500/20",
    skills: ["Java", "Python", "Go", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    gradient: "from-sky-600/20 via-blue-600/10 to-transparent",
    border: "border-sky-500/25 hover:border-sky-400/50",
    tag: "bg-sky-500/10 border-sky-400/25 text-sky-300 hover:bg-sky-500/20",
    skills: ["Node.js", "FastAPI", "REST APIs", "OAuth 2.0", "JWT", "Redis", "Kafka", "Microservices"],
  },
  {
    category: "Frontend",
    emoji: "🎨",
    gradient: "from-emerald-600/20 via-green-600/10 to-transparent",
    border: "border-emerald-500/25 hover:border-emerald-400/50",
    tag: "bg-emerald-500/10 border-emerald-400/25 text-emerald-300 hover:bg-emerald-500/20",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "React Native"],
  },
  {
    category: "AI & LLM",
    emoji: "🤖",
    gradient: "from-orange-600/20 via-amber-600/10 to-transparent",
    border: "border-orange-500/25 hover:border-orange-400/50",
    tag: "bg-orange-500/10 border-orange-400/25 text-orange-300 hover:bg-orange-500/20",
    skills: ["Claude API", "OpenAI API", "scikit-learn", "GitHub Copilot", "LLM Integrations"],
  },
  {
    category: "Cloud & DevOps",
    emoji: "☁️",
    gradient: "from-rose-600/20 via-pink-600/10 to-transparent",
    border: "border-rose-500/25 hover:border-rose-400/50",
    tag: "bg-rose-500/10 border-rose-400/25 text-rose-300 hover:bg-rose-500/20",
    skills: ["AWS Lambda", "S3 / SQS", "CloudWatch", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Databases",
    emoji: "🗄️",
    gradient: "from-teal-600/20 via-cyan-600/10 to-transparent",
    border: "border-teal-500/25 hover:border-teal-400/50",
    tag: "bg-teal-500/10 border-teal-400/25 text-teal-300 hover:bg-teal-500/20",
    skills: ["PostgreSQL", "DynamoDB", "MySQL", "Redis", "MongoDB"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
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
    <section id="skills" className="w-full bg-[#0a0b18] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Tech Stack
          </h2>
          <p className="text-white/45 text-lg">The tools I build with</p>
        </motion.div>

        {/* Skill cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className={`relative rounded-2xl bg-gradient-to-br ${cat.gradient} border ${cat.border} p-6 overflow-hidden transition-all duration-300 cursor-default`}
            >
              {/* Top highlight line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.emoji}</span>
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
            <span>🏅</span>
            <span>AWS Academy Graduate – Data Engineering</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
