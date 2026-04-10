import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import gsap from 'gsap'
import { createPortal } from 'react-dom'

const navLinks = {
  about: {
    label: 'About',
    children: [
      { to: '/about-overview', label: 'Company Overview' },
      { to: '/manufacturing', label: 'Manufacturing Units' },
      { to: '/leadership', label: 'Leadership' },
      { to: '/accreditations', label: 'Awards & Achievements' },
      { to: '/testimonials', label: 'Testimonials' },
      { to: '/news', label: 'News & Events' },
    ]
  },
  business: {
    label: 'Business',
    isMega: true,
    columns: [
      { label: 'Business Overview', to: '/business-overview', links: [] },
      {
        label: 'Iron & Steel',
        links: [
          {
            label: 'Carbon Steel',
            links: [
              { to: '/pellet', label: 'Pellet' },
              { to: '/sponge-iron', label: 'Sponge Iron' },
              { to: '/pig-iron', label: 'Pig Iron' },
              { to: '/billet', label: 'Billet' },
              { to: '/tmt-bar', label: 'TMT Bar' },
              { to: '/structural-steel', label: 'Structural Steel' },
              { to: '/wire-rods', label: 'Wire Rods' },
              { to: '/crash-barrier', label: 'Crash Barrier' }
            ]
          },
          {
            label: 'Stainless Steel',
            links: [
              { to: '/ss-billets', label: 'Stainless Steel Billets' },
              { to: '/ss-rebar', label: 'SS Rebar' },
              { to: '/ss-hot-rolled-bar', label: 'SS Hot Rolled Bar' },
              { to: '/ss-bright-bar', label: 'SS Bright Bar' },
              { to: '/ss-wires', label: 'SS Wires' },
              { to: '/ss-welding-wires', label: 'SS Welding Wires' },
              { to: '/ss-wire-rod', label: 'SS Wire Rod' },
            ]
          },
          { label: 'Ferro Alloys', to: '/ferro-alloys', links: [] },
          {
            label: 'Flat Products',
            links: [
              { to: '/flat-products', label: 'Flat Products' },
              { to: '/pipe-hollow-sections', label: 'Pipe & Hollow Sections' }
            ]
          }
        ]
      },
      {
        label: 'Aluminium',
        links: [
          { to: '/kitchen-foil', label: 'Kitchen Foil Range' },
          { to: '/battery-foil', label: 'Battery Foil' },
          { to: '/bare-aluminium', label: 'Bare Aluminium Foil' },
          { to: '/fin-stock', label: 'Fin Stock' },
        ]
      },
      {
        label: 'Energy & Others',
        links: [
          { to: '/renewable-power', label: 'Renewable Power' },
          { to: '/captive-power', label: 'Captive Power' },
          { to: '/railway-wagons', label: 'Railway Wagons' },
        ]
      }
    ]
  },
  investor: {
    label: 'Investors',
    isMega: true,
    columns: [
      {
        label: 'Financial Information',
        links: [
          { to: '/annual-return', label: 'Annual Return' },
          { to: '/financial-annual-report', label: 'Financial Annual Report' },
          { to: '/financial-subsidiaries', label: 'Financial of Subsidiaries company' },
          { to: '/financial-results', label: 'Financial Results' },
        ]
      },
      {
        label: 'Corporate Announcement',
        links: [
          { to: '/newspaper-publication', label: 'Newspaper Publication' },
          { to: '/press-release', label: 'Press Release' },
          { to: '/notices', label: 'Notices' },
          { to: '/regulation-30-disclosures', label: 'Regulation 30 Disclosures' },
        ]
      },
      { label: 'Policies', to: '/policies', links: [] },
      { label: 'Environment', to: '/environment', links: [] },
      { label: 'QIP', to: '/qip', links: [] },
      {
        label: 'Stock Exchange Compliances',
        links: [
          { to: '/stock-exchange-compliances', label: 'Stock Exchange Compliances' }
        ]
      },
      { label: 'Investor Analyst Meet', to: '/investor-analyst-meet', links: [] },
      {
        label: 'Investor Information',
        links: [
          { to: '/credit-rating', label: 'Credit Rating' },
          { to: '/postal-ballot', label: 'Postal Ballot' },
          { to: '/agm', label: 'AGM' },
        ]
      },
      { label: 'Regulation 46 of the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015', to: '/sebi-regulation-46', links: [] },
      {
        label: 'Other',
        links: [
          { to: '/other-compliances', label: 'Other Compliances' },
          { to: '/kmp-contact-details', label: 'KMP Contact Details' },
          { to: '/investor-relations-contact', label: 'Investor Relations Contact' },
        ]
      },
      { label: 'TDS Declarations', to: '/tds-declarations', links: [] },
      { label: 'SEBI Online Dispute Resolution Platform', to: '/sebi-dispute-resolution', links: [] },
      { label: 'Familiarization Programme for Independent Directors', to: '/familiarization-programme', links: [] }
    ]
  },
  contact: {
    label: 'Contact',
    children: [
      { to: '/contact-us', label: 'Contact Us' },
      { to: '/company-location', label: 'Company Location' },
    ]
  },
  careers: {
    label: 'Careers',
    children: [
      { to: '/career-at-shyam', label: 'Career @ Shyam' },
      { to: '/life-at-shyam', label: 'Life at Shyam' },
    ]
  },
  sustainability: {
    label: 'Sustainability',
    children: [
      { to: '/esg', label: 'ESG' },
      { to: '/environment-compliance', label: 'Environment Compliance' },
    ]
  },
  community: {
    label: 'Community',
    children: [
      { to: '/csr', label: 'CSR' },
      { to: '/blogs', label: 'Blogs' },
    ]
  }
}

