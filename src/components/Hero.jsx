import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

import profileImage from "../assets/images/profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute -left-40 top-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:60px_60px]"
      ></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div className="max-w-2xl">

            {/* Availability */}
            <div
              className="inline-flex items-center gap-2
              px-4 py-2 rounded-full
              bg-cyan-400/10
              border border-cyan-400/20
              text-cyan-300 text-sm font-medium"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="animate-ping absolute inline-flex
                  h-full w-full rounded-full bg-cyan-400 opacity-75"
                ></span>

                <span
                  className="relative inline-flex rounded-full
                  h-2.5 w-2.5 bg-cyan-400"
                ></span>
              </span>

              Open to Internship & Full-Time
            </div>

            {/* Greeting */}
            <p
              className="uppercase tracking-[0.35em]
              text-cyan-400 text-sm font-semibold
              mt-8"
            >
              Hello, I'm
            </p>

            {/* Name */}
            <h1
              className="mt-3
              text-6xl sm:text-7xl lg:text-8xl
              font-black tracking-tight
              leading-[0.95]"
            >
              <span className="text-white">
                NIHALA
              </span>
              <span className="text-cyan-400">.</span>
            </h1>

            {/* Role */}
            <h2
              className="mt-7
              text-3xl sm:text-4xl
              font-bold
              leading-tight
              bg-gradient-to-r
              from-cyan-400
              via-cyan-300
              to-blue-500
              bg-clip-text text-transparent"
            >
              MERN Stack Developer
            </h2>

            {/* Description */}
            <p
              className="text-gray-400
              mt-7 max-w-xl
              text-base md:text-lg
              leading-8"
            >
              I build modern, responsive and user-focused web applications
              using React, Node.js, Express.js, MongoDB and Tailwind CSS.
              Passionate about creating clean interfaces and meaningful
              digital experiences.
            </p>

            {/* ================= BUTTONS ================= */}

            <div className="flex flex-wrap gap-4 mt-9">

              {/* Projects */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-3
                bg-cyan-400
                hover:bg-cyan-300
                text-slate-950
                font-semibold
                px-7 py-3.5
                rounded-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(34,211,238,0.25)]"
              >
                View Projects

                <FaArrowRight
                  className="group-hover:translate-x-1
                  transition-transform duration-300"
                />
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center
                border border-slate-700
                bg-slate-900/50
                text-gray-200
                font-medium
                px-7 py-3.5
                rounded-xl
                hover:border-cyan-400
                hover:text-cyan-400
                transition-all duration-300
                hover:-translate-y-1"
              >
                View CV
              </a>

            </div>

            {/* ================= SOCIAL ================= */}

            <div className="flex items-center gap-3 mt-9">

              <a
                href="https://github.com/Nihala-ms"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11
                flex items-center justify-center
                rounded-xl
                bg-slate-900
                border border-slate-800
                text-gray-400
                hover:text-cyan-400
                hover:border-cyan-400/50
                hover:-translate-y-1
                transition-all duration-300"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/nihala-ms/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11
                flex items-center justify-center
                rounded-xl
                bg-slate-900
                border border-slate-800
                text-gray-400
                hover:text-cyan-400
                hover:border-cyan-400/50
                hover:-translate-y-1
                transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>

            </div>

            {/* ================= STATS ================= */}

            <div
              className="flex flex-wrap
              items-center gap-8
              mt-12 pt-7
              border-t border-slate-800/80"
            >

              <div>
                <h3 className="text-2xl font-bold text-white">
                  6+
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Projects
                </p>
              </div>

              <div className="w-px h-10 bg-slate-800"></div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  15+
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Technologies
                </p>
              </div>

              <div className="w-px h-10 bg-slate-800"></div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  100%
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Dedication
                </p>
              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* RIGHT - PROFILE */}
          {/* ================================================= */}

          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px]">

              {/* Large Glow */}
              <div
                className="absolute inset-8
                bg-cyan-400/10
                blur-[80px]
                rounded-full"
              ></div>

              {/* Outer Ring */}
              <div
                className="absolute inset-0
                rounded-full
                border border-cyan-400/20"
              ></div>

              {/* Dashed Ring */}
              <div
                className="absolute -inset-4
                rounded-full
                border border-dashed
                border-cyan-400/20
                animate-[spin_30s_linear_infinite]"
              ></div>

              {/* Image Container */}
              <div
                className="absolute inset-7
                rounded-full
                overflow-hidden
                border border-cyan-400/40
                shadow-[0_0_80px_rgba(34,211,238,0.18)] bg-gray-300"
              >

                <img
                  src={profileImage}
                  alt="Nihala - MERN Stack Developer"
                  className="w-full h-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105"
                />

              </div>

              {/* ================= FLOATING TECH ICONS ================= */}

              {/* React */}
              <div
                className="absolute top-10 -left-2
                w-14 h-14
                flex items-center justify-center
                rounded-2xl
                bg-slate-900
                border border-slate-700
                shadow-xl
                text-cyan-400
                animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <FaReact className="text-2xl" />
              </div>

              {/* Node */}
              <div
                className="absolute top-24 -right-4
                w-14 h-14
                flex items-center justify-center
                rounded-2xl
                bg-slate-900
                border border-slate-700
                shadow-xl
                text-green-400
                animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <FaNodeJs className="text-2xl" />
              </div>

              {/* MongoDB */}
              <div
                className="absolute bottom-20 -left-5
                w-14 h-14
                flex items-center justify-center
                rounded-2xl
                bg-slate-900
                border border-slate-700
                shadow-xl
                text-green-400
                animate-bounce"
                style={{ animationDuration: "3.5s" }}
              >
                <SiMongodb className="text-2xl" />
              </div>

              {/* JavaScript */}
              <div
                className="absolute bottom-8 right-8
                w-14 h-14
                flex items-center justify-center
                rounded-2xl
                bg-slate-900
                border border-slate-700
                shadow-xl
                text-yellow-400
                animate-bounce"
                style={{ animationDuration: "4.5s" }}
              >
                <SiJavascript className="text-2xl" />
              </div>

              {/* Express */}
              <div
                className="absolute bottom-1/2 -right-7
                translate-y-1/2
                w-12 h-12
                flex items-center justify-center
                rounded-xl
                bg-slate-900
                border border-slate-700
                shadow-xl
                text-gray-300
                text-xs font-bold"
              >
                EX
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;