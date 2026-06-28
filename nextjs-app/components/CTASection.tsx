'use client'

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#0A1628] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#2DD4BF] text-sm font-semibold tracking-widest uppercase mb-4">
          Free Assessment
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          See how much revenue you&apos;re leaving on the table
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Our RCM specialists will audit your current billing workflow and identify recovery
          opportunities — at no cost.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@hospital.com"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-500 px-5 py-3.5 rounded-lg focus:outline-none focus:border-[#14B8A6]"
          />
          <button className="bg-[#14B8A6] hover:bg-[#0D9488] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
            Get Free Audit
          </button>
        </div>
        <p className="text-gray-600 text-xs mt-4">
          No commitment. Results delivered in 5 business days.
        </p>
      </div>
    </section>
  )
}
