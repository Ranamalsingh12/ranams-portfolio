import { Download, FileText, GraduationCap, Layers2, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { resumeFacts, siteConfig } from "@/lib/data";

export function ResumeSection() {
  return (
    <section className="section-shell" id="resume">
      <Reveal>
        <SectionHeading
          description="The site tells the story. The resume gives recruiters and hiring managers the concise version they can forward around quickly."
          eyebrow="Resume"
          title="A polished summary, ready to download."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                  Downloadable PDF
                </p>
                <h3 className="mt-4 font-[family:var(--font-sora)] text-3xl font-semibold text-white">
                  Rana Mal Singh Resume
                </h3>
              </div>
              <div className="inline-flex size-12 items-center justify-center rounded-3xl bg-sky-400/10 text-sky-100">
                <FileText className="size-6" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {resumeFacts.map((fact) => (
                <div
                  className="rounded-[22px] border border-white/8 bg-slate-950/70 px-4 py-4 text-sm leading-6 text-white/72"
                  key={fact}
                >
                  {fact}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link download href={siteConfig.resumePath}>
                  Download resume
                  <Download className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/#contact">Discuss an opportunity</Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.03))] p-7">
            <div className="absolute right-6 top-6 inline-flex size-12 items-center justify-center rounded-3xl bg-white/[0.05] text-white/72">
              <Sparkles className="size-5" />
            </div>
            <div className="rounded-[28px] border border-white/8 bg-slate-950/84 p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.95)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-[family:var(--font-sora)] text-2xl font-semibold text-white">
                    {siteConfig.name}
                  </p>
                  <p className="mt-2 text-sm text-white/48">{siteConfig.role}</p>
                </div>
                <div className="rounded-full border border-sky-400/18 bg-sky-400/10 px-3 py-1 text-xs text-sky-100">
                  Resume preview
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Layers2,
                    title: "Frontend systems",
                    text: "React, Next.js, TypeScript, Tailwind",
                  },
                  {
                    icon: FileText,
                    title: "Full-stack delivery",
                    text: "Node.js, APIs, databases, automation",
                  },
                  {
                    icon: GraduationCap,
                    title: "Education",
                    text: "B.E. CSE • Chandigarh Group of Colleges",
                  },
                ].map((item) => (
                  <div
                    className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4"
                    key={item.title}
                  >
                    <item.icon className="size-5 text-sky-100" />
                    <p className="mt-4 font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/54">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                {["Objective", "Experience", "Projects", "Technical Skills"].map(
                  (line, index) => (
                    <div key={line}>
                      <div className="mb-2 flex items-center justify-between text-sm text-white/54">
                        <span>{line}</span>
                        <span>0{index + 1}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,#38bdf8,#818cf8)]"
                          style={{ width: `${84 - index * 10}%` }}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
