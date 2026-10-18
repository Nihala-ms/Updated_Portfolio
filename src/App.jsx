
import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Compass,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Search,
  Send,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

import profile from "./assets/images/profile.jpeg";

/* =========================================================
   BACKEND CONFIGURATION
========================================================= */

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "https://portfolio-updated-chcaihqwn-nihala-ms-projects.vercel.app"
).replace(/\/+$/, "");

async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message ||
        data.error ||
        `Request failed with status ${response.status}`
    );
  }

  return data;
}

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Insurance Management System",
    type: "Full-stack application",
    description:
      "Manage insurance policies, user accounts, and claim submissions through dedicated user and admin workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: "shield",
    accent: "from-violet-100 via-fuchsia-50 to-white",
    live: "https://insurance-management-systems-kqop-f3mhvgceb-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms/insurance-management-systems",
  },
  {
    number: "02",
    title: "SmartMoney",
    type: "Personal finance",
    description:
      "A finance dashboard for organizing transactions, setting budgets, and understanding spending habits.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: "money",
    accent: "from-emerald-100 via-teal-50 to-white",
    live: "https://smart-money-client-iyc2b7gu9-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms/smart-money",
  },
  {
    number: "03",
    title: "TripMate",
    type: "Travel planning",
    description:
      "A travel planning experience for organizing trips and exploring destinations in a responsive interface.",
    tech: ["React", "Tailwind CSS", "REST API"],
    icon: "travel",
    accent: "from-sky-100 via-indigo-50 to-white",
    live: "https://tripmate-apps-gabtqr3wl-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms/tripmate",
  },
  {
    number: "04",
    title: "CineSpot",
    type: "Movie discovery",
    description:
      "A movie discovery interface designed to make browsing film information simple and engaging.",
    tech: ["React", "JavaScript", "CSS"],
    icon: "movie",
    accent: "from-rose-100 via-orange-50 to-white",
    live: "https://cine-spot-17ct2d75v-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms/CineSpot",
  },
  {
    number: "05",
    title: "Weather App",
    type: "API integration",
    description:
      "A responsive weather application that retrieves weather information from an external API.",
    tech: ["React", "JavaScript", "Weather API"],
    icon: "weather",
    accent: "from-amber-100 via-yellow-50 to-white",
    live: "https://whether-gpriuc7kw-nihala-ms-projects.vercel.app/",
    github: "https://github.com/Nihala-ms/whether-app",
  },
  {
    number: "06",
    title: "Novena Care+",
    type: "Healthcare platform",
    description:
      "A healthcare platform with appointment workflows, doctor approval, e-prescriptions, and pharmacy features.",
    tech: ["Python", "Django", "SQLite"],
    icon: "health",
    accent: "from-pink-100 via-violet-50 to-white",
    live: "",
    github: "https://github.com/Nihala-ms/telemedicine",
  },
  {
    number: "07",
    title: "CareerPrep AI",
    type: "AI interview preparation",
    description:
      "An AI-powered interview practice application that generates developer interview questions, evaluates answers, and provides a final performance score.",
    tech: ["React", "Node.js", "Express", "Google GenAI"],
    icon: "career",
    accent: "from-violet-100 via-indigo-50 to-white",
    live: "https://careerprep-ai-app.vercel.app/",
    github: "https://github.com/Nihala-ms/careerprep-ai",
  },
  {
    number: "08",
    title: "Cake Gallery",
    type: "Cake showcase",
    description:
      "A responsive cake gallery for browsing cake designs through an attractive interface with JavaScript and API-based functionality.",
    tech: ["React", "JavaScript", "Fetch API"],
    icon: "cake",
    accent: "from-pink-100 via-rose-50 to-white",
    live: "",
    github: "",
  },
  {
    number: "09",
    title: "Task Manager",
    type: "Productivity app",
    description:
      "A task management application for creating tasks, organizing priorities, tracking due dates, and managing active and completed work.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    icon: "task",
    accent: "from-sky-100 via-cyan-50 to-white",
    live: "https://neon-task-manager-app.vercel.app/",
    github: "https://github.com/Nihala-ms/neon-task-manager",
  },
  {
    number: "10",
    title: "Aspire Hub",
    type: "Job portal",
    description:
      "A job portal that helps users explore job opportunities through job listings, search, and filtering features.",
    tech: ["Python", "Django", "MySQL", "HTML", "CSS"],
    icon: "aspire",
    accent: "from-emerald-100 via-teal-50 to-white",
    live: "",
    github: "",
  },
  {
    number: "11",
    title: "E-commerce Website",
    type: "Online shopping",
    description:
      "An e-commerce website with product browsing and a user-friendly shopping interface.",
    tech: ["React", "JavaScript", "CSS"],
    icon: "ecommerce",
    accent: "from-amber-100 via-orange-50 to-white",
    live: "",
    github: "",
  },
  {
    number: "12",
    title: "Recipe App",
    type: "Recipe discovery",
    description:
      "A recipe application for exploring food ideas and displaying recipe information through an interactive interface.",
    tech: ["React", "JavaScript", "REST API"],
    icon: "recipe",
    accent: "from-lime-100 via-green-50 to-white",
    live: "",
    github: "",
  },
];

