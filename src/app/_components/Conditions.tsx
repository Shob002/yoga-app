import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Brain,
  HeartPulse,
  Moon,
  ShieldPlus,
  Sparkles,
  Wind,
} from "lucide-react";

const conditions = [
  {
    icon: Brain,
    number: "01",
    title: "Stress & Anxiety",
    description:
      "Structured yoga therapy using breath regulation, movement, relaxation, and mindfulness practices to support better stress management.",
    tags: ["Stress", "Anxiety", "Mindfulness"],
  },
  {
    icon: Activity,
    number: "02",
    title: "Back & Neck Pain",
    description:
      "Individualized therapeutic movement, posture awareness, mobility practices, and relaxation techniques designed around your needs.",
    tags: ["Back Pain", "Neck Pain", "Mobility"],
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Diabetes & Metabolic Health",
    description:
      "A supportive lifestyle-oriented yoga therapy approach incorporating movement, breathing, relaxation, and healthy routines.",
    tags: ["Diabetes", "Lifestyle", "Wellness"],
  },
  {
    icon: Sparkles,
    number: "04",
    title: "PCOS & Women's Wellness",
    description:
      "Personalized yoga practices supporting movement, stress management, relaxation, body awareness, and sustainable lifestyle habits.",
    tags: ["PCOS", "Women's Wellness", "Stress"],
  },
  {
    icon: Moon,
    number: "05",
    title: "Sleep Disorders",
    description:
      "Gentle evening practices, breathing techniques, relaxation, and mindfulness to help establish a healthier sleep-supportive routine.",
    tags: ["Sleep", "Relaxation", "Pranayama"],
  },
  {
    icon: Wind,
    number: "06",
    title: "Breathing & Respiratory Wellness",
    description:
      "Breath-focused practices and gentle yoga techniques selected according to individual capacity and therapeutic goals.",
    tags: ["Breathing", "Pranayama", "Respiratory"],
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Assessment",
    text: "Understand your current needs.",
  },
  {
    number: "02",
    title: "Personalization",
    text: "Build practices around you.",
  },
  {
    number: "03",
    title: "Practice",
    text: "Progress through guided sessions.",
  },
  {
    number: "04",
    title: "Review",
    text: "Adapt your plan over time.",
  },
];

export default function Conditions() {
  return (
    <section
      id="conditions"
      className="relative overflow-hidden bg-[#050706] text-[#f7efe0]"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-15%] top-[8%] h-125 w-[500px] rounded-full bg-[#d6b36a]/10 blur-[140px]" />

        <div className="absolute right-[-10%] top-[45%] h-[500px] w-[500px] rounded-full bg-[#7bae8a]/10 blur-[140px]" />

        <div className="absolute bottom-[-10%] left-[35%] h-[400px] w-[400px] rounded-full bg-[#d6b36a]/5 blur-[140px]" />
      </div>

      {/* Hero */}
      <div className="relative px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/25 bg-[#d6b36a]/5 px-5 py-2.5">
              <ShieldPlus
                className="h-4 w-4 text-[#d6b36a]"
                strokeWidth={1.8}
              />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6b36a]">
                Conditions We Support
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[clamp(3.2rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.065em]">
              Yoga Therapy
              <span className="block text-[#d6b36a]">
                For Your Health.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#aeb9b1] md:text-xl">
              Personalized yoga therapy for common physical, mental, and
              lifestyle-related health challenges. Your program is adapted
              according to your needs, capacity, goals, and assessment.
            </p>

            {/* Hero buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-black uppercase tracking-wider text-[#050706] transition duration-300 hover:-translate-y-1 hover:bg-[#e2c47e] hover:shadow-[0_0_50px_rgba(214,179,106,0.25)]"
              >
                Start Assessment

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>

              <Link
                href="/therapists"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white/80 transition duration-300 hover:border-[#d6b36a]/40 hover:bg-white/[0.06] hover:text-white"
              >
                Meet Our Therapists
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Conditions */}
      <div className="relative px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#7bae8a]">
                Personalized Care
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Areas of Therapeutic Support
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#8e9a92]">
              Yoga therapy is complementary care and does not replace
              diagnosis, emergency care, medication, or treatment prescribed
              by your qualified healthcare professional.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition) => {
              const Icon = condition.icon;

              return (
                <article
                  key={condition.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#d6b36a]/30 hover:bg-white/[0.045] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                >
                  {/* Card glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d6b36a]/5 blur-3xl transition duration-500 group-hover:bg-[#d6b36a]/10"
                  />

                  <div className="relative">
                    {/* Icon + number */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d6b36a]/20 bg-[#d6b36a]/5">
                        <Icon
                          className="h-5 w-5 text-[#d6b36a]"
                          strokeWidth={1.8}
                        />
                      </div>

                      <span className="text-xs font-black tracking-[0.2em] text-white/20">
                        {condition.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="mt-7 text-xl font-black text-white">
                      {condition.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-7 text-[#9da9a1]">
                      {condition.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {condition.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="relative border-y border-white/10 bg-[#0a100d] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d6b36a]">
              Not One-Size-Fits-All
            </p>

            <h3 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">
              Your condition is only
              <span className="block text-[#7bae8a]">
                one part of the picture.
              </span>
            </h3>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#9eaaa2]">
              Our approach considers your current symptoms, lifestyle,
              movement patterns, breathing, stress, sleep, and personal goals
              before building your practice.
            </p>

            <Link
              href="/booking"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-black uppercase tracking-wider text-[#050706] transition duration-300 hover:-translate-y-1 hover:bg-[#e2c47e] hover:shadow-[0_0_50px_rgba(214,179,106,0.25)]"
            >
              Begin Assessment

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </div>

          {/* Steps */}
          <div className="grid gap-4 sm:grid-cols-2">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-[#d6b36a]/20 hover:bg-white/[0.04]"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#d6b36a]">
                  {step.number}
                </span>

                <h4 className="mt-4 font-black text-white">
                  {step.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#89968e]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative px-6 py-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-[#d6b36a]/20 bg-gradient-to-br from-[#172019] to-[#0a0e0b] p-10 text-center md:p-16">
          {/* Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d6b36a]/10 blur-[100px]"
          />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d6b36a]">
              Begin Your Journey
            </p>

            <h3 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
              Find a practice that
              <span className="block text-[#7bae8a]">
                fits your life.
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#9ba79f]">
              Start with an assessment and discover how personalized yoga
              therapy can become part of your wellness journey.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d6b36a] px-8 py-4 text-sm font-black uppercase tracking-wider text-[#050706] transition duration-300 hover:-translate-y-1 hover:bg-[#e2c47e] hover:shadow-[0_0_50px_rgba(214,179,106,0.25)]"
              >
                Book Assessment

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-8 py-4 text-sm font-bold text-white/80 transition duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}