"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { experience, type EntryType, type ExperienceEntry } from "@/data/profile";

/* ── reusable sub-components ─────────────────────── */

type BadgeVariant = EntryType;

const badgeStyles: Record<BadgeVariant, string> = {
  work:       "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
  education:  "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
  research:   "bg-violet-500/15 border-violet-500/30 text-violet-300",
  leadership: "bg-amber-500/15 border-amber-500/30 text-amber-300",
};

const titleColors: Record<BadgeVariant, string> = {
  work:       "text-indigo-400",
  education:  "text-emerald-400",
  research:   "text-violet-400",
  leadership: "text-amber-400",
};

function Badge({ type, label }: { type: BadgeVariant; label: string }) {
  return (
    <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium border ${badgeStyles[type]}`}>
      {label}
    </span>
  );
}

function TechPill({ tech }: { tech: string }) {
  return (
    <span className="px-2.5 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-white/65">
      {tech}
    </span>
  );
}

const dotColors: Record<BadgeVariant, string> = {
  work:       "bg-indigo-400",
  education:  "bg-emerald-400",
  research:   "bg-violet-400",
  leadership: "bg-amber-400",
};

function EntryCard({ type, badge, role, org, location, period, bullets, tech, certificate }: ExperienceEntry) {
  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5 md:p-6 space-y-4">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="space-y-1.5">
          <Badge type={type} label={badge} />
          <h3 className={`text-lg md:text-xl font-bold mt-1 ${titleColors[type]}`}>{role}</h3>
          <p className="text-white/80 font-semibold text-sm md:text-base">{org}</p>
          <p className="text-white/40 text-xs">{location}</p>
        </div>
        <span className="text-white/35 text-xs md:text-sm font-mono whitespace-nowrap mt-1">{period}</span>
      </div>

      {/* bullet points */}
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm text-white/70 leading-relaxed">
            <span aria-hidden="true" className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${dotColors[type]}`} />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* tech pills */}
      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map(t => <TechPill key={t} tech={t} />)}
        </div>
      )}

      {certificate && (
        <a
          href={certificate}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-sky-300 hover:text-sky-200 transition"
        >
          View certificate <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

/* ── timeline data ────────────────────────────────── */

export default function Experience() {
  const data = experience.map(entry => ({
    title: entry.start,
    content: <EntryCard {...entry} />,
  }));

  return (
    <section id="work" className="w-full" aria-label="Experience">
      <Timeline data={data} />
    </section>
  );
}
