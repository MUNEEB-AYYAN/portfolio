export const personalInfo = {
  name: "Mohammed Muneebuddin",
  title: "Full Stack MERN Developer",
  tagline: "I build fast, scalable web apps that users love — end to end.",
  location: "Hyderabad, India",
  email: "mdmuneebuddin749@gmail.com",
  phone: "+91 7972376785",
  github: "https://github.com/MUNEEB-AYYAN",
  linkedin: "https://linkedin.com/in/mohammed-muneebuddin-ayyan",
  resumeUrl: "#", // replace with actual resume link
  availability: "Open to opportunities",
}

export const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.IO", "Redis"] },
  { category: "Database", items: ["MongoDB", "Mongoose", "Schema Design", "Aggregation Pipelines", "Indexing"] },
  { category: "Cloud & DevOps", items: ["AWS EC2", "AWS S3", "NGINX", "Vercel", "Render", "Git & GitHub"] },
  { category: "Tools", items: ["Postman", "VS Code", "Vite", "Figma", "Cloudinary", "Razorpay API"] },
]

export const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Express", color: "#888888" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Socket.IO", color: "#FFFFFF" },
  { name: "Tailwind", color: "#38BDF8" },
  { name: "Redux", color: "#764ABC" },
  { name: "AWS", color: "#FF9900" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "JWT", color: "#D63AFF" },
  { name: "Redis", color: "#DC382D" },
]

export const projects = [
  {
    id: 1,
    title: "LearnFlow",
    subtitle: "Learning Management System",
    description: "A full-stack LMS where instructors create courses with video lessons, quizzes, and real-time progress tracking. Features role-based dashboards for Admin, Instructor, and Student with Cloudinary-powered video streaming.",
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "Socket.IO", "Cloudinary", "JWT"],
    github: "https://github.com/MUNEEB-AYYAN",
    live: "#",
    highlights: ["3 role-based dashboards", "Real-time notifications", "Video streaming"],
    color: "#3B82F6",
    featured: true,
  },
  {
    id: 2,
    title: "DevCollab",
    subtitle: "Real-Time Code Review Platform",
    description: "A collaborative platform for developers to share code snippets, get peer reviews, and chat in real-time rooms. Uses Redis pub/sub for Socket.IO scaling and supports 500+ concurrent users without dropped events.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Redis", "Express"],
    github: "https://github.com/MUNEEB-AYYAN",
    live: "#",
    highlights: ["500+ concurrent users", "Redis pub/sub scaling", "Real-time chat rooms"],
    color: "#8B5CF6",
    featured: true,
  },
  {
    id: 3,
    title: "ShopNow",
    subtitle: "E-Commerce Platform",
    description: "Production-grade e-commerce with 200+ product catalog, Razorpay payment integration, admin dashboard with analytics, and a load time optimized from 3.2s to 0.9s using lazy loading and MongoDB projection queries.",
    tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Razorpay", "AWS S3"],
    github: "https://github.com/MUNEEB-AYYAN",
    live: "#",
    highlights: ["3.2s → 0.9s load time", "Razorpay payments", "Sales analytics"],
    color: "#10B981",
    featured: true,
  },
  {
    id: 4,
    title: "NikaahConnect",
    subtitle: "Matrimony Platform",
    description: "A comprehensive matrimony web app with profile creation, advanced search filters, real-time chat via Socket.IO, image uploads through Cloudinary, and a full admin management panel for profile moderation.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO", "Cloudinary", "Express"],
    github: "https://github.com/MUNEEB-AYYAN",
    live: "#",
    highlights: ["Real-time messaging", "Cloudinary media", "Admin moderation"],
    color: "#F59E0B",
    featured: false,
  },
]

export const experience = [
  {
    title: "MERN Stack Developer",
    company: "Uptech Software Solutions Pvt. Ltd.",
    period: "Jan 2023 – Present",
    location: "Hyderabad, India",
    type: "Full-time",
    bullets: [
      "Owned end-to-end development of 5+ production web apps serving real users",
      "Built JWT + RBAC auth system across 3 client projects — zero security incidents post-launch",
      "Built shared React component library of 30+ components, cutting delivery time by ~30%",
      "Reduced API response time by ~40% via MongoDB schema redesign and compound indexes",
      "Integrated Socket.IO real-time features supporting 100+ concurrent connections",
      "Managed AWS EC2 + NGINX deployments — maintained 99%+ uptime",
    ],
  },
]

export const education = {
  degree: "B.Tech in Information Technology",
  institution: "Dr. Babasaheb Ambedkar Technological University",
  period: "2019 – 2023",
  location: "Maharashtra, India",
}
