import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'
import { useState } from 'react'

const productCategories = [
  {
    id: 'tmt',
    title: 'SEL Tiger TMT',
    desc: 'The benchmark of strength, elasticity, and longevity.',
    img: 'https://5.imimg.com/data5/SELLER/Default/2024/1/379359106/TF/KO/IL/30510348/secondary-steel-tmt-bars.jpg',
    icon: 'rebase_edit'
  },
  {
    id: 'structural',
    title: 'SEL Tiger Structural Steel',
    desc: 'Forging the backbone of modern India\'s infrastructure.',
    img: 'https://tiimg.tistatic.com/fp/1/001/498/structural-steel-tmt-angle-channel-girder-464.jpg',
    icon: 'architecture'
  },
  {
    id: 'wire-rod',
    title: 'SEL Tiger Wire Rod',
    desc: 'Strength woven into every strand for critical stability.',
    img: 'https://shyammetalics.com/static/media/w2.e1767b3af59bbb32fc4d.webp',
    icon: 'linear_scale'
  },
  {
    id: 'roofing',
    title: 'SEL Tiger Roofing Sheets',
    desc: 'Lasting, versatile style built for India\'s diverse climates.',
    img: 'https://images.jdmagicbox.com/quickquotes/images_main/steel-colour-coated-roofing-sheet-2219560431-uz2hp57f.jpg',
    icon: 'roofing'
  },
  {
    id: 'foil',
    title: 'SEL Tiger Foil',
    desc: 'Certified food-grade safety crafted with precision.',
    img: 'https://shyammetalics.com/static/media/BannerFoil.8445960f40e13a4f248a.webp',
    icon: 'layers'
  },
  {
    id: 'ss-rebar',
    title: 'SEL Tiger SS Rebar',
    desc: 'Pioneering corrosion-resistant solution for coastal infrastructure.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOfVQHKELjtXUNtvR7igiEB7bhg2dR1dNCg&s',
    icon: 'shield_with_heart'
  }
];

