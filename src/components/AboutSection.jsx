import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowUpLeft, Sparkles } from 'lucide-react'

export default function AboutSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#faf8f2]"
    >
      {/* Soft gold & blue ambient glows */}
      <div className="absolute top-10 left-1/3 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#1D4ED8]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#D4AF37]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ABOUT US */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-black text-[#1D4ED8] leading-[1.05] tracking-tight transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              About Us
            </h2>
          </div>

          {/* Action buttons top-right */}
          <div
            className={`flex flex-wrap items-center gap-3 pt-1 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white border border-gray-300 text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-black uppercase transition-all duration-300 hover:border-black hover:shadow-sm"
            >
              <span>DISCOVER MORE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-black text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-lg"
            >
              <span>LEARN MORE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </a>
          </div>
        </div>

        {/* Content & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: About text */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="space-y-4 text-gray-700 text-xs sm:text-[14.5px] leading-relaxed max-w-md">
              <p>
                Ecore is a strategic mineral company registered with the Corporate Affairs
                Commission (CAC) and a member of solid mineral producers. Headquartered in
                Abuja FCT. Our company is primed to become one of the leading global sources
                of strategic minerals for battery production and other energy needs in West
                Africa. The limited liability company was founded in 2023.
              </p>
              <p>
                Ecore is a critical mineral exploration and development company positioned
                to become a top supplier of battery grade lithium for the expanding global
                demand for EV support chain.
              </p>
              <p>
                We are targeting highly prospective under explored hard-rock Spodumene and
                brine mining assets in West Africa, especially the Central Nigeria Lithium
                Belt.
              </p>
              <p>
                Ecore will leverage on cutting edge Direct Lithium Extraction (DLE)
                technology and modular processing to accelerate the time for commercial
                production of Lithium concentrates, carbonates and hydroxide.
              </p>
            </div>

            {/* Credibility highlights */}
            <div className="space-y-3 pt-6 mt-6 border-t border-gray-200/60 max-w-md">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#B8941F] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-800">
                  CAC Registered Mineral Developer (Est. 2023)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#B8941F] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-800">
                  West Africa EV Battery Value Chain Supplier
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#B8941F] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-800">
                  Central Nigeria & Taraba High-Grade Lithium Belts
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <ArrowUpLeft className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div className="rounded-2xl sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 border border-white">
                <img
                  src="/assets/standing%20(2).jpg"
                  alt="Ecore representatives standing outside a building"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-gray-200">
          <h2
            className={`text-4xl sm:text-6xl md:text-7xl font-black text-[#1D4ED8] leading-[1.05] tracking-tight mb-6 sm:mb-8 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Mission
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="space-y-4 text-gray-700 text-xs sm:text-[14.5px] leading-relaxed">
                <p>
                  Ecore plan to process and supply high-purity Lithium concentrates or
                  battery grade compounds to fuel the global electric vehicle (EV) and energy
                  storage transition. Ecore is an exploration, mining, processing and a
                  mineral export company in West Africa. One of its objectives is to offer
                  alternative source of high quality preprocessed and unprocessed raw
                  materials for lithium battery manufacturing at a competitive price.
                </p>
                <p>
                  Our company is engaged in exploring energy transition metals to take
                  advantage of the global shift towards decarbonization and electrification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VISION */}
        <div className="mt-14 sm:mt-20 pt-12 sm:pt-16 border-t border-gray-200">
          <h2
            className={`text-4xl sm:text-6xl md:text-7xl font-black text-[#1D4ED8] leading-[1.05] tracking-tight mb-6 sm:mb-8 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Vision
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="space-y-4 text-gray-700 text-xs sm:text-[14.5px] leading-relaxed">
                <p>
                  To be the leading supplier of processed critical solid materials for
                  global production of batteries and storage products. The company is
                  primarily focused on acquiring properties situated in North Central
                  States of Nigeria, an area known to have abundance of critical minerals
                  and gem stones.
                </p>
                <p>
                  We aim at establishing an eco-friendly lithium processing plant in
                  Nigeria ensuring a commitment to steady supply of raw materials to end
                  users.
                </p>
                <p>
                  Ecore is focused to acquiring, developing and commercialization of mine
                  assets across West Africa. Currently, we have a tentative agreement with
                  our partner DAROO limited to develop Lugbe project for the production of
                  lithium concentrates for global market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
