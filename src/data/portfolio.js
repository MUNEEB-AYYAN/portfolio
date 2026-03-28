// src/config/data.js

export const personalInfo = {
  name: "Mohammed Muneebuddin",
  title: "Full Stack MERN Developer",
  tagline: "I build scalable web applications with clean architecture and real-time features.",
  location: "Hyderabad, India",
  email: "mdmuneebuddin749@gmail.com",
  phone: "+91 7972376785",
  github: "https://github.com/MUNEEB-AYYAN",
  linkedin: "https://linkedin.com/in/mohammed-muneebuddin-ayyan",
  resumeUrl: "https://flowcv.com/resume/2w91up5lvt00",
  availability: "Open to opportunities",
};

// Keep it simple and believable
export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Redux Toolkit", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose", "Schema Design"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Vite"],
  },
];

// Remove unnecessary visual noise
export const techStack = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "TypeScript",
  "Tailwind",
  "Redux",
];

// Focus on REAL value, not buzzwords
export const projects = [
  {
    id: 1,
    title: "LearnFlow",
    subtitle: "Learning Management System",
    description:
      "A full-stack LMS where instructors can create and manage courses, and students can enroll, watch lessons, and track progress. Includes authentication and role-based dashboards.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/MUNEEB-AYYAN",
    live: "", // add after deployment
    highlights: [
      "Role-based authentication (Admin, Instructor, Student)",
      "Course and lesson management",
      "Progress tracking system",
    ],
  },
  {
    id: 2,
    title: "DevCollab",
    subtitle: "Real-Time Collaboration App",
    description:
      "A real-time collaboration platform where users can join rooms and communicate instantly using WebSockets.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
    github: "https://github.com/MUNEEB-AYYAN",
    live: "",
    highlights: [
      "Real-time messaging with Socket.IO",
      "Room-based communication",
      "Persistent chat storage",
    ],
  },
  {
    id: 3,
    title: "ShopNow",
    subtitle: "E-Commerce Application",
    description:
      "An e-commerce web app with product listing, cart system, and secure checkout integration.",
    tech: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
    github: "https://github.com/MUNEEB-AYYAN",
    live: "",
    highlights: [
      "Cart and order management",
      "Authentication system",
      "Responsive UI",
    ],
  },
  {
    id: 4,
    title: "NikaahConnect",
    subtitle: "Matrimony Platform",
    description:
      "A matrimony platform where users can create profiles, search matches, and communicate in real time.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/MUNEEB-AYYAN",
    live: "",
    highlights: [
      "Profile creation and search filters",
      "Real-time chat system",
      "User authentication",
    ],
  },
];

// Remove unverifiable claims
export const experience = [
  {
    title: "MERN Stack Developer",
    company: "Self-Projects / Freelance",
    period: "2023 – Present",
    location: "India",
    type: "Full-time",
    bullets: [
      "Built multiple full-stack applications using the MERN stack",
      "Implemented authentication and protected routes using JWT",
      "Designed RESTful APIs and optimized database queries",
      "Developed responsive UI using React and Tailwind CSS",
    ],
  },
];

export const education = {
  degree: "B.Tech in Information Technology",
  institution: "Dr. Babasaheb Ambedkar Technological University",
  period: "2019 – 2023",
  location: "Maharashtra, India",
};