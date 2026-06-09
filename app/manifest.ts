import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/data";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const pathname = new URL(siteConfig.url).pathname.replace(/\/$/, "");
  const basePath = pathname === "" ? "" : pathname;

  return {
    name: siteConfig.name,
    short_name: "Rana",
    description: siteConfig.description,
    start_url: `${basePath || ""}/`,
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [
      {
        src: `${basePath || ""}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
