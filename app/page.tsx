"use client";

import type { ComponentType, FormEvent, SVGProps } from "react";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Blocks,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock3,
  Flame,
  GitBranch,
  Globe,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Wind,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { GitHubLogo, LinkedInLogoColor } from "@/components/brand-icons";
import { Footer } from "@/components/footer";
import { experience, projects, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

type TechMark = {
  id: string;
  label?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  tone: "square" | "circle" | "word";
  className: string;
  textClassName?: string;
  iconClassName?: string;
};

const techStack: TechMark[] = [
  { id: "typescript", label: "TS", tone: "square", className: "bg-[#3178c6] text-white" },
  { id: "javascript", label: "JS", tone: "square", className: "bg-[#f7df1e] text-[#161616]" },
  { id: "python", label: "PY", tone: "circle", className: "bg-[linear-gradient(135deg,#2d6ca2,#f5d565)] text-white" },
  { id: "react", icon: Atom, tone: "word", className: "text-[#63d9fb]", iconClassName: "size-11" },
  { id: "node", label: "N", tone: "circle", className: "border border-[#8bc34a] bg-transparent text-[#8bc34a]" },
  { id: "next", label: "N", tone: "circle", className: "bg-[#111111] text-white dark:bg-[var(--foreground)] dark:text-[#111111]" },
  { id: "tailwind", icon: Wind, tone: "word", className: "text-[#53c6dd]", iconClassName: "size-11" },
  { id: "express", label: "ex", tone: "word", className: "text-[#444444] dark:text-[#d7d7cf]" },
  { id: "firebase", icon: Flame, tone: "word", className: "text-[#f58220]", iconClassName: "size-11" },
  { id: "git", icon: GitBranch, tone: "word", className: "text-[#e76f51]", iconClassName: "size-10" },
  { id: "github", icon: GitHubLogo, tone: "word", className: "text-[var(--foreground)]", iconClassName: "size-9" },
  { id: "mongodb", icon: Leaf, tone: "word", className: "text-[#6ba84f]", iconClassName: "size-10" },
  { id: "sql", label: "SQL", tone: "word", className: "text-[#4d8bb4]" },
  { id: "docker", icon: Blocks, tone: "word", className: "text-[#4b90ff]", iconClassName: "size-10" },
  { id: "figma", label: "Fg", tone: "word", className: "text-[#ef6351]" },
  { id: "postman", label: "PM", tone: "circle", className: "bg-[#ff6c37] text-white" },
  { id: "api", icon: Wrench, tone: "word", className: "text-[#111111] dark:text-[#f4f4ef]", iconClassName: "size-10" },
  { id: "ai", icon: Sparkles, tone: "word", className: "text-[#8669ff]", iconClassName: "size-10" },
];

const projectSlugs = ["orbitwork", "vote-chain"] as const;

const heroLinks = [
  { href: siteConfig.twitter, label: "X", type: "text" as const },
  { href: siteConfig.github, label: "GitHub", icon: GitHubLogo },
  { href: siteConfig.linkedin, label: "LinkedIn", icon: LinkedInLogoColor },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
];

const contactLinks = [
  {
    title: "Call Rana directly",
    subtitle: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    title: siteConfig.email,
    subtitle: "Quick inquiries & questions",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    title: "Connect on X",
    subtitle: "Follow for updates & insights",
    href: siteConfig.twitter,
    icon: "x" as const,
  },
];

const contributionMonths = [
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
];

const contributionColumns = Array.from({ length: 53 }, (_, column) =>
  Array.from({ length: 7 }, (_, row) => {
    const seed = (column * 17 + row * 11 + (column % 4) * 7) % 13;

    if ((column + row) % 19 === 0) {
      return 4;
    }

    if (seed > 10) {
      return 3;
    }

    if (seed > 8) {
      return 2;
    }

    if (seed > 6) {
      return 1;
    }

    return 0;
  }),
);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function techPreview(tech: string): TechMark {
  const normalized = tech.toLowerCase();

  if (normalized.includes("react")) {
    return {
      id: tech,
      icon: Atom,
      tone: "word",
      className: "text-[#63d9fb]",
      iconClassName: "size-5",
    };
  }

  if (normalized.includes("next")) {
    return { id: tech, label: "N", tone: "circle", className: "bg-[#111111] text-white" };
  }

  if (normalized.includes("tailwind")) {
    return {
      id: tech,
      icon: Wind,
      tone: "word",
      className: "text-[#53c6dd]",
      iconClassName: "size-5",
    };
  }

  if (normalized.includes("typescript")) {
    return { id: tech, label: "TS", tone: "square", className: "bg-[#3178c6] text-white" };
  }

  if (normalized.includes("javascript")) {
    return { id: tech, label: "JS", tone: "square", className: "bg-[#f7df1e] text-[#161616]" };
  }

  if (normalized.includes("node")) {
    return { id: tech, label: "N", tone: "circle", className: "border border-[#8bc34a] text-[#8bc34a]" };
  }

  if (normalized.includes("express")) {
    return { id: tech, label: "ex", tone: "word", className: "text-[#444444] dark:text-[#d7d7cf]" };
  }

  if (normalized.includes("mongo")) {
    return {
      id: tech,
      icon: Leaf,
      tone: "word",
      className: "text-[#6ba84f]",
      iconClassName: "size-5",
    };
  }

  if (normalized.includes("sql") || normalized.includes("postgres")) {
    return { id: tech, label: "SQL", tone: "word", className: "text-[#4d8bb4]" };
  }

  if (normalized.includes("redux")) {
    return { id: tech, label: "RX", tone: "circle", className: "bg-[#7c5cff] text-white" };
  }

  if (normalized.includes("solidity")) {
    return { id: tech, label: "SOL", tone: "word", className: "text-[#7a7a7a] dark:text-[#d7d7cf]" };
  }

  if (normalized.includes("playwright")) {
    return { id: tech, label: "PW", tone: "circle", className: "bg-[#7cc74f] text-white" };
  }

  if (normalized.includes("prisma")) {
    return { id: tech, label: "P", tone: "circle", className: "bg-[#111111] text-white dark:bg-[var(--foreground)] dark:text-[#111111]" };
  }

  if (normalized.includes("bullmq") || normalized.includes("redis")) {
    return { id: tech, label: "Q", tone: "circle", className: "bg-[#ef4444] text-white" };
  }

  if (normalized.includes("chart")) {
    return {
      id: tech,
      icon: ChartNoAxesCombined,
      tone: "word",
      className: "text-[#4d8bb4]",
      iconClassName: "size-5",
    };
  }

  return { id: tech, label: tech.slice(0, 2).toUpperCase(), tone: "square", className: "bg-[#d7d4cd] text-[#161616]" };
}

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>;
}