const directLinks = []

const NestedMenuItem = ({ item, level = 0 }) => {
  const hasLinks = item.links && item.links.length > 0;
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const itemRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      setCoords({ top: Math.max(0, rect.top), left: rect.right + 2 });
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 50);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const content = (
    <>
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 shrink-0" />
        <span className="leading-snug">{item.label}</span>
      </div>
      {hasLinks && (
        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      )}
    </>
  );

  const itemClasses = "flex items-center justify-between px-6 py-2.5 text-slate-700 hover:text-[#0145F2] hover:bg-[#0145F2]/5 hover:pl-8 transition-all duration-300 text-[14px] uppercase font-bold tracking-wider cursor-pointer group/item w-full";

  return (
    <div 
      className="group/nested"
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hasLinks ? (
        <div className={itemClasses}>
          {content}
        </div>
      ) : (
        <Link to={item.to || '#'} className={itemClasses}>
          {content}
        </Link>
      )}

      {hasLinks && isHovered && createPortal(
        <div 
          className="fixed z-[9999]"
          style={{ top: coords.top, left: coords.left, paddingLeft: '8px', marginLeft: '-8px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className={`w-[260px] py-1 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-lg border border-slate-100`}
          >
            {item.links.map((link, i) => (
              <NestedMenuItem key={link.to || i} item={link} level={level + 1} />
            ))}
          </motion.div>
        </div>,
        document.body
      )}
    </div>
  );
};

