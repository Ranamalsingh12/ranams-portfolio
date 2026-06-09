"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          },
        );
      }

      itemRefs.current.forEach((item, index) => {
        if (!item) {
          return;
        }

        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: item,
              start: "top 78%",
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-shell" id="experience" ref={rootRef}>
      <Reveal>
        <SectionHeading
          description="The common thread across each role is ownership: translating ambiguous workflows into software that feels clear, stable, and useful."
          eyebrow="Experience"
          title="Shipping from enterprise operations to startup-grade product systems."
        />
      </Reveal>

      <div className="relative mt-14 pl-7 sm:pl-12">
        <div className="absolute left-2 top-0 h-full w-px bg-white/8 sm:left-4" />
        <div
          className="absolute left-2 top-0 h-full w-px bg-[linear-gradient(180deg,rgba(56,189,248,0.9),rgba(129,140,248,0.8),rgba(34,211,238,0.6))] sm:left-4"
          ref={lineRef}
        />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              className="relative"
              key={`${item.company}-${item.role}`}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
            >
              <div className="absolute -left-[1.1rem] top-7 size-4 rounded-full border border-sky-300/30 bg-sky-300 shadow-[0_0_0_6px_rgba(14,165,233,0.12)] sm:-left-[2.1rem]" />
              <article className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                      {item.period}
                    </p>
                    <h3 className="mt-3 font-[family:var(--font-sora)] text-2xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-lg text-white/74">{item.company}</p>
                    <p className="mt-2 text-sm text-white/44">
                      {item.location} • {item.type}
                    </p>
                  </div>
                  <p className="max-w-lg text-sm leading-7 text-white/58">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto]">
                  <div className="space-y-3">
                    {item.highlights.map((highlight) => (
                      <div
                        className="rounded-[22px] border border-white/8 bg-slate-950/70 px-4 py-4 text-sm leading-6 text-white/72"
                        key={highlight}
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 lg:max-w-[15rem] lg:justify-end">
                    {item.stack.map((tech) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/58"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
