export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#5AE05A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/extracted_p1_0.png"
                alt="Ecore Logo"
                className="h-10 w-auto object-contain bg-white rounded-lg p-1.5"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <span className="text-2xl font-black tracking-tight text-white">
                ECORE <span className="font-light text-white/60">LTD.</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Ecore is a strategic mineral exploration and development company registered with
              the Corporate Affairs Commission (CAC) and a member of solid mineral producers.
              Headquartered in Abuja FCT, West Africa. Founded in 2023.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#5AE05A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5AE05A]" />
              CAC Registered & Licensed Operator
            </div>
          </div>

          {/* Strategic Minerals */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
              Strategic Minerals
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
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
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
              Headquarters
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              136 Adetokumbo Ademola Crescent,<br />
              Wuse 2, Abuja, FCT<br />
              Nigeria, West Africa
            </p>
            <p className="text-xs text-gray-400 mb-2">
              <span className="text-gray-500">Asset Corridor:</span> Central Nigeria Lithium Belt & Kuje
            </p>
            <p className="text-xs text-gray-400">
              <span className="text-gray-500">Partner:</span> DAROO Limited (Lugbe Project)
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Ecore Ltd. All rights reserved. Registered with CAC Nigeria.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </a>
            <a href="#compliance" className="hover:text-white transition-colors">
              Statutory Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

