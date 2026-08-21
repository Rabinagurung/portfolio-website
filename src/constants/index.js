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
  fanshawe,
  freelance,
  urjalab,
  wildoasis,
  wildoasisadmin,
  echo,
  devflow,
  teamflow,
  duolingo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    title: "Full stack Developer Co-op",
    company_name: "Fanshawe College",
    icon: fanshawe,
    iconBg: "#FFFFFF",
    date: "Sept 2024 - Jan 2025",
    points: [
      "Developed and maintained responsive full-stack web applications using React.js and modern JavaScript tooling.",
      "Collaborated with designers, product stakeholders, and developers to translate requirements into reliable, user-focused features.",
      "Improved interface quality across screen sizes by implementing responsive layouts and cross-browser compatibility fixes.",
      "Participated in code reviews, debugging sessions, and iterative releases to strengthen code quality and team delivery.",
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#FFFFFF",
    date: "Dec 2023 - Oct 2024",
    points: [
      "Built custom web and mobile solutions for clients using React, React Native, Kotlin, and iOS development workflows.",
      "Converted client ideas into scoped technical plans, interactive interfaces, and production-ready application features.",
      "Delivered reusable components, responsive layouts, and maintainable code tailored to each project’s goals and timeline.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Urja Lab",
    icon: urjalab,
    iconBg: "#FFFFFF",
    date: "Sep 2021 - Dec 2021",
    points: [
      "Developed and enhanced responsive UI components using HTML, CSS, and JavaScript.",
      "Worked with designers and developers to refine user flows, improve usability, and maintain a consistent interface.",
      "Maintained and improved PHP-based server functionality, supporting more reliable application behavior.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

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
    source_code_link: "https://github.com/Rabinagurung/jsmasterypro_devflow",
  },

  {
    name: "The Wild Oasis",
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
    image: wildoasis,
    demo_link: "https://the-wild-oasis-five-dusky.vercel.app/",
    source_code_link: "https://github.com/Rabinagurung/The-Wild-Oasis",
  },
  {
    name: "The Wild Oasis Admin Portal",
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
    image: wildoasisadmin,
    demo_link: "https://wild-oasis-alpha-one.vercel.app",
    source_code_link: "https://github.com/Rabinagurung/WildOasis",
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

export { services, technologies, experiences, testimonials, projects };
