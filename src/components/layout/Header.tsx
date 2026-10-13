"use client";

import { useEffect, useState } from "react";
import { Menu, CalendarPlus } from "lucide-react";
import { headerNav, treatmentMenu, primaryCta } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

function TreatmentsMenu() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const open = hovered || clicked;

  return (
    <li
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setClicked(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="header-treatments-menu"
        onClick={() => setClicked((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setHovered(false);
            setClicked(false);
          }
        }}
        className={cn(
          "flex items-center gap-1.5 border-b-2 border-transparent pb-1 text-sm font-medium transition-colors",
          open ? "border-teal text-teal" : "text-heading hover:text-teal",
        )}
      >
        Treatments
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={cn(
            "size-3 transition-transform duration-200",
            open && "rotate-180",
          )}
        >
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id="header-treatments-menu"
          className="absolute left-1/2 top-full z-50 mt-3 w-[30rem] -translate-x-1/2 animate-fade-in list-none rounded-lg border border-line bg-paper p-2 shadow-card"
        >
          {treatmentMenu.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => {
                  setHovered(false);
                  setClicked(false);
                }}
                className="block rounded-md px-3.5 py-2.5 text-sm text-heading transition-colors hover:bg-mist hover:text-teal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = headerNav
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-line bg-paper/95 shadow-card backdrop-blur-md"
            : "border-transparent bg-paper/80 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between gap-3 px-5 sm:gap-6 sm:px-6 lg:h-[4.5rem] lg:px-8">
          <a href="#top" aria-label="Morrow Dental — home" className="shrink-0">
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {headerNav.map((item) =>
                item.id === "treatments" ? (
                  <TreatmentsMenu key={item.id} />
                ) : (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      aria-current={activeId === item.id ? "true" : undefined}
                      className={cn(
                        "border-b-2 pb-1 text-sm font-medium transition-colors",
                        activeId === item.id
                          ? "border-teal text-teal"
                          : "border-transparent text-heading hover:text-teal",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <AppointmentButton
              variant="primary"
              className="max-lg:hidden"
            >
              {primaryCta.label}
            </AppointmentButton>

            <AppointmentButton
              variant="primary"
              size="icon"
              label={primaryCta.label}
              className="lg:hidden"
            >
              <CalendarPlus className="size-[1.15rem]" />
            </AppointmentButton>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-medium text-heading transition-colors hover:border-teal hover:text-teal lg:hidden"
            >
              <Menu className="size-4" />
              Menu
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
