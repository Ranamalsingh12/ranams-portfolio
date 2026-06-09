import { cn } from "@/lib/utils";

type ProjectMockupProps = {
  variant: "orbitwork" | "vote-chain" | "cryptoverse";
  className?: string;
};

export function ProjectMockup({ variant, className }: ProjectMockupProps) {
  if (variant === "orbitwork") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.24),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.28),transparent_35%),linear-gradient(180deg,#0b1221,#050816)] p-5",
          className,
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(255,255,255,0.02))]" />
        <div className="relative rounded-[22px] border border-white/8 bg-slate-950/80 p-4 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.95)]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                OrbitWork
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                Candidate pipeline cockpit
              </p>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
              Queue healthy
            </div>
          </div>
          <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-white/48">
                <span>Job queue</span>
                <span>Today</span>
              </div>
              <div className="space-y-3">
                {[
                  ["Senior Product Engineer", "AI match 92%", "LinkedIn"],
                  ["Full Stack Builder", "Priority shortlist", "Lever"],
                  ["Platform Engineer", "Manual review", "Greenhouse"],
                ].map(([role, score, source]) => (
                  <div
                    key={role}
                    className="rounded-[18px] border border-white/8 bg-slate-950/75 p-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-white">{role}</p>
                      <span className="rounded-full bg-sky-400/10 px-2 py-1 text-[11px] text-sky-200">
                        {source}
                      </span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#38bdf8,#818cf8)]"
                        style={{
                          width:
                            role === "Senior Product Engineer"
                              ? "92%"
                              : role === "Full Stack Builder"
                                ? "74%"
                                : "58%",
                        }}
                      />
                    </div>
                    <p className="mt-2 text-xs text-white/48">{score}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Resume intelligence
                </p>
                <div className="mt-4 space-y-2">
                  <div className="h-3 rounded-full bg-white/8">
                    <div className="h-full w-[86%] rounded-full bg-emerald-300/70" />
                  </div>
                  <div className="h-3 rounded-full bg-white/8">
                    <div className="h-full w-[68%] rounded-full bg-sky-300/70" />
                  </div>
                  <div className="h-3 rounded-full bg-white/8">
                    <div className="h-full w-[78%] rounded-full bg-violet-300/70" />
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Apply engine
                </p>
                <div className="mt-4 flex items-end gap-2">
                  {[48, 62, 74, 58, 83].map((value) => (
                    <div
                      key={value}
                      className="w-full rounded-full bg-[linear-gradient(180deg,rgba(129,140,248,0.85),rgba(56,189,248,0.35))]"
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "vote-chain") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_15%_15%,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.15),transparent_30%),linear-gradient(180deg,#0e1118,#05070b)] p-5",
          className,
        )}
      >
        <div className="relative rounded-[24px] border border-white/8 bg-slate-950/90 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                Vote Chain
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                Verified election flow
              </p>
            </div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
              Verified
            </span>
          </div>
          <div className="grid gap-3 md:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-sm font-medium text-white">Biometric match</p>
              <div className="mt-4 grid h-[180px] place-items-center rounded-[22px] border border-dashed border-white/12 bg-white/[0.02]">
                <div className="relative flex size-28 items-center justify-center rounded-full border border-emerald-300/35 bg-emerald-300/10">
                  <div className="absolute inset-4 rounded-full border border-emerald-300/25" />
                  <div className="absolute inset-8 rounded-full border border-emerald-300/20" />
                  <div className="size-10 rounded-full bg-emerald-200/70" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Election visibility
                </p>
                <div className="mt-4 space-y-2">
                  {[
                    "India",
                    "Telangana",
                    "Medchal-Malkajgiri",
                    "Ghatkesar",
                    "Rampally",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-full border border-white/8 bg-slate-950/70 px-3 py-2"
                    >
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-sky-400/10 text-xs text-sky-200">
                        {index + 1}
                      </span>
                      <span className="text-sm text-white/78">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">Commit → reveal</p>
                  <span className="text-xs text-white/40">Mocked flow</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/8">
                  <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#22c55e,#38bdf8)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(244,114,182,0.14),transparent_30%),linear-gradient(180deg,#0b0f17,#06090f)] p-5",
        className,
      )}
    >
      <div className="relative rounded-[24px] border border-white/8 bg-slate-950/90 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/42">
              CryptoVerse
            </p>
            <p className="mt-1 text-lg font-semibold text-white">
              Market intelligence dashboard
            </p>
          </div>
          <span className="rounded-full border border-pink-300/20 bg-pink-300/10 px-3 py-1 text-xs text-pink-100">
            Real-time feel
          </span>
        </div>
        <div className="grid gap-3 lg:grid-cols-[1fr_0.92fr]">
          <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-white">Top movers</p>
              <span className="text-xs text-white/40">24h</span>
            </div>
            <div className="space-y-3">
              {[
                ["BTC", "+4.8%", "emerald"],
                ["ETH", "+2.3%", "sky"],
                ["SOL", "-1.1%", "rose"],
              ].map(([token, delta, tone]) => (
                <div
                  key={token}
                  className="flex items-center justify-between rounded-full border border-white/8 bg-slate-950/70 px-4 py-3"
                >
                  <span className="text-sm font-medium text-white">{token}</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-1 text-xs",
                      tone === "emerald" && "bg-emerald-400/10 text-emerald-200",
                      tone === "sky" && "bg-sky-400/10 text-sky-200",
                      tone === "rose" && "bg-rose-400/10 text-rose-200",
                    )}
                  >
                    {delta}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                Historical chart
              </p>
              <div className="mt-4 flex h-[120px] items-end gap-2">
                {[46, 54, 61, 58, 70, 72, 88, 75, 94, 86].map((value) => (
                  <div
                    key={value}
                    className="w-full rounded-t-full bg-[linear-gradient(180deg,rgba(56,189,248,0.85),rgba(236,72,153,0.3))]"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                News velocity
              </p>
              <div className="mt-4 space-y-2">
                {["Macro moves", "L2 ecosystem", "ETF headlines"].map((headline) => (
                  <div
                    key={headline}
                    className="rounded-[16px] border border-white/8 bg-slate-950/70 px-3 py-2 text-sm text-white/72"
                  >
                    {headline}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
