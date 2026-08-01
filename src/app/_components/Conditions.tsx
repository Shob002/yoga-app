"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const conditions = [
  {
    title: "Musculoskeletal Disorders",
    description: "Back pain, neck pain, arthritis, frozen shoulder, sciatica, and postural issues.",
    href: "/conditions/musculoskeletal",
    large: true,
  },
  {
    title: "Neurological Disorders",
    description: "Stroke recovery, Parkinson's, multiple sclerosis, and neuropathy support.",
    href: "/conditions/neurological",
    large: false,
  },
  {
    title: "Cardiovascular Disorders",
    description: "Hypertension, heart disease recovery, and circulation management.",
    href: "/conditions/cardiovascular",
    large: false,
  },
  {
    title: "Respiratory Disorders",
    description: "Asthma, COPD, bronchitis, and breathing difficulties.",
    href: "/conditions/respiratory",
    large: false,
  },
  {
    title: "Endocrine & Metabolic",
    description: "Diabetes, thyroid, PCOS, and metabolic syndrome.",
    href: "/conditions/endocrine",
    large: false,
  },
  {
    title: "Mental Health & Stress",
    description: "Anxiety, depression, burnout, and chronic stress.",
    href: "/conditions/mental-health",
    large: true,
  },
  {
    title: "Women's Health",
    description: "Menstrual health, menopause, prenatal and postnatal care.",
    href: "/conditions/womens-health",
    large: false,
  },
  {
    title: "Gastrointestinal Disorders",
    description: "IBS, acidity, constipation, and digestive health.",
    href: "/conditions/gastrointestinal",
    large: false,
  },
  {
    title: "Cancer Support & Palliative Care",
    description: "Supportive therapy during and after cancer treatment.",
    href: "/conditions/cancer-support",
    large: false,
  },
  {
    title: "Geriatric & Lifestyle",
    description: "Age-related mobility, osteoporosis, and balance concerns.",
    href: "/conditions/geriatric",
    large: false,
  },
];

export default function Conditions() {
  return (
    <section className="bg-[#FAF8F5] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">
            What We Treat
          </p>
          <h2 className="max-w-[720px] text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A] lg:text-[64px]">
            Conditions we support through yoga therapy.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={item.large ? "sm:col-span-2" : ""}
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col justify-between rounded-lg border border-[#E0DCD6] bg-white p-7 transition-all duration-300 hover:border-[#1F3528] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:p-8"
              >
                <div>
                  <h3 className="text-[20px] font-semibold leading-tight text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#1F3528] lg:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-[#555555] lg:text-[15px]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-[#1F3528] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-[#E0DCD6] pt-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-[22px] font-semibold text-[#1A1A1A]">
                Not sure where to start?
              </h3>
              <p className="mt-1 text-[15px] text-[#555555]">
                Book a consultation and we will assess your needs.
              </p>
            </div>
            <Link
              href="/booking"
              className="inline-flex h-[48px] items-center gap-2 rounded-full bg-[#1A1A1A] px-7 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#333333]"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-8 text-[12px] leading-[1.7] text-[#8A8480]">
            Yoga therapy is a complementary approach and does not replace medical diagnosis, emergency care, medication, or treatment prescribed by your qualified healthcare professional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}