import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { WaveSection } from '../components/WaveDivider'

export default function StainlessSteel() {
  return (
    <div className="bg-mesh">
      {/* Hero */}
      <WaveSection waves={4} className="relative h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="dramatic close-up of molten stainless steel flowing" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtdI96k9Q0YwDiwlbdr3zUxW6kWMLdD7inpUCzN-1aE5QyB29W-CLnHddKfO8lLx-QligQEl-S8PTgakHCJ0iC9Ys45LOCjoC-MHIOPTynBKjTvNa0Rt2oUnbf0mh6KOqpp37vvV8uVShtm33mHkUvYV6C3M3qWU0QlVl-H2IfbiIsZVOYFVvJUk1JY7nNGJXQ_NffsgMNvN0o9pl-S0IEDBuGzurZ3gHW1c7NbRNaZ5NuW4TdDNEWueO9sGqTBsmgWEtSvWYmuhk" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#222022] via-[#222022]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl">
          <AnimatedSection delay={0.2}>
            <span className="font-label text-[#C3D809] tracking-[0.3em] uppercase text-xs mb-4 block">Industrial Excellence</span>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <h1 className="font-headline text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter text-zinc-100 mb-8">
              STAINLESS <br /> <span className="text-[#C3D809] text-glow">REDEFINED.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <p className="max-w-xl text-lg text-on-surface-variant leading-relaxed">
              Forging the backbone of global infrastructure. Shyam Metalics delivers world-class Stainless Steel solutions.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.8}>
            <div className="mt-12 flex space-x-6">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="molten-gradient text-[#1a1c00] px-8 py-4 rounded-md font-bold tracking-tight">View Product Range</motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-outline-variant/30 px-8 py-4 rounded-md font-bold tracking-tight hover:bg-surface-container-high transition-colors">Technical Specs</motion.button>
            </div>
          </AnimatedSection>
        </div>
      </WaveSection>

      {/* Product Grid */}
      <section className="px-6 md:px-12 py-32 bg-surface-container-lowest">
        <div className="max-w-[1920px] mx-auto">
          <AnimatedSection>
            <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-100 mb-4 uppercase">The Core Portfolio</h2>
            <div className="h-1 w-24 bg-[#C3D809] mb-16"></div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6" staggerDelay={0.1}>
            <StaggerItem className="md:col-span-8">
              <motion.div whileHover={{ y: -5 }} className="group relative overflow-hidden bg-surface-container-high rounded-xl h-[500px]">
                <img alt="neatly stacked rectangular stainless steel billets" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm0VAscy7ObV-lWyqGbz_coTNKN4hKEWSYYq0AEYjlIfea9ocjE7BBBGPEFAfpF2M_EVAEXMRHzE89F4UfX_S-o9pGhhe4ZG-Wluh_Atlr-AdI1y_qZ40_1cQr8BOCUHgDjuYUfeHyAXVhVxhRTPvCI9LWw-_V4jg77eVqVUATPBuEFXOql2ZPO-AjqummpyEqgCHlQFYqWpjkohwwFpqSUuanF5h_rkJ4rAdtYnGIH4BIPq7S4x-CKSIZOGTTV12l-QEtHvjCjM4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <span className="font-label text-[#C3D809] text-xs tracking-widest uppercase mb-2">Primary Casting</span>
                  <h3 className="text-4xl font-black text-white tracking-tighter mb-4">STAINLESS STEEL BILLETS</h3>
                  <p className="max-w-md text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">The foundation of quality. Our billets offer uniform grain structure and superior surface finish.</p>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4">
              <motion.div whileHover={{ y: -5 }} className="group relative overflow-hidden bg-surface-variant/40 backdrop-blur-md rounded-xl h-[500px]">
                <img alt="close up of twisted stainless steel rebar textures" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANMhTBjJAYDY-kiKehmYhNxtOPAf692zc05MiEMkgAtAfoOAMn_227vgTJ_wUp-gTMz7eK5DBkyugju-wEAFyuIEPHQmwIoRyaz9YvZD4dcsy2jiQaQI3c5hByqSuepbbmuplllWqfrLcQi1GLh1LS9MInHip0mCIviX85DAvSoa1VOQlvna7pX--bbsh0zdh9idTcyDYBu6R5njhN-urSkT8DTflOhWGV0Iqt13VD-8aHdwpetfPaOZ9JGwl9q5JD9xaGudi9FzA" />
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div className="w-12 h-12 bg-[#C3D809]/10 rounded-full flex items-center justify-center border border-[#C3D809]/20">
                    <span className="material-symbols-outlined text-[#C3D809]">architecture</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white tracking-tighter mb-2">REBAR</h3>
                    <p className="text-zinc-400 text-sm uppercase tracking-widest">Structural Reinforcement</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
            {[
              { title: 'HOT ROLLED BARS', desc: 'Industrial grade durability for heavy machinery.' },
              { title: 'BRIGHT BARS', desc: 'Precision machined with high-gloss chrome finish.' },
              { title: 'WIRES', desc: 'Fine-drawn precision for specialized manufacturing.' },
            ].map((p) => (
              <StaggerItem key={p.title} className="md:col-span-4">
                <motion.div whileHover={{ y: -5, borderColor: 'rgba(195,216,9,0.3)' }} className="group relative overflow-hidden bg-surface-container-high rounded-xl h-[400px]">
                  <div className="relative p-10 h-full flex flex-col justify-end border border-white/5 rounded-xl">
                    <h3 className="text-2xl font-black text-white tracking-tighter mb-2">{p.title}</h3>
                    <p className="text-zinc-500 text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <WaveSection waves={3} className="px-6 md:px-12 py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C3D809]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <StaggerContainer className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12" staggerDelay={0.15}>
          <StaggerItem>
            <div className="bg-surface-variant/20 backdrop-blur-xl p-12 rounded-xl border border-white/5 h-full">
              <span className="font-label text-[#C3D809]/30 text-[4rem] font-black leading-none">01</span>
              <h4 className="text-2xl font-bold mt-4 mb-6">Unrivaled Precision</h4>
              <p className="text-on-surface-variant leading-relaxed">Our advanced vacuum oxygen decarburization (VOD) process ensures chemical purity and metallurgical consistency.</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-surface-variant/40 backdrop-blur-xl p-12 rounded-xl border border-[#C3D809]/20 scale-105 shadow-2xl h-full">
              <span className="font-label text-[#C3D809]/50 text-[4rem] font-black leading-none">02</span>
              <h4 className="text-2xl font-bold mt-4 mb-6">Corrosion Defense</h4>
              <p className="text-on-surface-variant leading-relaxed">Engineered with optimized chromium and nickel content to resist the harshest environments.</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-surface-variant/20 backdrop-blur-xl p-12 rounded-xl border border-white/5 h-full">
              <span className="font-label text-[#C3D809]/30 text-[4rem] font-black leading-none">03</span>
              <h4 className="text-2xl font-bold mt-4 mb-6">Global Standards</h4>
              <p className="text-on-surface-variant leading-relaxed">Compliant with ASTM, DIN, and JIS specifications for the most demanding requirements.</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </WaveSection>

      {/* CTA */}
      <section className="py-40 bg-[#1a181a] text-center relative overflow-hidden">
        <div className="relative z-10 px-6">
          <AnimatedSection>
            <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-10 text-zinc-100 uppercase">
              Partner with the <br /> <span className="text-[#C3D809] text-glow">Future of Steel.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <motion.button whileHover={{ scale: 1.05, backgroundColor: '#C3D809', color: '#1a1c00' }} whileTap={{ scale: 0.95 }} className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm transition-colors">Inquire Now</motion.button>
              <motion.button whileHover={{ scale: 1.05, borderColor: '#C3D809' }} whileTap={{ scale: 0.95 }} className="px-10 py-5 border border-zinc-700 text-white font-black uppercase tracking-widest text-sm transition-colors">Catalog 2024</motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
