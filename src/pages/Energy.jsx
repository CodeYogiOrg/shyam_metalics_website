import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function Energy() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#0145F2]/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0145F2]/5 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-[1920px] mx-auto w-full relative z-10">
          <AnimatedSection delay={0.2}>
            <span className="font-label text-[#0145F2] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Diversified Portfolio</span>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <h1 className="text-7xl md:text-9xl font-black font-headline tracking-tighter leading-none mb-8">
              ENERGY &<br />
              <span className="text-gradient-molten">BEYOND</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              Powering our manufacturing ecosystem with captive energy solutions while diversifying into renewable and sustainable power generation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.0} />

      {/* Segments */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-[1920px] mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-black font-headline tracking-tighter mb-4 uppercase">Energy Divisions</h2>
            <div className="h-1 w-24 bg-[#0145F2] mb-16"></div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'bolt', title: 'Captive Power Plants', desc: 'Over 500 MW of captive thermal power capacity fueling our integrated steel plants, ensuring uninterrupted operations and cost efficiency.', stat: '500+ MW' },
              { icon: 'solar_power', title: 'Solar Energy', desc: 'Strategic investments in solar farms across our manufacturing hubs, reducing dependency on grid power and lowering our carbon footprint.', stat: '25 MW' },
              { icon: 'recycling', title: 'Waste Heat Recovery', desc: 'Advanced WHRB systems capturing heat from DRI kilns and blast furnaces to generate clean electricity, turning waste into power.', stat: '60 MW' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div whileHover={{ y: -8 }} className="glass-card p-12 rounded-xl border border-white/5 hover:border-[#0145F2]/30 transition-all duration-500 group h-full">
                  <div className="w-16 h-16 rounded-full bg-[#0145F2]/10 flex items-center justify-center mb-8 border border-[#0145F2]/30">
                    <span className="material-symbols-outlined text-3xl text-[#0145F2]">{item.icon}</span>
                  </div>
                  <div className="text-4xl font-black text-[#0145F2] mb-4">{item.stat}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#0145F2] transition-colors">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <WaveCanvas height={200} flip={true} intensity={1.0} />

      {/* Other Businesses */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1920px] mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-black font-headline tracking-tighter mb-4 uppercase">Other Ventures</h2>
            <div className="h-1 w-24 bg-[#0145F2] mb-16"></div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Cement & Construction Materials', desc: 'Leveraging slag and industrial by-products to manufacture high-grade cement and construction materials, supporting the circular economy.' },
              { title: 'Real Estate Development', desc: 'Strategic land holdings and township development around our industrial hubs, creating integrated living and working ecosystems.' },
              { title: 'Logistics & Supply Chain', desc: 'Proprietary rail sidings, warehousing facilities, and fleet management systems ensuring seamless material flow across operations.' },
              { title: 'Education & CSR Initiatives', desc: 'The Shyam Foundation operates schools, vocational training centers, and healthcare facilities across West Bengal and Odisha.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div whileHover={{ y: -5, borderColor: 'rgba(1,69,242,0.15)' }} className="bg-surface-container-high p-10 rounded-xl transition-all duration-300 border border-transparent">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0145F2]/30 to-transparent"></div>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase mb-12">Building an <span className="text-gradient-molten">Indestructible</span> Future</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full md:w-auto px-12 py-5 molten-gradient text-[#FFFFFF] font-headline font-extrabold uppercase tracking-widest text-sm" href="#">Partner With Us</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full md:w-auto px-12 py-5 bg-transparent border border-outline text-on-surface font-headline font-extrabold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-colors" href="#">Investor Center</motion.a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
