"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    title: "Getting Started",
    links: [
      { href: "/docs/introduction", label: "Introduction" },
      { href: "/docs/authentication", label: "Authentication" },
    ]
  },
  {
    title: "Endpoints",
    links: [
      { href: "/docs/api-bypass", label: "API Bypass" },
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/docs/error-codes", label: "Error Codes" },
      { href: "/docs/sdks", label: "SDKs / Scripts" },
    ]
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-panel-border md:sticky md:block md:w-64">
      <div className="py-6 pr-6 pl-4">
        <div className="w-full">
          {NAV_ITEMS.map((section, idx) => (
            <div key={idx} className="pb-8">
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-foreground/90">
                {section.title}
              </h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex w-full items-center rounded-md border border-transparent px-2 py-1",
                      pathname === link.href
                        ? "text-brand-400 font-medium"
                        : "text-foreground/70 hover:text-foreground hover:underline"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
