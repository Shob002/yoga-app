"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  {
    title: "Yoga Therapy",
    items: [
      "Clinical Approach",
      "Assessment Method",
      "Breath Science",
      "Evidence Based Therapy",
    ],
  },
  {
    title: "Conditions",
    items: [
      "Stress & Anxiety",
      "Back Pain",
      "Diabetes",
      "PCOS / Women's Wellness",
      "Sleep Disorders",
    ],
  },
  {
    title: "Programs",
    items: [
      "14 Day Stress Reset",
      "30 Day Transformation",
      "Personal Therapy",
      "Corporate Wellness",
    ],
  },
  {
    title: "Resources",
    items: [
      "Articles",
      "Research",
      "Pranayama Library",
      "Wellness Guides",
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050706]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b36a]/40 bg-[#0d1511]">
            <span className="text-2xl text-[#d6b36a]">
              ॐ
            </span>
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-[#f7efe0]">
              Hayagriva
              <span className="text-[#d6b36a]">
                Yoga
              </span>
            </h1>

            <p className="text-[9px] uppercase tracking-[0.35em] text-[#7bae8a]">
              Clinical Yoga Therapy
            </p>
          </div>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 lg:flex">

          <Link
            href="/"
            className="text-sm text-white/70 transition hover:text-[#d6b36a]"
          >
            Home
          </Link>


          {menuItems.map((menu) => (
            <div
              key={menu.title}
              className="group relative"
            >
              <button
                className="flex items-center gap-1 text-sm text-white/70 transition hover:text-[#d6b36a]"
              >
                {menu.title}
                <ChevronDown className="h-4 w-4" />
              </button>


              <div className="invisible absolute left-0 top-8 w-64 translate-y-2 rounded-2xl border border-white/10 bg-[#0b120e] p-4 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                {menu.items.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block rounded-lg px-3 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-[#d6b36a]"
                  >
                    {item}
                  </Link>
                ))}

              </div>
            </div>
          ))}


          <Link
            href="/contact"
            className="text-sm text-white/70 hover:text-[#d6b36a]"
          >
            Contact
          </Link>


          <Link
            href="/booking"
            className="rounded-full bg-[#d6b36a] px-6 py-3 text-sm font-bold text-[#050706] transition hover:shadow-[0_0_40px_#d6b36a66]"
          >
            Start Assessment
          </Link>

        </div>


        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-[#f7efe0]"
          aria-label="Menu"
        >
          {mobileMenu ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>

      </nav>


      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-white/10 bg-[#050706] px-6 py-6 lg:hidden">

          <Link
            href="/"
            className="block py-3 text-white/80"
          >
            Home
          </Link>


          {menuItems.map((menu) => (
            <button
              key={menu.title}
              onClick={() => setOpen(open === menu.title ? false : true)}
              className="flex w-full items-center justify-between py-3 text-white/80"
            >
              {menu.title}
              <ChevronDown className="h-4 w-4" />
            </button>
          ))}


          <Link
            href="/booking"
            className="mt-5 block rounded-full bg-[#d6b36a] py-3 text-center font-bold text-[#050706]"
          >
            Start Assessment
          </Link>

        </div>
      )}

    </header>
  );
}