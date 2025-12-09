export default function Footer() {
  return (
    <footer className="
      w-full py-6 
      bg-[#0f0f15]/80 
      backdrop-blur-xl 
      border-t border-white/10 
      shadow-[0_-4px_20px_rgba(0,0,0,0.25)]
      text-center
      flex flex-col items-center gap-2
      px-4
    ">
      <p className="text-gray-300 text-sm">
        © {new Date().getFullYear()} Doss Cyril — All Rights Reserved
      </p>

      <p className="text-gray-500 text-xs">
        Built with ❤️
      </p>
    </footer>
  );
}