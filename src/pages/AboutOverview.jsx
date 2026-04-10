import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function AboutOverview() {
  return (
    <div className="relative pt-32 bg-surface">
      <section className="px-6 md:px-12 mb-24 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <span className="font-black font-headline text-[#0145F2] tracking-[0.3em] uppercase block mb-4 text-xs font-black">Company Identity</span>
          <h1 className="text-7xl md:text-9xl font-headline font-black tracking-tighter leading-[0.85] mb-8 text-on-surface uppercase">
            FORGING A <br /><span className="text-[#0145F2] italic">LEGACY</span> IN METAL.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Shyam Metalics is a leading integrated metals producing company based in India with a focus on long steel products and ferro alloys. We are amongst the largest producers of ferro alloys in terms of installed capacity in India.
          </p>
        </AnimatedSection>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.0} />

      <section className="py-24 px-6 md:px-12 bg-surface-container-lowest border-y border-[#0145F2]/10">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-12">
            <div className="p-8 glass-card rounded-[40px] border border-[#0145F2]/10 bg-white">
                <h3 className="text-2xl font-black font-headline uppercase mb-4 text-[#0145F2]">Massive Capacity</h3>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">Operates multiple state-of-the-art manufacturing plants with an annual capacity exceeding 13 Million Tonnes.</p>
            </div>
            <div className="p-8 glass-card rounded-[40px] border border-[#0145F2]/10 bg-white">
                <h3 className="text-2xl font-black font-headline uppercase mb-4 text-[#0145F2]">Global Presence</h3>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">Strategic footprint across 50+ countries, delivering high-grade steel and aluminium solutions globally.</p>
            </div>
            <div className="p-8 glass-card rounded-[40px] border border-[#0145F2]/10 bg-white">
                <h3 className="text-2xl font-black font-headline uppercase mb-4 text-[#0145F2]">Industrial Innovation</h3>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">Pioneering in energy recovery and zero-carbon manufacturing through extensive R&D.</p>
            </div>
        </div>
      </section>

      <WaveCanvas height={220} flip={true} intensity={1.2} />
    </div>
  )
}
