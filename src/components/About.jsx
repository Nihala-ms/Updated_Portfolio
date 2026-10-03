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
      className="scroll-mt-24 bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#6d28d9]">
              ABOUT ME
            </p>

            <h2 className="text-4xl font-black tracking-tight text-[#17151f] sm:text-5xl lg:text-6xl">
              A developer who
              <br />
              <span className="text-[#6d28d9]">
                loves building.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-gray-500">
            I'm passionate about creating clean, responsive and
            practical digital experiences that solve real problems.
          </p>

        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">

          {/* Main card */}
          <div className="rounded-[2rem] bg-[#17151f] p-8 text-white sm:p-10">

            <span className="text-xs font-bold tracking-[0.2em] text-purple-300">
              01
            </span>

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
              className="mt-8 flex items-center gap-2 text-sm font-bold text-white transition hover:text-purple-300"
            >
              Let's work together
              <FaArrowRight />
            </button>

          </div>

          {/* Details */}
          <div className="grid gap-4">

            {/* Education */}
            <div className="flex gap-5 rounded-[1.5rem] border border-gray-100 bg-[#f8f7f4] p-6">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#6d28d9] shadow-sm">
                <FaGraduationCap />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400">
                  EDUCATION
                </p>

                <h4 className="mt-2 font-bold">
                  MCA Graduate
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Vidya Academy of Science and Technology
                </p>

                <div className="my-3 h-px w-full bg-gray-200" />

                <h4 className="font-bold">
                  BSc Computer Science
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Little Flower College
                </p>
              </div>

            </div>

            {/* Specialization */}
            <div className="flex gap-5 rounded-[1.5rem] border border-gray-100 bg-[#f8f7f4] p-6">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#6d28d9] shadow-sm">
                <FaCode />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400">
                  SPECIALIZATION
                </p>

                <h4 className="mt-2 font-bold">
                  MERN Stack
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  React · Node.js · Express · MongoDB
                </p>
              </div>

            </div>

            {/* Experience */}
            <div className="flex gap-5 rounded-[1.5rem] border border-gray-100 bg-[#f8f7f4] p-6">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#6d28d9] shadow-sm">
                <FaLaptopCode />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400">
                  EXPERIENCE
                </p>

                <h4 className="mt-2 font-bold">
                  6 Months Internship
                </h4>

                <p className="mt-1 text-sm text-gray-500">
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
