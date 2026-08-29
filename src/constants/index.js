import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  postgresql,
  prisma,
  git,
  figma,
  docker,
  zod,
  alternative,
  fanshawe,
  banffoasis,
  banffoasisadmin,
  echo,
  devflow,
  teamflow,
  duolingo,
} from "../assets";

export const navLinks = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "experience",
    title: "Work Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Apps",
    icon: web,
  },
  {
    title: "APIs & Databases",
    icon: backend,
  },
  {
    title: "Responsive UI Engineering",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Zod",
    icon: zod,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Alternative Agency",
    icon: alternative,
    iconBg: "#000000",
    date: "Jan 2025 - Present",
    points: [
      "Built a custom CMS for the official Nissan Middle East and Ford ME Dealer platforms, letting regional marketing teams publish content themselves instead of routing every change through developers.",
      "Shipped vehicle product sites for Nissan Dubai, including Patrol Nismo, Kicks, Magnite, and Z Nismo, tuning load times and Core Web Vitals in every market.",
      "Migrated legacy JavaScript codebases to TypeScript, introducing shared types and reusable components that reduced runtime errors and improved maintainability.",
      "Developed internal admin interfaces for client and staff record management, used by the agency team day to day.",
      "Partnered with back-end and DevOps engineers to speed up asset delivery through an AWS S3 and CloudFront CDN architecture.",
    ],
  },
  {
    title: "Web Developer (Co-op)",
    company_name: "Fanshawe College",
    icon: fanshawe,
    iconBg: "#FFFFFF",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Built and maintained internal web applications used by students and staff, owning features end to end from requirements gathering through deployment.",
      "Refactored legacy front-end code into reusable, typed React components, streamlining rendering paths and optimizing assets to improve page load performance.",
      "Improved accessibility across the applications by correcting semantic markup to WCAG guidelines.",
    ],
  },
];


const projects = [ 
  {
    name: "Echo",
    description:
      "AI-powered SaaS support platform that resolves customer queries instantly, escalates when needed, and gives teams a beautiful embeddable widget.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: echo,
    demo_link: "https://echo-web-eight-umber.vercel.app/",
    source_code_link: "https://github.com/Rabinagurung/echo",
  },
  {
    name: "TeamFlow",
    description:
      "Team workspace app with channels, direct messages, and threaded conversations, enhanced with an AI assistant for Q&A, thread summaries, and message polishing. Authentication is powered by BetterAuth, with email/password login, email invitations, email verification, and forgot/reset password flows.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "primsa",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "betterauth",
        color: "green-text-gradient",
      },
    ],
    image: teamflow,
    demo_link: "https://teamflow-pulse.vercel.app/",
    source_code_link: "https://github.com/Rabinagurung/teamflow-copy",
  },
  {
    name: "Dev Overflow",
    description:
      "Stack Overflow-inspired developer community platform where users can ask questions, share answers, discover knowledge, and use AI-powered assistance to improve developer workflows.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: devflow,
    demo_link:"https://devoverflowpro.vercel.app/", 
    source_code_link: "https://github.com/Rabinagurung/Devoverflow",
  },

  {
    name: "The Banff Oasis",
    description:
      "Luxury hotel application built for browsing cabins, managing reservations, and delivering a polished booking experience powered by Supabase.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: banffoasis,
    demo_link: "https://the-banff-oasis.vercel.app/",
    source_code_link: "https://github.com/Rabinagurung/The-Banff-Oasis",
  },
  {
    name: "The Banff Oasis Admin Portal",
    description:
      "Internal admin dashboard for hotel staff to manage cabins, bookings, and guest check-in/check-out, with stats and settings for day-to-day hotel operations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: banffoasisadmin,
    demo_link: "https://banff-oasis-admin.vercel.app/",
    source_code_link: "https://github.com/Rabinagurung/BanffOasis",
  },
  {
    name: "Duolingo Clone",
    description:
      "Gamified language-learning app inspired by Duolingo, featuring interactive lessons, progress tracking, and streaks to keep learners engaged.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "primsa",
        color: "pink-text-gradient",
      },
    ],
    image: duolingo,
    demo_link: "https://duolingoclonep1.vercel.app/",
    source_code_link: "https://github.com/Rabinagurung/Duolingo-clone",
  },
];

export { services, technologies, experiences, projects };
