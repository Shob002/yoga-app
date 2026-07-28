import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Brain,
  HeartPulse,
  Moon,
  ShieldPlus,
  Sparkles,
} from "lucide-react";

const conditions = [
  {
    icon: Brain,
    title: "Stress & Anxiety",
    description:
      "Breathing, relaxation, meditation and therapeutic yoga practices designed to support stress management and emotional wellbeing.",
  },
  {
    icon: Activity,
    title: "Back & Neck Pain",
    description:
      "Individualized movement, mobility, breathing and relaxation strategies based on your assessment and functional needs.",
  },
  {
    icon: HeartPulse,
    title: "Diabetes & Metabolic Health",
    description:
      "Lifestyle-oriented yoga therapy supporting movement, stress management and healthy daily routines alongside medical care.",
  },
  {
    icon: Sparkles,
    title: "PCOS & Women's Wellness",
    description:
      "Personalized practices addressing movement, relaxation, stress management and lifestyle factors relevant to women's wellbeing.",
  },
  {
    icon: Moon,
    title: "Sleep Difficulties",
    description:
      "Gentle evening practices, breathing, relaxation and mindfulness techniques to support a healthier sleep routine.",
  },
  {
    icon: ShieldPlus,
    title: "Lifestyle Disorders",
    description:
      "A structured yoga-therapy approach combining movement, breath, relaxation and lifestyle modification for overall wellbeing.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Assessment",
    text: "Understand your needs, goals and current patterns.",
  },
  {
    number: "02",
    title: "Personalization",
    text: "Build practices around your individual requirements.",
  },
  {
    number: "03",
    title: "Guided Practice",
    text: "Learn movement, breathing and relaxation techniques.",
  },
  {
    number: "04",
    title: "Progress",
    text: "Review your experience and adapt the approach over time.",
  },
];

export default function ConditionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050706] text-[#f7efe0]">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_5%,rgba(214,179,106,0.10),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(45,107,75,0.18),transparent_32%),linear-gradient(180deg,#050706_0%,#0a110d_55%,#050706_100%)]"
      />

      {/* =========================
          HERO
      ========================= */}
      <section className="px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#d6b36a] transition-all duration-300 hover:border-[#d6b36a]/40 hover:bg-white/[0.08]"
          >
            ← Home
          </Link>

          <div className="mt-14 max-w-5xl md:mt-20">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d6b36a]">
              Conditions & Wellness
            </p>

            <h1 className="mt-6 text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.07em]">
              Care for your
              <span className="block text-[#d6b36a]">
                whole wellbeing.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#aebbb1] md:text-lg">
              Yoga therapy can be adapted to individual needs, health goals
              and lifestyle patterns. Explore the areas we commonly support
              through personalized assessment and guided practice.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CONDITIONS
      ========================= */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#7bae8a]">
              Areas We Support
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
              Personalized rather than one-size-fits-all.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition) => {
              const Icon = condition.icon;

              return (
                <article
                  key={condition.title}
                  className="group rounded-[2rem] border border-white/10 bg-[#0b120e]/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b36a]/30 hover:bg-[#101913]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b36a]/20 bg-[#d6b36a]/5">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[#d6b36a]"
                    />
                  </div>

                  <h3 className="mt-7 text-2xl font-black tracking-[-0.04em] text-white">
                    {condition.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#929f96]">
                    {condition.description}
                  </p>

                  <Link
                    href="/booking"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#d6b36a]"
                  >
                    Learn More
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          APPROACH
      ========================= */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d6b36a]">
              The Hayagriva Approach
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Your condition is only
              <span className="block text-[#7bae8a]">
                one part of the picture.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#929f96]">
              We look beyond a single symptom and consider movement,
              breathing, stress, sleep, lifestyle and individual goals when
              developing a yoga-therapy plan.
            </p>

            <Link
              href="/booking"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#050706] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(214,179,106,0.33)]"
            >
              Start Assessment
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] border border-white/10 bg-[#0b120e] p-7 transition-all duration-300 hover:border-[#d6b36a]/20"
              >
                <span className="text-3xl font-black text-[#d6b36a]">
                  {step.number}
                </span>

                <h3 className="mt-7 text-xl font-black text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#89978e]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl rounded-[3rem] border border-[#d6b36a]/20 bg-[#111a14] p-8 text-center shadow-[0_0_100px_rgba(0,0,0,0.4)] md:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d6b36a]">
            Need Individual Guidance?
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl">
            Start with an assessment.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#929f96] md:text-base">
            Tell us about your concerns, goals and preferred timing. We can
            then determine the most appropriate next step.
          </p>

          <Link
            href="/booking"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d6b36a] px-8 py-5 text-sm font-bold uppercase tracking-[0.18em] text-[#050706] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(214,179,106,0.33)]"
          >
            Book Yoga Therapy
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* =========================
          DISCLAIMER
      ========================= */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6b36a]">
            Important
          </p>

          <p className="mt-4 text-sm leading-7 text-[#7f8c83]">
            Yoga therapy is complementary wellness support and does not
            replace diagnosis, prescribed treatment or emergency medical care.
            Individual suitability should be assessed before beginning a
            therapeutic program.
          </p>
        </div>
      </section>
    </main>
  );
}