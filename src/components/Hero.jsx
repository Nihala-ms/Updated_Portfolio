import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

import { FiArrowUpRight, FiDownload } from "react-icons/fi";

import profileImage from "../assets/images/profile.jpeg";

function Hero() {
  const goToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0f0d14] px-5 pb-16 pt-32 text-white sm:px-8 lg:px-12"
    >
      {/* Background decoration */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-900/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">

        {/* LEFT */}
        <div>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-[#17151f] px-4 py-2 text-xs font-semibold text-gray-300 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for opportunities
          </div>

          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-[#a78bfa]">
            HELLO, I'M
          </p>

          <h1 className="text-6xl font-black tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
            Nihala
            <span className="text-[#a78bfa]">.</span>
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#6d28d9]" />

            <h2 className="text-xl font-bold text-gray-300 sm:text-2xl">
              MERN Stack Developer
            </h2>
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build modern, responsive and user-focused web applications
            using React, Node.js, Express.js and MongoDB. I enjoy turning
            ideas into clean digital experiences that are simple and
            meaningful.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">

            <button
              onClick={goToProjects}
              className="flex items-center gap-2 rounded-full bg-[#6d28d9] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-900/20 transition hover:-translate-y-1 hover:bg-[#7c3aed]"
            >
              Explore My Work
              <FiArrowUpRight className="text-lg" />
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-[#17151f] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-[#6d28d9] hover:text-[#a78bfa]"
            >
              Resume
              <FiDownload />
            </a>

          </div>

          <div className="mt-10 flex items-center gap-5">

            <a
              href="https://github.com/Nihala-ms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#17151f] text-gray-400 transition hover:border-[#6d28d9] hover:bg-[#6d28d9] hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nihala-ms/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#17151f] text-gray-400 transition hover:border-[#6d28d9] hover:bg-[#6d28d9] hover:text-white"
            >
              <FaLinkedin />
            </a>

            <span className="text-[10px] font-bold tracking-[0.25em] text-gray-500">
              CONNECT WITH ME
            </span>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-[470px]">

          {/* Main image */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#17151f] p-3 shadow-2xl shadow-purple-900/20">

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#0f0d14]">

              <img
                src={profileImage}
                alt="Nihala"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] font-bold tracking-[0.25em] text-white/60">
                  CURRENTLY
                </p>

                <p className="mt-2 text-xl font-bold leading-tight text-white">
                  Building meaningful
                  <br />
                  web experiences.
                </p>
              </div>

            </div>
          </div>

          {/* Floating technology card */}
          <div className="absolute -bottom-7 -left-5 rounded-2xl border border-white/10 bg-[#17151f] p-4 shadow-xl shadow-black/30 sm:-left-10">

            <p className="mb-3 text-[9px] font-bold tracking-[0.2em] text-gray-500">
              MY STACK
            </p>

            <div className="flex gap-3">

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <FaReact />
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                <FaNodeJs />
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                <SiJavascript />
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                <SiMongodb />
              </span>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
