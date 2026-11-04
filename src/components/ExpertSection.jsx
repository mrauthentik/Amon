import { useEffect, useRef, useState } from 'react'
import { Headphones, ArrowUpRight, Sparkles } from 'lucide-react'

export default function ExpertSection() {
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
      id="expert"
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#fafcfb]"
    >
      {/* Background ambient mesh gradient matching design inspo */}
      <div className="absolute top-0 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#dbeafe]/40 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] bg-[#dcfce7]/50 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#f0fdf4]/60 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Expert Image Card with "OUR EXPERT" badge */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative mx-auto max-w-[360px] sm:max-w-[430px] lg:max-w-none">
              {/* Outer soft shadow frame */}
              <div className="relative rounded-2xl sm:rounded-[36px] overflow-hidden shadow-2xl bg-gradient-to-b from-[#6b8c9c]/30 to-[#9db4c0]/20 p-1.5 backdrop-blur-sm border border-white/80">
                {/* Main Portrait Container */}
                <div className="relative rounded-xl sm:rounded-[30px] overflow-hidden bg-[#8ca3a6] aspect-[4/5] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=85&fit=crop&crop=top"
                    alt="Ecore Chief Geologist and Mineral Strategist"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.02] transform transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient sheen at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating "OUR EXPERT" Badge matching exact design inspo */}
              <div className="absolute -top-3.5 right-4 sm:right-6 z-20">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100/80">
                  <Headphones className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-700" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-gray-800 uppercase">
                    OUR EXPERT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subtitle, Asterisk Bullet Points, Buttons */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center transition-all duration-1000 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-[#111827] leading-[1.1] mb-6 sm:mb-8 font-sans">
              Expert Driven
              <span className="block">Strategies for</span>
              <span className="block font-medium">Sustainable Growth</span>
            </h2>

            {/* Paragraph block */}
            <div className="space-y-2 mb-6 sm:mb-8 text-gray-600 text-xs sm:text-[14.5px] leading-relaxed max-w-xl">
              <p className="font-semibold text-gray-900">
                Expert-Driven Strategies for Sustainable Growth
              </p>
              <p>
                In today's dynamic business environment, mere effort is not enough—it
                requires specialized knowledge and proven methodologies. Our team of
                seasoned experts brings years of cross-industry experience and strategic
                insight directly to your organization. We don't just offer advice.
              </p>
            </div>

            {/* Star Bullet List */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 max-w-xl">
              {[
                'Personalized solutions tailored to your business needs',
                'Optimized workflow and production efficiency improvements',
                'Technology guidance to upgrade machinery and processes',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 sm:gap-3.5 pb-2.5 border-b border-gray-200/50 last:border-0"
                >
                  {/* Clean SVG Star Icon */}
                  <div className="flex-shrink-0 w-4 h-4 text-[#22c55e]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 0l2.5 8.5H23l-7 5 2.5 8.5L12 17l-6.5 5 2.5-8.5-7-5h8.5z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-[13.5px] text-gray-700 font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons matching design inspo */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* BOOK A MEETING */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white border border-gray-300 text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-gray-900 uppercase transition-all duration-300 hover:border-black hover:bg-gray-50 hover:shadow-sm"
              >
                <span>BOOK A MEETING</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
              </a>

              {/* LEARN MORE */}
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0d0d0d] text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-[#222] hover:shadow-lg"
              >
                <span>LEARN MORE</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#22c55e]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
