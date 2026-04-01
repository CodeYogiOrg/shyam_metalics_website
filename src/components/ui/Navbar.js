import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navConfig = [
  {
    label: 'About',
    scrollIndex: 0,
    subPages: [
      { label: 'Company Overview' },
      { label: 'Manufacturing Unit' },
      { label: 'Leadership' },
      { label: 'Awards and Achievements' },
      { label: 'Testimonials' },
      { label: 'News and Events' },
    ],
  },
  {
    label: 'Business',
    scrollIndex: 1,
    subPages: [
      { label: 'Business Overview' },
      {
        label: 'Iron & Steel',
        subPages: [
          {
            label: 'Carbon Steel',
            subPages: [
              { label: 'Pellet' },
              { label: 'Sponge Iron' },
              { label: 'Pig Iron' },
              { label: 'Billet' },
              { label: 'TMT Bar' },
              { label: 'Structural Steel' },
              { label: 'Wire Rods' },
              { label: 'Crash Barrier' },
            ],
          },
          {
            label: 'Stainless Steel',
            subPages: [
              { label: 'Stainless Steel Billets' },
              { label: 'SS Rebar' },
              { label: 'SS Hot Rolled Bar' },
              { label: 'SS Bright Bar' },
              { label: 'SS Wires' },
              { label: 'SS Welding Wires' },
              { label: 'SS Wire Rod' },
            ],
          },
          { label: 'Ferro Alloys' },
          {
            label: 'Flat Products',
            subPages: [
              { label: 'Flat Products' },
              { label: 'Pipe & Hollow Sections' },
            ],
          },
        ],
      },
      {
        label: 'Aluminium',
        subPages: [
          { label: 'SEL TIGER FOIL – Kitchen Foil Range' },
          { label: 'Battery Foil' },
          { label: 'Bare Aluminium Foil' },
          { label: 'Fin Stock' },
        ],
      },
      {
        label: 'Energy & Others',
        subPages: [
          { label: 'Renewable Power' },
          { label: 'Captive Power' },
          { label: 'Railway Wagons' },
        ],
      },
    ],
  },
  {
    label: 'Careers',
    scrollIndex: null,
    subPages: [
      { label: 'Life at Shyam' },
      { label: 'Career @ Shyam' },
    ],
  },
  {
    label: 'Sustainability',
    scrollIndex: null,
    subPages: [
      { label: 'ESG' },
      { label: 'Environment Compliance' },
    ],
  },
  {
    label: 'Community',
    scrollIndex: null,
    subPages: [
      { label: 'CSR' },
      { label: 'Blogs' },
    ],
  },
  {
    label: 'Contact',
    scrollIndex: 4,
    subPages: [
      { label: 'Jamuria, West Bengal' },
      { label: 'Jamuria, West Bengal' },
    ],
  },
];

