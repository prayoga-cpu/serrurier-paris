import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Tone = "light" | "dark";

const SIZES = {
  md: "px-6 py-3 text-sm gap-2.5",
  lg: "px-7 py-4 text-base gap-3",
} as const;

const BADGE_SIZES = {
  md: "h-7 w-7",
  lg: "h-9 w-9",
} as const;

/**
 * Brand button: full pill, bold label, and a circular badge holding the arrow.
 * `tone` is the surface it sits on — secondary buttons need a light border on
 * navy and a dark border on white.
 */
function styles(variant: Variant, tone: Tone) {
  if (variant === "primary") {
    return {
      shell:
        "bg-signal text-ink shadow-sm hover:bg-signal-hover active:bg-signal-press",
      badge: "bg-ink text-signal",
    };
  }
  return tone === "dark"
    ? { shell: "border border-paper/25 text-paper hover:border-paper/50", badge: "bg-signal text-ink" }
    : { shell: "border border-ink/15 text-ink hover:border-ink/35", badge: "bg-signal text-ink" };
}

function Inner({
  children,
  arrow,
  badge,
  size,
}: {
  children: ReactNode;
  arrow: boolean;
  badge: string;
  size: keyof typeof SIZES;
}) {
  return (
    <>
      {children}
      {arrow && (
        <span
          className={`flex ${BADGE_SIZES[size]} shrink-0 items-center justify-center rounded-full ${badge}`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </span>
      )}
    </>
  );
}

const BASE =
  "inline-flex items-center justify-center rounded-full font-semibold transition-colors";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  size?: keyof typeof SIZES;
  arrow?: boolean;
  className?: string;
};

/** Internal navigation — routes through next/link. */
export function ButtonLink({
  children,
  href,
  variant = "primary",
  tone = "light",
  size = "lg",
  arrow = true,
  className = "",
  ...rest
}: CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >) {
  const s = styles(variant, tone);
  return (
    <Link
      href={href}
      className={`${BASE} ${SIZES[size]} ${s.shell} ${className}`}
      {...rest}
    >
      <Inner arrow={arrow} badge={s.badge} size={size}>
        {children}
      </Inner>
    </Link>
  );
}

/** External or protocol links (tel:, mailto:). */
export function ButtonAnchor({
  children,
  href,
  variant = "primary",
  tone = "light",
  size = "lg",
  arrow = true,
  className = "",
  ...rest
}: CommonProps & { href: string } & Omit<
    ComponentProps<"a">,
    "href" | "className" | "children"
  >) {
  const s = styles(variant, tone);
  return (
    <a
      href={href}
      className={`${BASE} ${SIZES[size]} ${s.shell} ${className}`}
      {...rest}
    >
      <Inner arrow={arrow} badge={s.badge} size={size}>
        {children}
      </Inner>
    </a>
  );
}

export function ButtonSubmit({
  children,
  variant = "primary",
  tone = "light",
  size = "lg",
  arrow = true,
  className = "",
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  const s = styles(variant, tone);
  return (
    <button className={`${BASE} ${SIZES[size]} ${s.shell} ${className}`} {...rest}>
      <Inner arrow={arrow} badge={s.badge} size={size}>
        {children}
      </Inner>
    </button>
  );
}

/** Uppercase pill label used above headings. */
export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${
        tone === "dark" ? "bg-signal text-ink" : "bg-cream text-ink"
      }`}
    >
      {children}
    </span>
  );
}
