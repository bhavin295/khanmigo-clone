"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV_ITEMS = [
  { href: "/dashboard", label: "📊 Dashboard" },
  { href: "/chat/math", label: "📐 Math" },
  { href: "/chat/reading", label: "📖 Reading" },
  { href: "/chat/science", label: "🔬 Science" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-1 px-4">
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.href === "/dashboard"
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium",
              isActive
                ? "bg-[rgba(167,139,250,0.22)] text-[#6D28D9]"
                : "text-[rgba(15,23,42,0.55)] hover:bg-[rgba(15,23,42,0.05)] hover:text-[rgba(15,23,42,0.85)]"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
