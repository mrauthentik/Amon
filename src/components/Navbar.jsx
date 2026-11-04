import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

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

  // Close menu on link click
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <img
            src="/assets/extracted_p1_0.png"
            alt="Ecore Logo"
            className="h-8 sm:h-9 w-auto object-contain bg-white rounded-md p-1 group-hover:scale-105 transition-transform"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <span className="text-white font-bold text-base sm:text-lg tracking-tight">
            ECORE <span className="font-light text-white/60">LTD.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] xl:text-xs font-medium uppercase tracking-wider text-white/80 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5AE05A] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest bg-white text-black px-4 py-2 sm:px-5 sm:py-2.5 rounded-full hover:bg-[#5AE05A] transition-all duration-300 shadow-sm"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-[#5AE05A] transition-colors focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <X className="w-6 h-6 transition-transform" />
          ) : (
            <Menu className="w-6 h-6 transition-transform" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl px-5 sm:px-8 py-5 border-t border-white/10 space-y-2.5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-[#5AE05A] border-b border-white/5 transition-colors"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#5AE05A] text-black text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#4bc74b] transition-colors"
              onClick={handleNavClick}
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
