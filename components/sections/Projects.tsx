"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp, scaleIn, viewportConfig } from "@/lib/motion";

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading label="Projects" title="Selected work" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group relative rounded-2xl border ${project.accentBorder} bg-gradient-to-br ${project.accent} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[#09090b]/85 backdrop-blur-sm" />
                <div className="relative p-7 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <p className="text-xs text-white/40 font-mono mb-1.5">{project.subtitle}</p>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/55 leading-relaxed mb-5">{project.description}</p>

                  {/* Features */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">Key Features</p>
                    <ul className="space-y-1.5">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-white/50">
                          <span className="text-white/20 mt-0.5 shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenge */}
                  <div className="mb-5 p-3.5 rounded-lg bg-white/4 border border-white/6">
                    <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-1.5">Engineering challenge</p>
                    <p className="text-xs text-white/50 leading-relaxed">{project.challenges}</p>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tech) => (
                      <Badge key={tech} label={tech} />
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium bg-white text-black hover:bg-white/90 transition-colors"
                    >
                      <ExternalIcon />
                      Live Demo
                    </a>
                    {project.github !== "" ?(

                        <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium border border-white/15 text-white/70 hover:bg-white/5 hover:text-white transition-all"
                        >
                        <GithubIcon />
                        GitHub
                      </a>
                      )
                  : (null)
                    }
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
