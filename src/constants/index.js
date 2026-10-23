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
  python,
  fastapi,
  pytest,
  jest,
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
    name: "Python",
    icon: python,
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
    name: "FastAPI",
    icon: fastapi,
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
    name: "Pytest",
    icon: pytest,
  },
  {
    name: "Jest",
    icon: jest,
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
    title: "Full Stack Engineer",
    company_name: "Manulife",
    iconBg: "#FFFFFF",
    date: "Feb 2025 - Present",
    points: [
      "Improved frontend performance by 30% by building reusable React.js components, optimizing rendering behavior, and refining responsive CSS layouts.",
      "Cut page load time by 20% by streamlining JavaScript execution, reducing unnecessary component re-renders, and improving API data-fetching patterns.",
      "Reduced API integration defects by 25% by building Python REST API functionality, validating request payloads, and standardizing error handling.",
      "Raised automated test coverage from 55% to 80% by writing Python unit tests with Pytest and frontend tests with Jest and React Testing Library.",
      "Build responsive interfaces in React.js, TypeScript, HTML5, and CSS3, connecting them to backend services and managing application state.",
      "Partner with developers and QA engineers on code reviews, debugging, functional testing, and Agile delivery to keep application quality high.",
    ],
  },
  {
    title: "Web Developer (Co-op)",
    company_name: "Fanshawe College",
    icon: fanshawe,
    iconBg: "#FFFFFF",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Built 12 reusable UI components in React.js, TypeScript, HTML5, and CSS3 to bring consistency to application screens.",
      "Reduced manual form-validation effort by 25% by adding client-side validation, shared input-handling logic, and clear error messages.",
      "Integrated 8 REST API endpoints, processing JSON responses and handling loading and error states in the connected frontend components.",
      "Supported backend logic in Python, including input validation, defect troubleshooting, and database interactions.",
      "Ran cross-browser tests and documented defects, managing source code with Git and GitHub alongside the project team.",
    ],
  },
  {
    title: "Software Engineer / Full Stack Developer",
    company_name: "Wipro",
    iconBg: "#FFFFFF",
    date: "Apr 2022 - Jul 2023",
    points: [
      "Improved frontend maintainability by 30% by building reusable React.js components and organizing JavaScript into modular structures.",
      "Reduced API response-processing errors by 25% with Python-based validation, exception handling, and consistent REST response structures.",
      "Cut regression-testing time by 35% by creating automated test cases and standardizing repeatable test scenarios, and supported defect verification.",
      "Developed React.js, JavaScript, HTML5, and CSS3 features for interactive workflows and responsive layouts.",
      "Wrote SQL queries and implemented CRUD operations to retrieve, update, and validate data in relational databases.",
      "Investigated defects through debugging and regression testing, collaborating with development and QA teams under established SDLC practices and Git workflows.",
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
