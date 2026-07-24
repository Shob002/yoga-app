"use client";

import Link from "next/link";
import { useState } from "react";
import { api } from "~/trpc/react";

const therapyOptions = [
  "Stress & Anxiety",
  "Back Pain",
  "Diabetes",
  "Hypertension",
  "PCOD",
  "Insomnia",
  "Weight Management",
  "General Wellness",
];

export default function BookingPage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Stress & Anxiety",
    date: "",
    time: "",
    message: "",
  });


  const [zoomLink, setZoomLink] = useState<string | null>(null);


  const bookingMutation = api.booking.create.useMutation({

    onSuccess: (data) => {

      setZoomLink(data.zoomJoinUrl);

      setForm({
        name: "",
        phone: "",
        email: "",
        service: "Stress & Anxiety",
        date: "",
        time: "",
        message: "",
      });

    },


    onError: (error) => {

      alert(
        "Booking failed: " + error.message
      );

    },

  });



  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    bookingMutation.mutate(form);

  }



  return (

    <main className="min-h-screen overflow-hidden bg-[#050706] px-6 py-10 text-[#f7efe0]">


      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#d6b36a22,transparent_32%),radial-gradient(circle_at_80%_40%,#2d6b4b55,transparent_30%),linear-gradient(180deg,#050706,#0b120e_55%,#050706)]" />

      <div className="temple-grid absolute inset-0 -z-10 opacity-35" />



      <div className="mx-auto max-w-7xl">


        <Link
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#d6b36a] backdrop-blur"
        >
          ← Home
        </Link>



        <section className="grid items-start gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr]">



          <div>


            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
              Book Yoga Therapy
            </p>



            <h1 className="mt-5 max-w-3xl text-[clamp(3rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.065em]">

              Begin your

              <br />

              <span className="text-[#d6b36a]">
                healing
              </span>

              <br />

              pathway.

            </h1>



            <p className="mt-8 max-w-xl text-base leading-8 text-[#b8c4ba]">

              Share your condition, goal and preferred time.
              Your yoga therapy session will be planned
              according to your requirement.

            </p>




            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {therapyOptions.map((item)=>(

                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-sm font-black text-white backdrop-blur"
                >

                  {item}

                </div>

              ))}

            </div>


          </div>





          <div className="rounded-[3rem] border border-[#d6b36a]/20 bg-[#0d1511]/90 p-6 shadow-[0_0_120px_#000] backdrop-blur md:p-10">


            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d6b36a]">
              Session Request
            </p>



            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Tell us what you need.
            </h2>




            {
              zoomLink && (

                <div className="mt-6 rounded-3xl border border-[#d6b36a]/30 bg-[#050706] p-6">

                  <h3 className="font-black text-[#d6b36a]">
                    Booking Confirmed ✅
                  </h3>


                  <p className="mt-3 text-sm text-white">
                    Your Zoom Yoga Therapy Link:
                  </p>


                  <a
                    href={zoomLink}
                    target="_blank"
                    className="mt-4 block break-all text-sm text-blue-400 underline"
                  >
                    {zoomLink}
                  </a>


                </div>

              )
            }





            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-5"
            >



              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e)=>setForm({
                  ...form,
                  name:e.target.value
                })}
                className="rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-white"
              />




              <input
                required
                type="tel"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={(e)=>setForm({
                  ...form,
                  phone:e.target.value
                })}
                className="rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-white"
              />





              <input
                type="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={(e)=>setForm({
                  ...form,
                  email:e.target.value
                })}
                className="rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-white"
              />





              <select

                value={form.service}

                onChange={(e)=>setForm({
                  ...form,
                  service:e.target.value
                })}

                className="rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-white"

              >

                {therapyOptions.map(item=>(

                  <option key={item}>
                    {item}
                  </option>

                ))}

              </select>






              <div className="grid gap-5 md:grid-cols-2">


                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e)=>setForm({
                    ...form,
                    date:e.target.value
                  })}
                  className="rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-white"
                />



                <input
                  required
                  type="time"
                  value={form.time}
                  onChange={(e)=>setForm({
                    ...form,
                    time:e.target.value
                  })}
                  className="rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-white"
                />


              </div>






              <textarea

                rows={5}

                placeholder="Symptoms / Goal"

                value={form.message}

                onChange={(e)=>setForm({
                  ...form,
                  message:e.target.value
                })}

                className="resize-none rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-white"

              />







              <button

                disabled={bookingMutation.isPending}

                type="submit"

                className="mt-3 rounded-full bg-[#d6b36a] px-8 py-5 text-sm font-black uppercase tracking-[0.25em] text-[#050706]"

              >

                {
                  bookingMutation.isPending
                  ?
                  "Creating Zoom Session..."
                  :
                  "Submit Booking Request"
                }


              </button>






              <p className="text-center text-xs text-[#87958b]">

                Confirmation and Zoom details will be generated automatically.

              </p>



            </form>



          </div>



        </section>


      </div>


    </main>

  );
}