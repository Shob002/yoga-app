const trustItems = [
  {
    number: "01",
    title: "Clinical Approach",
    description:
      "Personalized yoga therapy based on assessment, condition and lifestyle.",
  },
  {
    number: "02",
    title: "Evidence Based",
    description:
      "Combining traditional yoga wisdom with modern wellness research.",
  },
  {
    number: "03",
    title: "Online Care",
    description:
      "Access expert guidance from anywhere through live sessions.",
  },
  {
    number: "04",
    title: "Personal Support",
    description:
      "Continuous guidance throughout your wellness journey.",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-[#080d09] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.number}
              className="group rounded-3xl border border-white/10 bg-white/3 p-6 transition hover:-translate-y-1 hover:border-[#d6b36a]/40"
            >
              <span className="text-sm font-black tracking-widest text-[#d6b36a]">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-black text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#b8c4ba]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d6b36a]">
            Hayagriva Yoga Philosophy
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight text-white md:text-5xl">
            Not just yoga practice.
            <br />
            <span className="text-[#7bae8a]">
              A personalized healing system.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}