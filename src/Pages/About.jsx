import { motion } from "motion/react";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const ease = [0.22, 1, 0.36, 1];

const stats = [
  { num: "5+", label: "Projects Built" },
  { num: "10+", label: "Technologies" },
  { num: "1+", label: "Years Coding" },
  { num: "∞", label: "Lines of Code" },
];

const education = [
  {
    title: "Diploma in Computer Science",
    institute: "Chapainawabganj Polytechnic Institute",
    year: "2020 — 2024",
    status: "Completed",
    accent: "#00d4ff",
  },
  {
    title: "Frontend Web Development",
    institute: "Programming Hero",
    year: "2023 — 2024",
    status: "Completed",
    accent: "#a259ff",
  },
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/sumon3235" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/md-rifat-bin-sumon-0960843b7/" },
  { icon: FaFacebookF, href: "https://www.facebook.com/md.rifat.bin.sumon" },
  { icon: FiMail, href: "mailto:mdsumonpixel@gmail.com" },
];

const About = () => {
  return (
    <div className="bg-[#0B0F14] min-h-screen px-4 pt-32 pb-20">
      <div className="max-w-5xl mx-auto">

        {/* ─── Hero ─── */}
        <div className="flex flex-col md:flex-row items-center gap-14 mb-24">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="relative flex-shrink-0"
          >
            <div
              className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10"
              style={{ background: "rgba(0,212,255,0.05)" }}
            >
              <img
                src="/images/sumon.jpg"
                alt="Sumon"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div
              className="absolute -inset-4 rounded-2xl -z-10"
              style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, transparent 70%)" }}
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#0B0F14] border border-white/10 rounded-full px-3 py-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d464] shadow-[0_0_6px_#00d464] animate-pulse" />
              <span className="text-white/40 text-xs">Available for work</span>
            </div>
          </motion.div>

          {/* Text — staggered */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-[#00d4ff] text-xs tracking-[0.2em] uppercase font-medium mb-3"
            >
              About Me
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Md. Rifat Bin Sumon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.44, ease }}
              className="text-white/45 text-sm leading-relaxed mb-6 max-w-lg"
            >
              A passionate Junior Frontend Developer from Chapainawabganj, Bangladesh.
              I love turning ideas into clean, smooth, and meaningful web experiences.
              Every project I build teaches me something new — and I'm always pushing
              myself to write better, more thoughtful code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              className="flex items-center gap-3 mb-6"
            >
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/4 flex items-center justify-center text-white/40 hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease }}
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0B0F14] font-semibold px-5 py-2.5 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200"
            >
              <FiDownload size={15} />
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* ─── Stats ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map(({ num, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
              className="text-center border border-white/10 rounded-2xl py-6 px-4"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <p
                className="text-3xl font-extrabold text-[#00d4ff] mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {num}
              </p>
              <p className="text-white/35 text-xs">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* ─── My Story ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="relative border border-white/10 rounded-2xl p-8 mb-6 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(to right, transparent, #00d4ff, transparent)" }}
          />
          <p className="text-[#00d4ff] text-xs tracking-[0.2em] uppercase font-medium mb-4">
            My Story
          </p>
          <p className="text-white/45 text-sm leading-relaxed">
            I started my coding journey out of pure curiosity — and it quickly became
            a genuine passion. What began as exploring how websites work turned into
            building real projects that people actually use. I completed my Diploma in
            Computer Science and sharpened my frontend skills through Programming Hero,
            where I learned to build modern, responsive web applications from scratch.
            I'm not just chasing frameworks — I care about writing clean code, creating
            smooth user experiences, and growing every single day as a developer.
          </p>
        </motion.div>

        {/* ─── Education ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="relative border border-white/10 rounded-2xl p-8 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(to right, transparent, #a259ff, transparent)" }}
          />
          <p className="text-[#00d4ff] text-xs tracking-[0.2em] uppercase font-medium mb-8">
            Education
          </p>

          <div className="relative">
            <div
              className="absolute left-[11px] top-3 bottom-3 w-[1px]"
              style={{ background: "linear-gradient(to bottom, rgba(0,212,255,0.4), rgba(162,89,255,0.1))" }}
            />

            <div className="flex flex-col gap-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease }}
                  className="flex gap-6"
                >
                  <div className="relative z-10 mt-1 flex-shrink-0">
                    <div
                      className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: edu.accent + "60", background: edu.accent + "15" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: edu.accent, boxShadow: `0 0 6px ${edu.accent}` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3
                        className="text-white font-semibold text-sm"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {edu.title}
                      </h3>
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full border font-medium"
                        style={{ color: edu.accent, borderColor: edu.accent + "30", background: edu.accent + "10" }}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-white/40 text-xs mb-1">{edu.institute}</p>
                    <p className="text-white/25 text-xs">{edu.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;