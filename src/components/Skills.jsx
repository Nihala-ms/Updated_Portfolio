import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiDjango,
  SiGit,
  SiGithub,
  SiMysql,
} from "react-icons/si";

const skills = [
  ["HTML5", <FaHtml5 />],
  ["CSS3", <FaCss3Alt />],
  ["JavaScript", <FaJs />],
  ["React", <FaReact />],
  ["Node.js", <FaNodeJs />],
  ["Express.js", <SiExpress />],
  ["MongoDB", <SiMongodb />],
  ["Tailwind CSS", <SiTailwindcss />],
  ["Python", <FaPython />],
  ["Django", <SiDjango />],
  ["MySQL", <SiMysql />],
  ["Git", <SiGit />],
  ["GitHub", <SiGithub />],
];

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-[#0f0d14] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#a78bfa]">
              MY TOOLKIT
            </p>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Skills that turn
              <br />
              <span className="text-[#a78bfa]">
                ideas into code.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-gray-400">
            Technologies I use to design, develop and deploy
            modern web applications.
          </p>

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[.65fr_1.35fr]">

          {/* Introduction Card */}
          <div className="rounded-[2rem] bg-[#17151f] p-8 text-white shadow-xl shadow-black/20 sm:p-10">

            <span className="text-xs font-bold tracking-[0.2em] text-purple-300">
              02
            </span>

            <h3 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl">
              Building with
              <br />
              <span className="text-purple-300">
                the right tools.
              </span>
            </h3>

            <p className="mt-7 text-sm leading-7 text-gray-400">
              My workflow combines frontend development,
              backend development, databases and version control
              to create complete web applications.
            </p>

          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

            {skills.map(([name, icon]) => (
              <div
                key={name}
                className="group rounded-2xl border border-white/10 bg-[#17151f] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-[#1d1a26] hover:shadow-xl hover:shadow-purple-900/10"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f0d14] text-2xl text-[#a78bfa] transition group-hover:bg-[#6d28d9] group-hover:text-white">
                  {icon}
                </div>

                <h4 className="mt-5 text-sm font-bold text-white">
                  {name}
                </h4>

                <p className="mt-1 text-[9px] font-bold tracking-[0.15em] text-gray-500">
                  TECHNOLOGY
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
