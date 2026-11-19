import { useEffect, useRef, useState } from 'react'
import { Zap, Landmark, Gem } from 'lucide-react'

export default function InvestmentSection() {
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
      id="investment"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 bg-[#faf8f2] relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#1D4ED8]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#1D4ED8] tracking-tight leading-[1.05] max-w-4xl">
            Universal Investment Opportunity
          </h2>
        </div>

        {/* Intro text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Investment in our company have tremendous advantages. We have a well-structured
              business model open to partnerships and investors globally with good return on
              investment (ROI). We secured high grade critical mineral assets to supply the
              global green transition. There exists global need for lithium critical to the
              booming macro-trends, high demand lithium used in electric vehicle battery
              manufacturing. The government encourage Direct Foreign Investment in the
              sector through favorable tax incentives and ownership. It supports local
              processing and beneficiation.
            </p>
          </div>
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 border border-white">
              <img
                src="/assets/extracted_p5_0.jpeg"
                alt="Ecore investment opportunity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Value Proposition Cards - No Emojis, Clean Lucide Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {[
            {
              title: 'Booming Macro-Trends',
              highlight: 'Global EV Transition',
              desc: 'Explosive worldwide demand for battery-grade lithium compounds to power the transition to clean mobility and grid-scale storage systems.',
              icon: <Zap className="w-6 h-6 text-[#D4AF37]" />,
            },
            {
              title: 'Government Backed',
              highlight: 'FDI Tax Incentives',
              desc: 'The Nigerian federal framework actively supports Direct Foreign Investment with favorable tax holidays, full ownership models, and local beneficiation credits.',
              icon: <Landmark className="w-6 h-6 text-[#1D4ED8]" />,
            },
            {
              title: 'Secured Tier-1 Assets',
              highlight: 'High Grade Deposits',
              desc: 'Exclusive rights secured across 600,000 hectares in the central lithium corridor and Taraba belt, featuring distinct shallow mineralization.',
              icon: <Gem className="w-6 h-6 text-[#1D4ED8]" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#B8941F] uppercase tracking-widest block mb-1">
                {item.highlight}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
