import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Brain,
  HeartPulse,
  Leaf,
} from "lucide-react";

import Navbar from "../_components/Navbar";

const therapists = [
  {
    name: "Dr. Jolly Thomas",
    role: "Clinical Yoga Therapist",
    image: "/therapists/jolly-thomas.png",
    description:
      "Specialised in clinical yoga therapy, therapeutic practices, pranayama and holistic wellness approaches.",
  },
  {
    name: "Shobraj M G",
    role: "Yoga Therapist",
    image: "/therapists/shobraj-mg.png",
    description:
      "MSc Yoga Therapy practitioner providing evidence-based yoga interventions for lifestyle disorders and wellbeing.",
  },
];

const expertise = [
  {
    title: "Evidence Based Therapy",
    description:
      "Scientific yoga approaches supported by research and clinical principles.",
    icon: Activity,
  },
  {
    title: "Personalised Programs",
    description:
      "Individual therapy plans designed according to unique health requirements.",
    icon: HeartPulse,
  },
  {
    title: "Clinical Assessment",
    description:
      "Structured evaluation before creating a therapeutic yoga protocol.",
    icon: Brain,
  },
  {
    title: "Holistic Wellness",
    description:
      "Integrating body, breath, mind and lifestyle for sustainable health.",
    icon: Leaf,
  },
];

export default function TherapistsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050706] px-6 pt-32 text-[#f7efe0]">

        {/* Hero */}
        <section className="mx-auto max-w-7xl py-20">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm tracking-[0.4em] text-[#7bae8a] uppercase">
              Hayagriva Yoga
            </p>


            <h1 className="text-5xl font-black leading-tight md:text-7xl">

              Our Yoga Therapists
              <span className="block text-[#d6b36a]">
                Clinical Excellence
              </span>

            </h1>


            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70">

              Meet our certified yoga therapy professionals offering
              personalised, evidence-based therapeutic yoga programs
              for physical, mental and lifestyle wellness.

            </p>


            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/booking"
                className="rounded-full bg-[#d6b36a] px-8 py-4 font-bold text-[#050706] transition hover:shadow-[0_0_40px_#d6b36a66]"
              >
                Start Assessment
              </Link>


              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-8 py-4 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </section>



        {/* Therapist Profiles */}
        <section className="mx-auto grid max-w-7xl gap-10 pb-24 md:grid-cols-2">

          {therapists.map((therapist) => (

            <div
              key={therapist.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b120e] transition duration-500 hover:-translate-y-2 hover:border-[#d6b36a]/40 hover:shadow-[0_0_50px_#d6b36a22]"
            >

              <div className="relative h-[550px] overflow-hidden">

                <Image
                  src={therapist.image}
                  alt={therapist.name}
                  fill
                  priority
                  className="object-cover transition duration-700 group-hover:scale-105"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-[#050706] via-transparent to-transparent" />

              </div>



              <div className="p-8">


                <h2 className="text-3xl font-bold text-[#d6b36a]">
                  {therapist.name}
                </h2>


                <p className="mt-2 text-[#7bae8a]">
                  {therapist.role}
                </p>


                <p className="mt-5 leading-relaxed text-white/70">
                  {therapist.description}
                </p>


                <Link
                  href="/booking"
                  className="mt-8 inline-block rounded-full bg-[#d6b36a] px-7 py-3 font-bold text-[#050706]"
                >
                  Book Consultation
                </Link>


              </div>


            </div>

          ))}

        </section>




        {/* Expertise */}
        <section className="mx-auto max-w-7xl pb-24">


          <div className="mb-12 text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-[#7bae8a]">
              Our Approach
            </p>


            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Scientific Yoga
              <span className="text-[#d6b36a]">
                {" "}Therapy
              </span>
            </h2>

          </div>




          <div className="grid gap-6 md:grid-cols-4">

            {expertise.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#0b120e] p-7 transition hover:border-[#d6b36a]/40"
                >

                  <Icon className="h-10 w-10 text-[#d6b36a]" />


                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>


                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>


                </div>

              );

            })}

          </div>


        </section>


      </main>
    </>
  );
}