import { ProjectMockup } from "@/components/project-mockup";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { orbitworkFeatures, orbitworkJourney, orbitworkSignals } from "@/lib/data";

export function OrbitworkSection() {
  return (
    <section className="section-shell" id="orbitwork">
      <Reveal>
        <SectionHeading
          description="OrbitWork deserves its own moment because it captures the kind of software I want to keep building: ambitious, operationally useful, and shaped like a real company rather than a one-off feature."
          eyebrow="Startup Spotlight"
          title="OrbitWork is designed like a funded product, not a side-project experiment."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
        <Reveal className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {orbitworkSignals.map((signal) => (
              <div
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5"
                key={signal.label}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/38">
                  {signal.label}
                </p>
                <p className="mt-4 font-[family:var(--font-sora)] text-xl font-semibold text-white">
                  {signal.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.03))] p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">
              Product narrative
            </p>
            <p className="mt-4 max-w-2xl font-[family:var(--font-sora)] text-3xl font-semibold leading-tight text-white">
              Source the right roles. Score them intelligently. Automate the busywork. Keep the human in control.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {orbitworkFeatures.map((feature) => (
                <div
                  className="rounded-[24px] border border-white/8 bg-slate-950/72 p-5"
                  key={feature.title}
                >
                  <h3 className="font-medium text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6">
            <ProjectMockup className="min-h-[440px]" variant="orbitwork" />

            <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                Workflow diagram
              </p>
              <div className="mt-6 grid gap-4">
                {orbitworkJourney.map((step, index) => (
                  <div className="relative rounded-[24px] border border-white/8 bg-slate-950/70 p-4" key={step}>
                    <div className="absolute left-6 top-full h-4 w-px bg-[linear-gradient(180deg,rgba(56,189,248,0.5),transparent)] last:hidden" />
                    <div className="flex items-center gap-4">
                      <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-sky-400/10 text-sm font-medium text-sky-100">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-6 text-white/72">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
