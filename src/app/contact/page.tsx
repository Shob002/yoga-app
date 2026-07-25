import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call / WhatsApp",
    value: "+91 9740174787",
    text: "For bookings, therapy sessions and wellness enquiries.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@hayagrivayoga.com",
    text: "For official communication and programs.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tumakuru, Karnataka",
    text: "Online yoga therapy worldwide & offline consultation.",
  },
];


const reasons = [
  "Personal Yoga Therapy",
  "Stress & Anxiety Management",
  "Back Pain Management",
  "Lifestyle Disorder Support",
  "Corporate Wellness",
  "General Enquiry",
];


export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050706] px-6 py-10 text-[#f7efe0]">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#d6b36a25,transparent_35%),radial-gradient(circle_at_80%_60%,#2d6b4b40,transparent_35%),linear-gradient(180deg,#050706,#0b120e,#050706)]" />


      <div className="mx-auto max-w-7xl">


        {/* Back */}
        <Link
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#d6b36a]"
        >
          ← Home
        </Link>



        <section className="grid gap-14 py-16 lg:grid-cols-2">


          {/* LEFT */}
          <div>


            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
              Contact Hayagriva Yoga
            </p>


            <h1 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tight">

              Begin Your
              <br />

              <span className="text-[#d6b36a]">
                Healing
              </span>

              <br />

              Journey

            </h1>


            <p className="mt-8 max-w-xl text-lg leading-8 text-[#b8c4ba]">

              Connect with our yoga therapy experts for
              personalised guidance in stress management,
              pain relief, lifestyle correction and holistic wellness.

            </p>



            <div className="mt-10 space-y-5">

              {contactCards.map((item)=>{

                const Icon=item.icon;

                return(

                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-[#d6b36a]/50"
                >

                  <div className="flex gap-5">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d6b36a]/10">

                      <Icon className="h-5 w-5 text-[#d6b36a]" />

                    </div>


                    <div>

                      <p className="text-xs font-black uppercase tracking-widest text-[#d6b36a]">
                        {item.title}
                      </p>


                      <h2 className="mt-2 text-xl font-black text-white">
                        {item.value}
                      </h2>


                      <p className="mt-2 text-sm text-[#b8c4ba]">
                        {item.text}
                      </p>

                    </div>

                  </div>


                </div>

                )

              })}


            </div>



            <div className="mt-8 flex flex-wrap gap-4">


              <Link
                href="https://wa.me/919740174787"
                className="flex items-center gap-2 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-black text-[#050706]"
              >

                <MessageCircle className="h-4 w-4"/>

                WhatsApp

              </Link>



              <Link
                href="/booking"
                className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-black"
              >

                Book Session

                <ArrowRight className="h-4 w-4"/>

              </Link>


            </div>


          </div>





          {/* FORM */}
          <div className="rounded-[3rem] border border-[#d6b36a]/20 bg-[#0d1511]/90 p-7 shadow-2xl md:p-10">


            <p className="text-xs font-black uppercase tracking-widest text-[#d6b36a]">
              Send Enquiry
            </p>


            <h2 className="mt-5 text-4xl font-black text-white">
              How can we help you?
            </h2>



            <form className="mt-8 space-y-5">


              <input
                placeholder="Full Name"
                className="w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 outline-none focus:border-[#d6b36a]"
              />


              <input
                placeholder="Mobile Number"
                type="tel"
                className="w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 outline-none focus:border-[#d6b36a]"
              />


              <input
                placeholder="Email Address"
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 outline-none focus:border-[#d6b36a]"
              />



              <select
                className="w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4"
              >

                {reasons.map(reason=>(
                  <option key={reason}>
                    {reason}
                  </option>
                ))}

              </select>



              <textarea
                rows={5}
                placeholder="Tell us about your health goal..."
                className="w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 outline-none focus:border-[#d6b36a]"
              />



              <button
                className="w-full rounded-full bg-[#d6b36a] py-5 font-black uppercase tracking-widest text-[#050706]"
              >

                Send Message

              </button>


            </form>


          </div>


        </section>

      </div>

    </main>
  );
}