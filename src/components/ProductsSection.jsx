import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const products = [
  {
    id: '01',
    name: 'Lithium',
    tagline: 'Battery Grade Lithium',
    description:
      'A soft silvery white alkali metal. It is an element valuable for the production of batteries, ceramics, aluminum products and glass.',
    image: '/assets/Lithium.jpg',
    color: 'from-amber-500/20 to-amber-600/5',
    accent: '#D4AF37',
  },
  {
    id: '02',
    name: 'Graphite',
    tagline: 'EV Battery Material',
    description:
      'An important material for the Electric Vehicle (EV) battery manufacturing. An excellent conductor of heat and electricity and also has the highest strength of any natural material.',
    image: '/assets/graphite.webp',
    color: 'from-slate-500/20 to-slate-600/5',
    accent: '#1D4ED8',
  },
  {
    id: '03',
    name: 'Gold',
    tagline: 'Precious Metal',
    description:
      'A dense, soft, bright yellow precious metal with the chemical symbol AU and atomic number 79. The primary uses are jewelry, reserves and investment, electronics and medicine.',
    image: '/assets/gold.jpg',
    color: 'from-amber-500/20 to-amber-600/5',
    accent: '#D4AF37',
  },
  {
    id: '04',
    name: 'Coal',
    tagline: 'Industrial Energy',
    description:
      'Used primarily across the globe to produce energy to generate electricity and run industrial plants and factories. Coal is a combustible black or brown rock used widely for electricity despite its known high carbon emission.',
    image: '/assets/coal.jpg',
    color: 'from-gray-700/20 to-gray-800/5',
    accent: '#555',
  },
]

function ProductCard({ product, index, visible }) {
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${product.color} mix-blend-multiply`} />
        {/* Number badge */}
        <div className="absolute top-4 left-4 w-8 sm:w-9 h-8 sm:h-9 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center">
          <span className="text-white text-[10px] sm:text-[11px] font-bold">{product.id}</span>
        </div>
        {/* Arrow Button */}
        <div
          className="absolute bottom-4 right-4 w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 shadow-md"
          style={{ backgroundColor: product.accent }}
        >
          <ArrowUpRight className="w-4 h-4 text-black font-bold" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
              {product.tagline}
            </p>
            <h3 className="text-lg sm:text-xl font-black text-[#0D0D0D]">{product.name}</h3>
          </div>
          <div
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0 mt-1"
            style={{ backgroundColor: product.accent }}
          />
        </div>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 sm:mt-3">
          {product.description}
        </p>
      </div>
    </div>
  )
}

export default function ProductsSection() {
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
    <section id="products" ref={ref} className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#1D4ED8] leading-[1.05] tracking-tight">
              Products and Services
            </h2>
          </div>
          <div
            className={`max-w-md transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Ecore offers the best grade of strategic minerals. As the world transitions to a decarbonized future and green energy, the switch to EVs is creating huge market and demand for batteries and for strategic minerals such as lithium, graphite and coal. These are critical minerals available to the global markets in large quantities essential to battery production and other energy needs. We have acquired the exclusive right to develop two proven lithium sites located in the FCT/Nasarawa lithium Belt and Taraba State which hosts globally significant lithium deposit.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} visible={visible} />
          ))}
        </div>

        {/* Lugbe Project Feature */}
        <div
          className={`mt-12 sm:mt-16 relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-[#0D0D0D] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/30 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/30 rounded-full px-3.5 py-1.5 mb-4 sm:mb-6">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                  <span className="text-[#B8941F] text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
                  The Lugbe Project
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
                  Lies within the eastern boundaries of Abuja, Federal Capital Territory. The project spans a contiguous 600,000 hectares (~6 sq km) with distinct near-surface Lithium mineralization scale potential.
                </p>

                {/* Responsive Stats */}
                <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-8 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-white">600K</p>
                    <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest">Hectares</p>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-white/20" />
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-white">FCT</p>
                    <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest">Location</p>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-white/20" />
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-white">Li</p>
                    <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest">Spodumene</p>
                  </div>
                </div>
              </div>

              {/* Image side */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm">
                  <img
                    src="/assets/forest.jpg"
                    alt="Taraba belt forest site"
                    className="rounded-2xl w-full h-48 sm:h-56 object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-3 -left-3 bg-[#D4AF37] rounded-xl px-3 sm:px-4 py-2 shadow-md">
                    <p className="text-black text-[11px] sm:text-xs font-black uppercase tracking-wide">
                      Taraba Belt
                    </p>
                    <p className="text-black/70 text-[9px] sm:text-[10px] font-semibold">
                      Also active proven site
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
