import React, { useRef } from "react";
import { Link } from "react-router-dom";
import WindowCard from "../components/WindowCard";

// import project images
import ecommerceImg from "../assets/project/ecommerce.jpg";
import ragImg from "../assets/project/rag.jpg";
import yoloImg from "../assets/project/yolo.jpg";

export default function Projects() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const projects = [
    {
      id: "handmadehub",
      title: "HandMadeHub - E-Commerce Platform",
      image: ecommerceImg,
      description:
        "Full-stack MERN e-commerce platform serving 60+ real users and processing 20+ transactions for a handcrafted products business. Features secure JWT authentication, integrated payment systems, cart management, and admin dashboard for inventory and order processing.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Tailwind CSS", "RESTful APIs"],
      github: "https://github.com/Dosscyril/HandMadeHub",
      demo: "https://handmadehub-61cd.onrender.com",
      hasDetailPage: true,
    },

    {
      id: "rag-chatbot",
      title: "RAG-Based Knowledge Chatbot",
      image: ragImg,
      description:
        "AI-powered document Q&A system processing PDFs up to 100MB in 3-5 seconds and delivering answers in 10-15 seconds. Achieved 89% accuracy in testing phases using ChromaDB vector search, Gemini API, and semantic retrieval with Sentence Transformers. Deployed on Streamlit Cloud for students bypassing ChatGPT restrictions.",
      tech: ["Python", "Streamlit", "LangChain", "ChromaDB", "Gemini API", "Sentence Transformers"],
      github: "https://github.com/Dosscyril/RAG-Based-Knowledge-chatbot",
      demo: "https://rag-based-knowledge-chatbot-fcejqjnbphnstdsnslmoot.streamlit.app",
      hasDetailPage: false, //enable later
    },

    {
      id: "object-detection",
      title: "Object Detection System (YOLOv8)",
      image: yoloImg,
      description:
        "Computer vision web application for real-time object detection using YOLOv8 deep learning model. Upload images to detect and classify multiple objects with high accuracy. Custom trained on YOLOv8 architecture achieving state-of-the-art detection performance across 80+ object classes.",
      tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Flask", "Deep Learning"],
      github: "https://github.com/Dosscyril/object-detection-webapp",
      demo: null,
      hasDetailPage: false, //enable later
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-24 px-6 sm:px-8 md:px-16 lg:px-32 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#0f0f15]">
        <div
          className="absolute inset-0 bg-gradient-to-br 
          from-purple-800/20 via-blue-800/20 to-fuchsia-800/20 
          blur-3xl opacity-60"
        ></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 text-center mb-12">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-indigo-500">
            Projects
          </span>
        </h2>

        <div className="relative">
          
          {/* MOBILE ARROWS ALWAYS VISIBLE */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
              w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md 
              rounded-full flex items-center justify-center
              hover:bg-white/20 transition"
          >
            <span className="text-white/60 text-xl sm:text-2xl">‹</span>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
              w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md 
              rounded-full flex items-center justify-center
              hover:bg-white/20 transition"
          >
            <span className="text-white/60 text-xl sm:text-2xl">›</span>
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-8 sm:gap-10 overflow-x-auto pb-4 scroll-smooth no-scrollbar px-6 sm:px-12"
          >
            {projects.map((project, index) => (
              <WindowCard
                key={index}
                className="min-w-[300px] sm:min-w-[360px] h-[580px] flex flex-col"
              >
                {/* IMAGE */}
                <div className="w-full h-36 sm:h-40 rounded-lg overflow-hidden shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4 h-[50px] overflow-hidden">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-800 text-sm mt-2 mb-3 overflow-hidden overflow-y-auto h-[90px] pr-1">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-4 h-[70px] overflow-y-auto pr-1">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/60 backdrop-blur-lg border border-gray-300 rounded-lg text-xs text-gray-900 shadow"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS - Now with 3 buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  {/* Row 1: GitHub + Live Demo */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r 
                        from-purple-500 to-blue-500 text-white rounded-lg shadow 
                        hover:opacity-90 transition text-sm font-medium"
                    >
                      GitHub
                    </a>

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border border-gray-400 
                          bg-white/40 backdrop-blur-md text-gray-900 
                          rounded-lg shadow hover:bg-white/60 transition text-sm font-medium"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span
                        className="flex-1 text-center px-4 py-2 border border-gray-300 
                          bg-gray-100/40 backdrop-blur-md text-gray-500 
                          rounded-lg shadow cursor-not-allowed text-sm font-medium"
                      >
                        GitHub Only
                      </span>
                    )}
                  </div>

                  {/* Row 2: View Details Button */}
                  {project.hasDetailPage ? (
                    <Link
                      to={`/projects/${project.id}`}
                      className="w-full text-center px-4 py-2 bg-gradient-to-r 
                        from-indigo-500 to-purple-500 text-white rounded-lg shadow-lg 
                        hover:opacity-90 transition text-sm font-semibold"
                    >
                      📖 View Details
                    </Link>
                  ) : (
                    <div className="w-full text-center px-4 py-2 bg-gray-200/60 
                      text-gray-500 rounded-lg text-xs italic">
                      Detail page coming soon
                    </div>
                  )}
                </div>
              </WindowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}