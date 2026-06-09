"use client";

import { useEffect, useEffectEvent, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const total = scrollHeight - clientHeight;
    return total <= 0 ? 0 : Math.min(scrollTop / total, 1);
  });

  const updateProgress = useEffectEvent(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const total = scrollHeight - clientHeight;
    setProgress(total <= 0 ? 0 : Math.min(scrollTop / total, 1));
  });

  useEffect(() => {
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px bg-white/6">
      <div
        className="h-full origin-left bg-[linear-gradient(90deg,rgba(56,189,248,0.95),rgba(99,102,241,0.95),rgba(34,211,238,0.95))] shadow-[0_0_24px_rgba(56,189,248,0.7)] transition-[transform] duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