function LogoMark({
  mark,
  compact = false,
}: {
  mark: TechMark;
  compact?: boolean;
}) {
  const sizeClass = compact
    ? mark.tone === "word"
      ? "h-8 min-w-8"
      : "size-8"
    : mark.tone === "word"
      ? "h-12 min-w-12"
      : "size-12";

  const Icon = mark.icon;

  if (mark.tone === "word") {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center px-1",
          sizeClass,
          mark.className,
          compact ? "text-sm" : "text-[1.15rem]",
          mark.textClassName,
        )}
      >
        {Icon ? (
          <Icon className={cn(compact ? "size-4" : "size-8", mark.iconClassName)} strokeWidth={1.9} />
        ) : (
          <span className="font-medium tracking-[-0.05em]">{mark.label}</span>
        )}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[18px] font-semibold tracking-[-0.04em]",
        mark.tone === "circle" && "rounded-full",
        sizeClass,
        mark.className,
        compact ? "text-[0.72rem]" : "text-[1.1rem]",
      )}
    >
      {Icon ? (
        <Icon className={cn(compact ? "size-4" : "size-8", mark.iconClassName)} strokeWidth={1.9} />
      ) : (
        mark.label
      )}
    </span>
  );
}

function MonogramCard() {
  return (
    <div className="surface-solid card-shadow flex size-[92px] items-center justify-center rounded-[24px] sm:size-[98px]">
      <div className="relative flex size-[72px] items-center justify-center rounded-[18px] bg-[linear-gradient(145deg,#fffdf7,#f1eee6)] text-[1.35rem] font-semibold tracking-[-0.08em] text-[#161616] dark:bg-[linear-gradient(145deg,#171c25,#11151c)] dark:text-[var(--foreground)]">
        <span>RM</span>
        <span className="absolute bottom-3 right-3 size-1.5 rounded-full bg-emerald-500" />
      </div>
    </div>
  );
}

