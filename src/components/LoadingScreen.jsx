export function LoadingScreen1() {
  return (
    <div className="fixed inset-0 bg-[#0f0f15] flex flex-col items-center justify-center z-[9999]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 via-blue-700/20 to-fuchsia-700/20 blur-3xl"></div>
      
      {/* Animated Name */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-indigo-500 animate-pulse">
          Doss Cyril
        </h1>
        
        {/* Animated Dots */}
        <div className="flex gap-2 justify-center mt-6">
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
}
export default LoadingScreen1;