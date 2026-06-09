export type NavItem = {
  id: string;
  label: string;
};

export type HeroSignal = {
  label: string;
  value: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type SkillCluster = {
  id: string;
  label: string;
  description: string;
  stack: string[];
  x: number;
  y: number;
};

export type Project = {
  slug: ProjectSlug;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  longDescription: string;
  tech: string[];
  achievements: string[];
  githubUrl: string;
  liveUrl: string | null;
  challenge: string;
  solution: string;
  architecture: string[];
  impact: string[];
};

export type ProjectSlug = "orbitwork" | "vote-chain" | "cryptoverse";

export type SocialCard = {
  label: string;
  href: string;
  eyebrow: string;
  description: string;
  cta: string;
};

const fallbackSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const siteConfig = {
  name: "Rana Mal Singh",
  role: "Software Engineer | Frontend Engineer | Full Stack Developer | AI Engineer",
  title: "Rana Mal Singh | Software Engineer, Frontend & Full Stack Builder",
  description:
    "Product-focused software engineer building premium frontend systems, scalable full-stack applications, and AI-powered workflows with React, Next.js, TypeScript, Node.js, and modern web architecture.",
  email: "ranams99911@gmail.com",
  phone: "+91 99911 26684",
  url: fallbackSiteUrl,
  location: "India",
  github: "https://github.com/Ranamalsingh12",
  linkedin: "https://www.linkedin.com/in/rana-ms/",
  twitter: "https://x.com/RanaMS999",
  hashnode: "https://ranamsblogs.hashnode.dev",
  resumePath: "/resume/rana-mal-singh-resume.pdf",
  heroStatement:
    "I build products that make complex systems feel obvious.",
  heroSummary:
    "From enterprise dashboards to AI-driven automation, I ship high-leverage software with frontend precision, full-stack ownership, and startup speed.",
  signatureLine: "I build products, not just features.",
};

export const navigationItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "components", label: "Components" },
];

export const heroSignals: HeroSignal[] = [
  { label: "Experience", value: "2+ years shipping web products" },
  { label: "Strength", value: "Frontend craft + full-stack execution" },
  { label: "Focus", value: "AI workflows, product systems, performance" },
];

export const aboutPillars = [
  {
    title: "Product-first engineering",
    body:
      "I care about the outcome on the screen as much as the code behind it. Every system I build should help users move faster, decide better, and trust the product more.",
  },
  {
    title: "Complexity without the chaos",
    body:
      "My favorite problems live where operational complexity meets interface design: dashboards, workflow engines, automation layers, internal tools, and data-heavy surfaces.",
  },
  {
    title: "AI with practical leverage",
    body:
      "I’m especially energized by AI when it becomes a real product primitive, not a gimmick: resume analysis, recommendation systems, orchestration, and intelligent automation.",
  },
];

export const engineeringPrinciples = [
  "Design for clarity before cleverness.",
  "Keep systems modular so teams can move quickly without rewriting fundamentals.",
  "Treat performance, accessibility, and DX as product features, not cleanup work.",
];

