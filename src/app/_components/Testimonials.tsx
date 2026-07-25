"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "IT Professional",
    review:
      "The personalised yoga therapy approach helped me manage stress, improve sleep and build a healthier daily routine.",
  },
  {
    name: "Rahul Verma",
    role: "Entrepreneur",
    review:
      "Online sessions are very convenient. The breathing practices and relaxation techniques created a major positive change.",
  },
  {
    name: "Ananya Reddy",
    role: "Healthcare Professional",
    review:
      "A structured and scientific approach to yoga therapy. The assessment-based method makes the practice meaningful.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#050706] px-6 py-24 text-[#f7efe0]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#2d6b4b20,transparent_45%)]" />


      <div className="relative mx-auto max-w-7xl">


        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
            Client Experiences
          </p>


          <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">

            Real Stories.
            <span className="text-[#7bae8a]">
              {" "}
              Real Transformation.
            </span>

          </h2>


          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#b8c4ba]">
            Every journey is unique. Here are experiences from people who
            started their wellness transformation with Hayagriva Yoga.
          </p>


        </motion.div>




        {/* Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {testimonials.map((item,index)=>(

            <motion.div

            key={item.name}

            initial={{
              opacity:0,
              y:40,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:true,
            }}

            transition={{
              delay:index*0.1,
            }}

            whileHover={{
              y:-10,
            }}

            className="
            relative
            rounded-[2.5rem]
            border
            border-white/10
            bg-white/[0.035]
            p-8
            backdrop-blur
            transition
            hover:border-[#d6b36a]/40
            "

            >

              {/* Quote Icon */}

              <div
              className="
              absolute
              right-8
              top-8
              text-[#d6b36a]/20
              "
              >
                <Quote className="h-12 w-12"/>
              </div>



              {/* Stars */}

              <div className="flex gap-1">

                {[1,2,3,4,5].map((star)=>(

                  <Star
                  key={star}
                  className="
                  h-5
                  w-5
                  fill-[#d6b36a]
                  text-[#d6b36a]
                  "
                  />

                ))}

              </div>



              <p className="mt-6 leading-8 text-[#b8c4ba]">
                "{item.review}"
              </p>




              {/* User */}

              <div className="mt-8 flex items-center gap-4">


                <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#d6b36a]
                to-[#7bae8a]
                font-black
                text-[#050706]
                "
                >
                  {item.name.charAt(0)}
                </div>


                <div>

                  <h3 className="font-black text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#7f8f84]">
                    {item.role}
                  </p>

                </div>


              </div>



            </motion.div>

          ))}

        </div>




        {/* Trust Statement */}

        <motion.div

        initial={{
          opacity:0,
        }}

        whileInView={{
          opacity:1,
        }}

        viewport={{
          once:true,
        }}

        className="
        mt-16
        rounded-[3rem]
        border
        border-[#d6b36a]/20
        bg-[#0c120e]
        p-10
        text-center
        "

        >

          <h3 className="text-3xl font-black text-white">
            Trusted guidance. Personal attention. Sustainable change.
          </h3>


          <p className="mx-auto mt-4 max-w-2xl text-[#b8c4ba]">
            Our goal is not just a session — it is helping you create a
            healthier relationship with your body and mind.
          </p>


        </motion.div>



      </div>

    </section>
  );
}