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
    <header className="fixed top-0 z-50 w-full border-b-2 border-[#1A1A1A] bg-white">
      <nav className="mx-auto flex h-[90px] max-w-[1240px] items-center px-5 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="Hayagriva Yoga Home">
          <Image src="/images/hayagriva-yoga-logo.png" alt="Hayagriva Yoga" width={200} height={50} priority className="h-11 w-auto object-contain" />
        </Link>

        {/* Center Links */}
        <div className="ml-8 hidden flex-1 items-center justify-center lg:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="relative" onMouseEnter={() => link.megaMenu && handleMouseEnter(link.label)} onMouseLeave={handleMouseLeave}>
              <Link
                href={link.href}
                className="flex items-center gap-1.5 px-3.5 py-4 text-[15px] font-black uppercase tracking-[-0.02em] text-[#000000] transition-colors duration-150 hover:text-[#1F3528] xl:px-5 xl:text-[17px]"
              >
                {link.label}
                {link.megaMenu && (
                  <ChevronDown className={`h-4 w-4 stroke-[3] transition-transform duration-200 ${activeMegaMenu === link.label ? "rotate-180" : ""}`} />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center lg:flex">
          <Link href="/booking" className="inline-flex h-[48px] items-center gap-2 rounded-full bg-[#000000] px-6 text-[14px] font-black uppercase tracking-[-0.02em] text-white transition-all duration-150 hover:bg-[#1F3528] xl:h-[52px] xl:px-8 xl:text-[16px]">
            Book
            <span className="hidden xl:inline">Consultation</span>
            <ArrowRight className="h-4 w-4 stroke-[3]" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button type="button" onClick={() => setMobileMenu(!mobileMenu)} className="ml-auto rounded-lg p-2 text-[#000000] lg:hidden" aria-label={mobileMenu ? "Close navigation" : "Open navigation"} aria-expanded={mobileMenu}>
          {mobileMenu ? <X className="h-7 w-7 stroke-[3]" /> : <Menu className="h-7 w-7 stroke-[3]" />}
        </button>
      </nav>

      {/* Mega Menu */}
      {activeMegaMenu && (
        <div className="absolute left-0 top-[90px] w-full border-b-2 border-[#1A1A1A] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.1)]" onMouseEnter={() => { if (timeoutId) { clearTimeout(timeoutId); setTimeoutId(null); } }} onMouseLeave={handleMouseLeave}>
          <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-8">
            {navLinks.filter((link) => link.label === activeMegaMenu && link.megaMenu).map((link) => (
              <div key={link.label} className="flex gap-20">
                <div className="w-[340px] shrink-0 border-r-2 border-[#1A1A1A] pr-12">
                  <h3 className="text-[28px] font-black uppercase leading-[1.05] tracking-[-0.04em] text-[#000000]">{link.megaMenu!.featured.title}</h3>
                  <p className="mt-4 text-[16px] font-bold leading-[1.5] text-[#1A1A1A] normal-case">{link.megaMenu!.featured.description}</p>
                  <Link href={link.megaMenu!.featured.href} className="mt-6 inline-flex items-center gap-2 text-[16px] font-black uppercase tracking-[-0.02em] text-[#000000] transition-colors duration-150 hover:text-[#1F3528]">
                    Learn more
                    <ArrowRight className="h-4 w-4 stroke-[3]" />
                  </Link>
                </div>
                <div className="flex gap-16">
                  {link.megaMenu!.columns.map((column) => (
                    <div key={column.title}>
                      <h4 className="mb-5 text-[14px] font-black uppercase tracking-[0.2em] text-[#000000]">{column.title}</h4>
                      <ul className="space-y-4">
                        {column.links.map((item) => (
                          <li key={item.label}>
                            <Link href={item.href} className="text-[16px] font-bold text-[#1A1A1A] normal-case transition-colors duration-150 hover:text-[#1F3528]">{item.label}</Link>
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

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t-2 border-[#1A1A1A] bg-white px-6 pb-10 pt-5 lg:hidden">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b-2 border-[#F0F0F0] last:border-b-0">
              <Link href={link.href} onClick={() => setMobileMenu(false)} className="block py-5 text-[22px] font-black uppercase tracking-[-0.02em] text-[#000000]">
                {link.label}
              </Link>
              {link.megaMenu && (
                <div className="pb-4 pl-4">
                  {link.megaMenu.columns.map((column) => (
                    <div key={column.title} className="mb-4">
                      <p className="py-1.5 text-[15px] font-black uppercase tracking-[0.2em] text-[#000000]">{column.title}</p>
                      {column.links.map((item) => (
                        <Link key={item.label} href={item.href} onClick={() => setMobileMenu(false)} className="block py-2.5 text-[17px] font-bold text-[#1A1A1A] normal-case">{item.label}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/booking" onClick={() => setMobileMenu(false)} className="mt-7 flex h-[60px] items-center justify-center gap-2 rounded-full bg-[#000000] text-[22px] font-black uppercase tracking-[-0.02em] text-white">
            Book Consultation
            <ArrowRight className="h-6 w-6 stroke-[3]" />
          </Link>
        </div>
      )}
    </header>
  );
}