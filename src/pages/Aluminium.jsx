import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function Aluminium() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40" alt="Close-up of molten silver aluminium being cast in an industrial facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKChKoBVcb_G7lVhdJkHgA7x46iKk18C9-wrVG1NYJRJmkxVJoavYxRZtnFag2OPuV19aCqg8YJssoNo1RMJdZmsNCGjYRnNqCPrh3FsHd9XKTQ35S6MV1nGbLRnALuljKdYXEJGR2hYQKxKIBftKa2fCN4xdLTB2Q8xiUD9_ybGEric6t8ArtbQ4Havy9RJ1WLEMgNBhu2YzRnQDD0S7eiMiVnCTxbYpBi78c3mgliscS2JmNhoeemUCkXu83xHa7OPOkp__Add0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EDF1F5] via-[#EDF1F5]/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection delay={0.2}>
              <span className="font-label text-[#0145F2] tracking-[0.3em] uppercase text-sm mb-6 block">Industrial Excellence Refined</span>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <h1 className="font-headline text-7xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                THE PRECISION OF <br /><span className="text-gradient-molten">ALUMINIUM</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-10">
                Pioneering the future of light-weight manufacturing. From ultra-thin battery foils to heavy-duty industrial stocks.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.8}>
              <div className="flex gap-6">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 molten-gradient text-[#FFFFFF] font-bold rounded-lg flex items-center gap-3">
                  EXPLORE PORTFOLIO <span className="material-symbols-outlined">arrow_forward</span>
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 border border-outline-variant/30 font-bold hover:bg-surface-container-high transition-colors rounded-lg">TECHNICAL SPECS</motion.button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.0} />

      {/* Products */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1920px] mx-auto">
          <AnimatedSection>
            <h2 className="font-headline text-5xl font-black tracking-tighter uppercase mb-4">Core Portfolio</h2>
            <div className="h-1 w-24 bg-[#0145F2] mb-16"></div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full md:h-[800px]" staggerDelay={0.1}>
            <StaggerItem className="md:col-span-8">
              <motion.div whileHover={{ y: -5 }} className="group relative overflow-hidden rounded-xl bg-surface-container-high h-full">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Sleek commercial shot of premium kitchen aluminium foil roll" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbW0D5uK5jibIvXvX4ex44QYvWMmW6nBFm3JVtTPfRRLRul7gLPtA5idBrerf-3HZc9uRNNu7X1GAKpw3VjpI0RN8RBna2qy81b1hFNbb7Q1mWbLQ_xCp6hU5GyFfpK1meBUy8B6fFvZe2vudKnKWLAsAYEKfMv2We_caAqwbrj-_-cufN4k559Si9G6ORjlnA6qx43anb3zIVU51NdX6qmBIRgRlFQnIznw4alyic2MzJEm70eaxpSKnL_vYsAk4kG81kmS20-3o" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-12 w-full">
                  <span className="bg-[#0145F2] text-[#FFFFFF] text-[10px] font-black px-3 py-1 rounded-full mb-4 inline-block tracking-tighter uppercase">Flagship Brand</span>
                  <h3 className="text-4xl font-black tracking-tighter mb-4">SEL TIGER Kitchen Foil</h3>
                  <p className="text-on-surface-variant max-w-lg mb-6">Unmatched heat retention and durability for household and commercial culinary applications. 99% pure aluminium.</p>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4">
              <motion.div whileHover={{ y: -5 }} className="group relative overflow-hidden rounded-xl bg-surface-container-high h-full">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50" alt="Macro view of high-tech silver battery components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwzxHKkaBNstaxHdJj96R_ojVDk6pT1KKu0mGgCOuap9ehn3F2ZIHJBrkJxywQ82sWqUaYSvv2w2_a-dC3rqyfpNqyJOxFFTBVx_5TiXJgqxUFYVfj8Sf3NQfczrj7LP8YwwhuepBbkR-skiHr3giF5_BJW9LEzHGKlVrDR9j2lG2Ic6zYo0W8_qyEIg6j9Dadu9iyVobiGQGDp9d_mYblWCmVQVnZGs0Jm1_7qqKnSI4H6nDdiCj6fpHyp_VEWNo_VRzz_P-Q84g" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-2xl font-black tracking-tighter mb-2">Battery Foil</h3>
                  <p className="text-sm text-on-surface-variant mb-4">High-purity foil optimized for energy storage and EV battery cathodes.</p>
                  <span className="material-symbols-outlined text-[#0145F2] text-4xl">ev_station</span>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4">
              <motion.div whileHover={{ y: -5 }} className="group relative overflow-hidden rounded-xl bg-surface-container-high h-full">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50" alt="Industrial abstract of structured metal cooling fins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYFq_lkd3gmbGi7xeT0Zl9Sk2IkYYQvI4t6L01sSt1K8oE89_b9PsivJvWottcldj1oKk7Co39oT1a6_dN7nQ53V3QJZDA3Bx5rCEFCw-v889ep9QepQMruj_cfxq0jr8uJ5jIEQfFYZpjHTmrkW5QISl0Byu7CP793wzQ30Fk6Jvs27u_qzcFXYNUy-_8Bze8yEdRp76wlELu_qRPJaNQn4q837MIJeDODYDiPUF9KHCdN5FHtMOSEajm0pKoMRQyH5opGmM5gB4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-2xl font-black tracking-tighter mb-2">Fin Stock</h3>
                  <p className="text-sm text-on-surface-variant mb-4">Precision-engineered for heat exchangers and HVAC systems.</p>
                  <span className="material-symbols-outlined text-[#0145F2] text-4xl">ac_unit</span>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem className="md:col-span-8">
              <motion.div whileHover={{ y: -5 }} className="group relative overflow-hidden rounded-xl bg-surface-container-high h-full">
                <div className="absolute inset-0 metallic-overlay opacity-20"></div>
                <div className="relative p-12 h-full flex flex-col justify-end">
                  <h3 className="text-4xl font-black tracking-tighter mb-4">Pharma & Lidding</h3>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {['PTP Foil', 'Blister Packaging', 'Cold Form'].map((t) => (
                      <span key={t} className="px-4 py-2 bg-surface-container-highest border border-[#0145F2]/10 rounded-full font-label text-xs uppercase tracking-widest text-on-surface">{t}</span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant max-w-xl">Meeting stringent global healthcare standards for moisture barrier protection and chemical stability.</p>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <WaveCanvas height={200} flip={true} intensity={1.0} />

      {/* Technical */}
      <section className="py-32 px-6 md:px-12 overflow-hidden relative">
        <div className="max-w-[1920px] mx-auto grid md:grid-cols-2 gap-24 items-center">
          <AnimatedSection direction="left">
            <h2 className="font-headline text-5xl font-black tracking-tighter mb-8">ENGINEERED TO <br /><span className="text-[#0145F2]">MICRON PRECISION</span></h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-12">Our state-of-the-art rolling mills are equipped with Automatic Gauge Control (AGC) and Automatic Shape Control (ASC).</p>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-surface-container-high rounded-lg flex items-center justify-center text-[#0145F2]">
                  <span className="material-symbols-outlined">high_quality</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">99.9% Chemical Purity</h4>
                  <p className="text-on-surface-variant font-label text-sm">Strict alloy composition control via vacuum induction melting.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-surface-container-high rounded-lg flex items-center justify-center text-[#0145F2]">
                  <span className="material-symbols-outlined">precision_manufacturing</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Mirror Surface Finish</h4>
                  <p className="text-on-surface-variant font-label text-sm">Advanced grinding techniques for flawless roll surfaces.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="aspect-square bg-surface-container-high rounded-2xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="Industrial technician examining a shiny aluminium roll" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh-pbDhvBpvHI-U2RFZeXEiDKjlK5R3TT2WHp1lgKMlhnjc5FWGKFMZwhy_WPMw48aKIq_CxG0GV-jNrT3hitxjwg96fyAWFeZ8N9kxoNTEVjSlBmfDVbC7_6Y45lfV3zwp5gKQFj8j_yUlSre-KLzGTqVwv_6n3kM_PsDbZvO6C3DnnBEltTPodMO4y_J7X-glrInw6C0qZsAQ09s2Atr9C4oSsCcXudPLNgDRh1ud54RGWHNxHE19tXBF2MhC63AdYHi2z9xnoo" />
              </div>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-xl p-8 rounded-xl border border-[#0145F2]/20 max-w-[280px]">
                <div className="text-5xl font-black text-[#0145F2] mb-2">40k+</div>
                <div className="font-label text-xs uppercase tracking-widest">Tons Annual Capacity</div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <AnimatedSection>
          <div className="max-w-[1920px] mx-auto bg-gradient-to-br from-surface-container-high to-[#EDF1F5] p-16 rounded-3xl border border-[#0145F2]/10 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-headline text-5xl font-black tracking-tighter mb-6">PARTNER WITH THE <br />LEADER IN METALICS</h2>
              <p className="text-on-surface-variant mb-10 text-lg">Download our complete Aluminium portfolio and technical certifications.</p>
              <div className="flex flex-wrap gap-4">
                <motion.button whileHover={{ scale: 1.05, backgroundColor: '#0145F2', color: '#FFFFFF' }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white text-black font-bold uppercase tracking-tighter rounded transition-colors">Request a Quote</motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 border border-outline font-bold uppercase tracking-tighter rounded hover:bg-white/10 transition-colors">Download Brochure</motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
