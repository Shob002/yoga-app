"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Video,
  UserRound,
  Users,
  Building2,
  Mountain,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: UserRound,
    title: "1-on-1 Yoga Therapy",
    description:
      "Private sessions designed around your health condition, lifestyle, body capacity and therapeutic goals.",
    tag: "Personal Care",
  },
  {
    icon: Video,
    title: "Online Yoga Therapy",
    description:
      "Live guided sessions from anywhere with assessment, practice correction and progress tracking.",
    tag: "Online",
  },
  {
    icon: Users,
    title: "Group Wellness Programs",
    description:
      "Structured yoga programs for communities, organisations and wellness groups.",
    tag: "Community",
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    description:
      "Employee wellness programs focusing on stress management, productivity and healthy habits.",
    tag: "Corporate",
  },
  {
    icon: Mountain,
    title: "Yoga Retreats",
    description:
      "Immersive wellness experiences combining yoga therapy, meditation and lifestyle transformation.",
    tag: "Retreat",
  },
  {
    icon: HeartHandshake,
    title: "Lifestyle Coaching",
    description:
      "Holistic guidance integrating yoga, breathing, relaxation and sustainable daily routines.",
    tag: "Holistic",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#050706] px-6 py-24 text-[#f7efe0]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#2d6b4b22,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl">


        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
            Our Services
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
            Complete Wellness
            <span className="text-[#7bae8a]">
              {" "}
              Ecosystem
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#b8c4ba]">
            From personal therapy sessions to corporate wellness solutions,
            Hayagriva Yoga provides structured programs for individuals and
            organisations.
          </p>

        </motion.div>



        {/* Service Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service,index)=>{

            const Icon = service.icon;

            return(

              <motion.div
                key={service.title}

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
                  delay:index*0.08,
                }}

                whileHover={{
                  y:-10,
                }}

                className="
                group
                rounded-[2.5rem]
                border
                border-white/10
                bg-white/[0.035]
                p-8
                backdrop-blur
                transition
                hover:border-[#d6b36a]/40
                hover:shadow-[0_0_70px_#d6b36a18]
                "
              >


                <div className="flex items-start justify-between">

                  <div
                  className="
                  flex
                  h-16
                  w-16
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

                    <Icon className="h-8 w-8"/>

                  </div>


                  <span
                  className="
                  rounded-full
                  border
                  border-[#d6b36a]/20
                  px-3
                  py-1
                  text-[10px]
                  font-black
                  uppercase
                  tracking-widest
                  text-[#d6b36a]
                  "
                  >
                    {service.tag}
                  </span>

                </div>



                <h3 className="mt-8 text-2xl font-black text-white">
                  {service.title}
                </h3>


                <p className="mt-4 leading-7 text-[#b8c4ba]">
                  {service.description}
                </p>



                <Link
                href="/booking"
                className="
                mt-7
                inline-flex
                items-center
                gap-2
                text-sm
                font-black
                uppercase
                tracking-widest
                text-[#d6b36a]
                transition
                group-hover:gap-4
                "
                >

                  Explore
                  <ArrowRight className="h-4 w-4"/>

                </Link>


              </motion.div>

            )

          })}

        </div>



        {/* Business CTA */}

        <motion.div
        initial={{opacity:0}}
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

          <h3 className="text-3xl font-black text-white md:text-4xl">
            Start your personalised yoga therapy journey
          </h3>


          <p className="mx-auto mt-4 max-w-2xl text-[#b8c4ba]">
            Book an assessment session and discover a therapy pathway designed
            specifically for your needs.
          </p>


          <Link
          href="/booking"
          className="
          mt-7
          inline-flex
          rounded-full
          bg-[#d6b36a]
          px-8
          py-4
          text-sm
          font-black
          uppercase
          tracking-widest
          text-[#050706]
          "
          >
            Book Assessment
          </Link>


        </motion.div>


      </div>

    </section>
  );
}