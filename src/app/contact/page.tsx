import Link from "next/link";

const contactCards = [
  {
    title: "Call / WhatsApp",
    value: "+91 00000 00000",
    text: "For booking, session timing and therapy enquiry.",
  },
  {
    title: "Email",
    value: "yourmail@example.com",
    text: "For official communication and program details.",
  },
  {
    title: "Location",
    value: "Tumkur, Karnataka",
    text: "Yoga therapy sessions and wellness consultation.",
  },
];

const reasons = [
  "Yoga Therapy Enquiry",
  "Book a Session",
  "Corporate Wellness",
  "Stress Management",
  "Back Pain / Lifestyle Disorder",
  "General Question",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050706] px-6 py-10 text-[#f7efe0]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#d6b36a22,transparent_32%),radial-gradient(circle_at_85%_45%,#2d6b4b55,transparent_30%),linear-gradient(180deg,#050706,#0b120e_55%,#050706)]" />
      <div className="temple-grid absolute inset-0 -z-10 opacity-35" />

      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#d6b36a] backdrop-blur transition hover:bg-white/10"
        >
          ← Home
        </Link>

        <section className="grid items-start gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
              Contact
            </p>

            <h1 className="mt-5 max-w-4xl text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.065em]">
              Start the
              <br />
              <span className="text-[#d6b36a]">conversation</span>
              <br />
              for healing.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#b8c4ba] md:text-lg">
              Reach out for yoga therapy sessions, condition-based guidance,
              public wellness programs, corporate wellness or personal
              consultation.
            </p>

            <div className="mt-10 grid gap-4">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur transition hover:border-[#d6b36a]/40"
                >
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d6b36a]">
                    {card.title}
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">
                    {card.value}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#b8c4ba]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[3rem] border border-[#d6b36a]/20 bg-[#0d1511]/90 p-6 shadow-[0_0_120px_#000] backdrop-blur md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d6b36a]">
              Send Enquiry
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
              Tell us how we can help.
            </h2>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-xs font-black uppercase tracking-[0.22em] text-[#87958b]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#d6b36a]/50"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase tracking-[0.22em] text-[#87958b]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#d6b36a]/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-[0.22em] text-[#87958b]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#d6b36a]/50"
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-[0.22em] text-[#87958b]">
                  Reason
                </label>
                <select className="mt-2 w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-sm text-white outline-none transition focus:border-[#d6b36a]/50">
                  {reasons.map((reason) => (
                    <option key={reason}>{reason}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-[0.22em] text-[#87958b]">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your enquiry, symptoms, goals, preferred timing or program requirement."
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#d6b36a]/50"
                />
              </div>

              <button
                type="submit"
                className="mt-3 rounded-full bg-[#d6b36a] px-8 py-5 text-sm font-black uppercase tracking-[0.25em] text-[#050706] shadow-[0_0_60px_#d6b36a55] transition hover:-translate-y-1"
              >
                Send Message
              </button>

              <p className="text-center text-xs leading-6 text-[#87958b]">
                We will review your enquiry and respond with suitable guidance
                or session availability.
              </p>
            </form>
          </div>
        </section>

        <section className="pb-20">
          <div className="rounded-[3rem] border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur md:p-14">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
              Direct Pathway
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
              For faster therapy booking, use the session request page.
            </h2>

            <div className="mt-9">
              <Link
                href="/booking"
                className="inline-flex rounded-full bg-[#d6b36a] px-10 py-5 text-xs font-black uppercase tracking-[0.22em] text-[#050706] shadow-[0_0_70px_#d6b36a66] transition hover:-translate-y-1 md:text-sm"
              >
                Book Yoga Session
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}