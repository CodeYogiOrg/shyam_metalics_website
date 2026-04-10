import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function Sustainability() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40 grayscale" alt="high-tech industrial furnace with glowing molten steel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB0gmtPPr6dhVP3Au8WuQpOx4l8c7qUflEVYrn8JnQUChQ9tdPpLMC8gFa-iOl3Wfe0f-lpWDqt86KdQLEYo2s3Q1D0TZ1KVYkidu4web1XlB9aht4WWwk040NwxOMMIZO9-7Vve0GKr9LLAlWmHeFVr7P8X5f74NBWNZRRwhRKfODfkmno5u5tavol5Cu78FbyRlgqWcLIsQWzD3zUJRuSVAYT13PwXqCpELaYMvMUcRBJWG1oPS0IcTx1_NTe-OZRgUtz1T-a28" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EDF1F5] via-transparent to-[#EDF1F5]/80"></div>
          <div className="absolute inset-0 glow-overlay"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <AnimatedSection delay={0.2}>
            <p className="font-label text-[#0145F2] tracking-[0.3em] uppercase mb-6 text-sm">ESG Strategy 2024</p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-8">
              Forging a <br />
              <span className="text-gradient-molten">Sustainable Future.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#0145F2] text-[#FFFFFF] font-bold px-10 py-4 uppercase tracking-widest text-xs">View ESG Report</motion.button>
              <div className="flex items-center gap-3">
                <span className="w-12 h-[1px] bg-outline-variant"></span>
                <span className="font-label text-xs uppercase opacity-60">Building Resilient Value</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.0} />

      {/* Environmental Compliance */}
      <section className="relative py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl font-bold tracking-tight mb-6">Commitment to Green Steel</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">Transitioning our global operations to high-efficiency, low-carbon manufacturing.</p>
            </div>
            <div className="font-label text-9xl font-black opacity-5 leading-none">2030</div>
          </div>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <StaggerItem className="md:col-span-8">
            <div className="glass-panel p-12 relative overflow-hidden group rounded-xl h-full">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-[#0145F2] text-5xl mb-8">rebase_edit</span>
                <h3 className="text-3xl font-bold mb-4">100% Renewable Transition</h3>
                <p className="text-on-surface-variant max-w-md mb-8">By 2030, our goal is to power all manufacturing facilities using solar, wind, and captive hydro-power projects, cutting CO2 emissions by 65%.</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black text-[#0145F2]">100</span>
                  <span className="text-2xl font-bold text-[#0138C7] uppercase tracking-widest">Percent</span>
                </div>
              </div>
              <img className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" alt="aerial drone shot of massive solar panel farm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF5_gEOmsuN6d_UOuhm5AIeVoPt2hN3-ECvEpD-plYJkCnAHdGqOoJUevsuHw_ZJSiJhcu24dp-q7mRfTuCzSPI_Gs_5mGYPyjtQTtaVxFr210KEo0GSaXLStfWvDa4azl8MuK1i3LpOFpWEaYG7XN6yFTY4d22Ukk4GnObQWTdqY8lM9E-7HDd8980LUCvMEvAmKti9rJMZ4EV3UP9LuT3Akn5AN7FpXyjdnaTnz7S4sXzPv9K3wuTKvkCQJyFvQkE8ogiC-Vjcs" />
            </div>
          </StaggerItem>
          <StaggerItem className="md:col-span-4">
            <div className="bg-surface-container-high p-10 flex flex-col justify-between rounded-xl h-full">
              <div>
                <h4 className="font-label uppercase tracking-widest text-xs opacity-60 mb-12">Waste Recycling</h4>
                <div className="relative h-48 w-full flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-surface-container-highest" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-[#0145F2]" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="60" strokeWidth="8"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black">78%</span>
                    <span className="text-[10px] uppercase font-label">Circular</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant">Converting slag and industrial waste into high-grade construction materials.</p>
            </div>
          </StaggerItem>
          {[
            { icon: 'eco', title: 'Air Quality Control', desc: 'Advanced bag filtration systems and real-time monitoring ensuring zero-emission manufacturing loops.' },
            { icon: 'water_drop', title: 'Zero Liquid Discharge', desc: 'State-of-the-art ETP plants allowing for 100% water recycling within our industrial complexes.' },
            { icon: 'precision_manufacturing', title: 'Energy Recovery', desc: 'Capturing heat waste to generate electricity, reducing external dependency and carbon burn.' },
          ].map((item) => (
            <StaggerItem key={item.title} className="md:col-span-4">
              <div className="bg-surface-container-low p-8 border-l-2 border-[#0145F2] rounded-r-xl h-full">
                <span className="material-symbols-outlined text-[#0145F2] mb-6">{item.icon}</span>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-loose">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <WaveCanvas height={200} flip={true} intensity={1.0} />

      {/* Community */}
      <section className="bg-surface-container-lowest py-32 overflow-hidden">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-headline text-5xl font-extrabold tracking-tighter uppercase mb-8">Empowering <br />Growth Beyond Metal.</h2>
              <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">Our responsibility extends to the communities that surround our plants.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center shrink-0 group-hover:bg-[#0145F2] group-hover:text-[#FFFFFF] transition-all duration-300">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Knowledge Hubs</h5>
                    <p className="text-sm opacity-60">Supported 15,000+ students through technical training and school infrastructure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center shrink-0 group-hover:bg-[#0145F2] group-hover:text-[#FFFFFF] transition-all duration-300">
                    <span className="material-symbols-outlined">medical_services</span>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Mobile Health Clinics</h5>
                    <p className="text-sm opacity-60">Providing free healthcare access to remote villages.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-10 bg-[#0145F2]/10 blur-[120px] rounded-full"></div>
                <div className="relative aspect-square">
                  <img className="w-full h-full object-cover grayscale brightness-75 rounded-lg" alt="a group of diverse students in a high-tech classroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUmm0g3BjcZsmOoA0hsAdPPeRJhAMqlVnGMIRs2Q83idgqPHoIJHUV3y9eTFLHCH7WhoW_olWlIwf3FUx8gTZJLVdliOkGAzCy4CrblZ-7XESQY_D0eqq8eUcgiUqgenpUtutqqe-PmgevHZMpppUWiKnGH4bv7z2GLwbnYfA4ugnWfevRODT30U_BsN1m_WMZazWWGJKvHhQjuBuSdRAeRd7CkbDuZe2uOUebIWbuPNEH0PJqA01ewJNq1OLoI-Xi1ik2Bkpf6M8" />
                  <div className="absolute bottom-8 left-8 glass-panel p-6 max-w-xs rounded-xl">
                    <p className="text-xs font-label uppercase tracking-widest mb-2 opacity-60">Current Impact</p>
                    <p className="text-2xl font-black">200K+ Lives Impacted Yearly</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <WaveCanvas height={200} flip={false} intensity={0.8} />

      {/* CTA */}
      <section className="py-20 bg-[#0145F2]/10 border-y border-[#0145F2]/10">
        <AnimatedSection>
          <div className="px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <h3 className="text-4xl font-black tracking-tighter uppercase mb-2">Lead the change.</h3>
              <p className="font-label uppercase tracking-[0.2em] text-xs opacity-60">Partner with us for a zero-carbon future.</p>
            </div>
            <motion.button whileHover={{ scale: 1.05, backgroundColor: '#0145F2', color: '#FFFFFF' }} whileTap={{ scale: 0.95 }} className="bg-zinc-100 text-zinc-950 font-bold px-12 py-5 uppercase tracking-widest text-sm transition-colors">Download Roadmap 2030</motion.button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
