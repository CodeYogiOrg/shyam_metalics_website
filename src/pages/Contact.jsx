import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { WaveSection } from '../components/WaveDivider'

export default function Contact() {
  return (
    <div className="relative pt-32 pb-24">
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#C3D809]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#9AAE07]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="mb-20">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-[#C3D809] mb-4 block">Global Connectivity</span>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
              GET IN <br /> <span className="text-gradient-molten">TOUCH.</span>
            </h1>
            <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed font-light">
              Forging partnerships that span continents. Reach out to our industrial hubs or connect with our global sales divisions.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <AnimatedSection direction="left" className="lg:col-span-7">
            <div className="glass-card p-8 md:p-12 industrial-glow relative overflow-hidden group rounded-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C3D809]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h2 className="font-headline text-3xl font-bold tracking-tight mb-10">Let's Build Something Eternal</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant px-1">Full Name</label>
                    <input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-[#C3D809]/40 p-4 text-on-surface font-light transition-all rounded" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant px-1">Organization</label>
                    <input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-[#C3D809]/40 p-4 text-on-surface font-light transition-all rounded" placeholder="Global Infra Ltd." type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant px-1">Corporate Email</label>
                  <input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-[#C3D809]/40 p-4 text-on-surface font-light transition-all rounded" placeholder="john@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant px-1">Project Scope</label>
                  <textarea className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-[#C3D809]/40 p-4 text-on-surface font-light transition-all resize-none rounded" placeholder="Describe your structural requirements..." rows="4"></textarea>
                </div>
                <motion.button whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(195,216,9,0.3)' }} whileTap={{ scale: 0.98 }} className="w-full py-5 molten-gradient text-[#1a1c00] font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 rounded">
                  INITIATE INQUIRY
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 border-l-2 border-[#C3D809]/30 rounded-r-xl">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-[#C3D809]">factory</span>
                </div>
                <div>
                  <h3 className="font-label text-xs uppercase tracking-widest text-[#C3D809] mb-2">Primary Office</h3>
                  <p className="text-xl font-bold mb-1">Jamuria Hub</p>
                  <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                    Village & P.O. Jamuria, District Paschim Bardhaman,<br />
                    West Bengal - 713336, India
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 border-l-2 border-[#C3D809]/30 rounded-r-xl">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-[#C3D809]">language</span>
                </div>
                <div>
                  <h3 className="font-label text-xs uppercase tracking-widest text-[#C3D809] mb-4">Global Sales Network</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-tighter text-on-surface/50">Domestic Inquiry</p>
                      <p className="text-[#C3D809] font-medium">sales.india@shyammetalics.com</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-tighter text-on-surface/50">Export Division</p>
                      <p className="text-[#C3D809] font-medium">global.trade@shyammetalics.com</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-lg font-bold">+91 33 4011 1000</p>
                      <p className="text-[10px] uppercase text-on-surface-variant tracking-widest">Available 09:00 - 18:00 IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card h-64 relative overflow-hidden group rounded-xl">
              <img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 transition-transform duration-1000" alt="Futuristic night view of a world map with glowing data lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA10yxQ_F80A03R7slpbjDgueCU1sr6lkPWTtzloHFXCvu6Gw0P_W4FeeFHc70aYqdLAL3C6otLED5xtsfnWRnrS0YO0ikDBZyRCiSlr-ZTnBn8qaS6G0PN1LVg3MMJrii9yjJN1zUuPdNj8j2Ey_gvef7GfVEW9L8QHUmoNRx2Bjgn7aOcCHSKkL-9jZoURQmEvGBBh2A8yEcshrYZEIpXxOdUdpF_oHRSv41qm4ErCtRDk0IkAPugb8OND8MSiM9oWoG5_JgNx7A" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222022] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#C3D809] rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Live: Jamuria Operations Hub</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
