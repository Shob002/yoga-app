"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Brain,
  HeartPulse,
  Wind,
  Sparkles,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";


const trustPoints = [
  {
    icon: Stethoscope,
    title: "Clinical Assessment",
    text: "Understand your body, symptoms, lifestyle and health goals.",
  },
  {
    icon: Wind,
    title: "Breath Intelligence",
    text: "Pranayama-based regulation for nervous system balance.",
  },
  {
    icon: HeartPulse,
    title: "Personal Therapy",
    text: "Condition-specific yoga programs designed for you.",
  },
];


const metrics = [
  {
    number: "500+",
    label: "Therapy Sessions",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    number: "MSc",
    label: "Yoga Therapy",
  },
];


export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28">


      {/* Background */}

      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top,#d6b36a25,transparent_35%),
        radial-gradient(circle_at_right,#7bae8a25,transparent_30%),
        linear-gradient(180deg,#050706,#0b120e,#050706)]
        "
      />


      <div className="temple-grid absolute inset-0 opacity-30" />


      {/* Floating Glow */}

      <motion.div
        animate={{
          scale:[1,1.15,1],
        }}
        transition={{
          duration:8,
          repeat:Infinity,
        }}
        className="
        absolute right-[-150px]
        top-40
        h-[550px]
        w-[550px]
        rounded-full
        bg-[#d6b36a]/10
        blur-[130px]
        "
      />



      <div
        className="
        relative
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-16
        lg:grid-cols-2
        "
      >


        {/* LEFT CONTENT */}


        <motion.div
          initial={{
            opacity:0,
            x:-40,
          }}

          animate={{
            opacity:1,
            x:0,
          }}

          transition={{
            duration:.8,
          }}
        >


          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#d6b36a]/30
            bg-white/5
            px-5
            py-2
            text-xs
            font-black
            uppercase
            tracking-[0.3em]
            text-[#d6b36a]
            backdrop-blur
            "
          >

            <Sparkles className="h-4 w-4"/>

            Clinical Wellness Institute

          </div>



          <h1
            className="
            mt-8
            max-w-5xl
            text-[clamp(3.2rem,7vw,7rem)]
            font-black
            leading-[0.9]
            tracking-[-0.06em]
            "
          >

            Transform Health

            <span className="block text-[#d6b36a]">
              Through Yoga
            </span>

            <span className="block text-[#7bae8a]">
              Therapy
            </span>

          </h1>



          <p
            className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-[#b8c4ba]
            "
          >

            Personalized online yoga therapy combining
            clinical assessment, pranayama, therapeutic movement,
            meditation and lifestyle correction for modern health
            challenges.

          </p>



          {/* CTA */}


          <div className="mt-10 flex flex-wrap gap-4">


            <Link
              href="/booking"
              className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-[#d6b36a]
              px-8
              py-4
              text-sm
              font-black
              uppercase
              tracking-wider
              text-[#050706]
              shadow-[0_0_60px_#d6b36a55]
              transition
              hover:-translate-y-1
              "
            >

              Book Assessment

              <ArrowRight
                className="
                h-4
                w-4
                transition
                group-hover:translate-x-1
                "
              />

            </Link>



            <Link
              href="/programs"
              className="
              rounded-full
              border
              border-white/20
              bg-white/5
              px-8
              py-4
              text-sm
              font-bold
              text-white
              backdrop-blur
              hover:bg-white/10
              "
            >

              Explore Programs

            </Link>


          </div>



          {/* Metrics */}


          <div
            className="
            mt-14
            grid
            grid-cols-3
            gap-5
            "
          >

            {metrics.map((item)=>(

              <div
                key={item.label}
              >

                <h3
                  className="
                  text-3xl
                  font-black
                  text-[#d6b36a]
                  "
                >

                  {item.number}

                </h3>


                <p
                  className="
                  mt-1
                  text-xs
                  uppercase
                  tracking-wider
                  text-[#87958b]
                  "
                >

                  {item.label}

                </p>


              </div>

            ))}


          </div>



          {/* Trust Cards */}


          <div
            className="
            mt-12
            grid
            gap-4
            sm:grid-cols-3
            "
          >

            {trustPoints.map((item)=>{


              const Icon=item.icon;


              return (

                <motion.div

                  whileHover={{
                    y:-8,
                  }}

                  key={item.title}

                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-5
                  backdrop-blur
                  "

                >

                  <Icon
                    className="
                    h-7
                    w-7
                    text-[#d6b36a]
                    "
                  />


                  <h3
                    className="
                    mt-4
                    font-bold
                    text-white
                    "
                  >

                    {item.title}

                  </h3>


                  <p
                    className="
                    mt-2
                    text-sm
                    leading-6
                    text-[#b8c4ba]
                    "
                  >

                    {item.text}

                  </p>


                </motion.div>

              );


            })}


          </div>


        </motion.div>





        {/* RIGHT VISUAL */}


        <motion.div

          initial={{
            opacity:0,
            scale:.8,
          }}

          animate={{
            opacity:1,
            scale:1,
          }}

          transition={{
            duration:1,
          }}

          className="
          relative
          flex
          justify-center
          "

        >


          <div
            className="
            absolute
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#d6b36a]/10
            blur-[120px]
            "
          />



          <div
            className="
            relative
            flex
            h-[600px]
            w-[390px]
            items-center
            justify-center
            overflow-hidden
            rounded-[220px_220px_50px_50px]
            border
            border-[#d6b36a]/30
            bg-gradient-to-b
            from-[#152018]
            to-[#050706]
            shadow-[0_0_80px_#000]
            "
          >


            <div
              className="
              absolute
              h-72
              w-72
              rounded-full
              border
              border-[#d6b36a]/30
              animate-pulse
              "
            />


            <div className="text-center">


              <div
                className="
                mx-auto
                flex
                h-36
                w-36
                items-center
                justify-center
                rounded-full
                border
                border-[#d6b36a]/40
                bg-[#0d1511]
                shadow-[0_0_60px_#d6b36a55]
                "
              >

                <span
                  className="
                  text-7xl
                  text-[#d6b36a]
                  "
                >
                  ॐ
                </span>


              </div>



              <h2
                className="
                mt-10
                text-3xl
                font-black
                text-white
                "
              >

                Breath

                <span className="text-[#d6b36a]">
                  {" "}•{" "}
                </span>

                Balance

                <span className="text-[#d6b36a]">
                  {" "}•{" "}
                </span>

                Healing

              </h2>



              <p
                className="
                mt-5
                text-xs
                uppercase
                tracking-[0.4em]
                text-[#7bae8a]
                "
              >

                Online Clinical Yoga Therapy

              </p>


              <div
                className="
                mt-8
                flex
                justify-center
                gap-3
                text-[#d6b36a]
                "
              >

                <ShieldCheck/>
                <Activity/>
                <Brain/>

              </div>


            </div>


          </div>



        </motion.div>


      </div>


    </section>
  );
}