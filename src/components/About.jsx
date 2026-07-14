import { FaCode, FaLaptopCode, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
const About = () => {
  const stats = [
    {
      number: "5+",
      title: "Projects",
    },
    {
      number: "10+",
      title: "Technologies",
    },
    {
      number: "100%",
      title: "Dedication",
    },
  ];

  return (
        <SectionWrapper>

    <section id="about" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Passionate about building clean, responsive, and user-friendly web
            applications while continuously learning new technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              MERN Stack Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              I'm Nihala, an aspiring MERN Stack Developer with a passion for
              creating modern web applications. I enjoy turning ideas into
              responsive, interactive, and user-friendly websites using React,
              Node.js, Express, MongoDB, and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-8">
              My goal is to work as a professional Full Stack Developer,
              contribute to impactful projects, and continuously improve my
              skills through real-world experience.
            </p>

          </div>

          {/* Right Side */}
          <div className="grid gap-6">

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition">

              <div className="flex items-center gap-4">

                <div className="bg-cyan-500 p-4 rounded-xl">
                  <FaLaptopCode className="text-2xl text-black" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    Mearn Stack Development
                  </h4>

                  <p className="text-gray-400">
                    React • Node.js • Express • MongoDB
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition">

              <div className="flex items-center gap-4">

                <div className="bg-cyan-500 p-4 rounded-xl">
                  <FaGraduationCap className="text-2xl text-black" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    Education
                  </h4>

                  <p className="text-gray-400">
                    Master of Computer Application
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition">

              <div className="flex items-center gap-4">

                <div className="bg-cyan-500 p-4 rounded-xl">
                  <FaMapMarkerAlt className="text-2xl text-black" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Kerala, India
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-cyan-400 transition"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-3">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
        </SectionWrapper>

  );
};

export default About;