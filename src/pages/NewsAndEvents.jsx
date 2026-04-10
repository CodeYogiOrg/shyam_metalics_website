import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function NewsAndEvents() {
  const newsItems = [
    { title: 'International Women\'s Day at Jamuria Plant', date: '8th March 2026', category: 'Events', desc: 'A celebration of dedication, resilience, and the vital role of women in driving progress across the organization.' },
    { title: 'Head Office Tribute to Women Excellence', date: '8th March 2026', category: 'Events', desc: 'Heartfelt tribute to achievements and the invaluable role women play in shaping our organization.' },
    { title: 'ICC Centenary Session with Kumar Mangalam Birla', date: '4th March 2026', category: 'News', desc: 'An impactful evening discussing visionary leadership and transformative contributions to industry.' },
  ]

  return (
    <div className="relative pt-32 pb-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="mb-20">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-[#0145F2] mb-4 block">Corporate Voice</span>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 text-on-surface uppercase">
              NEWS & <br /> <span className="text-[#0145F2]">EVENTS.</span>
            </h1>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card hover-glow p-10 rounded-[32px] border border-[#0145F2]/10 h-full flex flex-col justify-between bg-white/50 backdrop-blur shadow-xl hover:border-[#0145F2]/40 transition-all group cursor-pointer">
                <div>
                   <div className="flex justify-between items-start mb-8">
                     <span className="px-3 py-1 rounded-full bg-[#0145F2]/10 text-[#0145F2] text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                     <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{item.date}</span>
                   </div>
                   <h3 className="text-2xl font-black font-headline text-on-surface uppercase mb-6 leading-tight group-hover:text-[#0145F2] transition-colors">{item.title}</h3>
                   <p className="text-on-surface-variant font-light leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="pt-6 border-t border-[#0145F2]/10 flex items-center justify-between">
                  <span className="font-black font-headline text-[10px] uppercase tracking-[0.2em] text-[#0145F2]">Read Full Story</span>
                  <span className="material-symbols-outlined text-[#0145F2] group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <WaveCanvas height={220} flip={true} intensity={1.2} />
    </div>
  )
}
