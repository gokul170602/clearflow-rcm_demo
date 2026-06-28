import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0A1628] text-white gap-6 px-4">
      <div className="text-center">
        <p className="text-[#2DD4BF] text-sm font-semibold tracking-widest uppercase mb-3">
          Next.js + Sanity Demo
        </p>
        <h1 className="text-5xl font-bold mb-4">ClearFlow RCM</h1>
        <p className="text-gray-400 text-lg max-w-md">
          A demo of Sanity CMS powering a Next.js App Router site. Data is fetched server-side via GROQ.
        </p>
      </div>
      <Link
        href="/rcm-services"
        className="mt-4 bg-[#14B8A6] hover:bg-[#0D9488] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
      >
        View RCM Services Page →
      </Link>
    </main>
  )
}
