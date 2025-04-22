import Hero from '@/components/Hero'
import MidSection from '@/components/MidSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import TransformationImpact from '@/components/TransformationImpact'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-[#0E0E0E]">
      <Hero />
      <MidSection />
      <FeaturesGrid />
      <TransformationImpact />
      <CTASection />
      <Footer />
    </div>
  )
} 