import { motion } from "motion/react";
import { useRef, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const ease = [0.22, 1, 0.36, 1];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/sumon3235" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/md-rifat-bin-sumon-0960843b7/",
  },
  { icon: FaFacebookF, href: "https://www.facebook.com/md.rifat.bin.sumon" },
];

const contactCards = [
  {
    icon: FiMail,
    label: "EMAIL",
    value: "mdsumonpixel@gmail.com",
    href: "mailto:mdsumonpixel@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "LOCATION",
    value: "Chapainawabganj, Bangladesh",
    href: null,
  },
  {
    icon: FiClock,
    label: "AVAILABILITY",
    value: "Open to opportunities",
    href: null,
  },
];

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // ← EmailJS Public Key
      );
      setStatus("done");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#0B0F14] min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(100,50,255,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-xs tracking-[0.3em] text-white/40 uppercase mb-6"
          >
            // Get In Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6"
          >
            <span className="text-white">Let's </span>
            <span
              style={{
                background: "linear-gradient(to right, #a259ff, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="text-white/40 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10"
          >
            Have an idea, opportunity, or just want to say hi?
            <br />
            I'd love to hear from you.
          </motion.p>

          {/* Mail icon box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.52, ease }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse shadow-[0_0_6px_#00d4ff]" />
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10"
              style={{ background: "rgba(162,89,255,0.15)" }}
            >
              <FiMail size={24} className="text-[#a259ff]" />
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-white/25 text-xs tracking-[0.3em] uppercase">
              Reach Out
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiArrowDown size={18} className="text-white/30" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Contact Section ─── */}
      <section className="px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-3">
              // Reach Out
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              <span className="text-white">Let's build something </span>
              <span
                style={{
                  background: "linear-gradient(to right, #a259ff, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                extraordinary
              </span>
            </h2>
          </motion.div>

          {/* Two column layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ── Left column ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="lg:w-[42%] flex flex-col gap-5"
            >
              <p className="text-white/45 text-sm leading-relaxed">
                I'm always open to discussing{" "}
                <span className="text-white font-semibold">
                  new opportunities
                </span>
                , collaborating on{" "}
                <span className="text-white font-semibold">
                  exciting projects
                </span>
                , or just having a great conversation about tech and
                development.
              </p>

              {/* Contact info cards */}
              <div className="flex flex-col gap-3">
                {contactCards.map(({ icon: Icon, label, value, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease }}
                  >
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 border border-white/10 rounded-xl px-5 py-4 hover:border-[#a259ff]/40 transition-all duration-200 group"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#a259ff] flex-shrink-0"
                          style={{ background: "rgba(162,89,255,0.1)" }}
                        >
                          <Icon size={15} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#a259ff] text-xs tracking-[0.15em] uppercase font-medium mb-0.5">
                            {label}
                          </p>
                          <p className="text-white/70 text-sm truncate">
                            {value}
                          </p>
                        </div>
                        <span className="text-white/20 group-hover:text-white/50 transition-colors">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <div
                        className="flex items-center gap-4 border border-white/10 rounded-xl px-5 py-4"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[#a259ff] flex-shrink-0"
                          style={{ background: "rgba(162,89,255,0.1)" }}
                        >
                          <Icon size={15} />
                        </div>
                        <div>
                          <p className="text-[#a259ff] text-xs tracking-[0.15em] uppercase font-medium mb-0.5">
                            {label}
                          </p>
                          <p className="text-white/70 text-sm">{value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease }}
              >
                <p className="text-white/25 text-xs tracking-[0.2em] uppercase mb-3">
                  // Find Me Online
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ icon: Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-[#a259ff] hover:border-[#a259ff]/40 transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease }}
                className="relative border border-white/10 rounded-xl p-5 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, #a259ff60, transparent)",
                  }}
                />
                <p className="text-white/30 text-3xl font-serif leading-none mb-2">
                  "
                </p>
                <p className="text-white/40 text-xs leading-relaxed italic">
                  Great things happen when talented people connect. Don't
                  hesitate to drop a message — even if it's just to say hello.
                </p>
              </motion.div>
            </motion.div>

            {/* ── Right column — Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="lg:flex-1 relative border border-white/10 rounded-2xl p-7 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(to right, transparent, #a259ff, #00d4ff, transparent)",
                }}
              />

              <h3 className="text-white font-bold text-lg mb-1">
                Send a message
              </h3>
              <p className="text-white/30 text-xs mb-6">
                Fill out the form and I'll respond as soon as possible.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* Name + Email */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    name="user_name"
                    required
                    placeholder="Your Name"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-[#a259ff]/60 transition-colors duration-200"
                  />
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-[#a259ff]/60 transition-colors duration-200"
                  />
                </div>

                {/* Subject */}
                <input
                  name="subject"
                  required
                  placeholder="Subject"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-[#a259ff]/60 transition-colors duration-200"
                />

                {/* Message */}
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Your Message"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-[#a259ff]/60 transition-colors duration-200 resize-none"
                />

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "done"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm transition-opacity duration-200 disabled:opacity-60"
                  style={{
                    background: "linear-gradient(to right, #a259ff, #00d4ff)",
                    color: "#0B0F14",
                  }}
                >
                  <FiSend size={14} />
                  {status === "sending"
                    ? "Sending..."
                    : status === "done"
                      ? "Message Sent ✓"
                      : "Send Message"}
                </motion.button>

                {/* Response time */}
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d464] shadow-[0_0_5px_#00d464] animate-pulse" />
                  <p className="text-white/25 text-xs">
                    {status === "error"
                      ? "Something went wrong. Try again."
                      : "I usually respond within 24 hours"}
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
