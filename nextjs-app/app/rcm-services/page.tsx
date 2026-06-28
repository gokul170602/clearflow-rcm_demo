import { getRCMServices, getHeroContent } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesGrid from '@/components/ServicesGrid'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

// This runs on the server — data is fetched from Sanity at build/request time
export default async function RCMServicesPage() {
  const [hero, services] = await Promise.all([getHeroContent(), getRCMServices()])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection hero={hero} />
      <ServicesGrid services={services} />
      <CTASection />
      <Footer />
    </div>
  )
}
