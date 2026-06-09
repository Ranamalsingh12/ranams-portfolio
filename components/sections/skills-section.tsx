"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  MonitorSmartphone,
  Rocket,
  ServerCog,
  Wrench,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { skillClusters } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  frontend: MonitorSmartphone,
  backend: ServerCog,
  data: Database,
  tooling: Wrench,
  ai: BrainCircuit,
  product: Rocket,
};

export function SkillsSection() {
  const [activeId, setActiveId] = useState("frontend");
  const active = skillClusters.find((cluster) => cluster.id === activeId) ?? skillClusters[0];
  const ActiveIcon = iconMap[active.id as keyof typeof iconMap];

  return (
    <section className="section-shell" id="skills">
      <SectionHeading
        description="The stack matters, but what matters more is how each layer works together to create leverage. I like systems where the frontend, backend, automation, and product strategy all reinforce each other."
        eyebrow="Skills"
        title="An interactive skill map shaped around product execution, not isolated buzzwords."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="hidden lg:block">
          <div className="relative mx-auto h-[560px] max-w-[580px] rounded-full border border-white/8 bg-[radial-gradient(circle,rgba(56,189,248,0.08),transparent_55%)]">
            <div className="absolute inset-[16%] rounded-full border border-dashed border-white/8" />
            <div className="absolute inset-[30%] rounded-full border border-dashed border-white/6" />
            <div className="absolute inset-[40%] rounded-full border border-white/8 bg-slate-950/75 shadow-[0_20px_80px_-30px_rgba(2,6,23,0.9)]">
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="inline-flex size-14 items-center justify-center rounded-3xl bg-sky-400/10 text-sky-100">
                  <ActiveIcon className="size-6" />
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                  Core focus
                </p>
                <h3 className="font-[family:var(--font-sora)] text-3xl font-semibold text-white">
                  Product systems
                </h3>
                <p className="max-w-[16rem] text-sm leading-6 text-white/56">
                  Frontend precision, backend pragmatism, and AI workflows that
                  solve real problems.
                </p>
              </div>
            </div>

            {skillClusters.map((cluster, index) => {
              const Icon = iconMap[cluster.id as keyof typeof iconMap];
              const isActive = cluster.id === activeId;

              return (
                <motion.button
                  animate={{ y: [0, index % 2 === 0 ? -12 : 12, 0] }}
                  className={cn(
                    "absolute w-[208px] rounded-[26px] border p-4 text-left shadow-[0_20px_70px_-35px_rgba(2,6,23,0.9)] backdrop-blur-md transition",
                    isActive
                      ? "border-sky-300/30 bg-sky-400/12"
                      : "border-white/10 bg-slate-950/78 hover:border-white/18 hover:bg-white/[0.06]",
                  )}
                  key={cluster.id}
                  onFocus={() => setActiveId(cluster.id)}
                  onMouseEnter={() => setActiveId(cluster.id)}
                  style={{
                    left: `calc(50% + ${cluster.x}px - 104px)`,
                    top: `calc(50% + ${cluster.y}px - 56px)`,
                  }}
                  transition={{
                    duration: 6 + index * 0.35,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  type="button"
                >
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-white/[0.05] text-white/82">
                    <Icon className="size-5" />
                  </div>
                  <p className="font-medium text-white">{cluster.label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/54">
                    {cluster.stack.slice(0, 3).join(" • ")}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7">
          <div className="flex items-center gap-4">
            <div className="inline-flex size-12 items-center justify-center rounded-3xl bg-sky-400/10 text-sky-100">
              <ActiveIcon className="size-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                Active cluster
              </p>
              <h3 className="mt-1 font-[family:var(--font-sora)] text-2xl font-semibold text-white">
                {active.label}
              </h3>
            </div>
          </div>

          <p className="mt-5 text-base leading-7 text-white/62">
            {active.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {active.stack.map((skill) => (
              <span
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/62"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:hidden">
            {skillClusters.map((cluster) => {
              const Icon = iconMap[cluster.id as keyof typeof iconMap];
              return (
                <button
                  className={cn(
                    "rounded-[24px] border p-4 text-left transition",
                    cluster.id === activeId
                      ? "border-sky-300/30 bg-sky-400/12"
                      : "border-white/10 bg-slate-950/70 hover:border-white/18 hover:bg-white/[0.05]",
                  )}
                  key={cluster.id}
                  onClick={() => setActiveId(cluster.id)}
                  type="button"
                >
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-white/[0.05] text-white/80">
                    <Icon className="size-5" />
                  </div>
                  <p className="font-medium text-white">{cluster.label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/54">
                    {cluster.stack.slice(0, 3).join(" • ")}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
