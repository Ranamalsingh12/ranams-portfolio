import { ArrowRight, GitBranch, Lock } from "lucide-react";
import Link from "next/link";

import { ProjectMockup } from "@/components/project-mockup";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

const mockVariants = {
  orbitwork: "orbitwork",
  "vote-chain": "vote-chain",
  cryptoverse: "cryptoverse",
} as const;

export function ProjectsSection() {
  return (
    <section className="section-shell" id="projects">
      <Reveal>
        <SectionHeading
          description="Three different domains, one consistent pattern: take something noisy, technical, or repetitive and turn it into a product that feels directional."
          eyebrow="Featured Projects"
          title="Case studies that show startup instinct, interface craft, and systems thinking."
        />
      </Reveal>

      <div className="mt-12 grid gap-6">
        {projects.map((project, index) => (
          <Reveal delay={index * 0.06} key={project.slug}>
            <article className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] transition hover:border-white/16 hover:bg-white/[0.055]">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-6 sm:p-7">
                  <ProjectMockup variant={mockVariants[project.slug]} />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                      {project.tagline}
                    </p>
                    <h3 className="mt-4 font-[family:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
                      {project.name}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/62">
                      {project.summary}
                    </p>

                    <div className="mt-6 space-y-3">
                      {project.achievements.map((achievement) => (
                        <div
                          className="rounded-[20px] border border-white/8 bg-slate-950/70 px-4 py-4 text-sm leading-6 text-white/72"
                          key={achievement}
                        >
                          {achievement}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.slice(0, 6).map((tech) => (
                        <span
                          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/58"
                          key={tech}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button asChild variant="primary">
                      <Link href={`/projects/${project.slug}`}>
                        Open case study
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="secondary">
                        <Link href={project.githubUrl} rel="noreferrer" target="_blank">
                        <GitBranch className="size-4" />
                        GitHub
                      </Link>
                    </Button>
                    {project.liveUrl ? (
                      <Button asChild variant="ghost">
                        <Link href={project.liveUrl} rel="noreferrer" target="_blank">
                          Live product
                        </Link>
                      </Button>
                    ) : (
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/48">
                        <Lock className="size-4" />
                        Private build / case study only
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