export const experience: ExperienceEntry[] = [
  {
    company: "Hinduja Renewables",
    role: "Software Engineer",
    period: "Current role",
    location: "India",
    type: "Full-time",
    summary:
      "Building scalable software solutions across internal platforms, modern web applications, and engineering workflows for renewable-energy operations.",
    highlights: [
      "Driving frontend architecture decisions for internal tools that need to stay resilient under real operational usage.",
      "Shipping performance-conscious web applications that simplify complex workflows for teams inside the business.",
      "Improving engineering velocity through cleaner systems, stronger patterns, and better developer ergonomics.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "System Design"],
  },
  {
    company: "SR4DX × Mizukara",
    role: "Software Engineer – Frontend",
    period: "Aug 2024 — 2026",
    location: "Japan",
    type: "Client platform",
    summary:
      "Worked across a large operational platform for water treatment and clean energy, building workflow engines, dashboards, reporting systems, and cross-channel notifications.",
    highlights: [
      "Architected a dynamic form and workflow engine with scheduling, assignments, audit trails, and real-time status tracking.",
      "Built low-code report and dashboard builders with configurable layouts, live previews, exports, and personalized visibility.",
      "Implemented configurable notification routing across WhatsApp, Twilio, LINE, Slack, Chatwork, and email.",
    ],
    stack: ["Next.js", "Redux Toolkit", "Socket.IO", "Chart.js", "pdfmake"],
  },
  {
    company: "Cyberflow",
    role: "Frontend Engineer",
    period: "2021",
    location: "Remote",
    type: "Employee tracking product",
    summary:
      "Built an Electron-powered employee tracker and a responsive analytics-rich admin interface focused on real-time monitoring and role-aware controls.",
    highlights: [
      "Developed the desktop experience using Electron, React, Redux, and Socket.IO for fast status updates.",
      "Integrated charts, admin workflows, and responsive controls for different user roles and reporting needs.",
      "Focused early on the kind of polish that makes operational tools feel dependable instead of fragile.",
    ],
    stack: ["Electron.js", "React", "Redux", "Socket.IO", "Syncfusion"],
  },
];

export const skillClusters: SkillCluster[] = [
  {
    id: "frontend",
    label: "Frontend Systems",
    description:
      "Interfaces that feel fast, expressive, and production-grade on every breakpoint.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "MUI"],
    x: -215,
    y: -120,
  },
  {
    id: "backend",
    label: "Backend & APIs",
    description:
      "Pragmatic services, orchestration layers, and integration-heavy application logic.",
    stack: ["Node.js", "Express", "REST APIs", "GraphQL", "Microservices"],
    x: 220,
    y: -135,
  },
  {
    id: "data",
    label: "Data Layer",
    description:
      "Persistence, retrieval, and models designed to keep complex products easy to evolve.",
    stack: ["MongoDB", "MySQL", "SQL", "Prisma", "Redis"],
    x: 265,
    y: 105,
  },
  {
    id: "tooling",
    label: "Tooling & Delivery",
    description:
      "Shipping discipline across repos, deployment pipelines, and collaboration workflows.",
    stack: ["Git", "GitHub", "Docker", "Webpack", "Vercel", "Netlify"],
    x: -245,
    y: 120,
  },
  {
    id: "ai",
    label: "AI Integrations",
    description:
      "AI workflows that move beyond demos into recommendation, parsing, and automation.",
    stack: ["OpenAI APIs", "Anthropic", "Automation", "Resume Analysis"],
    x: 0,
    y: -240,
  },
  {
    id: "product",
    label: "Product Thinking",
    description:
      "UX judgment, system design, and startup-minded execution across ambiguous scopes.",
    stack: ["Performance", "Accessibility", "Design Systems", "Architecture"],
    x: 0,
    y: 235,
  },
];

export const projects: Project[] = [
  {
    slug: "orbitwork",
    name: "OrbitWork",
    tagline: "AI-powered job application automation platform",
    summary:
      "A startup-style product that analyzes resumes, aggregates opportunities, matches candidates with roles, and automates applications across multiple ATS flows.",
    description:
      "Built as an end-to-end workflow for modern job hunting: sourcing, qualification, automation, outreach, and tracking in one system.",
    longDescription:
      "OrbitWork turns fragmented job hunting into a controlled operating system. Candidates upload a resume once, connect AI credentials, discover jobs from multiple sources, review roles inside a queue, and selectively trigger automation across ATS flows such as LinkedIn, Greenhouse, Lever, Workday, and external forms. The product combines frontend clarity with backend orchestration, browser automation, queue-based workers, and user-controlled AI assistance.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Playwright",
      "Anthropic",
      "Prisma",
      "Zustand",
    ],
    achievements: [
      "Unified sourcing and application flows across LinkedIn, Greenhouse, Lever, Workday, and generic external apply pages.",
      "Created a two-step onboarding flow for profile, resume upload, and AI credentials before unlocking automation.",
      "Built dedicated surfaces for Startup Explorer, Job Queue, mass apply, outreach, resume analysis, and tracking.",
    ],
    githubUrl: "https://github.com/Ranamalsingh12/Orbitwork",
    liveUrl: null,
    challenge:
      "Applying to jobs is repetitive, fragmented, and mentally expensive. The data lives in too many places, the ATS flows are inconsistent, and the effort rarely compounds.",
    solution:
      "OrbitWork reframes the process as a product system: centralize candidate data, normalize job sources, use AI to improve relevance, and automate only the steps worth taking.",
    architecture: [
      "A React + TypeScript frontend handles onboarding, queue review, startup discovery, outreach editing, and resume workflows with typed client-side models.",
      "An Express + Prisma backend coordinates authentication, data persistence, AI requests, resume parsing, and orchestration logic.",
      "Redis and BullMQ move scraping and apply automation into background workers so the UI stays responsive while long-running jobs continue safely.",
      "Playwright-powered apply handlers support multiple ATS flows with stored sessions, retries, screenshots, and user-controlled execution.",
    ],
    impact: [
      "Reduced the operational overhead of hunting for roles by turning repeated candidate data into reusable system inputs.",
      "Made AI a practical product layer through resume analysis, opportunity matching, and automation support instead of surface-level novelty.",
      "Positioned the product like a real startup platform with clear workflow boundaries, queue-based architecture, and room to scale.",
    ],
  },
  {
    slug: "vote-chain",
    name: "Vote Chain",
    tagline: "Blockchain-driven voting with a biometric-grade product surface",
    summary:
      "A secure voting concept that blends wallet connectivity, identity verification flows, hierarchical election access, and a premium dashboard experience.",
    description:
      "Originally built during an MLH hackathon and later evolved into a richer interface that simulates trust, transparency, and region-aware voting flows.",
    longDescription:
      "Vote Chain explores what an auditable digital election experience could feel like if cryptographic trust met product clarity. The project combines verification flows, hierarchy-aware election visibility, wallet connectivity, and a commit-reveal voting simulation into a polished, government-grade dashboard. While the public experience is a frontend simulation, the product thinking focuses on transparency, role access, and confidence-building UX.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "React Hook Form",
      "Zustand",
      "Wagmi",
      "RainbowKit",
      "ethers.js",
      "Solidity",
      "MetaMask",
    ],
    achievements: [
      "Secured a top-10 placement during an MLH hackathon.",
      "Modeled multi-step biometric verification, ID upload, wallet connect, and election visibility logic in one cohesive flow.",
      "Explored commit-reveal voting interactions and hierarchy-aware admin tools through a modern interface.",
    ],
    githubUrl: "https://github.com/Ranamalsingh12/Votechain",
    liveUrl: null,
    challenge:
      "Voting systems need trust, clarity, and access control. Most demos focus on blockchain mechanics and ignore the real product experience citizens would need.",
    solution:
      "Vote Chain treats the election journey as a designed product, from identity checks and region mapping to wallet connection, ballot access, and simulated receipts.",
    architecture: [
      "The latest frontend iteration uses Next.js App Router with state managed by Zustand and form-heavy flows powered by React Hook Form.",
      "Wallet connectivity is implemented with Wagmi and RainbowKit so Web3 interactions feel native instead of bolted on.",
      "Region logic determines visibility from country down to village-level elections using hierarchical matching.",
      "Biometric steps, receipts, and blockchain interactions are simulated on the frontend to validate product direction before deeper backend work.",
    ],
    impact: [
      "Demonstrated how product design can make a technically dense domain feel understandable and trustworthy.",
      "Balanced visual polish with governance-oriented UX such as role-aware visibility and step-by-step verification.",
      "Created a strong portfolio example of frontend architecture in a high-trust interaction space.",
    ],
  },
  {
    slug: "cryptoverse",
    name: "CryptoVerse",
    tagline: "A market intelligence dashboard for crypto news, leaders, and trends",
    summary:
      "A data-heavy crypto experience that combines rankings, charts, market context, and curated news into a single product surface.",
    description:
      "Built for crypto users who need fast scanning, historical context, and clean navigation across a fast-moving information space.",
    longDescription:
      "CryptoVerse is a front-end product exercise in organizing noisy market information into something legible. It brings together top cryptocurrency rankings, historical charting, price changes, and news into a responsive interface powered by Redux Toolkit and Chart.js. The value is less about novelty and more about structuring complexity for decision-making.",
    tech: [
      "React",
      "Redux Toolkit",
      "Chart.js",
      "Axios",
      "Ant Design",
      "Moment",
      "HTML React Parser",
    ],
    achievements: [
      "Combined rankings, detail pages, charting, and news into one connected product flow.",
      "Handled data-heavy views with a layout designed for fast scanning and market context.",
      "Turned multiple third-party feeds into a cleaner interface for enthusiasts and investors.",
    ],
    githubUrl: "https://github.com/Ranamalsingh12/CryptoVerse",
    liveUrl: null,
    challenge:
      "Crypto information is fragmented and constantly changing, which makes it hard to follow markets without opening too many tabs.",
    solution:
      "CryptoVerse centralizes the essential surfaces: rankings, price history, performance charts, and news, all inside a responsive product UI.",
    architecture: [
      "Redux Toolkit manages shared market state and keeps page transitions consistent while navigating ranking and detail screens.",
      "Chart.js handles historical performance views with responsive resizing and contextual data storytelling.",
      "Axios-powered data fetching and news aggregation help the product combine multiple external sources.",
      "The UI leans into high-signal information density without collapsing into clutter.",
    ],
    impact: [
      "Showed strong comfort with chart-rich interfaces and large information surfaces.",
      "Strengthened skills around state architecture, async flows, and productizing third-party data.",
      "Created a practical example of frontend problem solving in a volatile domain.",
    ],
  },
];

