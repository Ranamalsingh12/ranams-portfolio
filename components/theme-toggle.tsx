"use client";

import { useSyncExternalStore } from "react";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="inline-flex size-8 items-center justify-center rounded-full text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
        type="button"
      >
        <Moon className="size-[1.05rem]" strokeWidth={1.8} />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex size-8 items-center justify-center rounded-full text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      {isDark ? (
        <SunMedium className="size-[1.05rem]" strokeWidth={1.8} />
      ) : (
        <Moon className="size-[1.05rem]" strokeWidth={1.8} />
      )}
    </button>
  );
}
