import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-6xl text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-6xl text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-6xl text-yellow-400" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-6xl text-cyan-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-6xl text-white" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-6xl text-sky-400" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-6xl text-green-500" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-6xl text-gray-300" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-6xl text-green-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-6xl text-blue-600" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-6xl text-orange-600" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-6xl text-white" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-6xl text-orange-500" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
             <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-4"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I enjoy building modern, responsive, and scalable web applications
            using the latest frontend and backend technologies.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:-translate-y-3 hover:border-cyan-400 transition-all duration-300 shadow-lg"
            >
              {skill.icon}

              <h3 className="mt-5 text-lg font-semibold text-white">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;