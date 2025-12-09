import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ❗ Close mobile menu when user scrolls
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f15]/70 backdrop-blur-xl border-b border-white/10 px-6 md:px-16 lg:px-32 py-4 shadow-lg">
      <div className="flex items-center justify-between">

        {/* Logo / Name */}
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          Doss Cyril
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-gray-300 font-medium">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 flex flex-col gap-4 text-gray-200 font-medium fade-in">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}