"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading label="Experience" title="Where I've built things" />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/15 via-white/8 to-transparent hidden md:block" />

            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  variants={fadeInUp}
                  className="relative md:pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full border border-white/30 bg-[#09090b] hidden md:block" />

                  <div className="p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                      <div>
                        <h3 className="text-base font-semibold text-white">{job.role}</h3>
                        <p className="text-sm text-white/50">{job.company} · {job.location}</p>
                      </div>
                      <span className="text-xs text-white/35 font-mono whitespace-nowrap mt-0.5">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {job.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed">
                          <span className="text-white/25 mt-1 shrink-0">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
