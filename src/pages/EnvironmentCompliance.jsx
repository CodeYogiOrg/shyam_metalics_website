import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

const topCarousel = [
  "https://static.vecteezy.com/system/resources/thumbnails/070/670/911/small/ecology-concept-globe-encapsulated-by-recycling-symbol-with-green-foliage-sustainable-future-and-environmental-awareness-photo.jpeg",
  "https://consortiumlegal.com/en/wp-content/uploads/sites/6/Compliance-ambiental.jpg",
  "https://img.freepik.com/free-photo/sustainable-development-goals-still-life_23-2150196640.jpg?semt=ais_hybrid&w=740&q=80",
  "https://media.istockphoto.com/id/2208231450/photo/carbon-footprint-reduction-renewable-energy-sourcing-and-emissions-trading-businessman-using.jpg?s=612x612&w=0&k=20&c=5OuC0qw7nFsVRt_xCRlC59g6jBg0agVgZIDXKhFDerc="
];

const bottomCarousel = [
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
  "https://www.gleassociates.com/wp-content/uploads/2019/06/iStock-959895456.jpg"
];

const priorities = [
  { id: 1, title: "Decarbonisation & Clean Energy", desc: "Shifting to renewables with a plan to achieve net-zero emissions (Scope 1 and 2) by 2050.", icon: "eco", val: "NetZero 2050" },
  { id: 2, title: "Circular Economy", desc: "No waste to landfills. All slag and fly ash are reused in cement and infrastructure projects.", icon: "recycling", val: "Zero Waste" },
  { id: 3, title: "Water Stewardship", desc: "95% of water is recycled. Key plants run on zero liquid discharge systems (ZLD).", icon: "water_drop", val: "95% Recycled" },
  { id: 4, title: "Biodiversity & Reclamation", desc: "Reclaimed over 500 hectares through our green belt program and native green cover.", icon: "park", val: "500+ Hectares" },
  { id: 5, title: "Air Quality Control", desc: "ESPs, bag filters, and real-time monitoring ensure emission levels meet legal benchmarks.", icon: "air", val: "Real-time CEMS" },
  { id: 6, title: "Green Infrastructure & Tech", desc: "WHRBs to capture waste heat and AI tools to optimise energy use at all units.", icon: "construction", val: "AI Optimized" }
];

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden rounded-[48px] shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Environmental Stewardship"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>

      {/* Bottom Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${current === i ? 'bg-[#00D1FF] w-8' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function EnvironmentCompliance() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 overflow-hidden relative">

      {/* Top Image Stage */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32 relative z-10">
        <ImageCarousel images={topCarousel} />
      </section>

      {/* Typography Hero (No BG Image) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-26 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 items-end">
          <AnimatedSection direction="left">
            <div className="space-y-6 mb-20">
              <div className="inline-flex items-center gap-3 bg-[#0145F2]/5 px-4 py-2 rounded-full border border-[#0145F2]/10">
                <span className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse"></span>
                <span className="text-[#0145F2] font-black text-[9px] uppercase tracking-[0.4em]">Environmental Promise</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black font-headline tracking-tighter leading-[0.85] text-slate-900 uppercase italic">
                GREEN <br /> <span className="text-[#0145F2] not-italic">STEEL...</span>
              </h1>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="max-w-md pb-4">
              <p className="text-slate-500 font-medium leading-relaxed italic text-sm">
                "At Shyam Metalics, we're building a cleaner path to steelmaking, starting with how we prepare one of our most essential inputs: coke. Our advanced coke ovens operate in oxygen-free conditions to break down coal, while heat-recovery systems capture and reuse thermal energy across operations.
                Instead of traditional wet quenching, we use dry quenching with inert gases, which sharply cuts down emissions and water usage. The process also allows us to recover by-product gases and channel them into power generation, making every step more efficient across the steel production cycle. The entire process is designed to reduce the overall carbon footprint of steel manufacturing.
                Green Steel ManufacturingRead more
                "
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Waste To Wealth & Green Steel Manufacturing */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24 space-y-40 relative z-10">

        {/* Waste to Wealth */}
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <AnimatedSection direction="left" className="lg:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#00D1FF]/10 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative aspect-[16/9] rounded-[48px] overflow-hidden border border-slate-100 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt="Recycling Slag" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" className="lg:col-span-5 space-y-8">
            <span className="text-[#0145F2] font-black text-[10px] uppercase tracking-[0.5em]">CIRCULAR ECONOMY</span>
            <h2 className="text-5xl font-black font-headline text-slate-900 uppercase italic tracking-tighter leading-none">
              FROM WASTE<br /> <span className="text-[#0145F2] not-italic">TO WEALTH.</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
              At Shyam Metalics, every bit of slag and fly ash generated in our steel plants is repurposed with intent. At the Jamuria facility, blast furnace slag is granulated and processed into construction-grade aggregates for infrastructure applications.
              Fly ash is transformed into bricks at in-house production units. We also reuse metallic slag in sinter feed and recover process gases for power generation, ensuring that industrial by-products are looped back into use rather than sent to waste.
              From Waste To WealthRead more
            </p>
            <button className="px-10 py-5 cursor-pointer bg-[#0145F2] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 transition-transform flex items-center gap-4">
              READ MORE <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </AnimatedSection>
        </div>

        {/* Green Steel Manufacturing */}
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <AnimatedSection direction="left" className="lg:col-span-5 space-y-8 lg:order-2">
            <span className="text-[#0145F2] font-black text-[10px] uppercase tracking-[0.5em]">ADVANCED THERMAL</span>
            <h2 className="text-5xl font-black font-headline text-slate-900 uppercase italic tracking-tighter leading-none text-left">
              GREEN STEEL<br /> <span className="text-[#0145F2] not-italic">MANUFACTURING.</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed italic text-left">
              At Shyam Metalics, we're building a cleaner path to steelmaking, starting with how we prepare one of our most essential inputs: coke. Our advanced coke ovens operate in oxygen-free conditions to break down coal, while heat-recovery systems capture and reuse thermal energy across operations.
              Instead of traditional wet quenching, we use dry quenching with inert gases, which sharply cuts down emissions and water usage. The process also allows us to recover by-product gases and channel them into power generation, making every step more efficient across the steel production cycle. The entire process is designed to reduce the overall carbon footprint of steel manufacturing.            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" className="lg:col-span-7 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#0145F2]/10 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative aspect-[16/9] rounded-[48px] overflow-hidden border border-slate-100 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt="Steel Manufacturing" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sustainable Initiatives & Compliance */}
      <section className="bg-slate-900 py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D1FF]/5 blur-[120px] rounded-full translate-y-[-20%] translate-x-[20%]"></div>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <h2 className="text-6xl md:text-8xl font-black font-headline text-white uppercase italic tracking-tighter leading-none">
                  GLOBAL<br /> <span className="text-[#0145F2] not-italic">INITIATIVES.</span>
                </h2>
                <p className="text-slate-400 text-xl font-medium leading-relaxed italic">
                  Reshaping steelmaking by aligning with global climate goals. ISO 14001 & ISO 45001 certified operations guide our 2030 and 2050 milestones.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8">
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#0145F2] transition-colors">
                    <span className="material-symbols-outlined text-[#00D1FF] text-4xl mb-4">gavel</span>
                    <h4 className="text-white font-black text-[10px] uppercase tracking-widest mb-2">Compliance</h4>
                    <p className="text-slate-500 text-xs font-bold leading-relaxed">United Nations SDGs and TCFD Transparency Framework.</p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#0145F2] transition-colors">
                    <span className="material-symbols-outlined text-[#00D1FF] text-4xl mb-4">monitoring</span>
                    <h4 className="text-white font-black text-[10px] uppercase tracking-widest mb-2">Transparency</h4>
                    <p className="text-slate-500 text-xs font-bold leading-relaxed">Live EHS dashboards tracking GRI, CDP, and BRSR reporting.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="p-12 md:p-20 bg-white rounded-[64px] shadow-2xl relative overflow-hidden group">
                <h4 className="text-slate-900 font-black text-[11px] uppercase tracking-[0.4em] mb-4">Proactive Culture</h4>
                <h3 className="text-4xl md:text-5xl font-black font-headline text-slate-900 uppercase italic tracking-tighter leading-tight mb-8">
                  BEYOND <br /> COMPLIANCE.
                </h3>
                <p className="text-slate-900/80 font-medium leading-relaxed italic text-lg mb-10">
                  "Transitioning fossil fuel operations into green hydrogen and bio-energy isn't just about standards—it's about survival."
                </p>
                <button className="px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl hover:-translate-y-1 transition-transform">
                  VIEW EHS DASHBOARD
                </button>
                <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[10rem] text-slate-900/5 group-hover:scale-110 transition-transform">verified</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <WaveCanvas height={200} flip={true} intensity={1.5} />

      {/* Our Priorities Grid */}
      <section className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-32">
              <span className="text-[#0145F2] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Future Roadmap</span>
              <h2 className="text-6xl md:text-8xl font-black font-headline text-slate-900 uppercase italic tracking-tighter leading-none">
                OUR <span className="text-[#0145F2]">PRIORITIES.</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {priorities.map((item) => (
              <StaggerItem key={item.id}>
                <div className="group bg-slate-50 p-6 rounded-[48px] border-2 border-slate-900 hover:bg-slate-900 transition-all duration-700 h-full flex flex-col justify-between overflow-hidden relative">
                  <div className="space-y-6 relative z-10">
                    <span className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl group-hover:bg-white transition-colors">
                      <span className="material-symbols-outlined text-[#0145F2] text-3xl">{item.icon}</span>
                    </span>
                    <div>
                      <h3 className="text-2xl text-slate-900 font-black font-headline uppercase group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest group-hover:text-white pt-2">{item.val}</p>
                    </div>
                    <p className="text-slate-500 font-medium group-hover:text-white/80 transition-colors italic leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Hover Graphic */}
                  <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[12rem] text-[#0145F2]/5 group-hover:text-white/5 transition-colors">circle</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* MAKING A DIFFERENCE Bridge */}
      <section className="bg-slate-600 py-24 text-center relative px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#00D1FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto space-y-12 relative z-10 px-6">
            <h2 className="text-5xl md:text-7xl font-black font-headline uppercase text-white tracking-tighter leading-none italic">
              MAKING A <br /> <span className="text-[#0145F2]">DIFFERENCE.</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed italic max-w-2xl mx-auto">
              At Shyam Metalics, we don't think of change as a big, distant idea. It is in the small things we do every day, such as turning slag into something useful and making bricks from ash. Also, in sending doctors to places that don't have clinics, using less, wasting less, and listening more.
              <br />It's not perfect, but it's honest work. And this is what matters to us. Because in the end, what we build isn't just steel - it's trust and care. At our company, we believe that progress means nothing if it leaves people or the planet behind.            </p>
          </div>
        </AnimatedSection>

      </section>

      {/* Bottom Image Stage */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mt-20 relative z-10">
        <ImageCarousel images={bottomCarousel} />
      </section>

      <style jsx>{`
        .font-headline { font-family: 'Inter', sans-serif; }
      `}</style>
      <WaveCanvas height={200} flip={false} intensity={1.5} />

    </div>
  )
}
