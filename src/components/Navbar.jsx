import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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
          ? 'bg-black/90 backdrop-blur-md shadow-lg py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo - Reduced size */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="bg-white px-2 py-0.5 sm:py-1 rounded-md shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
            <img
              src="/assets/extracted_p1_0.png"
              alt="Ecore Logo"
              className="h-5 sm:h-6 w-auto object-contain"
            />
          </div>
          <span className="text-white font-bold text-xs sm:text-sm tracking-widest text-white/90">
            LTD.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-[#5AE05A] transition-colors focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <X className="w-5 h-5 transition-transform" />
          ) : (
            <Menu className="w-5 h-5 transition-transform" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
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
        </div>
      </div>
    </header>
  )
}
