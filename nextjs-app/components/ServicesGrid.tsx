import {
  ShieldCheck,
  ClipboardList,
  Send,
  RefreshCw,
  Handshake,
  BarChart3,
  LucideIcon,
} from 'lucide-react'
import type { RCMService } from '@/lib/sanity'

// Map iconKey strings (stored in Sanity) to Lucide icon components
const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardList,
  Send,
  RefreshCw,
  HandshakeIcon: Handshake,
  BarChart3,
}

interface ServicesGridProps {
  services: RCMService[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#0D9488] text-sm font-semibold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            {/* Diamond accent using SVG instead of ✦ emoji */}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
              <path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5Z" />
            </svg>
            Powered by Sanity CMS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">Our RCM Services</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every service below is a document in Sanity — edit once, update everywhere.
          </p>
        </div>

        {/* Services grid — data from Sanity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: RCMService }) {
  const Icon = ICON_MAP[service.iconKey] ?? ShieldCheck

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-7 hover:border-[#14B8A6] hover:shadow-lg transition-all duration-300 group flex flex-col">
      {/* Icon + stat row */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] group-hover:bg-[#14B8A6] group-hover:text-white transition-colors duration-300">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-[#0D9488]">{service.stat.value}</div>
          <div className="text-xs text-gray-400">{service.stat.label}</div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#0A1628] mb-2 group-hover:text-[#0D9488] transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{service.shortDescription}</p>

      {/* Benefits list */}
      <ul className="space-y-2 border-t border-gray-100 pt-5">
        {service.benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-4 h-4 rounded-full bg-[#14B8A6]/15 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full" />
            </span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}
