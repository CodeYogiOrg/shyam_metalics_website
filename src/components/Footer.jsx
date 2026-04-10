import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerLinks = {
  about: {
    title: 'About Us',
    links: [
      { to: '/about', label: 'Company Overview' },
      { to: '/leadership', label: 'Our Leadership' },
      { to: '/awards', label: 'Awards and Achievements' },
      { to: '/manufacturing', label: 'Manufacturing Unit' },
      { to: '/testimonials', label: 'Testimonials' },
      { to: '/news', label: 'News and Events' },
    ]
  },
  businesses: {
    title: 'Businesses',
    links: [
      { to: '/iron-and-steel', label: 'Iron and Steel' },
      { to: '/aluminium', label: 'Aluminum' },
      { to: '/energy', label: 'Energy & Others' },
    ]
  },
  investors: {
    title: 'Investors',
    links: [
      { to: '/investors/financial', label: 'Financial Performance' },
      { to: '/investors/governance', label: 'Corporate Governance' },
    ]
  },
  community: {
    title: 'Community',
    links: [
      { to: '/csr', label: 'CSR' },
      { to: '/blogs', label: 'Blogs' },
    ]
  },
  sustainability: {
    title: 'Sustainability',
    links: [
      { to: '/esg', label: 'ESG' },
      { to: '/environment-compliance', label: 'Environment Compliance' },
    ]
  },
  careers: {
    title: 'Careers',
    links: [
      { to: '/life', label: 'Life at Shyam' },
      { to: '/openings', label: 'Current Openings' },
    ]
  },
  contact: {
    title: 'Contact Us',
    links: [
      { to: '/contact', label: 'Contact Us' },
      { to: '/location', label: 'Company Location' },
      { to: '/login', label: 'Employee Login' },
    ]
  }
};

