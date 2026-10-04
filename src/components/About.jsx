import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#0f0d14] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-900/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-900/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#a78bfa]">
              ABOUT ME
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              A developer who
              <br />
              <span className="text-[#a78bfa]">
                loves building.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-gray-400">
            I'm passionate about creating clean, responsive and
            practical digital experiences that solve real problems.
          </p>

        </div>

        {/* Content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">

          {/* Main About Card */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#17151f] p-8 shadow-xl shadow-black/20 transition duration-500 hover:border-purple-500/20 sm:p-10">

            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl transition group-hover:bg-purple-600/20" />

            <div className="relative">

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-purple-300">
                  01
                </span>

                <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-[9px] font-bold tracking-widest text-purple-300">
                  WHO I AM
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl">
                Turning ideas into
                <br />
                <span className="text-purple-300">
                  digital experiences.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                I'm Nihala, an MCA graduate and MERN Stack Developer.
                I enjoy developing modern web applications using
                frontend and backend technologies.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                My goal is to build websites and applications that
                look professional, work smoothly and provide a simple
                experience for users.
              </p>

              <button
                onClick={goToContact}
                className="mt-8 flex items-center gap-3 rounded-full bg-[#6d28d9] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#7c3aed] hover:shadow-lg hover:shadow-purple-900/30"
              >
                Let's work together
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          </div>

          {/* Details */}
          <div className="grid gap-4">

            {/* Education */}
            <div className="group flex gap-5 rounded-[1.5rem] border border-white/10 bg-[#17151f] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-[#1d1a26]">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-300 transition group-hover:bg-[#6d28d9] group-hover:text-white">
                <FaGraduationCap />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500">
                  EDUCATION
                </p>

                <h4 className="mt-2 font-bold text-white">
                  MCA Graduate
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  Vidya Academy of Science and Technology
                </p>

                <div className="my-3 h-px w-full bg-white/10" />

                <h4 className="font-bold text-white">
                  BSc Computer Science
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  Little Flower College
                </p>
              </div>

            </div>

            {/* Specialization */}
            <div className="group flex gap-5 rounded-[1.5rem] border border-white/10 bg-[#17151f] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-[#1d1a26]">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-300 transition group-hover:bg-[#6d28d9] group-hover:text-white">
                <FaCode />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500">
                  SPECIALIZATION
                </p>

                <h4 className="mt-2 font-bold text-white">
                  MERN Stack
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  React · Node.js · Express · MongoDB
                </p>
              </div>

            </div>

            {/* Experience */}
            <div className="group flex gap-5 rounded-[1.5rem] border border-white/10 bg-[#17151f] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-[#1d1a26]">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-300 transition group-hover:bg-[#6d28d9] group-hover:text-white">
                <FaLaptopCode />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500">
                  EXPERIENCE
                </p>

                <h4 className="mt-2 font-bold text-white">
                  6 Months Internship
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  Practical web development experience
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
