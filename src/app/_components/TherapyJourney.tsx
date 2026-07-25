"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Search,
  FileHeart,
  Video,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const journey = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Initial Assessment",
    description:
      "Understanding your health history, lifestyle, symptoms, goals and current physical capacity.",
  },
  {
    step: "02",
    icon: Search,
    title: "Therapeutic Analysis",
    description:
      "Identifying breathing patterns, movement limitations and lifestyle factors affecting wellbeing.",
  },
  {
    step: "03",
    icon: FileHeart,
    title: "Personalised Plan",
    description:
      "Creating a structured yoga therapy protocol based on your individual requirements.",
  },
  {
    step: "04",
    icon: Video,
    title: "Guided Practice",
    description:
      "Live online sessions with posture correction, breathing guidance and meditation practices.",
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitoring improvements and adjusting practices according to your response.",
  },
  {
    step: "06",
    icon: Sparkles,
    title: "Long-Term Transformation",
    description:
      "Building sustainable habits for better balance, energy and quality of life.",
  },
];

export default function TherapyJourney() {
  return (
    <section className="relative overflow-hidden bg-[#050706] px-6 py-24 text-[#f7efe0]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#d6b36a15,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >

          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
            Therapy Journey
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
            From Assessment
            <span className="text-[#7bae8a]">
              {" "}
              To Transformation
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#b8c4ba]">
            A systematic approach that combines traditional yoga knowledge with
            personalised therapeutic guidance.
          </p>

        </motion.div>



        {/* Timeline */}

        <div className="relative mt-16">

          {/* Line */}

          <div
          className="
          absolute
          left-7
          top-0
          hidden
          h-full
          w-px
          bg-[#d6b36a]/20
          md:block
          "
          />


          <div className="space-y-8">

            {journey.map((item,index)=>{

              const Icon = item.icon;

              return (

                <motion.div
                key={item.step}

                initial={{
                  opacity:0,
                  x:-30,
                }}

                whileInView={{
                  opacity:1,
                  x:0,
                }}

                viewport={{
                  once:true,
                }}

                transition={{
                  delay:index*0.1,
                }}

                className="
                relative
                flex
                gap-6
                "
                >


                  {/* Number */}

                  <div
                  className="
                  relative
                  z-10
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d6b36a]/40
                  bg-[#050706]
                  text-[#d6b36a]
                  "
                  >

                    <span className="text-xs font-black">
                      {item.step}
                    </span>

                  </div>



                  {/* Content */}

                  <div
                  className="
                  flex-1
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-7
                  backdrop-blur
                  transition
                  hover:border-[#d6b36a]/40
                  "
                  >

                    <div className="flex flex-col gap-5 md:flex-row md:items-center">


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
                      "
                      >

                        <Icon className="h-7 w-7"/>

                      </div>



                      <div>

                        <h3 className="text-2xl font-black text-white">
                          {item.title}
                        </h3>


                        <p className="mt-3 leading-7 text-[#b8c4ba]">
                          {item.description}
                        </p>

                      </div>


                    </div>


                  </div>


                </motion.div>

              );

            })}

          </div>

        </div>



        {/* Final Message */}

        <motion.div
        initial={{opacity:0,scale:.95}}
        whileInView={{opacity:1,scale:1}}
        viewport={{once:true}}
        className="
        mt-16
        rounded-[3rem]
        border
        border-[#7bae8a]/30
        bg-[#0c120e]
        p-10
        text-center
        "
        >

          <h3 className="text-3xl font-black text-white">
            Your health journey begins with understanding.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-[#b8c4ba]">
            We don't provide a generic routine. We design a therapy pathway
            around your body, breath and lifestyle.
          </p>

        </motion.div>


      </div>

    </section>
  );
}