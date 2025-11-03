import { ImageResponse } from "next/og";

// Route segment config
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const title = "XperThrivr";
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: "#2563EB",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          justifyContent: "center",
        }}
      >
        <div style={{ fontWeight: 800 }}>{title}</div>
        <div style={{ fontSize: 28, marginTop: 16, opacity: 0.9 }}>
          Modern, ocean-inspired professional websites
        </div>
      </div>
    ),
    size
  );
}
