import { FiGithub, FiLinkedin, FiFacebook, FiMail } from "react-icons/fi";

const socialLinks = [
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/md-rifat-bin-sumon-0960843b7/" },
  { icon: FiGithub, href: "https://github.com/sumon3235" },
  { icon: FiFacebook, href: "https://www.facebook.com/md.rifat.bin.sumon" },
  { icon: FiMail, href: "mailto:mdsumonpixel@gmail.com" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B0F14] border-t border-white/[0.06] px-4 pt-16 pb-8 relative overflow-hidden">

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <p
              className="text-2xl font-extrabold text-white mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Su<span className="text-[#00d4ff]">mon</span>
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-5 max-w-[220px]">
              Junior Frontend Developer passionate about building clean, performant web experiences.
            </p>
            <div className="flex gap-2.5">
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
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/50 text-xs tracking-[0.15em] uppercase font-medium mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/35 text-sm hover:text-[#00d4ff] transition-colors duration-200 w-fit"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/50 text-xs tracking-[0.15em] uppercase font-medium mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:mdsumonpixel@gmail.com"
                className="text-white/35 text-sm hover:text-[#00d4ff] transition-colors duration-200 w-fit"
              >
                mdsumonpixel@gmail.com
              </a>
              
              <a
                href="https://github.com/sumon3235"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 text-sm hover:text-[#00d4ff] transition-colors duration-200 w-fit"
              >
                github.com/sumon3235
              </a>
              
              <a
                href="https://www.linkedin.com/in/md-rifat-bin-sumon-0960843b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 text-sm hover:text-[#00d4ff] transition-colors duration-200 w-fit"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2026 <span className="text-white/35">Sumon</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 bg-white/4 border border-white/10 rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d464] shadow-[0_0_6px_#00d464] animate-pulse" />
            <span className="text-white/30 text-xs">Available for work</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;