function DropdownMenu({ item, isActive }) {
  const isMega = item.isMega
  const isScrollable = item.label === 'Investors'

  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`flex items-center gap-1 py-2 transition-colors duration-200 relative group/btn ${isActive || isOpen ? 'text-[#0145F2]' : 'text-slate-600 hover:text-[#0145F2]'}`}>
        {item.label}
        <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
        <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#0145F2] transition-all duration-300 ${isActive || isOpen ? 'w-full' : 'w-0 hover:w-full'}`} />
      </button>
      <div className={`pt-4 absolute left-1/2 -translate-x-1/2 top-full transition-all duration-300 z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <motion.div
          initial={{ opacity: 0, y: -10, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          className={`${isMega ? 'w-[340px]' : 'w-64'} py-1 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-lg border border-slate-100 overflow-visible relative ${isScrollable ? 'max-h-[75vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' : ''}`}
          style={{ perspective: '1200px' }}
        >
          {isMega ? (
            item.columns.map((col, idx) => (
              <NestedMenuItem key={col.label || idx} item={col} />
            ))
          ) : (
            item.children.map((child, i) => (
              <motion.div
                key={child.to}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={child.to}
                  className="flex items-center gap-3 px-6 py-3 text-slate-700 hover:text-[#0145F2] hover:bg-[#0145F2]/5 hover:pl-8 transition-all duration-300 text-[14px] uppercase font-bold tracking-wider group/item"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  {child.label}
                </Link>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  )
}

const MobileNestedItem = ({ item }) => {
  const hasLinks = item.links && item.links.length > 0;
  return (
    <div className="mb-1">
      {hasLinks ? (
        <>
          <div className="px-4 py-2 text-[#334155] font-semibold text-[13px]">{item.label}</div>
          <div className="pl-4 border-l border-[#0145F2]/20 ml-4 mb-2 space-y-1">
            {item.links.map((link, i) => (
              <MobileNestedItem key={link.to || i} item={link} />
            ))}
          </div>
        </>
      ) : (
        <Link
          to={item.to || '#'}
          className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:text-[#0145F2] hover:bg-[#0145F2]/5 hover:pl-6 transition-all duration-300 text-[13px] font-medium group/item rounded-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 shrink-0" />
          {item.label}
        </Link>
      )}
    </div>
  );
};

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

  const isDropdownActive = (item) => {
    if (item.isMega) {
      return item.columns.some(col => col.links.some(child => child.to === location.pathname))
    }
    return item.children?.some(child => child.to === location.pathname)
  }
  const isLinkActive = (to) => location.pathname === to

  return (
    <motion.nav
      ref={navRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px', rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 ${scrolled
        ? 'backdrop-blur-xl bg-[#EDF1F5]/90 border-b border-[#0145F2]/15 shadow-[0_4px_30px_rgba(1,69,242,0.08)] py-1.5'
        : 'bg-transparent py-2.5'
        }`}
    >
      <div className="flex justify-between items-center px-2 md:px-12 max-w-[1920px] mx-auto">
        {/* Brand Logo */}
        <Link to="/" className="shrink-0 flex items-center gap-3 group">
          <motion.img
            src="/brand_logo.png"
            alt="Shyam Metalics"
            className="w-auto object-contain transition-all duration-300 group-hover:brightness-110"
            style={{ height: '62px', width: 'auto', minWidth: 'auto' }}
            whileHover={{
              scale: 1.08,
              rotateY: 15,
              filter: 'drop-shadow(0 0 16px rgba(1,69,242,0.4))',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-[Inter] tracking-tight uppercase font-bold text-[14px]">
          <DropdownMenu item={navLinks.about} isActive={isDropdownActive(navLinks.about)} />
          <DropdownMenu item={navLinks.business} isActive={isDropdownActive(navLinks.business)} />
          <DropdownMenu item={navLinks.investor} isActive={isDropdownActive(navLinks.investor)} />
          <DropdownMenu item={navLinks.careers} isActive={isDropdownActive(navLinks.careers)} />
          <DropdownMenu item={navLinks.sustainability} isActive={isDropdownActive(navLinks.sustainability)} />
          <DropdownMenu item={navLinks.community} isActive={isDropdownActive(navLinks.community)} />
          <DropdownMenu item={navLinks.contact} isActive={isDropdownActive(navLinks.contact)} />
          {directLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <Link
                to={link.to}
                className={`py-2 transition-colors duration-200 relative group/link ${isLinkActive(link.to)
                  ? 'text-[#0145F2]'
                  : 'text-slate-600 hover:text-[#0145F2]'
                  }`}
              >
                {link.label}
                {isLinkActive(link.to) ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0145F2] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0145F2] transition-all duration-300 group-hover/link:w-full" />
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
              className="hidden sm:block transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(1,69,242,0.3)]"
            >
              <img src="/sel_tiger.png" alt="SEL TIGER" className="h-12 w-auto object-contain" />
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
            <div className="px-6 py-6 bg-white/95 backdrop-blur-xl border-t border-[#0145F2]/10 space-y-1 overflow-y-auto max-h-[70vh]">
              {Object.entries(navLinks).map(([key, item]) => (
                <div key={key}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
                    className="w-full flex items-center justify-between py-3 px-4 text-slate-600 hover:text-[#0145F2] font-[Inter] uppercase font-bold text-xs tracking-wider rounded-lg hover:bg-[#0145F2]/5 transition-all"
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
                          {item.isMega ? (
                            item.columns.map((col, idx) => (
                              <MobileNestedItem key={col.label || idx} item={col} />
                            ))
                          ) : (
                            item.children.map((child) => (
                              <Link
                                key={child.to}
                                to={child.to}
                                className={`block py-2 px-4 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${isLinkActive(child.to)
                                  ? 'text-[#0145F2] bg-[#0145F2]/5'
                                  : 'text-slate-500 hover:text-[#0145F2] hover:bg-[#0145F2]/5'
                                  }`}
                              >
                                {child.label}
                              </Link>
                            ))
                          )}
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
                  className={`block py-3 px-4 font-[Inter] uppercase font-bold text-xs tracking-wider rounded-lg transition-all ${isLinkActive(link.to)
                    ? 'text-[#0145F2] bg-[#0145F2]/5'
                    : 'text-slate-600 hover:text-[#0145F2] hover:bg-[#0145F2]/5'
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/seltiger"
                className="flex items-center justify-center transition-all mt-4 hover:opacity-80 pb-4"
              >
                <img src="/sel_tiger.png" alt="SEL TIGER" className="h-12 w-auto object-contain" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