export const orbitworkFeatures = [
  {
    title: "Resume intelligence",
    body:
      "Parse candidate data once, feed every downstream workflow, and keep the profile reusable across applications.",
  },
  {
    title: "Opportunity aggregation",
    body:
      "Pull roles from multiple sources and normalize them into a reviewable queue instead of forcing candidates to jump platform to platform.",
  },
  {
    title: "Selective automation",
    body:
      "Automate the repetitive form-filling and browser work only after the user decides a role is worth pursuing.",
  },
  {
    title: "Startup discovery",
    body:
      "Surface companies, jobs, and outreach angles in one place so job search becomes pipeline management instead of guesswork.",
  },
];

export const orbitworkJourney = [
  "Resume upload and profile setup",
  "AI-assisted matching and role triage",
  "Global sourcing across job platforms",
  "Auto-apply workflows for supported ATS paths",
  "Tracking, outreach, and continuous iteration",
];

export const orbitworkSignals = [
  { label: "Apply engines", value: "5 supported flows" },
  { label: "Onboarding", value: "2-step setup" },
  { label: "Workflow", value: "Source → score → apply → track" },
];

export const socialCards: SocialCard[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    eyebrow: "Code, experiments, and product builds",
    description:
      "Portfolio projects, startup prototypes, and frontend systems that show how I think through product execution.",
    cta: "Explore repositories",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    eyebrow: "Professional profile and career context",
    description:
      "A concise view into experience, current work, and the type of teams and opportunities I’m best aligned with.",
    cta: "View profile",
  },
  {
    label: "X / Twitter",
    href: siteConfig.twitter,
    eyebrow: "Thoughts, momentum, and builder energy",
    description:
      "Where I share ideas, follow the ecosystem, and stay close to the conversations shaping AI and modern product development.",
    cta: "Follow updates",
  },
  {
    label: "Hashnode",
    href: siteConfig.hashnode,
    eyebrow: "Writing and technical communication",
    description:
      "Notes and explanations on JavaScript internals, execution context, and the kind of fundamentals that sharpen product engineering.",
    cta: "Read articles",
  },
];

export const resumeFacts = [
  "Bachelor of Computer Science & Engineering, Chandigarh Group of Colleges (2022 — 2026)",
  "Core stack: React, Next.js, TypeScript, Node.js, Tailwind CSS, MongoDB, MySQL",
  "Additional strengths: GraphQL, WebSocket, Docker, Figma, Solidity, deployment workflows",
];

export const footerLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "GitHub", href: siteConfig.github },
  { label: "X", href: siteConfig.twitter },
  { label: "Hashnode", href: siteConfig.hashnode },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
