import { useEffect, useRef, useState } from 'react'

export default function StatsSection() {
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
      id="operations"
      ref={ref}
      className="py-24 lg:py-32 bg-[#0d1117] text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#5AE05A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#5AE05A] animate-ping" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#5AE05A] uppercase">
                Field Operations & Technology
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Direct Lithium Extraction
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#5AE05A] to-[#6ee7b7]">
                & Modular Processing.
              </span>
            </h2>
          </div>

          <p
            className={`text-gray-400 text-sm md:text-base max-w-md leading-relaxed transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ecore leverages state-of-the-art DLE technology, heavy mechanized fleets,
            and modular processing facilities to rapidly accelerate commercial delivery
            of high-purity battery grade compounds.
          </p>
        </div>

        {/* 4 Stat Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              metric: '600,000',
              unit: 'Hectares',
              label: 'Contiguous Asset Area',
              detail: 'Kuje project spanning ~6 sq km in Abuja FCT boundary',
            },
            {
              metric: '2+',
              unit: 'Sites',
              label: 'Proven Lithium Belts',
              detail: 'FCT/Nasarawa Lithium Belt & Taraba State major deposit',
            },
            {
              metric: 'DLE',
              unit: 'Tech',
              label: 'Direct Extraction',
              detail: 'Eco-conscious modular processing for concentrates & hydroxide',
            },
            {
              metric: '100%',
              unit: 'CAC Reg.',
              label: 'Compliant & Licensed',
              detail: 'Member of Solid Mineral Producers, founded in 2023',
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-[#5AE05A]/40 transition-all duration-500 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                  {stat.metric}
                </span>
                <span className="text-xs font-bold text-[#5AE05A] uppercase tracking-wider">
                  {stat.unit}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">{stat.label}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Machinery & Field Sites Gallery Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Shantui Excavator */}
          <div
            className={`group relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 transition-all duration-700 hover:border-white/30 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/assets/extracted_p2_0.jpeg"
                alt="Shantui heavy excavator in action at Ecore mine site"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80'
                }}
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold text-[#5AE05A] uppercase tracking-widest">
                Excavation & Earthmoving
              </span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">
                Shantui Heavy Mining Unit
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Active overburden stripping and raw pegmatite vein extraction at the
                Lugbe & Central Nigeria operational sectors.
              </p>
            </div>
          </div>

          {/* Card 2: Komatsu Digger & Mineral Extraction */}
          <div
            className={`group relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 transition-all duration-700 delay-100 hover:border-white/30 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/assets/extracted_p4_0.jpeg"
                alt="Komatsu hydraulic excavator on location"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80'
                }}
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold text-[#5AE05A] uppercase tracking-widest">
                Deep Spodumene Trenching
              </span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">
                Komatsu Precision Rig
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Delivering systematic sampling and geological trenching for accurate
                assays across the high-grade lithium deposits.
              </p>
            </div>
          </div>

          {/* Card 3: Lonking Loader */}
          <div
            className={`group relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 transition-all duration-700 delay-200 hover:border-white/30 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/assets/extracted_p4_1.jpeg"
                alt="Lonking heavy wheel loader"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1541888946425-d0fbb18615f7?w=600&q=80'
                }}
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold text-[#5AE05A] uppercase tracking-widest">
                Logistics & Sorting
              </span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">
                Lonking Industrial Loader
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Heavy haulage handling and feed management feeding the primary crushing
                and separation circuits.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10">
            <div className="w-10 h-10 rounded-2xl bg-[#5AE05A]/10 border border-[#5AE05A]/30 flex items-center justify-center mb-6">
              <span className="text-[#5AE05A] font-black text-sm">M</span>
            </div>
            <h3 className="text-2xl font-black text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              To process and supply high-purity Lithium concentrates or battery-grade
              compounds to fuel the global electric vehicle (EV) and energy storage
              transition. Offering an alternative source of high-quality preprocessed
              and unprocessed raw materials at competitive global prices.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6">
              <span className="text-blue-400 font-black text-sm">V</span>
            </div>
            <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              To be the leading supplier of processed critical solid materials for
              global production of batteries and storage products, establishing an
              eco-friendly lithium processing plant in Nigeria ensuring steady, ethical,
              and sustainable supply to end-users worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

