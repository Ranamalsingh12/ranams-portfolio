"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, BrainCircuit, BriefcaseBusiness, Download, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { heroSignals, siteConfig } from "@/lib/data";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.2 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${useTransform(
    springX,
    [-0.5, 0.5],
    ["20%", "80%"],
  )} ${useTransform(springY, [-0.5, 0.5], ["18%", "82%"])}, rgba(56,189,248,0.18), transparent 32%)`;

  return (
    <section
      className="relative overflow-hidden pt-28 sm:pt-32"
      id="home"
      onMouseMove={(event) => {
        const { currentTarget, clientX, clientY } = event;
        const rect = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - rect.left) / rect.width - 0.5);
        mouseY.set((clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <Badge className="border-sky-400/18 bg-sky-400/10 text-sky-100">
            Software Engineer • Frontend • Full stack • AI
          </Badge>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-3xl font-[family:var(--font-sora)] text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteConfig.name}
            <span className="mt-3 block bg-[linear-gradient(135deg,#ffffff,rgba(191,219,254,0.82),rgba(125,211,252,0.92))] bg-clip-text text-transparent">
              {siteConfig.heroStatement}
            </span>
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            transition={{ delay: 0.12, duration: 0.84, ease: [0.22, 1, 0.36, 1] }}
          >
            Building scalable products, AI-powered experiences, and modern web
            applications with product thinking at the center.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            transition={{ delay: 0.18, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button asChild size="lg">
              <Link href="/#projects">
                View projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link download href={siteConfig.resumePath}>
                Download resume
                <Download className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/#contact">Contact me</Link>
            </Button>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 grid gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            transition={{ delay: 0.26, duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroSignals.map((signal) => (
              <Card key={signal.label} className="p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">
                  {signal.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/82">{signal.value}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative"
          style={{ perspective: 1400 }}
        >
          <motion.div
            className="absolute inset-0 -z-10 rounded-[38px] blur-3xl"
            style={{ background: spotlight }}
          />

          <motion.div
            className="relative"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <Card className="relative overflow-hidden rounded-[36px] p-6 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.16),transparent_32%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                      Current focus
                    </p>
                    <p className="mt-2 font-[family:var(--font-sora)] text-2xl font-semibold text-white">
                      Premium product systems
                    </p>
                  </div>
                  <div className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-100">
                    Open to ambitious teams
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-[1.12fr_0.88fr]">
                  <div className="rounded-[28px] border border-white/8 bg-slate-950/70 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">
                          Product execution stack
                        </p>
                        <p className="mt-1 text-sm text-white/44">
                          Frontend craft, automation, AI leverage
                        </p>
                      </div>
                      <Sparkles className="size-4 text-sky-200" />
                    </div>
                    <div className="mt-5 space-y-4">
                      {[
                        ["React / Next.js", "94%"],
                        ["TypeScript / Node.js", "88%"],
                        ["AI workflows / automation", "81%"],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <div className="mb-2 flex items-center justify-between text-sm text-white/68">
                            <span>{label}</span>
                            <span>{value}</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/8">
                            <div
                              className="h-full rounded-full bg-[linear-gradient(90deg,#38bdf8,#818cf8)]"
                              style={{ width: value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[28px] border border-white/8 bg-white/[0.04] p-5">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200">
                          <BriefcaseBusiness className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            Hinduja Renewables
                          </p>
                          <p className="text-sm text-white/46">Software Engineer</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[28px] border border-white/8 bg-white/[0.04] p-5">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-200">
                          <BrainCircuit className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">OrbitWork</p>
                          <p className="text-sm text-white/46">
                            AI-powered hiring automation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[28px] border border-white/8 bg-white/[0.04] p-5">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-200">
                          <Zap className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            Startup-minded
                          </p>
                          <p className="text-sm text-white/46">
                            Product-first, systems-oriented builder
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            className="absolute -left-3 top-8 hidden rounded-full border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white/70 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md lg:block"
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Performance, clarity, ownership.
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            className="absolute -right-2 bottom-8 hidden rounded-full border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white/70 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md lg:block"
            transition={{ duration: 6.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Product over feature thinking
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
