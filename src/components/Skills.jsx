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
    category: "Frontend",
    level: "Advanced",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    bg: "from-orange-500/10",
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: "Advanced",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    bg: "from-blue-500/10",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Intermediate",
    icon: <FaJs />,
    color: "text-yellow-400",
    bg: "from-yellow-400/10",
  },
  {
    name: "React.js",
    category: "Frontend",
    level: "Intermediate",
    icon: <FaReact />,
    color: "text-cyan-400",
    bg: "from-cyan-400/10",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Intermediate",
    icon: <SiNextdotjs />,
    color: "text-white",
    bg: "from-white/10",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Intermediate",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    bg: "from-sky-400/10",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Intermediate",
    icon: <FaNodeJs />,
    color: "text-green-500",
    bg: "from-green-500/10",
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Intermediate",
    icon: <SiExpress />,
    color: "text-gray-300",
    bg: "from-gray-400/10",
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Intermediate",
    icon: <SiMongodb />,
    color: "text-green-400",
    bg: "from-green-400/10",
  },
  {
    name: "TypeScript",
    category: "Language",
    level: "Intermediate",
    icon: <SiTypescript />,
    color: "text-blue-500",
    bg: "from-blue-500/10",
  },
  {
    name: "Git",
    category: "Tools",
    level: "Intermediate",
    icon: <FaGitAlt />,
    color: "text-orange-500",
    bg: "from-orange-500/10",
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Intermediate",
    icon: <FaGithub />,
    color: "text-white",
    bg: "from-white/10",
  },
  {
    name: "Postman",
    category: "API Tools",
    level: "Intermediate",
    icon: <SiPostman />,
    color: "text-orange-500",
    bg: "from-orange-500/10",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-slate-950 py-24 overflow-hidden"
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>

      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>

      {/* ================================================= */}
      {/* ANIMATION */}
      {/* ================================================= */}

      <style>
        {`
          @keyframes skillsFadeUp {
            from {
              opacity: 0;
              transform: translateY(35px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes skillsScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .skills-fade {
            opacity: 0;
            animation: skillsFadeUp 0.8s ease-out forwards;
          }

          .skills-scale {
            opacity: 0;
            animation: skillsScale 0.8s ease-out forwards;
          }

          .skill-card-1 {
            animation-delay: 0.1s;
          }

          .skill-card-2 {
            animation-delay: 0.2s;
          }

          .skill-card-3 {
            animation-delay: 0.3s;
          }

          .skill-card-4 {
            animation-delay: 0.4s;
          }

          .skill-card-5 {
            animation-delay: 0.5s;
          }

          .skill-card-6 {
            animation-delay: 0.6s;
          }

          .skill-card-7 {
            animation-delay: 0.7s;
          }

          .skill-card-8 {
            animation-delay: 0.8s;
          }

          .skill-card-9 {
            animation-delay: 0.9s;
          }

          .skill-card-10 {
            animation-delay: 1s;
          }

          .skill-card-11 {
            animation-delay: 1.1s;
          }

          .skill-card-12 {
            animation-delay: 1.2s;
          }

          .skill-card-13 {
            animation-delay: 1.3s;
          }

          @media (prefers-reduced-motion: reduce) {
            .skills-fade,
            .skills-scale {
              opacity: 1;
              animation: none;
            }
          }
        `}
      </style>


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <div className="text-center mb-16">

          <p className="skills-fade text-cyan-400 text-sm font-medium uppercase tracking-[0.3em] mb-4">
            My Expertise
          </p>

          <h2 className="skills-fade skill-card-2 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Technical{" "}
            <span className="text-cyan-400">
              Skills
            </span>
          </h2>

          <div className="skills-scale skill-card-3 w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="skills-fade skill-card-4 text-gray-400 text-base md:text-lg leading-8 max-w-2xl mx-auto mt-6">
            Technologies and tools I use to design, develop, and build
            modern, responsive, and scalable web applications.
          </p>

        </div>


        {/* ================================================= */}
        {/* SKILL GRID */}
        {/* ================================================= */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">

          {skills.map((skill, index) => (

            <div
              key={skill.name}
              className={`
                skills-fade
                skill-card-${index + 1}
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-xl
                p-6
                md:p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_20px_50px_rgba(34,211,238,0.08)]
              `}
            >

              {/* Hover Glow */}

              <div
                className={`
                  absolute
                  -top-20
                  -right-20
                  w-40
                  h-40
                  rounded-full
                  bg-gradient-to-br
                  ${skill.bg}
                  to-transparent
                  blur-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                `}
              ></div>


              {/* Top Accent */}

              <div
                className="absolute top-0 left-0 right-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-cyan-400/50
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500"
              ></div>


              {/* ================================================= */}
              {/* ICON */}
              {/* ================================================= */}

              <div className="relative flex items-center justify-between">

                <div
                  className={`
                    w-14 h-14
                    md:w-16 md:h-16
                    rounded-2xl
                    bg-slate-950
                    border border-slate-800
                    flex items-center justify-center
                    ${skill.color}
                    text-4xl
                    md:text-5xl
                    group-hover:scale-110
                    transition-transform
                    duration-500
                  `}
                >
                  {skill.icon}
                </div>


                {/* Number */}

                <span
                  className="text-[10px]
                  font-semibold
                  tracking-widest
                  text-slate-600
                  group-hover:text-cyan-400/60
                  transition-colors"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}

              <div className="relative mt-6">

                <p
                  className="text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-cyan-400/70
                  font-medium
                  mb-2"
                >
                  {skill.category}
                </p>


                <h3
                  className="text-lg
                  md:text-xl
                  font-semibold
                  text-white
                  group-hover:text-cyan-300
                  transition-colors
                  duration-300"
                >
                  {skill.name}
                </h3>


                {/* Level */}

                <div className="flex items-center justify-between mt-4">

                  <span className="text-xs text-gray-500">
                    {skill.level}
                  </span>

                  <span
                    className="text-xs
                    text-slate-600
                    group-hover:text-cyan-400
                    transition-colors"
                  >
                    ●
                  </span>

                </div>


                {/* Progress line */}

                <div
                  className="mt-3
                  h-1
                  w-full
                  rounded-full
                  bg-slate-800
                  overflow-hidden"
                >

                  <div
                    className="h-full
                    w-3/4
                    rounded-full
                    bg-cyan-400
                    scale-x-0
                    origin-left
                    group-hover:scale-x-100
                    transition-transform
                    duration-700"
                  ></div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================================================= */}
        {/* BOTTOM MESSAGE */}
        {/* ================================================= */}

        <div className="skills-fade skill-card-13 text-center mt-14">

          <div
            className="inline-flex
            items-center
            gap-3
            px-5
            py-3
            rounded-full
            border
            border-slate-800
            bg-slate-900/60"
          >

            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

            <p className="text-gray-400 text-sm">
              Always learning. Always building.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;