import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem, FloatingElement } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'
import StatCard from '../components/StatCard'

const journeyEvents = [
  { year: '1991', title: 'The Beginning of a Legacy', desc: 'Founded in West Bengal with a singular vision — to forge India\'s industrial future.' },
  { year: '2002', title: 'The First Spark', desc: 'Commenced sponge iron production, marking our entry into integrated steel manufacturing.' },
  { year: '2013', title: 'Building the Foundation', desc: 'Expanded capacity with new DRI kilns, cementing our position in the iron value chain.' },
  { year: '2014', title: 'Integrating Strength', desc: 'Established captive power generation units, achieving full energy independence.' },
  { year: '2015', title: 'Infrastructure in Motion', desc: 'Direct railway sidings commissioned, reducing logistics latency by 30%.' },
  { year: '2019', title: 'Strengthening the Core', desc: 'Achieved 5 MTPA integrated steel capacity — a landmark milestone.' },
  { year: '2021', title: 'Emerging Stronger', desc: 'Listed on BSE & NSE, raising ₹909 crore through a landmark IPO.' },
  { year: '2022', title: 'Diversifying the Future', desc: 'Entered aluminium foil and stainless steel segments, broadening our portfolio.' },
  { year: '2024', title: 'Leading with Purpose', desc: 'Targeting 13 MTPA capacity with green steel and sustainability at the core.' },
  { year: '2025', title: 'Green Metal Era', desc: 'Pioneering carbon-neutral metallurgical innovations for a sustainable industrial future.' },
]

const businessVerticals = [
  { id: 'iss', label: 'Integrated Steel Solutions', icon: 'precision_manufacturing', desc: 'End-to-end industrial steel capabilities...', image: '/vertical_steel.jpg' },
  { id: 'is', label: 'Iron and Steel', icon: 'construction', desc: 'High-grade building blocks...', image: '/vertical_iron.jpg' },
  { id: 'al', label: 'Aluminium', icon: 'layers', desc: 'Advanced lightweight solutions...', image: '/vertical_alum.jpg' },
  { id: 'eo', label: 'Energy and Others', icon: 'bolt', desc: 'Sustainable power generation...', image: '/vertical_energy.jpg' },
]

const steelSolutions = [
  { name: 'Ferro Alloys', icon: 'diamond' }, { name: 'Pellet', icon: 'grain' }, { name: 'Sponge iron', icon: 'texture' }, { name: 'Pig iron', icon: 'foundation' }, { name: 'Billets', icon: 'view_in_ar' }, { name: 'Crash Barrier', icon: 'security' }, { name: 'TMT Bar', icon: 'reorder' }, { name: 'Coil TMT', icon: 'toll' }, { name: 'Structural steel', icon: 'architecture' }, { name: 'Wire Rod', icon: 'polyline' }, { name: 'Hot Rolled (HR) Coils', icon: 'panorama_fish_eye' }, { name: 'Stainless steel Billets', icon: 'rectangle' }, { name: 'Stainless Steel Rebar', icon: 'view_week' }, { name: 'Stainless steel Wire', icon: 'line_style' }, { name: 'Stainless steel welding wire', icon: 'hardware' }, { name: 'Stainless steel Bright Bar', icon: 'maximize' }, { name: 'Stainless steel Hot Rolled Bar', icon: 'horizontal_rule' }, { name: 'Roofing Sheets', icon: 'roofing' }, { name: 'PPGL Coils & Sheets', icon: 'layers_clear' }, { name: 'Galvalume (GL) Sheets', icon: 'aspect_ratio' }, { name: 'CRFH Steel', icon: 'calendar_view_day' }, { name: 'CRCA Steel', icon: 'splitscreen' },
]

const plantData = [
  { id: 'khp', name: 'KHARAGPUR PLANT', state: 'West Bengal', icon: 'factory', x: 74, y: 58 },
  { id: 'jam', name: 'JAMURIA PLANT', state: 'West Bengal', icon: 'factory', x: 76, y: 56 },
  { id: 'ind', name: 'INDORE PLANT', state: 'Madhya Pradesh', icon: 'factory', x: 45, y: 53 },
  { id: 'sam', name: 'SAMBALPUR PLANT', state: 'Odisha', icon: 'factory', x: 71, y: 64 },
  { id: 'pak', name: 'PAKURIA PLANT', state: 'West Bengal', icon: 'factory', x: 78, y: 54 },
  { id: 'man', name: 'MANGALPUR PLANT', state: 'West Bengal', icon: 'factory', x: 75, y: 57 },
  { id: 'gir', name: 'GIRIDIH PLANT', state: 'Jharkhand', icon: 'factory', x: 73, y: 55 },
]

