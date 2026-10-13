"use client";

import { useEffect } from "react";
import { X, Phone } from "lucide-react";
import { headerNav, treatmentMenu, primaryCta } from "@/data/navigation";
import { contact } from "@/data/contact";
import { Logo } from "@/components/ui/Logo";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        aria-hidden={!open}
        aria-label="Close menu"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[90] bg-teal-deep/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id="mobile-navigation"
        inert={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-[95] flex w-[88%] max-w-sm flex-col border-l border-line bg-paper transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-10 items-center justify-center rounded-full text-heading transition-colors hover:bg-mist hover:text-teal"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto px-5 py-6"
        >
          <ul className="flex flex-col">
            {headerNav.map((item) => (
              <li key={item.id} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block py-4 text-base font-medium text-heading transition-colors hover:text-teal"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-subtle">
            Popular treatments
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {treatmentMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="inline-block rounded-full border border-line px-3.5 py-1.5 text-[0.82rem] text-heading transition-colors hover:border-teal hover:text-teal"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-line px-5 py-6">
          <AppointmentButton size="lg" className="w-full" onClick={onClose}>
            {primaryCta.label}
          </AppointmentButton>
          <a
            href={contact.phone.href}
            className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-teal"
          >
            <Phone className="size-4" />
            {contact.phone.display}
          </a>
        </div>
      </div>
    </>
  );
}
