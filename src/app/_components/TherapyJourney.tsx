"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  User, 
  Heart, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
  Video,
  FileText,
  Users
} from "lucide-react";

const journeySteps = [
  {
    icon: Calendar,
    title: "Book Your Session",
    description: "Choose a time that works for you and book your first session with a certified therapist.",
  },
  {
    icon: FileText,
    title: "Health Assessment",
    description: "Complete a detailed health assessment to help us understand your unique needs and goals.",
  },
  {
    icon: Video,
    title: "Live Therapy Session",
    description: "Connect with your therapist via HD video for a personalized 1-on-1 session.",
  },
  {
    icon: Heart,
    title: "Ongoing Support",
    description: "Receive personalized guidance, track your progress, and adjust your program as you heal.",
  },
];

const stats = [
  { number: "94%", label: "Report Improvement" },
  { number: "2,500+", label: "Happy Clients" },
  { number: "4.9/5", label: "Average Rating" },
];

export default function TherapyJourney() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full border border-[#e8e8e8] px-4 py-1.5 text-xs font-medium text-[#666666] uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#1a1a1a] md:text-4xl">
              Your Journey to Wellness
            </h2>
            <p className="mt-4 text-lg text-[#666666]">
              Four simple steps to start your healing journey with expert guidance
            </p>
          </motion.div>
        </div>

        {/* Journey Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#d6b36a] text-sm font-bold text-white">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="rounded-xl border border-[#e8e8e8] bg-white p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-4 inline-flex rounded-xl bg-[#fafafa] p-3">
                    <Icon className="h-6 w-6 text-[#d6b36a]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 h-0.5 w-8 bg-[#e8e8e8]">
                    <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-[#e8e8e8]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border border-[#e8e8e8] bg-[#fafafa] p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#1a1a1a]">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm text-[#666666]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#333333] hover:-translate-y-0.5"
          >
            Start Your Journey
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}