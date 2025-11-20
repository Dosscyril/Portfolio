import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0f0f15] flex items-center justify-center z-[9999]">
      {/* Glass Loader */}
      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-pulse">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-bounce"></div>
      </div>
    </div>
  );
}
