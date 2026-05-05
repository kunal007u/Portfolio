"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, slideInLeft, viewportConfig } from "@/lib/motion";

export function Education() {
  return (
    <section id="education" className="py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={slideInLeft}>
            <SectionHeading label="Education" title="Learning & Growth" />
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                variants={fadeInUp}
                className="p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                    <p className="text-sm text-white/50">{edu.school} · {edu.location}</p>
                  </div>
                  <span className="text-xs text-white/35 font-mono whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
