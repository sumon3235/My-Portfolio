import { motion } from "motion/react";
import { easeInOut } from "motion";
import { FaArrowDownLong } from "react-icons/fa6";

const ease = [0.22, 1, 0.36, 1];

const Banner = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0B0F14] relative overflow-hidden py-1 lg:py-24">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 lg:w-72 h-50 lg:h-80 bg-[#00d4ff]/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="flex flex-col items-center">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-6 text-xs sm:text-sm text-white/70"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse shadow-[0_0_6px_#00d4ff]" />
          Available for new projects
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="text-[#00d4ff]">Sumon</span>
          <br />
          <span className="text-white/40">I Turn Ideas Into Interfaces</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="text-white/50 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-xl mb-8 leading-relaxed"
        >
          A passionate Frontend Developer crafting beautiful, performant websites
          and web applications that drive results.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52, ease }}
          className="flex flex-row items-center justify-center gap-3 mb-10"
        >
          <button className="bg-[#00d4ff] text-black font-semibold px-6 py-2.5 rounded-md hover:bg-[#00bcd4] transition-colors duration-200 cursor-pointer text-sm">
            View My Work
          </button>
          <button className="border border-white/20 text-white font-semibold px-6 py-2.5 rounded-md hover:border-[#00d4ff] hover:text-[#00d4ff] transition-colors duration-200 cursor-pointer text-sm">
            Get In Touch
          </button>
        </motion.div>

        {/* Bottom cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease }}
          className="flex items-center justify-center gap-3"
        >
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
            <span className="text-[#00d4ff] text-sm font-bold">{`</>`}</span>
            <div className="text-left">
              <p className="text-white font-semibold text-xs sm:text-sm">Frontend</p>
              <p className="text-white/40 text-xs">React & Next.js</p>
            </div>
          </div>

          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.25, repeat: Infinity, ease: easeInOut }}
            className="text-white/20"
          >
            <FaArrowDownLong size={20} />
          </motion.span>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
            <span className="text-[#00d4ff] text-sm">✦</span>
            <div className="text-left">
              <p className="text-white font-semibold text-xs sm:text-sm">UI/UX</p>
              <p className="text-white/40 text-xs">Clean & Modern</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;
