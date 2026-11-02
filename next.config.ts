import type { NextConfig } from "next";
import { DOMAIN } from "./lib/config";

/**
 * Hosts that used to serve the site and must now hand their traffic, and any
 * ranking signal, to DOMAIN with a permanent redirect. serrurier-paris-theta
 * was the canonical origin from 28/08 to 31/10/2026 (CLAUDE.md v1.5 → v1.7), so
 * it may already be crawled; left serving 200s it would stay a full duplicate
 * of the site. Per-deployment preview URLs are different hosts and unaffected.
 *
 * Filtered against DOMAIN so pointing NEXT_PUBLIC_DOMAIN back at an old host
 * can never produce a redirect loop.
 */
const LEGACY_HOSTS = ["serrurier-paris-theta.vercel.app"];

const nextConfig: NextConfig = {
  // NOTE (CLAUDE.md §2): this was `output: "export"`. It had to go — a static
  // export has no server runtime, so there is nowhere to hold RESEND_API_KEY
  // or send mail from, and sending from the browser would publish the key.
  //
  // The rule §2 actually cares about is unchanged: "complete content in the
  // initial HTML before JS runs". Every marketing page here is still
  // prerendered to static HTML at build time (the build log marks them ○/●),
  // Vercel serves them from the edge as files, and `view-source:` is
  // byte-identical to before. The only thing that now runs on a server is
  // POST /api/submit, which renders no page.
  images: {
    unoptimized: true,
  },
  async redirects() {
    return LEGACY_HOSTS.filter((host) => host !== DOMAIN).map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `https://${DOMAIN}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
