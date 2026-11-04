import { useEffect, useRef, useState } from 'react'

const products = [
  {
    id: '01',
    name: 'Lithium',
    tagline: 'Battery Grade Lithium',
    description:
      'A soft silvery-white alkali metal, valuable for the production of EV batteries, ceramics, aluminum products and glass. Ecore targets highly prospective Spodumene and brine mining assets in the Central Nigeria Lithium Belt.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    color: 'from-green-500/20 to-green-600/5',
    accent: '#5AE05A',
  },
  {
    id: '02',
    name: 'Graphite',
    tagline: 'EV Battery Material',
    description:
      'An important material for Electric Vehicle (EV) battery manufacturing. An excellent conductor of heat and electricity and also has the highest strength of any natural material.',
    image: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=600&q=80',
    color: 'from-slate-500/20 to-slate-600/5',
    accent: '#888',
  },
  {
    id: '03',
    name: 'Gold',
    tagline: 'Precious Metal',
    description:
      'A dense, soft, bright yellow precious metal (AU, atomic number 79). Primary uses are jewelry, reserves and investment, electronics and medicine.',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=80',
    color: 'from-amber-500/20 to-amber-600/5',
    accent: '#F59E0B',
  },
  {
    id: '04',
    name: 'Coal',
    tagline: 'Industrial Energy',
    description:
      'Used primarily across the globe to produce energy and generate electricity to run industrial plants and factories. A combustible rock widely used for electricity and industrial applications.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
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
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${product.color} mix-blend-multiply`} />
        {/* Number badge */}
        <div className="absolute top-4 left-4 w-9 h-9 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center">
          <span className="text-white text-[11px] font-bold">{product.id}</span>
        </div>
        {/* Arrow */}
        <div
          className="absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
          style={{ backgroundColor: product.accent }}
        >
          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
              {product.tagline}
            </p>
            <h3 className="text-xl font-black text-[#0D0D0D]">{product.name}</h3>
          </div>
          <div
            className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
            style={{ backgroundColor: product.accent }}
          />
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mt-3">
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
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-px bg-[#5AE05A]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Products & Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0D0D0D] leading-tight max-w-md">
              Strategic Minerals for a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
                Greener Future.
              </span>
            </h2>
          </div>
          <div
            className={`max-w-xs transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-gray-500 text-sm leading-relaxed">
              Ecore offers the best grade of strategic minerals. As the world transitions to a decarbonized future, we supply critical materials essential to battery production and energy storage.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} visible={visible} />
          ))}
        </div>

        {/* Kuje Project Feature */}
        <div
          className={`mt-16 relative rounded-3xl overflow-hidden transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-[#0D0D0D] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-transparent" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 bg-[#5AE05A] rounded-full" />
                  <span className="text-[#5AE05A] text-xs font-semibold uppercase tracking-widest">Featured Project</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4">The Kuje Project</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Lies within the eastern boundaries of Abuja, Federal Capital Territory. The project spans a contiguous 600,000 hectares (~6 sq km) with distinct near-surface Lithium mineralization scale potential.
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-2xl font-black text-white">600K</p>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Hectares</p>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div>
                    <p className="text-2xl font-black text-white">FCT</p>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Location</p>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div>
                    <p className="text-2xl font-black text-white">Li</p>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Spodumene</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80"
                    alt="Mining site"
                    className="rounded-2xl w-72 h-48 object-cover"
                  />
                  <div className="absolute -bottom-3 -left-3 bg-[#5AE05A] rounded-xl px-4 py-2">
                    <p className="text-black text-xs font-black uppercase tracking-wide">Taraba Belt</p>
                    <p className="text-black/60 text-[10px]">Also active site</p>
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
