"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  HeartPulse,
  Leaf,
  Moon,
  Wind,
} from "lucide-react";

const methods = [
  {
    number: "01",
    icon: Activity,
    title: "Clinical Assessment",
    description:
      "Understanding your health condition, lifestyle, breathing pattern, stress level and movement limitations before creating your therapy pathway.",
  },
  {
    number: "02",
    icon: Wind,
    title: "Breath Mapping",
    description:
      "Analyzing breathing patterns and applying pranayama-based regulation techniques to improve nervous system balance.",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Therapeutic Movement",
    description:
      "Personalized yoga postures designed according to your body capacity, pain condition and functional requirements.",
  },
  {
    number: "04",
    icon: Brain,
    title: "Mind Regulation",
    description:
      "Meditation, mindfulness and relaxation practices to support emotional balance and mental clarity.",
  },
  {
    number: "05",
    icon: Moon,
    title: "Deep Restoration",
    description:
      "Yoga Nidra and recovery techniques to improve sleep quality, relaxation and inner awareness.",
  },
  {
    number: "06",
    icon: Leaf,
    title: "Lifestyle Integration",
    description:
      "Creating sustainable daily routines combining yoga, nutrition awareness, habits and self-care practices.",
  },
];

export default function TherapyMethod() {
  return (
    <section className="relative overflow-hidden bg-[#050706] px-6 py-24 text-[#f7efe0]">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d6b36a15,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d6b36a]">
            Our Therapeutic Method
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
            Science of
            <span className="text-[#d6b36a]">
              {" "}
              Breath, Body & Mind
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#b8c4ba]">
            A structured clinical yoga therapy framework combining traditional
            yoga wisdom with modern wellness principles for sustainable health
            transformation.
          </p>
        </motion.div>


        {/* Method Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {methods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.div
                key={method.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                group
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.035]
                p-7
                backdrop-blur
                transition
                hover:border-[#d6b36a]/40
                hover:shadow-[0_0_60px_#d6b36a20]
                "
              >

                <div className="flex items-start justify-between">

                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#d6b36a]/10
                    text-[#d6b36a]
                    transition
                    group-hover:bg-[#d6b36a]
                    group-hover:text-[#050706]
                    "
                  >
                    <Icon className="h-7 w-7" />
                  </div>


                  <span className="text-5xl font-black text-white/5">
                    {method.number}
                  </span>

                </div>


                <h3 className="mt-8 text-2xl font-black tracking-tight text-white">
                  {method.title}
                </h3>


                <p className="mt-4 leading-7 text-[#b8c4ba]">
                  {method.description}
                </p>


                <div className="mt-6 h-[2px] w-0 bg-[#d6b36a] transition-all duration-500 group-hover:w-full" />

              </motion.div>
            );
          })}

        </div>


        {/* Bottom Philosophy */}
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          className="
          mt-16
          rounded-[3rem]
          border
          border-[#d6b36a]/20
          bg-[#0c120e]
          p-10
          text-center
          "
        >

          <p className="text-2xl font-black tracking-tight text-white md:text-4xl">
            Assessment →
            <span className="text-[#d6b36a]">
              {" "}
              Regulation →
            </span>
            {" "}
            Restoration
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-[#b8c4ba]">
            Every therapy journey follows a personalized process designed to
            restore balance between body, breath and mind.
          </p>

        </motion.div>


      </div>

    </section>
  );
}