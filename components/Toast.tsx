"use client";

import { useEffect, useState } from "react";

/**
 * Transient confirmation, shown the moment a request is accepted.
 *
 * POSITIONING IS DELIBERATE, and it is the reason this is `fixed` rather than
 * portalled to document.body. Inside the request modal, `.modal-panel` carries a
 * transform, which makes it the containing block for fixed descendants — so this
 * lands at the top of the panel, above the modal content, inside the panel's
 * clip box. On a plain page like /devis there is no such ancestor and the same
 * class list resolves against the viewport. Both are correct, with no branch.
 *
 * Portalling to document.body would be worse in the modal, not better: the
 * dialog sits in the top layer, so a toast outside it renders *behind* the
 * backdrop and the visitor never sees it.
 *
 * Not a live region. The confirmation panel underneath is already
 * `role="status" aria-live="polite"` and carries the full message, so
 * announcing this too would read the same news twice.
 */
export default function Toast({
  message,
  duration = 4000,
}: {
  message: string;
  duration?: number;
}) {
  const [shown, setShown] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // A frame of hidden state first, so there is something to transition from.
    const raf = requestAnimationFrame(() => setShown(true));
    const hide = window.setTimeout(() => setShown(false), duration);
    // Outlast the 200ms exit before leaving the DOM.
    const drop = window.setTimeout(() => setGone(true), duration + 250);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(hide);
      window.clearTimeout(drop);
    };
  }, [duration]);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 ${
        shown ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0 text-signal"
      >
        <path d="m5 13 4 4L19 7" />
      </svg>
      {message}
    </div>
  );
}
