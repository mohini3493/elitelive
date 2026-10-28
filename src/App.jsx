import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import LogoMarquee from './components/LogoMarquee.jsx'
import SafeSection from './components/SafeSection.jsx'
import ContextGraph from './components/ContextGraph.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Stats from './components/Stats.jsx'
import Paths from './components/Paths.jsx'
import Benchmark from './components/Benchmark.jsx'
import Comparison from './components/Comparison.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <Navbar />
      <main id="main-content">
        <Hero />
        <LogoMarquee />
        <SafeSection />
        <ContextGraph />
        <HowItWorks />
        <Stats />
        <Paths />
        <Benchmark />
        <Comparison />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
