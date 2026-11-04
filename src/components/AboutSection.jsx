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
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#fafdfa]"
    >
      {/* Soft ethereal pastel mesh gradient */}
      <div className="absolute top-10 left-1/3 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#dcfce7]/60 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#dbeafe]/50 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#f0fdf4]/50 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#111827] leading-[1.1] tracking-tight transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Elevating Businesses
              <span className="block">to New Levels of</span>
              <span className="block font-medium">Success.</span>
            </h2>
          </div>

          {/* Action buttons top-right */}
          <div
            className={`flex flex-wrap items-center gap-3 pt-1 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* DISCOVER MORE */}
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white border border-gray-300 text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-gray-900 uppercase transition-all duration-300 hover:border-black hover:shadow-sm"
            >
              <span>DISCOVER MORE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
            </a>

            {/* LEARN MORE */}
            <a
              href="#operations"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#0d0d0d] text-[10px] sm:text-[10.5px] font-bold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-[#222] hover:shadow-lg"
            >
              <span>LEARN MORE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#5AE05A]" />
            </a>
          </div>
        </div>

        {/* Content & Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Stat 01K+ & Text */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* 01K+ Stat */}
            <div className="mb-8 sm:mb-12">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#111827] tracking-tight mb-2">
                01K+
              </p>
              <p className="text-gray-600 text-xs sm:text-sm font-normal leading-snug">
                Our Business Thrives<br />When Yours Does.
              </p>
            </div>

            {/* Driving Exponential Business Growth */}
            <div className="mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3 leading-snug">
                Driving Exponential<br />Business Growth.
              </h3>
              <p className="text-gray-600 text-xs sm:text-[14.5px] leading-relaxed max-w-md">
                Empower your business. Our tailored, comprehensive mineral solutions meet your
                needs. Ecore is a strategic mineral company registered with the Corporate Affairs
                Commission (CAC) and a member of solid mineral producers, headquartered in Abuja FCT.
              </p>
            </div>

            {/* Credibility highlights */}
            <div className="space-y-3 pt-4 border-t border-gray-200/60 max-w-md">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-700">
                  CAC Registered Mineral Developer (Est. 2023)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-700">
                  West Africa EV Battery Value Chain Supplier
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Central Nigeria & Taraba High-Grade Lithium Belts
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Inspo Dual Cards Layout */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-end">
              
              {/* Card 1: Left photo with circular arrow button overlay */}
              <div className="sm:col-span-5 relative">
                {/* Circular Black Arrow Button */}
                <div className="mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform cursor-pointer">
                    <ArrowUpLeft className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Rounded Photo */}
                <div className="rounded-2xl sm:rounded-[28px] overflow-hidden shadow-lg aspect-[4/5] bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=600&q=80"
                    alt="Corporate collaboration at Ecore office"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Card 2: Right taller photo */}
              <div className="sm:col-span-7 mt-4 sm:mt-0">
                <div className="rounded-2xl sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] bg-gray-200 border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                    alt="Mining engineers and executives discussing mineral data on tablet outdoors"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
