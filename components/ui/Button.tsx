"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
  download?: boolean;
}

export function Button({ href, children, variant = "primary", external, download }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer select-none";
  const styles = {
    primary: "bg-white text-black hover:bg-white/90 shadow-sm",
    outline: "border border-white/20 text-white/80 hover:border-white/40 hover:text-white hover:bg-white/5",
  };

  const className = `${base} ${styles[variant]}`;

  if (external || download) {
    return (
      <motion.a
        href={href}
        className={className}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
