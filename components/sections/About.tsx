"use client";

import { motion } from "framer-motion";
import { about, meta } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, slideInLeft, viewportConfig } from "@/lib/motion";

const stats = [
  { value: "2+", label: "Years in production" },
  { value: "10+", label: "Projects shipped" },
  { value: "97", label: "Lighthouse score" },
];

export function About() {
  return (
    <section id="about" className="py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={slideInLeft}>
              <SectionHeading label="About" title={`Building things\nthat ship.`} />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-white/55 leading-relaxed text-base mb-8"
            >
              {about.summary}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-white tabular-nums">{stat.value}</p>
                  <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4"
          >
            {[
              {
                icon: "⚡",
                title: "Performance-first",
                desc: "I obsess over Core Web Vitals, bundle size, and TTI. Fast UX is a feature.",
              },
              {
                icon: "🏗",
                title: "Architecture clarity",
                desc: "Clean separation of concerns. Components that do one thing. Code that new engineers can read on day one.",
              },
              {
                icon: "🔁",
                title: "Full ownership",
                desc: "From API design to deployment — I don't throw work over the fence. I ship and maintain.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="p-5 rounded-xl border border-white/8 bg-white/2 hover:bg-white/4 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">{card.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-white/90 mb-1">{card.title}</p>
                    <p className="text-sm text-white/45 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
