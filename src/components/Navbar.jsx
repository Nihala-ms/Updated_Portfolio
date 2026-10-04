import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">

      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#17151f]/85 px-5 py-3 shadow-lg shadow-black/20 backdrop-blur-xl">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6d28d9] text-lg font-bold text-white transition duration-300 group-hover:bg-[#7c3aed]">
              N
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-bold tracking-[0.18em] text-white">
                NIHALA
              </p>

              <p className="text-[9px] font-medium tracking-[0.25em] text-gray-500">
                WEB DEVELOPER
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">

            {links.map(([name, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-400 transition hover:bg-white/5 hover:text-[#a78bfa]"
              >
                {name}
              </button>
            ))}

            <button
              onClick={() => scrollTo("contact")}
              className="ml-3 flex items-center gap-2 rounded-full bg-[#6d28d9] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7c3aed]"
            >
              Let's Talk
              <FiArrowUpRight />
            </button>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-2xl text-white md:hidden"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">

            <div className="flex flex-col gap-1">

              {links.map(([name, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-[#a78bfa]"
                >
                  {name}
                </button>
              ))}

              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#6d28d9] px-4 py-3 text-sm font-semibold text-white"
              >
                Let's Talk
                <FiArrowUpRight />
              </button>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;
