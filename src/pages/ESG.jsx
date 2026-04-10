import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

const energyStats = [
  { id: 1, label: 'Solar Power Generation', value: '72', unit: 'MWh', icon: 'solar_power' },
  { id: 2, label: 'Captive Power Generation', value: '396.5', unit: 'MWh', icon: 'electric_bolt' },
  { id: 3, label: 'Wind Power', value: '5.5', unit: 'MWh', icon: 'air' },
  { id: 4, label: 'Total Captive Power', value: '487', unit: 'MW', icon: 'factory' }
];

const projects = [
  {
    id: 'rainwater',
    title: 'Student Learning',
    desc: 'Harvest rainwater and replenish the ground to ensure longer-term water security.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalJMTozdTq4iHxzfO5tW7eemg6n4QssN6tw&s',
    tag: 'Environmental'
  },
  {
    id: 'waste-reuse',
    title: 'Football Team.',
    desc: 'Reuse fly ash and slag to produce eco-bricks for the construction of local infrastructure.',
    img: 'https://shyammetalics.com/static/media/project5.f3fae5f32b454c3dba41.webp',
    tag: 'Circular Economy'
  },
  {
    id: 'energy-whr',
    title: 'Doing YOGA.',
    desc: 'Recover waste heat and use it for internal power so that we consume less energy and reduce emissions.',
    img: 'https://shyammetalics.com/static/media/Teamwork%20Keynote%20-%2011.54f25138e0c9db7214df.webp',
    tag: 'Efficiency'
  },
  {
    id: 'green-energy',
    title: 'Skill Development To Women In West Bengal',
    desc: 'Remove fossil fuels and shift operations to solar and bio energy solutions to energise cleaner plant operations.',
    img: 'https://c.ndtvimg.com/2026-01/2d0selvs_kushaltakekadam_160x120_17_January_26.png',
    tag: 'Green Energy'
  }
];

const downloads = [
  { name: 'WSP 2023 Global ESG Report', size: '4.2 MB' },
  { name: 'WSP 2023 Highlights', size: '2.1 MB' },
  { name: 'WSP 2023 Datapack', size: '1.5 MB' },
  { name: '2022 Global TCFD Report', size: '3.8 MB' },
  { name: 'GHG Verification Statement', size: '0.8 MB' },
  { name: 'Climate Transition Plan', size: '2.4 MB' },
  { name: 'Global ESG Statement', size: '1.2 MB' },
  { name: 'Biodiversity Statement', size: '1.1 MB' },
  { name: 'HSEQ Policy Statement', size: '0.9 MB' }
];

