import { motion } from "motion/react";
import {
  SiReact, SiJavascript, SiTailwindcss, SiFramer,
  SiFirebase, SiVite, SiHtml5,
  SiReactrouter, SiNodedotjs, SiMongodb, SiGit,
  SiFigma, SiExpress, SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const ease = [0.22, 1, 0.36, 1];

const techs1 = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: SiFramer, name: "Framer", color: "#FF4D8D" },
  { icon: SiFirebase, name: "Firebase", color: "#FFA000" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: SiHtml5, name: "HTML", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
  { icon: RiTailwindCssFill, name: "DaisyUI", color: "#FF69B4" },
  { icon: SiReactrouter, name: "React Router", color: "#CA4245" },
];

const techs2 = [
  { icon: SiNodedotjs, name: "Node.js", color: "#68A063" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiExpress, name: "Express", color: "#aaaaaa" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: VscVscode, name: "VS Code", color: "#007ACC" },
  { icon: SiFigma, name: "Figma", color: "#A259FF" },
  { icon: TbApi, name: "REST API", color: "#00d4ff" },
  { icon: SiVercel, name: "Vercel", color: "#ffffff" },
];

const TechCard = ({ icon: Icon, name, color }) => (
  <motion.div
    className="flex items-center gap-2.5 border border-white/10 rounded-2xl px-4 py-2.5 whitespace-nowrap cursor-default"
    style={{ background: "rgba(255,255,255,0.04)" }}
    whileHover={{
      borderColor: color + "80",
      backgroundColor: color + "12",
      boxShadow: `0 0 18px ${color}35`,
    }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
  >
    <Icon style={{ color, fontSize: "16px", flexShrink: 0 }} />
    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", fontWeight: 500 }}>{name}</span>
  </motion.div>
);

const MarqueeRow = ({ items, direction = "left" }) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden max-w-5xl mx-auto">
      <div
        className="absolute left-0 top-0 h-full w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0B0F14, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 h-full w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0B0F14, transparent)" }}
      />
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-3 w-max py-1"
      >
        {doubled.map((tech, i) => (
          <TechCard key={i} {...tech} />
        ))}
      </motion.div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="bg-[#0B0F14] py-6 lg:py-16 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="text-center mb-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-[#00d4ff] text-xs tracking-[0.2em] uppercase font-medium mb-3"
        >
          Tech Stack
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.22, ease }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-12"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          My Skills
        </motion.h2>
      </motion.div>

      {/* Row 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35, ease }}
        className="mb-4"
      >
        <MarqueeRow items={techs1} direction="left" />
      </motion.div>

      {/* Row 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.48, ease }}
      >
        <MarqueeRow items={techs2} direction="right" />
      </motion.div>

    </section>
  );
};

export default TechStack;
