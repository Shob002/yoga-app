"use client";

import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  Moon,
  Activity,
  Droplets,
  ShieldCheck,
  Dumbbell,
  Sparkles,
} from "lucide-react";

const conditions = [
  {
    icon: Brain,
    title: "Stress & Anxiety",
    description:
      "Breathing practices, meditation and relaxation techniques to support nervous system regulation.",
  },
  {
    icon: HeartPulse,
    title: "Hypertension",
    description:
      "Gentle yoga-based lifestyle practices supporting cardiovascular wellness.",
  },
  {
    icon: Activity,
    title: "Diabetes Management",
    description:
      "Movement, breath and lifestyle practices supporting metabolic health.",
  },
  {
    icon: Dumbbell,
    title: "Back & Neck Pain",
    description:
      "Therapeutic movement focused on mobility, strength and body awareness.",
  },
  {
    icon: Moon,
    title: "Sleep Disorders",
    description:
      "Yoga Nidra, relaxation and mindfulness practices for better sleep quality.",
  },
  {
    icon: Droplets,
    title: "PCOD / Hormonal Balance",
    description:
      "Lifestyle-based yoga therapy supporting hormonal wellness.",
  },
  {
    icon: ShieldCheck,
    title: "Lifestyle Disorders",
    description:
      "Holistic practices for improving daily habits and wellbeing.",
  },
  {
    icon: Sparkles,
    title: "Mental Fatigue",
    description:
      "Meditation and breath regulation techniques for clarity and focus.",
  },
];

export default function Conditions() {
  return (
    <section className="relative overflow-hidden bg-[#050706] px-6 py-24 text-[#f7efe0]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2d6b4b22,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
            Therapeutic Applications
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
            Yoga Therapy For
            <span className="text-[#7bae8a]">
              {" "}
              Modern Health Challenges
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#b8c4ba]">
            Personalized yoga therapy programs designed to support physical,
            mental and lifestyle-related health conditions.
          </p>
        </motion.div>


        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {conditions.map((condition, index) => {

            const Icon = condition.icon;

            return (
              <motion.div
                key={condition.title}
                initial={{
                  opacity:0,
                  scale:0.95,
                }}
                whileInView={{
                  opacity:1,
                  scale:1,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  delay:index * 0.06,
                }}
                whileHover={{
                  y:-8,
                }}
                className="
                group
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.035]
                p-6
                backdrop-blur
                transition
                hover:border-[#d6b36a]/40
                hover:bg-white/[0.06]
                "
              >

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#7bae8a]/10
                  text-[#7bae8a]
                  transition
                  group-hover:bg-[#d6b36a]
                  group-hover:text-[#050706]
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>


                <h3 className="mt-6 text-xl font-black text-white">
                  {condition.title}
                </h3>


                <p className="mt-3 text-sm leading-7 text-[#b8c4ba]">
                  {condition.description}
                </p>


                <div className="mt-5 text-xs font-bold uppercase tracking-widest text-[#d6b36a]">
                  Explore Therapy →
                </div>


              </motion.div>
            );

          })}

        </div>


        {/* Medical Disclaimer Style */}
        <div
          className="
          mt-14
          rounded-3xl
          border
          border-[#d6b36a]/20
          bg-[#0c120e]
          p-6
          text-center
          "
        >
          <p className="text-sm leading-7 text-[#b8c4ba]">
            Yoga therapy is a personalized wellness approach that supports
            healthy lifestyle changes. Programs are designed according to
            individual needs and should complement professional medical advice
            when required.
          </p>
        </div>


      </div>

    </section>
  );
}