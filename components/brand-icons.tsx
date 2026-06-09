import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;

export function GitHubLogo({ className, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("fill-current", className)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.54-1.39-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .1-.78.42-1.3.77-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.31.46-2.38 1.23-3.22-.13-.3-.53-1.52.11-3.16 0 0 1-.33 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.56 3.29-1.23 3.29-1.23.65 1.64.25 2.86.12 3.16.76.84 1.23 1.91 1.23 3.22 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.21 0 1.6-.02 2.89-.02 3.29 0 .32.21.69.82.57A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInLogoColor({ className, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <rect fill="#0A66C2" height="24" rx="4.4" width="24" />
      <circle cx="6.8" cy="8.1" fill="#FFFFFF" r="1.55" />
      <rect fill="#FFFFFF" height="8.95" rx="0.6" width="2.6" x="5.5" y="10.1" />
      <path
        d="M11 10.1h2.5v1.22h.03c.35-.66 1.21-1.36 2.49-1.36 2.66 0 3.15 1.75 3.15 4.03v5.05h-2.6v-4.48c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37v4.56H11V10.1Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
