import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B0F14] border-b border-white/10 z-[9999]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h3 className="text-[#00d4ff] font-bold text-xl md:text-3xl">Sumon.</h3>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                className={`text-sm transition-colors duration-200 cursor-pointer ${
                  active === link
                    ? "text-[#00d4ff] font-medium"
                    : "text-white/70 hover:text-[#00d4ff]"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setActive("Contact")}
              className="bg-[#00d4ff] text-black text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#00bcd4] transition-colors duration-200 cursor-pointer"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
        >
          <span
            className={`block w-6 h-0.5 bg-[#00d4ff] transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#00d4ff] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#00d4ff] transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0B0F14] border-t border-white/10 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => {
                  setActive(link);
                  setIsOpen(false);
                }}
                className={`text-sm transition-colors duration-200 cursor-pointer ${
                  active === link
                    ? "text-[#00d4ff] font-medium"
                    : "text-white/70 hover:text-[#00d4ff]"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setActive("Contact");
                setIsOpen(false);
              }}
              className="bg-[#00d4ff] text-black text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#00bcd4] transition-colors duration-200 cursor-pointer w-full"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
