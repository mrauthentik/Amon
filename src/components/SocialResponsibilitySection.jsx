import { useEffect, useRef, useState } from 'react'
import { Leaf, Users, TrendingUp, ShieldAlert, Scale, ArrowUpRight } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Mitigating Ecological Damage',
    description:
      'Employing low-impact extraction methods, environmental audits, land rehabilitation, and minimizing water usage through cutting-edge DLE recirculating loops.',
    icon: <Leaf className="w-5 h-5 text-[#B8941F]" />,
  },
  {
    number: '02',
    title: 'Community Engagement & Consultation',
    description:
      'Continuous dialogue with host communities across Abuja FCT, Nasarawa, and Taraba to honor local heritage, secure social license, and foster mutual prosperity.',
    icon: <Users className="w-5 h-5 text-[#B8941F]" />,
  },
  {
    number: '03',
    title: 'Local Economic Development',
    description:
      'Stimulating local beneficiation, vocational training for youth, domestic vendor priority, and infrastructure development in operating regions.',
    icon: <TrendingUp className="w-5 h-5 text-[#B8941F]" />,
  },
  {
    number: '04',
    title: 'Health and Safety',
    description:
      'Zero-harm safety culture with rigorous protective standards, inclusive workforce programs, continuous training, and modernized mining safety protocols.',
    icon: <ShieldAlert className="w-5 h-5 text-[#B8941F]" />,
  },
  {
    number: '05',
    title: 'Governance and Transparency',
    description:
      'Strict adherence to statutory corporate oversight (CAC), environmental laws, transparent mineral trading, and global anti-corruption compliance.',
    icon: <Scale className="w-5 h-5 text-[#B8941F]" />,
  },
]

export default function SocialResponsibilitySection() {
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
      id="social-responsibility"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 bg-[#faf8f2] relative overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 right-1/3 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#D4AF37]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#1D4ED8]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2
            className={`text-4xl sm:text-6xl md:text-7xl font-black text-[#1D4ED8] tracking-tight leading-[1.05] mb-6 sm:mb-8 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Social Responsibility
          </h2>
          <div
            className={`space-y-4 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p>
              Our Corporate Social Responsibility (CRS) is centered on these five pillars:
              Mitigating Ecological Damage, Community Engagement and Consultation, Local
              Economic Development, Health and Safety, Governance and Transparency.
            </p>
            <p>
              As a responsible and earth friendly company, we are committed to encourage
              the judicious use of our lithium ore in consonant with new requirements for
              lithium processing. We are committed to socially responsible exploration and
              development, working safely and ethically.
            </p>
          </div>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-gray-200 shadow-sm hover:border-[#D4AF37]/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <span className="text-xs font-black tracking-widest text-gray-400">
                  {pillar.number}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* 6th Card: Eco-Friendly Lithium Processing Plant */}
          <div
            className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0A0A0A] to-[#101c2e] text-white flex flex-col justify-between hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[9px] sm:text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider mb-4 sm:mb-6">
                Green Beneficiation Plant
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                Eco-Friendly Processing Plant
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Establishing Nigeria's foremost eco-conscious lithium processing
                refinery to guarantee high-grade lithium concentrates and steady
                feedstocks for worldwide battery makers.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors"
            >
              <span>Partner With Ecore</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
