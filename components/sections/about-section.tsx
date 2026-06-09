import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPillars, engineeringPrinciples, siteConfig } from "@/lib/data";

export function AboutSection() {
  return (
    <section className="section-shell" id="about">
      <Reveal>
        <SectionHeading
          description="A portfolio can say a lot about tools. It should say even more about judgment. I’m most valuable when a team needs someone who can understand the product, shape the system, and then ship the experience with care."
          eyebrow="About"
          title="A product-focused engineer who likes turning complexity into confidence."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="space-y-5">
          {aboutPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sm font-medium text-sky-100">
                  0{index + 1}
                </span>
                <h3 className="font-[family:var(--font-sora)] text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
              </div>
              <p className="max-w-2xl text-base leading-7 text-white/62">
                {pillar.body}
              </p>
            </article>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.02))] p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-white/38">
              Engineering philosophy
            </p>
            <p className="mt-4 font-[family:var(--font-sora)] text-2xl font-semibold leading-tight text-white">
              Build the right system. Then make it feel effortless.
            </p>
            <p className="mt-4 text-base leading-7 text-white/60">
              {siteConfig.name} blends startup speed with architecture discipline:
              moving quickly, but not with shortcuts that punish the next team who
              has to scale the codebase.
            </p>
            <div className="mt-8 space-y-3">
              {engineeringPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="rounded-[22px] border border-white/8 bg-slate-950/70 px-4 py-4 text-sm leading-6 text-white/72"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
