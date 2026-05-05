import { motion } from "motion/react";
import { FiExternalLink, FiGithub, FiArrowDown } from "react-icons/fi";

const projects = [
  {
    id: "01",
    title: "SoloSphere",
    desc: "A full-stack freelance job marketplace where users can post, manage, and bid on jobs across multiple categories with secure authentication.",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Express"],
    live: "https://job-siker.web.app/",
    github: "https://github.com/sumon3235/SoloSphere",
    image: "/images/solosphare.png",
    accent: "#00d4ff",
  },
  {
    id: "02",
    title: "StudyBuddy",
    desc: "An online group study platform where users create assignments, submit them, and grade each other's work with JWT-secured private routes.",
    tags: ["React", "MongoDB", "Firebase", "JWT", "TanStack Query"],
    live: "https://studybuddy-173df.web.app/",
    github: "https://github.com/sumon3235/StudyBuddy--Client",
    image: "/images/studybuddy.png",
    accent: "#a259ff",
  },
  {
    id: "03",
    title: "Job Portal",
    desc: "A modern job management app with dynamic search, salary filter, JWT security, and Axios interceptors for seamless API communication.",
    tags: ["React", "Firebase", "JWT", "Tailwind", "Axios"],
    live: "https://job-portal-11371.web.app/",
    github: "https://github.com/sumon3235/Job-Portal",
    image: "/images/jobportal.png",
    accent: "#ff6b6b",
  },
  {
    id: "04",
    title: "Bistro Boss Restaurant",
    desc: "A full-featured restaurant web app with menu browsing, cart system, online ordering, and secure payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Express"],
    live: "https://bistrobossretaurent.web.app/",
    github: "https://github.com/sumon3235/Bistro-Boss-Restaurant-Client",
    image: "/images/restaurrant.png",
    accent: "#FFA000",
  },
  {
    id: "05",
    title: "Coffee Shop",
    desc: "A stylish coffee shop app with detailed coffee listings, nutrition info, ingredients, and a favorites system using localStorage.",
    tags: ["React", "Tailwind", "LocalStorage"],
    live: "https://venerable-smakager-f70c48.netlify.app/",
    github: "https://github.com/sumon3235/Coffe-Shop-Project",
    image: "/images/coffee.png",
    accent: "#c8860a",
  },
];

const stats = [
  { num: "5+", label: "Projects Built" },
  { num: "10+", label: "Technologies" },
  { num: "∞", label: "Lines of Code" },
];

const ProjectCard = ({ project }) => {
  const { title, desc, tags, live, github, accent, id, image } = project;

  return (
    <motion.div
      className="group relative border border-white/10 rounded-2xl overflow-hidden cursor-default h-full"
      style={{ background: "rgba(255,255,255,0.03)" }}
      whileHover={{
        y: -6,
        borderColor: accent + "50",
        boxShadow: `0 8px 40px ${accent}20`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Hover top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }}
      />

      {/* Project image */}
      <div className="relative overflow-hidden border-b border-white/10 h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          style={{ filter: "brightness(0.85) saturate(0.9)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 50%, #0B0F14 100%)" }}
        />
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="mb-3">
          <span
            className="text-xs font-mono font-medium px-3 py-1 rounded-full border"
            style={{ color: accent, borderColor: accent + "30", background: accent + "10" }}
          >
            {id}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-4">{desc}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl transition-opacity duration-200 hover:opacity-85"
            style={{ background: accent, color: "#0B0F14" }}
          >
            <FiExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <FiGithub size={13} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="bg-[#0B0F14] min-h-screen">

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(100,50,255,0.2) 0%, transparent 70%)" }}
          />
        </div>

        {/* Hero content — staggered */}
        <div className="flex flex-col items-center">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs tracking-[0.3em] text-white/40 uppercase mb-6"
          >
            // Projects
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6"
          >
            <span className="text-white">My </span>
            <span style={{ background: "linear-gradient(to right, #00d4ff, #a259ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12"
          >
            These projects are milestones in my journey as a developer —
            each one a new challenge conquered, a new skill mastered.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-8 sm:gap-12 mb-12"
          >
            {stats.map(({ num, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: "#a259ff" }}>
                  {num}
                </p>
                <p className="text-white/35 text-xs">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-white/25 text-xs tracking-[0.2em] uppercase">Explore</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiArrowDown size={18} className="text-white/30" />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ─── Projects Grid ─── */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-3 pt-6">// Handcrafted Work</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              <span className="text-white">Built with </span>
              <span style={{ background: "linear-gradient(to right, #00d4ff, #a259ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>passion</span>
              <span className="text-white"> & </span>
              <span style={{ background: "linear-gradient(to right, #a259ff, #00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>purpose</span>
            </h2>
          </motion.div>

          {/* Cards — একটার পর একটা আসবে */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Projects;
