import { ImageResponse } from "next/og";
import { siteContent } from "@/content/site";

export const alt = siteContent.socialImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#f5f2eb", color: "#20231f", padding: "58px 72px 54px", fontFamily: "serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "sans-serif", fontSize: 20, letterSpacing: 1.8, textTransform: "uppercase" }}>
        <span>Emily A. West</span>
        <span style={{ color: "#9b3d2f" }}>University of Pittsburgh</span>
      </div>
      <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", maxWidth: 1040, paddingTop: 18 }}>
        <div style={{ maxWidth: 940, fontSize: 58, lineHeight: 1.08, letterSpacing: -2.2 }}>How do humans build better explanations?</div>
        <div style={{ display: "flex", width: 86, height: 3, margin: "30px 0 24px", background: "#9b3d2f" }} />
        <div style={{ maxWidth: 980, color: "#53574f", fontSize: 31, lineHeight: 1.3, letterSpacing: -0.5 }}>We do not simply accumulate new beliefs. We build explanatory frameworks...</div>
      </div>
      <div style={{ display: "flex", width: "100%", height: 2, background: "#9b3d2f" }} />
    </div>,
    size,
  );
}
