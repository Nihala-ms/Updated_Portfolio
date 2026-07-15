import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-2xl font-bold">
            NI<span className="text-cyan-400">HALA</span>
          </h2>

          <p className="text-gray-400 mt-2">
            MERN Stack Developer
          </p>
        </div>

        <div className="flex gap-4">

          <a
            href="https://github.com/Nihala-ms"
            className="w-11 h-11 rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-black flex items-center justify-center transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nihala-ms/"
            className="w-11 h-11 rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-black flex items-center justify-center transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="#home"
            className="w-11 h-11 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:scale-110 transition"
          >
            <FaArrowUp />
          </a>

        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">
        © 2026 Nihala. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;