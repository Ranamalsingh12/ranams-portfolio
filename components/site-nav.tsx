"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { navigationItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const linkTargets: Record<string, string> = {
  home: "/#home",
  about: "/#about",
  components: "/#components",
};

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 12);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-[1040px] items-center justify-between rounded-full px-4 py-2 transition-all duration-200 sm:px-5",
          scrolled || pathname !== "/"
            ? "surface-solid border border-[var(--line)] shadow-[0_12px_34px_-24px_rgba(15,23,42,0.3)]"
            : "bg-transparent",
        )}
      >
        <nav className="flex items-center gap-5 text-[0.94rem] sm:gap-6 sm:text-[0.98rem]">
          {navigationItems.map((item, index) => (
            <Link
              key={item.id}
              className={cn(
                "transition-colors duration-200",
                index === 0
                  ? "font-medium text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
              )}
              href={pathname === "/" ? linkTargets[item.id] : linkTargets[item.id]}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
