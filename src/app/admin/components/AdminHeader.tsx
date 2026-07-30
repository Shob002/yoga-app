"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Search,
  ChevronRight,
  UserCircle,
} from "lucide-react";

const pageTitles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/bookings": "Bookings",
  "/admin/payments": "Payments",
  "/admin/users": "Users",
  "/admin/therapists": "Therapists",
  "/admin/programs": "Programs",
  "/admin/services": "Services",
  "/admin/blogs": "Blogs",
  "/admin/gallery": "Gallery",
  "/admin/testimonials": "Testimonials",
  "/admin/notifications": "Notifications",
  "/admin/analytics": "Analytics",
  "/admin/reports": "Reports",
  "/admin/seo": "SEO",
  "/admin/profile": "Profile",
  "/admin/settings": "Settings",
};

export default function AdminHeader() {
  const pathname = usePathname();

  const currentTitle =
    pageTitles[pathname] ??
    Object.entries(pageTitles).find(([path]) =>
      pathname.startsWith(`${path}/`),
    )?.[1] ??
    "Admin";

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070b09]/95 backdrop-blur-xl">
      <div className="flex min-h-20 items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="min-w-0 pl-12 lg:pl-0">
          <div className="flex items-center gap-2 text-xs text-[#66746b]">
            <Link
              href="/admin/dashboard"
              className="transition hover:text-[#d6b36a]"
            >
              Admin
            </Link>

            <ChevronRight className="h-3 w-3" />

            <span className="truncate text-[#9aa89f]">
              {currentTitle}
            </span>
          </div>

          <h1 className="mt-1 truncate text-xl font-black tracking-tight text-[#f7efe0] sm:text-2xl">
            {currentTitle}
          </h1>
        </div>

        {/* Center Search */}
        <div className="hidden max-w-md flex-1 md:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#526057]" />

            <input
              type="search"
              placeholder="Search admin..."
              className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-11 pr-4 text-sm text-[#f7efe0] outline-none transition placeholder:text-[#526057] focus:border-[#d6b36a]/40 focus:bg-white/[0.05]"
            />

            <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/10 px-2 py-1 text-[10px] text-[#526057] lg:block">
              Ctrl K
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Mobile Search */}
          <button
            type="button"
            aria-label="Search"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-[#9aa89f] transition hover:border-[#d6b36a]/30 hover:text-[#d6b36a] md:hidden"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Notifications */}
          <Link
            href="/admin/notifications"
            aria-label="Notifications"
            className="relative rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-[#9aa89f] transition hover:border-[#d6b36a]/30 hover:text-[#d6b36a]"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#d6b36a] ring-2 ring-[#070b09]" />
          </Link>

          {/* Profile */}
          <Link
            href="/admin/profile"
            className="hidden items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-[#d6b36a]/30 sm:flex"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[#d6b36a] to-[#7bae8a]">
              <UserCircle className="h-5 w-5 text-[#050706]" />
            </div>

            <div className="hidden text-left lg:block">
              <p className="text-xs font-bold text-[#f7efe0]">
                Administrator
              </p>

              <p className="text-[10px] text-[#66746b]">
                Admin Account
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}