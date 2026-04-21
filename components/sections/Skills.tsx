"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

const groups = [
  { label: "Frontend", items: skills.frontend, accent: "text-blue-400" },
  { label: "Backend", items: skills.backend, accent: "text-emerald-400" },
  { label: "Database", items: skills.database, accent: "text-purple-400" },
  { label: "Tools & DevOps", items: skills.tools, accent: "text-amber-400" },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading label="Skills" title="What I work with" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groups.map((group) => (
              <motion.div
                key={group.label}
                variants={fadeInUp}
                className="p-5 rounded-xl border border-white/8 bg-white/[0.02]"
              >
                <p className={`text-xs font-semibold tracking-widest uppercase mb-4 ${group.accent}`}>
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} label={item} />
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
