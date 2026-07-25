"use client";

import { motion } from "framer-motion";
import {
  Check,
  Crown,
  CalendarDays,
  UserRound,
  Video,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Yoga Therapy Starter",
    subtitle: "Foundation Program",
    duration: "15 Days",
    price: "Personalized",
    icon: CalendarDays,
    features: [
      "Initial health assessment",
      "Basic therapeutic yoga plan",
      "Breathing practice guidance",
      "Lifestyle recommendations",
      "Progress review",
    ],
    highlight: false,
  },

  {
    title: "Transformation Program",
    subtitle: "Most Recommended",
    duration: "30 Days",
    price: "Premium",
    icon: Sparkles,
    features: [
      "Complete clinical assessment",
      "Personalized yoga therapy sessions",
      "Pranayama & meditation protocol",
      "Weekly progress monitoring",
      "Lifestyle correction plan",
    ],
    highlight: true,
  },

  {
    title: "Private Wellness",
    subtitle: "1-on-1 Intensive",
    duration: "Custom",
    price: "Elite",
    icon: Crown,
    features: [
      "Dedicated yoga therapist",
      "Condition-specific protocol",
      "Flexible session timing",
      "Advanced relaxation techniques",
      "Long-term wellness support",
    ],
    highlight: false,
  },
];

export default function Programs() {
  return (
    <section className="relative overflow-hidden bg-[#050706] px-6 py-24 text-[#f7efe0]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d6b36a18,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl">


        {/* Heading */}
        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >

          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
            Therapy Programs
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
            Choose Your
            <span className="text-[#7bae8a]">
              {" "}
              Healing Pathway
            </span>
          </h2>


          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#b8c4ba]">
            Structured online yoga therapy programs designed for different
            health goals, lifestyle needs and levels of support.
          </p>

        </motion.div>



        {/* Program Cards */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {programs.map((program,index)=>{

            const Icon = program.icon;

            return(

              <motion.div
                key={program.title}
                initial={{
                  opacity:0,
                  y:40,
                }}
                whileInView={{
                  opacity:1,
                  y:0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  delay:index*0.1
                }}
                whileHover={{
                  y:-10
                }}

                className={`
                relative
                rounded-[2.5rem]
                border
                p-8
                backdrop-blur
                transition

                ${
                  program.highlight
                  ?
                  "border-[#d6b36a]/60 bg-[#d6b36a]/10 shadow-[0_0_80px_#d6b36a20]"
                  :
                  "border-white/10 bg-white/[0.035]"
                }
                `}
              >


                {
                  program.highlight && (
                    <div
                    className="
                    absolute
                    -top-4
                    left-1/2
                    -translate-x-1/2
                    rounded-full
                    bg-[#d6b36a]
                    px-5
                    py-2
                    text-xs
                    font-black
                    uppercase
                    tracking-widest
                    text-[#050706]
                    "
                    >
                      Recommended
                    </div>
                  )
                }



                <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[#d6b36a]/10
                text-[#d6b36a]
                "
                >
                  <Icon className="h-8 w-8"/>
                </div>



                <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#7bae8a]">
                  {program.subtitle}
                </p>


                <h3 className="mt-3 text-3xl font-black text-white">
                  {program.title}
                </h3>


                <div className="mt-5 flex items-center justify-between border-b border-white/10 pb-5">

                  <span className="text-[#b8c4ba]">
                    {program.duration}
                  </span>

                  <span className="font-black text-[#d6b36a]">
                    {program.price}
                  </span>

                </div>



                <ul className="mt-7 space-y-4">

                  {
                    program.features.map(feature=>(

                      <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#b8c4ba]"
                      >

                        <Check
                        className="mt-0.5 h-5 w-5 text-[#d6b36a]"
                        />

                        {feature}

                      </li>

                    ))
                  }

                </ul>



                <Link
                href="/booking"
                className="
                mt-8
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#d6b36a]
                px-6
                py-3
                text-sm
                font-black
                uppercase
                tracking-widest
                text-[#050706]
                transition
                hover:shadow-[0_0_50px_#d6b36a55]
                "
                >

                  <Video className="h-4 w-4"/>
                  Start Assessment

                </Link>


              </motion.div>

            )

          })}

        </div>


        {/* Bottom Message */}

        <div
        className="
        mt-16
        rounded-[3rem]
        border
        border-white/10
        bg-[#0c120e]
        p-8
        text-center
        "
        >

          <div className="flex justify-center">
            <UserRound className="h-8 w-8 text-[#d6b36a]"/>
          </div>


          <h3 className="mt-4 text-2xl font-black text-white">
            Every body is different. Every therapy plan is personalized.
          </h3>


          <p className="mx-auto mt-3 max-w-2xl text-[#b8c4ba]">
            Your journey begins with assessment, understanding and a therapy
            plan created according to your condition.
          </p>


        </div>


      </div>

    </section>
  );
}