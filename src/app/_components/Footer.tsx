import Link from "next/link";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
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
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#d6b36a] to-[#7bae8a]">
                <span className="text-2xl font-bold text-[#050706]">
                  ॐ
                </span>
              </div>

              <div>
                <h2 className="text-xl font-black">
                  Hayagriva
                  <span className="text-[#d6b36a]">Yoga</span>
                </h2>

                <p className="text-[9px] uppercase tracking-[0.3em] text-[#7bae8a]">
                  Neuro Wellness Institute
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#b8c4ba]">
              Evidence-based yoga therapy integrating breath, movement,
              meditation and lifestyle transformation.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm text-[#b8c4ba]">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#d6b36a]" />
                info@hayagrivayoga.com
              </p>

              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#d6b36a]" />
                +91 9740174787
              </p>

              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#d6b36a]" />
                Tumakuru, Karnataka, India
              </p>
            </div>
          </div>

          {/* Footer Links */}
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

                      <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Online Presence */}
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
                className="flex items-center gap-3 rounded-full bg-[#d6b36a] px-6 py-3 text-sm font-bold text-[#050706] transition hover:scale-105"
              >
                <Globe className="h-4 w-4" />
                Book Online Session
              </Link>

              <Link
                href="/contact"
                className="block rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-[#7f8f84]">
          <p>© 2026 Hayagriva Yoga. All rights reserved.</p>

          <p className="mt-2">
            Clinical Yoga Therapy • Pranayama • Meditation • Wellness
          </p>
        </div>
      </div>
    </footer>
  );
}