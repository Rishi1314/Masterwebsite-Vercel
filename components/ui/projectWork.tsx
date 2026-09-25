"use client"
import React from "react";
import { motion, type Variants } from "framer-motion";
import type { Project } from "@/data/profile";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function GlassCard({
  children,
  featured,
}: {
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: featured ? 1.015 : 1.01,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={[
        "group relative w-full h-full",
        "rounded-3xl",
        "bg-white/[0.03] backdrop-blur-xl",
        "border border-white/[0.08]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55)]",
        "overflow-hidden",
      ].join(" ")}
    >
      {/* Gradient border glow */}
      <div
        className={[
          "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300",
          "bg-[radial-gradient(600px_circle_at_20%_0%,rgba(120,119,198,0.18),transparent_40%),radial-gradient(600px_circle_at_80%_20%,rgba(56,189,248,0.14),transparent_42%),radial-gradient(700px_circle_at_50%_120%,rgba(34,197,94,0.10),transparent_40%)]",
        ].join(" ")}
      />

      {/* Subtle top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Inner padding */}
      <div className={featured ? "p-7 md:p-8" : "p-6 md:p-7 h-full"}>{children}</div>
    </motion.div>
  );
}

/**
 * Header band shown at the top of every card in place of a screenshot:
 * the project's core stack in monospace over a soft indigo glow.
 */
function StackHeader({ project, featured }: { project: Project; featured?: boolean }) {
  const core = project.techStack.slice(0, featured ? 4 : 3);
  return (
    <div
      aria-hidden="true"
      className={[
        "relative overflow-hidden rounded-2xl border border-indigo-500/15",
        "bg-[radial-gradient(120%_140%_at_0%_0%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(120%_140%_at_100%_100%,rgba(56,189,248,0.12),transparent_55%)]",
        "bg-[#0d0e24]",
        featured ? "px-6 py-8 lg:h-full lg:flex lg:flex-col lg:justify-center" : "px-5 py-5",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(129,140,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative flex flex-wrap items-center gap-x-3 gap-y-1 font-mono">
        {core.map((t, i) => (
          <React.Fragment key={t}>
            {i > 0 && <span className="text-indigo-400/40">/</span>}
            <span className={featured ? "text-indigo-100 text-xl md:text-2xl" : "text-indigo-100 text-base md:text-lg"}>{t}</span>
          </React.Fragment>
        ))}
      </div>
      {project.techStack.length > core.length && (
        <p className="relative mt-2 font-mono text-xs text-indigo-300/50">
          + {project.techStack.slice(core.length).join(" · ")}
        </p>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const TitleRow = () => (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-2">
        {featured && (
          <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            ✨ Featured
          </span>
        )}
        <h3 className={featured ? "text-white text-2xl md:text-3xl font-semibold" : "text-white text-xl md:text-2xl font-semibold"}>
          {project.title}
        </h3>
      </div>

      <span className="text-white/60 text-sm mt-1">{project.date}</span>
    </div>
  );

  const TechPills = () => (
    <div className="flex flex-wrap gap-2 mt-4">
      {project.techStack.map((tech) => (
        <span
          key={tech}
          className="text-xs px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-200"
        >
          {tech}
        </span>
      ))}
    </div>
  );

  const CTA = () => (
    <a
      href={project.projectUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.linkLabel}: ${project.title} (opens in a new tab)`}
      className="inline-flex w-fit items-center gap-2 text-sky-300 mt-auto pt-5 hover:text-sky-200 transition"
    >
      <span className="font-medium">{project.linkLabel}</span>
      <span aria-hidden="true" className="transition group-hover:translate-x-0.5">→</span>
    </a>
  );

  if (featured) {
    return (
      <GlassCard featured>
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="lg:w-[40%]">
            <StackHeader project={project} featured />
          </div>
          <div className="lg:w-[60%] flex flex-col">
            <TitleRow />
            <p className="text-white/75 leading-relaxed mt-4">{project.abstract}</p>
            <TechPills />
            <CTA />
          </div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <div className="flex flex-col gap-5 h-full">
        <StackHeader project={project} />
        <div className="flex flex-col flex-1">
          <TitleRow />
          <p className="text-white/75 leading-relaxed mt-3">{project.abstract}</p>
          <TechPills />
          <CTA />
        </div>
      </div>
    </GlassCard>
  );
}

const ProjectWork = ({ data }: { data: Project[] }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      className="w-full max-w-6xl mt-8 bg-transparent px-4 xl:px-0"
    >
      {/* Featured: first one bigger */}
      <motion.div variants={itemVariants} className="mb-10">
        <ProjectCard project={data[0]} featured />
      </motion.div>

      {/* Rest: staggered grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {data.slice(1).map((project, idx) => (
          <motion.div key={`${project.title}-${idx}`} variants={itemVariants} className="h-full">
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectWork;
