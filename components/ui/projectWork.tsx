"use client"
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  date: string;
  abstract: string;
  imageUrl?: string;
  techStack: string[];
  projectUrl: string;
  // optional: a short one-liner if you want later
  // subtitle?: string;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
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
        "group relative w-full",
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
      <div className={featured ? "p-7 md:p-8" : "p-6 md:p-7"}>{children}</div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  const hasImage = useMemo(() => {
    return Boolean(project.imageUrl && project.imageUrl.trim().length > 0 && !imgFailed);
  }, [project.imageUrl, imgFailed]);

  const TitleRow = () => (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          {featured && (
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              ✨ Featured
            </span>
          )}
          <h2 className={featured ? "text-white text-3xl font-semibold" : "text-white text-2xl font-semibold"}>
            {project.title}
          </h2>
        </div>
      </div>

      <span className="text-white/45 text-sm mt-1">{project.date}</span>
    </div>
  );

  const TechPills = () => (
    <div className="flex flex-wrap gap-2 mt-4">
      {project.techStack.map((tech, i) => (
        <span
          key={i}
          className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.05] text-white/75"
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
      className="inline-flex items-center gap-2 text-sky-300 mt-5 hover:text-sky-200 transition"
    >
      <span className="font-medium">View Project</span>
      <span className="transition group-hover:translate-x-0.5">→</span>
    </a>
  );

  // Featured layout: image (if present) gets more space + nicer composition
  if (featured) {
    return (
      <GlassCard featured>
        <div className="flex flex-col lg:flex-row gap-7">
          {hasImage ? (
            <div className="lg:w-[42%]">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  onError={() => setImgFailed(true)}
                  className="h-60 w-full object-cover lg:h-full transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
            </div>
          ) : null}

          <div className={hasImage ? "lg:w-[58%] flex flex-col" : "w-full flex flex-col"}>
            <TitleRow />
            <p className="text-white/75 leading-relaxed mt-4">
              {project.abstract}
            </p>
            <TechPills />
            <CTA />
          </div>
        </div>
      </GlassCard>
    );
  }

  // Non-featured layout
  return (
    <GlassCard>
      <div className="flex flex-col md:flex-row gap-6">
        {hasImage ? (
          <div className="md:w-1/3">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <img
                src={project.imageUrl}
                alt={project.title}
                onError={() => setImgFailed(true)}
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>
          </div>
        ) : null}

        <div className={hasImage ? "md:w-2/3 flex flex-col" : "w-full flex flex-col"}>
          <TitleRow />
          <p className="text-white/75 leading-relaxed mt-3">
            {project.abstract}
          </p>
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
      className="w-full max-w-6xl mt-8 bg-[#010206]"
    >
      {/* Featured: first one bigger */}
      <motion.div variants={itemVariants} className="mb-10">
        <ProjectCard project={data[0]} featured />
      </motion.div>

      {/* Rest: staggered grid */}
      <div className="grid grid-cols-1 gap-7">
        {data.slice(1).map((project, idx) => (
          <motion.div key={`${project.title}-${idx}`} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectWork;
