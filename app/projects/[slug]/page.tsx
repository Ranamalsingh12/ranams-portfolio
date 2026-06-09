import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GitHubLogo } from "@/components/brand-icons";
import { Footer } from "@/components/footer";
import { getProjectBySlug, projects, siteConfig } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | ${siteConfig.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
  };
}

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "orbitwork") {
    return (
      <div className="surface-solid card-shadow rounded-[26px] bg-[radial-gradient(circle_at_top_right,rgba(56,99,255,0.3),transparent_28%),linear-gradient(135deg,#dfd2b7_0%,#f4ead4_48%,#d7d9e9_100%)] p-5 sm:p-6">
        <div className="mx-auto max-w-[520px] rounded-[24px] bg-[#090d13] p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/45">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-white/28" />
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/12" />
            </div>
            <span>OrbitWork</span>
            <span>Automation</span>
          </div>

          <div className="mt-3 grid gap-2.5 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[18px] border border-white/8 bg-white/[0.04] p-3.5">
              <div className="h-2.5 w-20 rounded-full bg-white/18" />
              <div className="mt-4 space-y-2">
                <div className="h-10 rounded-[14px] bg-white/[0.06]" />
                <div className="h-10 rounded-[14px] bg-white/[0.06]" />
                <div className="h-20 rounded-[18px] bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(34,197,94,0.12))]" />
              </div>
            </div>
            <div className="space-y-2.5">
              <div className="rounded-[18px] border border-white/8 bg-white/[0.04] p-3.5">
                <div className="h-2.5 w-16 rounded-full bg-white/18" />
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
    <div className="surface-solid card-shadow rounded-[26px] bg-[radial-gradient(circle_at_bottom_left,rgba(235,64,52,0.28),transparent_24%),radial-gradient(circle_at_top_center,rgba(255,255,255,0.9),transparent_25%),linear-gradient(135deg,#203239_0%,#1f2527_40%,#4d4343_100%)] p-5 sm:p-6">
      <div className="mx-auto max-w-[520px] rounded-[24px] bg-[#fbfaf6] p-5 text-[#121212]">
        <div className="mx-auto h-2.5 w-16 rounded-full bg-[#d8d4cb]" />
        <div className="mx-auto mt-5 max-w-[330px] text-center">
          <h3 className="text-[1.55rem] font-semibold leading-tight tracking-[-0.06em]">
            Product thinking applied to a complex technical domain.
          </h3>
          <p className="mx-auto mt-2.5 max-w-[270px] text-[0.82rem] leading-5 text-[#6b665c]">
            Clear structure, strong interaction design, and a UI that makes dense workflows easier to navigate.
          </p>
        </div>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
          {["Flow", "Trust", "Insight"].map((item) => (
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-14 pt-[82px] sm:pt-[92px]" id="content">
      <div className="mx-auto max-w-[1040px] px-4">
        <Link
          className="inline-flex items-center gap-2 text-[0.88rem] text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
          href="/#about"
        >
          <ArrowLeft className="size-4" strokeWidth={1.8} />
          Back to portfolio
        </Link>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div>
            <p className="section-label">Case Study</p>
            <h1 className="mt-4 text-[2.45rem] font-semibold tracking-[-0.08em] text-[var(--foreground)] sm:text-[3.3rem]">
              {project.name}
            </h1>
            <p className="mt-3 text-[1rem] text-[var(--muted-foreground)]">
              {project.tagline}
            </p>
            <p className="mt-6 max-w-[560px] text-[0.95rem] leading-7 text-[var(--muted-foreground)]">
              {project.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2.5 text-[0.88rem] font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]"
                href={project.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                <GitHubLogo className="size-4 text-[var(--foreground)]" />
                View GitHub
              </Link>

              {project.liveUrl ? (
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2.5 text-[0.88rem] font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]"
                  href={project.liveUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Live preview
                  <ArrowUpRight className="size-4" strokeWidth={1.8} />
                </Link>
              ) : (
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2.5 text-[0.88rem] text-[var(--muted-foreground)]">
                  <Lock className="size-4" strokeWidth={1.8} />
                  Private build / walkthrough on request
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.78rem] text-[var(--muted-foreground)]"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <ProjectVisual slug={project.slug} />
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="surface-solid card-shadow rounded-[26px] p-6">
            <p className="section-label">Problem</p>
            <p className="mt-4 text-[0.94rem] leading-7 text-[var(--muted-foreground)]">
              {project.challenge}
            </p>
          </article>

          <article className="surface-solid card-shadow rounded-[26px] p-6">
            <p className="section-label">Solution</p>
            <p className="mt-4 text-[0.94rem] leading-7 text-[var(--muted-foreground)]">
              {project.solution}
            </p>
          </article>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="surface-solid card-shadow rounded-[26px] p-6">
            <p className="section-label">Architecture</p>
            <div className="mt-5 space-y-2.5">
              {project.architecture.map((item) => (
                <div
                  className="rounded-[18px] border border-[var(--line)] px-4 py-3.5 text-[0.88rem] leading-6 text-[var(--muted-foreground)]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="surface-solid card-shadow rounded-[26px] p-6">
            <p className="section-label">Impact</p>
            <div className="mt-5 space-y-2.5">
              {project.impact.map((item) => (
                <div
                  className="rounded-[18px] border border-[var(--line)] px-4 py-3.5 text-[0.88rem] leading-6 text-[var(--muted-foreground)]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-5">
          <article className="surface-solid card-shadow rounded-[26px] p-6">
            <p className="section-label">Key Achievements</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {project.achievements.map((achievement) => (
                <div
                  className="rounded-[18px] border border-[var(--line)] p-4 text-[0.88rem] leading-6 text-[var(--muted-foreground)]"
                  key={achievement}
                >
                  {achievement}
                </div>
              ))}
            </div>
          </article>
        </section>

        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </main>
  );
}
