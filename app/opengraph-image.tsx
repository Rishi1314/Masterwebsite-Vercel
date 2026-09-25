import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/profile";

export const alt = `${site.name}, ${site.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "images/myphoto.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          backgroundColor: "#0a0b18",
          backgroundImage: "radial-gradient(ellipse 80% 70% at 20% 0%, rgba(99,102,241,0.35), transparent)",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={280}
          height={280}
          alt=""
          style={{ borderRadius: 999, border: "4px solid rgba(129,140,248,0.5)" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, color: "#ffffff" }}>{site.name}</div>
          <div style={{ fontSize: 34, color: "#a5b4fc" }}>
            {`${site.jobTitle} @ ${site.employer}`}
          </div>
          <div style={{ fontSize: 26, color: "rgba(226,232,240,0.6)" }}>
            MS CS, UNC Charlotte · Python · Rust · TypeScript
          </div>
          <div style={{ fontSize: 24, color: "rgba(129,140,248,0.8)", marginTop: 12 }}>rishiraj.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
