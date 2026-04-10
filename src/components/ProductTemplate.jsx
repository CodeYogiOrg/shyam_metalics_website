import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function ProductTemplate({ title, category, description, specs }) {
  return (
    <div className="relative pt-32 bg-surface">
      <section className="px-6 md:px-12 mb-24 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <span className="font-black font-headline text-[#0145F2] tracking-[0.3em] uppercase block mb-4 text-xs">{category}</span>
          <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-tight mb-8 text-on-surface uppercase">
            {title}
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-12">
            {description}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specs.map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-[#0145F2]/10 bg-white shadow-xl"
              >
                <div className="text-[10px] font-black uppercase tracking-widest text-[#0145F2] opacity-60 mb-2">{spec.label}</div>
                <div className="text-xl font-black font-headline text-on-surface">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.0} />

      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
                <h2 className="text-4xl font-headline font-black uppercase mb-6">Industrial Excellence</h2>
                <div className="h-1 w-20 bg-[#0145F2] mb-8"></div>
                <p className="text-on-surface-variant font-light leading-loose mb-8">
                    Our {title} is manufactured using state-of-the-art technology, ensuring world-class quality and performance for various industrial applications.
                </p>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="molten-gradient text-white px-10 py-4 font-black uppercase tracking-widest text-xs rounded-full shadow-2xl"
                >
                    Download brochure
                </motion.button>
            </div>
            <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden border border-[#0145F2]/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="w-full h-full bg-[#0145F2]/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-8xl text-[#0145F2]/20">precision_manufacturing</span>
                </div>
            </div>
        </div>
      </section>

      <WaveCanvas height={220} flip={true} intensity={1.2} />
    </div>
  )
}
