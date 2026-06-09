import { BriefcaseBusiness, FileText, GitBranch, Send } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialCards } from "@/lib/data";

const iconMap = [GitBranch, BriefcaseBusiness, Send, FileText];

export function SocialSection() {
  return (
    <section className="section-shell" id="social">
      <Reveal>
        <SectionHeading
          description="A strong engineering profile is bigger than one resume bullet. These channels show code, communication, curiosity, and how I stay connected to the product ecosystem."
          eyebrow="Social Presence"
          title="Professional visibility across code, writing, and builder conversations."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {socialCards.map((card, index) => {
          const Icon = iconMap[index];
          return (
            <Reveal delay={index * 0.05} key={card.label}>
              <Link
                className="group block rounded-[30px] border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/18 hover:bg-white/[0.055]"
                href={card.href}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex size-12 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.05] text-white/80">
                    <Icon className="size-5" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/42">
                    {card.eyebrow}
                  </span>
                </div>
                <h3 className="mt-6 font-[family:var(--font-sora)] text-2xl font-semibold text-white">
                  {card.label}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/60">
                  {card.description}
                </p>
                <p className="mt-6 text-sm text-sky-200 transition group-hover:translate-x-1">
                  {card.cta}
                </p>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