const testimonialsData = [
  { id: 1, name: 'Ravi Bagaria', rating: 5, text: "Others have already said plenty about their quality of their TMT bars and steel products. One thing that I believe should be talked more about Shyam Metallics in their CSR initiatives. They are truly making a difference in the society along with their industrial growth." },
  { id: 2, name: 'Saurav Agarwal', rating: 5, text: "I was looking for best quality TMT bars, and having heard a lot about Shyam Metalics, so I finally decided to contact them. Comparing the TMT bar price in West Bengal, they are affordable yet premium." },
  { id: 3, name: 'Biplap Kar', rating: 5, text: "We have been working with Shyam Metalics since 2004. We have worked with them on many projects throughout the years. They do an excellent job from start to finish." },
  { id: 4, name: 'Priya Sharma', rating: 5, text: "Shyam Metalics has been our trusted partner for over 5 years. Their commitment to quality and timely delivery has never disappointed us." },
]

const partners = [
  { name: 'GPT Solutions', img: 'https://cdn-icons-png.flaticon.com/128/15467/15467332.png' },
  { name: 'Engineers India Ltd', img: 'https://cdn-icons-png.flaticon.com/128/17696/17696414.png' },
  { name: 'Shapoorji Pallonji', img: 'https://cdn-icons-png.flaticon.com/128/15694/15694901.png' },
  { name: 'BHEL', img: 'https://cdn-icons-png.flaticon.com/128/14022/14022359.png' },
  { name: 'GAIL India', img: 'https://cdn-icons-png.flaticon.com/128/14800/14800057.png' },
  { name: 'GPT Solutions', img: 'https://cdn-icons-png.flaticon.com/128/15467/15467332.png' },
  { name: 'Engineers India Ltd', img: 'https://cdn-icons-png.flaticon.com/128/17696/17696414.png' },
  { name: 'Shapoorji Pallonji', img: 'https://cdn-icons-png.flaticon.com/128/15694/15694901.png' },
  { name: 'BHEL', img: 'https://cdn-icons-png.flaticon.com/128/14022/14022359.png' },
  { name: 'GAIL India', img: 'https://cdn-icons-png.flaticon.com/128/14800/14800057.png' },
  { name: 'GPT Solutions', img: 'https://cdn-icons-png.flaticon.com/128/15467/15467332.png' },
  { name: 'Engineers India Ltd', img: 'https://cdn-icons-png.flaticon.com/128/17696/17696414.png' },
  { name: 'Shapoorji Pallonji', img: 'https://cdn-icons-png.flaticon.com/128/15694/15694901.png' },
  { name: 'BHEL', img: 'https://cdn-icons-png.flaticon.com/128/14022/14022359.png' },
  { name: 'GAIL India', img: 'https://cdn-icons-png.flaticon.com/128/14800/14800057.png' },
]

function ModernTimelineItem({ event, index, isAlternate }) {
  const isOrange = index % 2 !== 0
  const color = isOrange ? '#FF5722' : '#0145F2'
  return (
    <div className="flex-shrink-0 w-[450px] relative px-4 select-none group">
      <div className={`absolute left-1/2 -translate-x-1/2 w-80 ${isAlternate ? 'bottom-[60px]' : 'top-[60px]'}`}>
        <div className={`flex gap-6 items-center ${isAlternate ? 'flex-col-reverse' : 'flex-col'}`}>
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-[12px] flex items-center justify-center bg-white shadow-2xl transition-all duration-700 group-hover:scale-110" style={{ borderColor: color, borderRightColor: 'transparent', borderBottomColor: 'transparent', transform: 'rotate(45deg)' }}>
              <div className="font-black text-3xl font-headline text-on-surface transform -rotate-45">{event.year}</div>
            </div>
          </div>
          <div className="text-center space-y-2 mt-6">
            <h4 className="font-black text-sm uppercase text-[black]">{event.title}</h4>
            <p className="text-[11px] text-on-surface-variant leading-relaxed max-w-[240px] mx-auto font-medium">{event.desc}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-12 h-12 rounded-full border-4 bg-white flex items-center justify-center shadow-lg" style={{ borderColor: color }}><div className="w-6 h-6 rounded-full" style={{ backgroundColor: color }} /></div>
      </div>
    </div>
  )
}

