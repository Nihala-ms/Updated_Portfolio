import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/prj1.png";
import project5 from "../assets/images/prj2.png";
import project6 from "../assets/images/prj3.png";

import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    number: "01",
    title: "Insurance Claim Management System",
    category: "Insurance",
    image: project4,
    description:
      "A full-stack insurance application for submitting, reviewing, tracking, and managing insurance claims efficiently.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Nihala-ms",
  },

  {
    number: "02",
    title: "Recipe  Website",
    category: "Food & Recipes",
    image: project5,
    description:
      "A modern recipe platform where users can discover recipes, explore ingredients, and follow step-by-step cooking instructions.",
    technologies: ["Angular", "TypeScript", "MongoDB"],
    github: "https://github.com/Nihala-ms",
  },

  {
    number: "03",
    title: "E-Commerce Website",
    category: "E-Commerce",
    image: project6,
    description:
      "A responsive e-commerce application featuring product browsing, detailed product views, shopping cart functionality, and a smooth user experience.",
    technologies: [ "Javascript", "React.js", "Fetch API"],
    github: "https://github.com/Nihala-ms",
  },

  {
    number: "04",
    title: "Cake Gallery",
    category: "Bakery Website",
    image: project3,
    description:
      "A responsive bakery website showcasing cakes, pastries, and desserts through a clean and engaging product gallery.",
    technologies: ["JavaScript", "React.js", "Fetch API"],
    github: "https://github.com/Nihala-ms",
  },

  {
    number: "05",
    title: "Aspire Hub",
    category: "Job Portal",
    image: project1,
    description:
      "A full-stack job portal designed to connect employers and job seekers through job posting, search, filtering, and application management.",
    technologies: ["Python", "Django", "MySQL", "HTML"],
    github: "https://github.com/Nihala-ms",
  },

  {
    number: "06",
    title: "Novena Care",
    category: "Healthcare",
    image: project2,
    description:
      "A healthcare platform focused on providing a simple and user-friendly digital experience for managing patient services.",
    technologies: ["Python", "Django", "MySQL", "HTML"],
    github: "https://github.com/Nihala-ms",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-slate-900 py-28 overflow-hidden"
    >
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-cyan-400/5 blur-[130px] rounded-full" />

      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-blue-500/5 blur-[130px] rounded-full" />

      <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] bg-cyan-400/5 blur-[130px] rounded-full" />

      {/* ===================================================== */}
      {/* ANIMATION */}
      {/* ===================================================== */}

      <style>
        {`
          @keyframes projectFadeUp {
            from {
              opacity: 0;
              transform: translateY(35px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .project-reveal {
            opacity: 0;
            animation: projectFadeUp 0.9s ease-out forwards;
          }

          .project-delay-1 {
            animation-delay: 0.15s;
          }

          .project-delay-2 {
            animation-delay: 0.3s;
          }

          .project-delay-3 {
            animation-delay: 0.45s;
          }

          .project-delay-4 {
            animation-delay: 0.6s;
          }

          .project-delay-5 {
            animation-delay: 0.75s;
          }

          .project-delay-6 {
            animation-delay: 0.9s;
          }

          @media (prefers-reduced-motion: reduce) {
            .project-reveal {
              opacity: 1;
              animation: none;
            }
          }
        `}
      </style>

      {/* ===================================================== */}
      {/* CONTENT */}
      {/* ===================================================== */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* ===================================================== */}
        {/* HEADING */}
        {/* ===================================================== */}

        <div className="text-center mb-20">

          <p className="project-reveal text-cyan-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            My Work
          </p>

          <h2 className="project-reveal project-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Selected{" "}
            <span className="text-cyan-400">
              Projects
            </span>
          </h2>

          <div className="project-reveal project-delay-2 w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />

          <p className="project-reveal project-delay-3 max-w-2xl mx-auto mt-7 text-gray-400 text-base md:text-lg leading-8">
            A collection of projects that demonstrate my approach to
            frontend development, backend development, responsive design,
            and real-world problem solving.
          </p>

        </div>


        {/* ===================================================== */}
        {/* PROJECT GRID */}
        {/* ===================================================== */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">

          {projects.map((project, index) => (

            <article
              key={project.title}
              className={`
                project-reveal
                project-delay-${Math.min(index + 1, 6)}
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-950
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_25px_70px_rgba(34,211,238,0.08)]
              `}
            >

              {/* ================================================= */}
              {/* IMAGE */}
              {/* ================================================= */}

              <div className="relative h-56 overflow-hidden bg-slate-900">

                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/20
                    to-transparent
                    opacity-80
                  "
                />


                {/* Top Gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-400/10
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />


                {/* Project Number */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-slate-950/80
                    backdrop-blur-md
                    border
                    border-slate-700
                  "
                >

                  <span className="text-cyan-400 text-xs font-bold tracking-wider">
                    {project.number}
                  </span>

                </div>


                {/* Category */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    px-3
                    py-1.5
                    rounded-full
                    bg-cyan-400
                    text-slate-950
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                  "
                >
                  {project.category}
                </div>

              </div>


              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}

              <div className="flex flex-col flex-1 p-7">

                {/* Title */}

                <div className="flex items-start justify-between gap-4">

                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-bold
                      tracking-tight
                      text-white
                      leading-tight
                      group-hover:text-cyan-400
                      transition-colors
                      duration-300
                    "
                  >
                    {project.title}
                  </h3>


                  {/* Arrow */}

                  <div
                    className="
                      shrink-0
                      w-9
                      h-9
                      rounded-full
                      border
                      border-slate-800
                      flex
                      items-center
                      justify-center
                      text-gray-500
                      group-hover:text-cyan-400
                      group-hover:border-cyan-400/40
                      group-hover:rotate-45
                      transition-all
                      duration-300
                    "
                  >
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </div>

                </div>


                {/* Description */}

                <p
                  className="
                    mt-4
                    text-gray-400
                    text-sm
                    leading-7
                  "
                >
                  {project.description}
                </p>


                {/* ================================================= */}
                {/* TECHNOLOGIES */}
                {/* ================================================= */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-slate-900
                        border
                        border-slate-800
                        text-gray-400
                        text-xs
                        font-medium
                        group-hover:border-slate-700
                        group-hover:text-gray-300
                        transition-all
                        duration-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* ================================================= */}
                {/* FOOTER */}
                {/* ================================================= */}

                <div className="mt-auto pt-7">

                  <div className="h-px bg-slate-800 mb-5" />


                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2.5
                      text-sm
                      font-semibold
                      text-gray-300
                      hover:text-cyan-400
                      transition-colors
                      duration-300
                    "
                  >

                    <FaGithub className="text-lg" />

                    <span>
                      View Source
                    </span>

                    <FaArrowUpRightFromSquare
                      className="
                        text-[10px]
                        opacity-0
                        -translate-x-1
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                        duration-300
                      "
                    />

                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* ===================================================== */}
        {/* BOTTOM */}
        {/* ===================================================== */}

        <div className="project-reveal project-delay-6 flex justify-center mt-14">

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              border
              border-slate-800
              bg-slate-950/60
            "
          >

            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-sm text-gray-400">
              More projects coming soon
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;