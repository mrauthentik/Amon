import { useEffect, useRef, useState } from 'react'

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
      className="py-24 lg:py-32 bg-[#fafbfb] relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div
            className={`lg:col-span-8 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-gray-800 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              Strategic Growth & Capital
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.05]">
              Universal Investment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
                Opportunities in Lithium
              </span>
            </h2>
          </div>

          <div
            className={`lg:col-span-4 transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              Investment in Ecore offers tremendous advantages. Open to partnerships
              and global institutional investors with strong Return on Investment (ROI)
              and generous government FDI incentives.
            </p>
          </div>
        </div>

        {/* 3 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Booming Macro-Trends',
              highlight: 'Global EV Transition',
              desc: 'Explosive worldwide demand for battery-grade lithium compounds to power the transition to clean mobility and grid-scale storage systems.',
              icon: '⚡',
            },
            {
              title: 'Government Backed',
              highlight: 'FDI Tax Incentives',
              desc: 'The Nigerian federal framework actively supports Direct Foreign Investment with favorable tax holidays, full ownership models, and local beneficiation credits.',
              icon: '🏛️',
            },
            {
              title: 'Secured Tier-1 Assets',
              highlight: 'High Grade Deposits',
              desc: 'Exclusive rights secured across 600,000 hectares in the central lithium corridor and Taraba belt, featuring distinct shallow mineralization.',
              icon: '💎',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-500 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                {item.highlight}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Leadership & Strategic Partnership Card with Real PDF Image */}
        <div
          className={`relative rounded-3xl overflow-hidden bg-[#0d0d0d] text-white p-8 md:p-12 border border-white/10 shadow-2xl transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Subtle green glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5AE05A]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Real Leadership Photo extracted from PDF */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                <img
                  src="/assets/extracted_p5_0.jpeg"
                  alt="Ecore and Daroo Leadership Team"
                  className="w-full h-auto object-cover filter contrast-[1.05]"
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80'
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                  <p className="text-xs font-bold text-white">
                    Executive Leadership & International Technical Partners
                  </p>
                  <p className="text-[10px] text-white/60">
                    Alhaji Liman (Daroo Ltd) & Ecore Management Delegation
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Text */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#5AE05A] text-[11px] font-bold uppercase tracking-wider mb-4">
                Leadership & Strategic Alliance
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
                Decade of Mining Expertise
                <span className="block text-gray-400 font-normal text-xl sm:text-2xl mt-1">
                  Partnered with DAROO Limited
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Ecore and Daroo Ltd have established a strategic alliance to collaborate
                in the exploration of critical solid minerals, mine asset development,
                and execution of the modern lithium processing plant in Nigeria. Led by
                <strong> Alhaji Liman</strong>, a seasoned mining executive with over
                a decade of extensive experience in the extractive industry across West
                Africa.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-[#5AE05A] transition-colors"
                >
                  Request Investor Deck ↗
                </a>
                <a
                  href="#operations"
                  className="px-6 py-3 rounded-full border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors"
                >
                  Explore Lugbe Project
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