function FootprintSection() {
  const [selectedPlant, setSelectedPlant] = useState(plantData[0])
  const [viewMode, setViewMode] = useState('india')
  return (
    <section className="py-32 bg-surface relative overflow-hidden border-t border-[#0145F2]/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-10">
            <AnimatedSection>
              <span className="font-bold text-xl tracking-[0.3em] uppercase text-[#0145F2] mb-4 block">Our Footprint</span>
              <h2 className="text-5xl md:text-6xl font-black font-headline uppercase tracking-tighter leading-none mb-6">GLOBAL<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#5B8EF7]">PRESENCE</span></h2>
            </AnimatedSection>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-4">
              {plantData.map((plant) => (
                <div key={plant.id} onClick={() => setSelectedPlant(plant)} className={`cursor-pointer p-6 rounded-2xl border transition-all ${selectedPlant.id === plant.id ? 'bg-[#0145F2] text-white' : 'bg-white border-[#0145F2]/10 hover:border-[#0145F2]/40'}`}>
                  <h4 className="font-headline font-black text-xs uppercase tracking-widest">{plant.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="relative glass-card rounded-[40px] border border-[#0145F2]/15 shadow-2xl p-4 aspect-[4/3] overflow-hidden">
              <div className="w-full h-full bg-[#EDF1F5]/50 flex items-center justify-center rounded-[32px]">
                <p className="font-black uppercase tracking-widest text-[#0145F2]">Map View: {viewMode.toUpperCase()}</p>
                <div className="absolute top-8 right-8 flex gap-2"><button onClick={() => setViewMode('india')} className="px-4 py-2 rounded-full bg-[#0145F2] text-white text-[10px] font-black uppercase">India</button><button onClick={() => setViewMode('world')} className="px-4 py-2 rounded-full bg-white border border-[#0145F2]/20 text-[#0145F2] text-[10px] font-black uppercase">World</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AccreditationsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <section className="py-32 bg-surface-container-low border-t border-[#0145F2]/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <span className="font-bold text-xl tracking-[0.3em] uppercase text-[#0145F2] mb-4 block">Recognition</span>
            <h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none mb-8 text-on-surface">ACCREDITATIONS &<br /><span className="text-[#0145F2]">ACHIEVEMENTS</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-4 h-[450px]">
            {[1, 2].map((i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden glass-card border border-[#0145F2]/10 h-full">
                <img src={`https://images.unsplash.com/photo-${i === 1 ? '1523293182086-7651a899d37f' : '1464822759023-fed622ff2c3b'}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CSRSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection className="text-center mb-20"><h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tighter text-on-surface">Building Communities, <span className="text-[#0145F2]">Empowering Lives</span></h2></AnimatedSection>
        <div className="flex flex-col md:flex-row gap-4 h-[600px]">
          {[1, 2, 3, 4].map((i) => (
            <motion.div key={i} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} animate={{ flex: hoveredIndex === i ? 4 : hoveredIndex === null ? 1 : 0.8 }} className="relative rounded-[40px] overflow-hidden glass-card border border-[#0145F2]/10 transition-all cursor-pointer">
              <img src={`https://images.unsplash.com/photo-${i === 1 ? '1488521787991-ed7bbaae773c' : '1593113598332-cd288d649433'}?auto=format&fit=crop&q=80&w=1200`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-32 bg-surface-container-low border-t border-[#0145F2]/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection className="text-center mb-20">
          <span className="font-bold text-xl tracking-[0.3em] uppercase text-[#0145F2] mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tighter text-on-surface">What Our <span className="text-[#0145F2]">Customer Says</span></h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.map((t) => (
            <div key={t.id} className="p-8 md:p-12 glass-card rounded-[40px] border border-[#0145F2]/10 h-full">
              <div className="flex gap-1 mb-6">{[...Array(5)].map((_, i) => (<span key={i} className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>))}</div>
              <p className="text-on-surface-variant italic mb-8">"{t.text}"</p>
              <div className="flex justify-between items-center mt-auto"><span className="font-black font-headline uppercase text-[#0145F2] text-xs">{t.name}</span><Link to="/testimonials" className="text-[#0145F2] font-black text-[10px] uppercase hover:underline">Read More</Link></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhysicsPartnersSection() {
  const [isGravity, setIsGravity] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setIsGravity(true), 4000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <section className="py-32 bg-surface overflow-hidden relative">
      <div className="container mx-auto px-6 text-center mb-16"><h2 className="text-4xl font-black font-headline uppercase text-on-surface tracking-widest">Our Strategic <span className="text-[#0145F2]">Partners</span></h2></div>
      <div className="relative h-[600px] flex items-center justify-center">
        {partners.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isGravity
              ? { x: (Math.random() - 0.5) * 800, y: 250 + Math.random() * 50, rotate: Math.random() * 30, opacity: 1 }
              : { x: Math.cos(i * 0.8) * 200, y: Math.sin(i * 0.8) * 200, rotate: 0, opacity: 1 }
            }
            transition={{ type: 'spring', stiffness: isGravity ? 50 : 30, damping: isGravity ? 10 : 20, duration: 2, delay: i * 0.05 }}
            className="absolute p-4 glass-card bg-white rounded-2xl shadow-xl border border-[#0145F2]/10 flex flex-col items-center gap-2 w-32"
          >
            <img src={p.img} alt={p.name} className="w-12 h-12 object-contain grayscale group-hover:grayscale-0" />
            <p className="text-[8px] font-black uppercase text-on-surface-variant tracking-tighter">{p.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function LatestNewsHomeSection() {
  const news = [
    { title: 'International Women\'s Day Celebration at Jamuria Plant', date: '8th March, 2026', desc: 'On 8th March, the Jamuria Plant came together to celebrate International Women’s Day...' },
    { title: 'Tribute to Dedication at Corporate Head Office', date: '8th March, 2026', desc: 'On the occasion of International Women’s Day, we came together at our Head Office...' },
    { title: 'Impactful Evening at ICC Centenary Session', date: '4th March, 2026', desc: 'With Padma Bhushan Shri Kumar Mangalam Birla, Chairman, Aditya Birla Group...' },
  ]
  return (
    <section className="py-32 bg-surface-container-low border-y border-[#0145F2]/10 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div><span className="font-bold text-[#0145F2] uppercase tracking-[0.3em] block mb-4">News Updates</span><h2 className="text-4xl md:text-6xl font-black font-headline uppercase leading-none">Latest <span className="text-[#0145F2]">News</span></h2><p className="text-on-surface-variant mt-4 font-light">Innovating Today, Leading Tomorrow</p></div>
          <Link to="/news" className="molten-gradient text-white font-black px-10 py-5 rounded-full uppercase tracking-widest text-xs shadow-xl">View All News</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="glass-card p-10 rounded-[40px] border border-[#0145F2]/10 flex flex-col justify-between bg-white h-full group">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#0145F2] block mb-6">• BY Shyam Metalics</span>
                <h3 className="text-2xl font-black font-headline uppercase mb-6 leading-tight group-hover:text-[#0145F2] transition-colors">{item.title}</h3>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link to="/news" className="text-[#0145F2] font-black text-xs uppercase flex items-center gap-2 group-hover:underline">Read More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SharePriceSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 rounded-[48px] border-l-8 border-[#0145F2] bg-white/50 backdrop-blur shadow-2xl relative">
          <div className="absolute top-8 right-12 text-right">
            <span className="text-[10px] font-black uppercase text-[#0145F2] block tracking-widest">Share Price</span>
            <p className="text-on-surface-variant text-[9px] font-bold uppercase mt-1">Last Updated: 04/04/2026, 13:28</p>
          </div>
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 h-48 rounded-3xl overflow-hidden glass-card"><img src="https://images.unsplash.com/photo-1611974717483-9b2572adec4b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-60" /></div>
            <div className="md:col-span-8 grid grid-cols-2 gap-12">
              <div className="space-y-2"><h4 className="text-6xl font-black font-headline tracking-tighter text-on-surface">₹792.65</h4><div className="flex items-center gap-2"><span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full font-black text-[10px] uppercase tracking-widest">NSE</span><span className="text-on-surface-variant text-[10px] font-bold uppercase">LIVE MONITOR</span></div></div>
              <div className="space-y-2"><h4 className="text-6xl font-black font-headline tracking-tighter text-on-surface">₹793.00</h4><div className="flex items-center gap-2"><span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full font-black text-[10px] uppercase tracking-widest">BSE</span><span className="text-on-surface-variant text-[10px] font-bold uppercase">LIVE MONITOR</span></div></div>
            </div>
          </div>
          <p className="mt-12 text-on-surface-variant text-sm font-light max-w-2xl leading-relaxed">Our share monitor allows investors and analysts to track our share price history in the stock exchanges where we are listed.</p>
        </div>
      </div>
    </section>
  )
}

function SubscribeSection() {
  return (
    <section className="py-32 bg-[#0145F2] relative overflow-hidden">
      <div className="absolute inset-0 industrial-mesh opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div><h2 className="text-5xl md:text-7xl font-black font-headline text-white uppercase tracking-tighter mb-8 leading-none">Subscribe to Our<br />News Alerts</h2><p className="text-white/70 font-light text-xl max-w-xl">Join our community of visionaries and stay updated on the latest shifts in the metal and industrial energy landscape.</p></div>
          <div className="space-y-12">
            <div className="relative group"><input type="email" placeholder="Email Id" className="w-full bg-transparent border-b-2 border-white/30 py-6 text-2xl text-white outline-none focus:border-white transition-all uppercase font-medium placeholder:text-white/20" /><button className="absolute right-0 bottom-6 molten-gradient text-white font-black px-12 py-3 rounded uppercase tracking-widest text-xs shadow-xl">Subscribe</button></div>
            <div className="flex justify-between items-center py-6 border-t border-white/10">
              <div className="flex gap-6">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map(s => (<Link key={s} to="#" className="text-white/60 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors">{s}</Link>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-[#EDF1F5]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#0145F2]/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#0145F2]/5 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 industrial-mesh opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <AnimatedSection delay={0.2}><div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high border border-[#0145F2]/20"><span className="w-2 h-2 rounded-full bg-[#0145F2] animate-pulse mr-2"></span><span className="font-label text-xs uppercase tracking-widest font-bold">Global Leader in Metal</span></div></AnimatedSection>
              <AnimatedSection delay={0.4}><h1 className="text-6xl font-black font-headline leading-[1.0] tracking-tighter text-on-surface uppercase">EMPOWERING NATION<br />BUILDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] via-[#5B8EF7] to-[#0145F2]">LEGACIES</span></h1></AnimatedSection>
              <AnimatedSection delay={0.6}><p className="text-xl text-on-surface-variant font-light max-w-xl leading-relaxed">The Strength Behind Tomorrow — a billion-dollar conglomerate redefining industrial excellence.</p></AnimatedSection>
              <div className="flex flex-wrap gap-4 pt-4"><Link to="/iron-and-steel" className="molten-gradient text-white font-bold px-8 py-4 rounded-md shadow-xl uppercase tracking-tight text-xs">EXPLORE PRODUCTS</Link><Link to="/leadership" className="bg-white border border-[#0145F2]/20 text-on-surface font-bold px-8 py-4 rounded-md uppercase tracking-tight text-xs">OUR LEGACY</Link></div>
            </div>
            <FloatingElement className="relative hidden lg:block"><img alt="Steel coil" className="relative z-10 w-full h-[600px]" src="/stell_coil.png" /></FloatingElement>
          </div>
        </div>
      </section>
      <section className="py-24 border-y border-[#0145F2]/10 relative z-10">
        <div className="container mx-auto px-6 md:px-12"><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><StatCard value="12000" label="Workforce strength" type="workforce" suffix="+" /><StatCard value="40" label="Countries Exported" type="export" suffix="+" /><StatCard value="13.5" label="Aggregated Capacity" type="capacity" suffix=" MTPA" /></div></div>
      </section>
      <FootprintSection />
      <AccreditationsSection />
      <CSRSection />
      <TestimonialsSection />
      <PhysicsPartnersSection />
      <LatestNewsHomeSection />
      <SharePriceSection />
      <SubscribeSection />
    </>
  )
}
