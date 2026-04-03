import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import gsap from 'gsap'

const navLinks = {
  about: {
    label: 'About',
    children: [
      { to: '/', label: 'Overview' },
      { to: '/leadership', label: 'Leadership' },
      { to: '/manufacturing', label: 'Manufacturing Units' },
      { to: '/news', label: 'News & Events' },
    ]
  },
  business: {
    label: 'Business',
    children: [
      { to: '/iron-and-steel', label: 'Iron & Steel' },
      { to: '/aluminium', label: 'Aluminium' },
      { to: '/stainless-steel', label: 'Stainless Steel' },
      { to: '/energy', label: 'Energy & Others' },
    ]
  }
}

const directLinks = [
  { to: '/careers', label: 'Careers' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' },
]

function DropdownMenu({ item, isActive }) {
  return (
    <div className="relative group h-full flex items-center">
      <button className={`flex items-center gap-1 py-2 transition-colors duration-200 ${isActive ? 'text-[#C3D809]' : 'text-zinc-400 hover:text-[#C3D809] group-hover:text-[#C3D809]'}`}>
        {item.label}
        <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-180">expand_more</span>
      </button>
      <div className="pt-4 absolute left-1/2 -translate-x-1/2 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <motion.div
          initial={{ opacity: 0, y: -10, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          className="w-56 bg-[#1a181a]/95 backdrop-blur-xl shadow-2xl rounded-lg py-2 border border-[#C3D809]/20 overflow-hidden before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-0.5 before:bg-[#C3D809]"
          style={{ perspective: '800px' }}
        >
          {item.children.map((child, i) => (
            <motion.div
              key={child.to}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={child.to}
                className="block px-5 py-2.5 text-zinc-400 hover:text-white hover:bg-[#C3D809]/10 hover:pl-6 transition-all duration-200 text-xs tracking-wider"
              >
                {child.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [2, -2]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-600, 600], [-3, 3]), { stiffness: 200, damping: 30 })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileDropdown(null)
  }, [location])

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      )
    }
  }, [])

  const handleMouseMove = (e) => {
    const rect = navRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const isDropdownActive = (item) => item.children.some(child => child.to === location.pathname)
  const isLinkActive = (to) => location.pathname === to

  return (
    <motion.nav
      ref={navRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px', rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#222022]/80 border-b border-[#C3D809]/15 shadow-[0_4px_30px_rgba(195,216,9,0.1)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-[1920px] mx-auto">
        {/* Brand Logo */}
        <Link to="/" className="shrink-0 flex items-center gap-3 group">
          <motion.img
            src="/brand_logo.png"
            alt="Shyam Metalics"
            className="w-auto object-contain transition-all duration-300 group-hover:brightness-110"
            style={{ height: 'clamp(46px, 5vw, 60px)' }}
            whileHover={{
              scale: 1.08,
              rotateY: 15,
              filter: 'drop-shadow(0 0 16px rgba(195,216,9,0.4))',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-[Inter] tracking-tight uppercase font-bold text-[11px]">
          <DropdownMenu item={navLinks.about} isActive={isDropdownActive(navLinks.about)} />
          <DropdownMenu item={navLinks.business} isActive={isDropdownActive(navLinks.business)} />
          {directLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <Link
                to={link.to}
                className={`py-2 transition-colors duration-200 relative ${
                  isLinkActive(link.to)
                    ? 'text-[#C3D809]'
                    : 'text-zinc-400 hover:text-[#C3D809]'
                }`}
              >
                {link.label}
                {isLinkActive(link.to) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C3D809] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/seltiger"
              className="hidden sm:block font-[Inter] tracking-tight uppercase font-bold text-[11px] text-[#C3D809] hover:text-[#222022] transition-all duration-300 px-4 py-2 border border-[#C3D809]/30 rounded-full hover:bg-[#C3D809] hover:border-[#C3D809] hover:shadow-[0_0_25px_rgba(195,216,9,0.3)]"
            >
              SEL TIGER
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-zinc-800/50 transition-colors"
          >
            <motion.span
              className="material-symbols-outlined text-zinc-100"
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileOpen ? 'close' : 'menu'}
            </motion.span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-6 py-6 bg-[#1a181a]/95 backdrop-blur-xl border-t border-[#C3D809]/10 space-y-1 overflow-y-auto max-h-[70vh]">
              {Object.entries(navLinks).map(([key, item]) => (
                <div key={key}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
                    className="w-full flex items-center justify-between py-3 px-4 text-zinc-400 hover:text-white font-[Inter] uppercase font-bold text-xs tracking-wider rounded-lg hover:bg-zinc-800/30 transition-all"
                  >
                    {item.label}
                    <motion.span
                      className="material-symbols-outlined text-sm"
                      animate={{ rotate: mobileDropdown === key ? 180 : 0 }}
                    >
                      expand_more
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileDropdown === key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-1 space-y-0.5">
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className={`block py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                                isLinkActive(child.to)
                                  ? 'text-[#C3D809] bg-[#C3D809]/5'
                                  : 'text-zinc-500 hover:text-white hover:bg-zinc-800/30'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {directLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block py-3 px-4 font-[Inter] uppercase font-bold text-xs tracking-wider rounded-lg transition-all ${
                    isLinkActive(link.to)
                      ? 'text-[#C3D809] bg-[#C3D809]/5'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/30'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/seltiger"
                className="block py-3 px-4 text-center text-[#C3D809] font-bold text-xs uppercase tracking-wider border border-[#C3D809]/30 rounded-lg hover:bg-[#C3D809]/10 transition-all mt-4"
              >
                SEL TIGER
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
