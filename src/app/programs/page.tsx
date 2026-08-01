import Link from "next/link";
import { ArrowRight, Brain, Building2, Check, HeartPulse, Sparkles, UserRound } from "lucide-react";

const programs = [
  {
    icon: Brain,
    title: "14 Day Stress Reset",
    description: "A focused program combining gentle yoga, pranayama, relaxation, and mindfulness to establish a calmer daily routine.",
    duration: "14 Days",
    format: "Online Guided Program",
    features: ["Initial wellness assessment", "Personalized daily practice", "Pranayama guidance", "Guided relaxation", "Mindfulness practices", "Progress review"],
  },
  {
    icon: Sparkles,
    title: "30 Day Transformation",
    description: "A structured month-long wellness journey combining personalized yoga therapy, breathing, meditation, and lifestyle guidance.",
    duration: "30 Days",
    format: "Personalized Online Therapy",
    features: ["Detailed initial assessment", "Personalized therapy plan", "Progressive movement practices", "Pranayama guidance", "Meditation and relaxation", "Lifestyle recommendations", "Regular progress review"],
  },
  {
    icon: UserRound,
    title: "Personal Therapy",
    description: "One-to-one yoga therapy designed around your individual needs, lifestyle, goals, and current wellbeing.",
    duration: "Flexible",
    format: "One-to-One Online",
    features: ["Individual assessment", "Personalized therapy plan", "One-to-one guidance", "Practice modifications", "Breath training", "Relaxation practices", "Ongoing adaptation"],
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    description: "Yoga and wellness sessions for organizations supporting employee wellbeing, stress management, and workplace balance.",
    duration: "Custom",
    format: "Organizations & Teams",
    features: ["Workplace wellness assessment", "Group yoga sessions", "Stress management", "Breathing sessions", "Mindfulness and relaxation", "Custom scheduling"],
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#FAF8F5] px-6 pb-16 pt-[120px] lg:px-8 lg:pb-20 lg:pt-[140px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">Programs</p>
          <h1 className="max-w-[720px] text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] lg:text-[64px]">Programs built around you.</h1>
          <p className="mt-4 max-w-[600px] text-[16px] leading-[1.7] text-[#555555]">Personalized yoga therapy programs designed around your needs, goals, lifestyle, and wellness journey.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/booking" className="inline-flex h-[48px] items-center gap-2 rounded-full bg-[#1A1A1A] px-7 text-[15px] font-semibold text-white transition-colors hover:bg-[#333333]">
              Start Assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/therapists" className="inline-flex h-[48px] items-center rounded-full border border-[#D9D9D9] px-7 text-[15px] font-semibold text-[#1A1A1A] transition-colors hover:border-[#C8A96E]">
              Meet Our Therapists
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-4 lg:grid-cols-2">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <article key={program.title} className="group flex flex-col rounded-lg border border-[#E0DCD6] bg-white p-7 transition-all duration-300 hover:border-[#1F3528] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] lg:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2EFEA] transition-colors duration-300 group-hover:bg-[#1F3528]">
                    <Icon className="h-6 w-6 text-[#1F3528] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-[22px] font-semibold text-[#1A1A1A]">{program.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#555555]">{program.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#E0DCD6] bg-[#FAF8F5] px-3 py-1.5 text-[11px] font-medium text-[#555555]">{program.duration}</span>
                    <span className="rounded-full border border-[#E0DCD6] bg-[#FAF8F5] px-3 py-1.5 text-[11px] font-medium text-[#555555]">{program.format}</span>
                  </div>

                  <div className="my-6 h-px bg-[#E0DCD6]" />

                  <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#8A8480]">Includes</p>
                  <ul className="grid flex-1 gap-2 sm:grid-cols-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-[13px] text-[#555555]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1F3528]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/booking" className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#1F3528] transition-colors hover:text-[#15251C]">
                    Begin Program <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="border-t border-[#E0DCD6] pt-10">
            <p className="text-[13px] leading-[1.7] text-[#8A8480]">
              Yoga therapy is complementary wellness support and should not replace emergency medical care, diagnosis, medication, or treatment prescribed by a qualified healthcare professional.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}