import { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-20 overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80')`,
        }}
      />
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      {/* Green glow accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#5AE05A]/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left column - main headline */}
          <div>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 bg-[#5AE05A] rounded-full animate-pulse" />
              <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">
                West Africa's Critical Minerals Leader
              </span>
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8 transition-all duration-700 delay-100 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              MAXIMIZE YOUR
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#5AE05A] to-[#88f088]">
                MINERAL
              </span>
              POTENTIAL TODAY
            </h1>

            {/* Stats row */}
            <div
              className={`flex items-center gap-10 mb-10 transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div>
                <p className="text-3xl font-black text-white">2+</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-0.5">Proven<br />Mine Sites</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-3xl font-black text-white">600K+</p>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-0.5">Hectares<br />Under Dev.</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex items-center gap-4 flex-wrap transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a href="#about" className="btn-dark">
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a href="#products" className="inline-flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-widest hover:text-white transition-colors">
                Explore Products
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column - info card */}
          <div
            className={`transition-all duration-700 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-black/50 backdrop-blur-md border border-white/15 rounded-2xl p-6 max-w-sm ml-auto">
              {/* Arrow button */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-5 hover:scale-110 transition-transform cursor-pointer">
                <svg className="w-4 h-4 text-black rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              <h3 className="text-white font-bold text-lg leading-tight mb-3">
                RESULTS DRIVEN<br />MINERAL PARTNERSHIP.
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">
                Comprehensive Solutions Spanning Exploration, Processing, and Export of Critical Solid Minerals Across West Africa.
              </p>

              {/* Client avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['bg-emerald-500', 'bg-blue-500', 'bg-amber-500'].map((color, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 ${color} rounded-full border-2 border-black flex items-center justify-center`}
                    >
                      <span className="text-white text-[8px] font-bold">{['A', 'B', 'C'][i]}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">1000K+</p>
                  <p className="text-white/40 text-[10px]">Our Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}
