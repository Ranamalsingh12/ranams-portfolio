import Link from "next/link";
import { Mail } from "lucide-react";

import { GitHubLogo, LinkedInLogoColor } from "@/components/brand-icons";
import { siteConfig } from "@/lib/data";

const footerMenu = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#experience" },
  { label: "Components", href: "/#components" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] pt-6">
      <div className="flex flex-col gap-5 pb-2 text-[0.88rem] text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <span>© {new Date().getFullYear()} Rana.</span>
          <span className="hidden h-4 w-px bg-[var(--line)] sm:block" />
          {footerMenu.map((item) => (
            <Link
              className="transition hover:text-[var(--foreground)]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            aria-label="X"
            className="transition hover:text-[var(--foreground)]"
            href={siteConfig.twitter}
            rel="noreferrer"
            target="_blank"
          >
            <span className="text-lg font-semibold">X</span>
          </Link>
          <Link
            aria-label="Email"
            className="transition hover:text-[var(--foreground)]"
            href={`mailto:${siteConfig.email}`}
          >
            <Mail className="size-5" strokeWidth={1.8} />
          </Link>
          <Link
            aria-label="GitHub"
            className="transition hover:text-[var(--foreground)]"
            href={siteConfig.github}
            rel="noreferrer"
            target="_blank"
          >
            <GitHubLogo className="size-[1.05rem] text-[var(--foreground)]" />
          </Link>
          <Link
            aria-label="LinkedIn"
            className="transition hover:scale-[1.03]"
            href={siteConfig.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInLogoColor className="size-[1.05rem]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