/* =========================================================
   DEVELOPER JOURNEY
========================================================= */

const journey = [
  {
    year: "2026",
    tag: "Experience",
    title: "MERN Stack Internship",
    place: "6 months of practical experience",
    description:
      "Practiced building web features, working with APIs, debugging issues, and improving responsive interfaces.",
  },
  {
    year: "2026",
    tag: "Training",
    title: "MERN Stack Development",
    place: "Luminar Technolab",
    description:
      "Focused on React, Node.js, Express, MongoDB, REST APIs, and full-stack application development.",
  },
  {
    year: "2025",
    tag: "Education",
    title: "Master of Computer Applications",
    place: "Vidya Academy of Science and Technology",
    description:
      "Completed postgraduate studies in computer applications and software development.",
  },
  {
    year: "2023",
    tag: "Education",
    title: "BSc Computer Science",
    place: "Little Flower College, Guruvayoor",
    description:
      "Built a foundation in programming, computer science concepts, and software development.",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces that feel clear and responsive.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "APIs, server logic, and data handling.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & workflow",
    description: "Tools used across the build process.",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Python",
      "Django",
      "Responsive Design",
    ],
  },
];

const techStack = [
  { name: "React", Icon: FaReact, color: "text-cyan-600" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-600" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-emerald-600" },
  { name: "JavaScript", Icon: SiJavascript, color: "text-amber-500" },
  { name: "Express", Icon: SiExpress, color: "text-slate-600" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "text-sky-500" },
];

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({ kicker, title, text, number }) {
  return (
    <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-violet-600">
          <span className="h-px w-7 bg-violet-400" />
          {kicker}
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-[#2d2342] sm:text-4xl">
          {title}
        </h2>

        {text && (
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#786d89] sm:text-base">
            {text}
          </p>
        )}
      </div>

      {number && (
        <span className="hidden font-mono text-sm text-violet-300 sm:block">
          {number}
        </span>
      )}
    </div>
  );
}

/* =========================================================
   PROJECT ICONS
========================================================= */

function ProjectIcon({ type }) {
  if (type === "shield") return <Layers3 size={34} />;
  if (type === "money") return <BriefcaseBusiness size={34} />;
  if (type === "travel") return <Compass size={34} />;
  if (type === "movie") return <Code2 size={34} />;
  if (type === "weather") return <Sparkles size={34} />;
  if (type === "health") return <Check size={34} />;
  if (type === "career") return <Bot size={34} />;
  if (type === "cake") return <Sparkles size={34} />;
  if (type === "task") return <Check size={34} />;
  if (type === "aspire") return <GraduationCap size={34} />;
  if (type === "ecommerce") return <BriefcaseBusiness size={34} />;
  if (type === "recipe") return <Compass size={34} />;

  return <MessageCircle size={34} />;
}

/* =========================================================
   PORTFOLIO TWIN - BACKEND CONNECTED
========================================================= */

function PortfolioAssistant({ onClose }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm Nihala's Portfolio Twin. Ask me about her skills, projects, education, or internship experience.",
    },
  ]);


