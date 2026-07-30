"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  UserRoundCog,
  BookOpen,
  BriefcaseBusiness,
  CreditCard,
  Image,
  MessageSquareQuote,
  Bell,
  BarChart3,
  FileText,
  Search,
  Settings,
  UserCircle,
  LogOut,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "Bookings",
        href: "/admin/bookings",
        icon: CalendarCheck,
      },
      {
        label: "Payments",
        href: "/admin/payments",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        label: "Users",
        href: "/admin/users",
        icon: Users,
      },
      {
        label: "Therapists",
        href: "/admin/therapists",
        icon: UserRoundCog,
      },
      {
        label: "Programs",
        href: "/admin/programs",
        icon: BookOpen,
      },
      {
        label: "Services",
        href: "/admin/services",
        icon: BriefcaseBusiness,
      },
    ],
  },
  {
    title: "Content",
    items: [
      {
        label: "Blogs",
        href: "/admin/blogs",
        icon: FileText,
      },
      {
        label: "Gallery",
        href: "/admin/gallery",
        icon: Image,
      },
      {
        label: "Testimonials",
        href: "/admin/testimonials",
        icon: MessageSquareQuote,
      },
      {
        label: "Notifications",
        href: "/admin/notifications",
        icon: Bell,
      },
    ],
  },
  {
    title: "Insights",
    items: [
      {
        label: "Analytics",
        href: "/admin/analytics",
        icon: BarChart3,
      },
      {
        label: "Reports",
        href: "/admin/reports",
        icon: FileText,
      },
      {
        label: "SEO",
        href: "/admin/seo",
        icon: Search,
      },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        className="fixed left-4 top-4 z-50 rounded-xl border border-white/10 bg-[#0b100d] p-2 text-[#d6b36a] shadow-lg lg:hidden"
        aria-label="Open admin navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      {!collapsed && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setCollapsed(true)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-white/10 bg-[#070b09] text-[#f7efe0] transition-all duration-300 lg:translate-x-0 ${
          collapsed ? "-translate-x-full" : "translate-x-0"
        } ${collapsed ? "lg:w-20" : "w-72"}`}
      >
        {/* Brand */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
          {!collapsed && (
            <Link href="/admin/dashboard" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-[#d6b36a] to-[#7bae8a]">
                <span className="text-xl font-bold text-[#050706]">ॐ</span>
              </div>

              <div>
                <h1 className="text-lg font-black">
                  Hayagriva
                  <span className="text-[#d6b36a]">Yoga</span>
                </h1>

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#7bae8a]">
                  Admin Panel
                </p>
              </div>
            </Link>
          )}

          <button
            type="button"
            onClick={() => setCollapsed((value) => !value)}
            className="hidden rounded-lg p-2 text-[#7f8f84] transition hover:bg-white/5 hover:text-[#d6b36a] lg:block"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft
              className={`h-5 w-5 transition-transform ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-6">
          {navigation.map((section) => (
            <div key={section.title} className="mb-7">
              {!collapsed && (
                <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#526057]">
                  {section.title}
                </p>
              )}

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      title={collapsed ? item.label : undefined}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-[#d6b36a]/10 text-[#d6b36a]"
                          : "text-[#9aa89f] hover:bg-white/5 hover:text-[#f7efe0]"
                      } ${collapsed ? "justify-center" : ""}`}
                    >
                      <Icon
                        className={`h-[18px] w-[18px] shrink-0 ${
                          active
                            ? "text-[#d6b36a]"
                            : "text-[#66746b] group-hover:text-[#d6b36a]"
                        }`}
                      />

                      {!collapsed && <span>{item.label}</span>}

                      {!collapsed && item.label === "Bookings" && (
                        <span className="ml-auto rounded-full bg-[#d6b36a] px-2 py-0.5 text-[10px] font-bold text-[#050706]">
                          14
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t border-white/10 p-3">
          <Link
            href="/admin/profile"
            title={collapsed ? "Profile" : undefined}
            className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#9aa89f] transition hover:bg-white/5 hover:text-[#f7efe0] ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <UserCircle className="h-[18px] w-[18px]" />

            {!collapsed && <span>Profile</span>}
          </Link>

          <Link
            href="/admin/settings"
            title={collapsed ? "Settings" : undefined}
            className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#9aa89f] transition hover:bg-white/5 hover:text-[#f7efe0] ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <Settings className="h-[18px] w-[18px]" />

            {!collapsed && <span>Settings</span>}
          </Link>

          <button
            type="button"
            title={collapsed ? "Logout" : undefined}
            className={`mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#9aa89f] transition hover:bg-red-500/10 hover:text-red-300 ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <LogOut className="h-[18px] w-[18px]" />

            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}