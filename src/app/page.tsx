import Image from "next/image";
import Link from "next/link";

const partners = ["/partners/ayush.png", "/partners/2.png", "/partners/3.png"];

const pillars = [
  "Assessment",
  "Breath Mapping",
  "Therapeutic Movement",
  "Deep Relaxation",
  "Meditation",
  "Lifestyle Reset",
];

const conditions = [
  "Stress",
  "Back Pain",
  "Anxiety",
  "Diabetes",
  "Hypertension",
  "PCOD",
  "Insomnia",
  "Obesity",
];

const flow = [
  "Clinical Assessment",
  "Breath Mapping",
  "Regulation Practice",
  "Lifestyle Correction",
  "Restoration Review",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050706] text-[#f7efe0]">
      <section className="relative flex min-h-screen items-center px-6 py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#d6b36a22,transparent_32%),radial-gradient(circle_at_15%_70%,#2d6b4b55,transparent_30%),linear-gradient(180deg,#050706,#0b120e_55%,#050706)]" />
        <div className="temple-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="mb-7 inline-flex rounded-full border border-[#d6b36a]/25 bg-white/5 px-5 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-[#d6b36a] backdrop-blur">
              Luxury Neuro-Wellness Institute
            </p>

            <h1 className="max-w-4xl text-[clamp(3.4rem,7vw,7.5rem)] font-black leading-[0.9] tracking-[-0.065em]">
              Heal the
              <br />
              <span className="text-[#d6b36a]">System</span>
              <br />
              Within
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#b8c4ba] md:text-lg">
              A premium clinical yoga therapy pathway for stress, pain, breath,
              sleep and lifestyle disorders — designed through assessment,
              regulation and guided restoration.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-[#d6b36a] px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#050706] shadow-[0_0_60px_#d6b36a66] transition hover:-translate-y-1 md:text-sm"
              >
                Begin Therapy
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10 md:text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex h-[680px] w-full max-w-[600px] items-center justify-center">
            <div className="absolute h-[620px] w-[620px] rounded-full bg-[#d6b36a]/10 blur-[130px]" />

            <div className="temple-arch relative flex h-[600px] w-[400px] items-center justify-center overflow-hidden">
              <div className="temple-light" />
              <div className="temple-inner" />

              <div className="mandala mandala-one" />
              <div className="mandala mandala-two" />
              <div className="mandala mandala-three" />

              <div className="neuro-line line-one" />
              <div className="neuro-line line-two" />
              <div className="neuro-line line-three" />
              <div className="neuro-line line-four" />

              <div className="breath-sun">
                <span />
              </div>

              <div className="absolute bottom-20 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#d6b36a]">
                  Breath • Balance • Regulation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
            Therapeutic Architecture
          </p>

          <h2 className="mt-5 max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
            A structured pathway for body, breath and mind.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {pillars.map((item, index) => (
              <div
                key={item}
                className="group min-h-44 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition hover:-translate-y-2 hover:border-[#d6b36a]/40"
              >
                <p className="text-xs font-black text-[#d6b36a]">
                  0{index + 1}
                </p>
                <h3 className="mt-14 text-xl font-black tracking-[-0.035em] text-white md:text-2xl">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[3.5rem] border border-white/10 bg-[#0d1511]/90 p-8 shadow-[0_0_120px_#000] md:p-14">
          <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
            Not exercise.
            <br />
            <span className="text-[#7bae8a]">Therapeutic regulation.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#b8c4ba] md:text-lg">
            Every session is designed to move the body from overload to
            regulation — through breath, posture, rest, awareness and lifestyle
            correction.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {conditions.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-white/10 bg-[#050706] p-6 transition hover:border-[#d6b36a]/40"
              >
                <p className="text-xl font-black tracking-[-0.035em] md:text-2xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
            Session Flow
          </p>

          <div className="mt-10 space-y-4">
            {flow.map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-white/10 py-7"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-black text-[#d6b36a]">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
                    {item}
                  </h3>
                </div>
                <span className="hidden text-4xl text-white/20 md:block">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
            Start Your Pathway
          </p>

          <h2 className="mt-6 text-[clamp(2.8rem,6vw,6rem)] font-black leading-[0.95] tracking-[-0.055em]">
            Restore breath.
            <br />
            Restore balance.
            <br />
            Restore life.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#b8c4ba] md:text-lg">
            Begin with a guided therapeutic session designed around your
            condition, capacity and lifestyle.
          </p>

          <div className="mt-10">
            <Link
              href="/booking"
              className="inline-flex rounded-full bg-[#d6b36a] px-10 py-5 text-xs font-black uppercase tracking-[0.22em] text-[#050706] shadow-[0_0_70px_#d6b36a66] transition hover:-translate-y-1 md:text-sm"
            >
              Book Yoga Session
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <p className="mb-8 text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#7f8f84]">
            Trusted & Associated With
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map((src) => (
              <div
                key={src}
                className="flex h-24 w-56 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <Image
                  src={src}
                  alt="Partner logo"
                  width={160}
                  height={80}
                  className="h-14 w-auto object-contain opacity-80 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}