import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function Accreditations() {
  const awards = [
    { title: 'Best Integrated Steel Plant', year: '2023', org: 'National Business Council' },
    { title: 'ESG Excellence Award', year: '2023', org: 'Global Sustainability Forum' },
    { title: 'Safety First Industrial Diamond', year: '2022', org: 'Standardization Body' },
    { title: 'Export House Excellence', year: '2022', org: 'Ministry of Commerce' },
  ]

  return (
    <div className="relative pt-32 bg-surface">
      <section className="px-6 md:px-12 mb-24 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <span className="font-black font-headline text-[#0145F2] tracking-[0.3em] uppercase block mb-4 text-xs font-black text-[#0145F2]/60">Recognition & Excellence</span>
          <h1 className="text-7xl md:text-9xl font-headline font-black tracking-tighter leading-[0.85] mb-8 text-on-surface uppercase font-black">
            AWARDS & <br /><span className="text-[#0145F2] italic">ACCOLADES.</span>
          </h1>
        </AnimatedSection>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.0} />

      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                    <div className="p-10 glass-card rounded-[40px] border border-[#0145F2]/10 bg-white h-full flex flex-col justify-between hover:border-[#0145F2]/40 transition-all duration-500 overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#0145F2]/5 rounded-bl-[80px] flex items-center justify-center translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                             <span className="material-symbols-outlined text-[#0145F2] text-4xl">emoji_events</span>
                        </div>
                        <div>
                             <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0145F2] mb-6">{award.year}</h4>
                             <h3 className="text-2xl font-black font-headline uppercase mb-4">{award.title}</h3>
                        </div>
                        <p className="text-sm font-bold text-on-surface-variant/60 uppercase tracking-widest">{award.org}</p>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </section>

      <WaveCanvas height={220} flip={true} intensity={1.2} />
    </div>
  )
}
