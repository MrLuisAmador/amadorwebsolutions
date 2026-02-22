"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import { MOBILE_MENU_ID, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span
      className="relative flex size-6 items-center justify-center"
      aria-hidden
    >
      <span
        className={cn(
          "absolute h-0.5 w-5 bg-aws-navy transition-transform duration-200",
          open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
        )}
      />
      <span
        className={cn(
          "absolute h-0.5 w-5 bg-aws-navy transition-opacity duration-200",
          open ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={cn(
          "absolute h-0.5 w-5 bg-aws-navy transition-transform duration-200",
          open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
        )}
      />
    </span>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Amador Web Solutions - Home"
        >
          <Image
            src="/images/amadorwebsolutions-light.png"
            alt="Amador Web Solutions"
            width={150}
            height={65}
            className=""
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-3.5 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-base font-semibold text-aws-navy transition-colors hover:bg-aws-navy/5 hover:text-aws-navy-light"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <MenuIcon open={mobileMenuOpen} />
        </Button>
      </div>

      <div
        id={MOBILE_MENU_ID}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={cn(
          "overflow-hidden transition-[height,opacity] duration-200 ease-out md:hidden",
          mobileMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        )}
      >
        <nav
          className="flex flex-col gap-1 border-t border-border bg-white px-4 py-4"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-4 py-3 font-semibold text-aws-navy transition-colors hover:bg-aws-navy/10"
              onClick={closeMobileMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
