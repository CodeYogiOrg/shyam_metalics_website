import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { WaveSection } from '../components/WaveDivider'

export default function News() {
  const articles = [
    { cat: 'Corporate', date: 'OCT 24, 2024', title: 'Strategic Acquisition in Central India Operations', desc: 'Shyam Metalics expands its footprint with a major acquisition targeting vertically integrated steel manufacturing capabilities.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvwPgSCNDCxkmzKoeAsdydoQKza1_JRZ-SSTAT01P_pibkVR_YOkcgTKqJf-rCRdlmVMJ2xQQuKRaDBGS7BKRbudei6QcAhMEhC90rTv4rur6DFC5tSuCrQxERfcUwvxtMHc1yfyU2vQRyWy5BP1dhDy0bnBV0lPdmIWZ5iHd8tCNk_LCoabz5Nls7kvPvOwRivORGUMp5Av04Nut7QSGjrvwTlMIFelTYB32ZZt18RAjKUBQlurgtimlwqAclrmSYmy7sE-GLAN0' },
    { cat: 'ESG', date: 'OCT 18, 2024', title: 'Pioneering Net-Zero Steel Production', desc: 'New sustainability report highlights a 15% reduction in carbon footprint through innovative hydrogen-ready technologies.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH-nIQQhEz6KTaasNqLdpZWUbt6UUGt3nktfQn35dCNxq8OLxRefaFGgK26ecp5iQyEoi0UFw_uy-1bEc3S7h24a3Ti7nQgiXVzhwP8mldc5KcrsL9lIbDpdEl8cCUNu1m6RFdLtsPTGHWeiklPeh8bPZgdStMagOSl78NvMOdRX8TeB3T7jSOIaRlAmiOY4l7fkYcW9uDBTmk7lBiW73t7AVdBQlDIjlcgYRojxcrPIW3z2bX1w9EY71yvCRjcOe8qA6P7fMJVjE' },
    { cat: 'Expansion', date: 'OCT 12, 2024', title: 'Aluminum Foil Mill Commissioned', desc: 'Diversifying product portfolio with world-class aluminum foil manufacturing units to serve global packaging sectors.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmyws_LvAFmOTDt7JsY1hgcVYghiMFcAmvAUc_kh7SKcpM1ePKkyh6vuRBkXY9OeVIxt4pn_4BhvhBEYJQuwWLmNBMcoPMrFW5ma45JxHLDz77IiDtEIa-fU_dgTB1FPOCjMSe3GLvge2CSu2xS_d_e86qlwXp16XauC1bCyor0Y1L-RiNCCLLEVAkG0_egs6yHY28u7AxYBCQj4RSSxy2yiSGvReXozdc4Med0jWeO6qUfgXeC9_mqyJb2OiE4wBoyvyhck-nEv8' },
  ]

  return (
    <div className="pt-24">
      {/* Hero */}
      <WaveSection waves={4} className="relative h-[870px] w-full overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover grayscale-[0.5] brightness-50" alt="dramatic wide shot of a modern steel foundry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYRUmzexMwVohs8B2ZT65YqE2DXnO1-4oT0eMShaCU9uUMq1Kz66xDTy-q9jGmkbVSgUDT6aBFQgQOJ0TRimOt0j0TyfuicbGI4RNbxjyaNuzQvr8ITPEWaQUF6uaCOagCDRznTgKOIjSHQCWc-rnKC6fak7d-ukbkA4TmzS3wSfYAZuoXEIspGsgNfOy8-0vmGG9CF76bxttaWY5_c9Ma_6AYLS5DgihT_s3Y-f65P4h56zk3xxQf3XCcIgFFHekT6LqR9Nia2jY" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#222022] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-24 max-w-[1920px] mx-auto w-full">
          <AnimatedSection>
            <div className="flex flex-col gap-6 max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C3D809]/10 border border-[#C3D809]/20 text-[#C3D809] font-label text-xs tracking-widest uppercase">Featured Expansion</span>
              <h1 className="text-7xl md:text-9xl font-black font-headline tracking-tighter leading-[0.85] text-on-background">
                FORGING NEW <br /> <span className="text-gradient-molten">FRONTIERS.</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                Shyam Metalics announces the commissioning of its advanced blast furnace in West Bengal, increasing production capacity by 25%.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </WaveSection>

      {/* Filter Chips */}
      <section className="px-6 md:px-12 py-12 max-w-[1920px] mx-auto">
        <div className="flex flex-wrap items-center gap-4">
          {['ALL NEWS', 'CORPORATE', 'ESG & IMPACT', 'EXPANSION', 'FINANCIALS'].map((chip, i) => (
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} key={chip} className={`px-8 py-2 rounded-full font-label text-sm ${i === 0 ? 'bg-[#C3D809] text-[#1a1c00] font-bold' : 'bg-surface-container-high text-on-surface-variant hover:text-on-background hover:border-[#C3D809]/30 border border-transparent'} transition-all`}>
              {chip}
            </motion.button>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="px-6 md:px-12 pb-24 max-w-[1920px] mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <StaggerItem key={a.title}>
              <motion.article whileHover={{ y: -8 }} className="group relative bg-surface-container-low overflow-hidden rounded-xl border border-white/5 transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={a.title} src={a.img} />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#C3D809] font-label text-xs font-bold tracking-widest uppercase">{a.cat}</span>
                    <span className="text-zinc-500 font-label text-xs">{a.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-4 leading-tight group-hover:text-[#C3D809] transition-colors">{a.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6 line-clamp-3">{a.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[#C3D809] font-bold text-xs tracking-widest uppercase group-hover:gap-4 transition-all cursor-pointer">
                    READ MORE <span className="material-symbols-outlined text-sm">trending_flat</span>
                  </span>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Newsletter */}
      <WaveSection waves={3} className="py-24 px-6 md:px-12 border-y border-[#C3D809]/10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#C3D809] font-label text-sm tracking-[0.3em] uppercase mb-4 block">Stay Informed</span>
            <h2 className="text-5xl font-black font-headline mb-8">SUBSCRIBE TO INSIGHTS</h2>
            <p className="text-on-surface-variant text-lg mb-12">Get the latest news, market insights, and strategic updates delivered directly to your inbox.</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input className="flex-grow bg-surface-container-highest border-none focus:ring-2 focus:ring-[#C3D809] text-on-surface px-8 py-5 rounded-lg text-lg" placeholder="Your corporate email address" type="email" />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#C3D809] text-[#1a1c00] font-black uppercase tracking-widest px-12 py-5 rounded-lg hover:shadow-[0_0_30px_rgba(195,216,9,0.3)] transition-all">JOIN NOW</motion.button>
            </form>
          </div>
        </AnimatedSection>
      </WaveSection>
    </div>
  )
}