export default function ESG() {
  const [activePillar, setActivePillar] = useState('E');

  const pillars = {
    E: {
      title: 'Environmental Sustainability',
      label: 'NET ZERO BY 2070',
      desc: 'Our plants feature closed-loop water systems, ZLD tech, and 487 MW captive power generation to minimize external footprint.',
      features: [
        { title: 'Water Management', content: '56+ lakh KL conserved via recycling and rainwater harvesting. ZLD systems ensure zero discharge.' },
        { title: 'Emission Reduction', content: '4M tonnes CO2 equivalent reduced across Scope 1 & 2. Targeting NetZero through cleaner energy.' },
        { title: 'Waste Management', content: 'Solid waste repurposed into eco-friendly construction materials and eco-bricks.' }
      ]
    },
    S: {
      title: 'Social Responsibility',
      label: 'PEOPLE & COMMUNITY',
      desc: 'Empowering over 50 villages through skill development, medical SEHAT camps, and digital education hubs.',
      features: [
        { title: 'Skill Development', content: 'Vocational training and workshops for rural youth, fostering a culture of self-reliance.' },
        { title: 'Community Wellness', content: 'The SEHAT initiative has reached over 18,800 people through mobile health clinics.' },
        { title: 'Sustainability Culture', content: 'Green awareness programs and employee certifications in eco-friendly operations.' }
      ]
    },
    G: {
      title: 'Governance & Ethics',
      label: 'TRANSPARENCY & COMPLIANCE',
      desc: 'Adhering to global ESG standards like TCFD and GHG Protocol, ensuring high levels of corporate accountability.',
      features: [
        { title: 'Climate Action Report', content: 'Scope 1 and Scope 2 emission reporting as per global standards and Science-Based Targets.' },
        { title: 'Ethics & Compliance', content: 'Corporate environmental policies aligned with global resource efficiency standards.' },
        { title: 'HSEQ Excellence', content: 'Rigorous Health, Safety, Environment, and Quality (HSEQ) policy management across all units.' }
      ]
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 overflow-hidden relative">

      {/* Editorial Hero (Typography based - No Image) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-40 relative">
        <div className=" ">
          <div className="lg:col-span-7">
            <AnimatedSection>
              <div className="space-y-8 mt-12">
                <h1 className="text-7xl font-black text-center font-headline tracking-tighter leading-[0.8] text-slate-900 uppercase italic">
                  OUR GREEN <span className="text-[#0145F2] not-italic">PROMISE.</span>
                </h1>
                <p className="text-slate-500 font-medium text-center leading-relaxed italic text-lg">
                  "At Shyam Metalics, sustainability is how we work, grow, and lead. Our plants have closed-loop water systems, minimised emissions through non-recovery coke ovens, and power generation through 487 MW energy-efficient captive power plants.  <br />Our cement division recycles steel by-products into building materials, and we are committed to the circular economy. Every step is guided by our objective to reduce environmental impact."
                </p>
                <div className="flex flex-col items-center gap-6 pt-4">
                  <button className="w-full cursor-pointer md:w-auto px-12 py-6 bg-[#0145F2] text-white font-black text-[11px] uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-transform">
                    DOWNLOAD ESG REPORT
                  </button>
                  <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest pl-4">v2.4 Technical Specification</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ESG Pillar Switcher */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-30 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-4">
            {['E', 'S', 'G'].map((p) => (
              <button
                key={p}
                onClick={() => setActivePillar(p)}
                className={`w-full text-left p-8 rounded-[32px] transition-all flex items-center justify-between group ${activePillar === p ? 'bg-[#0145F2] text-white shadow-2xl scale-105' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
              >
                <div>
                  <h2 className="text-4xl font-black italic">{p === 'E' ? 'Environmental' : p === 'S' ? 'Social' : 'Governance'}</h2>
                  <p className={`text-[9px] uppercase tracking-[0.4em] font-black group-hover:text-white transition-colors ${activePillar === p ? 'text-white/70' : 'text-slate-300'}`}>Sustainable Excellence</p>
                </div>
                <span className={`material-symbols-outlined text-4xl transition-transform group-hover:rotate-45 ${activePillar === p ? 'text-white' : 'text-slate-100'}`}>
                  {p === 'E' ? 'eco' : p === 'S' ? 'diversity_3' : 'gavel'}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12 bg-white p-2 md:p-12 rounded-[48px] shadow-2xl border border-slate-100"
              >
                <div className="space-y-6">
                  <span className="text-[#0145F2] font-black text-[10px]  uppercase tracking-[0.5em]">{pillars[activePillar].label}</span>
                  <h2 className="text-5xl md:text-6xl font-black font-headline text-slate-900 uppercase italic tracking-tighter leading-none">
                    {pillars[activePillar].title.split(' ')[0]} <br /> <span className="text-[#0145F2] not-italic">{pillars[activePillar].title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed italic">
                    {pillars[activePillar].desc}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 pt-2 border-t border-slate-100">
                  {pillars[activePillar].features.map((f, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="text-[#0145F2] font-black uppercase tracking-widest text-[10px]">{f.title}</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{f.content}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Energy Management Mosaic */}
      <section className=" py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0145F2]/5 blur-[120px] rounded-full translate-y-[-20%] translate-x-[20%]"></div>
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black font-headline text-black uppercase italic tracking-tighter leading-none">
                ENERGY <br /> <span className="text-[#0145F2] not-italic">MANAGEMENT.</span>
              </h2>
              <p className="text-slate-400 mt-6 max-w-2xl mx-auto italic font-medium">83% of energy needs are met in-house, optimizing losses and integrating direct solar power.</p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {energyStats.map((stat) => (
              <StaggerItem key={stat.id}>
                <div className="bg-white/5 border-2 border-blue-600/10 p-8 rounded-[40px] hover:bg-[#0145F2] transition-colors group h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="material-symbols-outlined text-white text-3xl group-hover:scale-110 transition-transform">{stat.icon}</span>
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-widest group-hover:text-white/60">Real-time Gen</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black text-black italic">{stat.value}</span>
                    <span className="text-xs font-black text-[#0145F2] uppercase group-hover:text-white/70">{stat.unit}</span>
                  </div>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:text-white/80">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* GHG Emissions Mosaic */}
      <section className="bg-white py-24 px-6 md:px-12 relative border-y border-slate-50">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black font-headline text-slate-900 uppercase italic tracking-tighter leading-none">
                GHG <span className="text-[#0145F2] not-italic">EMISSIONS.</span>
              </h2>
              <p className="text-slate-500 mt-6 max-w-2xl mx-auto italic font-medium">From renewable energy to clean production, we’re minimising emissions across the board.</p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Emission Reduction Initiatives", desc: "GHG emission reduction targeting NetZero and Wind/Solar installations to bring down Scope 1 & 2 emissions.", icon: "eco" },
              { id: 2, title: "Sustainable Manufacturing", desc: "Energy-efficient manufacturing processes that reduce emissions at every production stage.", icon: "factory" },
              { id: 3, title: "Total Impact Strategy", desc: "Over 4 million tonnes of CO₂ equivalent reduced across Scope 1 and Scope 2 journey.", icon: "monitoring" }
            ].map((stat) => (
              <StaggerItem key={stat.id}>
                <div className="bg-slate-50 border-2 border-slate-900 p-10 rounded-[48px] hover:bg-slate-900 transition-all duration-700 group h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <span className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl group-hover:bg-[#0145F2] transition-colors">
                      <span className="material-symbols-outlined text-[#0145F2] text-3xl group-hover:text-white transition-colors">{stat.icon}</span>
                    </span>
                    <h3 className="text-2xl font-black font-headline text-black uppercase group-hover:text-white transition-colors italic leading-tight">{stat.title}</h3>
                    <p className="text-slate-500 font-medium group-hover:text-white/60 transition-colors italic leading-relaxed">{stat.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* Water Management Mosaic */}
      <section className="bg-white py-24 px-6 md:px-12 relative">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black font-headline text-black uppercase italic tracking-tighter leading-none">
                WATER <span className="text-[#0145F2] not-italic">MANAGEMENT.</span>
              </h2>
              <p className="text-slate-500 mt-6 max-w-2xl mx-auto italic font-medium">We recycle, treat, and conserve water to protect tomorrow’s supply today.</p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, title: "No Discharge, No Waste", val: "ZLD System", desc: "ZLD systems ensure zero wastewater leaves our plants. Full reuse within operations.", icon: "water_drop" },
              { id: 2, title: "Water Treatment Plants", val: "3775 KL", desc: "Treatment plants meet top reuse standards for diverse industrial applications.", icon: "opacity" },
              { id: 3, title: "Conservation Milestone", val: "56+ Lakh KL", desc: "Water conserved via large-scale recycling and rainwater harvesting structures.", icon: "waves" },
              { id: 4, title: "Replenishment Strategy", val: "Recharge", desc: "Building local ground-water recharge structures to benefit the surrounding ecology.", icon: "local_drink" }
            ].map((stat) => (
              <StaggerItem key={stat.id}>
                <div className="bg-slate-50 border-2 border-slate-900 p-10 rounded-[48px] hover:bg-[#0145F2] transition-all duration-700 group h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#0145F2] text-3xl">{stat.icon}</span>
                      </span>
                      <span className="text-[10px] font-black text-[#0145F2]/40 uppercase tracking-widest pt-2 group-hover:text-white/60 transition-colors">{stat.val}</span>
                    </div>
                    <h3 className="text-2xl font-black text-black font-headline uppercase text-slate-900 group-hover:text-white transition-colors italic leading-tight">{stat.title}</h3>
                    <p className="text-slate-500 font-medium group-hover:text-white/80 transition-colors italic leading-relaxed">{stat.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Climate Action Report Brige */}
      <section className="py-24 px-6 md:px-12 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#0145F2]/10 blur-[150px] rounded-full translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-10 relative z-10">
              <h2 className="text-5xl md:text-7xl font-black font-headline text-white uppercase italic tracking-tighter leading-none">
                CLIMATE ACTION <br /> <span className="text-[#0145F2] not-italic">REPORT.</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed italic border-l-4 border-[#0145F2] pl-10 max-w-xl">
                "At Shyam Metalics, we are making steady efforts towards India's Net Zero 2070 vision. From reporting Scope 1 and Scope 2 emissions under the GHG Protocol to driving regional and global advancement through green hydrogen, our focus remains beyond compliance."
              </p>
              <p className="text-slate-500 text-lg font-medium leading-relaxed italic max-w-lg">
                We are actively pursuing carbon capture technology and science-based targets to enable low-carbon steel making. What we build isn't just steel—it's industrial trust.
              </p>
              <button className="px-12 py-6 cursor-pointer bg-[#0145F2] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-transform">
                DOWNLOAD CLIMATE REPORT
              </button>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#0145F2]/20 rounded-[64px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-[64px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                <img
                  src="https://shyammetalics.com/static/media/a6.798900a2e6ec96dcd74b.webp"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  alt="Industrial Climate Action"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveCanvas height={200} flip={true} intensity={1.5} />

      {/* Climate Action & Circular Economy Projects */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
              <div className="max-w-2xl">
                <span className="text-[#0145F2] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Green Manufacturing</span>
                <h2 className="text-5xl md:text-7xl font-black font-headline text-slate-900 uppercase italic tracking-tighter leading-none">
                  FEATURED <br /> <span className="text-[#0145F2] not-italic">PROJECTS.</span>
                </h2>
              </div>
              <p className="max-w-sm text-slate-600 font-medium leading-relaxed italic">"Our featured projects showcase real-world actions that involve sustainability, empower communities, and promote responsible growth."</p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-10">
            {projects.map((proj) => (
              <StaggerItem key={proj.id}>
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-[400px] rounded-[48px] overflow-hidden border border-slate-100 shadow-2xl cursor-pointer"
                >
                  <img
                    src={proj.img}
                    className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0"
                    alt={proj.title}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Minimal Caption on Hover */}
                  <div className="absolute bottom-8 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white text-2xl font-black uppercase italic tracking-tighter">{proj.title}</h3>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Climate Action Report (Net Zero 2070) */}
      <section className="bg-slate-600 py-22 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0145F2]/5 blur-[150px] rounded-full translate-y-[-30%] translate-x-[30%]"></div>
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <AnimatedSection direction="left">
            <div className="space-y-8">

              <h2 className="text-5xl md:text-7xl font-black font-headline text-white uppercase italic tracking-tighter leading-none">
                NET ZERO <br /> <span className="text-[#0145F2] not-italic"> VISION.</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg font-medium italic leading-relaxed">
                <p>In FY 2023–24, we started reporting Scope 1 and Scope 2 emissions as per global standards like the GHG Protocol and TCFD.</p>
                <p>Our focus is beyond compliance, aiming to drive regional and global advancement in sustainable manufacturing through green hydrogen and carbon capture.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-6 pb-12">
              <div className="bg-white/5 p-10 rounded-[40px] border-2 border-blue-600 transition-colors">
                <h4 className="text-black font-black text-xs uppercase tracking-widest mb-4">Emissions Journey</h4>
                <p className="text-white/80 text-xs font-semibold leading-relaxed">Actively pursuing SBTi science-based targets for low-carbon steel making.</p>
              </div>
              <div className="bg-[#0145F2] p-10 rounded-[40px] shadow-2xl">
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Scope 1 & 2 Reduction</h4>
                <p className="text-white/80 text-xs font-bold leading-relaxed">Reflecting our commitment to India's climate goals.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Download Center */}
      <section className="py-26 px-6 md:px-12 bg-white relative">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[#0145F2] font-black text-[12px] uppercase tracking-[0.4em] mb-4 block">Resource Library</span>
              <h2 className="text-6xl md:text-7xl font-black font-headline text-slate-900 uppercase italic tracking-tighter leading-none">
                DOWNLOAD <br /> <span className="text-[#0145F2] not-italic">CENTER.</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {downloads.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-[#0145F2]/20 hover:bg-white hover:shadow-2xl transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0145F2]/5 flex items-center justify-center group-hover:bg-[#0145F2] transition-colors">
                      <span className="material-symbols-outlined text-[#0145F2] group-hover:text-white">description</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase text-slate-800 tracking-tight group-hover:text-[#0145F2] transition-colors">{item.name}</h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-500">{item.size}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-[#0145F2] transition-colors">download</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.2} />
    </div>
  )
}
