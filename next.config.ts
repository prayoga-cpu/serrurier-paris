import type { NextConfig } from "next";

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
};

export default nextConfig;
