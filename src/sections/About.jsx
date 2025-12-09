import WindowCard from "../components/WindowCard";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 sm:px-8 md:px-16 lg:px-32 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#0f0f15]">
        <div
          className="absolute inset-0 bg-gradient-to-br 
          from-purple-800/20 via-blue-800/20 to-fuchsia-800/20 
          blur-3xl opacity-60"
        ></div>
      </div>

      <div className="max-w-5xl mx-auto animate-fadeInUp">
        <WindowCard>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center sm:text-left">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-indigo-500">
              Me
            </span>
          </h2>

          {/* Intro - More Personal */}
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
            Hey! I'm <span className="font-semibold text-gray-900">Doss Cyril</span>, 
            a final-year B.Tech student in{" "}
            <span className="font-semibold text-gray-900">Artificial Intelligence & Machine Learning</span>{" "}
            at CMR Technical Campus. I build things that solve real problems — from{" "}
            <span className="font-semibold text-gray-900">full-stack e-commerce platforms serving 60+ users</span>{" "}
            to <span className="font-semibold text-gray-900">AI-powered document chatbots</span> that help 
            students bypass university restrictions.
          </p>

          {/* What I Do */}
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
            I specialize in <span className="font-semibold text-gray-900">full-stack development</span> (MERN stack) 
            and <span className="font-semibold text-gray-900">AI/ML systems</span> (RAG pipelines, LLMs, vector databases). 
            My work combines clean code, scalable architecture, and modern frameworks like{" "}
            <span className="font-semibold text-gray-900">React, Node.js, PyTorch, LangChain, and ChromaDB</span>.
          </p>

          {/* Problem Solving */}
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
            On the problem-solving front, I've crushed{" "}
            <span className="font-semibold text-gray-900">650+ LeetCode problems</span> and earned the{" "}
            <span className="font-semibold text-gray-900">Guardian Badge</span> through consistent contest 
            participation. I love the challenge of optimizing algorithms and building efficient systems.
          </p>

          {/* What I'm Looking For */}
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8">
            Currently seeking <span className="font-semibold text-gray-900">Software Engineering</span> and{" "}
            <span className="font-semibold text-gray-900">ML Engineering</span> roles where I can ship 
            production-ready code, solve challenging problems, and contribute to impactful projects.
          </p>

          {/* Skills Title */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center sm:text-left">
            Technical Skills
          </h3>

          {/* Skills Grid - Organized by Category */}
          <div className="space-y-4">
            {/* Languages */}
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Languages</p>
              <div className="flex flex-wrap gap-3">
                {["Python", "JavaScript", "C++", "Java"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/60 backdrop-blur-lg border border-gray-300 
                               rounded-lg text-sm text-gray-900 shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Full-Stack */}
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Full-Stack Development</p>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Node.js", "Express.js", "MongoDB", "Flask", "Tailwind CSS", "REST APIs"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/60 backdrop-blur-lg border border-gray-300 
                               rounded-lg text-sm text-gray-900 shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">AI/ML & Data Science</p>
              <div className="flex flex-wrap gap-3">
                {["PyTorch", "TensorFlow", "LangChain", "ChromaDB", "Scikit-learn", "NumPy", "Pandas", "RAG Systems", "LLMs"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/60 backdrop-blur-lg border border-gray-300 
                               rounded-lg text-sm text-gray-900 shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Tools & Platforms</p>
              <div className="flex flex-wrap gap-3">
                {["Git", "GitHub", "Postman", "VS Code", "Streamlit", "Render"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/60 backdrop-blur-lg border border-gray-300 
                               rounded-lg text-sm text-gray-900 shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </WindowCard>
      </div>
    </section>
  );
}