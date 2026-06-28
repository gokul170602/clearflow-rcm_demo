'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="6" fill="#14B8A6" />
            {/* Stylised "C" / flow path */}
            <path
              d="M19 9.5C17.5 8.2 15.8 7.5 14 7.5C10.1 7.5 7 10.6 7 14.5C7 18.4 10.1 21.5 14 21.5C15.8 21.5 17.5 20.8 19 19.5"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="19.5" cy="14.5" r="2" fill="white" />
          </svg>
          <span className="text-white font-semibold text-lg tracking-tight">ClearFlow</span>
          <span className="hidden sm:inline text-[#2DD4BF] text-xs font-medium tracking-widest uppercase ml-0.5">
            RCM
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#results" className="hover:text-white transition-colors">Results</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a
            href="#contact"
            className="bg-[#14B8A6] hover:bg-[#0D9488] text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Get Audit
          </a>
        </div>
      </div>
    </nav>
  )
}
