"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useState } from "react";

const socials = [
  {
    name: "GitHub",
    handle: "@Rishi1314",
    href: "https://github.com/Rishi1314",
    Icon: FaGithub,
    hoverBorder: "hover:border-white/40",
    hoverBg: "hover:bg-white/5",
    iconColor: "group-hover:text-white",
  },
  {
    name: "LinkedIn",
    handle: "in/brishiraj",
    href: "https://linkedin.com/in/brishiraj",
    Icon: FaLinkedin,
    hoverBorder: "hover:border-sky-400/50",
    hoverBg: "hover:bg-sky-500/5",
    iconColor: "group-hover:text-sky-400",
  },
  {
    name: "Email",
    handle: "rishirajprof@gmail.com",
    href: "mailto:rishirajprof@gmail.com",
    Icon: MdEmail,
    hoverBorder: "hover:border-emerald-400/50",
    hoverBg: "hover:bg-emerald-500/5",
    iconColor: "group-hover:text-emerald-400",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rishirajprof@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="socials" className="w-full bg-[#0a0b18] py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-white/60 text-lg max-w-md mx-auto">
            Open to new roles, collabs, and coffee chats ☕
          </p>
        </motion.div>

        {/* Social cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target={s.name !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className={`group relative flex flex-col items-center gap-4 p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] ${s.hoverBorder} ${s.hoverBg} transition-all duration-300 overflow-hidden`}
            >
              {/* top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <s.Icon className={`text-4xl text-white/50 transition-colors duration-300 ${s.iconColor}`} />
              <div>
                <p className="text-white font-semibold text-lg">{s.name}</p>
                <p className="text-white/55 text-sm mt-0.5">{s.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Copy email button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <button
            onClick={handleCopy}
            className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none group"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 group-hover:bg-purple-950 duration-300 px-7 font-medium text-white backdrop-blur-3xl gap-2">
              {copied ? "✅ Copied!" : "📋 Copy Email Address"}
            </span>
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 text-center border-t border-white/[0.06] pt-8"
      >
        <p className="text-white/40 text-sm">
          Built with Next.js · Framer Motion · Tailwind CSS
          <span className="mx-2">·</span>
          Rishi Raj Bobbarapalli © 2025
        </p>
      </motion.div>
    </section>
  );
}
