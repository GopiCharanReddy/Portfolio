import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Charan",
  initials: "GC",
  url: "https://dillion.io",
  location: "Bangalore, India",
  locationLink: "",
  description:
    "Software Engineer. I love building things and exploring more about tech. Very active on twitter.",
  summary:
    "I'm a 19 year undergraduate B.E student and a full stack developer with a focus on Ui design who loves turning ideas into real, working products. I'm flexible working with any tech stack, I'm currently working with React, Tanstack, Typescript, Express.js, Bun & Golang.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Tanstack",
    "Tailwind",
    "Zustand",
    "Recoil",
    "aceternityUI",
    "Motion",
    "Typescript",
    "Node.js",
    "Express.js",
    "Mongoose",
    "MongoDB",
    "Bun",
    "Golang",
    "Python",
    "C",
    "Linux",
    "Postman",
    "Git",
    "Github",
    "Vercel",
    "Render",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GopiCharanReddy",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/v-gopi-charan-reddy/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Spikey_twt",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:gopicharanvgcr@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "GSSOC'25",
      href: "https://gssoc.girlscript.tech/",
      badges: [],
      location: "Remote",
      title: "Contributor",
      logoUrl: "/GSSOC.jpeg",
      start: "July 2025",
      end: "September 2025",
      description:
        "Worked on building an interactive full-stack web application for browsing, listing, and managing a variety of food items. Also worked on an all-in-onetravel platform that enables users to book tickets, rent vehicles, reserve hotels & much more. Raised and successfully Merged multiple PR's during the event.",
    },
  ],
  education: [
    {
      school: "Jyothy Institute Of Technology",
      href: "https://jyothyit.ac.in/",
      degree: "B.E in Electronics & Comm. Enginnering",
      logoUrl: "/JIT.jpeg",
      start: "2023",
      end: "2027",
    },
    {
      school: "Narayana e-Techno School",
      href: "https://www.narayanaschools.in/",
      degree: "11th & 12th Grade",
      logoUrl: "/Narayana.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Ziplink",
      href: "https://ziplinkk.vercel.app/",
      dates: "",
      active: true,
      description:
        "A modern URL shortening service built with React and Node.js that allows users to create shorter, more manageable links.",
      technologies: [
        "React",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Node.js",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://ziplinkk.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://dms.licdn.com/playlist/vid/v2/D4D05AQF9gpyKr6BgaA/mp4-720p-30fp-crf28/B4DZjBwvGWH0B0-/0/1755597479642?e=1758038400&v=beta&t=7E1ML4MthGsbbEcwfdv-sJyRZeBThLEBtSBr3cAgC3k",
    },
    {
      title: "Brainly",
      href: "",
      dates: "",
      active: true,
      description:
        "Designed and developed a Second Brain app where users can store links and view it in a embedded format.",
      technologies: [
        "React",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Node.js",
        "Express.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/GopiCharanReddy/Brainly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Brainly.mp4",
    },
    {
      title: "Player selection ML-model",
      href: "https://github.com/GopiCharanReddy/Dream-11-Gameathon-2.0",
      dates: "",
      active: true,
      description:
        "An AI-powered Dream11 team selection system that uses historical player data and machine learning to predict player performance and optimize team selection.",
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Excel Processing",
        "XGBoost",
        "RandomForest",
        "Gradient Boosting",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/GopiCharanReddy/Dream-11-Gameathon-2.0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fifsgameathon.jpeg",
      video: "",
    },
    {
      title: "Start Page",
      href: "https://startuppage-tawny.vercel.app/",
      dates: "",
      active: true,
      description:
        "A simple startpage, iterating over multiple images from animes with a focus on an interactive as beautiful design which can be used as your default startup page using the Override Chrome's New Tab extension.",
      technologies: [
        "Javascript",
        "React",
        "TailwindCSS",
        "Cloudinary",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://startuppage-tawny.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/startpage.mp4",
    },
  ],
  hackathons: [
    {
      title: "FIFS-Gameathon 2.0",
      dates: "",
      location: "National Level Hackathon, India",
      description:
        "Built an AI-powered Dream11 team selection system that uses historical player data and machine learning to predict player performance and optimize team selection.",
      image:
        "/Dream11.png",
      mlh: "",
      links: [],
    },
    {
      title: "Cepheus 2025",
      dates: "",
      location: "Atria Institute of Technology, India",
      description:
        "Built an Ai-powered comprehensive period, ovulation, and pregnancy tracker that helps users monitor their reproductive health by tracking menstrual cycles, symptoms, and fertility windows from MenArche to Menopause.",
      image:
        "/cepheus.jpeg",
      mlh: "",
      links: [],
    },
    {
      title: "Dese Line Follower Contest",
      dates: "",
      location: "IISC Bangalore, India",
      description:
        "Built a self driving robot that automatically follows a visual black line on a surface and avoids obstacles in it's path.",
      image:
        "/iisc.jpeg",
      mlh: "",
      links: [],
    },
    {
      title: "Go for GoFr",
      dates: "",
      location: "Bangalore, India",
      description:
        "Built MuscleeMate, an AI-powered nutrition tracking and meal planning platform designed to provide users with personalized dietary recommendations.",
      image:
        "/gofr.png",
      mlh: "",
      links: [],
    },
    {
      title: "Tech Trivia 2024",
      dates: "",
      location: "Hassan, India",
      description:
        "Built a platform designed to tackle the significant issues of food waste and hunger. We connect surplus food from donors, such as hotels, restaurants, and individuals, directly to NGOs, shelters, and communities in need.",
      image:
        "/hassan.jpeg",
      mlh: "",
      links: [],
    },
  ],
} as const;
