import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

import profileImage from "../assets/images/profile1.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-10 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-blue-500/20 blur-[150px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium">
              🚀 Open to Internship & Full-Time
            </span>

            <p className="uppercase tracking-[6px] text-cyan-400 mt-8">
              Hello, I'm
            </p>

            <h1 className="text-6xl lg:text-8xl font-black mt-4 leading-none">

              <span className="text-white">
                NIHALA
              </span>

            </h1>

            <h2 className="mt-6 text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MERN Stack Developer
            </h2>

            <p className="text-gray-400 mt-8 max-w-xl leading-8 text-lg">
              Passionate Full Stack Developer specializing in React,
              Node.js, Express.js, MongoDB and Tailwind CSS.
              I enjoy creating modern, responsive and user-friendly
              web applications.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#projects"
                className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-8 py-4 rounded-2xl transition hover:scale-105"
              >
                View Projects
                <FaArrowRight />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 px-6 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                Download CV
              </a>

            </div>

            {/* Social */}

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/Nihala-ms"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-cyan-400 hover:text-black transition flex items-center justify-center"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nihala-ms/"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-cyan-400 hover:text-black transition flex items-center justify-center"
              >
                <FaLinkedin />
              </a>



            </div>

            {/* Stats */}

            <div className="flex gap-10 mt-14">

              <div>
                <h3 className="text-cyan-400 text-3xl font-bold">5+</h3>
                <p className="text-gray-400">Projects</p>
              </div>

              <div>
                <h3 className="text-cyan-400 text-3xl font-bold">15+</h3>
                <p className="text-gray-400">Skills</p>
              </div>

              <div>
                <h3 className="text-cyan-400 text-3xl font-bold">100%</h3>
                <p className="text-gray-400">Dedication</p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Background Glow */}
              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>

              {/* Decorative Circle */}
              <div className="absolute -inset-5 rounded-full border border-cyan-400/20"></div>

              {/* Profile Image */}
              <img
                src={profileImage}
                alt="Nihala"
                className="relative z-10 w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]
                 object-contain rounded-full border-4 border-cyan-400 bg-zinc-300
                 shadow-[0_0_60px_rgba(34,211,238,0.35)]"
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 border border-cyan-400/30 px-6 py-3 rounded-full shadow-lg">
                <p className="text-white font-semibold">
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;