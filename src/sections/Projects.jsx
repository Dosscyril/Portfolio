import React, { useRef } from "react";
import WindowCard from "../components/WindowCard";

// Import project images
import ecommerceImg from "../assets/project/ecommerce.jpg";
import fashionImg from "../assets/project/fashion.jpg";
import ragImg from "../assets/project/rag.jpg";
import yoloImg from "../assets/project/yolo.jpg";
import museumImg from "../assets/project/museum.jpg";

// Temporary images for new projects (replace later)
import captionImg from "../assets/project/caption.jpg";
import fileconvImg from "../assets/project/fileconvert.jpg";

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
      title: "Full-Stack E-Commerce Website",
      image: ecommerceImg,
      description:
        "A fully functional marketplace with authentication, product management, cart, and order workflow. Built for scalable real-world operations.",
      tech: ["React", "Tailwind", "Node/Django", "MongoDB/MySQL", "JWT"],
      github: "#",
      demo: "#",
    },

    // NEW PROJECT #1
    {
      title: "Video Captioning System (Whisper + OpenCV)",
      image: captionImg,
      description:
        "A video captioning tool that transcribes speech using Whisper and overlays perfectly synchronized subtitles onto videos using OpenCV and FFmpeg.",
      tech: ["Python", "Whisper", "OpenCV", "FFmpeg", "Deep Learning"],
      github: "",
      demo: "#",
    },

    // NEW PROJECT #2
    {
      title: "File Converter Web App (PDF ↔ DOCX)",
      image: fileconvImg,
      description:
        "A full-stack tool to convert files between PDF and Word formats. Clean React UI with a Flask backend for fast and reliable document processing.",
      tech: ["React", "Flask", "Python", "Docx", "PDF Tools", "REST API"],
      github: "https://github.com/Dosscyril/file-converter",
      demo: "#",
    },

    {
      title: "Fashion Visual Search & Style Assistant",
      image: fashionImg,
      description:
        "AI-driven outfit recommendation engine using embeddings and similarity search to find visually matching outfits.",
      tech: ["Python", "TensorFlow", "Embeddings", "Vector DB", "FastAPI"],
      github: "#",
      demo: "#",
    },

    {
      title: "RAG Based Chatbot",
      image: ragImg,
      description:
        "A Retrieval-Augmented Generation bot that uses embeddings and semantic search to provide accurate document-based answers.",
      tech: ["LLMs", "LangChain", "FAISS", "Python"],
      github: "#",
      demo: "#",
    },

    {
      title: "Object Detection System (YOLO)",
      image: yoloImg,
      description:
        "Real-time object detection pipeline using YOLO models to detect and track objects with high accuracy.",
      tech: ["Python", "OpenCV", "YOLOv5/YOLOv8", "PyTorch"],
      github: "https://github.com/Dosscyril/object-detection-webapp",
      demo: "#",
    },

    {
      title: "Museum Chatbot (Ticket Booking)",
      image: museumImg,
      description:
        "An NLP chatbot to book tickets, explain exhibits, and answer FAQs using Dialogflow/RASA.",
      tech: ["Python", "NLP", "Dialogflow", "Flask", "React"],
      github: "#",
      demo: "#",
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
                className="min-w-[300px] sm:min-w-[360px] h-[520px] flex flex-col"
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
                <p className="text-gray-800 text-sm mt-2 mb-3 overflow-hidden overflow-y-auto h-[85px] pr-1">
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

                {/* BUTTONS */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r 
                      from-purple-500 to-blue-500 text-white rounded-lg shadow 
                      hover:opacity-90 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="flex-1 text-center px-4 py-2 border border-gray-400 
                      bg-white/40 backdrop-blur-md text-gray-900 
                      rounded-lg shadow hover:bg-white/60 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </WindowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