function ContributionHeatmap() {
  const shades = [
    "bg-[#ecece7] dark:bg-[#1d2530]",
    "bg-[#dbdad3] dark:bg-[#2a3443]",
    "bg-[#c4c2bc] dark:bg-[#3a475b]",
    "bg-[#a8a6a0] dark:bg-[#55657f]",
    "bg-[#6f6d67] dark:bg-[#899bb4]",
  ];

  return (
    <div className="mt-10 overflow-x-auto pb-1">
      <div className="min-w-[700px]">
        <div className="grid grid-cols-12 gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
          {contributionMonths.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>

        <div className="mt-3 flex gap-[5px]">
          {contributionColumns.map((column, columnIndex) => (
            <div className="grid grid-rows-7 gap-[5px]" key={`column-${columnIndex}`}>
              {column.map((level, rowIndex) => (
                <span
                  className={cn("size-[10px] rounded-[3px]", shades[level])}
                  key={`cell-${columnIndex}-${rowIndex}`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
          <span>Build Rhythm · 2025-26</span>
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex gap-[5px]">
              {shades.map((shade) => (
                <span className={cn("size-[10px] rounded-[3px]", shade)} key={shade} />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ slug }: { slug: string }) {
  if (slug === "orbitwork") {
    return (
      <div className="rounded-t-[30px] bg-[radial-gradient(circle_at_top_right,rgba(56,99,255,0.45),transparent_28%),linear-gradient(135deg,#dfd2b7_0%,#f4ead4_48%,#d7d9e9_100%)] p-4 sm:p-6">
        <div className="card-shadow mx-auto max-w-[500px] rounded-[24px] bg-[#090d13] p-3.5 sm:p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/45">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-white/28" />
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/12" />
            </div>
            <span>OrbitWork</span>
            <span>AI Matching</span>
          </div>

          <div className="mt-3 grid gap-2.5 sm:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[18px] border border-white/8 bg-white/[0.04] p-3.5">
              <div className="h-2.5 w-20 rounded-full bg-white/18" />
              <div className="mt-4 space-y-2">
                <div className="h-10 rounded-[14px] bg-white/[0.06]" />
                <div className="h-10 rounded-[14px] bg-white/[0.06]" />
                <div className="h-20 rounded-[18px] bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(34,197,94,0.12))]" />
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="rounded-[18px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3.5">
                <div className="flex items-center justify-between">
                  <div className="h-2.5 w-16 rounded-full bg-white/18" />
                  <Sparkles className="size-4 text-sky-300" strokeWidth={1.8} />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="h-10 rounded-[12px] bg-white/[0.05]" />
                  <div className="h-10 rounded-[12px] bg-white/[0.05]" />
                </div>
              </div>

              <div className="rounded-[18px] border border-white/8 bg-white/[0.04] p-3.5">
                <div className="h-2.5 w-20 rounded-full bg-white/18" />
                <div className="mt-4 space-y-2">
                  <div className="h-3 rounded-full bg-white/12" />
                  <div className="h-3 rounded-full bg-white/12" />
                  <div className="h-3 w-4/5 rounded-full bg-white/12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-t-[30px] bg-[radial-gradient(circle_at_bottom_left,rgba(235,64,52,0.32),transparent_24%),radial-gradient(circle_at_top_center,rgba(255,255,255,0.9),transparent_25%),linear-gradient(135deg,#203239_0%,#1f2527_40%,#4d4343_100%)] p-4 sm:p-6">
      <div className="card-shadow mx-auto max-w-[500px] rounded-[24px] bg-[#fbfaf6] p-4 text-[#121212]">
        <div className="mx-auto h-2.5 w-16 rounded-full bg-[#d8d4cb]" />
        <div className="mx-auto mt-5 max-w-[330px] text-center">
          <h3 className="text-[1.55rem] font-semibold leading-tight tracking-[-0.06em]">
            Transparent digital voting, finally productized.
          </h3>
          <p className="mx-auto mt-2.5 max-w-[270px] text-[0.82rem] leading-5 text-[#6b665c]">
            Verification, role-based access, and structured ballot flows wrapped in a clean product surface.
          </p>
        </div>

        <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
          {["Identity", "Ballot", "Results"].map((item) => (
            <div
              className="rounded-[16px] border border-[#e7e1d4] bg-white px-3.5 py-4 text-left"
              key={item}
            >
              <div className="h-2 w-10 rounded-full bg-[#e2ded5]" />
              <p className="mt-3 text-[0.82rem] font-medium text-[#171717]">{item}</p>
              <div className="mt-2.5 h-12 rounded-[12px] bg-[#f3f0e9]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ slug }: { slug: (typeof projectSlugs)[number] }) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return null;
  }

  return (
    <motion.article
      className="surface-solid card-shadow overflow-hidden rounded-[30px]"
      initial="hidden"
      transition={{ duration: 0.55 }}
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="visible"
    >
      <ProjectPreview slug={project.slug} />

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[1.65rem] font-medium tracking-[-0.06em] text-[var(--foreground)]">
            {project.name}
          </h3>

          <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
            <Link
              aria-label={`${project.name} case study`}
              className="transition hover:text-[var(--foreground)]"
              href={`/projects/${project.slug}`}
            >
              <Globe className="size-5" strokeWidth={1.8} />
            </Link>
            <Link
              aria-label={`${project.name} GitHub repository`}
              className="transition hover:text-[var(--foreground)]"
              href={project.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              <GitHubLogo className="size-5 text-[var(--foreground)]" />
            </Link>
          </div>
        </div>

        <p className="mt-4 text-[0.95rem] leading-7 text-[var(--muted-foreground)] sm:text-[1rem]">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.tech.slice(0, 6).map((tech) => (
            <LogoMark compact key={tech} mark={techPreview(tech)} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ContactFormPanel() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState<{
    type: "idle" | "error" | "success";
    text: string;
  }>({
    type: "idle",
    text: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (name.length < 2) {
      setFeedback({ type: "error", text: "Please enter your name so Rana knows who to reply to." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFeedback({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    if (message.length < 12) {
      setFeedback({ type: "error", text: "Please add a little more detail to your message." });
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    setFeedback({
      type: "success",
      text: "Your message draft is ready in your mail app.",
    });

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="surface-solid card-shadow rounded-[26px] p-6 sm:p-7">
      <h3 className="text-[1.95rem] font-medium tracking-[-0.06em] text-[var(--foreground)]">
        Send a Message
      </h3>
      <p className="mt-3 max-w-[390px] text-[0.96rem] leading-7 text-[var(--muted-foreground)]">
        Prefer to write? Fill out the form and I&apos;ll get back to you within 24 hours.
      </p>

      <form className="mt-6 space-y-3.5" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-[24px] border border-[var(--line-strong)] bg-transparent px-5 py-4 text-[0.96rem] outline-none transition placeholder:text-[#b8b2a8] focus:border-[var(--foreground)] dark:placeholder:text-[#7f8691]"
          onChange={(event) =>
            setForm((current) => ({ ...current, name: event.target.value }))
          }
          placeholder="Full Name"
          type="text"
          value={form.name}
        />
        <input
          className="w-full rounded-[24px] border border-[var(--line-strong)] bg-transparent px-5 py-4 text-[0.96rem] outline-none transition placeholder:text-[#b8b2a8] focus:border-[var(--foreground)] dark:placeholder:text-[#7f8691]"
          onChange={(event) =>
            setForm((current) => ({ ...current, email: event.target.value }))
          }
          placeholder="Email Address"
          type="email"
          value={form.email}
        />
        <textarea
          className="min-h-[160px] w-full rounded-[24px] border border-[var(--line-strong)] bg-transparent px-5 py-4 text-[0.96rem] outline-none transition placeholder:text-[#b8b2a8] focus:border-[var(--foreground)] dark:placeholder:text-[#7f8691]"
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Your Message"
          value={form.message}
        />
        <button
          className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[var(--line-strong)] px-5 py-4 text-[0.96rem] font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]"
          type="submit"
        >
          <span>Send Message</span>
          <ArrowRight className="size-4" strokeWidth={1.8} />
        </button>
      </form>

      {feedback.type !== "idle" ? (
        <p
          className={cn(
            "mt-4 text-sm",
            feedback.type === "success"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-rose-600 dark:text-rose-400",
          )}
        >
          {feedback.text}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const featuredExperience = experience.slice(0, 3);

  return (
    <main className="pb-14 pt-[82px] sm:pt-[92px]" id="content">
      <div className="mx-auto max-w-[1040px] px-4">
        <motion.section
          className="pt-2"
          id="home"
          initial="hidden"
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <MonogramCard />

            <div>
              <h1 className="text-[2.45rem] font-semibold tracking-[-0.08em] text-[var(--foreground)] sm:text-[3.4rem]">
                Rana Mal Singh
              </h1>
              <p className="mt-1.5 text-[1.15rem] text-[var(--muted-foreground)] sm:text-[1.45rem]">
                Frontend &amp; Full Stack Engineer
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 text-[var(--foreground)] md:grid-cols-3">
            <div>
              <p className="section-label">Location</p>
              <div className="mt-2.5 flex items-center gap-2.5 text-[0.96rem] sm:text-[1rem]">
                <MapPin className="size-4 text-[var(--muted-foreground)]" strokeWidth={1.8} />
                <span>India</span>
              </div>
            </div>

            <div>
              <p className="section-label">Email</p>
              <div className="mt-2.5 flex items-center gap-2.5 text-[0.96rem] sm:text-[1rem]">
                <Mail className="size-4 text-[var(--muted-foreground)]" strokeWidth={1.8} />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>

            <div>
              <p className="section-label">Current</p>
              <div className="mt-2.5 flex items-center gap-2.5 text-[0.96rem] sm:text-[1rem]">
                <Building2 className="size-4 text-[var(--muted-foreground)]" strokeWidth={1.8} />
                <span>Hinduja Renewables</span>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-[820px] space-y-2 text-[1rem] leading-[1.7] text-[var(--muted-foreground)] sm:text-[1.08rem]">
            <p>
              I build full-stack products end-to-end, with a strong focus on frontend clarity, performance, and systems that scale cleanly.
            </p>
            <p>
              Currently working with React, Next.js, TypeScript, Node.js, Tailwind CSS, and AI-powered product workflows.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.92rem] text-[var(--muted-foreground)]">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>Currently building</span>
              <span className="text-[var(--foreground)]">OrbitWork · AI workflows</span>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4 text-[var(--muted-foreground)]">
            {heroLinks.map((item) => (
              <Link
                aria-label={item.label}
                className="transition hover:text-[var(--foreground)]"
                href={item.href}
                key={item.label}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              >
                {"type" in item && item.type === "text" ? (
                  <span className="text-[1.35rem] font-medium leading-none">X</span>
                ) : item.icon ? (
                  <item.icon className="size-5" strokeWidth={1.8} />
                ) : null}
              </Link>
            ))}
          </div>

          <ContributionHeatmap />
        </motion.section>

        <section className="pt-16" id="about">
          <SectionLabel>Tech Stack</SectionLabel>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-4"
            initial="hidden"
            transition={{ duration: 0.55, staggerChildren: 0.03 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="visible"
          >
            {techStack.map((mark) => (
              <motion.div key={mark.id} variants={fadeInUp}>
                <LogoMark mark={mark} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="pt-16">
          <SectionLabel>Featured Projects</SectionLabel>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {projectSlugs.map((slug) => (
              <ProjectCard key={slug} slug={slug} />
            ))}
          </div>
        </section>

        <section className="pt-16" id="experience">
          <SectionLabel>Experience</SectionLabel>

          <div className="relative mt-8 pl-10 before:absolute before:left-[5px] before:top-0 before:h-full before:w-px before:bg-[var(--line)]">
            {featuredExperience.map((entry, index) => (
              <motion.article
                className="relative grid gap-4 pb-10 lg:grid-cols-[minmax(0,1fr)_190px]"
                initial="hidden"
                key={`${entry.company}-${entry.role}`}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.22 }}
                whileInView="visible"
              >
                <span
                  className={cn(
                    "absolute left-[-40px] top-[10px] block size-4 rounded-full border-[3px] border-[var(--background)]",
                    index === 0
                      ? "bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.14)]"
                      : "bg-[#a8a6a0] dark:bg-[#667085]",
                  )}
                />

                <div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-[1.5rem] font-medium tracking-[-0.06em] text-[var(--foreground)]">
                      {entry.role}
                    </h3>
                    <span className="text-[1.15rem] text-[var(--muted-foreground)]">·</span>
                    <p className="text-[1rem] text-[var(--muted-foreground)]">
                      {entry.company}
                    </p>
                  </div>

                  <p className="mt-1.5 text-[0.9rem] text-[var(--muted-foreground)]">
                    {entry.location}, {entry.type}
                  </p>

                  <p className="mt-5 max-w-[820px] text-[0.95rem] leading-7 text-[var(--muted-foreground)]">
                    {entry.summary}
                  </p>

                  {index > 0 ? (
                    <ul className="mt-4 space-y-2 text-[0.93rem] leading-7 text-[var(--muted-foreground)]">
                      {entry.highlights.slice(0, 2).map((highlight) => (
                        <li className="flex gap-3" key={highlight}>
                          <span aria-hidden className="mt-3 size-1 rounded-full bg-[var(--muted-foreground)]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {entry.stack.slice(0, 6).map((tech) => (
                      <LogoMark compact key={tech} mark={techPreview(tech)} />
                    ))}
                  </div>
                </div>

                <div className="text-left text-[0.9rem] font-medium text-[var(--foreground)] lg:text-right">
                  {entry.period}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="pt-14" id="components">
          <SectionLabel>Let&apos;s Work Together</SectionLabel>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <motion.div
              className="surface-solid card-shadow rounded-[26px] p-6 sm:p-7"
              initial="hidden"
              transition={{ duration: 0.55 }}
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.25 }}
              whileInView="visible"
            >
              <h3 className="text-[1.95rem] font-medium tracking-[-0.06em] text-[var(--foreground)]">
                Get in Touch
              </h3>
              <p className="mt-3 max-w-[380px] text-[0.96rem] leading-7 text-[var(--muted-foreground)]">
                Choose your preferred method to connect and let&apos;s discuss your project.
              </p>

              <div className="mt-6 overflow-hidden rounded-[20px] border border-[var(--line)]">
                {contactLinks.map((item) => (
                  <Link
                    className="flex items-center justify-between gap-4 border-b border-[var(--line)] px-5 py-5 last:border-b-0 hover:bg-black/[0.015] dark:hover:bg-white/[0.02]"
                    href={item.href}
                    key={item.title}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <div className="flex items-center gap-5">
                      {item.icon === "x" ? (
                        <span className="text-[1.5rem] font-medium leading-none text-[var(--muted-foreground)]">
                          X
                        </span>
                      ) : (
                        <item.icon
                          className="size-6 text-[var(--muted-foreground)]"
                          strokeWidth={1.7}
                        />
                      )}
                      <div>
                        <p className="text-[1rem] font-medium text-[var(--foreground)]">
                          {item.title}
                        </p>
                        <p className="text-[0.88rem] text-[var(--muted-foreground)]">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="size-5 text-[var(--muted-foreground)]" strokeWidth={1.7} />
                  </Link>
                ))}
              </div>

              <div className="mt-7 space-y-2.5 text-[0.9rem] text-[var(--muted-foreground)]">
                <div className="flex items-center gap-3">
                  <Clock3 className="size-4" strokeWidth={1.8} />
                  <span>Replies within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-4" strokeWidth={1.8} />
                  <span>Open to remote, freelance &amp; full-time</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              transition={{ duration: 0.55, delay: 0.06 }}
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.25 }}
              whileInView="visible"
            >
              <ContactFormPanel />
            </motion.div>
          </div>
        </section>

        <motion.section
          className="surface-solid card-shadow mt-12 grid gap-6 rounded-[26px] p-6 sm:p-7 lg:grid-cols-[1.2fr_1px_0.9fr]"
          initial="hidden"
          transition={{ duration: 0.55 }}
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.25 }}
          whileInView="visible"
        >
          <div className="flex gap-6">
            <span className="text-[2.2rem] font-semibold leading-none text-[var(--muted-foreground)]">
              &quot;
            </span>

            <div className="flex-1">
              <p className="max-w-[620px] text-[1.05rem] leading-[1.75] text-[var(--foreground)] sm:text-[1.15rem]">
                Products feel inevitable when engineering, usability, and execution all move in the same direction.
              </p>
              <p className="mt-5 text-right text-[0.88rem] text-[var(--muted-foreground)]">
                — Rana Mal Singh
              </p>
            </div>
          </div>

          <div className="hidden h-full w-px bg-[var(--line)] lg:block" />

          <div className="flex items-center justify-start lg:justify-center">
            <p className="text-[0.98rem] leading-[1.65] text-[var(--muted-foreground)] sm:text-[1.05rem]">
              Currently shipping at the <strong className="font-semibold text-[var(--foreground)]">Hinduja Renewables</strong> engineering team
            </p>
          </div>
        </motion.section>

        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </main>
  );
}
