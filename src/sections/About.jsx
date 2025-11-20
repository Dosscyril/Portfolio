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

          {/* Paragraph 1 */}
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
            I'm <span className="font-semibold text-gray-900">Doss Cyril</span>,  
            a final-year B.Tech student specializing in
            <span className="font-semibold text-gray-900"> Artificial Intelligence & Machine Learning</span>  
            at <span className="font-semibold text-gray-900">CMR Technical Campus</span>.  
            I enjoy building intelligent systems and modern full-stack applications.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
            My technical foundation includes  
            <span className="font-semibold text-gray-900"> Python, C++, Java (Basics)</span>.  
            I also work across backend & frontend with  
            <span className="font-semibold text-gray-900"> React.js, Flask, Django, Machine Learning, and beginner-level LLM/RAG pipelines</span>.
          </p>

          {/* Paragraph 3 */}
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
            I’m aiming for roles in  
            <span className="font-semibold text-gray-900"> Software Engineering</span> and  
            <span className="font-semibold text-gray-900"> AI/ML Engineering</span>,  
            focusing on clean code, scalable systems, and strong problem-solving skills.
          </p>

          {/* Paragraph 4 */}
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
            On the competitive programming side, I have solved  
            <span className="font-semibold text-gray-900"> 600+ LeetCode problems</span>  
            and currently hold the  
            <span className="font-semibold text-gray-900"> Knight Badge</span>.  
            I consistently work on improving Data Structures and Algorithm skills.
          </p>

          {/* Skills Title */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center sm:text-left">
            Skills & Technologies
          </h3>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "C++",
              "Java (Basics)",
              "React.js",
              "Flask",
              "Django",
              "Machine Learning",
              "Deep Learning Basics",
              "LLMs",
              "RAG Pipelines",
              "Data Structures & Algorithms",
              "Git & GitHub",
              "REST APIs"
            ].map((skill, index) => (
              <span
                key={index}
                className="
                  px-4 py-2 
                  bg-white/60 
                  backdrop-blur-lg 
                  border border-gray-300 
                  rounded-lg 
                  text-sm text-gray-900 
                  shadow
                "
              >
                {skill}
              </span>
            ))}
          </div>

        </WindowCard>
      </div>
    </section>
  );
}
