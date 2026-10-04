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
      className="relative scroll-mt-24 overflow-hidden bg-[#0f0d14] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#17151f] shadow-2xl shadow-black/30">

          <div className="grid lg:grid-cols-[1.2fr_.8fr]">

            {/* Left */}
            <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">

              {/* Decorative circle */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-600/10 blur-2xl" />

              <div className="relative">

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-purple-400" />

                  <p className="text-xs font-bold tracking-[0.3em] text-purple-300">
                    HAVE A PROJECT IN MIND?
                  </p>
                </div>

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
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#17151f] transition duration-300 hover:-translate-y-1 hover:bg-purple-200 hover:shadow-lg hover:shadow-purple-900/20"
                >
                  <FaEnvelope />

                  <span>
                    nihalabinthsalih@gmail.com
                  </span>

                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

              </div>

            </div>

            {/* Right */}
            <div className="flex flex-col justify-end border-t border-white/10 bg-white/[0.02] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-10">

              <p className="mb-5 text-[10px] font-bold tracking-[0.25em] text-gray-500">
                FIND ME ONLINE
              </p>

              <div className="space-y-3">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nihala-ms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <FaLinkedin />
                    </span>

                    <span className="text-sm font-semibold">
                      LinkedIn
                    </span>
                  </span>

                  <FiArrowUpRight className="text-gray-500 transition group-hover:text-purple-300" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Nihala-ms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-gray-300">
                      <FaGithub />
                    </span>

                    <span className="text-sm font-semibold">
                      GitHub
                    </span>
                  </span>

                  <FiArrowUpRight className="text-gray-500 transition group-hover:text-purple-300" />
                </a>

                {/* Email */}
                <a
                  href="mailto:nihalabinthsalih@gmail.com"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-white transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                      <FaEnvelope />
                    </span>

                    <span className="text-sm font-semibold">
                      Email
                    </span>
                  </span>

                  <FiArrowUpRight className="text-gray-500 transition group-hover:text-purple-300" />
                </a>

              </div>

              {/* Small CTA */}
              <div className="mt-8 rounded-2xl border border-purple-500/10 bg-purple-500/5 p-5">
                <p className="text-xs font-semibold text-purple-300">
                  Let's create something meaningful.
                </p>

                <p className="mt-2 text-[11px] leading-5 text-gray-500">
                  Available for web development opportunities,
                  freelance work and collaborations.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
