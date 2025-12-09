import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

// Import project detail pages
import HandMadeHubDetail from "./pages/HandMadeHubDetail";
// import RAGChatbotDetail from "./pages/RAGChatbotDetail"; // Add when ready
// import ObjectDetectionDetail from "./pages/ObjectDetectionDetail"; // Add when ready

// Main layout component (homepage)
function MainLayout() {
  return (
    <div className="fade-in">  
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <ScrollToTop />

      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          {/* Main homepage */}
          <Route path="/" element={<MainLayout />} />
          
          {/* Project detail pages */}
          <Route path="/projects/handmadehub" element={<HandMadeHubDetail />} />
          {/* <Route path="/projects/rag-chatbot" element={<RAGChatbotDetail />} /> */}
          {/* <Route path="/projects/object-detection" element={<ObjectDetectionDetail />} /> */}
          
          {/* Fallback - redirect to home */}
          <Route path="*" element={<MainLayout />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;