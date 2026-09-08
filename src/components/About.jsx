import {
  FaLaptopCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";

import SectionWrapper from "./SectionWrapper";

const About = () => {
  const stats = [
    {
      number: "6+",
      title: "Projects",
    },
    {
      number: "15+",
      title: "Technologies",
    },
    {
      number: "100%",
      title: "Dedication",
    },
  ];

  return (
    <SectionWrapper>
      <section
        id="about"
        className="relative bg-slate-900 py-24 overflow-hidden"
      >

        {/* ================================================= */}
        {/* BACKGROUND EFFECTS */}
        {/* ================================================= */}

        <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-400/5 blur-3xl rounded-full"></div>

        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/5 blur-3xl rounded-full"></div>

        {/* Small decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/5 blur-[120px] rounded-full"></div>


        {/* ================================================= */}
        {/* ANIMATION STYLES */}
        {/* ================================================= */}

        <style>
          {`
            @keyframes aboutFadeUp {
              from {
                opacity: 0;
                transform: translateY(35px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes aboutFadeLeft {
              from {
                opacity: 0;
                transform: translateX(-40px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes aboutFadeRight {
              from {
                opacity: 0;
                transform: translateX(40px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes aboutScale {
              from {
                opacity: 0;
                transform: scale(0.92);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            .about-fade-up {
              opacity: 0;
              animation: aboutFadeUp 1s ease-out forwards;
            }

            .about-fade-left {
              opacity: 0;
              animation: aboutFadeLeft 1s ease-out forwards;
            }

            .about-fade-right {
              opacity: 0;
              animation: aboutFadeRight 1s ease-out forwards;
            }

            .about-scale {
              opacity: 0;
              animation: aboutScale 1s ease-out forwards;
            }

            .delay-1 {
              animation-delay: 0.2s;
            }

            .delay-2 {
              animation-delay: 0.5s;
            }

            .delay-3 {
              animation-delay: 0.8s;
            }

            .delay-4 {
              animation-delay: 1.1s;
            }

            .delay-5 {
              animation-delay: 1.4s;
            }

            .delay-6 {
              animation-delay: 1.7s;
            }

            .delay-7 {
              animation-delay: 2s;
            }

            .delay-8 {
              animation-delay: 2.3s;
            }

            @media (prefers-reduced-motion: reduce) {
              .about-fade-up,
              .about-fade-left,
              .about-fade-right,
              .about-scale {
                opacity: 1;
                animation: none;
              }
            }
          `}
        </style>


        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">


          {/* ================================================= */}
          {/* HEADING */}
          {/* ================================================= */}

          <div className="text-center mb-16">

            {/* Small heading */}
            <p
              className="about-fade-up
              text-cyan-400
              text-sm
              font-medium
              uppercase
              tracking-[0.3em]
              mb-4"
            >
              Get To Know Me
            </p>


            {/* Main heading */}
            <h2
              className="about-fade-up delay-1
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              text-white"
            >
              About{" "}
              <span className="text-cyan-400">
                Me
              </span>
            </h2>


            {/* Line */}
            <div
              className="about-scale delay-2
              w-20
              h-1
              bg-cyan-400
              rounded-full
              mx-auto
              mt-5"
            ></div>


            {/* Description */}
            <p
              className="about-fade-up delay-3
              text-gray-400
              text-base
              md:text-lg
              leading-8
              max-w-2xl
              mx-auto
              mt-6"
            >
              Passionate about building clean, responsive, and user-friendly
              web applications while continuously growing as a developer.
            </p>

          </div>


          {/* ================================================= */}
          {/* MAIN CONTENT */}
          {/* ================================================= */}

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">


            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}

            <div className="about-fade-left delay-4">

              {/* Label */}
              <div className="flex items-center gap-3 mb-5">

                <div
                  className="w-10 h-10
                  rounded-xl
                  bg-cyan-400/10
                  border border-cyan-400/20
                  flex items-center justify-center"
                >
                  <FaCode className="text-cyan-400" />
                </div>

                <span
                  className="text-cyan-400
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider"
                >
                  Who I Am
                </span>

              </div>


              {/* Title */}
              <h3
                className="text-3xl
                md:text-4xl
                font-bold
                text-white
                mb-6"
              >
                MERN Stack Developer
              </h3>


              {/* Paragraph 1 */}
              <p
                className="text-gray-300
                leading-8
                mb-6"
              >
                I'm Nihala, an aspiring MERN Stack Developer passionate about
                creating modern and engaging web applications. I enjoy turning
                ideas into responsive, interactive, and user-friendly digital
                experiences using React, Node.js, Express.js, MongoDB, and
                Tailwind CSS.
              </p>


              {/* Paragraph 2 */}
              <p
                className="text-gray-400
                leading-8"
              >
                I'm looking forward to starting my professional career,
                contributing to real-world projects, learning from experienced
                developers, and continuously improving my technical skills.
              </p>


              {/* ================================================= */}
              {/* WHAT I LOVE BUILDING */}
              {/* ================================================= */}

              <div
                className="about-fade-up delay-5
                mt-8
                p-5
                rounded-2xl
                bg-slate-950
                border border-slate-800
                hover:border-cyan-400/40
                hover:-translate-y-1
                transition-all
                duration-300"
              >

                <div className="flex items-start gap-4">

                  <div
                    className="w-10 h-10
                    shrink-0
                    rounded-lg
                    bg-cyan-400/10
                    flex items-center
                    justify-center"
                  >
                    <FaLaptopCode className="text-cyan-400" />
                  </div>


                  <div>

                    <h4
                      className="text-white
                      font-semibold
                      mb-1"
                    >
                      What I Love Building
                    </h4>

                    <p
                      className="text-gray-400
                      text-sm
                      leading-6"
                    >
                      Responsive websites, full-stack applications,
                      intuitive user interfaces, and practical solutions
                      to real-world problems.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* RIGHT SIDE */}
            {/* ================================================= */}

            <div className="space-y-5">


              {/* ================================================= */}
              {/* MERN CARD */}
              {/* ================================================= */}

              <div
                className="about-fade-right delay-4
                group
                bg-slate-950
                border border-slate-800
                rounded-2xl
                p-6
                hover:border-cyan-400/50
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.06)]
                transition-all
                duration-500"
              >

                <div className="flex items-center gap-5">

                  <div
                    className="w-14 h-14
                    shrink-0
                    rounded-xl
                    bg-cyan-400/10
                    border border-cyan-400/20
                    flex items-center
                    justify-center
                    group-hover:bg-cyan-400
                    transition-all
                    duration-300"
                  >
                    <FaLaptopCode
                      className="text-2xl
                      text-cyan-400
                      group-hover:text-slate-950
                      transition-colors"
                    />
                  </div>


                  <div>

                    <p
                      className="text-cyan-400
                      text-xs
                      uppercase
                      tracking-wider
                      mb-1"
                    >
                      Specialization
                    </p>

                    <h4
                      className="text-xl
                      font-semibold
                      text-white"
                    >
                      MERN Stack Development
                    </h4>

                    <p
                      className="text-gray-400
                      text-sm
                      mt-1"
                    >
                      MongoDB • Express.js • React.js • Node.js
                    </p>

                  </div>

                </div>

              </div>


              {/* ================================================= */}
              {/* EDUCATION */}
              {/* ================================================= */}

              <div
                className="about-fade-right delay-5
                bg-slate-950
                border border-slate-800
                rounded-2xl
                p-6
                hover:border-cyan-400/50
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.06)]
                transition-all
                duration-500"
              >

                <div className="flex items-start gap-5">

                  <div
                    className="w-14 h-14
                    shrink-0
                    rounded-xl
                    bg-cyan-400/10
                    border border-cyan-400/20
                    flex items-center
                    justify-center"
                  >
                    <FaGraduationCap
                      className="text-2xl
                      text-cyan-400"
                    />
                  </div>


                  <div className="flex-1">

                    <p
                      className="text-cyan-400
                      text-xs
                      uppercase
                      tracking-wider
                      mb-4"
                    >
                      Education
                    </p>


                    {/* MCA */}

                    <div>

                      <h4
                        className="text-lg
                        font-semibold
                        text-white"
                      >
                        Master of Computer Applications
                        <span className="text-cyan-400">
                          {" "} (MCA)
                        </span>
                      </h4>

                      <p
                        className="text-gray-400
                        text-sm
                        mt-2
                        leading-6"
                      >
                        Vidya Academy of Science and Technology,
                        Thalakkottukara
                        <br />
                        KTU University
                      </p>

                    </div>


                    {/* Divider */}

                    <div
                      className="border-t
                      border-slate-800
                      my-5"
                    ></div>


                    {/* BSc */}

                    <div>

                      <h4
                        className="text-lg
                        font-semibold
                        text-white"
                      >
                        Bachelor of Science in
                        <br className="sm:hidden" />
                        {" "}Computer Science
                      </h4>

                      <p
                        className="text-gray-400
                        text-sm
                        mt-2
                        leading-6"
                      >
                        Little Flower College, Mammiyoor,
                        Guruvayoor
                        <br />
                        Calicut University
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* ================================================= */}
              {/* LOCATION */}
              {/* ================================================= */}

              <div
                className="about-fade-right delay-6
                group
                bg-slate-950
                border border-slate-800
                rounded-2xl
                p-6
                hover:border-cyan-400/50
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.06)]
                transition-all
                duration-500"
              >

                <div className="flex items-center gap-5">

                  <div
                    className="w-14 h-14
                    shrink-0
                    rounded-xl
                    bg-cyan-400/10
                    border border-cyan-400/20
                    flex items-center
                    justify-center
                    group-hover:bg-cyan-400
                    transition-all
                    duration-300"
                  >
                    <FaMapMarkerAlt
                      className="text-xl
                      text-cyan-400
                      group-hover:text-slate-950
                      transition-colors"
                    />
                  </div>


                  <div>

                    <p
                      className="text-cyan-400
                      text-xs
                      uppercase
                      tracking-wider
                      mb-1"
                    >
                      Based In
                    </p>

                    <h4
                      className="text-xl
                      font-semibold
                      text-white"
                    >
                      Thrissur, Kerala, India
                    </h4>

                    <p
                      className="text-gray-400
                      text-sm
                      mt-1"
                    >
                      Open to professional opportunities
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* STATISTICS */}
          {/* ================================================= */}

          <div
            className="grid
            grid-cols-1
            sm:grid-cols-3
            gap-5
            mt-16"
          >

            {stats.map((item, index) => (

              <div
                key={index}
                className={`about-scale delay-${7 + index}
                group
                relative
                bg-slate-950
                border border-slate-800
                rounded-2xl
                p-7
                text-center
                hover:border-cyan-400/50
                hover:-translate-y-2
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.06)]
                transition-all
                duration-500`}
              >

                {/* Top Accent */}

                <div
                  className="absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  w-10
                  h-0.5
                  bg-cyan-400
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300"
                ></div>


                <h3
                  className="text-4xl
                  md:text-5xl
                  font-bold
                  text-cyan-400"
                >
                  {item.number}
                </h3>


                <p
                  className="text-gray-400
                  text-sm
                  mt-2"
                >
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