import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Wind,
  FileText,
} from "lucide-react";

const resources = [
  {
    href: "/resources/articles",
    icon: BookOpen,
    label: "Articles",
    title: "Yoga & Wellness Articles",
    description:
      "Readable, practical articles covering yoga therapy, lifestyle, breathing, stress management and everyday wellbeing.",
  },
  {
    href: "/resources/research",
    icon: FlaskConical,
    label: "Research",
    title: "Research & Evidence",
    description:
      "Explore research-informed perspectives on yoga, mindfulness, pranayama and therapeutic wellness practices.",
  },
  {
    href: "/resources/pranayama",
    icon: Wind,
    label: "Pranayama",
    title: "Pranayama Library",
    description:
      "Learn about traditional breathing practices, their methods, precautions and potential therapeutic applications.",
  },
  {
    href: "/resources/guides",
    icon: FileText,
    label: "Guides",
    title: "Wellness Guides",
    description:
      "Simple guides to help you build sustainable habits around movement, breathing, relaxation and mindfulness.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050706] text-[#f7efe0]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_5%,#d6b36a18,transparent_30%),radial-gradient(circle_at_85%_40%,#2d6b4b35,transparent_32%),linear-gradient(180deg,#050706,#0a110d_55%,#050706)]" />

      {/* Hero */}
      <section className="px-6 pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-[#d6b36a] transition hover:border-[#d6b36a]/40 hover:bg-white/10"
          >
            ← Home
          </Link>

          <div className="mt-16 max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
              Knowledge Centre
            </p>

            <h1 className="mt-6 text-[clamp(3.3rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.07em]">
              Learn.
              <span className="block text-[#d6b36a]">
                Understand.
              </span>
              Practice.
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#aebbb1] md:text-lg">
              Explore educational resources about yoga therapy, pranayama,
              meditation, lifestyle and evidence-informed wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d6b36a]/30 hover:bg-white/[0.04] md:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b36a]/20 bg-[#d6b36a]/5">
                      <Icon className="h-6 w-6 text-[#d6b36a]" />
                    </div>

                    <ArrowRight className="h-5 w-5 text-white/30 transition group-hover:translate-x-1 group-hover:text-[#d6b36a]" />
                  </div>

                  <p className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#7bae8a]">
                    {resource.label}
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white md:text-4xl">
                    {resource.title}
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#919e95]">
                    {resource.description}
                  </p>

                  <div className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-[#d6b36a]">
                    Explore Resource →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Learning */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
              Start Learning
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] md:text-6xl">
              Knowledge becomes
              <span className="block text-[#7bae8a]">
                practice.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#929f96]">
              Our resources are designed to help you understand the principles
              behind your practice while keeping the information practical
              and accessible.
            </p>

            <Link
              href="/booking"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#050706] transition hover:-translate-y-1 hover:shadow-[0_0_50px_#d6b36a55]"
            >
              Talk to a Therapist
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[#0b120e] p-7">
              <span className="text-4xl font-black text-[#d6b36a]">01</span>

              <h3 className="mt-8 text-xl font-black text-white">
                Understand
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#89978e]">
                Build a basic understanding of yoga therapy, breathing and
                healthy lifestyle principles.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0b120e] p-7">
              <span className="text-4xl font-black text-[#7bae8a]">02</span>

              <h3 className="mt-8 text-xl font-black text-white">
                Explore
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#89978e]">
                Explore different practices and discover what may fit your
                individual goals.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0b120e] p-7">
              <span className="text-4xl font-black text-[#7bae8a]">03</span>

              <h3 className="mt-8 text-xl font-black text-white">
                Practice
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#89978e]">
                Apply simple practices consistently and observe how your
                experience develops.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#d6b36a]/20 bg-[#111a14] p-7">
              <span className="text-4xl font-black text-[#d6b36a]">04</span>

              <h3 className="mt-8 text-xl font-black text-white">
                Personalize
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#89978e]">
                For individual concerns, work with a qualified therapist for
                personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-7 text-center md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d6b36a]">
            Important
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#89978e]">
            Educational resources are intended for general wellness education
            and should not be treated as a substitute for diagnosis,
            emergency care or individualized medical treatment.
          </p>
        </div>
      </section>
    </main>
  );
}