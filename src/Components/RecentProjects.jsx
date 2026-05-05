import { motion } from "motion/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1];

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
];

const ProjectCard = ({ project, index }) => {
  const { title, desc, tags, live, github, accent, id, image } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      whileHover={{
        y: -6,
        borderColor: accent + "50",
        boxShadow: `0 8px 40px ${accent}20`,
      }}
      className="group relative border border-white/10 rounded-2xl overflow-hidden h-full"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }}
      />

      {/* Image */}
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

      <div className="p-5">
        <div className="mb-3">
          <span
            className="text-xs font-mono font-medium px-3 py-1 rounded-full border"
            style={{ color: accent, borderColor: accent + "30", background: accent + "10" }}
          >
            {id}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
          {title}
        </h3>

        <p className="text-white/45 text-sm leading-relaxed mb-4">{desc}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl hover:opacity-85 transition-opacity duration-200"
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
    <section className="bg-[#0B0F14] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-[#00d4ff] text-xs tracking-[0.2em] uppercase font-medium mb-3"
          >
            My Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="text-4xl md:text-5xl font-extrabold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Latest Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/sumon3235"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 text-white/50 hover:text-white hover:border-white/30 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
          >
            <FiGithub size={15} />
            View All on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;