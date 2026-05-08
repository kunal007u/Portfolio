export const meta = {
  name: "Krunal Kathiriya",
  title: "Full-Stack Software Engineer | Frontend Specialist | React · Next.js · Node.js",
  tagline: "I engineer production-grade web systems with a focus on performance, scalability, and clean architecture—from pixel-perfect UIs to RESTful APIs.",
  email: "kunalkathiriya29@gmail.com",
  phone: "+1 (773) 681-4743",
  location: "Chicago, USA",
  linkedin: "https://linkedin.com/in/krunal-kathiriya",
  github: "https://github.com/kunal007u",
  resume: "/Krunal_Kathiriya_CV.pdf",
};

export const about = {
  summary:
    "Full-Stack Software Engineer with 2+ years of experience building production-grade web applications. Specialized in React and Next.js frontend architecture with hands-on backend expertise in Node.js, REST API design, and PostgreSQL. Proven track record delivering enterprise-scale systems with measurable performance improvements, scalable API layers, and role-based access control. Currently pursuing MS in Computer Science at DePaul University, Chicago.",
};

export const skills = {
  languages: [
    "JavaScript (ES6+)", "TypeScript", "SQL",
  ],
  frontend: [
    "React.js", "Next.js", "Redux Toolkit", "React Query", "Tailwind CSS", "Material UI", "HTML5", "CSS3",
  ],
  backend: [
    "Node.js", "Express.js", "REST API Design", "Middleware", "Authentication", "RBAC",
  ],
  database: [
    "PostgreSQL", "MongoDB",
  ],
  tools: [
    "AWS S3", "Git", "GitHub", "Vercel", "Render", "cron jobs", "JWT", "OAuth",
  ],
  concepts: [
    "SSR", "SSG", "SEO", "Code Splitting", "Lazy Loading", "Component Architecture", "State Management",
  ],
};

export const experience = [
  {
    company: "PragetX Technology",
    role: "Software Engineer – Full Stack",
    period: "Mar 2023 – Dec 2024",
    location: "Ahmedabad, India",
    highlights: [
      "Engineered full-stack features across multiple production modules using React, Next.js, and Node.js, improving application stability and reducing regression bugs across 5+ modules by establishing consistent patterns and shared utilities.",
      "Boosted SEO performance and organic traffic for the company marketing site by implementing Next.js server-side rendering (SSR), dynamic routing, and Core Web Vitals optimizations, resulting in improved Lighthouse scores and higher search rankings.",
      "Designed and built RESTful APIs with structured routing, request validation middleware, and standardized error handling, establishing clean client-server contracts and accelerating onboarding for new engineers.",
      "Reduced frontend code duplication and redundant API calls by architecting reusable React component libraries and optimizing server state management with React Query, improving maintainability across 5+ application modules.",
    ],
  },
  {
    company: "Ridge Brains Technology",
    role: "Frontend Developer",
    period: "Jan 2023 – Mar 2023",
    location: "Ahmedabad, India",
    highlights: [
      "Implemented interactive, data-driven UI features using React and modern JavaScript (ES6+), replacing static pages and increasing user engagement through improved interactivity and responsiveness.",
      "Standardized frontend component architecture by refactoring ad-hoc UI code into a reusable component library, reducing development time and improving team velocity on subsequent feature work.",
      "Collaborated with designers and senior engineers to translate Figma wireframes into pixel-perfect, accessible, responsive layouts adhering to WCAG standards.",
    ],
  },
];

export const projects = [
  {
    title: "HRMS Platform",
    subtitle: "Human Resource Management System",
    description:
      "Architected and delivered a full-stack Human Resource Management System covering 6+ core modules (payroll, attendance, leave, performance reviews, asset tracking, project management), replacing manual spreadsheet workflows with a unified platform. Designed a normalized relational schema in PostgreSQL with a structured REST API layer, enforcing referential integrity and reducing data inconsistencies.",
    features: [
      "JWT-based authentication with route-level RBAC across 4 distinct roles (Admin, HR, Manager, Employee)",
      "6+ core modules: payroll, attendance, leave, performance reviews, asset tracking, project management",
      "Automated recurring HR workflows using Node.js cron jobs",
      "AWS S3 integration for secure document storage",
      "Responsive dashboard optimized with Redux Toolkit and React Query",
    ],
    challenges:
      "Designed a flexible RBAC system that secures sensitive employee data while accommodating complex role hierarchies. Solved by implementing permission-level enforced access control at the API gateway.",
    stack: ["React", "Node.js", "PostgreSQL", "Redux Toolkit", "React Query", "JWT", "AWS S3"],
    live: "#",
    github: "",
    accent: "from-blue-500/20 to-indigo-500/20",
    accentBorder: "border-blue-500/30",
  },
  {
    title: "PragetX Corporate Website",
    subtitle: "High-Performance SEO-Optimized Marketing Site",
    description:
      "Led end-to-end development of a production-scale corporate website in Next.js, delivering 50+ pages and 100+ reusable components enabling rapid content expansion without engineering intervention. Improved search visibility and page load performance by implementing SSR, dynamic routing, structured metadata, and Core Web Vitals optimizations.",
    features: [
      "Server-side rendering (SSR) for enhanced SEO and instant first paint",
      "Dynamic routing and structured metadata for search engine optimization",
      "Backend-integrated contact and lead capture form system with server-side validation and email delivery",
      "Code splitting and lazy loading for optimized bundle size and Time to Interactive (TTI)",
      "Measurable improvements in organic traffic and search rankings",
    ],
    challenges:
      "Balancing rich interactivity with Core Web Vitals optimization. Implemented smart code splitting and lazy loading strategies while maintaining smooth page transitions without compromising performance metrics.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    live: "#",
    github: "",
    accent: "from-emerald-500/20 to-teal-500/20",
    accentBorder: "border-emerald-500/30",
  },
];

export const certifications = [
  {
    title: "Namaste Node.js",
    issuer: "NamasteDev",
    instructor: "Akshay Saini (ex-Uber)",
    credentialId: "109197F902BE6A3B7CFD699DA6B",
    topics: [
      "Node.js internals: V8 engine, event loop, libuv, non-blocking I/O",
      "Asynchronous programming: callbacks, promises, async/await",
      "Express.js routing, middleware architecture, REST API design",
      "JWT & OAuth authentication, MongoDB with Mongoose",
      "WebSockets, cron jobs, AWS deployment (EC2, Nginx, Amazon SES)",
      "Razorpay payment integration — production-deployed MERN application",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "OAuth", "AWS", "WebSockets"],
    accent: "from-orange-500/20 to-amber-500/20",
    accentBorder: "border-orange-500/30",
    accentText: "text-orange-400",
  },
];

export const education = [
  {
    school: "DePaul University",
    location: "Chicago, IL",
    degree: "Master of Science in Computer Science",
    period: "Jan 2025 – Jan 2027",
  },
  {
    school: "Silver Oak University",
    location: "India",
    degree: "Bachelor of Technology in Information Technology",
    period: "Jun 2020 – Jun 2024",
  },
];
