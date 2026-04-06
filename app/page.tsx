import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { HowItWorks } from '@/components/HowItWorks'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
