import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/data";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(56,189,248,0.25), transparent 35%), radial-gradient(circle at 80% 0%, rgba(99,102,241,0.28), transparent 35%), linear-gradient(180deg, #050816 0%, #0b1221 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "Manrope",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "92px 92px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 999,
              border: "1px solid rgba(125, 211, 252, 0.25)",
              background: "rgba(56, 189, 248, 0.08)",
              padding: "12px 18px",
              fontSize: 22,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(186, 230, 253, 0.92)",
            }}
          >
            Software Engineer · Frontend · Full Stack · AI
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 82,
                fontWeight: 700,
                letterSpacing: "-0.08em",
                lineHeight: 0.95,
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                maxWidth: 920,
                fontSize: 34,
                lineHeight: 1.35,
                color: "rgba(226, 232, 240, 0.78)",
              }}
            >
              Product-focused engineer building premium frontend systems,
              full-stack workflows, and AI-powered experiences.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 26,
              color: "rgba(226, 232, 240, 0.65)",
            }}
          >
            <span>{siteConfig.signatureLine}</span>
            <span>ranams99911@gmail.com</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
