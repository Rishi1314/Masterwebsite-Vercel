/**
 * All site content lives here. Update this file to change what the site says;
 * the components only handle layout and styling.
 */

export const site = {
  url: "https://rishiraj.vercel.app",
  name: "Rishi Raj Bobbarapalli",
  shortName: "Rishi Raj",
  jobTitle: "Product Development Engineer",
  employer: "Software Toolbox",
  description:
    "Rishi Raj Bobbarapalli is a Product Development Engineer at Software Toolbox building backend services, industrial data integrations, and AI-assisted tooling. MS CS, UNC Charlotte.",
  heroSubtitle:
    "Product Development Engineer @ Software Toolbox · MS CS, UNC Charlotte · Building fast, reliable systems",
  location: "Charlotte, NC",
  email: "rishirajprof@gmail.com",
  githubUser: "Rishi1314",
  contactTagline: "Always up for interesting problems, collabs, and coffee chats ☕",
};

export const socials = {
  github: "https://github.com/Rishi1314",
  linkedin: "https://www.linkedin.com/in/brishiraj/",
};

export const about = {
  bio: "Hi, I'm Rishi Raj Bobbarapalli. I'm a software engineer at Software Toolbox in the Charlotte area, where I build integration services that connect industrial devices to modern data platforms. I finished my MS in Computer Science at UNC Charlotte in May 2026 with a 4.0 GPA. I like working across the stack, from async Python services and Rust connectors to React UIs, and I use AI tooling to ship faster. Off the keyboard, you'll find me on the basketball court or exploring new ideas with friends.",
  buildingNow: "Building cool stuff with AI tools",
  stackLeft: ["Python", "Rust", "TypeScript"],
  stackRight: ["FastAPI", "React", "AWS"],
};

export type EntryType = "work" | "education" | "research" | "leadership";

export interface ExperienceEntry {
  /** Short label shown on the timeline rail, e.g. "Jul 2026". */
  start: string;
  type: EntryType;
  badge: string;
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  tech?: string[];
  certificate?: string;
}

