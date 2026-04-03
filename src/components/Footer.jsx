import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { WaveTop } from './WaveDivider'

export default function Footer() {
  return (
    <>
      <WaveTop color="#1a181a" />
      <footer className="w-full py-16 px-6 md:px-12 bg-[#1a181a] border-t border-[#C3D809]/10">
        <div className="max-w-[1920px] mx-auto">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-3 group">
                <img src="/brand_logo.png" className="h-8 transition-all group-hover:brightness-110" alt="Shyam Metalics" />
                <span className="text-lg font-black text-white tracking-tight">SHYAM METALICS</span>
              </Link>
              <p className="text-zinc-600 text-sm max-w-xs leading-relaxed">
                A billion-dollar conglomerate redefining industrial excellence through precision engineering.
              </p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h4 className="font-[Manrope] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4 font-bold">Company</h4>
                <div className="space-y-2.5">
                  <Link to="/leadership" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">Leadership</Link>
                  <Link to="/manufacturing" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">Manufacturing</Link>
                  <Link to="/careers" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">Careers</Link>
                  <Link to="/news" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">News</Link>
                </div>
              </div>
              <div>
                <h4 className="font-[Manrope] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4 font-bold">Business</h4>
                <div className="space-y-2.5">
                  <Link to="/iron-and-steel" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">Iron & Steel</Link>
                  <Link to="/aluminium" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">Aluminium</Link>
                  <Link to="/stainless-steel" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">Stainless Steel</Link>
                  <Link to="/energy" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">Energy & Others</Link>
                </div>
              </div>
              <div>
                <h4 className="font-[Manrope] text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4 font-bold">Connect</h4>
                <div className="space-y-2.5">
                  <Link to="/contact" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">Contact Us</Link>
                  <Link to="/sustainability" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">Sustainability</Link>
                  <Link to="/community" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">Community</Link>
                  <Link to="/seltiger" className="block text-zinc-500 hover:text-[#C3D809] transition-colors text-sm">SEL TIGER</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#C3D809]/20 to-transparent mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 font-[Inter] text-[10px] tracking-widest uppercase text-zinc-600">
              <a className="hover:text-[#C3D809] transition-colors" href="#">Investors</a>
              <a className="hover:text-[#C3D809] transition-colors" href="#">Media Center</a>
              <a className="hover:text-[#C3D809] transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-[#C3D809] transition-colors" href="#">Terms of Service</a>
            </div>
            <div className="font-[Inter] text-[10px] tracking-widest uppercase text-zinc-700">
              &copy; {new Date().getFullYear()} SHYAM METALICS. INDUSTRIAL EXCELLENCE REFINED.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
