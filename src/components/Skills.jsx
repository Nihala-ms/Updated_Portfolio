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
      className="scroll-mt-24 bg-[#f8f7f4] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#6d28d9]">
              MY TOOLKIT
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Skills that turn
              <br />
              <span className="text-[#6d28d9]">
                ideas into code.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-gray-500">
            Technologies I use to design, develop and deploy
            modern web applications.
          </p>

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[.65fr_1.35fr]">

          <div className="rounded-[2rem] bg-[#17151f] p-8 text-white sm:p-10">

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

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

            {skills.map(([name, icon]) => (
              <div
                key={name}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8f7f4] text-2xl text-[#6d28d9] transition group-hover:bg-[#6d28d9] group-hover:text-white">
                  {icon}
                </div>

                <h4 className="mt-5 text-sm font-bold">
                  {name}
                </h4>

                <p className="mt-1 text-[9px] font-bold tracking-[0.15em] text-gray-400">
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
