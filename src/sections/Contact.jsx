import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";  // ✅ Correct updated package
import toast from "react-hot-toast";
import WindowCard from "../components/WindowCard";

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    // Debug: check if env variables are loading
    console.log("SERVICE:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,   // SERVICE ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // TEMPLATE ID
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY    // PUBLIC KEY
      )
      .then(
        () => {
          toast.success("Message sent! I'll contact you soon 🚀");
        },
        (err) => {
          console.error("EmailJS error:", err);
          toast.error("Failed to send. Try again later ❌");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="w-full px-8 md:px-16 lg:px-32 pt-24 pb-10 relative mb-0"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#0f0f15]">
        <div
          className="absolute inset-0 bg-gradient-to-br 
            from-purple-800/20 via-blue-800/20 to-fuchsia-800/20 
            blur-3xl opacity-60"
        ></div>
      </div>

      <div className="max-w-4xl mx-auto animate-fadeInUp">
        <WindowCard>

          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-indigo-500">
              Me
            </span>
          </h2>

          <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto mb-6">
            Want to collaborate, hire me, or just say hello?  
            I’d love to connect — feel free to reach out!
          </p>

          {/* Mailto Button */}
          <div className="flex justify-center mb-8">
            <a
              href="mailto:dosscyrill@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-slate-700 to-indigo-500 
                         text-white font-medium rounded-lg shadow hover:opacity-90 
                         transition"
            >
              Send me an Email
            </a>
          </div>

          {/* EmailJS Contact Form */}
          <form onSubmit={sendEmail} className="mt-6 flex flex-col gap-4 px-4">

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="px-4 py-3 border border-gray-300 rounded-lg bg-white/60 backdrop-blur-md text-gray-900"
              required
            />

            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              className="px-4 py-3 border border-gray-300 rounded-lg bg-white/60 backdrop-blur-md text-gray-900"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="px-4 py-3 border border-gray-300 rounded-lg bg-white/60 backdrop-blur-md text-gray-900"
              required
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-slate-700 to-indigo-500 text-white 
                         rounded-lg font-semibold hover:opacity-90 transition shadow"
            >
              Send Message
            </button>

          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-10 text-4xl mt-10 mb-4">

            <a
              href="https://github.com/Dosscyril"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/60 backdrop-blur-md border border-gray-300 
                         rounded-xl text-gray-900 shadow hover:bg-white/80 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/doss-cyril/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/60 backdrop-blur-md border border-gray-300
                         rounded-xl text-blue-700 shadow hover:bg-white/80 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:dosscyrill@gmail.com"
              className="p-3 bg-white/60 backdrop-blur-md border border-gray-300 
                         rounded-xl text-red-600 shadow hover:bg-white/80 transition"
            >
              <FaEnvelope />
            </a>

          </div>

          <p className="text-center text-gray-600 text-sm pb-2">
            📍 Hyderabad, India
          </p>

        </WindowCard>
      </div>
    </section>
  );
}