/** Newest first, by start date. */
export const experience: ExperienceEntry[] = [
  {
    start: "Jul 2026",
    type: "work",
    badge: "Full-Time",
    role: "Product Development Engineer",
    org: "Software Toolbox, Inc.",
    location: "Matthews, NC",
    period: "Jul 2026 – Present",
    bullets: [
      "Built and shipped a full i3X (CESMII) integration service from scratch, delivering 30+ merged PRs with zero regressions.",
      "Redesigned the device-discovery pipeline with bounded async concurrency (Python asyncio), cutting live-mode connection time from 18–31 minutes to 30 seconds–3 minutes: a 10–40x speedup verified in production.",
      "Authored 800+ automated tests across the integration effort, sustaining zero regressions.",
      "Built an MCP (Model Context Protocol) gateway service with SSRF protection and bearer-token authentication using Python and FastAPI.",
      "Built a Sparkplug B-to-UNS translation connector in Rust, bridging MQTT payloads into the UNS layer at sub-50ms latency.",
    ],
    tech: ["Python", "asyncio", "FastAPI", "Rust", "MQTT", "Sparkplug B", "MCP", "i3X"],
  },
  {
    start: "Aug 2024",
    type: "education",
    badge: "Graduated",
    role: "Master of Science in Computer Science",
    org: "University of North Carolina at Charlotte",
    location: "Charlotte, NC",
    period: "Aug 2024 – May 2026",
    bullets: [
      "Graduated May 2026 · GPA 4.00 / 4.00",
      "Coursework: Algorithms & Data Science, Computer Communications & Networking, Artificial Intelligence, Visual Analytics, Software System Design, Big Data & Analytics",
    ],
  },
  {
    start: "Aug 2023",
    type: "research",
    badge: "Research",
    role: "Research Assistant, Distributed Systems",
    org: "Institute of Aeronautical Engineering",
    location: "Hyderabad, India",
    period: "Aug 2023 – May 2024",
    bullets: [
      "Built Python automation pipelines benchmarking 1,000+ distributed IPFS workloads.",
      "Identified 5 performance bottlenecks, cutting total runtime by 25% via parallel computing.",
      "Documented findings and presented optimization strategies to engineering leads.",
    ],
    tech: ["Python", "IPFS", "Parallel Computing", "Automation"],
  },
  {
    start: "Jun 2023",
    type: "work",
    badge: "Full-Time",
    role: "Software Development Engineer, Full Stack",
    org: "SYNTHEIM",
    location: "Hyderabad, India",
    period: "Jun 2023 – Jun 2024",
    bullets: [
      "Built backend services and REST APIs in Java, Node.js, and TypeScript; shipped React frontend features; owned work end-to-end across 8 microservices in close collaboration with product and design.",
      "Reduced API latency by 30% via Redis caching and PostgreSQL query optimization; improved CPU utilization by 20% through profiling and refactoring, both measured under k6 load tests.",
      "Deployed on AWS (Lambda, S3, SQS, CloudWatch); containerized with Docker and Kubernetes; automated CI/CD cutting deployment time by 40%; resolved 10+ production incidents on-call.",
      "Drove 15+ code reviews; integrated LLM APIs and AI-assisted tools into development workflows; shipped features consistently in Agile sprints.",
    ],
    tech: ["Java", "Node.js", "TypeScript", "React", "Redis", "PostgreSQL", "AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    start: "Nov 2022",
    type: "work",
    badge: "Internship",
    role: "Software Developer Intern",
    org: "SYNTHEIM",
    location: "Hyderabad, India",
    period: "Nov 2022 – May 2023",
    bullets: [
      "Built Java and Node.js backend services; designed PostgreSQL schemas; implemented OAuth 2.0 authentication.",
      "Shipped React UI components; wrote unit tests; earned a full-time conversion offer.",
      "Automated CI/CD with GitHub Actions; applied code review feedback to improve reliability.",
    ],
    tech: ["Java", "Node.js", "PostgreSQL", "React", "OAuth 2.0", "GitHub Actions"],
    certificate: "/certificates/syntheim-internship.jpeg",
  },
  {
    start: "Sep 2022",
    type: "leadership",
    badge: "Leadership",
    role: "Technical Lead",
    org: "Google Developer Student Club, Institute of Aeronautical Engineering",
    location: "Hyderabad, India",
    period: "Sep 2022 – May 2023",
    bullets: [
      "Led workshops on full-stack development, algorithms, and distributed systems for 700+ students.",
      "Reviewed 50+ student codebases, giving feedback on performance, reliability, and code quality.",
    ],
    tech: ["Full-Stack", "Algorithms", "Distributed Systems", "Mentorship"],
    certificate: "/certificates/gdsc-technical-lead.jpeg",
  },
  {
    start: "Aug 2020",
    type: "education",
    badge: "Education",
    role: "Bachelor of Engineering in Computer Science",
    org: "Institute of Aeronautical Engineering",
    location: "Hyderabad, India",
    period: "Aug 2020 – May 2024",
    bullets: [
      "Foundation in algorithms, data structures, operating systems, databases, and distributed systems.",
      "Served as Technical Lead at the Google Developer Student Club.",
    ],
  },
];

export interface Project {
  title: string;
  date: string;
  abstract: string;
  techStack: string[];
  projectUrl: string;
  /** Label for the link, e.g. "Live demo" or "GitHub". */
  linkLabel: string;
}

/** The first project is shown as the featured card. */
export const projects: Project[] = [
  {
    title: "Decentralized File Sharing Platform",
    date: "2024",
    abstract:
      "Built a distributed storage platform on IPFS, PostgreSQL, and Redis. Improved file retrieval by 180x (514ms → 2.8ms) through caching and query optimization. Secured with OAuth 2.0 and JWT. Deployed on AWS with Docker, 90%+ test coverage, and maintained via CI/CD.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "IPFS", "Docker", "AWS"],
    projectUrl: "https://sharenit.vercel.app",
    linkLabel: "Live demo",
  },
  {
    title: "LLM-Powered Analytics Platform",
    date: "2025",
    abstract:
      "Built a Python/FastAPI backend with a scikit-learn NLP classifier that routes queries to PostgreSQL or the Claude API. React/TypeScript frontend, with an 85% latency reduction via Redis caching on AWS Lambda. Maintained with a pytest suite at 90%+ coverage, Docker, and CI/CD.",
    techStack: ["Python", "FastAPI", "scikit-learn", "React", "TypeScript", "PostgreSQL", "Redis", "AWS Lambda"],
    projectUrl: "https://github.com/Rishi1314/LLMPoweredAnalyticsPlatform",
    linkLabel: "GitHub",
  },
  {
    title: "GoShare – Real-Time P2P File Transfer",
    date: "2025",
    abstract:
      "Learned Go independently and built a peer-to-peer file transfer service from scratch. Achieved sub-100ms latency under load tests with 1,000+ concurrent sessions and reduced redundant transfers by 35% via deduplication. Features fault-tolerant reconnection logic, containerized with Docker, and tested across Linux, Windows, and macOS.",
    techStack: ["Go", "Gin", "WebSockets", "Docker"],
    projectUrl: "https://github.com/Rishi1314/GoShare",
    linkLabel: "GitHub",
  },
  {
    title: "ToShare – Word-Based IPFS File Sharing",
    date: "2023",
    abstract:
      "A web app that makes decentralized file sharing simple. Uses IPFS and Web3Storage for storage and lets you retrieve files with easy-to-remember word-based strings instead of long CIDs or links.",
    techStack: ["React", "Chakra UI", "IPFS", "Web3Storage", "Firebase"],
    projectUrl: "https://toshare.vercel.app",
    linkLabel: "Live demo",
  },
];

export const skillCategories = [
  {
    category: "Languages",
    emoji: "🧠",
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    border: "border-violet-500/25 hover:border-violet-400/50",
    tag: "bg-violet-500/10 border-violet-400/25 text-violet-300 hover:bg-violet-500/20",
    skills: ["Python", "Java", "Rust", "Go", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    gradient: "from-sky-600/20 via-blue-600/10 to-transparent",
    border: "border-sky-500/25 hover:border-sky-400/50",
    tag: "bg-sky-500/10 border-sky-400/25 text-sky-300 hover:bg-sky-500/20",
    skills: ["FastAPI", "asyncio", "Node.js", "REST APIs", "MCP", "OAuth 2.0", "JWT", "Redis", "Kafka", "Microservices"],
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
    category: "Industrial IoT",
    emoji: "🏭",
    gradient: "from-indigo-600/20 via-indigo-600/10 to-transparent",
    border: "border-indigo-500/25 hover:border-indigo-400/50",
    tag: "bg-indigo-500/10 border-indigo-400/25 text-indigo-300 hover:bg-indigo-500/20",
    skills: ["MQTT", "Sparkplug B", "i3X (CESMII)", "Unified Namespace (UNS)"],
  },
  {
    category: "AI & Dev Tools",
    emoji: "🤖",
    gradient: "from-orange-600/20 via-amber-600/10 to-transparent",
    border: "border-orange-500/25 hover:border-orange-400/50",
    tag: "bg-orange-500/10 border-orange-400/25 text-orange-300 hover:bg-orange-500/20",
    skills: ["Claude API", "Claude Code", "OpenAI API", "Grok", "GitHub Copilot", "scikit-learn"],
  },
  {
    category: "Cloud & DevOps",
    emoji: "☁️",
    gradient: "from-rose-600/20 via-pink-600/10 to-transparent",
    border: "border-rose-500/25 hover:border-rose-400/50",
    tag: "bg-rose-500/10 border-rose-400/25 text-rose-300 hover:bg-rose-500/20",
    skills: ["AWS Lambda", "S3 / SQS", "DynamoDB", "CloudWatch", "Docker", "Kubernetes", "Ansible", "GitHub Actions"],
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

export const certification = "AWS Academy Graduate – Data Engineering";
