"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Video,
  Users,
  Calendar,
  Clock,
  Shield,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Video,
    text: "Live 1-on-1 sessions with certified therapists",
  },
  {
    icon: Users,
    text: "Personalized programs for your unique needs",
  },
  {
    icon: Calendar,
    text: "Flexible scheduling - cancel anytime",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    text: "Life-changing! After just 6 sessions, my chronic back pain is gone.",
    rating: 5,
  },
  {
    name: "Rahul K.",
    text: "The best investment in my health. Stress levels dropped dramatically.",
    rating: 5,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Clean Background - No heavy gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0c] via-[#050706] to-[#050706]" />

      {/* Subtle Accent - Minimal */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#d6b36a]/5 blur-[150px]" />
      
      <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#7bae8a]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#d6b36a]/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#d6b36a] backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7bae8a] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7bae8a]"></span>
              </span>
              Online Yoga Therapy
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            >
              Transform Your Health
              <span className="block text-[#d6b36a]">Through Yoga Therapy</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 max-w-lg text-base leading-7 text-[#b8c4ba] lg:text-lg"
            >
              Experience personalized online yoga therapy designed for your unique 
              health goals. Connect with expert therapists from anywhere in the world.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/booking"
                className="group flex items-center gap-2 rounded-full bg-[#d6b36a] px-8 py-3.5 text-sm font-bold text-[#050706] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_#d6b36a55]"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/programs"
                className="text-sm font-medium text-[#b8c4ba] transition-colors hover:text-white"
              >
                See Programs →
              </Link>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                <div className="h-9 w-9 rounded-full border-2 border-[#050706] bg-gradient-to-br from-[#d6b36a]/30 to-[#7bae8a]/30 flex items-center justify-center text-xs font-bold text-[#d6b36a]">A</div>
                <div className="h-9 w-9 rounded-full border-2 border-[#050706] bg-gradient-to-br from-[#d6b36a]/30 to-[#7bae8a]/30 flex items-center justify-center text-xs font-bold text-[#d6b36a]">B</div>
                <div className="h-9 w-9 rounded-full border-2 border-[#050706] bg-gradient-to-br from-[#d6b36a]/30 to-[#7bae8a]/30 flex items-center justify-center text-xs font-bold text-[#d6b36a]">C</div>
                <div className="h-9 w-9 rounded-full border-2 border-[#050706] bg-gradient-to-br from-[#d6b36a]/30 to-[#7bae8a]/30 flex items-center justify-center text-xs font-bold text-[#d6b36a]">+</div>
              </div>
              <div>
                <p className="text-sm font-medium text-white">2,500+ clients transformed</p>
                <div className="flex items-center gap-1">
                  <span className="text-[#d6b36a] text-xs">★★★★★</span>
                  <span className="text-xs text-[#87958b]">(4.9/5)</span>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#7bae8a]" />
                  <span className="text-sm text-[#b8c4ba]">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {testimonials.map((item, i) => (
                <div key={i} className="rounded-xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[#d6b36a] text-xs">★★★★★</span>
                  </div>
                  <p className="text-xs text-[#b8c4ba] italic">"{item.text}"</p>
                  <p className="text-xs text-[#87958b] mt-1">— {item.name}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Image Container - Like Squarespace */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1511] to-[#050706] border border-[#d6b36a]/20">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d6b36a]/5 via-transparent to-[#7bae8a]/5" />
                
                {/* Floating Elements */}
                <div className="absolute left-6 top-6 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-sm flex items-center gap-2">
                  <div className="relative">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7bae8a] opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7bae8a]"></span>
                    </span>
                  </div>
                  <span className="text-xs text-white">Live Session</span>
                </div>

                <div className="absolute right-6 top-6 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
                  <span className="text-xs text-[#d6b36a]">Premium</span>
                </div>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="relative mb-6">
                    <div className="h-32 w-32 rounded-full border-2 border-[#d6b36a]/30 bg-gradient-to-br from-[#d6b36a]/20 to-[#7bae8a]/20 flex items-center justify-center">
                      <span className="text-6xl">🧘</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 rounded-full bg-[#d6b36a] p-1.5">
                      <Video className="h-3.5 w-3.5 text-[#050706]" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white">1-on-1 Session</h3>
                  <p className="text-sm text-[#87958b]">60 min • Stress Relief</p>
                  
                  <div className="mt-6 w-full max-w-xs space-y-3">
                    <div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#87958b]">Progress</span>
                        <span className="text-[#d6b36a]">65%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-[#d6b36a] to-[#7bae8a]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#87958b]">Heart Rate</span>
                        <span className="text-[#d6b36a]">+42%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#d6b36a] to-[#7bae8a]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid w-full max-w-xs grid-cols-3 gap-2">
                    {["Mindful", "Balance", "Breath"].map((label, i) => (
                      <div key={i} className="rounded-lg border border-white/5 bg-white/[0.03] py-2 text-center text-xs text-[#87958b]">
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#d6b36a]/5 blur-2xl" />
                <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-[#7bae8a]/5 blur-2xl" />
              </div>

              {/* Floating Badge - Bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#d6b36a]/20 bg-[#0d1511] px-6 py-2.5 backdrop-blur-sm shadow-xl">
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-[#d6b36a]" />
                  <span className="text-xs font-medium text-white">Certified Therapist</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Strip - Like Squarespace */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 border-t border-white/5 pt-10 pb-8"
        >
          <p className="text-center text-xs uppercase tracking-widest text-[#87958b]">
            Trusted by health professionals worldwide
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale transition hover:opacity-75 hover:grayscale-0">
            <span className="text-sm font-bold text-white">YOGA ALLIANCE</span>
            <span className="text-sm font-bold text-white">IAYT</span>
            <span className="text-sm font-bold text-white">NHS APPROVED</span>
            <span className="text-sm font-bold text-white">CIM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}