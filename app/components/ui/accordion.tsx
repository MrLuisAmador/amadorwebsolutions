"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null
);

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
}

export function Accordion({
  children,
  type = "single",
  defaultValue,
  className,
}: AccordionProps) {
  const initialItems =
    typeof defaultValue === "string" ? [defaultValue] : (defaultValue ?? []);
  const [openItems, setOpenItems] = React.useState<Set<string>>(
    new Set(initialItems)
  );

  const toggle = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(value)) {
          next.delete(value);
          return next;
        }
        if (type === "single") next.clear();
        next.add(value);
        return next;
      });
    },
    [type]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({
  value,
  children,
  className,
}: AccordionItemProps) {
  return (
    <AccordionContext.Consumer>
      {() => (
        <div data-state={value} className={cn("group", className)}>
          {children}
        </div>
      )}
    </AccordionContext.Consumer>
  );
}

interface AccordionTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionTrigger({
  value,
  children,
  className,
}: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context) return null;

  const { openItems, toggle } = context;
  const isOpen = openItems.has(value);

  return (
    <button
      type="button"
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between gap-4 px-4 py-3 text-left font-medium transition-colors",
        className
      )}
      aria-expanded={isOpen}
    >
      {children}
      <span
        className={cn(
          "shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      >
        <ChevronDownIcon className="size-5" />
      </span>
    </button>
  );
}

interface AccordionContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({
  value,
  children,
  className,
}: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context) return null;

  const { openItems } = context;
  const isOpen = openItems.has(value);

  if (!isOpen) return null;

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      className={cn("overflow-hidden", className)}
    >
      <div className="px-4 pb-3 pt-0">{children}</div>
    </div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
