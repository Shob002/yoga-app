"use client";

import { motion } from "framer-motion";
import { 
  Video, 
  BookOpen, 
  Users, 
  Heart,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const methods = [
  {
    icon: Video,
    title: "Live 1-on-1 Sessions",
    description: "Connect with certified therapists via HD video for personalized sessions from anywhere in the world.",
    badge: "Personal Care",
    features: ["60-minute sessions", "Real-time feedback", "Personalized approach"],
    color: "bg-[#d6b36a]/10"
  },
  {
    icon: BookOpen,
    title: "Custom Programs",
    description: "Get a personalized therapy plan designed specifically for your unique health conditions and goals.",
    badge: "Online",
    features: ["Customized for you", "Track progress", "Flexible schedule"],
    color: "bg-[#7bae8a]/10"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a supportive community of practitioners and receive ongoing guidance and motivation.",
    badge: "Community",
    features: ["Group sessions", "Peer support", "Expert guidance"],
    color: "bg-[#d6b36a]/10"
  }
];

export default function TherapyMethod() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-full border border-[#e8e8e8] px-4 py-1.5 text-xs font-medium text-[#666666] uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#1a1a1a] md:text-4xl">
            Our Therapy Method
          </h2>
          <p className="mt-4 text-lg text-[#666666]">
            A holistic approach combining ancient wisdom with modern science
          </p>
        </motion.div>

        {/* Methods Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-[#e8e8e8] bg-white p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Badge */}
                <span className="absolute -top-3 left-6 rounded-full border border-[#d6b36a]/20 bg-[#fafafa] px-3 py-1 text-[10px] font-medium text-[#d6b36a] uppercase tracking-wider">
                  {method.badge}
                </span>

                {/* Icon */}
                <div className={`mb-4 inline-flex rounded-xl p-3 ${method.color}`}>
                  <Icon className="h-6 w-6 text-[#d6b36a]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#1a1a1a]">
                  {method.title}
                </h3>
                <p className="mt-2 text-sm text-[#666666] leading-relaxed">
                  {method.description}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#666666]">
                      <CheckCircle className="h-4 w-4 text-[#d6b36a]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/booking"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#d6b36a] transition-all hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-[#d6b36a]/20 bg-[#fafafa] p-10 text-center md:p-16"
        >
          <h3 className="text-2xl font-bold text-[#1a1a1a] md:text-3xl">
            Ready to Start Your Journey?
          </h3>
          <p className="mt-2 text-[#666666]">
            Book your first session and begin your transformation today
          </p>
          <a
            href="/booking"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#333333] hover:-translate-y-0.5"
          >
            Book Assessment
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}