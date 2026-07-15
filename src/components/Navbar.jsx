import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide"
        >
          <span className="text-white">NI</span>
          <span className="text-cyan-400">HALA</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2 rounded-full transition"
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-gray-300 hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              className="bg-cyan-500 text-slate-950 px-5 py-2 rounded-full font-semibold"
            >
              Hire Me
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;