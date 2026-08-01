import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

export default function TherapistsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#FAF8F5] px-6 pb-16 pt-[120px] lg:px-8 lg:pb-20 lg:pt-[140px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[720px]">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">
              Our Practitioners
            </p>
            <h1 className="text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] lg:text-[56px]">
              Meet the people behind your care.
            </h1>
            <p className="mt-4 max-w-[600px] text-[16px] leading-[1.7] text-[#555555]">
              A multidisciplinary team bringing together clinical yoga therapy, public health, research, and personalised wellness guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="inline-flex h-[48px] items-center gap-2 rounded-full bg-[#1F3528] px-7 text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#15251C]"
              >
                Book a Consultation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[48px] items-center rounded-full border border-[#D9D9D9] px-7 text-[14px] font-semibold text-[#1A1A1A] transition-colors duration-150 hover:border-[#C8A96E]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist Profiles */}
      <section className="px-6 pb-[120px] pt-16 lg:px-8 lg:pb-[140px] lg:pt-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-3">
            {therapists.map((therapist) => (
              <article
                key={therapist.name}
                className="overflow-hidden rounded-lg border border-[#E6E6E6] bg-white transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F2EFEA]">
                  <Image
                    src={therapist.image}
                    alt={`${therapist.name} - ${therapist.role}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1F3528]">
                    {therapist.role}
                  </p>

                  <h3 className="mt-2 text-[22px] font-semibold leading-tight text-[#1A1A1A]">
                    {therapist.name}
                  </h3>

                  <p className="mt-1 text-[14px] text-[#8A8480]">
                    {therapist.credentials}
                  </p>

                  <p className="text-[14px] text-[#8A8480]">
                    {therapist.institution}
                  </p>

                  <p className="mt-4 text-[14px] leading-[1.7] text-[#555555]">
                    {therapist.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {therapist.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full border border-[#E6E6E6] bg-[#FAF8F5] px-3 py-1.5 text-[11px] font-medium text-[#555555]"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/booking"
                    className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#1F3528] transition-colors duration-150 hover:text-[#15251C]"
                  >
                    Book Consultation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F3528] px-6 py-[100px] lg:px-8 lg:py-[120px]">
        <div className="mx-auto max-w-[1240px] text-center">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.02em] text-white lg:text-[48px]">
            Start with a conversation.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.7] text-white/70">
            Tell us about your wellness goals and discover a personalised path with our yoga therapy team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/booking"
              className="inline-flex h-[48px] items-center gap-2 rounded-full bg-[#C8A96E] px-7 text-[14px] font-semibold text-[#1A1A1A] transition-colors duration-150 hover:bg-[#D4B87A]"
            >
              Book Consultation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-[48px] items-center rounded-full border border-white/30 px-7 text-[14px] font-semibold text-white transition-colors duration-150 hover:border-white/50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}