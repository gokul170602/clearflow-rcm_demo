import type { HeroContent } from '@/lib/sanity'

interface HeroSectionProps {
  hero: HeroContent
}

export default function HeroSection({ hero }: HeroSectionProps) {
  const lines = hero.headline.split('\n')

  return (
    <section className="bg-[#0A1628] pt-32 pb-20 px-6 overflow-hidden relative">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#2DD4BF 1px, transparent 1px), linear-gradient(90deg, #2DD4BF 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Badge — from Sanity */}
        <div className="inline-flex items-center gap-2 bg-[#14B8A6]/10 border border-[#14B8A6]/30 text-[#2DD4BF] text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse" aria-hidden="true" />
          {hero.badge}
        </div>

        {/* Headline — from Sanity */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl">
          {lines.map((line, i) => (
            <span key={i}>
              {i === 0 ? (
                line
              ) : (
                <span className="text-[#2DD4BF]">{line}</span>
              )}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {/* Subheadline — from Sanity */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          {hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#contact"
            className="bg-[#14B8A6] hover:bg-[#0D9488] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-center"
          >
            {hero.ctaText}
          </a>
          <a
            href="#services"
            className="border border-white/20 text-white hover:bg-white/5 font-medium px-8 py-3.5 rounded-lg transition-colors text-center"
          >
            Explore Services ↓
          </a>
        </div>

        {/* Stats — from Sanity */}
        <div id="results" className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
          {hero.stats.map((stat, i) => (
            <div key={i} className="bg-[#0F2040] px-8 py-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#2DD4BF] mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
