import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-end pb-16 lg:pb-24 pt-32 overflow-hidden bg-[#0d0d0d]"
    >
      {/* Background Hero Image with two executives shaking hands */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-[0.7] contrast-[1.08] transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=85')`,
        }}
      />

      {/* Atmospheric dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

      {/* Subtle green aura in upper right */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#5AE05A]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column: Heading, Metrics, and Action Buttons */}
          <div className="lg:col-span-7">
            {/* Main Headline matching inspo */}
            <h1
              className={`text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.05] uppercase mb-10 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              MAXIMIZE YOUR BUSINESS
              <span className="block font-medium text-white/90">
                GROWTH TODAY
              </span>
            </h1>

            {/* Metrics Row matching 472+ / 597+ from inspo */}
            <div
              className={`flex items-start gap-12 sm:gap-16 mb-10 transition-all duration-700 delay-150 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                <p className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                  472 +
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60 mt-1 leading-snug">
                  EXPERT<br />SOLUTIONS.
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                  597 +
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60 mt-1 leading-snug">
                  ENTERPRISES<br />TO THRIVE
                </p>
              </div>
            </div>

            {/* Buttons Row matching inspo */}
            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* LEARN MORE - White pill with black text and arrow */}
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <span>LEARN MORE</span>
                <span className="text-sm font-semibold">↗</span>
              </a>

              {/* EXPLORE MORE - Dark pill with border and green arrow */}
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm text-white text-[11px] font-bold tracking-[0.15em] uppercase hover:border-white hover:bg-black/60 transition-all duration-300"
              >
                <span>EXPLORE MORE</span>
                <span className="text-[#22c55e] text-sm font-semibold">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphic Floating Card matching inspo */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Floating circular arrow button matching top-right of glass card */}
            <div className="absolute -top-5 right-4 z-20">
              <a
                href="#contact"
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform cursor-pointer"
                title="Initiate Partnership"
              >
                <span className="text-base font-bold">↗</span>
              </a>
            </div>

            {/* Frosted Glassmorphism Card */}
            <div className="relative rounded-[32px] p-8 sm:p-9 bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug uppercase mb-4">
                RESULTS DRIVEN<br />BUSINESS PARTNERSHIP.
              </h3>

              {/* Card Subtext */}
              <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed mb-8 max-w-sm">
                Comprehensive Solutions, Spanning Mineral Exploration, Direct Lithium Extraction (DLE),
                Beneficiation, and Worldwide Export Efficiency.
              </p>

              {/* Clients & Avatars Row */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                    alt="Partner avatar 1"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                    alt="Partner avatar 2"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                    alt="Partner avatar 3"
                  />
                </div>

                <div className="text-right">
                  <p className="text-xs font-bold text-white tracking-wide">
                    1000K+
                  </p>
                  <p className="text-[10px] text-white/50 tracking-wider">
                    Our Clients Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
