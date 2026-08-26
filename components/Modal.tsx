"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

/**
 * Modal dialog, built on the native <dialog> element.
 *
 * Native rather than a hand-rolled overlay because the browser then supplies
 * the parts that are easy to get subtly wrong: focus is trapped inside the
 * dialog and restored to the opener on close, the rest of the page goes inert,
 * Escape closes, and the top layer puts it above the sticky header (z-40),
 * the mobile call bar (z-50) and the consent banner (z-60) without joining the
 * z-index race at all.
 *
 * `open` stays the source of truth in React; the effect below only pushes that
 * into the DOM, and the dialog's own close event pushes user-initiated closes
 * (Escape, backdrop) back. Motion lives in globals.css — see `.modal` there for
 * why it can't be expressed as utilities.
 */
export default function Modal({
  open,
  onClose,
  title,
  lead,
  closeLabel,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  lead?: string;
  closeLabel: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  // A native listener rather than React's onClose: `close` doesn't bubble, so
  // this is the one path guaranteed to catch every way the dialog can shut —
  // including the browser's own Escape handling.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, [onClose]);

  // showModal() makes the page inert but does not stop it scrolling. The
  // padding compensation keeps the layout from shifting sideways on desktop,
  // where removing the scrollbar would otherwise reflow everything behind.
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      // mousedown, not click: a drag that starts inside the panel and ends
      // outside it shouldn't read as a click on the backdrop.
      onMouseDown={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="modal"
    >
      <div className="modal-panel flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)] sm:rounded-3xl">
        <div className="shrink-0 border-b border-ink/8 px-6 pt-5 pb-5 sm:px-8 sm:pt-7">
          {/* Sheet grabber — a mobile affordance only; the desktop panel is
              centred and reads as a dialog without it. */}
          <div
            aria-hidden="true"
            className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-ink/15 sm:hidden"
          />
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id={titleId}
                className="font-headline text-2xl font-extrabold tracking-tight text-ink"
              >
                {title}
              </h2>
              {lead && (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {lead}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-surface"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-7 sm:pb-8">
          {children}
        </div>
      </div>
    </dialog>
  );
}
