"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  HeartPulse,
  Leaf,
  Wind,
  Sparkles,
} from "lucide-react";

const methods = [
  {
    icon: Activity,
    title: "Clinical Assessment",
    description:
      "Understanding your body condition, lifestyle patterns, stress level and therapeutic requirements before designing your yoga pathway.",
  },
  {
    icon: Wind,
    title: "Breath Mapping",
    description:
      "Scientific breath observation and pranayama techniques to improve nervous system regulation and energy balance.",
  },
  {
    icon: HeartPulse,
    title: "Therapeutic Movement",
    description:
      "Condition-specific yoga practices designed for mobility, strength, posture correction and functional recovery.",
  },
  {
    icon: Brain,
    title: "Mind Regulation",
    description:
      "Meditation, mindfulness and relaxation practices to support emotional balance and mental clarity.",
  },
  {
    icon: Leaf,
    title: "Lifestyle Correction",
    description:
      "Personalized guidance for sleep, food habits, daily routine and sustainable wellness transformation.",
  },
  {
    icon: Sparkles,
    title: "Progress Restoration",
    description:
      "Continuous review and adaptation of your therapy plan based on improvements and changing needs.",
  },
];

export default function TherapyMethod() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050706] via-[#0b120e] to-[#050706]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d6b36a]">
            Our Methodology
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#f7efe0] md:text-6xl">
            A complete therapeutic system for{" "}
            <span className="text-[#d6b36a]">
              body, breath and mind
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b8c4ba]">
            Beyond ordinary yoga classes. A structured clinical approach
            combining assessment, yoga therapy, pranayama, meditation and
            lifestyle transformation.
          </p>
        </motion.div>


        {/* Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {methods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                group rounded-[2rem]
                border border-white/10
                bg-white/[0.035]
                p-8
                backdrop-blur-xl
                transition
                hover:border-[#d6b36a]/50
                hover:shadow-[0_0_50px_rgba(214,179,106,0.15)]
                "
              >

                <div
                  className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-[#d6b36a]/10
                  text-[#d6b36a]
                  transition
                  group-hover:bg-[#d6b36a]
                  group-hover:text-black
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>


                <div className="mt-8">

                  <p className="text-xs font-bold tracking-[0.3em] text-[#7bae8a]">
                    0{index + 1}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white">
                    {method.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#b8c4ba]">
                    {method.description}
                  </p>

                </div>


              </motion.div>
            );
          })}

        </div>


        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          mt-16 rounded-[3rem]
          border border-[#d6b36a]/20
          bg-[#d6b36a]/5
          p-8 text-center
          "
        >

          <h3 className="text-3xl font-black text-[#f7efe0] md:text-5xl">
            Assess → Regulate → Restore → Transform
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-[#b8c4ba]">
            Every Hayagriva Yoga therapy journey follows a personalised
            scientific pathway instead of a one-size-fits-all approach.
          </p>

        </motion.div>

      </div>
    </section>
  );
}