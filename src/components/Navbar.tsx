import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#specialties' },
  { label: 'Services', href: '#featured' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      setHidden(y > lastY && y > 100)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -80 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-navy-900/80 backdrop-blur-xl border-b border-slate-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Monogram Logo */}
          <motion.a
            href="#"
            className="relative flex items-center gap-3 group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #6366f1, #14b8a6)' }}>
              <span className="relative z-10">CB</span>
            </div>
            <span 
              className="font-bold text-sm hidden sm:block tracking-wide bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #14b8a6)' }}
            >
              Cristiano Bellucci
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.8), rgba(20,184,166,0.8))',
                border: '1px solid rgba(99,102,241,0.4)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(7, 11, 22, 0.95)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(51, 65, 85, 0.6)',
            }}
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl text-center text-white font-semibold"
                style={{ background: 'linear-gradient(135deg, #6366f1, #14b8a6)' }}
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
