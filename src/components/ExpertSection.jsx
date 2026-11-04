import { useEffect, useRef, useState } from 'react'

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
      className="relative py-24 lg:py-32 overflow-hidden bg-[#fafcfb]"
    >
      {/* Background ambient mesh gradient matching design inspo */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#dbeafe]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#dcfce7]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#f0fdf4]/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Expert Image Card with "OUR EXPERT" badge */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative mx-auto max-w-[430px] lg:max-w-none">
              {/* Outer soft shadow frame */}
              <div className="relative rounded-[36px] overflow-hidden shadow-2xl bg-gradient-to-b from-[#6b8c9c]/30 to-[#9db4c0]/20 p-1.5 backdrop-blur-sm border border-white/80">
                {/* Main Portrait Container */}
                <div className="relative rounded-[30px] overflow-hidden bg-[#8ca3a6] aspect-[4/5] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=85&fit=crop&crop=top"
                    alt="Ecore Chief Geologist and Mineral Strategist"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.02] transform transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient sheen at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating "OUR EXPERT" Badge top-right matching exact design inspo */}
              <div className="absolute -top-3.5 right-6 z-20">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100/80">
                  {/* Headset icon */}
                  <svg
                    className="w-4 h-4 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                  <span className="text-[11px] font-bold tracking-[0.15em] text-gray-800 uppercase">
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
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-[#111827] leading-[1.08] mb-8 font-sans">
              Expert Driven
              <span className="block">Strategies for</span>
              <span className="block font-medium">Sustainable Growth</span>
            </h2>

            {/* Paragraph block */}
            <div className="space-y-2 mb-8 text-gray-600 text-[14.5px] leading-relaxed max-w-xl">
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
            <div className="space-y-4 mb-10 max-w-xl">
              {[
                'Personalized solutions tailored to your business needs',
                'Optimized workflow and production efficiency improvements',
                'Technology guidance to upgrade machinery and processes',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 pb-2.5 border-b border-gray-200/50 last:border-0"
                >
                  {/* Green Asterisk Icon matching inspo */}
                  <span className="text-[#22c55e] text-lg font-bold select-none leading-none">
                    ✳
                  </span>
                  <span className="text-[13.5px] text-gray-700 font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons matching design inspo */}
            <div className="flex flex-wrap items-center gap-4">
              {/* BOOK A MEETING */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-300 text-[11px] font-bold tracking-[0.14em] text-gray-900 uppercase transition-all duration-300 hover:border-black hover:bg-gray-50 hover:shadow-sm"
              >
                <span>BOOK A MEETING</span>
                <span className="text-gray-500 text-sm">↗</span>
              </a>

              {/* LEARN MORE */}
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d0d0d] text-[11px] font-bold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-[#222] hover:shadow-lg"
              >
                <span>LEARN MORE</span>
                <span className="text-[#22c55e] text-sm">↗</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