export default function Footer() {
  const footerRef = useRef(null)
  const columnsRef = useRef([])
  const logoRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: footerRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(
        columnsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: footerRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: bottomRef.current, start: 'top 95%' } }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="w-full bg-[#030A14] py-16 px-6 md:px-12 text-white border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0145F2]/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Newsletter & Brand Block */}
        <div ref={logoRef} className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/brand_logo.png" className="h-10 transition-all group-hover:brightness-125" alt="Shyam Metalics" />
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              A billion-dollar conglomerate redefining industrial excellence through precision engineering.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full lg:w-[450px]">
             <h3 className="text-white font-bold mb-1 text-lg">Subscribe to Our News Alerts</h3>
             <p className="text-slate-400 text-xs mb-4">Stay updated with the latest from Shyam Metalics.</p>
             <div className="flex bg-white/5 rounded-lg overflow-hidden border border-white/10 focus-within:border-[#0145F2]/50 transition-colors">
               <input type="email" placeholder="Enter your email" className="w-full bg-transparent px-4 py-3 outline-none text-sm text-white" />
               <motion.button whileHover={{ backgroundColor: 'rgba(1,69,242,1)' }} className="bg-[#0145F2]/80 px-6 font-bold text-xs tracking-wider uppercase transition-colors">
                 Subscribe
               </motion.button>
             </div>
          </div>
        </div>

        {/* Global Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: Addresses */}
          <div ref={(el) => (columnsRef.current[0] = el)} className="lg:col-span-1 space-y-8">
            <div>
              <h4 className="font-label text-xs uppercase tracking-[0.1em] text-[#0145F2] mb-3 font-bold">Corporate Office</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                P-19, Plate No: D-403<br/>
                CPT Colony, Taratala Road<br/>
                Kolkata – 700088, West Bengal<br/>
                <span className="text-white font-medium mt-1 block">Ph: 033 6521 6521</span>
              </p>
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-[0.1em] text-[#0145F2] mb-3 font-bold">Shyam Metalics Office</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                SS Chambers<br/>
                5 CR Avenue, Princep Street<br/>
                2nd Floor, Kolkata – 700072<br/>
                West Bengal
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div ref={(el) => (columnsRef.current[1] = el)} className="space-y-8">
             <div>
                <h4 className="font-label text-[11px] uppercase tracking-[0.15em] text-slate-100 mb-4 font-bold">{footerLinks.about.title}</h4>
                <ul className="space-y-2.5">
                  {footerLinks.about.links.map(link => (
                    <li key={link.label}><Link to={link.to} className="text-slate-400 hover:text-[#0145F2] text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
             </div>
             <div>
                <h4 className="font-label text-[11px] uppercase tracking-[0.15em] text-slate-100 mb-4 font-bold mt-8">{footerLinks.businesses.title}</h4>
                <ul className="space-y-2.5">
                  {footerLinks.businesses.links.map(link => (
                    <li key={link.label}><Link to={link.to} className="text-slate-400 hover:text-[#0145F2] text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
             </div>
          </div>

          {/* Column 3 */}
          <div ref={(el) => (columnsRef.current[2] = el)} className="space-y-8">
             <div>
                <h4 className="font-label text-[11px] uppercase tracking-[0.15em] text-slate-100 mb-4 font-bold">{footerLinks.investors.title}</h4>
                <ul className="space-y-2.5">
                  {footerLinks.investors.links.map(link => (
                    <li key={link.label}><Link to={link.to} className="text-slate-400 hover:text-[#0145F2] text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
             </div>
             <div>
                <h4 className="font-label text-[11px] uppercase tracking-[0.15em] text-slate-100 mb-4 font-bold mt-8">{footerLinks.community.title}</h4>
                <ul className="space-y-2.5">
                  {footerLinks.community.links.map(link => (
                    <li key={link.label}><Link to={link.to} className="text-slate-400 hover:text-[#0145F2] text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
             </div>
          </div>

          {/* Column 4 */}
          <div ref={(el) => (columnsRef.current[3] = el)} className="space-y-8">
             <div>
                <h4 className="font-label text-[11px] uppercase tracking-[0.15em] text-slate-100 mb-4 font-bold">{footerLinks.sustainability.title}</h4>
                <ul className="space-y-2.5">
                  {footerLinks.sustainability.links.map(link => (
                    <li key={link.label}><Link to={link.to} className="text-slate-400 hover:text-[#0145F2] text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
             </div>
             <div>
                <h4 className="font-label text-[11px] uppercase tracking-[0.15em] text-slate-100 mb-4 font-bold mt-8">{footerLinks.careers.title}</h4>
                <ul className="space-y-2.5">
                  {footerLinks.careers.links.map(link => (
                    <li key={link.label}><Link to={link.to} className="text-slate-400 hover:text-[#0145F2] text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
             </div>
          </div>

          {/* Column 5 */}
          <div ref={(el) => (columnsRef.current[4] = el)}>
             <h4 className="font-label text-[11px] uppercase tracking-[0.15em] text-slate-100 mb-4 font-bold">{footerLinks.contact.title}</h4>
             <ul className="space-y-2.5">
               {footerLinks.contact.links.map(link => (
                 <li key={link.label}><Link to={link.to} className="text-slate-400 hover:text-[#0145F2] text-sm transition-colors">{link.label}</Link></li>
               ))}
             </ul>

             <div className="mt-8 flex items-center gap-3">
               {[
                 { label: 'Facebook', href: '#', icon: <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg> },
                 { label: 'Instagram', href: '#', icon: <><svg width="0" height="0"><radialGradient id="igGrid" r="150%" cx="30%" cy="107%"><stop stopColor="#fdf497" offset="0"></stop><stop stopColor="#fd5949" offset="0.45"></stop><stop stopColor="#d6249f" offset="0.6"></stop><stop stopColor="#285AEB" offset="0.9"></stop></radialGradient></svg><svg className="w-5 h-5" viewBox="0 0 24 24" fill="url(#igGrid)"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></> },
                 { label: 'YouTube', href: '#', icon: <svg className="w-5 h-5 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 00-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 002.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.377-.55a3.016 3.016 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
                 { label: 'X', href: '#', icon: <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg> },
                 { label: 'LinkedIn', href: '#', icon: <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> }
               ].map(({ label, href, icon }) => (
                 <motion.a
                   key={label}
                   href={href}
                   whileHover={{ scale: 1.15, y: -2 }}
                   className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-all duration-300 group"
                 >
                   {icon}
                 </motion.a>
               ))}
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div ref={bottomRef} className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col lg:flex-row items-center gap-4 text-slate-400 text-[11px] lg:text-xs">
            <span>Copyright 2026 Shyam Theme by Shyam | All Rights Reserved</span>
            <span className="hidden lg:inline">•</span>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of use</Link>
            </div>
          </div>
          <div className="flex items-center flex-wrap justify-center gap-3 lg:gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><span className="text-base leading-none">🌍</span> India</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="flex items-center gap-1.5"><span className="text-base leading-none">✉️</span> contact@shyamgroup.com | compliance@shyamgroup.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
