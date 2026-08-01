"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#FAF8F5]">
      <div className="mx-auto max-w-[1240px] px-6 pb-[120px] pt-[120px] lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">
              Clinical Yoga Therapy
            </p>

            {/* Heading */}
            <h1 className="text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-[#141210] lg:text-[64px]">
              Personalized yoga
              <br />
              therapy for your
              <br />
              health and wellbeing.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[540px] text-[18px] font-normal leading-[1.7] text-[#555555]">
              Evidence-informed yoga therapy that integrates traditional
              practices with modern wellness science. One-to-one sessions
              designed around your individual health goals, lifestyle, and
              needs.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#1F3528] px-8 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#15251C]"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-[#D9D9D9] px-8 text-[15px] font-semibold text-[#1A1A1A] transition-colors duration-200 hover:border-[#C8A96E] hover:text-[#1F3528]"
              >
                View programs
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="flex h-[400px] w-[400px] items-center justify-center rounded-full border border-[#E6E6E6] bg-white lg:h-[480px] lg:w-[480px]">
              <Image
                src="/images/hayagriva-yoga-logo.png"
                alt="Hayagriva Yoga"
                width={240}
                height={240}
                priority
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}