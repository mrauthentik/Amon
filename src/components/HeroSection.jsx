import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-end pb-12 sm:pb-20 lg:pb-24 pt-28 sm:pt-36 overflow-hidden bg-[#0d0d0d]"
    >
      {/* Background Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-[0.65] contrast-[1.1] transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=85')`,
        }}
      />

      {/* Atmospheric dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      {/* Subtle green ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#5AE05A]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Heading, Metrics, and Action Buttons */}
          <div className="lg:col-span-7">
            {/* Main Headline */}
            <h1
              className={`text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold text-white tracking-tight leading-[1.08] uppercase mb-8 sm:mb-10 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              MAXIMIZE YOUR BUSINESS
              <span className="block font-medium text-white/90">
                GROWTH TODAY
              </span>
            </h1>

            {/* Metrics Row */}
            <div
              className={`flex flex-wrap items-start gap-8 sm:gap-14 mb-8 sm:mb-10 transition-all duration-700 delay-150 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                <p className="text-2xl sm:text-4xl font-light text-white tracking-tight">
                  472 +
                </p>
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-white/60 mt-1 leading-snug">
                  EXPERT<br />SOLUTIONS.
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-4xl font-light text-white tracking-tight">
                  597 +
                </p>
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-white/60 mt-1 leading-snug">
                  ENTERPRISES<br />TO THRIVE
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* LEARN MORE */}
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <span>LEARN MORE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* EXPLORE MORE */}
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase hover:border-white hover:bg-black/60 transition-all duration-300"
              >
                <span>EXPLORE MORE</span>
                <ArrowUpRight className="w-4 h-4 text-[#5AE05A]" />
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphic Floating Card */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Floating circular arrow button */}
            <div className="flex justify-end mb-2 sm:mb-0 sm:absolute sm:-top-5 sm:right-4 z-20">
              <a
                href="#contact"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform cursor-pointer"
                title="Initiate Partnership"
              >
                <ArrowUpRight className="w-5 h-5 text-black" />
              </a>
            </div>

            {/* Frosted Glassmorphism Card */}
            <div className="relative rounded-2xl sm:rounded-[32px] p-6 sm:p-8 lg:p-9 bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Card Title */}
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug uppercase mb-3 sm:mb-4">
                RESULTS DRIVEN<br />BUSINESS PARTNERSHIP.
              </h3>

              {/* Card Subtext */}
              <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed max-w-sm">
                Comprehensive Solutions, Spanning Mineral Exploration, Direct Lithium Extraction (DLE),
                Beneficiation, and Worldwide Export Efficiency.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
