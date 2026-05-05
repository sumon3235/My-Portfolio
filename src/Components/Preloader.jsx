import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1];

const Preloader = ({ onDone }) => {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Progress 0 → 100 in ~2 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // একটু pause করে তারপর exit
          setTimeout(() => {
            setLeaving(true);
            setTimeout(() => onDone?.(), 800);
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!leaving ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease }}
          className="fixed inset-0 bg-[#0B0F14] flex flex-col items-center justify-center z-50"
        >
          {/* Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, transparent 70%)" }}
          />

          {/* Logo / Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-white/20 text-xs tracking-[0.4em] uppercase mb-8"
          >
            Md. Rifat Bin Sumon
          </motion.p>

          {/* LOADING text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="text-[#00d4ff] text-2xl md:text-3xl tracking-[0.5em] font-light mb-6"
          >
            LOADING
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
            className="w-48 md:w-64 h-[1px] bg-white/10 overflow-hidden rounded-full mb-4"
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(to right, #00d4ff, #a259ff)" }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </motion.div>

          {/* Progress number */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white/20 text-xs font-mono tabular-nums"
          >
            {progress}%
          </motion.p>

        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;