export default function Navbar({ currentSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [openSubSub, setOpenSubSub] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState(null);
  const [mobileSubSub, setMobileSubSub] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setOpenSubSub(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (scrollIndex) => {
    if (scrollIndex === null) return;
    const vh = window.innerHeight;
    const targets = [100, 200, 400, 600, 800];
    window.scrollTo({ top: targets[scrollIndex] * vh / 100, behavior: 'smooth' });
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
    setOpenSubSub(null);
  };

  const activeNav = currentSection > 0 ? currentSection - 1 : -1;

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
    setOpenSubDropdown(null);
    setOpenSubSub(null);
  };

  const dotColor = (idx) => {
    const colors = ['#FF6B00', '#FF006E', '#3B82F6'];
    return colors[idx % 3];
  };

  const dotGradient = (idx) => {
    const pairs = [
      ['#FF6B00', '#FF006E'],
      ['#FF006E', '#3B82F6'],
      ['#3B82F6', '#FF6B00'],
    ];
    const p = pairs[idx % 3];
    return `linear-gradient(135deg, ${p[0]}, ${p[1]})`;
  };

  const dropdownStyle = {
    position: 'absolute',
    minWidth: '260px',
    background: 'rgba(9,9,11,0.95)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    borderRadius: '16px',
    border: '1px solid rgba(255,107,0,0.15)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(255,107,0,0.08)',
    padding: '8px 0',
    overflow: 'visible',
    zIndex: 1001,
  };

  const subItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    width: '100%',
    padding: '13px 24px',
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.8)',
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: '0.5px',
    cursor: 'pointer',
    textAlign: 'left',
    fontFamily: 'inherit',
    transition: 'all 0.2s ease',
  };

  const renderDropdownPopup = (item) => {
    if (!item.subPages) return null;
    const isOpen = openDropdown === item.label;

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              ...dropdownStyle,
              top: 'calc(100% + 16px)',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #FF6B00, #FF006E, #3B82F6)',
            }} />

            {item.subPages.map((sub, idx) => {
              const hasNested = sub.subPages && sub.subPages.length > 0;
              const isNestedOpen = openSubDropdown === sub.label;

              return (
                <div key={sub.label + idx} style={{ position: 'relative' }}>
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    onClick={() => {
                      if (hasNested) {
                        setOpenSubDropdown(isNestedOpen ? null : sub.label);
                      } else {
                        if (item.scrollIndex !== null) scrollToSection(item.scrollIndex);
                        setOpenDropdown(null);
                        setOpenSubDropdown(null);
                      }
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(255,107,0,0.08)',
                      x: 4,
                    }}
                    style={subItemStyle}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: dotGradient(idx), flexShrink: 0,
                      }} />
                      {sub.label}
                    </span>
                    {hasNested && (
                      <motion.span
                        animate={{ rotate: isNestedOpen ? -90 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}
                      >
                        ▶
                      </motion.span>
                    )}
                  </motion.button>

                  {/* Nested sub-dropdown (level 2) */}
                  {hasNested && (
                    <AnimatePresence>
                      {isNestedOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: 10, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          style={{
                            ...dropdownStyle,
                            position: 'absolute',
                            top: '-8px',
                            left: 'calc(100% + 8px)',
                            minWidth: '260px',
                          }}
                        >
                          <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, height: '2px',
                            background: 'linear-gradient(90deg, #FF6B00, #FF006E, #3B82F6)',
                          }} />

                          {sub.subPages.map((nested, ni) => {
                            const hasLevel3 = nested.subPages && nested.subPages.length > 0;
                            const isLevel3Open = openSubSub === nested.label;

                            return (
                              <div key={nested.label + ni} style={{ position: 'relative' }}>
                                <motion.button
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: ni * 0.05, duration: 0.25 }}
                                  onClick={() => {
                                    if (hasLevel3) {
                                      setOpenSubSub(isLevel3Open ? null : nested.label);
                                    } else {
                                      if (item.scrollIndex !== null) scrollToSection(item.scrollIndex);
                                      setOpenDropdown(null);
                                      setOpenSubDropdown(null);
                                      setOpenSubSub(null);
                                    }
                                  }}
                                  whileHover={{
                                    backgroundColor: 'rgba(255,107,0,0.08)',
                                    x: 4,
                                  }}
                                  style={subItemStyle}
                                >
                                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{
                                      width: '5px', height: '5px', borderRadius: '50%',
                                      background: dotColor(ni), flexShrink: 0,
                                    }} />
                                    {nested.label}
                                  </span>
                                  {hasLevel3 && (
                                    <motion.span
                                      animate={{ rotate: isLevel3Open ? -90 : 0 }}
                                      transition={{ duration: 0.2 }}
                                      style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}
                                    >
                                      ▶
                                    </motion.span>
                                  )}
                                </motion.button>

                                {/* Level 3 nested popup */}
                                {hasLevel3 && (
                                  <AnimatePresence>
                                    {isLevel3Open && (
                                      <motion.div
                                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                        style={{
                                          ...dropdownStyle,
                                          position: 'absolute',
                                          top: '-8px',
                                          left: 'calc(100% + 8px)',
                                          minWidth: '240px',
                                        }}
                                      >
                                        <div style={{
                                          position: 'absolute',
                                          top: 0, left: 0, right: 0, height: '2px',
                                          background: 'linear-gradient(90deg, #FF6B00, #FF006E, #3B82F6)',
                                        }} />

                                        {nested.subPages.map((l3, l3i) => (
                                          <motion.button
                                            key={l3.label + l3i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: l3i * 0.04, duration: 0.2 }}
                                            onClick={() => {
                                              if (item.scrollIndex !== null) scrollToSection(item.scrollIndex);
                                              setOpenDropdown(null);
                                              setOpenSubDropdown(null);
                                              setOpenSubSub(null);
                                            }}
                                            whileHover={{
                                              backgroundColor: 'rgba(255,107,0,0.08)',
                                              x: 4,
                                            }}
                                            style={subItemStyle}
                                          >
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                              <span style={{
                                                width: '4px', height: '4px', borderRadius: '50%',
                                                background: dotColor(l3i), flexShrink: 0,
                                              }} />
                                              {l3.label}
                                            </span>
                                          </motion.button>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                )}
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <motion.nav
        className="navbar"
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          zIndex: 1000,
          height: scrolled ? '77px' : '97px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          background: scrolled
            ? 'rgba(9,9,11,0.92)'
            : 'rgba(9,9,11,0.3)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: scrolled
            ? '1px solid rgba(255,107,0,0.15)'
            : '1px solid rgba(255,255,255,0.05)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          boxSizing: 'border-box',
          overflow: 'visible',
        }}
      >
        {/* Animated gradient line at bottom */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, #FF6B00, #FF006E, #3B82F6, transparent)',
            opacity: scrolled ? 0.6 : 0.2,
            transition: 'opacity 0.4s',
          }}
          animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        {/* Logo */}
        <motion.div
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <motion.img
            src="/logooo.png"
            alt="Shyam Metalics"
            style={{
              height: '180px',
              width: 'auto',
              borderRadius: '8px',
              marginTop: '10px',
              marginLeft: '-30px',
              transition: 'height 0.4s ease',
              filter: 'drop-shadow(0 0 8px rgba(255,107,0,0.3))',
            }}
            whileHover={{
              filter: 'drop-shadow(0 0 15px rgba(255,107,0,0.5)) drop-shadow(0 0 30px rgba(255,0,110,0.3))',
            }}
          />
        </motion.div>

        {/* Desktop Menu */}
        <div
          style={{ display: 'flex', gap: '28px', alignItems: 'center' }}
          className="nav-desktop"
        >
          {navConfig.map((item, i) => {
            const hasDropdown = item.subPages && item.subPages.length > 0;
            const isActive = item.scrollIndex !== null && activeNav === item.scrollIndex;
            const isDropdownOpen = openDropdown === item.label;

            return (
              <div key={item.label} style={{ position: 'relative' }}>
                <motion.button
                  onClick={() => {
                    if (hasDropdown) {
                      toggleDropdown(item.label);
                    } else if (item.scrollIndex !== null) {
                      scrollToSection(item.scrollIndex);
                    }
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: isActive || isDropdownOpen ? '#FF6B00' : 'rgba(255,255,255,0.65)',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    padding: '8px 4px',
                    position: 'relative',
                    fontFamily: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                  whileHover={{ color: '#ffffff', y: -2 }}
                >
                  {item.label}
                  {hasDropdown && (
                    <motion.span
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ fontSize: '10px', display: 'inline-block' }}
                    >
                      ▼
                    </motion.span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      style={{
                        position: 'absolute',
                        bottom: -2, left: 0, right: 0, height: '2px',
                        background: 'linear-gradient(90deg, #FF6B00, #FF006E, #3B82F6)',
                        borderRadius: '1px',
                        boxShadow: '0 0 8px rgba(255,107,0,0.4)',
                      }}
                    />
                  )}
                </motion.button>

                {renderDropdownPopup(item)}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.button
          className="nav-cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{
            scale: 1.08,
            boxShadow: '0 0 25px rgba(255,107,0,0.5), 0 0 50px rgba(255,0,110,0.3), 0 0 80px rgba(59,130,246,0.15)',
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'linear-gradient(135deg, #FF6B00, #FF006E, #3B82F6)',
            backgroundSize: '200% 200%',
            animation: 'ctaGradient 3s ease infinite',
            border: 'none',
            color: '#fff',
            padding: '12px 30px',
            borderRadius: '25px',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '1px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            boxShadow: '0 4px 20px rgba(255,107,0,0.3), 0 2px 10px rgba(255,0,110,0.2)',
            fontFamily: 'inherit',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          Get Started
        </motion.button>

        {/* Mobile Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          <div style={{
            width: '24px', height: '2px', background: '#fff',
            transition: 'all 0.3s',
            transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <div style={{
            width: '24px', height: '2px', background: '#fff',
            margin: '5px 0', transition: 'all 0.3s',
            opacity: mobileOpen ? 0 : 1,
          }} />
          <div style={{
            width: '24px', height: '2px', background: '#fff',
            transition: 'all 0.3s',
            transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0, right: 0, bottom: 0,
              width: '300px',
              background: 'rgba(9,9,11,0.97)',
              backdropFilter: 'blur(24px)',
              zIndex: 999,
              padding: '110px 40px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              overflowY: 'auto',
            }}
          >
            {navConfig.map((item, i) => {
              const hasDropdown = item.subPages && item.subPages.length > 0;
              const isMobileOpen = mobileExpanded === item.label;

              return (
                <React.Fragment key={item.label}>
                  <motion.button
                    onClick={() => {
                      if (hasDropdown) {
                        setMobileExpanded(isMobileOpen ? null : item.label);
                        setMobileSubExpanded(null);
                      } else if (item.scrollIndex !== null) {
                        scrollToSection(item.scrollIndex);
                      }
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: item.scrollIndex !== null && activeNav === item.scrollIndex ? '#FF6B00' : '#fff',
                      fontSize: '18px',
                      fontWeight: 500,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: '12px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      fontFamily: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    {item.label}
                    {hasDropdown && (
                      <motion.span
                        animate={{ rotate: isMobileOpen ? 180 : 0 }}
                        style={{ fontSize: '12px' }}
                      >
                        ▼
                      </motion.span>
                    )}
                  </motion.button>

                  {hasDropdown && (
                    <AnimatePresence>
                      {isMobileOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden', paddingLeft: '16px' }}
                        >
                          {item.subPages.map((sub, si) => {
                            const hasNested = sub.subPages && sub.subPages.length > 0;
                            const isSubOpen = mobileSubExpanded === sub.label;

                            return (
                              <React.Fragment key={sub.label + si}>
                                <motion.button
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: si * 0.05 }}
                                  onClick={() => {
                                    if (hasNested) {
                                      setMobileSubExpanded(isSubOpen ? null : sub.label);
                                    } else {
                                      if (item.scrollIndex !== null) scrollToSection(item.scrollIndex);
                                      setMobileOpen(false);
                                    }
                                  }}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    background: 'none',
                                    border: 'none',
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '14px',
                                    padding: '10px 0',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontFamily: 'inherit',
                                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                                  }}
                                >
                                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{
                                      width: '5px', height: '5px', borderRadius: '50%',
                                      background: dotColor(si), flexShrink: 0,
                                    }} />
                                    {sub.label}
                                  </span>
                                  {hasNested && (
                                    <motion.span
                                      animate={{ rotate: isSubOpen ? 180 : 0 }}
                                      style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}
                                    >
                                      ▼
                                    </motion.span>
                                  )}
                                </motion.button>

                                {hasNested && (
                                  <AnimatePresence>
                                    {isSubOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        style={{ overflow: 'hidden', paddingLeft: '20px' }}
                                      >
                                        {sub.subPages.map((nested, ni) => {
                                          const hasL3 = nested.subPages && nested.subPages.length > 0;
                                          const isL3Open = mobileSubSub === nested.label;

                                          return (
                                            <React.Fragment key={nested.label + ni}>
                                              <motion.button
                                                initial={{ opacity: 0, x: 8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: ni * 0.04 }}
                                                onClick={() => {
                                                  if (hasL3) {
                                                    setMobileSubSub(isL3Open ? null : nested.label);
                                                  } else {
                                                    if (item.scrollIndex !== null) scrollToSection(item.scrollIndex);
                                                    setMobileOpen(false);
                                                  }
                                                }}
                                                style={{
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  justifyContent: 'space-between',
                                                  width: '100%',
                                                  background: 'none',
                                                  border: 'none',
                                                  color: 'rgba(255,255,255,0.55)',
                                                  fontSize: '13px',
                                                  padding: '8px 0',
                                                  cursor: 'pointer',
                                                  textAlign: 'left',
                                                  fontFamily: 'inherit',
                                                  borderBottom: '1px solid rgba(255,255,255,0.03)',
                                                }}
                                              >
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                  <span style={{
                                                    width: '4px', height: '4px', borderRadius: '50%',
                                                    background: dotColor(ni), flexShrink: 0,
                                                  }} />
                                                  {nested.label}
                                                </span>
                                                {hasL3 && (
                                                  <motion.span
                                                    animate={{ rotate: isL3Open ? 180 : 0 }}
                                                    style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}
                                                  >
                                                    ▼
                                                  </motion.span>
                                                )}
                                              </motion.button>

                                              {hasL3 && (
                                                <AnimatePresence>
                                                  {isL3Open && (
                                                    <motion.div
                                                      initial={{ height: 0, opacity: 0 }}
                                                      animate={{ height: 'auto', opacity: 1 }}
                                                      exit={{ height: 0, opacity: 0 }}
                                                      transition={{ duration: 0.2 }}
                                                      style={{ overflow: 'hidden', paddingLeft: '18px' }}
                                                    >
                                                      {nested.subPages.map((l3, l3i) => (
                                                        <motion.button
                                                          key={l3.label + l3i}
                                                          initial={{ opacity: 0, x: 6 }}
                                                          animate={{ opacity: 1, x: 0 }}
                                                          transition={{ delay: l3i * 0.03 }}
                                                          onClick={() => {
                                                            if (item.scrollIndex !== null) scrollToSection(item.scrollIndex);
                                                            setMobileOpen(false);
                                                          }}
                                                          style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '7px',
                                                            width: '100%',
                                                            background: 'none',
                                                            border: 'none',
                                                            color: 'rgba(255,255,255,0.45)',
                                                            fontSize: '12px',
                                                            padding: '7px 0',
                                                            cursor: 'pointer',
                                                            textAlign: 'left',
                                                            fontFamily: 'inherit',
                                                            borderBottom: '1px solid rgba(255,255,255,0.02)',
                                                          }}
                                                        >
                                                          <span style={{
                                                            width: '3px', height: '3px', borderRadius: '50%',
                                                            background: dotColor(l3i), flexShrink: 0,
                                                          }} />
                                                          {l3.label}
                                                        </motion.button>
                                                      ))}
                                                    </motion.div>
                                                  )}
                                                </AnimatePresence>
                                              )}
                                            </React.Fragment>
                                          );
                                        })}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </React.Fragment>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