export default function SelTiger() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [visionaryIndex, setVisionaryIndex] = useState(0);

  // TMT Calculator State
  const [calcData, setCalcData] = useState({
    bType: 'Residential',
    state: 'West Bengal',
    floors: 1,
    area: ''
  });
  const [calcResult, setCalcResult] = useState(null);

  const indianStates = [
    'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar',
    'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand',
    'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra',
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'
  ];

  const handleCalculate = () => {
    const area = parseFloat(calcData.area);
    if (!area || area <= 0) return;

    // Rule of thumb factors (kg/sq.m)
    // Residential: ~45, Commercial: ~55, Industrial: ~70
    let factor = 45;
    if (calcData.bType === 'Commercial') factor = 55;
    if (calcData.bType === 'Industrial') factor = 75;

    const totalKG = area * parseInt(calcData.floors) * factor;
    const totalTons = (totalKG / 1000).toFixed(2);
    setCalcResult(totalTons);
  };

  const visionariesData = [
    { img: 'https://www.fabhotels.com/blog/wp-content/uploads/2023/02/600X400-1.jpg:cf-webp:w-450:h-240', label: 'Safety First' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/%D0%9F%D0%BE%D0%B5%D0%B7%D0%B4_%D0%BD%D0%B0_%D1%84%D0%BE%D0%BD%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B_%D0%A8%D0%B0%D1%82%D1%80%D0%B8%D1%89%D0%B5._%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.jpg', label: 'Precision' },
    { img: 'https://t3.ftcdn.net/jpg/01/87/65/74/360_F_187657448_jIaw7UEUOUV9rW8oSPKfXvMS4D8TxklW.jpg', label: 'Sustainability' },
    { img: 'https://avpinfra.com/wp-content/uploads/2025/12/2-1024x544.jpg', label: 'Connectivity' },
    { img: 'https://img.freepik.com/premium-photo/residential-building-constraction-blue-sky-background_769578-44.jpg?semt=ais_incoming&w=740&q=80', label: 'Resilience' },
    { img: 'https://www.tkelevator.com/media/baet/blog_8/mixed_use_buildings/shutterstock_464879318-scaled_image_w886.webp', label: 'Innovation' },
    { img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ac/5a/37/srisailam-dam.jpg?w=500&h=500&s=1', label: 'Endurance' },
    { img: 'https://devajeng.com/wp-content/uploads/2025/02/Warehouses-Godowns.jpg', label: 'Efficiency' }
  ];

  const handleNext = () => setVisionaryIndex((prev) => (prev + 1) % (visionariesData.length - 2));
  const handlePrev = () => setVisionaryIndex((prev) => (prev - 1 + (visionariesData.length - 2)) % (visionariesData.length - 2));

  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center pt-32 overflow-hidden bg-[#F8FAFC]">
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
            <AnimatedSection delay={0.2}>
              <div className="inline-flex items-center gap-3 bg-[#0145F2]/5 border border-[#0145F2]/10 px-6 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-[#0145F2] rounded-full animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">The Foundation of India</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h1 className="text-7xl md:text-7xl font-headline font-black tracking-tighter leading-[0.85] mb-8 uppercase italic text-slate-900">
                STRENGTH-
                <span className="text-[#0145F2] not-italic">WITHOUT</span><br />
                COMPROMISE.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <p className="text-xl md:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed mb-12 italic mx-auto md:mx-0">
                "SEL Tiger stands on the core principles of strength, flexibility, and durability—representing our promise to create lasting structures for the nation."
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <button className="px-9 py-4 cursor-pointer bg-[#0145F2] text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-transform">
                  EXPLORE TMT ELITE
                </button>
                <button className="px-9 py-4 cursor-pointer bg-white border-2 border-blue-600 text-blue-600 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-all shadow-lg">
                  TECHNICAL SPECS
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>

      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em]">Vision 2047</span>
                <h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none italic tracking-tighter text-slate-900">
                  THE FOUNDATION OF A <span className="text-[#0145F2] not-italic">SELF-RELIANT INDIA.</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
                  SEL Tiger, the flagship brand of Shyam Metalics, stands on core principles of strength and durability. It represents our promise to create lasting structures that fuel the nation's progress.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                  <div>
                    <h4 className="text-4xl font-black text-slate-900 italic mb-2">360°</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Utility Ecosystem</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-black text-[#0145F2] italic mb-2">FE 550D</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Structural Grade</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#0145F2]/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="aspect-square rounded-[40px] overflow-hidden border border-slate-100 relative z-10 bg-slate-50">
                  <img
                    src="https://shyammetalics.com/static/media/captive%20power%2013.7df5775b15e82fb2dec7.webp"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    alt="SEL Tiger Product Range"
                    onError={(e) => e.target.src = "https://shyammetalics.com/static/media/industry.bdd70a5957ae8b8269dc.webp"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <p className="text-slate-900 text-sm font-black uppercase tracking-[0.2em] mb-4">Core Principles</p>
                    <div className="flex flex-wrap gap-4">
                      {['STRENGTH', 'FLEXIBILITY', 'DURABILITY'].map(tag => (
                        <span key={tag} className="px-4 py-2 bg-white shadow-lg rounded-full text-[10px] font-black border border-slate-100 text-slate-900">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT EXPLORATION GRID */}
      <section className="py-24 ">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="text-center mb-24">
              <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em] mb-6 block">Our Comprehensive Range</span>
              <h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none tracking-tighter italic">
                EXPLORE <span className="text-[#0145F2] not-italic">SEL TIGER.</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product) => (
              <StaggerItem key={product.id}>
                <motion.div
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  whileHover={{ y: -20 }}
                  className="relative group aspect-[4/5] rounded-[48px] overflow-hidden bg-slate-900 border border-white/10 cursor-pointer"
                >
                  <img
                    src={product.img}
                    className={`w-full h-full object-cover transition-all duration-1000 ${hoveredProduct === product.id ? 'scale-110 opacity-40' : 'scale-100 opacity-60 grayscale'}`}
                    alt={product.title}
                  />

                  {/* Glassmorphic Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent">
                    <div className="space-y-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#0145F2] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <span className="material-symbols-outlined text-white text-3xl">{product.icon}</span>
                      </div>
                      <h3 className="text-3xl font-black text-white font-headline leading-tight uppercase italic">{product.title}</h3>
                      <p className="text-zinc-400 font-medium italic opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                        {product.desc}
                      </p>
                      <button className="flex cursor-pointer items-center gap-4 text-xs font-black uppercase tracking-widest text-[#0145F2] group/btn">
                        DISCOVER MORE
                        <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">east</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <WaveCanvas height={150} flip={false} intensity={1.5} />

      {/* 4. SECTOR EMPOWERMENT PILLARS */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#0145F2]/5 blur-[200px] rounded-full pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-24">
              <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em] mb-6 block">Building the Future</span>
              <h2 className="text-5xl md:text-7xl text-white font-black font-headline uppercase leading-none tracking-tighter italic">
                EMPOWERING <span className="text-[#0145F2] not-italic">PROGRESS.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            {[
              {
                title: 'Infrastructure & Nation Building',
                subtitle: 'Core frameworks for mega projects',
                desc: 'Every element must work in harmony for large scale infrastructure. At SEL Tiger, our TMT bars and structural steel form the strong framework of bridges, airports, and metro stations. In challenging marine or harsh environments, our corrosion-resistant stainless steel rebars ensure lasting strength for generations. And because safety matters most, our certified crash barriers protect lives on highways across the nation.',
                img: 'https://test.shyammetalics.com/wp-content/uploads/2025/02/banner-1.png',
                tags: ['Bridges', 'Metros', 'Airports']
              },
              {
                title: 'Industrial & Commercial',
                subtitle: 'Durability at scale',
                desc: "In today's fast-paced commercial world, efficiency and durability are non-negotiable. Every modern factory or skyscraper starts with a strong framework of our structural steel and reinforced foundations built with SEL Tiger TMT bars. Spanning industrial sheds, our reliable roofing sheets, often paired with high-performance foils deliver both protection and energy efficiency.",
                img: 'https://shyammetalics.com/static/media/image4.dfb2ff17d07c124733ff.webp',
                tags: ['Factories', 'Skyscrapers', 'Warehouses']
              },
              {
                title: 'Residential Construction',
                subtitle: 'Safe and lasting homes',
                desc: "Building a safe and lasting home calls for a holistic approach. At SEL Tiger, our earthquake-resistant TMT bars form the backbone of houses and apartment complexes, ensuring strength and security. Structural steel allows for innovative architecture and spacious living making our modern designs come alive.Protection from the elements is guaranteed by our durable roofing sheets perfect for main roofs, carports, and ancillary structures. At the same time, our high-performance foils provide under-roof insulation to keep interiors cooler.",
                img: 'https://shyammetalics.com/static/media/Picture%207,%202022%20(Pakuria%20Plant)-min.dffa4630c6aa59fcabbb.webp',
                tags: ['Homes', 'Townships', 'Apartments']
              }
            ].map((sector, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.2}>
                <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center bg-white/5 border border-white/10 rounded-[64px] overflow-hidden p-8 md:p-16 hover:bg-white/[0.07] transition-all group`}>
                  <div className="lg:w-1/2 space-y-8">
                    <div className="space-y-4">
                      <span className="text-[#0145F2] font-black text-[10px] uppercase tracking-[0.4em]">{sector.subtitle}</span>
                      <h3 className="text-4xl md:text-5xl text-white font-black font-headline uppercase leading-none italic">{sector.title}</h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium italic italic">
                      {sector.desc}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {sector.tags.map(tag => (
                        <span key={tag} className="px-6 py-2 rounded-full border-1 border-white text-[10px] text-blue-600 font-black uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/2 aspect-video rounded-[40px] overflow-hidden relative">
                    <img src={sector.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt={sector.title} />
                    <div className="absolute inset-0 bg-[#0145F2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PERSONA FEATURE GRID */}
      <section className="py-24  border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="mb-20">
              <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em] mb-4 block">Engineered for You</span>
              <h2 className="text-7xl font-black font-headline uppercase leading-none tracking-tighter italic">
                CRAFTED FOR THE <br /> <span className="text-[#0145F2] not-italic">VISIONARIES.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative group">
            <div className="flex gap-6 overflow-hidden pb-2">
              {visionariesData.slice(visionaryIndex, visionaryIndex + 3).map((item, i) => (
                <motion.div
                  key={`${visionaryIndex}-${i}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-1 min-w-[30%] aspect-[3/4] rounded-[40px] overflow-hidden relative group cursor-pointer border border-slate-100"
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={item.label}
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-8 mt-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border-2 border-slate-400 flex items-center justify-center text-slate-400 hover:border-[#0145F2] hover:text-[#0145F2] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <div className="flex gap-3">
                {visionariesData.slice(0, visionariesData.length - 2).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setVisionaryIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === visionaryIndex ? 'bg-[#0145F2] w-8' : 'bg-slate-200 w-2.5'}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border-2 border-slate-400 flex items-center justify-center text-slate-400 hover:border-[#0145F2] hover:text-[#0145F2] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className='-mt-10'>
        <WaveCanvas height={200} flip={false} intensity={1.5} />
      </div>


      {/* 6. TMT BARS DEEP DIVE */}
      <section className="py-24 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-[#0145F2]/10 border border-[#0145F2]/20 px-6 py-2 rounded-full">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0145F2]">Flagship Product</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black font-headline uppercase leading-none tracking-tighter italic">
                  TMT BARS: <br /> <span className="text-[#0145F2] not-italic">DESH KI DAHAAD.</span>
                </h2>
                <div className="space-y-6 text-slate-600 text-sm font-medium leading-relaxed italic">
                  <p>
                    SEL Tiger TMT Bars, the flagship product of Shyam Metalics, stand as a benchmark in India's steel industry, embodying Strength, Elasticity, and Longevity. Manufactured through a fully integrated Ore-to-Metal process and advanced German Thermex® technology, these FE 550D grade TMT bars deliver exceptional strength, ductility, and resilience. The integrated route ensures chemical purity, microstructural uniformity, and consistent performance, making SEL Tiger TMT Bars the preferred choice for homes, high-rises, bridges, metros, and industrial projects across India.
                    Engineered for excellence, every bar undergoes a three-stage thermo-mechanical process Quenching, Self-Tempering, and Atmospheric Cooling to achieve a tough martensitic surface and a ductile ferrite-pearlite core. The proprietary "Tiger Bond" rib design ensures maximum bonding with concrete, superior load transfer, and enhanced earthquake resistance. With alloying elements like Cu, Cr, and Ni for corrosion protection, low carbon for weldability, and fire resistance up to 600 °C, SEL Tiger TMT Bars offer complete reliability and longevity under all conditions.
                    Produced in ISO-, BIS-, and GreenPro-certified facilities with Mill Test Certificates for traceability, SEL Tiger TMT Bars are backed by a strong dealer network and innovations like Tiger Stirrups and Coil TMT-offering a complete, future-ready reinforcement ecosystem. SEL Tiger TMT Bars-the strength that builds the nation.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white p-12 rounded-[48px] shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black font-headline uppercase mb-10 tracking-tight italic">Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-100">
                        <th className="py-6 text-[10px] font-black uppercase tracking-widest text-[#0145F2]">Property</th>
                        <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">SEL Tiger TMT 550D</th>
                        <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Standard Fe 500</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-bold">
                      {[
                        { prop: 'Yield Strength (MPa)', tiger: '≥ 550', std: '≥ 500' },
                        { prop: 'Ultimate Tensile Strength (MPa)', tiger: '≥ 600', std: '≥ 565' },
                        { prop: 'Elongation (%)', tiger: '≥ 14.5 (D-grade)', std: '~12' },
                        { prop: 'UTS/YS Ratio', tiger: '≥ 1.08', std: '~1.05' },
                        { prop: 'Carbon Content (%)', tiger: '≤ 0.25', std: '≤ 0.30' }
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                          <td className="py-6 text-slate-900">{row.prop}</td>
                          <td className="py-6 text-[#0145F2] font-black italic">{row.tiger}</td>
                          <td className="py-6 text-slate-400">{row.std}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Applications Grid */}
          <h2 className='text-5xl font-black font-headline uppercase text-blue-600 text-center pb-10 italic'>Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Residential', icon: 'home', desc: 'Single-family homes, apartments, and high-rise buildings.' },
              { title: 'Commercial', icon: 'business', desc: 'Office towers, malls, hospitals, and educational institutions.' },
              { title: 'Industrial', icon: 'factory', desc: 'Warehouses and plant structures requiring heavy load-bearing.' },
              { title: 'Infrastructure', icon: 'railway_alert', desc: 'Bridges, metros, railways, and national highways.' }
            ].map((app, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-slate-50 p-10 rounded-[32px] border-2 border-slate-900 hover:border-[#0145F2] transition-all group">
                  <span className="material-symbols-outlined text-[#0145F2] text-3xl mb-6 group-hover:scale-110 transition-transform">{app.icon}</span>
                  <h4 className="text-xl font-black font-headline uppercase mb-4 italic">{app.title} Projects</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed italic">{app.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WaveCanvas height={150} flip={false} intensity={1.5} />

      {/* 7. USP MOSAIC */}
      <section className="pt-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em] mb-4 block">Engineered for Excellence</span>
              <h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none tracking-tighter italic">
                USP OF <span className="text-[#0145F2] not-italic">SEL TIGER TMT.</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: '550D Grade Superiority', desc: 'High yield strength (≥550 MPa) with excellent ductility for maximum safety.' },
              { title: 'Ore-to-Metal Manufacturing', desc: '100% integrated process guarantees consistent purity and precise chemistry.' },
              { title: 'German Thermex® Technology', desc: 'Advanced quenching creates a tough surface and a ductile inner core.' },
              { title: '"Tiger Bond" Rib Design', desc: 'CNC-engineered ribs provide superior bonding with concrete for stability.' },
              { title: 'Seismic Resistance', desc: 'High UTS/YS ratio makes structures safer during intense seismic activity.' },
              { title: 'Corrosion Resistance', desc: 'Alloyed with Cu, Cr, and Ni for long-term protection in humid environments.' },
              { title: 'Fire Resistance', desc: 'Maintains structural integrity at high temperatures up to 600°C.' },
              { title: 'Excellent Weldability', desc: 'Low carbon content ensures easy fabrication without compromising strength.' },
              { title: 'Stringent Quality Control', desc: 'BIS, ISO, and GreenPro-certified with Mill Test Certificates for every batch.' },
              { title: 'Eco-Friendly & Sustainable', desc: 'GreenPro-certified product supporting LEED and IGBC green building ratings.' },
              { title: 'Complete Reinforcement', desc: 'Available as Stirrups and Coil TMT for zero-defect automated fabrication.' },
              { title: 'Nationwide Reach', desc: 'Backed by a strong dealer network and captive logistics for timely delivery.' }
            ].map((usp, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/5 border-4 border-slate-900 p-8 rounded-[32px] h-full hover:border-[#0145F2] hover:bg-blue-300 transition-all group">
                  <span className="text-[#0145F2] font-black italic text-sm mb-4 block group-hover:translate-x-2 transition-transform">0{i + 1}.</span>
                  <h4 className="text-lg font-black font-headline uppercase mb-4 italic tracking-tight">{usp.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed italic">{usp.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. TMT CALCULATOR */}
      <section className="pt-26 pb-20 bg-[#F8FAFC] text-slate-900 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[64px] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-[#0145F2] p-9 text-white flex flex-col justify-between">
              <div className="space-y-8">
                <span className="font-black text-[10px] uppercase tracking-[0.5em] opacity-60">Smart Estimation</span>
                <h3 className="text-5xl font-black font-headline uppercase leading-none tracking-tighter italic">
                  TMT BAR <br /> <span className="text-white not-italic">CALCULATOR.</span>
                </h3>
                <p className="text-white/70 font-medium italic italic">
                  Get a quick estimate of your TMT rebar requirements based on your building scale and location.
                </p>
              </div>
              <div className="pt-12 border-t border-white/10">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-50 mb-4">Note</p>
                <p className="text-xs font-bold leading-relaxed opacity-70 italic italic">
                  Select the nearest city if your specific location is not listed. G+1 counts as 2 floors.
                </p>
              </div>
            </div>

            <div className="lg:w-3/5 p-9">
              <div className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[12px] font-black uppercase tracking-widest text-[#0145F2] pl-2">Type of Building</label>
                    <select
                      value={calcData.bType}
                      onChange={(e) => setCalcData({ ...calcData, bType: e.target.value })}
                      className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 py-4 px-2 font-bold focus:border-[#0145F2] outline-none transition-colors"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[12px] font-black uppercase tracking-widest text-[#0145F2] pl-2">State</label>
                    <select
                      value={calcData.state}
                      onChange={(e) => setCalcData({ ...calcData, state: e.target.value })}
                      className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 py-4 px-2 font-bold focus:border-[#0145F2] outline-none transition-colors"
                    >
                      {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[12px] font-black uppercase tracking-widest text-[#0145F2] pl-2">No. of Floors</label>
                    <select
                      value={calcData.floors}
                      onChange={(e) => setCalcData({ ...calcData, floors: e.target.value })}
                      className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 py-4 px-2 font-bold focus:border-[#0145F2] outline-none transition-colors"
                    >
                      {[...Array(20)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} Floor{i > 0 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[12px] font-black uppercase tracking-widest text-[#0145F2] pl-2">Area per Floor (SQ. M)</label>
                    <input
                      type="number"
                      value={calcData.area}
                      onChange={(e) => setCalcData({ ...calcData, area: e.target.value })}
                      placeholder="e.g. 100"
                      className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 py-4 px-2 font-bold focus:border-[#0145F2] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-1 space-y-4">
                  <button
                    onClick={handleCalculate}
                    type="button"
                    className="w-full py-5 bg-[#0145F2] text-white font-black text-xs uppercase tracking-widest rounded-3xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    CALCULATE REQUIREMENT
                  </button>

                  {calcResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-8 bg-blue-50 rounded-3xl border-2 border-dashed border-[#0145F2]/30 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0145F2] mb-1">Estimated Requirement</p>
                        <h4 className="text-4xl font-black font-headline uppercase leading-none italic">
                          {calcResult} <span className="text-sm not-italic opacity-50">Metric Tons</span>
                        </h4>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl">
                        <span className="material-symbols-outlined text-[#0145F2] text-3xl">construction</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveCanvas height={150} flip={false} intensity={1.5} />

      {/* 9. STRUCTURAL STEEL SECTION */}
      <section className="py-32 bg-[#0A1628] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <AnimatedSection direction="left">
              <div className="aspect-[16/10] rounded-[64px] overflow-hidden group relative">
                <img src="https://images.unsplash.com/photo-1541888941259-79974df19244?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt="Structural Steel" />
                <div className="absolute inset-0 bg-[#0145F2]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-8">
                <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em]">The Infrastructure Backbone</span>
                <h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none tracking-tighter italic">
                  FORGING <span className="text-[#0145F2] not-italic">ENDURANCE.</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed font-medium italic">
                  SEL Tiger Structural Steel is the trusted framework behind India’s most ambitious infrastructure. Engineered with precision, every beam delivers uniform quality and structural reliability.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    'High Structural Strength',
                    'Precision Dimensional Accuracy',
                    'Excellent Weldability & Formability',
                    'Superior Surface Finish'
                  ].map(feature => (
                    <div key={feature} className="flex items-center gap-4 text-white font-bold italic">
                      <span className="w-2 h-2 bg-[#0145F2] rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: 'Factories', icon: 'precision_manufacturing' },
              { title: 'Bridges', icon: 'bridge' },
              { title: 'Airports', icon: 'flight_takeoff' },
              { title: 'Refineries', icon: 'plumbing' },
              { title: 'Stadiums', icon: 'stadium' }
            ].map((app, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[32px] text-center hover:bg-[#0145F2] transition-all group">
                <span className="material-symbols-outlined text-[#0145F2] text-3xl mb-4 group-hover:text-white transition-colors">{app.icon}</span>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white/80">{app.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WIRE ROD SECTION */}
      <section className="py-32 bg-slate-900 border-t border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em] mb-4 block">Engineered Strands</span>
                <h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none tracking-tighter italic">
                  STRENGTH WOVEN <br /> <span className="text-[#0145F2] not-italic">INTO EVERY STRAND.</span>
                </h2>
              </div>
              <p className="text-zinc-400 font-medium italic max-w-sm border-l-2 border-[#0145F2] pl-8">
                In critical applications like suspension bridge cables, there is no room for error. SEL Tiger Wire Rod delivers zero-defect reliability.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 overflow-hidden rounded-[48px] border border-white/10 bg-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-[#0145F2]">Sector</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-white">Application</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-zinc-400">Function</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-bold">
                  {[
                    { sector: 'Construction', app: 'Pre-stressed Concrete', desc: 'High-tensile reinforcement wires.' },
                    { sector: 'Utilities', app: 'Electrical Wiring', desc: 'Conductors for power distribution.' },
                    { sector: 'Agriculture', app: 'Vineyard Trellises', desc: 'Support structures for high-yield crops.' },
                    { sector: 'Hardware', app: 'Fasteners & Nails', desc: 'Raw material for high-stress bolts.' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                      <td className="p-8 text-[#0145F2] italic">{row.sector}</td>
                      <td className="p-8 text-white italic">{row.app}</td>
                      <td className="p-8 text-zinc-400 font-medium italic">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:col-span-4 space-y-6">
              {[
                { title: 'High Tensile Strength', desc: 'Exceptional load-bearing capacity for safety.' },
                { title: 'Exceptional Ductility', desc: 'Efficient drawing into finer wires without breakage.' },
                { title: 'Flawless Surface', desc: 'Ensures superior coating adhesion and lifespan.' }
              ].map((feat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[32px] group hover:bg-[#0145F2]/10 transition-all">
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2 group-hover:text-[#0145F2] transition-colors">{feat.title}</h4>
                  <p className="text-zinc-500 text-sm font-medium italic">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. ROOFING SHEETS SECTION */}
      <section className="pt-20 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em]">Tiger Ka Style</span>
                <h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none tracking-tighter italic">
                  LASTING AND <br /> <span className="text-[#0145F2] not-italic">VERSATILE.</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed font-medium italic">
                  Built for India’s diverse climates. From urban homes to rural developments, our roofing sheets combine a clean aesthetic with a 10-year warranty.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {['All-Weather Durability', 'Corrosion Resistance', 'Smart Water Runoff', 'UV Protection'].map(f => (
                    <div key={f} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 italic font-bold text-xs uppercase tracking-tight">
                      <span className="material-symbols-outlined text-[#0145F2] text-sm">verified</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="aspect-square bg-[#0A1628] rounded-[64px] p-12 relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0145F2]/20 to-transparent"></div>
                <img src="https://shyammetalics.com/static/media/roofing-main.png" className="w-full h-full object-contain relative z-10 scale-110 group-hover:scale-100 transition-all duration-1000" alt="Roofing Sheets" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop"} />
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'ROYALE', desc: 'Ultra-premium durability', color: 'bg-orange-500' },
              { name: 'ELITE', desc: 'Premium style & strength', color: 'bg-blue-500' },
              { name: 'AZURE', desc: 'Extra wide Galvalume', color: 'bg-cyan-500' },
              { name: 'ALFA', desc: 'All-weather corrugated', color: 'bg-slate-400' }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-4 group cursor-pointer">
                <div className={`w-24 h-24 rounded-full ${v.color} mx-auto flex items-center justify-center p-1 border-4 border-white shadow-xl group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center text-white font-black text-[10px] tracking-tighter">SEL TIGER</div>
                </div>
                <div>
                  <h4 className="text-xl font-black font-headline uppercase italic">{v.name}</h4>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FOIL & SS REBAR SPLIT */}
      <section className="py-22 ">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-px bg-white/10 rounded-[64px] overflow-hidden border border-white/10">
            {/* Aluminium Foil */}
            <div className="p-16 space-y-12 bg-white transition-colors group">
              <div className="space-y-6">
                <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em]">Kitchen Essentials</span>
                <h3 className="text-4xl md:text-5xl font-black font-headline uppercase leading-none tracking-tighter italic">
                  ALUMINIUM <span className="text-[#0145F2] not-italic">FOIL.</span>
                </h3>
                <p className="text-slate-400  text-lg font-medium italic">
                  Certified food-grade safety and precision crafted for your family's health and kitchen convenience.
                </p>
              </div>
              <ul className="space-y-4">
                {['Hygienic & Non-Toxic', 'Prevents Moisture Loss', 'Optimal Thickness (11-18 Microns)', 'Built-in Metal Cutter'].map(it => (
                  <li key={it} className="flex items-center gap-4 text-slate-900 text-sm font-bold italic">
                    <span className="material-symbols-outlined text-[#0145F2] text-sm">check_circle</span>
                    {it}
                  </li>
                ))}
              </ul>
              <div className="aspect-video rounded-3xl overflow-hidden grayscale h-80 w-120 group-hover:grayscale-0 transition-all duration-700 border border-white/5">
                <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-31168,resizemode-75,msid-103928852/industry/renewables/shyam-metalics-energy-ltd-to-make-aluminium-foil-for-lithium-ion-cell-manufacturing.jpg" className="w-full h-full  object-cover" alt="Aluminium Foil" />
              </div>
            </div>

            {/* SS Rebars */}
            <div className="p-16 space-y-12 transition-colors group">
              <div className="space-y-6">
                <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em]">Coastal Resilience</span>
                <h3 className="text-4xl md:text-5xl text-black font-black font-headline uppercase leading-none tracking-tighter italic">
                  STAINLESS STEEL <span className="text-[#0145F2] not-italic">REBARS.</span>
                </h3>
                <p className="text-slate-400 text-lg font-medium italic italic">
                  A high-performance solution for marine bridges and ports, lasting up to 5 times longer in corrosive environments.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { l: 'Longevity', v: '5X Higher' },
                  { l: 'Resistance', v: 'Anti-Saline' },
                  { l: 'Strength', v: 'Grade SS 650' },
                  { l: 'Origin', v: 'Make In India' }
                ].map(stat => (
                  <div key={stat.l} className="p-6 bg-white/5 rounded-2xl border-2 border-black/10 group-hover:border-[#0145F2]/30 transition-all">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#0145F2] mb-1">{stat.l}</p>
                    <p className="text-lg font-black text-black italic">{stat.v}</p>
                  </div>
                ))}
              </div>
              <div className="aspect-video rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpqzmswKLLhAQBjj57ovi0mxBKY_cFafHZQ&s" className="w-full h-full object-cover" alt="SS Rebars" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveCanvas height={150} flip={true} intensity={1.5} />

      {/* 13. COMMUNITY & TIGER CLAN */}
      <section className="py-24 text-slate-900 overflow-hidden relative">
        {/* Abstract Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0145F2]/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-500/5 blur-[150px] rounded-full"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-8 mb-24">
              <h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none tracking-tighter italic text-slate-900">
                BE A PART OF <span className="text-[#0145F2] not-italic">TIGER CLAN.</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium italic max-w-2xl mx-auto">
                We invite you to partner with one of India's most dynamic and fastest-growing names in the metals and foil industry.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              { level: 'Bronze', color: '#8C5A3C', img: 'brownj_tiger.png', active: true },
              { level: 'Silver', color: '#C0C0C0', img: 'silver_tiger.png', active: true },
              { level: 'Gold', color: '#FFD700', img: 'gold_tiger.png', active: true },
              { level: 'Diamond', color: '#B9F2FF', img: 'diamond_tiger.png', active: true }
            ].map((partner, idx) => (
              <AnimatedSection key={partner.level} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -20 }}
                  className="space-y-8 flex flex-col items-center group cursor-pointer"
                >
                  <div className="relative">
                    {/* Animated Glow Wrapper */}
                    <div className={`absolute -inset-6 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ${partner.active ? 'opacity-20 blur-2xl' : ''}`} style={{ backgroundColor: partner.color }}></div>

                    <div
                      className={`w-30 h-30 md:w-40 md:h-40 rounded-full flex items-center justify-center p-8 relative z-10 
                                  bg-white border-4 transition-all duration-700
                                  ${partner.active ? 'border-[#0145F2] shadow-[0_0_80px_rgba(1,69,242,0.1)]' : 'border-slate-100 group-hover:border-slate-300'}`}
                    >
                      <img
                        src={partner.img}
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                        alt={partner.level}
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-black font-headline uppercase italic text-slate-900 group-hover:text-[#0145F2] transition-colors duration-300">
                      {partner.level} Partner
                    </h4>
                    <div className={`h-1 w-12 mx-auto rounded-full transition-all duration-500 scale-x-0 group-hover:scale-x-100 ${partner.active ? 'scale-x-100 bg-[#0145F2]' : 'bg-slate-300 group-hover:bg-[#0145F2]'}`}></div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Action Buttons */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <button className="px-12 py-6 cursor-pointer bg-[#0145F2] text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-transform">
                BECOME A PARTNER
              </button>
              <button className="px-12 py-6 cursor-pointer bg-white/5 backdrop-blur-xl border-2 border-blue-600 text-blue-600 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all">
                KNOWLEDGE HUB
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 14. CONTACT HUB */}
      <section className="py-16 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-10">
              <div className="space-y-8">
                <span className="text-[#0145F2] font-black text-xs uppercase tracking-[0.5em]">Ready to Build?</span>
                <h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none tracking-tighter italic">
                  GET IN <span className="text-[#0145F2] not-italic">TOUCH.</span>
                </h2>
                <p className="text-zinc-600 text-lg font-medium italic italic">
                  Ready to Build the Future with SEL Tiger? Connect with our technical or sales teams.
                </p>
              </div>

              <div className="space-y-7">
                {[
                  { icon: 'location_on', label: 'Address', detail: 'P-19 Taratala Road, Kolkata-700088' },
                  { icon: 'call', label: 'Phone', detail: '1800 202 2233' },
                  { icon: 'description', label: 'Email', detail: 'sales@shyamgroup.com' },
                  { icon: 'schedule', label: 'Hours', detail: 'Mon - Fri: 09am - 07pm' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-blue-200 flex items-center justify-center border border-white/10 group-hover:bg-[#0145F2] transition-colors">
                      <span className="material-symbols-outlined text-white text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-black uppercase tracking-widest text-[#0145F2] mb-1">{item.label}</p>
                      <p className="text-black text-lg font-black italic tracking-tight">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-300 backdrop-blur-xl p-9 rounded-[64px] border border-white/10 shadow-2xl">
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#0145F2] ml-2">Full Name *</label>
                  <input type="text" className="w-full bg-white/5 border-2 border-blue-600 p-4 rounded-2xl text-black font-medium outline-none focus:border-[#0145F2] transition-colors" placeholder="John Doe" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0145F2] ml-2">Email *</label>
                    <input type="email" className="w-full bg-white/5 border-2 border-blue-600 p-4 rounded-2xl text-black font-medium outline-none focus:border-[#0145F2] transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0145F2] ml-2">Phone</label>
                    <input type="tel" className="w-full bg-white/5 border-2 border-blue-600 p-4 rounded-2xl text-black font-medium outline-none focus:border-[#0145F2] transition-colors" placeholder="+91 0000000000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#0145F2] ml-2">Message *</label>
                  <textarea rows={4} className="w-full bg-white/5 border-2 border-blue-600 p-6 rounded-2xl text-black font-medium outline-none focus:border-[#0145F2] transition-colors" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full py-5 bg-[#0145F2] text-white font-black text-xs uppercase tracking-widest rounded-3xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
                  SUBMIT MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <WaveCanvas height={150} flip={false} intensity={1.5} />
    </div>
  )
}