async function sendMessage(text = question) {
  const clean = text.trim();

  if (!clean || loading) return;

  setError("");
  setQuestion("");

  setMessages((current) => [
    ...current,
    { role: "user", text: clean },
  ]);

  setLoading(true);

  try {
    const data = await apiRequest("/api/portfolio/chat", {
      method: "POST",
      body: JSON.stringify({
        message: clean,
      }),
    });

    if (typeof data.reply !== "string" || !data.reply.trim()) {
      throw new Error(
        "The server responded, but no AI reply was received."
      );
    }

    setMessages((current) => [
      ...current,
      { role: "assistant", text: data.reply.trim() },
    ]);
  } catch (err) {
    console.error("Portfolio Twin error:", err);

    setError(
      err.message ||
        "Unable to contact the AI assistant. Please try again."
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#211633]/40 p-4 backdrop-blur-sm">
      <div className="flex max-h-[86vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-violet-100 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
              <Bot size={22} />
            </div>

            <div>
              <h3 className="font-bold text-[#302342]">Portfolio Twin</h3>
              <p className="text-xs text-[#8c809c]">
                Ask about my developer profile
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close assistant"
            className="rounded-xl p-2 text-[#786d89] hover:bg-violet-50"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "bg-violet-600 text-white"
                    : "border border-violet-100 bg-violet-50 text-[#554967]"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3 text-sm text-violet-700">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500" />
                  Portfolio Twin is thinking...
                </span>
              </div>
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs leading-5 text-rose-700"
            >
              {error}
              <button
                onClick={() => setError("")}
                className="ml-2 font-bold underline"
              >
                Dismiss
              </button>
            </div>
          )}

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2">
              {[
                "What are her skills?",
                "Show me projects",
                "Tell me about her experience",
              ].map((item) => (
                <button
                  key={item}
                  disabled={loading}
                  onClick={() => sendMessage(item)}
                  className="rounded-full border border-violet-200 px-3 py-2 text-xs text-violet-700 hover:bg-violet-50 disabled:opacity-50"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
          className="flex gap-2 border-t border-violet-100 p-4"
        >
          <input
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Ask about Nihala..."
            disabled={loading}
            className="min-w-0 flex-1 rounded-xl border border-violet-100 px-4 py-3 text-sm outline-none focus:border-violet-400 disabled:bg-gray-50"
          />

          <button
            type="submit"
            disabled={loading || !question.trim()}
            aria-label="Send question"
            className="rounded-xl bg-violet-600 p-3 text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </form>

        <p className="px-4 pb-3 text-center text-[10px] text-[#a398b1]">
          Connected to the Portfolio API
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

export default function App() {
  const [activePanel, setActivePanel] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [projectSearch, setProjectSearch] = useState("");
  const [projectFilter, setProjectFilter] = useState("All");

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactLoading, setContactLoading] = useState(false);
  const [contactStatus, setContactStatus] = useState({
    type: "",
    message: "",
  });

  const filters = ["All", "MERN", "React", "Python"];

  const visibleProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesFilter =
          projectFilter === "All" ||
          (projectFilter === "MERN" &&
            ["React", "Node.js", "Express", "MongoDB"].every((tech) =>
              project.tech.includes(tech)
            )) ||
          (projectFilter === "React" &&
            project.tech.includes("React")) ||
          (projectFilter === "Python" &&
            project.tech.includes("Python"));

        const search =
          `${project.title} ${project.type} ${project.description} ${project.tech.join(
            " "
          )}`.toLowerCase();

        return (
          matchesFilter &&
          search.includes(projectSearch.trim().toLowerCase())
        );
      }),
    [projectFilter, projectSearch]
  );

  function goTo(id) {
    if (id === "ai-twin") {
      setAssistantOpen(true);
      return;
    }

    setActivePanel(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  async function submitContact(event) {
    event.preventDefault();

    if (contactLoading) return;

    setContactLoading(true);
    setContactStatus({ type: "", message: "" });

    try {
      const data = await apiRequest("/api/portfolio/contact", {
        method: "POST",
        body: JSON.stringify({
          name: contact.name.trim(),
          email: contact.email.trim(),
          message: contact.message.trim(),
        }),
      });

      setContactStatus({
        type: "success",
        message:
          data.message ||
          "Your message was submitted successfully.",
      });

      setContact({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setContactStatus({
        type: "error",
        message: `${err.message}. Your message was not confirmed as submitted.`,
      });
    } finally {
      setContactLoading(false);
    }
  }

  const nav = [
    { id: "overview", label: "Overview", icon: Layers3 },
    { id: "project-lab", label: "Project Lab", icon: BriefcaseBusiness },
    { id: "developer-stack", label: "Developer Stack", icon: Terminal },
    { id: "journey-map", label: "Journey Map", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const featureTiles = [
    {
      id: "project-lab",
      code: "01",
      title: "Project Lab",
      desc: "Explore builds, tools, and live demos.",
      icon: BriefcaseBusiness,
      tag: "12 projects",
      tone: "bg-violet-50 text-violet-700",
    },
    {
      id: "developer-stack",
      code: "02",
      title: "Developer Stack",
      desc: "The technologies I use and keep learning.",
      icon: Terminal,
      tag: "MERN + more",
      tone: "bg-sky-50 text-sky-700",
    },
    {
      id: "journey-map",
      code: "03",
      title: "Journey Map",
      desc: "Education, training, and practical experience.",
      icon: GraduationCap,
      tag: "My journey",
      tone: "bg-emerald-50 text-emerald-700",
    },
    {
      id: "ai-twin",
      code: "04",
      title: "Portfolio Twin",
      desc: "Ask a question about my profile using the backend.",
      icon: Sparkles,
      tag: "AI assistant",
      tone: "bg-fuchsia-50 text-fuchsia-700",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#302342] selection:bg-violet-200">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .dashboard-grid {
          background-image:
            linear-gradient(rgba(139,92,246,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .soft-shadow {
          box-shadow: 0 18px 55px rgba(92, 66, 138, .08);
        }

        .float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        {/* DESKTOP SIDEBAR */}

        <aside className="sticky top-0 hidden h-screen w-[250px] shrink-0 flex-col border-r border-violet-100 bg-white/85 px-5 py-7 lg:flex">
          <button
            onClick={() => goTo("overview")}
            className="flex items-center gap-3 text-left"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-lg font-black text-white shadow-lg shadow-violet-200">
              N.
            </span>

            <span>
              <span className="block font-bold">Nihala M. S.</span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[.16em] text-[#9689a9]">
                Mern stack Developer
              </span>
            </span>
          </button>

          <div className="mt-10">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#a398b1]">
              Explore portfolio
            </p>

            <nav className="space-y-1">
              {nav.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => goTo(id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
                    activePanel === id
                      ? "bg-violet-600 font-semibold text-white shadow-md shadow-violet-200"
                      : "text-[#756985] hover:bg-violet-50 hover:text-violet-700"
                  }`}
                >
                  <Icon size={17} />
                  {label}
                  <ChevronRight size={14} className="ml-auto opacity-50" />
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-violet-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="mt-3 text-sm font-semibold">
              Ready for my next chapter.
            </p>

            <p className="mt-1 text-xs leading-5 text-[#8a7d9d]">
              React · Frontend · MERN roles
            </p>

            <button
              onClick={() => goTo("contact")}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-3 py-2.5 text-xs font-semibold text-violet-700 shadow-sm hover:bg-violet-100"
            >
              Let's connect <ArrowUpRight size={14} />
            </button>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          {/* TOP NAVIGATION */}

          <header className="sticky top-0 z-40 border-b border-violet-100 bg-[#faf8ff]/90 backdrop-blur-xl">
            <div className="flex h-[72px] items-center justify-between px-5 sm:px-8 lg:px-10">
              <div className="flex items-center gap-3 lg:hidden">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 font-black text-white">
                  N.
                </span>

                <span className="font-bold">
                  Nihala <span className="text-violet-600">/ portfolio</span>
                </span>
              </div>

              <div className="hidden items-center gap-2 text-sm text-[#8c809b] lg:flex">
                <span className="font-mono text-violet-500">
                  ~/portfolio
                </span>
                <span>/</span>
                <span className="font-semibold text-[#514462]">
                  {nav.find((item) => item.id === activePanel)?.label ||
                    "Overview"}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Available now
                </span>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-3 py-2.5 text-xs font-semibold text-violet-700 transition hover:bg-violet-50 sm:px-4"
                >
                  <FileText size={15} />
                  Resume
                </a>

                <button
                  onClick={() => setMenuOpen((value) => !value)}
                  className="rounded-xl border border-violet-100 bg-white p-2.5 lg:hidden"
                  aria-label="Toggle navigation"
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>

            {menuOpen && (
              <div className="border-t border-violet-100 bg-white p-3 lg:hidden">
                {nav.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => goTo(id)}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-[#756985] hover:bg-violet-50"
                  >
                    <Icon size={17} />
                    {label}
                  </button>
                ))}
              </div>
            )}
          </header>

          <main className="px-5 sm:px-8 lg:px-10">
            {/* OVERVIEW */}

            <section
              id="overview"
              className="scroll-mt-24 pb-12 pt-8 sm:pt-10"
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-600">
                  mern stack developer
                </p>

                <p className="font-mono text-[11px] text-[#a398b1]">
                  PROFILE STATUS: ACTIVE
                </p>
              </div>

              <div className="dashboard-grid relative overflow-hidden rounded-[2rem] border border-violet-100 bg-white p-6 soft-shadow sm:p-9 lg:p-10">
                <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-violet-100/80 blur-3xl" />

                <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/90 px-3 py-2 text-xs font-semibold text-violet-700">
                      <Sparkles size={14} />
                      Hello, welcome to my space
                    </div>

                    <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-.05em] text-[#2d2342] sm:text-5xl xl:text-6xl">
                      I turn ideas into{" "}
                      <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                        useful web experiences.
                      </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#786d89] sm:text-base">
                      I'm{" "}
                      <strong className="text-[#4c3d62]">
                        Nihala M. S.
                      </strong>{" "}
                      — an MCA graduate and aspiring MERN Stack Developer with
                      six months of internship experience. Explore my work
                      through this interactive developer workspace.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <button
                        onClick={() => goTo("project-lab")}
                        className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
                      >
                        Explore Project Lab <ArrowUpRight size={17} />
                      </button>

                      <button
                        onClick={() => setAssistantOpen(true)}
                        className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-5 py-3.5 text-sm font-bold text-violet-700 transition hover:bg-violet-50"
                      >
                        <Bot size={17} />
                        Ask my Portfolio Twin
                      </button>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href="https://github.com/Nihala-ms"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="rounded-xl border border-violet-100 bg-white p-3 text-[#746487] hover:border-violet-300 hover:text-violet-700"
                      >
                        <FaGithub size={18} />
                      </a>

                      <a
                        href="https://linkedin.com/in/nihala-ms"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="rounded-xl border border-violet-100 bg-white p-3 text-[#746487] hover:border-violet-300 hover:text-violet-700"
                      >
                        <FaLinkedinIn size={18} />
                      </a>

                      <button
                        onClick={() => goTo("contact")}
                        aria-label="Contact"
                        className="rounded-xl border border-violet-100 bg-white p-3 text-[#746487] hover:border-violet-300 hover:text-violet-700"
                      >
                        <Mail size={18} />
                      </button>

                      <span className="text-xs text-[#9a8eaa]">
                        Curious by nature. Growing with every build.
                      </span>
                    </div>
                  </div>

                  {/* PROFILE PHOTO */}

                  <div className="relative mx-auto w-full max-w-[330px]">
                    <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-200 to-fuchsia-100 opacity-70 blur-xl" />

                    <div className="float-slow relative rounded-[1.7rem] border border-white bg-white p-2 shadow-xl shadow-violet-200/60">
                      <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.3rem] bg-gradient-to-br from-violet-200 to-fuchsia-100">
                        <img
                          src={profile}
                          alt="Nihala's profile"
                          className="h-full w-full object-cover object-center"
                        />

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#24183c]/90 to-transparent p-5 pt-16 text-white">
                          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-violet-100">
                            Developer · Learner · Creator
                          </p>

                          <p className="mt-2 text-xl font-bold">
                            Nihala M. S.
                          </p>

                          <p className="mt-1 text-xs text-white/75">
                            MERN Stack Developer
                          </p>
                        </div>

                        
                      </div>
                    </div>

                    

                    
                  </div>
                </div>
              </div>

              {/* PROFILE STATS */}

              <div className="mt-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
                {[
                  {
                    label: "Internship experience",
                    value: "6 months",
                    icon: BriefcaseBusiness,
                    sub: "Practical exposure",
                  },
                  {
                    label: "Featured projects",
                    value: "12",
                    icon: Layers3,
                    sub: "Apps & experiments",
                  },
                  {
                    label: "Core stack",
                    value: "MERN",
                    icon: Terminal,
                    sub: "Frontend + backend",
                  },
                  {
                    label: "Education",
                    value: "MCA",
                    icon: GraduationCap,
                    sub: "Graduate · 2025",
                  },
                ].map(({ label, value, icon: Icon, sub }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-violet-100 bg-white p-4 sm:p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#8b7f9b]">
                        {label}
                      </span>
                      <Icon size={16} className="text-violet-500" />
                    </div>

                    <p className="mt-3 text-2xl font-black tracking-tight text-[#302342]">
                      {value}
                    </p>

                    <p className="mt-1 text-[11px] text-[#a398b1]">{sub}</p>
                  </div>
                ))}
              </div>

              {/* FEATURE DESTINATIONS */}

              <div className="mt-10">
                <div className="mb-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-600">
                      Choose your path
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-[#302342] sm:text-2xl">
                      Explore the portfolio in four ways.
                    </h2>
                  </div>

                  <span className="hidden font-mono text-xs text-[#b1a6c0] sm:block">
                    QUICK ACCESS / 04
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {featureTiles.map(
                    ({ id, code, title, desc, icon: Icon, tag, tone }) => (
                      <button
                        key={id}
                        onClick={() => goTo(id)}
                        className="group rounded-2xl border border-violet-100 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100"
                      >
                        <div className="flex items-start justify-between">
                          <span className={`rounded-xl p-3 ${tone}`}>
                            <Icon size={19} />
                          </span>

                          <span className="font-mono text-xs text-[#c1b6ce]">
                            /{code}
                          </span>
                        </div>

                        <h3 className="mt-5 font-bold text-[#302342]">
                          {title}
                        </h3>

                        <p className="mt-2 min-h-[44px] text-xs leading-5 text-[#887c98]">
                          {desc}
                        </p>

                        <div className="mt-4 flex items-center justify-between border-t border-violet-50 pt-3">
                          <span className="text-[10px] font-semibold uppercase tracking-wide text-violet-600">
                            {tag}
                          </span>

                          <ArrowUpRight
                            size={16}
                            className="text-[#a99bb9] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-600"
                          />
                        </div>
                      </button>
                    )
                  )}
                </div>
              </div>
            </section>

            {/* PROJECT LAB */}

            <section
              id="project-lab"
              className="scroll-mt-24 border-t border-violet-100 py-16 sm:py-20"
            >
              <SectionHeader
                kicker="01 / Project Lab"
                title="Builds, not just buzzwords."
                text="Explore a selection of applications and practice projects. Search by name or technology, then open the live demo or repository."
                number="LAB_001"
              />

              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex max-w-lg flex-1 items-center gap-3 rounded-xl border border-violet-100 bg-white px-4">
                  <Search size={17} className="text-violet-500" />
                  <input
                    value={projectSearch}
                    onChange={(event) => setProjectSearch(event.target.value)}
                    placeholder="Search projects, tools, technologies..."
                    className="h-12 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#b0a5bd]"
                  />

                  {projectSearch && (
                    <button
                      type="button"
                      onClick={() => setProjectSearch("")}
                      aria-label="Clear search"
                      className="text-violet-600"
                    >
                      <X size={16} />
                    </button>
                  )}
                </label>

                <p className="text-xs text-[#9386a5]">
                  {visibleProjects.length} result
                  {visibleProjects.length === 1 ? "" : "s"}
                </p>
              </div>

              <div className="mb-7 flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setProjectFilter(filter)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                      projectFilter === filter
                        ? "bg-violet-600 text-white"
                        : "border border-violet-100 bg-white text-[#786d89] hover:border-violet-300 hover:bg-violet-50"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {visibleProjects.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                  {visibleProjects.map((project) => (
                    <article
                      key={project.title}
                      className="group overflow-hidden rounded-3xl border border-violet-100 bg-white transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100"
                    >
                      <div
                        className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}
                      >
                        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(#c4b5fd_1px,transparent_1px),linear-gradient(90deg,#c4b5fd_1px,transparent_1px)] [background-size:26px_26px]" />

                        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white/80 text-violet-700 shadow-lg transition group-hover:scale-110">
                          <ProjectIcon type={project.icon} />
                        </div>

                        <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[10px] font-bold text-violet-700">
                          PROJECT {project.number}
                        </span>

                        <span className="absolute bottom-4 right-4 text-[10px] font-semibold text-[#7e7190]">
                          {project.type}
                        </span>
                      </div>

                      <div className="p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-lg font-bold text-[#302342]">
                            {project.title}
                          </h3>

                          <ArrowUpRight
                            size={17}
                            className="shrink-0 text-[#b0a5bd] transition group-hover:text-violet-600"
                          />
                        </div>

                        <p className="mt-3 min-h-[66px] text-sm leading-6 text-[#817590]">
                          {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg bg-violet-50 px-2.5 py-1.5 text-[10px] font-semibold text-violet-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2 border-t border-violet-50 pt-4">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-violet-700"
                            >
                              Live preview <ExternalLink size={13} />
                            </a>
                          )}

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl border border-violet-100 px-4 py-2.5 text-xs font-bold text-violet-700 hover:bg-violet-50"
                            >
                              <FaGithub size={14} />
                              Source
                            </a>
                          )}

                          {!project.live && !project.github && (
                            <span className="text-xs leading-6 text-[#9386a5]">
                              Project links will be added soon.
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-violet-200 bg-white p-12 text-center">
                  <Search size={26} className="mx-auto text-violet-500" />
                  <h3 className="mt-4 font-bold">No matching project</h3>

                  <p className="mt-2 text-sm text-[#9386a5]">
                    Try another search term or clear the filters.
                  </p>

                  <button
                    onClick={() => {
                      setProjectSearch("");
                      setProjectFilter("All");
                    }}
                    className="mt-4 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white"
                  >
                    Reset project lab
                  </button>
                </div>
              )}
            </section>

            {/* DEVELOPER STACK */}

            <section
              id="developer-stack"
              className="scroll-mt-24 border-t border-violet-100 py-16 sm:py-20"
            >
              <SectionHeader
                kicker="02 / Developer Stack"
                title="My tools for making things work."
                text="A snapshot of the technologies and workflows I use across frontend and full-stack projects."
                number="STACK_002"
              />

              <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
                <div className="rounded-3xl border border-violet-100 bg-white p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-600">
                    Everyday toolkit
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight">
                    Small steps. Solid foundations.
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#817590]">
                    I enjoy building interfaces, connecting APIs, organizing
                    data, and learning how the pieces of a web application work
                    together.
                  </p>

                  <div className="mt-7 grid grid-cols-3 gap-3">
                    {techStack.map(({ name, Icon, color }) => (
                      <div
                        key={name}
                        className="rounded-2xl border border-violet-50 bg-[#fcfaff] p-3 text-center transition hover:-translate-y-1 hover:border-violet-200"
                      >
                        <Icon size={25} className={`mx-auto ${color}`} />
                        <p className="mt-2 text-[10px] font-semibold text-[#6f627f]">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {skillGroups.map((group, index) => (
                    <article
                      key={group.title}
                      className={`rounded-3xl border border-violet-100 p-6 ${
                        index === 0 ? "bg-violet-50/70" : "bg-white"
                      } ${index === 2 ? "sm:col-span-2" : ""}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-[#302342]">
                            {group.title}
                          </h3>
                          <p className="mt-2 text-xs leading-5 text-[#8b7f9b]">
                            {group.description}
                          </p>
                        </div>

                        <span className="rounded-xl bg-white p-2 text-violet-600">
                          <Code2 size={17} />
                        </span>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-violet-100 bg-white px-3 py-2 text-xs font-medium text-[#675978]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* JOURNEY MAP */}

            <section
              id="journey-map"
              className="scroll-mt-24 border-t border-violet-100 py-16 sm:py-20"
            >
              <SectionHeader
                kicker="03 / Journey Map"
                title="The path that brought me here."
                text="Education, training, and hands-on learning that continue to shape my development journey."
                number="PATH_003"
              />

              <div className="relative ml-2 space-y-4 border-l-2 border-violet-100 pl-6 sm:ml-4 sm:pl-8">
                {journey.map((item) => (
                  <article
                    key={item.title}
                    className="relative rounded-2xl border border-violet-100 bg-white p-5 transition hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100 sm:p-6"
                  >
                    <span className="absolute -left-[35px] top-7 h-4 w-4 rounded-full border-4 border-[#faf8ff] bg-violet-500 sm:-left-[43px]" />

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span className="rounded-full bg-violet-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-violet-700">
                          {item.tag}
                        </span>

                        <h3 className="mt-4 text-lg font-bold text-[#302342]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-violet-700">
                          {item.place}
                        </p>
                      </div>

                      <span className="font-mono text-sm font-bold text-[#a398b1]">
                        {item.year}
                      </span>
                    </div>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#817590]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* CONTACT */}

            <section
              id="contact"
              className="scroll-mt-24 border-t border-violet-100 py-16 sm:py-20"
            >
              <SectionHeader
                kicker="04 / Contact"
                title="Let's build the next thing."
                text="Open to entry-level web development roles, collaborative projects, and opportunities to keep learning."
                number="CONNECT_004"
              />

              <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
                <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-7 text-white sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <Mail size={22} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    Have an opportunity?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/80">
                    I'd love to hear about your team, role, or project. Let's
                    connect and see how I can contribute.
                  </p>

                  <div className="mt-7 space-y-3">
                    <a
                      href="https://github.com/Nihala-ms"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/15"
                    >
                      <span className="flex items-center gap-3">
                        <FaGithub size={18} />
                        GitHub profile
                      </span>
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href="https://linkedin.com/in/nihala-ms"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/15"
                    >
                      <span className="flex items-center gap-3">
                        <FaLinkedinIn size={18} />
                        LinkedIn
                      </span>
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold text-violet-700 hover:bg-violet-50"
                    >
                      <span className="flex items-center gap-3">
                        <Download size={17} />
                        Download resume
                      </span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <form
                  onSubmit={submitContact}
                  className="rounded-3xl border border-violet-100 bg-white p-6 sm:p-8"
                >
                  <h3 className="text-xl font-bold">Contact us</h3>

                  <p className="mt-2 text-sm text-[#8b7f9b]">
                    Your message will be submitted to the portfolio backend.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <label className="text-xs font-semibold text-[#6c5d7d]">
                      Your name
                      <input
                        required
                        minLength={2}
                        maxLength={100}
                        value={contact.name}
                        onChange={(event) =>
                          setContact({
                            ...contact,
                            name: event.target.value,
                          })
                        }
                        placeholder="Enter your name"
                        className="mt-2 w-full rounded-xl border border-violet-100 px-4 py-3 text-sm font-normal outline-none focus:border-violet-400"
                      />
                    </label>

                    <label className="text-xs font-semibold text-[#6c5d7d]">
                      Email address
                      <input
                        required
                        type="email"
                        maxLength={254}
                        value={contact.email}
                        onChange={(event) =>
                          setContact({
                            ...contact,
                            email: event.target.value,
                          })
                        }
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-xl border border-violet-100 px-4 py-3 text-sm font-normal outline-none focus:border-violet-400"
                      />
                    </label>
                  </div>

                  <label className="mt-4 block text-xs font-semibold text-[#6c5d7d]">
                    Message
                    <textarea
                      required
                      minLength={5}
                      maxLength={5000}
                      rows={5}
                      value={contact.message}
                      onChange={(event) =>
                        setContact({
                          ...contact,
                          message: event.target.value,
                        })
                      }
                      placeholder="Tell me about the opportunity..."
                      className="mt-2 w-full resize-y rounded-xl border border-violet-100 px-4 py-3 text-sm font-normal outline-none focus:border-violet-400"
                    />
                  </label>

                  {contactStatus.message && (
                    <div
                      role="status"
                      className={`mt-4 rounded-xl border p-3 text-sm leading-6 ${
                        contactStatus.type === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-rose-200 bg-rose-50 text-rose-700"
                      }`}
                    >
                      {contactStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={contactLoading}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {contactLoading ? "Submitting..." : "Send message"}
                    <Send size={15} />
                  </button>

                  <p className="mt-3 text-[10px] leading-5 text-[#a398b1]">
                    The success message appears only after the backend returns
                    a successful response.
                  </p>
                </form>
              </div>
            </section>

            {/* FOOTER */}

            <footer className="flex flex-col items-center justify-between gap-4 border-t border-violet-100 py-7 text-center sm:flex-row sm:text-left">
              <div>
                <p className="font-bold">
                  Nihala M. S.
                  <span className="text-violet-600">.</span>
                </p>

                <p className="mt-1 text-[10px] text-[#a398b1]">
                  Personal developer workspace · Built with React
                </p>
              </div>

              <p className="text-xs text-[#a398b1]">
                Designed to show the work behind the developer.
              </p>

              <button
                onClick={() => goTo("overview")}
                className="inline-flex items-center gap-2 rounded-xl border border-violet-100 bg-white px-4 py-2.5 text-xs font-semibold text-violet-700 hover:bg-violet-50"
              >
                Back to overview
                <ArrowDownRight size={14} className="-rotate-45" />
              </button>
            </footer>
          </main>
        </div>
      </div>

      {assistantOpen && (
        <PortfolioAssistant onClose={() => setAssistantOpen(false)} />
      )}
    </div>
  );
}
