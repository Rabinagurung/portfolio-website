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
  angular,
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
    name: "Angular",
    icon: angular,
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
    title: "Full Stack Developer",
    company_name: "Manulife",
    iconBg: "#FFFFFF",
    date: "Feb 2025 - Present",
    points: [
      "Develop and enhance full-stack insurance applications using React, TypeScript, Node.js, Express.js, and REST APIs, translating business requirements into features that support customer, advisor, and internal user workflows.",
      "Build responsive policy and account-management interfaces with reusable React components and structured state management, improving consistency across 4+ digital user journeys.",
      "Design and integrate Node.js and Express.js backend services with RESTful APIs, implementing request validation, asynchronous processing, and structured error handling.",
      "Integrate OpenAI and Gemini APIs with Node.js services to summarize and enhance user-generated content, delivering AI-assisted features for application users.",
      "Implement database-driven functionality using SQL, PostgreSQL, MongoDB, and Prisma ORM, developing type-safe data-access logic and CRUD operations for policy and account workflows.",
      "Strengthen performance and production reliability by optimizing React rendering, API requests, and database queries, and improving logging, exception handling, and API diagnostics.",
    ],
  },
  {
    title: "Web Developer (Co-op)",
    company_name: "Fanshawe College",
    icon: fanshawe,
    iconBg: "#FFFFFF",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Built and maintained internal web applications using React, TypeScript, Node.js, and REST APIs, supporting students, faculty, and administrative staff from requirements through deployment.",
      "Developed reusable React components and responsive interfaces for academic and administrative workflows, reducing duplicated frontend logic.",
      "Integrated RESTful API endpoints and worked with SQL and MongoDB to retrieve, update, and validate application data behind internal features.",
      "Refactored legacy frontend code into typed React components and improved accessibility with semantic HTML, keyboard navigation, and WCAG-aligned practices.",
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
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Convex",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
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
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
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
      {
        name: "Tailwind",
        color: "blue-text-gradient",
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
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
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
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Next Auth",
        color: "blue-text-gradient",
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
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
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
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "orange-text-gradient",
      },
      {
        name: "Postgresql",
        color: "green-text-gradient",
      },
      {
        name: "Primsa",
        color: "pink-text-gradient",
      },
    ],
    image: duolingo,
    demo_link: "https://duolingoclonep1.vercel.app/",
    source_code_link: "https://github.com/Rabinagurung/Duolingo-clone",
  },
];

export { services, technologies, experiences, projects };
