import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { WaveSection } from '../components/WaveDivider'

export default function SelTiger() {
  return (
    <>
      {/* Hero */}
      <WaveSection waves={4} className="relative min-h-screen flex items-end pb-24 pt-32 overflow-hidden bg-[#1a181a]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a181a] via-[#1a181a]/50 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Construction site with steel rebar" />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12">
          <AnimatedSection delay={0.2}>
            <div className="inline-flex items-center gap-3 backdrop-blur-md bg-[#C3D809]/10 border border-[#C3D809]/50 px-6 py-2 rounded-full mb-8">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C3D809]">Premium TMT Rebar</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <h1 className="text-7xl md:text-[8rem] font-headline font-black tracking-tighter leading-none mb-6">
              <span className="text-[#C3D809]">SEL</span> TIGER
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <p className="text-2xl text-zinc-300 max-w-3xl font-light leading-relaxed">
              Engineered for extreme stress. The advanced rib design and superior ductility guarantee maximum grip and earthquake resistance for monumental structures.
            </p>
          </AnimatedSection>
        </div>
      </WaveSection>

      {/* Technical Features */}
      <section className="py-32 bg-[#1a181a] relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#C3D809]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
          <AnimatedSection>
            <div className="mb-20">
              <h2 className="text-sm font-label uppercase tracking-[0.4em] text-[#C3D809] mb-4">Structural Advantages</h2>
              <h3 className="text-5xl font-headline font-black">Why Choose SEL TIGER?</h3>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'architecture', title: 'Advanced Rib Design', desc: 'Unique automated CNC machined ribs provide incredibly strong bonding with concrete, preventing micro-fissures and extending structural lifespan by decades.' },
              { icon: 'waves', title: 'Seismic Resilience', desc: 'Exceptional ductility with a high UTS/YS ratio guarantees the rebars absorb immense seismic shockwaves without fracturing, keeping high-rise buildings safe.' },
              { icon: 'shield', title: 'Corrosion Retardant', desc: 'Thermo-mechanically treated through leading German technology ensures a tough martensitic periphery and a soft ferritic core, resisting rust and atmospheric decay.' },
            ].map((f) => (
              <StaggerItem key={f.title}>
                <motion.div
                  whileHover={{ y: -16, boxShadow: '0 20px 40px rgba(195,216,9,0.15)' }}
                  className="bg-[#222022] border border-[#333133] p-12 rounded-3xl transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 border bg-[#C3D809]/10 border-[#C3D809]/30">
                    <span className="material-symbols-outlined text-3xl text-[#C3D809]">{f.icon}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">{f.title}</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">{f.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Grades */}
      <WaveSection waves={3} className="py-32 px-6 md:px-12 bg-[#1a181a]">
        <div className="max-w-[1920px] mx-auto">
          <AnimatedSection>
            <h2 className="text-sm font-label uppercase tracking-[0.4em] text-[#C3D809] mb-4">Product Range</h2>
            <h3 className="text-5xl font-headline font-black mb-16">Available Grades</h3>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { grade: 'Fe 415D', use: 'General Construction', sizes: '8mm - 32mm' },
              { grade: 'Fe 500D', use: 'High-Rise Buildings', sizes: '8mm - 40mm' },
              { grade: 'Fe 550D', use: 'Bridges & Flyovers', sizes: '10mm - 40mm' },
              { grade: 'Fe 600', use: 'Critical Infrastructure', sizes: '12mm - 40mm' },
            ].map((g) => (
              <StaggerItem key={g.grade}>
                <motion.div whileHover={{ y: -8, borderColor: 'rgba(195,216,9,0.5)' }} className="bg-[#222022]/50 border border-[#333133] p-8 rounded-xl transition-all group">
                  <div className="text-3xl font-black text-[#C3D809] mb-4">{g.grade}</div>
                  <div className="font-label text-xs uppercase tracking-widest text-zinc-500 mb-2">{g.use}</div>
                  <div className="text-zinc-400 text-sm">Sizes: {g.sizes}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </WaveSection>

      {/* CTA Banner */}
      <section className="py-24 px-6 md:px-12 bg-[#C3D809]">
        <AnimatedSection>
          <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-[#1a1c00] mb-4">Fortify Your Foundations.</h2>
              <p className="text-xl text-[#2a2d00] max-w-xl">Contact our logistics team for bulk enterprise purchase and on-site delivery integration.</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="inline-block px-12 py-6 bg-[#1a1c00] text-white hover:bg-black transition-colors font-bold uppercase tracking-[0.2em] rounded-full drop-shadow-2xl duration-300">
                Place Bulk Order
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
