import { useEffect, useRef, useState } from 'react'

const pillars = [
  {
    number: '01',
    title: 'Mitigating Ecological Damage',
    description:
      'Employing low-impact extraction methods, environmental audits, land rehabilitation, and minimizing water usage through cutting-edge DLE recirculating loops.',
    icon: (
      <svg className="w-5 h-5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Community Engagement & Consultation',
    description:
      'Continuous dialogue with host communities across Abuja FCT, Nasarawa, and Taraba to honor local heritage, secure social license, and foster mutual prosperity.',
    icon: (
      <svg className="w-5 h-5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Local Economic Development',
    description:
      'Stimulating local beneficiation, vocational training for youth, domestic vendor priority, and infrastructure development in operating regions.',
    icon: (
      <svg className="w-5 h-5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Health and Safety',
    description:
      'Zero-harm safety culture with rigorous protective standards, inclusive workforce programs, continuous training, and modernized mining safety protocols.',
    icon: (
      <svg className="w-5 h-5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Governance and Transparency',
    description:
      'Strict adherence to statutory corporate oversight (CAC), environmental laws, transparent mineral trading, and global anti-corruption compliance.',
    icon: (
      <svg className="w-5 h-5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

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
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle green ambient background glow */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-emerald-50/70 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            Corporate Social Responsibility
          </div>

          <h2
            className={`text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight mb-6 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Sustainable Resource Extraction
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
              With 5 Core Pillars
            </span>
          </h2>

          <p
            className={`text-gray-600 text-base leading-relaxed transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Our resource extraction is defined with environmental protection, decarbonization,
            combination of eco-conscious practices, community development, and social
            responsibility. We ensure the judicious, ethical use of our lithium assets.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-[#f9fafb] border border-gray-100 hover:border-emerald-300 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <span className="text-xs font-black tracking-widest text-gray-400">
                  {pillar.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* 6th Card: Eco-Friendly Lithium Processing Plant */}
          <div
            className={`p-8 rounded-3xl bg-gradient-to-br from-[#0d0d0d] to-[#1a2e22] text-white flex flex-col justify-between hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold text-[#5AE05A] uppercase tracking-wider mb-6">
                Green Beneficiation Plant
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Eco-Friendly Processing Plant
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Establishing Nigeria's foremost eco-conscious lithium processing
                refinery to guarantee high-grade lithium concentrates and steady
                feedstocks for worldwide battery makers.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-bold uppercase tracking-widest text-[#5AE05A] hover:text-white transition-colors"
            >
              <span>Partner With Ecore</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

