import { useEffect, useRef, useState } from 'react'

export default function AboutSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fff8 0%, #edf7ed 40%, #e8f4ff 100%)',
      }}
    >
      {/* Green glow blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top row: headline + buttons */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#0D0D0D] leading-[1.0] tracking-tight transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Elevating West Africa's
              <span className="block">Mineral Wealth</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
                to Global Markets.
              </span>
            </h2>
          </div>

          {/* CTA buttons top right */}
          <div
            className={`flex items-center gap-3 mt-2 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a href="#products" className="btn-outline-sm">
              Discover More ↗
            </a>
            <a href="#contact" className="btn-dark-sm">
              Learn More ↗
            </a>
          </div>
        </div>

        {/* Main grid: left content + right images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Stat */}
            <div className="mb-10">
              <p className="text-5xl font-black text-[#0D0D0D] tracking-tight">01K+</p>
              <p className="text-gray-600 text-sm mt-1 font-medium leading-tight">
                Our Business Thrives<br />When Yours Does.
              </p>
            </div>

            {/* Text content */}
            <div className="mb-10">
              <h3 className="text-xl font-black text-[#0D0D0D] mb-3">
                Driving Exponential<br />Business Growth.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empower your business. Our tailored, comprehensive mineral solutions meet your needs. Ecore is a strategic mineral company registered with the Corporate Affairs Commission (CAC) and a member of solid mineral producers, headquartered in Abuja FCT.
              </p>
            </div>

            {/* About highlights */}
            <div className="space-y-4">
              {[
                'CAC registered strategic mineral company',
                'Founded in 2023 with global ambitions',
                'Headquartered in Abuja, FCT Nigeria',
                'Partner of Daroo Ltd. for Lugbe project',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5AE05A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#5AE05A]" />
                  </div>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: images */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="grid grid-cols-5 gap-4 h-[460px]">
              {/* Tall left image */}
              <div className="col-span-3 relative">
                <img
                  src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=600&q=80"
                  alt="Mining executives"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Right: arrow button + tall image */}
              <div className="col-span-2 flex flex-col gap-4">
                {/* Floating arrow button */}
                <div className="flex justify-center items-center pt-2">
                  <div className="w-12 h-12 bg-[#0D0D0D] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                    <svg className="w-5 h-5 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
                {/* Taller right image */}
                <div className="flex-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                    alt="Business meeting"
                    className="w-full h-full object-cover rounded-2xl"
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
