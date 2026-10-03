import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#f8f7f4] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >

      <div className="mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-[2.5rem] bg-[#17151f]">

          <div className="grid lg:grid-cols-[1.2fr_.8fr]">

            <div className="p-8 sm:p-12 lg:p-16">

              <p className="text-xs font-bold tracking-[0.3em] text-purple-300">
                HAVE A PROJECT IN MIND?
              </p>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Let's build
                <br />
                something
                <br />
                <span className="text-purple-300">
                  great together.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                I'm open to web development opportunities,
                freelance projects and collaborations. If you have
                an idea or opportunity, I'd love to hear from you.
              </p>

              <a
                href="mailto:nihalabinthsalih@gmail.com"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#17151f] transition hover:bg-purple-200"
              >
                <FaEnvelope />
                nihalabinthsalih@gmail.com
              </a>

            </div>

            <div className="flex flex-col justify-end bg-white/5 p-8 sm:p-12 lg:p-10">

              <p className="mb-5 text-[10px] font-bold tracking-[0.25em] text-gray-500">
                FIND ME ONLINE
              </p>

              <div className="space-y-2">

                <a
                  href="https://www.linkedin.com/in/nihala-ms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4 text-white transition hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <FaLinkedin />
                    LinkedIn
                  </span>

                  <FiArrowUpRight />
                </a>

                <a
                  href="https://github.com/Nihala-ms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4 text-white transition hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <FaGithub />
                    GitHub
                  </span>

                  <FiArrowUpRight />
                </a>

                <a
                  href="mailto:nihalabinthsalih@gmail.com"
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4 text-white transition hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <FaEnvelope />
                    Email
                  </span>

                  <FiArrowUpRight />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
