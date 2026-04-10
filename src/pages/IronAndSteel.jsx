import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function IronAndSteel() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40" alt="Dramatic molten steel pouring in industrial foundry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYRUmzexMwVohs8B2ZT65YqE2DXnO1-4oT0eMShaCU9uUMq1Kz66xDTy-q9jGmkbVSgUDT6aBFQgQOJ0TRimOt0j0TyfuicbGI4RNbxjyaNuzQvr8ITPEWaQUF6uaCOagCDRznTgKOIjSHQCWc-rnKC6fak7d-ukbkA4TmzS3wSfYAZuoXEIspGsgNfOy8-0vmGG9CF76bxttaWY5_c9Ma_6AYLS5DgihT_s3Y-f65P4h56zk3xxQf3XCcIgFFHekT6LqR9Nia2jY" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EDF1F5] via-[#EDF1F5]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl">
          <AnimatedSection delay={0.2}>
            <span className="font-label text-[#0145F2] tracking-[0.3em] uppercase text-sm mb-6 block">Core Division</span>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <h1 className="font-headline text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8">
              THE POWER OF <br />
              <span className="text-gradient-molten">IRON & STEEL</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-10">
              From sponge iron to finished TMT bars, our vertically integrated operations deliver the full spectrum of ferrous products with unmatched quality.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.8}>
            <div className="flex gap-6">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 molten-gradient text-[#FFFFFF] font-bold rounded-lg flex items-center gap-3">
                EXPLORE PRODUCTS <span className="material-symbols-outlined">arrow_forward</span>
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.0} />

      {/* Products */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-[1920px] mx-auto">
          <AnimatedSection>
            <h2 className="font-headline text-5xl font-black tracking-tighter uppercase mb-4">Product Range</h2>
            <div className="h-1 w-24 bg-[#0145F2] mb-16"></div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sponge Iron (DRI)', desc: 'High-quality direct reduced iron produced in state-of-the-art kilns with precise temperature control.' },
              { title: 'TMT Bars', desc: 'Premium thermo-mechanically treated rebars under our flagship SEL TIGER brand for superior construction.' },
              { title: 'Billets & Blooms', desc: 'Semi-finished steel products of various grades for downstream rolling and forging applications.' },
              { title: 'Ferro Alloys', desc: 'Essential alloying materials including ferro manganese and silico manganese for steel making.' },
              { title: 'Pellets', desc: 'Iron ore pellets with optimized chemistry for blast furnace and DRI operations.' },
              { title: 'Wire Rods', desc: 'High-carbon and low-carbon wire rods for diverse industrial and construction applications.' },
            ].map((p) => (
              <StaggerItem key={p.title}>
                <motion.div whileHover={{ y: -8, borderColor: 'rgba(1,69,242,0.3)' }} className="glass-card p-10 rounded-xl border border-white/5 transition-all duration-500 group h-full">
                  <h3 className="text-2xl font-black mb-4 group-hover:text-[#0145F2] transition-colors">{p.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <WaveCanvas height={200} flip={true} intensity={1.0} />

      {/* Stats */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <StaggerContainer className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { val: '5.6 MTPA', label: 'Steel Capacity' },
            { val: '2.1 MTPA', label: 'Pellet Capacity' },
            { val: '99.5%', label: 'Quality Rating' },
            { val: '40+', label: 'Export Markets' },
          ].map((s) => (
            <StaggerItem key={s.label}>
              <div className="text-center group">
                <motion.div whileHover={{ scale: 1.1 }} className="text-5xl font-black font-headline text-on-surface group-hover:text-[#0145F2] transition-colors mb-2">{s.val}</motion.div>
                <div className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#EDF1F5] text-center relative overflow-hidden">
        <div className="relative z-10 px-6">
          <AnimatedSection>
            <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-10 text-slate-800 uppercase">
              Build with the <br /> <span className="text-[#0145F2] text-glow">Best in Steel.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="max-w-2xl mx-auto text-slate-500 mb-12 text-lg">Contact our industrial consultants for a personalized quote.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <motion.button whileHover={{ scale: 1.05, backgroundColor: '#0145F2', color: '#FFFFFF' }} whileTap={{ scale: 0.95 }} className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm transition-colors duration-300">Inquire Now</motion.button>
              <motion.button whileHover={{ scale: 1.05, borderColor: '#0145F2' }} whileTap={{ scale: 0.95 }} className="px-10 py-5 border border-slate-400 text-slate-800 font-black uppercase tracking-widest text-sm transition-colors duration-300">Catalog 2024</motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
