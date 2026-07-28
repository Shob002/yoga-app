"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const menuItems = [
  {
    title: "Yoga Therapy",
    href: "/#therapy",
    items: [
      { label: "Clinical Approach", href: "/#therapy" },
      { label: "Assessment Method", href: "/#journey" },
      { label: "Breath Science", href: "/#therapy" },
      { label: "Evidence Based Therapy", href: "/#therapy" },
    ],
  },
  {
    title: "Conditions",
    href: "/#conditions",
    items: [
      { label: "Stress & Anxiety", href: "/#conditions" },
      { label: "Back Pain", href: "/#conditions" },
      { label: "Diabetes", href: "/#conditions" },
      { label: "PCOS / Women's Wellness", href: "/#conditions" },
      { label: "Sleep Disorders", href: "/#conditions" },
    ],
  },
  {
    title: "Programs",
    href: "/#programs",
    items: [
      { label: "14 Day Stress Reset", href: "/#programs" },
      { label: "30 Day Transformation", href: "/#programs" },
      { label: "Personal Therapy", href: "/#programs" },
      { label: "Corporate Wellness", href: "/#programs" },
    ],
  },
];

const resourceItems = [
  { label: "Articles", href: "/resources/articles" },
  { label: "Research", href: "/resources/research" },
  { label: "Pranayama Library", href: "/resources/pranayama" },
  { label: "Wellness Guides", href: "/resources/guides" },
];

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenus = () => {
    setOpen(null);
    setMobileMenu(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050706]/85 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-6">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenus}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6b36a]/40 bg-[#0d1511] transition duration-300 group-hover:border-[#d6b36a] group-hover:shadow-[0_0_30px_#d6b36a22]">
            <span className="text-[23px] text-[#d6b36a]">ॐ</span>
          </div>

          <div className="leading-none">
            <h1 className="text-[18px] font-black tracking-[-0.03em] text-[#f7efe0]">
              Hayagriva
              <span className="text-[#d6b36a]">Yoga</span>
            </h1>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.28em] text-[#7bae8a]">
              Clinical Yoga Therapy
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 lg:flex">

          {/* HOME */}
          <Link
            href="/"
            className="rounded-full px-4 py-2.5 text-[13px] font-semibold text-white/70 transition hover:bg-white/5 hover:text-[#d6b36a]"
          >
            Home
          </Link>

          {/* YOGA THERAPY / CONDITIONS / PROGRAMS */}
          {menuItems.map((menu) => (
            <div
              key={menu.title}
              className="group relative"
            >
              <Link
                href={menu.href}
                className="flex items-center gap-1 rounded-full px-4 py-2.5 text-[13px] font-semibold text-white/70 transition hover:bg-white/5 hover:text-[#d6b36a]"
              >
                {menu.title}
                <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
              </Link>

              {/* DROPDOWN */}
              <div className="pointer-events-none invisible absolute left-0 top-full w-72 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-white/10 bg-[#0b120e]/98 p-2 shadow-[0_20px_80px_#00000099] backdrop-blur-xl">

                  <Link
                    href={menu.href}
                    className="mb-1 block rounded-xl bg-white/[0.035] px-4 py-3 text-xs font-black uppercase tracking-[0.15em] text-[#d6b36a] transition hover:bg-white/[0.07]"
                  >
                    Explore {menu.title}
                  </Link>

                  {menu.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* RESOURCES */}
          <div className="group relative">
            <Link
              href="/resources"
              className="flex items-center gap-1 rounded-full px-4 py-2.5 text-[13px] font-semibold text-white/70 transition hover:bg-white/5 hover:text-[#d6b36a]"
            >
              Resources
              <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
            </Link>

            <div className="pointer-events-none invisible absolute left-0 top-full w-64 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-[#0b120e]/98 p-2 shadow-[0_20px_80px_#00000099] backdrop-blur-xl">

                <Link
                  href="/resources"
                  className="mb-1 block rounded-xl bg-white/[0.035] px-4 py-3 text-xs font-black uppercase tracking-[0.15em] text-[#d6b36a]"
                >
                  Wellness Resources
                </Link>

                {resourceItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* THERAPISTS */}
          <Link
            href="/therapists"
            className="rounded-full px-4 py-2.5 text-[13px] font-semibold text-white/70 transition hover:bg-white/5 hover:text-[#d6b36a]"
          >
            Therapists
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="rounded-full px-4 py-2.5 text-[13px] font-semibold text-white/70 transition hover:bg-white/5 hover:text-[#d6b36a]"
          >
            Contact
          </Link>

          {/* BOOK */}
          <Link
            href="/booking"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-[#d6b36a] px-5 py-3 text-[12px] font-black uppercase tracking-[0.12em] text-[#050706] shadow-[0_0_30px_#d6b36a22] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_#d6b36a55]"
          >
            Start Assessment
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-[#f7efe0] lg:hidden"
          aria-label={mobileMenu ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {mobileMenu && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-white/10 bg-[#050706]/98 px-5 pb-8 pt-4 backdrop-blur-2xl lg:hidden">

          {/* HOME */}
          <Link
            href="/"
            onClick={closeMenus}
            className="block border-b border-white/5 py-4 text-sm font-semibold text-white/80"
          >
            Home
          </Link>

          {/* MOBILE DROPDOWNS */}
          {menuItems.map((menu) => (
            <div
              key={menu.title}
              className="border-b border-white/5"
            >
              <button
                type="button"
                onClick={() =>
                  setOpen(open === menu.title ? null : menu.title)
                }
                className="flex w-full items-center justify-between py-4 text-sm font-semibold text-white/80"
              >
                {menu.title}

                <ChevronDown
                  className={`h-4 w-4 transition ${
                    open === menu.title ? "rotate-180 text-[#d6b36a]" : ""
                  }`}
                />
              </button>

              {open === menu.title && (
                <div className="pb-3 pl-3">
                  <Link
                    href={menu.href}
                    onClick={closeMenus}
                    className="block rounded-lg px-3 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-[#d6b36a]"
                  >
                    Explore {menu.title}
                  </Link>

                  {menu.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenus}
                      className="block rounded-lg px-3 py-2.5 text-sm text-white/55 transition hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* RESOURCES MOBILE */}
          <div className="border-b border-white/5">
            <button
              type="button"
              onClick={() =>
                setOpen(open === "Resources" ? null : "Resources")
              }
              className="flex w-full items-center justify-between py-4 text-sm font-semibold text-white/80"
            >
              Resources

              <ChevronDown
                className={`h-4 w-4 transition ${
                  open === "Resources"
                    ? "rotate-180 text-[#d6b36a]"
                    : ""
                }`}
              />
            </button>

            {open === "Resources" && (
              <div className="pb-3 pl-3">
                <Link
                  href="/resources"
                  onClick={closeMenus}
                  className="block rounded-lg px-3 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-[#d6b36a]"
                >
                  All Resources
                </Link>

                {resourceItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    className="block rounded-lg px-3 py-2.5 text-sm text-white/55"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* THERAPISTS */}
          <Link
            href="/therapists"
            onClick={closeMenus}
            className="block border-b border-white/5 py-4 text-sm font-semibold text-white/80"
          >
            Therapists
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            onClick={closeMenus}
            className="block py-4 text-sm font-semibold text-white/80"
          >
            Contact
          </Link>

          {/* MOBILE CTA */}
          <Link
            href="/booking"
            onClick={closeMenus}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#d6b36a] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#050706]"
          >
            Start Assessment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}