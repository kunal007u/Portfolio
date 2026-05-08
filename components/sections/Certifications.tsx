"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, slideInLeft, viewportConfig } from "@/lib/motion";

export function Certifications() {
  return (
    <section id="certifications" className="py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={slideInLeft}>
            <SectionHeading label="Certifications" title="Credentials & Courses" />
          </motion.div>

          <div className="space-y-8">
            {certifications.map((cert) => (
              <motion.div
                key={cert.credentialId}
                variants={fadeInUp}
                className={`p-6 rounded-xl border ${cert.accentBorder} bg-gradient-to-br ${cert.accent} hover:bg-white/[0.04] transition-colors duration-200`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-4">
                    {/* Award icon */}
                    <div className={`mt-0.5 shrink-0 w-10 h-10 rounded-lg border ${cert.accentBorder} bg-white/[0.04] flex items-center justify-center`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cert.accentText}>
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{cert.title}</h3>
                      <p className="text-sm text-white/50">{cert.issuer} · {cert.instructor}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-md border ${cert.accentBorder} ${cert.accentText} bg-white/[0.03] whitespace-nowrap self-start`}>
                    ID: {cert.credentialId}
                  </span>
                </div>

                {/* Topics */}
                <ul className="space-y-2.5 mb-5">
                  {cert.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed">
                      <span className="text-white/25 mt-1 shrink-0">→</span>
                      {topic}
                    </li>
                  ))}
                </ul>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2">
                  {cert.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2.5 py-1 rounded-md border ${cert.accentBorder} ${cert.accentText} bg-white/[0.03]`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
