import { BRAND_NAME, DOMAIN } from "@/lib/config";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Brand colours, duplicated as literals because next/og renders through
// Satori — it has no access to the CSS custom properties in globals.css.
// Keep in sync with app/globals.css if the palette changes.
const INK = "#182941";
const SIGNAL = "#ffd400";
const PAPER = "#ffffff";

/**
 * Shared 1200×630 OG card. Navy field, yellow eyebrow pill, big headline —
 * the same visual language as the site itself, so a shared link is
 * recognisable. See CLAUDE.md §6 (custom branded OG image per key page).
 */
export function ogImage({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: INK,
        padding: "72px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            background: SIGNAL,
            color: INK,
            padding: "10px 24px",
            borderRadius: 999,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          color: PAPER,
          fontSize: 76,
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: -2,
          maxWidth: 940,
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: PAPER,
          fontSize: 28,
        }}
      >
        <div style={{ display: "flex", fontWeight: 700 }}>{BRAND_NAME}</div>
        <div style={{ display: "flex", color: SIGNAL, fontWeight: 700 }}>
          {DOMAIN}
        </div>
      </div>
    </div>
  );
}
