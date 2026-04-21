"use client";

import { motion } from "framer-motion";
import { meta } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto px-6 py-32 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={viewportConfig}
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs text-white/50 bg-white/3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.05]"
        >
          {meta.name}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-white/50 font-medium mb-3"
        >
          {meta.title}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-white/35 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {meta.tagline}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href={meta.resume} variant="outline" download>
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/70 transition-colors"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/70 transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={`mailto:${meta.email}`}
            className="text-white/30 hover:text-white/70 transition-colors"
            aria-label="Email"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
