import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Operations & Fleet', href: '#operations' },
  { label: 'Our Expert', href: '#expert' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Investment', href: '#investment' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <img
            src="/assets/extracted_p1_0.png"
            alt="Ecore Logo"
            className="h-9 w-auto object-contain bg-white rounded-md p-1 group-hover:scale-105 transition-transform"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <span className="text-white font-bold text-lg tracking-tight">
            ECORE <span className="font-light text-white/60">LTD.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link text-xs tracking-wide">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="text-[11px] font-bold uppercase tracking-widest bg-white text-black px-5 py-2.5 rounded-full hover:bg-[#5AE05A] transition-all duration-300 shadow-sm"
          >
            Get In Touch ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md px-6 py-6 border-t border-white/10 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-white/80 hover:text-white border-b border-white/5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-dark-sm w-full justify-center mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Get In Touch ↗
          </a>
        </div>
      </div>
    </header>
  )
}
