import { useEffect, useRef, useState } from 'react'

export default function LeadershipSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="leadership"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 bg-[#faf8f2] relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#1D4ED8]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2
            className={`text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#1D4ED8] tracking-tight leading-[1.05] transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Leadership and Team
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Chairman Portrait — the only image in this section */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <img
                src="/assets/chariman_pic.jpeg"
                alt="Chairman portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Leadership Text */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
              Our management team has skill set and wealth of experience in project
              development and execution. Ecore vision remain to be a responsible strategic
              mineral explore and developer within the region of West Africa.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
              Ecore and Daroo Ltd have established a working relationship to collaborate
              in exploration of critical solid minerals, development of mines, lithium
              processing plant in Nigeria. Daroo Ltd is solid mineral company with
              expansive reach in the mining sector. It is led by Alhaji Liman a seasoned
              mining executive with extensive experience in extractive industry spanning
              over a decade.
            </p>
            <a
              href="#operations"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1D4ED8] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-[#1E3A8A] transition-colors"
            >
              Explore Lugbe Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
