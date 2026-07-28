import Link from "next/link";
import { ArrowRight, Wind } from "lucide-react";

const practices = [
  {
    name: "Diaphragmatic Breathing",
    level: "Foundation",
    text: "A simple breathing approach emphasizing comfortable, relaxed diaphragmatic movement.",
  },
  {
    name: "Ujjayi",
    level: "Traditional",
    text: "A traditional breathing practice performed with gentle control of the breath and throat passage.",
  },
  {
    name: "Nadi Shodhana",
    level: "Traditional",
    text: "Alternate-nostril breathing traditionally practiced for steadiness, awareness and balance.",
  },
  {
    name: "Bhramari",
    level: "Relaxation",
    text: "A humming-based breathing practice commonly incorporated into relaxation and calming routines.",
  },
];

export default function PranayamaPage() {
  return (
    <main className="min-h-screen bg-[#050706] px-6 pb-24 pt-28 text-[#f7efe0] md:pt-36">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/resources"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#d6b36a]"
        >
          ← Resources
        </Link>

        <div className="mt-16 max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
            Pranayama Library
          </p>

          <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] md:text-7xl">
            The science and
            <span className="block text-[#d6b36a]">tradition of breath.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#9ca9a0] md:text-lg">
            Explore breathing practices, their traditional context and how
            they may be incorporated into an appropriate yoga practice.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {practices.map((practice) => (
            <article
              key={practice.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition hover:border-[#d6b36a]/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6b36a]/5">
                <Wind className="h-6 w-6 text-[#d6b36a]" />
              </div>

              <p className="mt-7 text-[10px] font-black uppercase tracking-[0.3em] text-[#7bae8a]">
                {practice.level}
              </p>

              <h2 className="mt-3 text-2xl font-black text-white">
                {practice.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#919e95]">
                {practice.text}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#d6b36a]">
                View Practice
                <ArrowRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#0b120e] p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d6b36a]">
            Practice safely
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#9ca9a0]">
            Breathing practices should be comfortable and appropriate to the
            individual. Avoid forcing the breath. People with specific health
            concerns should seek individualized guidance before beginning
            therapeutic breathing practices.
          </p>
        </div>
      </div>
    </main>
  );
}