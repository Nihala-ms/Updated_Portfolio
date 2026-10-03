import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#17151f] px-5 py-10 text-white sm:px-8 lg:px-12">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <button
              onClick={backToTop}
              className="text-4xl font-black tracking-tight"
            >
              N<span className="text-purple-400">.</span>
            </button>

            <p className="mt-2 text-sm text-gray-500">
              Designing & building digital experiences with purpose.
            </p>

          </div>

          <div className="flex gap-3">

            <a
              href="https://github.com/Nihala-ms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nihala-ms/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-purple-400 hover:bg-purple-400 hover:text-white"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © {new Date().getFullYear()} Nihala. All rights reserved.
          </span>

          <button
            onClick={backToTop}
            className="text-left transition hover:text-white sm:text-right"
          >
            Back to top ↑
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
