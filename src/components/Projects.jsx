import { FaGithub } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";

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
  {
    number: "01",
    title: "SmartMoney",
    category: "FINANCE • FULL STACK",
    image: project7,
    featured: true,
    description:
      "A personal finance management application for tracking transactions, budgets and financial activity. It helps users organize spending and maintain better control over their finances.",
    features: [
      "Authentication",
      "Transaction Tracking",
      "Budget Management",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live:
      "https://smart-money-client-iyc2b7gu9-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms/smart-money",
  },

  {
    number: "02",
    title: "Insurance Management System",
    category: "INSURANCE • MERN",
    image: project4,
    featured: true,
    description:
      "A full-stack insurance platform for managing policies, users and claims. It provides an organized digital solution for handling insurance-related activities efficiently.",
    features: [
      "Policy Management",
      "Claims Management",
      "User Authentication",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live:
      "https://insurance-management-systems-kqop-f3mhvgceb-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms/insurance-management-systems",
  },

  {
    number: "03",
    title: "TripMate",
    category: "TRAVEL • REACT",
    image: project10,
    featured: true,
    description:
      "A modern travel planning application designed to help users organize and explore trips. It provides a simple experience for managing travel plans and discovering destinations.",
    features: [
      "Trip Planning",
      "Destination Discovery",
      "Responsive UI",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript"],
    live:
      "https://tripmate-apps-gabtqr3wl-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms/tripmate",
  },

  {
    number: "04",
    title: "CineSpot",
    category: "MOVIES • REACT",
    image: project8,
    description:
      "A modern movie discovery application where users can explore and discover movies through a clean interface. It makes browsing movies simple, engaging and easy to navigate.",
    features: [
      "Movie Discovery",
      "API Integration",
      "Responsive Design",
    ],
    tech: ["React", "JavaScript", "API"],
    live:
      "https://cine-spot-17ct2d75v-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms/CineSpot",
  },

  {
    number: "05",
    title: "Weather App",
    category: "WEATHER • API",
    image: project9,
    description:
      "A responsive weather application that displays real-time weather information using a weather API. Users can quickly check current weather conditions through a clean interface.",
    features: [
      "Live Weather Data",
      "API Integration",
      "Responsive Layout",
    ],
    tech: ["React", "JavaScript", "API"],
    live:
      "https://whether-gpriuc7kw-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms/whether-app",
  },

  {
    number: "06",
    title: "Recipe Website",
    category: "RECIPES • WEB APP",
    image: project5,
    description:
      "A recipe platform where users can discover recipes and explore ingredients. The interface makes browsing and finding different recipes simple and enjoyable.",
    features: [
      "Recipe Discovery",
      "Ingredient Details",
      "Responsive UI",
    ],
    tech: ["React", "JavaScript", "API"],
    github: "https://github.com/Nihala-ms",
  },

  {
    number: "07",
    title: "E-Commerce Website",
    category: "SHOPPING • FRONTEND",
    image: project6,
    description:
      "A responsive shopping platform with products, details and cart functionality. It provides a clean and user-friendly shopping experience for browsing products.",
    features: [
      "Product Listing",
      "Product Details",
      "Shopping Cart",
    ],
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Nihala-ms/e-cart",
  },

  {
    number: "08",
    title: "Cake Gallery",
    category: "BAKERY • FRONTEND",
    image: project3,
    description:
      "A modern bakery website designed to showcase cakes and desserts. It focuses on attractive presentation, simple navigation and a pleasant browsing experience.",
    features: [
      "Product Showcase",
      "Modern UI",
      "Responsive Design",
    ],
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Nihala-ms",
  },

  {
    number: "09",
    title: "Aspire Hub",
    category: "JOB PORTAL • DJANGO",
    image: project1,
    description:
      "A job portal for posting, searching and filtering job opportunities. It helps job seekers explore relevant opportunities through an organized job-search experience.",
    features: [
      "Job Posting",
      "Job Search",
      "Job Filtering",
    ],
    tech: ["Python", "Django", "MySQL", "HTML"],
    github: "https://github.com/Nihala-ms",
  },

  {
    number: "10",
    title: "Novena Care",
    category: "HEALTHCARE • DJANGO",
    image: project2,
    description:
      "A healthcare platform designed to provide a simple digital experience for patients and healthcare services. It brings essential healthcare features together in an accessible platform.",
    features: [
      "Patient Services",
      "Healthcare Management",
      "Responsive UI",
    ],
    tech: ["Python", "Django", "SQLite", "HTML"],
    github: "https://github.com/Nihala-ms/main_project",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-[#0f0d14] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-purple-900/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-violet-900/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">

          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#a78bfa]">
              SELECTED WORK
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Things I've
              <br />
              <span className="text-[#a78bfa]">built.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-lg text-base leading-8 text-gray-400">
              A collection of web applications built across frontend,
              backend and full-stack development, focusing on practical
              features, responsive interfaces and real-world functionality.
            </p>
          </div>

        </div>

        {/* =====================================================
            PROJECT STATS
        ====================================================== */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-y border-white/[0.08] py-5">

          <div>
            <span className="text-xl font-black text-white">10+</span>
            <span className="ml-2 text-[10px] font-bold tracking-[0.15em] text-gray-500">
              PROJECTS
            </span>
          </div>

          <div>
            <span className="text-xl font-black text-white">4+</span>
            <span className="ml-2 text-[10px] font-bold tracking-[0.15em] text-gray-500">
              LIVE APPS
            </span>
          </div>

          <div>
            <span className="text-xl font-black text-white">3</span>
            <span className="ml-2 text-[10px] font-bold tracking-[0.15em] text-gray-500">
              FULL STACK
            </span>
          </div>

        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}
        <div className="mt-12 grid items-stretch gap-7 md:grid-cols-2 lg:gap-8">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#17151f] transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/30 hover:shadow-[0_25px_70px_rgba(109,40,217,0.14)]"
            >

              {/* =================================================
                  PROJECT IMAGE
              ================================================== */}
              <div className="relative aspect-[16/9] shrink-0 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Project Number */}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] text-white backdrop-blur-md">
                  {project.number}
                </span>

                {/* Featured */}
                {project.featured && (
                  <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-purple-300/20 bg-purple-500/20 px-3 py-1.5 text-[8px] font-bold tracking-[0.18em] text-purple-200 backdrop-blur-md">
                    ★ FEATURED
                  </span>
                )}

                {/* Live */}
                {project.live && (
                  <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-green-400/20 bg-black/55 px-3 py-1.5 text-[8px] font-bold tracking-[0.18em] text-green-400 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                    LIVE
                  </span>
                )}

                {/* Category */}
                <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-[8px] font-bold tracking-[0.15em] text-gray-200 backdrop-blur-md">
                  {project.category}
                </span>

              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Title */}
                <div className="flex items-start justify-between gap-4">

                  <div className="min-w-0">

                    <p className="text-[8px] font-bold tracking-[0.2em] text-gray-600">
                      PROJECT {project.number}
                    </p>

                    <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                      {project.title}
                    </h3>

                  </div>

                  {/* Arrow */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-purple-300 transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-[#6d28d9] group-hover:text-white">
                    <FiArrowUpRight size={17} />
                  </div>

                </div>

                {/* Description */}
                <p className="mt-3 text-[13px] leading-6 text-gray-400 sm:text-sm">
                  {project.description}
                </p>

                {/* =================================================
                    KEY FEATURES
                ================================================== */}
                <div className="mt-5">

                  <p className="mb-2 text-[8px] font-bold tracking-[0.2em] text-gray-600">
                    KEY FEATURES
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-2">

                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1.5 text-[10px] font-medium text-gray-400"
                      >
                        <FiCheck
                          className="text-purple-400"
                          size={12}
                        />
                        {feature}
                      </span>
                    ))}

                  </div>

                </div>

                {/* =================================================
                    TECHNOLOGIES
                ================================================== */}
                <div className="mt-5 flex flex-wrap gap-1.5">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[9px] font-semibold text-gray-400 transition duration-300 group-hover:border-purple-500/20 group-hover:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* =================================================
                    ACTIONS
                ================================================== */}
                <div className="mt-auto flex items-center gap-2.5 border-t border-white/[0.08] pt-5">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-[10px] font-bold text-gray-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-300 sm:text-xs"
                  >
                    <FaGithub size={13} />
                    GitHub
                    <FiArrowUpRight size={12} />
                  </a>

                  {/* Live Demo */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#6d28d9] px-3.5 py-2 text-[10px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7c3aed] hover:shadow-lg hover:shadow-purple-900/30 sm:text-xs"
                    >
                      <FiExternalLink size={13} />
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
