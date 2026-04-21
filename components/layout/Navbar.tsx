"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { meta } from "@/lib/data";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.8]);

  return (
    <motion.header
      style={{ "--bg-opacity": bgOpacity } as React.CSSProperties}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ borderBottomColor: `rgba(255,255,255,${borderOpacity.get() * 0.08})` }}
        className="border-b border-transparent"
      >
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{ background: `rgba(9,9,11,${bgOpacity.get()})` }}
        />
        <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-1 text-sm font-semibold tracking-tight"
          >
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent transition-all duration-300 group-hover:from-white group-hover:to-white">
              <Image src="/logo.png" alt="Logo" width={60} height={24} className="inline-block" />
            </span>
            <span className="text-white/40 group-hover:text-white transition-colors duration-300">
              .
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={meta.resume}
            download
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-medium border border-white/15 text-white/70 hover:border-white/30 hover:text-white transition-all duration-150"
          >
            Resume
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
