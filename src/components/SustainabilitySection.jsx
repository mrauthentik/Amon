import { useEffect, useRef, useState } from 'react'

export default function SustainabilitySection() {
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
      id="sustainability"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 right-1/3 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#D4AF37]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#1D4ED8]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h2
              className={`text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#1D4ED8] tracking-tight leading-[1.05] mb-6 sm:mb-8 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Sustainability Framework
            </h2>

            <div
              className={`space-y-4 sm:space-y-5 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-700 delay-150 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p>
                Our resource extraction is defined with environmental protection,
                decarbonization, combination of eco-conscious practices, community
                development and social responsibility.
              </p>
              <p>
                Ecore is focused on efficient, sustainable practices, safe and inclusive
                workforce development, and decision-making that accounts for shifting
                geopolitical trends that impact within the areas of our operation. We follow
                a central framework of values that touches all aspects of operations and
                planning, setting forth a vision of fully integrated sustainability and
                responsibility.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 border border-white">
              <img
                src="/assets/standing%20(1).jpg"
                alt="Ecore sustainability"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
