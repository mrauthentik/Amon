export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/4 w-[350px] sm:w-[500px] h-[250px] sm:h-[300px] bg-[#5AE05A]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Brand Info with Logo */}
          <div className="sm:col-span-2 lg:col-span-5">
            <a href="#hero" className="inline-flex items-center gap-2.5 mb-5 sm:mb-6 group">
              <div className="bg-white px-2.5 py-1 sm:py-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src="/assets/extracted_p1_0.png"
                  alt="Ecore Logo"
                  className="h-6 sm:h-7 w-auto object-contain"
                />
              </div>
              <span className="text-white font-bold text-sm sm:text-base tracking-widest text-white/90">
                LTD.
              </span>
            </a>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-5 sm:mb-6">
              Ecore is a strategic mineral exploration and development company registered with
              the Corporate Affairs Commission (CAC) and a member of solid mineral producers.
              Headquartered in Abuja FCT, West Africa. Founded in 2023.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] text-[#5AE05A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5AE05A]" />
              CAC Registered & Licensed Operator
            </div>
          </div>

          {/* Strategic Minerals */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-3 sm:mb-4">
              Strategic Minerals
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Battery-Grade Lithium (Li)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  High-Purity Graphite
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Gold Exploration (AU)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Industrial Coal
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Lithium Carbonates & Hydroxide
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Operations */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-3 sm:mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Ecore
                </a>
              </li>
              <li>
                <a href="#operations" className="hover:text-white transition-colors">
                  Field Operations & DLE
                </a>
              </li>
              <li>
                <a href="#expert" className="hover:text-white transition-colors">
                  Our Experts
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-white transition-colors">
                  Sustainability (CSR)
                </a>
              </li>
              <li>
                <a href="#investment" className="hover:text-white transition-colors">
                  Investment & Daroo Alliance
                </a>
              </li>
            </ul>
          </div>

          {/* Headquarters Info */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-3 sm:mb-4">
              Headquarters
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4">
              136 Adetokumbo Ademola Crescent,<br />
              Wuse 2, Abuja, FCT<br />
              Nigeria, West Africa
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400 mb-1.5">
              <span className="text-gray-500">Asset Corridor:</span> Central Nigeria Lithium Belt & Kuje
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400">
              <span className="text-gray-500">Partner:</span> DAROO Limited (Lugbe Project)
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-gray-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Ecore Ltd. All rights reserved. Registered with CAC Nigeria.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#operations" className="hover:text-white transition-colors">
              Terms of Engagement
            </a>
            <a href="#sustainability" className="hover:text-white transition-colors">
              Statutory Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
