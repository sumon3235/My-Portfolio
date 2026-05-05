import { motion } from "motion/react";
import { FiMonitor, FiDatabase, FiLock, FiSmartphone, FiUploadCloud, FiZap } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1];

const services = [
  {
    icon: FiMonitor,
    title: "Frontend Development",
    desc: "Building responsive, pixel-perfect web interfaces that look great on all devices.",
    features: ["React & Next.js", "Tailwind CSS", "Smooth animations"],
    accent: "#00d4ff",
  },
  {
    icon: FiDatabase,
    title: "CRUD Applications",
    desc: "Building functional web apps with Create, Read, Update and Delete operations — connected frontend to backend.",
    features: ["MongoDB + Express", "React frontend", "REST API integration"],
    accent: "#a259ff",
  },
  {
    icon: FiLock,
    title: "Auth & Security",
    desc: "Secure login systems with Firebase Auth and JWT token-based authentication.",
    features: ["Firebase Auth", "JWT & Cookies", "Private Routes"],
    accent: "#ff6b6b",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    desc: "Mobile-first designs that work flawlessly across all screen sizes and browsers.",
    features: ["Mobile-first", "Cross-browser", "DaisyUI components"],
    accent: "#FFA000",
  },
  {
    icon: FiUploadCloud,
    title: "Deployment & Hosting",
    desc: "Deploy your project live with proper environment setup and hosting configuration.",
    features: ["Firebase Hosting", "Vercel", "Environment setup"],
    accent: "#00d464",
  },
  {
    icon: FiZap,
    title: "UI Animations",
    desc: "Smooth, delightful micro-interactions and page animations using Framer Motion.",
    features: ["Framer Motion", "Page transitions", "Micro-interactions"],
    accent: "#FF4D8D",
  },
];

const ServiceCard = ({ service, index }) => {
  const { icon: Icon, title, desc, features, accent } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      whileHover={{
        y: -6,
        borderColor: accent + "50",
        boxShadow: `0 8px 30px ${accent}18`,
      }}
      className="group relative border border-white/10 rounded-2xl p-7 cursor-default overflow-hidden"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
        style={{ background: accent + "18" }}
      >
        <Icon style={{ color: accent, fontSize: "20px" }} />
      </div>

      <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
        {title}
      </h3>

      <p className="text-white/40 text-sm leading-relaxed mb-5">{desc}</p>

      <div className="flex flex-col gap-2">
        {features.map(feat => (
          <div key={feat} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
            <span className="text-white/35 text-xs">{feat}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="bg-[#0B0F14] py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-[#00d4ff] text-xs tracking-[0.2em] uppercase font-medium mb-3"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="text-4xl md:text-5xl font-extrabold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            My Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;