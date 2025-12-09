export default function WindowCard({ children, className }) {
  return (
    <div
      className={`
        bg-white/75 
        backdrop-blur-xl 
        rounded-2xl 
        shadow-xl 
        border border-white/30 
        overflow-hidden 
        transition 
        ${className}
      `}
    >
      {/* Top Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md border-b border-white/30">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-6">
        {children}
      </div>
    </div>
  );
}