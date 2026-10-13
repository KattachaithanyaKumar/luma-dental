"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { AppointmentForm } from "@/components/ui/AppointmentForm";

type AppointmentModalProps = {
  open: boolean;
  treatment: string | null;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function AppointmentModal({
  open,
  treatment,
  onClose,
}: AppointmentModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const target = dialogRef.current?.querySelector<HTMLElement>(
        "[data-autofocus]",
      );
      (target ?? closeButtonRef.current)?.focus();
    }, 20);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const nodes = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter(
        (node) => node.offsetParent !== null || node === document.activeElement,
      );

      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close appointment request"
        onClick={onClose}
        className="fixed inset-0 cursor-default animate-fade-in bg-teal-deep/60 backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-dialog-title"
        className="relative z-10 max-h-[92vh] w-full max-w-lg animate-rise overflow-y-auto rounded-t-2xl border border-line bg-paper p-6 shadow-lift sm:rounded-xl sm:p-10"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close appointment request"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full text-subtle transition-colors hover:bg-mist hover:text-heading"
        >
          <X className="size-5" />
        </button>

        <AppointmentForm initialTreatment={treatment} onCancel={onClose} />
      </div>
    </div>
  );
}
