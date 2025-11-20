import React from "react";
import WindowCard from "../components/WindowCard";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-32 pt-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#0f0f15]">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 via-blue-700/20 to-fuchsia-700/20 blur-3xl"></div>
      </div>

      <WindowCard className="w-full max-w-5xl animate-fadeInUp">

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* LEFT — Text */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-indigo-500">
                Doss Cyril
              </span>
            </h1>

            <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              AI & ML Student • Aspiring Software / ML Engineer
            </h2>

            <p className="mt-5 text-gray-700 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              Final-year AIML student passionate about building intelligent systems,
              modern full-stack applications, and solving complex problems. Skilled in
              Python, C++, Java (Basics), React, ML tools — with{" "}
              <span className="font-semibold text-gray-900">
                600+ LeetCode problems solved (Knight Badge)
              </span>.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              {/* Preview Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-slate-700 to-indigo-500 
                           text-white rounded-lg font-semibold shadow hover:opacity-90 transition"
              >
                Preview Resume
              </a>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download="Doss_Cyril_Resume.pdf"
                className="px-6 py-3 border border-gray-300 bg-white/40 backdrop-blur-md 
                           rounded-lg font-semibold text-gray-800 hover:bg-white/60 transition"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 bg-white/40 backdrop-blur-md 
                rounded-lg font-semibold text-gray-800 hover:bg-white/60 transition text-center"
              >
                View Projects
              </a>

            </div>

          </div>

          {/* RIGHT — Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end md:pr-6">
            <div
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80
              rounded-full overflow-hidden shadow-2xl border border-white/20 
              bg-white/10 backdrop-blur-xl"
            >

              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />

              {/* Soft glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-indigo-300/20 mix-blend-overlay"></div>
            </div>
          </div>

        </div>

      </WindowCard>
    </section>
  );
}
