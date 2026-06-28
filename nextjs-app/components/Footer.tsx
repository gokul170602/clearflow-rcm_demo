export default function Footer() {
  return (
    <footer className="bg-[#060E1F] border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="6" fill="#14B8A6" />
            <path
              d="M19 9.5C17.5 8.2 15.8 7.5 14 7.5C10.1 7.5 7 10.6 7 14.5C7 18.4 10.1 21.5 14 21.5C15.8 21.5 17.5 20.8 19 19.5"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="19.5" cy="14.5" r="2" fill="white" />
          </svg>
          <span className="text-white font-semibold">ClearFlow RCM</span>
        </div>

        <p className="text-gray-600 text-sm text-center">
          Built with{' '}
          <span className="text-[#2DD4BF]">Next.js App Router</span>
          {' '}+{' '}
          <span className="text-[#2DD4BF]">Sanity CMS</span>
          {' '}+{' '}
          <span className="text-[#2DD4BF]">Tailwind CSS</span>
        </p>

        <p className="text-gray-700 text-xs">© 2024 ClearFlow RCM. Demo only.</p>
      </div>
    </footer>
  )
}
