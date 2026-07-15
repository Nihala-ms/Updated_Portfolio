import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Aspire Hub",
    image: project1,
    description:
      "Job Posting and Search with Specifications is a feature that allows employers to post job vacancies with details. It enables job seekers to search and filter jobs based on their preferences, helping them quickly find suitable opportunities.",
    technologies: ["Python", "Django", "Mysql", "Html"],
  },
  {
    title: "Novena care",
    image: project2,
    description:
      "Novena Care provides compassionate, high-quality healthcare services focused on improving patient well-being through professional care, innovation, and a patient-first approach.",
    technologies: ["Python", "Django", "Mysql", "Html"],
  },
  {
    title: "Cake Gallery",
    image: project3,
    description:
      "Cake Gallery is a premium bakery that creates custom cakes, pastries, and desserts for all occasions, combining quality ingredients, artistic designs, and outstanding customer service.",
    technologies: [
  "JavaScript",
  "React.js",
  "Fetch API",
],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Some of the projects I've built while learning and improving my
            full-stack development skills.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;