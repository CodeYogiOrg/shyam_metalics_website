import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { WaveSection } from '../components/WaveDivider'

export default function Manufacturing() {
  return (
    <>
      {/* Hero */}
      <WaveSection waves={4} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40 brightness-50" alt="Cinematic wide shot of a massive steel integrated manufacturing plant at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Lg6ckUxU2_Hu32zEdZZJ19jevSQONZfm3NME7d-xwzpG_6GZ_6gS1zE4hRq4F7_QLCJvQjcl3qTOdJO29PyemY7-UGli3PSUuQc4TrVGcYFTSFoeQGoQBJR3WgnVS75sJ7QpORj3n5F2Hie2YbMyFhUnIQosepvDVtd23BHwbE60LoDejudMmkcYssUGsfDh-pU0HrsubBIrgWi41Aq8ej06TYSz_V-8zzzf3WGT4Hgng6h3FAHFiig3GO6VUg6_DOE7H5g2ceM" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#222022] via-[#222022]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-12 max-w-[1920px] mx-auto w-full grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <AnimatedSection delay={0.2}>
              <span className="font-label text-[#C3D809] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Strategic Infrastructure</span>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <h1 className="text-7xl md:text-9xl font-black font-headline tracking-tighter leading-none mb-8">
                INDUSTRIAL<br />
                <span className="metallic-gradient bg-clip-text text-transparent">EPICENTERS</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <p className="text-lg md:text-xl text-on-surface/70 max-w-2xl leading-relaxed font-body">
                Our integrated manufacturing facilities are the heart of our operations, combining raw power with precision engineering across Jamuria, Sambalpur, and Mangalpur.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.8} className="col-span-12 lg:col-span-4 flex flex-col justify-end">
            <div className="glass-card p-8 rounded-xl border-l-4 border-[#C3D809]">
              <div className="text-5xl font-black font-headline mb-1 tracking-tighter">13.0 MTPA</div>
              <p className="font-label text-on-surface-variant text-sm uppercase tracking-widest">Aggregate Capacity</p>
            </div>
          </AnimatedSection>
        </div>
      </WaveSection>

      {/* Precision Machine */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest relative overflow-hidden">
        <div className="foundry-glow absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"></div>
        <div className="max-w-[1920px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <h2 className="text-5xl font-black font-headline tracking-tighter mb-4">THE PRECISION MACHINE</h2>
                <p className="text-on-surface-variant max-w-xl font-body">Advanced automation and vertically integrated supply chains defining the next generation of metallurgy.</p>
              </div>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem className="md:col-span-2">
              <div className="relative h-[500px] overflow-hidden group">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="3D technical blueprint overlay on a high-speed steel rolling mill" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1CMtvsOYuufTPLvBiRo1p6c49FHGLeJnK-5yWa2hJlkWZg3yySVJccpj3xJ9STP_qgwABJUt2bVleBW-PZ2pU8i4NA8YA9nz053QcbmjLpbhtA3pJJZLgV5B2dtEWllV6Oaq-9Q1px-LRRY_NxGA-Kw8w-CM7sycRAM_NurRvlv80IYA2IWTx5m3-qrNl6xJ-YOYL-aEbTN80m4IDdLJb2VsQxXieudUgKWoarmDoBc39vPHEoz7YWYm1d5wQFbA8V0gOSKzGhV8" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-3xl font-black font-headline mb-2">Automated Rolling Mills</h3>
                  <span className="inline-flex items-center gap-2 bg-[#C3D809]/20 backdrop-blur-md px-4 py-2 rounded-full border border-[#C3D809]/30">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>settings_suggest</span>
                    <span className="font-label text-xs font-bold uppercase tracking-widest">Smart Control Systems</span>
                  </span>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-6 h-full flex flex-col">
                <div className="bg-surface-container-high p-8 flex-1 flex flex-col justify-between group hover:bg-surface-bright transition-colors">
                  <span className="material-symbols-outlined text-[#C3D809] text-4xl">precision_manufacturing</span>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-2">Technical Core</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Proprietary DRI technology ensuring 99.9% consistency in raw material grade.</p>
                  </div>
                </div>
                <div className="bg-surface-container-high p-8 flex-1 flex flex-col justify-between group hover:bg-surface-bright transition-colors">
                  <span className="material-symbols-outlined text-[#C3D809] text-4xl">hub</span>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-2">Network Integration</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Direct railway sidings at all locations reducing logistical latency by 30%.</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Flagship Units */}
      <WaveSection waves={3} className="py-32 bg-surface">
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto mb-16">
          <AnimatedSection>
            <h2 className="text-5xl font-black font-headline tracking-tighter mb-4">OUR FLAGSHIP UNITS</h2>
            <div className="w-24 h-1 bg-[#C3D809]"></div>
          </AnimatedSection>
        </div>
        {/* Jamuria */}
        <AnimatedSection className="mb-32">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/2 relative min-h-[600px]">
              <img className="absolute inset-0 w-full h-full object-cover" alt="Industrial aerial view of Jamuria steel plant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABChsuQoZ8aRK-1B0o3MTLBKv9DRMSuZ-ffwHmmJlNI6uTJS7BC59GucrtE1rXnRu0PCrD8rcMHV9HKDRWnapEb1qc5BVZaNOZJUmn3KMSNeCG99lotu2Ds7aoGC8howqIREW55GOJPasH5xzkot7Rio8JKUh-OyqPavLCJENRq4GLkoxTxwN3ZMiaOD5byqzN5Zmb_52f9Fy3ekYLvvVLu8uMUo16viukNYBWbwUZB5IYPfllBOuoGvtpYaFgHBkBiV90xmLtQeA" />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-12 left-12">
                <span className="bg-[#1a181a] text-zinc-100 px-6 py-2 font-label text-xs font-black tracking-[0.2em] uppercase">WEST BENGAL</span>
              </div>
            </div>
            <div className="lg:w-1/2 bg-surface-container p-12 md:p-24 flex flex-col justify-center">
              <h3 className="text-6xl font-black font-headline tracking-tighter mb-6">JAMURIA</h3>
              <p className="text-on-surface-variant mb-12 max-w-lg leading-relaxed">Our largest integrated steel plant, housing modern captive power plants and massive EAF steel melting shops.</p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="border-l border-outline-variant/30 pl-6">
                  <div className="text-2xl font-bold font-headline text-[#C3D809]">1,100 Acres</div>
                  <div className="font-label text-xs uppercase tracking-widest text-on-surface/50">Total Area</div>
                </div>
                <div className="border-l border-outline-variant/30 pl-6">
                  <div className="text-2xl font-bold font-headline text-[#C3D809]">ISO 14001</div>
                  <div className="font-label text-xs uppercase tracking-widest text-on-surface/50">Certification</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        {/* Sambalpur */}
        <AnimatedSection className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-stretch">
            <div className="lg:w-1/2 relative min-h-[600px]">
              <img className="absolute inset-0 w-full h-full object-cover" alt="Interior of Sambalpur ferro alloy plant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4IuybSgJMnBV-wQIjTj6jwtDTsUwW1-WRzolEcP4peRXcY4bXC8sX-YyRdr7jrn9Cb-fvl5gEaGMMuncJQ0bCITNX9x3FuTqITYTbU44nE5OEq_kM0SZjls5QssC24EOcwj8rxef4hNP37uMy6O70FVWZFMoB0F0uUsK6DTaqRMAIuu1pAMAfJfETH8eLHJMck1FwoT9_U1ZEZn0UCWGE9cNnzpFg1L2rJRo5Y5m6yfj2ioUGs9QgMYrB1LMMZUcqwvbn0gB4DMs" />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-12 right-12">
                <span className="bg-[#1a181a] text-zinc-100 px-6 py-2 font-label text-xs font-black tracking-[0.2em] uppercase">ODISHA</span>
              </div>
            </div>
            <div className="lg:w-1/2 bg-surface-container-high p-12 md:p-24 flex flex-col justify-center">
              <h3 className="text-6xl font-black font-headline tracking-tighter mb-6">SAMBALPUR</h3>
              <p className="text-on-surface-variant mb-12 max-w-lg leading-relaxed">Strategic hub for Ferro Alloys and high-grade Billets. This unit powers our export operations.</p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="border-l border-outline-variant/30 pl-6">
                  <div className="text-2xl font-bold font-headline text-[#C3D809]">Captive Power</div>
                  <div className="font-label text-xs uppercase tracking-widest text-on-surface/50">Sustainability</div>
                </div>
                <div className="border-l border-outline-variant/30 pl-6">
                  <div className="text-2xl font-bold font-headline text-[#C3D809]">TMT & Wire</div>
                  <div className="font-label text-xs uppercase tracking-widest text-on-surface/50">Core Production</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </WaveSection>

      {/* Spec Grid */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-lowest">
        <AnimatedSection>
          <div className="max-w-[1920px] mx-auto text-center mb-16">
            <h2 className="text-3xl font-black font-headline mb-2 uppercase tracking-tighter">Unified Operations Data</h2>
            <p className="font-label text-on-surface-variant text-sm tracking-[0.3em]">MANGALPUR & SATELLITE UNITS</p>
          </div>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1920px] mx-auto">
          {[
            { label: 'MANGALPUR', title: 'Pellet Plant', desc: 'High-efficiency beneficiation and pelletizing unit for premium output.' },
            { label: 'PAKIGRAM', title: 'Logistics Hub', desc: 'Automated storage and rapid dispatch center for regional supply.' },
            { label: 'RENEWABLES', title: 'Solar Farm', desc: '25MW solar installation reducing carbon footprint across units.' },
            { label: 'R&D CORE', title: 'QA Labs', desc: 'Spectroscopy and physical testing for zero-defect production.' },
          ].map((item) => (
            <StaggerItem key={item.label}>
              <motion.div whileHover={{ y: -5, borderColor: 'rgba(195,216,9,0.5)' }} className="glass-card p-10 border-t border-[#C3D809]/20 transition-all h-full">
                <h4 className="font-label text-xs text-[#C3D809] font-bold tracking-widest mb-4">{item.label}</h4>
                <div className="text-3xl font-bold font-headline mb-2">{item.title}</div>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  )
}
