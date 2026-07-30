import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  HeartPulse,
  Leaf,
  Sparkles,
} from "lucide-react";

import Navbar from "../_components/Navbar";

const therapists = [
  {
    name: "Jolly Thomas",
    credentials: "MSc Yoga Therapy",
    institution: "MAHE, Manipal",
    role: "Clinical Yoga Therapist",
    image: "/therapists/jolly-thomas.png",
    description:
      "Specialised in clinical yoga therapy, therapeutic practices, pranayama and holistic wellness approaches.",
    specialties: [
      "Clinical Yoga Therapy",
      "Pranayama",
      "Therapeutic Yoga",
    ],
  },
  {
    name: "Shobraj M G",
    credentials: "MSc Yoga Therapy",
    institution: "MAHE, Manipal",
    role: "Yoga Therapist",
    image: "/therapists/shobraj-mg.png",
    description:
      "Providing evidence-based yoga interventions for lifestyle disorders, wellbeing and personalised therapeutic care.",
    specialties: [
      "Yoga Therapy",
      "Lifestyle Wellness",
      "Personalised Care",
    ],
  },
  {
    name: "Dr. Ravindra Pratap Singh",
    credentials: "MPH, PhD",
    institution: "Public Health & Research",
    role: "Public Health Professional, Researcher & Yoga Wellness Expert",
    image: "/therapists/ravindra-pratap-singh.png",
    description:
      "Integrating modern public health with holistic yoga-based approaches to wellbeing, research and preventive health.",
    specialties: [
      "Public Health",
      "Research",
      "Yoga & Wellness",
    ],
  },
];

const expertise = [
  {
    title: "Evidence-Based",
    description:
      "Yoga interventions informed by scientific research, clinical reasoning and established therapeutic principles.",
    icon: Activity,
  },
  {
    title: "Personalised Care",
    description:
      "Therapeutic plans are adapted to individual needs, goals, lifestyle and health considerations.",
    icon: HeartPulse,
  },
  {
    title: "Structured Assessment",
    description:
      "A systematic approach helps understand your needs before developing an appropriate yoga therapy plan.",
    icon: Brain,
  },
  {
    title: "Whole-Person Wellness",
    description:
      "An integrated approach bringing together movement, breath, awareness, lifestyle and wellbeing.",
    icon: Leaf,
  },
];

export default function TherapistsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#050706] text-[#f7efe0]">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#7bae8a]/5 blur-[130px]" />

          <div className="pointer-events-none absolute right-[-180px] top-40 h-[500px] w-[500px] rounded-full bg-[#d6b36a]/5 blur-[150px]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/20 bg-[#d6b36a]/5 px-4 py-2">
                <Sparkles className="h-3.5 w-3.5 text-[#d6b36a]" />

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#d6b36a]">
                  Hayagriva Yoga
                </span>
              </div>

              <h1 className="text-[clamp(3.2rem,7vw,6.8rem)] font-black leading-[0.92] tracking-[-0.055em]">
                Meet the people
                <span className="block text-[#d6b36a]">
                  behind your care.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                A multidisciplinary approach to yoga therapy and wellness,
                bringing together therapeutic yoga, public health,
                research and personalised guidance.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/booking"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-black text-[#050706] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_#d6b36a30]"
                >
                  Book a Consultation

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white/70 transition hover:border-[#d6b36a]/30 hover:text-[#d6b36a]"
                >
                  Talk to Us
                </Link>
              </div>
            </div>

            {/* HERO METADATA */}
            <div className="mt-16 grid max-w-3xl gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-black text-white">01</p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Personalised approach
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">02</p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Research-informed care
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">03</p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Whole-person wellness
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            THERAPIST PROFILES
        ====================================================== */}
        <section className="px-6 pb-28">
          <div className="mx-auto max-w-7xl">
            {/* SECTION HEADER */}
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7bae8a]">
                  Our Practitioners
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                  Expertise with
                  <span className="text-[#d6b36a]"> purpose.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-white/40">
                Explore the people and perspectives that shape our approach
                to therapeutic yoga and wellness.
              </p>
            </div>

            {/* PROFILE CARDS */}
            <div className="grid gap-7 lg:grid-cols-3">
              {therapists.map((therapist) => (
                <article
                  key={therapist.name}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b100d] transition duration-500 hover:-translate-y-2 hover:border-[#d6b36a]/30 hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
                >
                  {/* PHOTO */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#0d1511]">
                    <Image
                      src={therapist.image}
                      alt={`${therapist.name} - ${therapist.role}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050706] via-transparent to-transparent opacity-90" />

                    {/* BRAND BADGE */}
                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#d6b36a]">
                        Hayagriva Yoga
                      </span>
                    </div>

                    {/* NAME OVER IMAGE */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7bae8a]" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                          Practitioner
                        </span>
                      </div>

                      <h3 className="text-2xl font-black leading-tight text-white">
                        {therapist.name}
                      </h3>

                      <p className="mt-2 text-sm font-semibold text-[#d6b36a]">
                        {therapist.credentials}
                      </p>

                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                        {therapist.institution}
                      </p>
                    </div>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-7">
                    <p className="text-sm font-bold leading-6 text-[#7bae8a]">
                      {therapist.role}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-white/55">
                      {therapist.description}
                    </p>

                    {/* SPECIALTIES */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {therapist.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] font-semibold text-white/50"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/booking"
                      className="group/button mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#d6b36a]"
                    >
                      Book Consultation

                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/button:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR APPROACH
        ====================================================== */}
        <section className="relative border-y border-white/5 px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#d6b36a08,transparent_45%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7bae8a]">
                Our Approach
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Science meets
                <span className="text-[#d6b36a]"> tradition.</span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-white/45 md:text-base">
                Our approach combines the traditional foundations of yoga
                with contemporary therapeutic thinking, research and
                personalised wellness strategies.
              </p>
            </div>

            {/* EXPERTISE CARDS */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d6b36a]/25 hover:bg-white/[0.035]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d6b36a]/15 bg-[#d6b36a]/5">
                      <Icon className="h-5 w-5 text-[#d6b36a]" />
                    </div>

                    <h3 className="mt-6 text-lg font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#7bae8a]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Personalised approach
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="px-6 py-28">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#d6b36a]/15 bg-[#0b100d] px-7 py-16 text-center md:px-12 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d6b36a]/5 blur-[100px]" />

            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7bae8a]">
                Your next step
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Start with a conversation.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
                Tell us about your wellness goals and discover a
                personalised path with our yoga therapy team.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-black text-[#050706] transition hover:-translate-y-1 hover:shadow-[0_15px_45px_#d6b36a30]"
                >
                  Book Consultation

                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/10 px-7 py-4 text-sm font-bold text-white/60 transition hover:border-[#d6b36a]/30 hover:text-[#d6b36a]"
                >
                  Contact Hayagriva Yoga
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}