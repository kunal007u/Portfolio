export const meta = {
  name: "Krunal Kathiriya",
  title: "Full-Stack Software Engineer",
  tagline: "I build fast, scalable web systems — from pixel-perfect UIs to production-grade APIs.",
  email: "kuunalrkathiriya29@gmail.com",
  linkedin: "https://linkedin.com/in/krunalkathiriya",
  github: "https://github.com/kunal007u",
  resume: "/Krunal_Kathiriya_CV.pdf",
};

export const about = {
  summary:
    "2+ years building production web systems at growth-stage companies. I work across the full stack — React and Next.js on the front, Node.js and REST APIs on the back, with a strong bias toward clean architecture, performance, and shipping things that actually work at scale. I care about code quality, developer experience, and products that feel polished.",
};

export const skills = {
  frontend: [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Framer Motion", "Redux Toolkit", "HTML5 / CSS3",
  ],
  backend: [
    "Node.js", "Express.js", "REST APIs",
    "JWT Auth", "Multer", "Nodemailer",
  ],
  database: [
    "MongoDB", "Mongoose", "MySQL",
    "Firebase", "Supabase",
  ],
  tools: [
    "Git / GitHub", "Vercel", "Docker (basics)",
    "Postman", "VS Code", "Figma",
  ],
};

export const experience = [
  {
    company: "PragetX Technology",
    role: "Full-Stack Developer",
    period: "Jan 2023 – Present",
    location: "Surat, India",
    highlights: [
      "Led frontend architecture for an HRMS platform serving 50+ concurrent users — reduced page load time by 40% through code splitting and lazy loading.",
      "Designed and built a Node.js REST API with JWT-based role authentication, handling 15+ distinct permission levels across employee, manager, and admin flows.",
      "Rebuilt the company's corporate website from scratch using Next.js, improving Lighthouse score from 62 to 97 and cutting bounce rate by 30%.",
      "Introduced reusable component libraries and enforced TypeScript strict mode — reduced bug reports by 35% over two release cycles.",
    ],
  },
  {
    company: "Ridge Brains",
    role: "Frontend Developer Intern",
    period: "Aug 2022 – Dec 2022",
    location: "Remote",
    highlights: [
      "Shipped 8 React UI components to production, used across 3 client projects within 2 months.",
      "Integrated third-party REST APIs and implemented real-time data fetching with optimistic UI patterns — eliminating visible loading states for 90% of common user actions.",
      "Collaborated with senior engineers on code reviews, improving overall pull request quality and team coding standards.",
    ],
  },
];

export const projects = [
  {
    title: "HRMS Platform",
    subtitle: "Human Resource Management System",
    description:
      "End-to-end HR platform built for real production use — not a CRUD demo. Handles attendance, payroll, leave management, and role-based access control for organizations with 10–500 employees. Built with a clear separation between UI, business logic, and data layers.",
    features: [
      "JWT auth with 15+ role-based permission levels",
      "Real-time attendance tracking with dynamic reporting",
      "Payroll calculation engine with configurable deduction rules",
      "Bulk CSV import/export for employee data",
      "Responsive dashboard with chart visualizations",
    ],
    challenges:
      "Designed a permission model flexible enough for org hierarchies without becoming a maintenance nightmare. Solved by encoding permissions as bitfields in MongoDB and decoding at the API gateway layer.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux Toolkit"],
    live: "https://hrms-mono-frontend.onrender.com/",
    github: "",
    accent: "from-blue-500/20 to-indigo-500/20",
    accentBorder: "border-blue-500/30",
  },
  {
    title: "PragetX Corporate Website",
    subtitle: "High-Performance Marketing Site",
    description:
      "Rebuilt a legacy WordPress site as a Next.js application — with animated sections, server-side rendering, and a custom CMS-free content pipeline. The goal: full creative control, maximum performance, zero third-party CMS dependency.",
    features: [
      "Server-side rendering for instant first paint",
      "Framer Motion page transitions and scroll animations",
      "Contact form with Nodemailer + rate limiting",
      "Dynamic SEO meta tags per route",
      "Lighthouse score: 97 Performance / 100 Accessibility",
    ],
    challenges:
      "Getting smooth animations without sacrificing Core Web Vitals. Used layout animations carefully with `will-change` hints and deferred non-critical JS — kept CLS at zero.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Nodemailer", "Vercel"],
    live: "https://hrms-mono-frontend.onrender.com/",
    github: "",
    accent: "from-emerald-500/20 to-teal-500/20",
    accentBorder: "border-emerald-500/30",
  },
];
