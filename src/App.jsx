import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import LeadershipSection from './components/LeadershipSection'
import SustainabilitySection from './components/SustainabilitySection'
import InvestmentSection from './components/InvestmentSection'
import SocialResponsibilitySection from './components/SocialResponsibilitySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <section className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden bg-black">
          <img
            src="/assets/zuma_rock_pic.jpg"
            alt="Zuma Rock, Abuja"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white/90 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]">
              Abuja &middot; Nigeria
            </p>
          </div>
        </section>
        <AboutSection />
        <ProductsSection />
        <LeadershipSection />
        <SustainabilitySection />
        <InvestmentSection />
        <SocialResponsibilitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
