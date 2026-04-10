import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function Leadership() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-24 max-w-[1920px] mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <span className="font-label text-[#0145F2] font-semibold tracking-[0.3em] uppercase block mb-4">Leadership</span>
              <h1 className="text-7xl md:text-9xl font-headline font-black tracking-tighter leading-none text-zinc-100">
                Architects of <span className="text-[#0145F2] italic">Growth</span>
              </h1>
            </div>
            <div className="md:w-1/3 pb-4">
              <p className="text-slate-600 text-lg leading-relaxed border-l-2 border-[#0145F2]/30 pl-8">
                Forging the future of infrastructure through heavy-duty engineering and visionary stewardship.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.0} />

      {/* Chairman */}
      <section className="bg-surface-container-low py-32 relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <AnimatedSection direction="left" className="md:col-span-7 z-10">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#0145F2]"></div>
              <span className="font-label text-on-surface-variant font-medium uppercase tracking-widest">Chairman's Perspective</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-zinc-100 mb-8 leading-tight">
              "The strength of steel is matched only by the <span className="text-[#0145F2]">clarity of purpose</span>."
            </h2>
            <p className="text-xl text-zinc-300 leading-loose mb-12 max-w-2xl">
              At Shyam Metalics, we don't just manufacture metal; we build the foundations of a rising economy.
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-headline font-bold text-zinc-100">B.P. Agarwal</p>
              <p className="font-label text-[#0145F2] uppercase tracking-widest">Chairman & Founder</p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden shadow-2xl">
              <img alt="Distinguished executive in a dark tailored suit" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA59LbJf5JxoCwVrCvVpdZrPkxnWhegmPYgYqbMxzSnnf0FYybKbyaGzTpcGNrHqgZa7houzwEflUTBzhFrJ4HeMCYxqkM3f-m3NyPCSuCif6O9mhrVqO-vVhlCT5khE7Weg6Bwi5jD1C8DTHS1g9dr9yPRIYbh0UIo5RiiCKeIY30lmR4TAB4p5t7zQSxfhefB1Cis-fShhBL5bX2m8jGnZZl7D7iBRgjg9sarBmyHhoUKgUwP4fAHoXEPDK92REEkgvmNkDccCp4" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border-l border-b border-[#0145F2]/20 -z-0"></div>
          </AnimatedSection>
        </div>
      </section>

      <WaveCanvas height={200} flip={true} intensity={1.0} />

      {/* Board */}
      <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-zinc-100 uppercase">Board of <span className="text-outline">Directors</span></h2>
            <div className="hidden md:block h-[1px] flex-grow mx-12 bg-zinc-800"></div>
          </div>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8" staggerDelay={0.1}>
          <StaggerItem className="md:col-span-2">
            <motion.div whileHover={{ y: -5, borderColor: 'rgba(1,69,242,0.15)' }} className="group relative overflow-hidden bg-surface-container-high p-10 rounded-xl transition-all duration-500 border border-transparent h-full">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 flex-shrink-0 bg-surface-container-highest rounded-full overflow-hidden border-2 border-[#0145F2]/20">
                  <img alt="Executive" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5TBH2pf9pJBXx0sL5Ch6yYT5gZIswiNp4d3aREBl7pVs8fxsTk4bWW5DfPIEJ5_ije8CW_Xb8s7gadR_RHKKmpfeftn0XlkVv73NZUFPobmbDH-j2QYIARQ9Bi067qmJWApcvK7sqB5MHnKn1lUAvNkO_K0mePUuKVZh0VKj9Z6KA612p_dX1jl3i5wncpWvOx89D7KbA4TqRI0ZRad6Ef13QC4E_mBU8uvzDJi7WjjbENPT_aHT7mf-AW5vZcVTzm2HPXO_2co" />
                </div>
                <div>
                  <span className="font-label text-[#0145F2] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Executive Vice Chairman</span>
                  <h3 className="text-3xl font-headline font-bold text-zinc-100 mb-4">Sheetal Agarwal</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">Pioneering the group's expansion into value-added products and international steel markets.</p>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
          <StaggerItem>
            <motion.div whileHover={{ y: -5, borderColor: 'rgba(1,69,242,0.15)' }} className="group relative bg-surface-container-high p-8 rounded-xl transition-all duration-500 border border-transparent h-full">
              <div className="w-20 h-20 mb-6 bg-surface-container-highest rounded-full overflow-hidden border border-[#0145F2]/20">
                <img alt="Executive" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMbgaBaizRPSEepfZb6Y3jDRKN_s4QpYg4QLCso_4fKR3ioheH3G_wgTvHi348lzVLa85wLu2fwisx450KoqE3mcDx6ArsABUMHMSSgt45tzq3UT4gGUkWGj6uKip-3NNM8awnCYTewsjS7IJ-7RxfTSZze0PO1DASXkdxGW51go-aA4Yv2byMtViO3ES42jdKd9HdMQ8ssUMY3eJ_7dJf7P04KPdDxO5Bqs0Zb5Ex8kGjFJ10lVQfpEZfTWpINpKstGasa-NnJE" />
              </div>
              <span className="font-label text-[#0145F2] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Managing Director</span>
              <h3 className="text-2xl font-headline font-bold text-zinc-100 mb-3">Dev Kumar Chowbey</h3>
              <p className="text-slate-500 text-sm mb-6">Expertise in operational excellence and sustainable manufacturing processes.</p>
            </motion.div>
          </StaggerItem>
          <StaggerItem>
            <motion.div whileHover={{ y: -5, borderColor: 'rgba(1,69,242,0.15)' }} className="group relative bg-surface-container-high p-8 rounded-xl transition-all duration-500 border border-transparent h-full">
              <div className="w-20 h-20 mb-6 bg-surface-container-highest rounded-full overflow-hidden border border-[#0145F2]/20">
                <img alt="Executive" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWUDsuXgcwNg6Ma8wehLen4FHUXO60rC7dWzas5HUJMR1ti43Eif-55M89teAavwUo5O-7YExQ8wOcFz308uAZ2uJQ7r3H7jENfH1TaJedFq36JYasD8jbkTLdPoZ3e4GyW-GKbvQnNN8fNaBPV_UzC26Vf3VqUuWPEM7vJFBqZAX_kP4QpMNGL85AP1-Z4DcM5eCkMLAVna0IN3pe1L7XbK2zO693-9mpoHenlg7GLgEwmgk1xHcMwQsHNkyubofvqQEX9JTw7xA" />
              </div>
              <span className="font-label text-[#0145F2] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Independent Director</span>
              <h3 className="text-2xl font-headline font-bold text-zinc-100 mb-3">Ankita Sinha</h3>
              <p className="text-slate-500 text-sm mb-6">Providing strategic oversight on corporate governance and financial integrity.</p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      <WaveCanvas height={200} flip={false} intensity={0.8} />

      {/* Executive Team */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="mb-20">
              <span className="font-label text-[#0145F2] font-semibold tracking-[0.3em] uppercase block mb-4">The Engine Room</span>
              <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-zinc-100">Executive Team</h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16" staggerDelay={0.1}>
            {[
              { name: 'Rajeev Goel', role: 'Chief Operating Officer', dept: 'Operations', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgZSOMfdF2HL2Ui5g3lIjwlBIDCrqQm3pJ7ifHSP7qCkLC0Pmd2xKPMaefKfNhfqSXgBZnCQRBZnQztWAhsxRPo18b0zV-9iuaDgSDDutNAWhUbJq33bjKExELdQ2OsCG4iWXJf74Ei3BWY1q_MFWxyaQ_asOvTeakQp7mkMJWvQEIPiP38STyWPLmzleoL9fShLQFa-dQgGxM8HrxyTRO4SW6UtH3q_zFM9fYC0KFGZm1GYOgF0H7TaYvcFADIuTZ_6mO7K4cb1w' },
              { name: 'Amit Kumar', role: 'Chief Financial Officer', dept: 'Finance', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3_UH6hdVOb7M29z-eEJU2y1GtnPV0K1cfIX3zFgL7dKzmA-utF3fXXunidKAPEYyobjrYSF-jUzXv3nZKHHYDBKaR3RTJfOMFDPFUk-8mmiOf-vImLJ_AxRT_L0QxsstKcokz_VxsnLaj5hGB0P3GEz3hlajLrv9S5fn5njMPIiaZmP6fXm7CrDfwLWUZIurPdFqnZhoOJmCgIdhTVSJpmH4nnOu91LZZjBAutU85El8ID5naDPrPcJJy4DIu1CRqvJ2jkBuOmZU' },
              { name: 'Priya Sharma', role: 'Head of ESG & Strategy', dept: 'Sustainability', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc3g6sCiSfKLIzksRN6NCXlTzNEpHvme-6Mdf8TP2dpCguH-yuev9SjPNXG_Xvu6HDoucIIufeXv0VgmhCAmnq9BBSYIT9bzCewe03VElUsZLeqinfDwf-Vo9UYzwoWXGUAFv_gdKk6GeT3h7_z95xslMTwr9Vo7r1ScCWTBkzh87ADs2y3w5kBgGzk_uZrlY75Vo-2_NY2bksnvMadN2Qb8c-VebT-VIdouPsvG5F0RL-gzLRoo1fdFixlcLbSOc5XgdPPExXM5w' },
              { name: 'Vikram Mehta', role: 'VP - Supply Chain', dept: 'Logistics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWWHzUwifHc3M-Y5ZT4_WSp5ytYcXfNRUZ03lLKtgM7cUazGoFnUDiP_IJRlpgtgpnijopjMH_Q04-P65p5p_NwHblD4KtaM0VF39rqqDmDu0pFxQX9lh6ucS-oZbByJCsqse8UJ9IpQLnP_PQfjjjYT_zaR7YwWxGgAheLc2j3RYiQMtH1RsvirVMNdm8tqn8CF4ryNYZP_v6ziy-glSUJGVjoi4cRKw8rbz11cLXG3jbTJVZJzLkGQu6kG2U2gYPJGj8x0LIjsg' },
            ].map((m) => (
              <StaggerItem key={m.name}>
                <div className="group">
                  <div className="relative mb-6 overflow-hidden aspect-square rounded-xl bg-surface-container-high">
                    <img alt="Team member" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" src={m.img} />
                    <div className="absolute inset-0 bg-[#0145F2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 backdrop-blur-[2px]">
                      <span className="text-[#FFFFFF] font-label text-xs font-bold tracking-widest uppercase bg-[#0145F2] px-3 py-1">{m.dept}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-headline font-bold text-zinc-100 group-hover:text-[#0145F2] transition-colors">{m.name}</h4>
                  <p className="font-label text-slate-500 text-sm uppercase tracking-widest mt-1">{m.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-headline font-extrabold text-zinc-100 mb-6">Invested in Our Collective Future</h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">Our leadership is dedicated to maintaining the highest standards of governance and operational integrity.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#0145F2] text-[#FFFFFF] px-10 py-4 rounded-md font-bold tracking-widest uppercase shadow-xl shadow-[#0145F2]/10">Investor Relations</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-outline-variant text-zinc-100 px-10 py-4 rounded-md font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all">Our Ethics</motion.button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
