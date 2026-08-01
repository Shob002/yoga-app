"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "/",
    megaMenu: null,
  },
  {
    label: "Conditions",
    href: "/conditions",
    megaMenu: {
      featured: {
        title: "Conditions We Treat",
        description: "Specialized yoga therapy programs for a range of physical and mental health conditions.",
        href: "/conditions",
      },
      columns: [
        {
          title: "Mental Wellness",
          links: [
            { label: "Stress & Anxiety", href: "/conditions/stress-anxiety" },
            { label: "Sleep Disorders", href: "/conditions/sleep" },
            { label: "Burnout Recovery", href: "/conditions/burnout" },
          ],
        },
        {
          title: "Physical Health",
          links: [
            { label: "Back & Neck Pain", href: "/conditions/back-pain" },
            { label: "Diabetes Management", href: "/conditions/diabetes" },
            { label: "PCOS & Women's Health", href: "/conditions/pcos" },
            { label: "Lifestyle Disorders", href: "/conditions/lifestyle" },
          ],
        },
      ],
    },
  },
  {
    label: "Programs",
    href: "/programs",
    megaMenu: {
      featured: {
        title: "Wellness Programs",
        description: "Structured programs designed for lasting transformation and sustainable wellbeing.",
        href: "/programs",
      },
      columns: [
        {
          title: "Personal Programs",
          links: [
            { label: "14 Day Stress Reset", href: "/programs/stress-reset" },
            { label: "30 Day Transformation", href: "/programs/transformation" },
            { label: "Personal Therapy", href: "/programs/personal" },
          ],
        },
        {
          title: "Group Programs",
          links: [
            { label: "Corporate Wellness", href: "/programs/corporate" },
            { label: "Workshops", href: "/workshops" },
            { label: "Retreats", href: "/retreats" },
          ],
        },
      ],
    },
  },
  {
    label: "Pricing",
    href: "/pricing",
    megaMenu: null,
  },
  {
    label: "Resources",
    href: "/resources",
    megaMenu: {
      featured: {
        title: "Knowledge Center",
        description: "Articles, research insights, and practical guides for your wellness journey.",
        href: "/resources",
      },
      columns: [
        {
          title: "Learn",
          links: [
            { label: "Articles", href: "/resources/articles" },
            { label: "Research", href: "/resources/research" },
            { label: "Wellness Guides", href: "/resources/guides" },
          ],
        },
        {
          title: "Practice",
          links: [
            { label: "Pranayama Library", href: "/resources/pranayama" },
            { label: "FAQ", href: "/faq" },
          ],
        },
      ],
    },
  },
  {
    label: "Therapists",
    href: "/therapists",
    megaMenu: null,
  },
  {
    label: "Contact",
    href: "/contact",
    megaMenu: null,
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutId) { clearTimeout(timeoutId); setTimeoutId(null); }
    setActiveMegaMenu(label);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setActiveMegaMenu(null), 150);
    setTimeoutId(id);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#E6E6E6] bg-white">
      <nav className="mx-auto flex h-[80px] max-w-[1240px] items-center justify-between px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Hayagriva Yoga Home">
          <Image src="/images/hayagriva-yoga-logo.png" alt="Hayagriva Yoga" width={200} height={52} priority className="h-11 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-0 lg:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="relative" onMouseEnter={() => link.megaMenu && handleMouseEnter(link.label)} onMouseLeave={handleMouseLeave}>
              <Link
                href={link.href}
                className="flex items-center gap-1 px-5 py-2.5 text-[16px] font-bold tracking-tight text-[#1A1A1A] transition-colors duration-150 hover:text-[#555555]"
              >
                {link.label}
                {link.megaMenu && (
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === link.label ? "rotate-180" : ""}`} />
                )}
              </Link>
            </div>
          ))}

          <Link href="/booking" className="ml-5 inline-flex h-[48px] items-center gap-2 rounded-full bg-[#1A1A1A] px-7 text-[16px] font-bold tracking-tight text-white transition-colors duration-150 hover:bg-[#333333]">
            Book Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button type="button" onClick={() => setMobileMenu(!mobileMenu)} className="rounded-lg p-2 text-[#1A1A1A] lg:hidden" aria-label={mobileMenu ? "Close navigation" : "Open navigation"} aria-expanded={mobileMenu}>
          {mobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {activeMegaMenu && (
        <div className="absolute left-0 top-[80px] w-full border-b border-[#E6E6E6] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]" onMouseEnter={() => { if (timeoutId) { clearTimeout(timeoutId); setTimeoutId(null); } }} onMouseLeave={handleMouseLeave}>
          <div className="mx-auto max-w-[1240px] px-6 py-10 lg:px-8">
            {navLinks.filter((link) => link.label === activeMegaMenu && link.megaMenu).map((link) => (
              <div key={link.label} className="flex gap-16">
                <div className="w-[300px] shrink-0 border-r border-[#F0F0F0] pr-10">
                  <h3 className="text-[22px] font-bold leading-tight text-[#1A1A1A]">{link.megaMenu!.featured.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[#555555]">{link.megaMenu!.featured.description}</p>
                  <Link href={link.megaMenu!.featured.href} className="mt-5 inline-flex items-center gap-2 text-[15px] font-bold text-[#1A1A1A] transition-colors duration-150 hover:text-[#555555]">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="flex gap-16">
                  {link.megaMenu!.columns.map((column) => (
                    <div key={column.title}>
                      <h4 className="mb-4 text-[14px] font-bold uppercase tracking-wider text-[#8A8480]">{column.title}</h4>
                      <ul className="space-y-3">
                        {column.links.map((item) => (
                          <li key={item.label}>
                            <Link href={item.href} className="text-[16px] font-medium text-[#555555] transition-colors duration-150 hover:text-[#1A1A1A]">{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {mobileMenu && (
        <div className="border-t border-[#E6E6E6] bg-white px-6 pb-8 pt-4 lg:hidden">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-[#F0F0F0] last:border-b-0">
              <Link href={link.href} onClick={() => setMobileMenu(false)} className="block py-4 text-[18px] font-bold tracking-tight text-[#1A1A1A]">
                {link.label}
              </Link>
              {link.megaMenu && (
                <div className="pb-3 pl-4">
                  {link.megaMenu.columns.map((column) => (
                    <div key={column.title} className="mb-3">
                      <p className="py-1 text-[13px] font-bold uppercase tracking-wider text-[#8A8480]">{column.title}</p>
                      {column.links.map((item) => (
                        <Link key={item.label} href={item.href} onClick={() => setMobileMenu(false)} className="block py-2 text-[15px] text-[#555555]">{item.label}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/booking" onClick={() => setMobileMenu(false)} className="mt-6 flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] text-[18px] font-bold tracking-tight text-white">
            Book Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      )}
    </header>
  );
}