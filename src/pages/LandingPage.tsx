import { Header } from '../components/common/Header'
import { Footer } from '../components/common/Footer'
import { HeroSection } from '../components/sections/HeroSection'
import { FeaturesSection } from '../components/sections/FeaturesSection'
import { AboutSection } from '../components/sections/AboutSection'
import { FlowSection } from '../components/sections/FlowSection'
import { CTASection } from '../components/sections/CTASection'

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <FlowSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
