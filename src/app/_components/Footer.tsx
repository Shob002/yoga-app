import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  LockKeyhole,
} from "lucide-react";

const footerLinks = {
  Therapy: [
    "Yoga Therapy",
    "Pranayama",
    "Meditation",
    "Yoga Nidra",
    "Lifestyle Coaching",
  ],

  Programs: [
    "Stress Management",
    "Back Pain Relief",
    "Weight Management",
    "Sleep Wellness",
    "Women Wellness",
  ],

  Company: [
    "About Us",
    "Our Approach",
    "Research",
    "Contact",
    "Privacy Policy",
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050706] text-[#f7efe0]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* =====================================================
            TOP SECTION
        ====================================================== */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* =====================================================
              BRAND
          ====================================================== */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center"
              aria-label="Hayagriva Yoga Home"
            >
              <Image
                src="/images/hayagriva-yoga-logo.png"
                alt="Hayagriva Yoga"
                width={220}
                height={60}
                priority
                className="h-14 w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#b8c4ba]">
              Evidence-based yoga therapy integrating breath, movement,
              meditation and lifestyle transformation.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm text-[#b8c4ba]">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#d6b36a]" />
                info@hayagrivayoga.com
              </p>

              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#d6b36a]" />
                +91 9353708126
              </p>

              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#d6b36a]" />
                Tumakuru, Karnataka, India
              </p>
            </div>
          </div>

          {/* =====================================================
              FOOTER LINKS
          ====================================================== */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-sm font-black uppercase tracking-widest text-[#d6b36a]">
                {title}
              </h3>

              <ul className="space-y-3">
                {links.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 text-sm text-[#b8c4ba] transition hover:text-[#d6b36a]"
                    >
                      {item}

                      <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* =====================================================
              CONNECT
          ====================================================== */}
          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-widest text-[#d6b36a]">
              Connect
            </h3>

            <p className="text-sm leading-7 text-[#b8c4ba]">
              Join online yoga therapy sessions from anywhere.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href="/booking"
                className="flex items-center justify-center gap-3 rounded-full bg-[#d6b36a] px-6 py-3 text-sm font-bold text-[#050706] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e4c982] hover:shadow-[0_0_30px_rgba(214,179,106,0.25)]"
              >
                <Globe className="h-4 w-4" />
                Book Online Session
              </Link>

              <Link
                href="/contact"
                className="block rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold transition duration-300 hover:border-[#d6b36a] hover:text-[#d6b36a]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-[#7f8f84]">
            © 2026 Hayagriva Yoga. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-[#59665e]">
            Clinical Yoga Therapy • Pranayama • Meditation • Wellness
          </p>

          {/* Admin Login */}
          <div className="mt-5 flex justify-center">
            <Link
              href="/admin/login"
              className="group inline-flex items-center gap-2 rounded-full border border-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#526057] transition hover:border-[#d6b36a]/30 hover:text-[#d6b36a]"
            >
              <LockKeyhole className="h-3 w-3 transition group-hover:scale-110" />
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}