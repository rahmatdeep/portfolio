import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiPostman,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiNginx,
  SiRedis,
  SiApachekafka,
  SiSocketdotio,
  SiWebrtc,
  SiTurborepo,
  SiZod,
  SiPm2,
} from "react-icons/si";

export const content = {
  personal: {
    name: "Rahmatdeep Singh Mavi",
    title: "Full-Stack Developer",
    bio: "Self taught full-stack developer, always trying to live on the bleeding edge of technology.",
    email: "rahmatdeep@gmail.com",
    phone: "7777880055",
    github: "https://github.com/rahmatdeep",
    twitter: "https://x.com/RahmatdeepSingh",
    resume:
      "https://drive.google.com/file/d/15Pfhp8PG6Ja6PM10YgfuxoIXNm_k44yz/view?usp=sharing",
  },

  skills: {
    Languages: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ],
    Frontend: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    Backend: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
    Tools: [
      { name: "Docker", icon: SiDocker },
      { name: "TurboRepo", icon: SiTurborepo },
      { name: "Postman", icon: SiPostman },
      { name: "Zod", icon: SiZod },
    ],
    Database: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
    Cloud: [
      { name: "PM2", icon: SiPm2 },
      { name: "Nginx", icon: SiNginx },
    ],
    Tech: [
      { name: "WebSocket", icon: SiSocketdotio },
      { name: "WebRTC", icon: SiWebrtc },
      { name: "Redis", icon: SiRedis },
      { name: "Kafka", icon: SiApachekafka },
    ],
  },

  projects: [
    {
      title: "r8r",
      tagline: "Open-source workflow automation",
      description:
        "Drag-and-drop builder connecting triggers (Webhooks/Forms) with actions (Email, Gmail, Telegram, Gemini API, Solana API). Features dynamic data mapping, Kafka job queuing, and secure API key storage in a scalable monorepo architecture.",
      tech: [
        "Next.js",
        "TypeScript",
        "React Flow",
        "Kafka",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Turborepo",
      ],
      liveUrl: "https://r8r.rahmatdeep.com",
      githubUrl: "https://github.com/rahmatdeep/r8r",
    },
    {
      title: "Drawr",
      tagline: "Real-time collaborative whiteboard",
      description:
        "Multi-user drawing app with WebSocket sync, WebRTC audio calls, Google OAuth, NextAuth, guest mode, pan/zoom, undo/redo, canvas export, and Redis queues for async backend communication.",
      tech: [
        "Next.js",
        "TypeScript",
        "WebSockets",
        "WebRTC",
        "PostgreSQL",
        "Prisma",
        "Turborepo",
        "Zod",
      ],
      liveUrl: "https://drawr.rahmatdeep.com",
      githubUrl: "https://github.com/rahmatdeep/Drawr",
    },
    {
      title: "Secure Browser",
      tagline: "Containerized safe browsing solution",
      description:
        "Docker-based isolated browser sessions with VNC remote access. Each session runs securely in a backend container, completely isolated from client browsers. Features hardened security with CORS, Helmet, and rate limiting.",
      tech: [
        "Next.js",
        "TypeScript",
        "Docker",
        "noVNC",
        "Express.js",
        "PostgreSQL",
        "Prisma",
      ],
      liveUrl: "https://secure-browser.rahmatdeep.com",
      githubUrl: "https://github.com/rahmatdeep/secure-browser",
    },
  ],
};
