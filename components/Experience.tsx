"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

/* ── reusable sub-components ─────────────────────── */

type BadgeVariant = "work" | "education" | "research" | "leadership";

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

interface EntryProps {
  type: BadgeVariant;
  badgeLabel: string;
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  tech?: string[];
}

function EntryCard({ type, badgeLabel, role, org, location, period, bullets, tech }: EntryProps) {
  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5 md:p-6 space-y-4">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="space-y-1.5">
          <Badge type={type} label={badgeLabel} />
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
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
              type === "work" ? "bg-indigo-400" :
              type === "education" ? "bg-emerald-400" :
              type === "research" ? "bg-violet-400" : "bg-amber-400"
            }`} />
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
    </div>
  );
}

/* ── timeline data ────────────────────────────────── */

export default function Experience() {
  const data = [
    {
      title: "Aug 2024",
      content: (
        <EntryCard
          type="education"
          badgeLabel="Education"
          role="Master of Science in Computer Science"
          org="University of North Carolina at Charlotte"
          location="Charlotte, NC"
          period="Aug 2024 – May 2026"
          bullets={[
            "GPA: 4.00 / 4.00",
            "Focusing on distributed systems, machine learning, and scalable software engineering.",
          ]}
        />
      ),
    },
    {
      title: "Jun 2023",
      content: (
        <EntryCard
          type="work"
          badgeLabel="Full-Time"
          role="Software Development Engineer, Full Stack"
          org="SYNTHEIM"
          location="Hyderabad, India"
          period="Jun 2023 – Jun 2024"
          bullets={[
            "Built backend services and REST APIs in Java, Node.js, and TypeScript; shipped React frontend features; owned work end-to-end across 8 microservices in close collaboration with product and design.",
            "Reduced API latency by 30% via Redis caching and PostgreSQL query optimization; improved CPU utilization by 20% through profiling and refactoring — both measured under load tests using k6.",
            "Deployed on AWS (Lambda, S3, SQS, CloudWatch); containerized with Docker and Kubernetes; automated CI/CD cutting deployment time by 40%; resolved 10+ production incidents on-call.",
            "Drove 15+ code reviews; integrated LLM APIs and AI-assisted tools into development workflows; worked in fast-paced Agile sprints shipping features consistently.",
          ]}
          tech={["Java", "Node.js", "TypeScript", "React", "Redis", "PostgreSQL", "AWS", "Docker", "Kubernetes", "CI/CD"]}
        />
      ),
    },
    {
      title: "Aug 2023",
      content: (
        <EntryCard
          type="research"
          badgeLabel="Research"
          role="Research Assistant, Distributed Systems"
          org="Institute of Aeronautical Engineering"
          location="Hyderabad, India"
          period="Aug 2023 – May 2024"
          bullets={[
            "Built Python automation pipelines benchmarking 1,000+ distributed IPFS workloads.",
            "Identified 5 performance bottlenecks cutting total runtime by 25% via parallel computing techniques.",
            "Documented findings and presented optimization strategies to engineering leads.",
          ]}
          tech={["Python", "IPFS", "Parallel Computing", "Automation"]}
        />
      ),
    },
    {
      title: "Sep 2022",
      content: (
        <EntryCard
          type="leadership"
          badgeLabel="Leadership"
          role="Technical Lead"
          org="Google Developer Student Club — Institute of Aeronautical Engineering"
          location="Hyderabad, India"
          period="Sep 2022 – May 2023"
          bullets={[
            "Led workshops on full-stack development, algorithms, and distributed systems for 700+ students.",
            "Reviewed 50+ student codebases, providing feedback on performance, reliability, and code quality.",
          ]}
          tech={["Full-Stack", "Algorithms", "Distributed Systems", "Mentorship"]}
        />
      ),
    },
    {
      title: "Nov 2022",
      content: (
        <EntryCard
          type="work"
          badgeLabel="Internship"
          role="Software Developer Intern"
          org="SYNTHEIM"
          location="Hyderabad, India"
          period="Nov 2022 – May 2023"
          bullets={[
            "Built Java and Node.js backend services; designed PostgreSQL schemas; implemented OAuth 2.0 authentication.",
            "Shipped React UI components; wrote unit tests; earned full-time conversion offer.",
            "Automated CI/CD with GitHub Actions; applied code review feedback to improve reliability.",
          ]}
          tech={["Java", "Node.js", "PostgreSQL", "React", "OAuth 2.0", "GitHub Actions"]}
        />
      ),
    },
    {
      title: "Aug 2020",
      content: (
        <EntryCard
          type="education"
          badgeLabel="Education"
          role="Bachelor of Engineering in Computer Science"
          org="Institute of Aeronautical Engineering"
          location="Hyderabad, India"
          period="Aug 2020 – May 2024"
          bullets={[
            "Graduated with a BE in Computer Science — foundation in algorithms, data structures, OS, databases, and distributed systems.",
            "Served as Technical Lead at the Google Developer Student Club during final two years.",
          ]}
        />
      ),
    },
  ];

  return (
    <div id="work" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
