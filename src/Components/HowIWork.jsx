import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "Requirements",
    desc: "Understanding your goals, needs, and project scope clearly before anything else.",
    accent: "#00d4ff",
  },
  {
    number: "02",
    title: "Design & Plan",
    desc: "Planning the structure, layout, and technical approach for the best outcome.",
    accent: "#a259ff",
  },
  {
    number: "03",
    title: "Development",
    desc: "Writing clean, maintainable code with regular updates and communication.",
    accent: "#ff6b6b",
  },
  {
    number: "04",
    title: "Test & Deliver",
    desc: "Testing thoroughly and delivering the final product on time.",
    accent: "#00d464",
  },
];

const HowIWork = () => {
  return (
    <section className="bg-[#0B0F14] py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-[#00d4ff] text-xs tracking-[0.2em] uppercase font-medium mb-3"
          >
            My Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="text-4xl md:text-5xl font-extrabold text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            How I Work
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease }}
              className="flex flex-col items-center text-center relative"
            >

              {/* Connector line */}
              {index !== steps.length - 1 && (
                <div
                  className="absolute top-7 left-1/2 w-full h-[1px] hidden lg:block"
                  style={{ background: `linear-gradient(to right, ${step.accent}40, rgba(255,255,255,0.05))` }}
                />
              )}

              {/* Circle */}
              <motion.div
                className="w-14 h-14 rounded-full flex items-center justify-center text-base font-extrabold mb-5 relative z-10"
                style={{
                  border: `1px solid ${step.accent}50`,
                  background: step.accent + "12",
                  color: step.accent,
                  fontFamily: "'Syne', sans-serif",
                }}
                whileHover={{
                  scale: 1.12,
                  boxShadow: `0 0 20px ${step.accent}40`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                {step.number}
              </motion.div>

              {/* Title */}
              <h3
                className="text-white font-bold text-sm mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-white/35 text-xs leading-relaxed">
                {step.desc}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowIWork;