
import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, User, Minimize2 } from "lucide-react";

const quickQuestions = [
  "What are your technical skills?",
  "Show me your best projects",
  "Tell me about your experience",
  "How can I contact you?",
];

const portfolioInfo = {
  name: "Nihala",
  role: "MERN Stack Developer",
  education: "MCA Graduate, 2025",
  experience: "6 months of MERN Stack internship experience",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
  ],
  projects: [
    {
      name: "Insurance Management System",
      description:
        "A web application for managing insurance policies, user accounts, and claims.",
      technologies: "React, Node.js, Express.js, MongoDB",
    },
    {
      name: "SmartMoney",
      description:
        "A personal finance application for managing transactions and budgets.",
      technologies: "React, Node.js, Express.js, MongoDB",
    },
    {
      name: "TripMate",
      description:
        "A trip planning application built with React and Tailwind CSS.",
      technologies: "React, Tailwind CSS",
    },
  ],
};

function getAnswer(question) {
  const q = question.toLowerCase();

  if (
    q.includes("skill") ||
    q.includes("technology") ||
    q.includes("tech stack") ||
    q.includes("know")
  ) {
    return `Nihala is a ${portfolioInfo.role}. Her technical skills include ${portfolioInfo.skills.join(", ")}. She enjoys building responsive and user-friendly web applications.`;
  }

  if (
    q.includes("project") ||
    q.includes("built") ||
    q.includes("portfolio")
  ) {
    return portfolioInfo.projects
      .map(
        (project, index) =>
          `${index + 1}. ${project.name}\n${project.description}\nTechnologies: ${project.technologies}`
      )
      .join("\n\n");
  }

  if (
    q.includes("experience") ||
    q.includes("internship") ||
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("graduate")
  ) {
    return `${portfolioInfo.name} is an ${portfolioInfo.education}. She has ${portfolioInfo.experience} and is looking for opportunities to grow as a web developer.`;
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("hire") ||
    q.includes("reach")
  ) {
    return "You can contact Nihala using the Contact section of this portfolio. You can also explore the available professional links to connect with her.";
  }

  if (
    q.includes("hello") ||
    q.includes("hi ") ||
    q === "hi" ||
    q.includes("hey")
  ) {
    return "Hi there! 👋 I'm Nihala's Portfolio Twin. Ask me about her skills, projects, education, or experience!";
  }

  return "Thanks for your question! I'm Nihala's Portfolio Twin. You can ask me about her technical skills, projects, education, or experience. For other details, please explore the portfolio sections.";
}

export default function PortfolioAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm Nihala's Portfolio Twin. I'm here to help you explore her skills, projects, and developer journey. What would you like to know?",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  function sendMessage(text = input) {
    const question = text.trim();
    if (!question) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", content: question },
      { role: "assistant", content: getAnswer(question) },
    ]);

    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] font-sans sm:bottom-7 sm:right-7">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Portfolio Twin"
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#6d28d9] text-white shadow-xl shadow-purple-300/50 transition duration-300 hover:scale-110 hover:bg-[#5b21b6] focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          <Bot size={29} />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-400">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="absolute bottom-full right-0 mb-3 w-max rounded-xl bg-[#17151f] px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">
            Meet my AI Portfolio Twin ✨
          </span>
        </button>
      )}

      {isOpen && (
        <section
          aria-label="AI Portfolio Twin chat"
          className="flex h-[min(620px,80dvh)] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-[26px] border border-purple-100 bg-white shadow-2xl shadow-purple-200/50 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <header className="flex items-center gap-3 bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] px-5 py-4 text-white">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Sparkles size={23} />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="font-semibold">Portfolio Twin</h2>
              <p className="mt-0.5 text-xs text-purple-100">
                Your guide to Nihala's work
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Minimize chat"
              className="rounded-full p-2 transition hover:bg-white/15"
            >
              <Minimize2 size={19} />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 transition hover:bg-white/15"
            >
              <X size={19} />
            </button>
          </header>

          <div className="flex items-center gap-2 border-b border-purple-50 bg-[#fcfbff] px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-500">
              Interactive portfolio assistant
            </span>
          </div>

          <div
            className="flex-1 space-y-4 overflow-y-auto bg-white px-4 py-5"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2.5 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                    message.role === "user"
                      ? "bg-[#f0e9ff] text-[#6d28d9]"
                      : "bg-[#6d28d9] text-white"
                  }`}
                >
                  {message.role === "user" ? (
                    <User size={16} />
                  ) : (
                    <Bot size={17} />
                  )}
                </div>

                <div
                  className={`max-w-[83%] whitespace-pre-line rounded-2xl px-3.5 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-tr-sm bg-[#6d28d9] text-white"
                      : "rounded-tl-sm border border-purple-50 bg-[#f8f6ff] text-[#343044]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          <div className="border-t border-purple-100 bg-[#fcfbff] px-4 pb-4 pt-3">
            <p className="mb-2 text-xs font-medium text-gray-500">
              Suggested questions
            </p>

            <div className="mb-3 flex flex-wrap gap-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="rounded-full border border-purple-200 bg-white px-3 py-2 text-xs text-[#6d28d9] transition hover:border-purple-400 hover:bg-purple-50"
                >
                  {question}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2 rounded-2xl border border-purple-100 bg-white p-2 pl-4 shadow-sm focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me anything..."
                aria-label="Ask the portfolio assistant"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6d28d9] text-white transition hover:bg-[#5b21b6] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={17} />
              </button>
            </form>

            <p className="mt-2 text-center text-[10px] text-gray-400">
              AI Portfolio Twin · Built with React
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
