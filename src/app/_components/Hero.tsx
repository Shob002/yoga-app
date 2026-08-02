"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-white">
      <div className="grid h-full lg:grid-cols-2">
        {/* LEFT */}
        <div className="flex items-center px-6 pt-24 pb-16 lg:px-16 lg:pt-0 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[580px]"
          >
            <p className="mb-6 text-[13px] font-black uppercase tracking-[0.2em] text-[#1F3528]">
              Clinical Yoga Therapy
            </p>

            <h1 className="text-[72px] font-black leading-[0.92] tracking-[-0.05em] text-[#000000] lg:text-[88px]">
              Personalized yoga therapy.
            </h1>

            <p className="mt-6 max-w-[520px] text-[18px] font-medium leading-[1.6] text-[#555555]">
              Evidence-informed one-to-one sessions designed around your
              health goals, lifestyle, and needs.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex h-[60px] items-center justify-center gap-2 rounded-full bg-[#000000] px-10 text-[16px] font-black uppercase tracking-[-0.02em] text-white transition-all duration-200 hover:bg-[#1F3528] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
              >
                Book a consultation
                <ArrowRight className="h-5 w-5 stroke-[3]" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex h-[60px] items-center justify-center gap-2 rounded-full border-2 border-[#1A1A1A] px-10 text-[16px] font-black uppercase tracking-[-0.02em] text-[#000000] transition-all duration-200 hover:bg-[#1A1A1A] hover:text-white"
              >
                View programs
                <ArrowRight className="h-5 w-5 stroke-[3]" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Full Height Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full overflow-hidden border-l-2 border-[#1A1A1A]"
        >
          <Image
            src="/images/hero-yoga-therapy.jpg"
            alt="Personalized yoga therapy session"
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />

          {/* Dark overlay for badge contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />

          {/* Floating badge */}
          <div className="absolute bottom-8 left-8 rounded-full border-2 border-white bg-white/90 px-6 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm">
            <p className="text-[14px] font-black uppercase tracking-[0.15em] text-[#000000]">
              Online Sessions
            </p>
          </div>

          {/* Floating stat */}
          <div className="absolute right-8 top-8 rounded-full border-2 border-[#1F3528] bg-[#1F3528] px-6 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
            <p className="text-[14px] font-black uppercase tracking-[0.15em] text-white">
              1-on-1 Therapy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}