import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function InvestorPortal({ title, description, categories }) {
  return (
    <div className="relative pt-32 bg-surface">
      <section className="px-6 md:px-12 mb-24 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <span className="font-black font-headline text-[#0145F2] tracking-[0.3em] uppercase block mb-4 text-xs">Investor Relations</span>
          <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-[0.85] mb-8 text-on-surface uppercase">
            {title}
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            {description}
          </p>
        </AnimatedSection>
      </section>

      <div className="h-2 w-full bg-[#0145F2]/10 mb-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-[#0145F2]"
          initial={{ width: 0 }}
          whileInView={{ width: '30%' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

      <section className="py-20 px-6 md:px-12 bg-white border-y border-[#0145F2]/10">
        <div className="max-w-[1440px] mx-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
               <h2 className="text-3xl font-black font-headline uppercase mb-10 text-[#0145F2] border-l-4 border-[#0145F2] pl-6">{cat.name}</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {cat.links.map((link, i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ x: 5 }}
                     className="p-6 rounded-2xl border border-zinc-100 hover:border-[#0145F2]/30 hover:bg-[#0145F2]/5 transition-all group cursor-pointer flex justify-between items-center"
                   >
                     <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-zinc-800 mb-1 group-hover:text-[#0145F2] transition-colors">{link.label}</h4>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Document (PDF)</p>
                     </div>
                     <span className="material-symbols-outlined text-[#0145F2] opacity-0 group-hover:opacity-100 transition-opacity">download</span>
                   </motion.div>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </section>

      <WaveCanvas height={220} flip={true} intensity={1.2} />
    </div>
  )
}
