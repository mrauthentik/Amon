import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import ExpertSection from './components/ExpertSection'
import StatsSection from './components/StatsSection'
import SustainabilitySection from './components/SustainabilitySection'
import InvestmentSection from './components/InvestmentSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ExpertSection />
        <StatsSection />
        <SustainabilitySection />
        <InvestmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
