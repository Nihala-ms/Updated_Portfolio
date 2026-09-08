import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // ================= SCROLL EFFECT =================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================= ACTIVE SECTION =================
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ================= NAVIGATION CLICK =================
  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-24 flex items-center justify-between">

            {/* =================================================
                LOGO
            ================================================= */}
            <a
              href="#home"
              onClick={() => handleClick("home")}
              className="group"
            >
              <div className="flex items-center gap-3">

                {/* Logo Mark */}
                <div className="relative flex items-center justify-center">
                  <span className="text-3xl font-black tracking-tighter text-white">
                    N
                  </span>

                  <span className="absolute -right-2 bottom-0 w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform duration-300" />
                </div>

                {/* Logo Text */}
                <div className="hidden sm:block border-l border-slate-700 pl-3">
                  <p className="text-lg font-bold tracking-[0.12em] text-white">
                    NIHALA
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </a>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}
            <div className="hidden md:flex items-center gap-10">

              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive =
                  activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleClick(sectionId)}
                    className="relative group py-2"
                  >
                    {/* Navigation Text */}
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Active / Hover Underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[1px] bg-cyan-400 transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* =================================================
                LET'S TALK BUTTON
            ================================================= */}
            <a
              href="#contact"
              onClick={() => handleClick("contact")}
              className="hidden md:flex items-center gap-3 group"
            >
              <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Let's Talk
              </span>

              <span className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400 transition-all duration-300">
                <FaArrowRight className="text-xs text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 transition-all duration-300" />
              </span>
            </a>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? "Close menu" : "Open menu"
              }
              className="md:hidden w-11 h-11 flex items-center justify-center text-white border border-slate-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              {menuOpen ? (
                <HiX className="text-xl" />
              ) : (
                <HiMenu className="text-xl" />
              )}
            </button>
          </div>
        </nav>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            menuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-slate-950 border-t border-slate-800 px-6 py-8">

            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-7">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-600">
                Menu
              </span>

              <span className="text-xs text-cyan-400">
                NIHALA
              </span>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-1">

              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive =
                  activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleClick(sectionId)}
                    className={`flex items-center justify-between py-4 border-b border-slate-800 group ${
                      isActive
                        ? "text-white"
                        : "text-slate-500"
                    }`}
                  >
                    <div className="flex items-center gap-4">

                      {/* Active Dot */}
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-cyan-400 scale-125"
                            : "bg-slate-700"
                        }`}
                      />

                      <span className="text-lg font-medium group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </div>

                    {/* Arrow */}
                    <FaArrowRight
                      className={`text-xs transition-all duration-300 ${
                        isActive
                          ? "text-cyan-400 translate-x-0"
                          : "text-slate-700 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Mobile Contact Button */}
            <a
              href="#contact"
              onClick={() => handleClick("contact")}
              className="flex items-center justify-between mt-7 px-5 py-4 bg-cyan-400 text-slate-950 rounded-xl font-semibold hover:bg-cyan-300 transition-all duration-300"
            >
              <span>Start a conversation</span>

              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;