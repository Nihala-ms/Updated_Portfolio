import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/prj1.png";
import project5 from "../assets/images/prj2.png";
import project6 from "../assets/images/prj3.png";
import project7 from "../assets/images/project5.png";
import project8 from "../assets/images/project6.png";
import project9 from "../assets/images/project7.png";
import project10 from "../assets/images/project8.png";

const projects = [
  // =========================
  // 01 - SMARTMONEY
  // =========================
  {
    number: "01",
    title: "SmartMoney",
    category: "FINANCE APPLICATION",
    image: project7,
    description:
      "A personal finance management application for tracking transactions, budgets and financial activity.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live:
      "https://smart-money-client-iyc2b7gu9-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms",
  },

  // =========================
  // 02 - TRIPMATE
  // =========================
  {
    number: "02",
    title: "TripMate",
    category: "TRAVEL APPLICATION",
    image: project10,
    description:
      "A modern travel planning application designed to help users organize and explore trips.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    live:
      "https://tripmate-qtzhvhlk8-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms",
  },

  // =========================
  // 03 - INSURANCE
  // =========================
  {
    number: "03",
    title: "Insurance Management System",
    category: "FULL STACK",
    image: project4,
    description:
      "A full-stack insurance platform for managing policies, users and claims.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live:
      "https://insurance-management-systems-kqop-f3mhvgceb-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms",
  },

  // =========================
  // 04 - WEATHER APP
  // =========================
  {
    number: "04",
    title: "Weather App",
    category: "WEB APPLICATION",
    image: project9,
    description:
      "A responsive weather application that displays real-time weather information using a weather API.",
    tech: ["React", "JavaScript", "API"],
    live:
      "https://whether-gpriuc7kw-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms",
  },

  // =========================
  // 05 - CINESPOT
  // =========================
  {
    number: "05",
    title: "CineSpot",
    category: "MOVIE APPLICATION",
    image: project8,
    description:
      "A modern movie discovery application where users can explore and discover movies through a clean interface.",
    tech: ["React", "JavaScript", "API"],
    live:
      "https://cine-spot-17ct2d75v-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms",
  },

  // =========================
  // 06 - RECIPE
  // =========================
  {
    number: "06",
    title: "Recipe Website",
    category: "WEB APPLICATION",
    image: project5,
    description:
      "A recipe platform where users can discover recipes and explore ingredients.",
    tech: ["React", "JavaScript", "API"],
    github: "https://github.com/Nihala-ms",
  },

  // =========================
  // 07 - ECOMMERCE
  // =========================
  {
    number: "07",
    title: "E-Commerce Website",
    category: "E-COMMERCE",
    image: project6,
    description:
      "A responsive shopping platform with products, details and cart functionality.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Nihala-ms",
  },

  // =========================
  // 08 - CAKE GALLERY
  // =========================
  {
    number: "08",
    title: "Cake Gallery",
    category: "FRONTEND",
    image: project3,
    description:
      "A modern bakery website designed to showcase cakes and desserts.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Nihala-ms",
  },

  // =========================
  // 09 - ASPIRE HUB
  // =========================
  {
    number: "09",
    title: "Aspire Hub",
    category: "JOB PORTAL",
    image: project1,
    description:
      "A job portal for posting, searching and filtering job opportunities.",
    tech: ["Python", "Django", "MySQL", "HTML"],
    github: "https://github.com/Nihala-ms",
  },

  // =========================
  // 10 - NOVENA CARE
  // =========================
  {
    number: "10",
    title: "Novena Care",
    category: "HEALTHCARE",
    image: project2,
    description:
      "A healthcare platform designed to provide a simple digital experience for patients and healthcare services.",
    tech: ["Python", "Django", "SQLite", "HTML"],
    github: "https://github.com/Nihala-ms",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#6d28d9]">
              SELECTED WORK
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Things I've
              <br />
              <span className="text-[#6d28d9]">
                built.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-gray-500">
            A collection of projects representing my journey through
            frontend, backend and full-stack development.
          </p>

        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-[#f8f7f4] transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/10"
            >

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Number */}
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-widest">
                  {project.number}
                </span>

                {/* Category */}
                <span className="absolute bottom-5 left-5 rounded-full bg-[#17151f]/80 px-3 py-1.5 text-[9px] font-bold tracking-widest text-white backdrop-blur">
                  {project.category}
                </span>

                {/* Live Badge */}
                {project.live && (
                  <span className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-bold tracking-widest text-green-600 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    LIVE
                  </span>
                )}

              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">

                <div className="flex items-start justify-between gap-5">

                  <div>
                    <p className="text-[9px] font-bold tracking-[0.2em] text-gray-400">
                      PROJECT {project.number}
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#6d28d9] shadow-sm transition group-hover:bg-[#6d28d9] group-hover:text-white">
                    <FiArrowUpRight />
                  </div>

                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-gray-200 pt-5">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold transition hover:text-[#6d28d9]"
                  >
                    <FaGithub />
                    GitHub
                    <FiArrowUpRight />
                  </a>

                  {/* Live Demo */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#5b21b6] hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
