import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project, internship, or job opportunity? Feel free to contact me.
            I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="">

          {/* Left */}
          <div className="space-y-6">

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-400 transition gap-2">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-400">
                    nihalabinthsalih@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-400 transition">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400 text-2xl" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-400">
                    +91 9605947534
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-400 transition">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-400">
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/Nihala-ms"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-black transition flex items-center justify-center text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nihala-ms/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-black transition flex items-center justify-center text-xl"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>


        </div>

      </div>
    </section>
  );
};

export default Contact;