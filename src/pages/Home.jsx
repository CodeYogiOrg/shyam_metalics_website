import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem, FloatingElement } from '../components/AnimatedSection'
import { WaveSection } from '../components/WaveDivider'
import WaveDivider from '../components/WaveDivider'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <WaveSection waves={4} className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#C3D809]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#C3D809]/5 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 industrial-mesh opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <AnimatedSection delay={0.2}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high border border-[#C3D809]/20">
                  <span className="w-2 h-2 rounded-full bg-[#C3D809] animate-pulse mr-2"></span>
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Global Leader in Metal</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <h1 className="text-6xl md:text-8xl font-black font-headline leading-[0.9] tracking-tighter text-on-surface">
                  SHAPING THE <br /> <span className="text-transparent bg-clip-text molten-gradient">FUTURE</span> OF METAL
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.6}>
                <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-xl leading-relaxed">
                  A billion-dollar conglomerate redefining industrial excellence through precision engineering and sustainable manufacturing.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.8}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/iron-and-steel" className="inline-block molten-gradient text-[#1a1c00] font-bold px-8 py-4 rounded-md shadow-[0_0_30px_rgba(195,216,9,0.3)] uppercase tracking-tight hover:shadow-[0_0_50px_rgba(195,216,9,0.5)] transition-shadow duration-300">
                      EXPLORE PRODUCTS
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/leadership" className="inline-block bg-surface-container-high border border-outline-variant/20 text-on-surface font-bold px-8 py-4 rounded-md hover:bg-surface-container-highest transition-all duration-300 uppercase tracking-tight">
                      OUR LEGACY
                    </Link>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
            <FloatingElement className="relative hidden lg:block" amplitude={15} duration={4}>
              <div className="absolute -inset-10 bg-[#C3D809]/10 rounded-full blur-[80px] animate-pulse"></div>
              <img alt="A stylized 3D chrome industrial sculpture with sharp geometric edges reflecting blue and purple neon light in a dark void" className="relative z-10 w-full h-auto drop-shadow-[0_0_50px_rgba(195,216,9,0.2)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbZcb7kLTJ2iJb_RGNxR6SEFozsvCZY7OBgCLAmXRb0ZpriuVNFe_GCl6SOOKE9hIGymvm3E7s7Msbwl6USjgq1WskNlDnhe5wJxtkuUqIYMO5rtECZxvBv6N4lLpafQS_nIIa_Y0sl6LHS-WsKloaEVec_APQwJX9QsquSBp8jKdU-DMncSfi7AYBqUK7aP4ztHXi6yF6b24z3w1D9HSu9R1vA1J6nYXRYXEZL8KIVdWOjeynis4XtaXVjQ8UT-eBkOZxrXKPKvc" />
            </FloatingElement>
          </div>
        </div>
      </WaveSection>

      {/* Stats */}
      <section className="py-24 bg-surface-container-lowest border-y border-[#C3D809]/10">
        <div className="container mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center" staggerDelay={0.15}>
            <StaggerItem>
              <div className="group">
                <motion.div whileHover={{ scale: 1.1 }} className="text-5xl md:text-7xl font-black font-headline text-on-surface group-hover:text-[#C3D809] transition-colors duration-500 mb-2">12,000+</motion.div>
                <div className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant font-semibold">Workforce strength</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group">
                <motion.div whileHover={{ scale: 1.1 }} className="text-5xl md:text-7xl font-black font-headline text-on-surface group-hover:text-[#C3D809] transition-colors duration-500 mb-2">40+</motion.div>
                <div className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant font-semibold">Countries Exported</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group">
                <motion.div whileHover={{ scale: 1.1 }} className="text-5xl md:text-7xl font-black font-headline text-on-surface group-hover:text-[#C3D809] transition-colors duration-500 mb-2">13.5 MTPA</motion.div>
                <div className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant font-semibold">Aggregated Capacity</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Core Materials */}
      <WaveSection waves={3} className="py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tighter mb-4">THE CORE MATERIALS</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">Precision-engineered alloys and metals serving as the backbone for global infrastructure and technological advancement.</p>
              </div>
              <Link className="font-label text-sm uppercase font-bold tracking-widest text-[#C3D809] hover:text-[#e8f5a0] transition-colors flex items-center gap-2" to="/iron-and-steel">
                View Product Catalog <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4" staggerDelay={0.1}>
            <StaggerItem className="md:col-span-2">
              <motion.div whileHover={{ y: -8 }} className="group relative overflow-hidden glass-card p-1 rounded-xl h-[400px]">
                <div className="absolute inset-0 bg-neutral-900/40"></div>
                <img alt="Abstract close-up of heavy steel beams and structural frames with a cool blue industrial tint and sharp lighting" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCl9R44rfHIHq8K5SIe_ty3uiSRlvdN5uSxb2Ufk1sYugyv7-iFWe25jv3ek3dpb6Ey9kSky93ZfIwnShyIxbqbHusM3dU4-Ho9yt4Tt00OVvP0fT2FiwNykNAlxWQL2zLcBK8shgN0Ju_c5vuUG-KC2wZ0Vkl3pw4A6JNIV6wU3eE63_c_L8sc9rs3y3TbzGBaDiZ7mDVN5RcXn0QfPHxYbrRppF9fHcL0hxpBHXFH4K99O-rhGcRX9L1Sx7BJKWp8574800AcAI" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="font-label text-xs uppercase tracking-widest text-[#C3D809] mb-2">Heavy Industry</span>
                  <h3 className="text-3xl font-black font-headline uppercase mb-4">Iron & Steel</h3>
                  <p className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm max-w-xs">High-grade structural steel and premium TMT bars for iconic global landmarks.</p>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ y: -8 }} className="group relative overflow-hidden glass-card p-1 rounded-xl h-[400px]">
                <div className="absolute inset-0 bg-neutral-900/40"></div>
                <img alt="Polished stainless steel sheets reflecting futuristic laboratory lighting with a smooth mirror finish" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaIqiYEpbLnv1KHdl0b7JYm4PpwhXIfUmzKrWk5kVSo3tmGqjbpxGdw8_rsDjc_J6Z06QU5BsOOncg35ir4hMCwm7iw6uUm_IjAkkaOAcQgOLHy0O_8zheeMADAcvl-iazHDxrlf7EcyszlWN1Bhd_9-hRN9mHcDdhZGmEurmoWvqExpGeX8ZVQhxcYv0JO2nYi4ptxRyK8XOJYooOdpN6Y0zNEv2mmj_t6mSmImzOeYHuNmUMnRzhqTXelllQ2wL_95rmHoJICdc" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="font-label text-xs uppercase tracking-widest text-[#C3D809] mb-2">Refined Tech</span>
                  <h3 className="text-2xl font-black font-headline uppercase mb-4">Stainless Steel</h3>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ y: -8 }} className="group relative overflow-hidden glass-card p-1 rounded-xl h-[400px]">
                <div className="absolute inset-0 bg-neutral-900/40"></div>
                <img alt="Glistening textured aluminium foil rolls with sharp highlights and deep dark shadows in a factory setting" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJdfcIs9WnhlhelFAx25F8vknLBy-bzQ-ktHfs4101X0F0rGokDDqJ_6yLlTr8OUBriehLjUXYB3DdLx-K6AH5GCbbWD3Am17lbIckdJ9EMwgXwt8sQnQi08jFa60c8FKmqXDvWBVN_2cdrk56Id6RyyCJ36q5yxc6taiiuL5NUshUEbKd-sOIFErSS90eKUhV9QyfTmOLlwjE8xonLlWeTTKJlgiOna0WSEfLx1EsJElTOOQRUuzfBlHtYqJVa7EfWGbtWdHW1FY" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="font-label text-xs uppercase tracking-widest text-[#C3D809] mb-2">Packaging</span>
                  <h3 className="text-2xl font-black font-headline uppercase mb-4">Aluminium Foil</h3>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4">
              <motion.div whileHover={{ y: -5 }} className="group relative overflow-hidden glass-card p-1 rounded-xl h-[300px]">
                <div className="absolute inset-0 bg-neutral-900/20"></div>
                <img alt="Raw molten ferro alloy being poured into a mold, creating bright orange sparks against a dark industrial floor" className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Dh1KnCNag5sHZDRJbdO0ohbxAjBsh82qnV-YUwhuauay7AfN8DdpuG-eLV9GcBL7DtCcX4lupdiU3JkjGpS9VYvyM6_Grt3q3j5bhgx9ujdaL4tV8FZWVZuzbFilqJ7eRet2Te-BV8C-EjD--f82yCf3T0K4w1W57ADrLEaNd9XXc7Q1miX4lLA8oC0j-Cd1U4DwQR7DZP6viUMVegGTdlFp6Flb2cz9yoMypqawFxkSVjY6par_EZVsUc7lV1LFoytBgY9KGmc" />
                <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                  <h3 className="text-4xl font-black font-headline uppercase mb-2">Ferro Alloys</h3>
                  <p className="text-on-surface-variant max-w-lg">The secret behind the strength of modern alloys, crafted with uncompromised precision in our high-capacity foundries.</p>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </WaveSection>

      {/* Industrial Intelligence */}
      <section className="relative py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <motion.img whileHover={{ scale: 1.05, filter: 'grayscale(0)' }} alt="Wide shot of a massive industrial manufacturing plant with smokestacks and steel structures at dusk under a dark blue sky" className="rounded-xl grayscale transition-all duration-700 w-full h-64 object-cover shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0HKAlCTt7gH3Y4o7ojVnrQsJOBQ7Ht-M1seZLdNko8uf5qvPuAdgyTZK3-rfd04OlbdKPw141e45nJ8gJ89BlARLhWtmRKGDtUAkai_0FU_u_ITnEGY5350Ba8-RQJ5hUiTyo_Vo-xNrjcunqDlqkaeCKeUgK5n3DfLnLNlF-X8pj8zEfv8Pso_o7xpU93GlVLTp547j-lmy1Jt06GU_uk1JdOpKmXLE-iH-kBKbGw_rdwZsPE1BL8jEN3ZKajrviq5B6YZf80k8" />
                <motion.img whileHover={{ scale: 1.05, filter: 'grayscale(0)' }} alt="Close up of high-tech automated machinery in a steel factory with glowing control panels and robotic arms" className="rounded-xl translate-y-8 grayscale transition-all duration-700 w-full h-64 object-cover shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9e_kLuSwHS_Ho2x21aBndBrgqZw3YbRefNjomnWN6lg70lJHOYUTCRTgnpZCh2bkowDnHCPzgSsw83inCyQ_FkdsOcLk9CDEIDLl1UMnfRA-9zM0Uny1MAFdURFbTX8NQKI3KvaNJnK73d9FP0nFjBS5z7Q6t8qOm21qsE5FlbkvYYt_sXnys7PZZEGdhfXotqAHYJsjX6-wjASjSG0eoE2Bvqujv04Kcj62FuA8xIvD5eQ2fOHl3jwmN0CHbT1exdr7NVLPW68k" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tighter leading-none">Industrial Intelligence</h2>
              <div className="h-1 w-24 molten-gradient"></div>
              <p className="text-xl text-on-surface font-light leading-relaxed">
                Our manufacturing dominance is anchored in strategic hubs across <span className="font-bold text-[#C3D809]">West Bengal and Odisha</span>.
                These vertically integrated facilities house the world's most advanced metallurgical technologies.
              </p>
              <ul className="space-y-4 font-label">
                <li className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[#C3D809]">verified</span>
                  State-of-the-art automation systems
                </li>
                <li className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[#C3D809]">verified</span>
                  Zero-liquid discharge facilities
                </li>
                <li className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[#C3D809]">verified</span>
                  Direct port-to-plant logistics
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <WaveSection waves={3} className="py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#C3D809]/5 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-5xl md:text-8xl font-black font-headline uppercase tracking-tighter mb-8 text-on-surface">PARTNER WITH THE LEADERS</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-2xl text-on-surface-variant max-w-3xl mx-auto mb-16 font-light">Join the transformation of global industry. Our engineering experts are ready to solve your most complex metal challenges.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="max-w-xl mx-auto glass-card p-10 rounded-2xl border border-[#C3D809]/10 shadow-2xl">
              <form className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Name</label>
                    <input className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C3D809]/50 text-on-surface" placeholder="John Doe" type="text" />
                  </div>
                  <div>
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Email</label>
                    <input className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C3D809]/50 text-on-surface" placeholder="john@enterprise.com" type="email" />
                  </div>
                </div>
                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Message</label>
                  <textarea className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C3D809]/50 text-on-surface" placeholder="How can we assist your project?" rows="4"></textarea>
                </div>
                <motion.button whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(195,216,9,0.4)' }} whileTap={{ scale: 0.98 }} className="w-full molten-gradient text-[#1a1c00] font-bold py-4 rounded-md transition-all duration-300 uppercase tracking-widest">
                  Send Inquiry
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </WaveSection>
    </>
  )
}
