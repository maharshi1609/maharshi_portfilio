import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { coreStack } from "@/data/skills";

export const alt = `${site.name} — ${site.role} specialising in React.js and Next.js`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #05070E 0%, #0A1121 55%, #0D1A33 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "#E8EEF9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "1px solid #23304A",
              background: "#0E1526",
              color: "#4C8DFF",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            MP
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#99A5BA",
              letterSpacing: 2,
            }}
          >
            {site.location.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 30, color: "#99A5BA" }}>
            {site.headline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#4C8DFF",
              marginTop: 12,
            }}
          >
            Full Stack Developer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#99A5BA",
              marginTop: 20,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Building responsive, scalable and user-focused web experiences with
            React.js and Next.js.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {coreStack.slice(0, 7).map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 10,
                border: "1px solid #23304A",
                background: "#0B1220",
                fontSize: 20,
                color: "#C3CDDE",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
