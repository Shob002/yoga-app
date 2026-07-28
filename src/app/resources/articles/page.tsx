import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";

const topics = [
  {
    title: "Yoga & Stress",
    text: "Explore research perspectives on yoga, relaxation and stress-related wellbeing.",
  },
  {
    title: "Pranayama & Breathing",
    text: "Learn about scientific interest in breathing practices and autonomic regulation.",
  },
  {
    title: "Yoga & Sleep",
    text: "Understand how yoga and relaxation practices are being studied in relation to sleep quality.",
  },
  {
    title: "Mindfulness & Mental Wellbeing",
    text: "Explore research around mindfulness, attention, emotional regulation and wellbeing.",
  },
];

export default function ResearchPage() {
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
            Research
          </p>

          <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] md:text-7xl">
            Evidence behind
            <span className="block text-[#7bae8a]">the practice.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#9ca9a0] md:text-lg">
            A research-oriented space for understanding the evidence,
            limitations and evolving science surrounding yoga and wellness.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-[2rem] border border-white/10 bg-[#0b120e] p-8"
            >
              <FlaskConical className="h-6 w-6 text-[#d6b36a]" />

              <h2 className="mt-7 text-2xl font-black text-white">
                {topic.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#919e95]">
                {topic.text}
              </p>

              <div className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#d6b36a]">
                Research Library
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#d6b36a]/20 bg-[#111a14] p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d6b36a]">
            Research standard
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#9ca9a0]">
            Research information should be interpreted carefully. Evidence
            quality varies between studies, and yoga therapy should not be
            presented as a replacement for appropriate medical care.
          </p>
        </div>
      </div>
    </main>
  );
}