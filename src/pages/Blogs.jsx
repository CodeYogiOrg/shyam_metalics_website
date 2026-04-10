import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

const BLOGS = [
  {
    id: 1,
    category: 'Safety',
    date: '1 April 2026',
    author: 'Shyam Metalics',
    title: 'How Steel Crash Barriers Reduce Fatal Accidents',
    excerpt: 'Road safety is now a top concern because traffic volumes continue to increase on expressways, highways, and urban roadways. Despite advancements in technology for vehicles and tighter traffic regulations, there are still accidents due to human error, the speed of traffic, and unpredictable road conditions.',
    img: 'https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: 2,
    category: 'Technical',
    date: '1 April 2026',
    author: 'Shyam Metalics',
    title: 'Key Properties to Look for in High-Quality Steel Billets',
    excerpt: 'Steel billets are the base of a myriad of steel products that are used in automotive, construction, or industrial processes. They range from TMT Bars and Wire Rods to structural parts. The performance of your final item is determined by the quality of the steel billet that is used to make it.',
    img: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800',
    isFeatured: false
  },
  {
    id: 3,
    category: 'Sustainability',
    date: '1 April 2026',
    author: 'Shyam Metalics',
    title: 'Energy Consumption in Steel Plants: Challenges and Solutions',
    excerpt: "It is usually called the backbone of modern infrastructure, and it's also one of the industries that consumes the most energy worldwide. From the processing of iron ore to the finished steel products, each stage requires a significant amount of energy.",
    img: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800',
    isFeatured: false
  },
  {
    id: 4,
    category: 'Infrastructure',
    date: '1 April 2026',
    author: 'Shyam Metalics',
    title: 'Types of Highway Crash Barriers & Their Applications',
    excerpt: 'Safety on the road has become the top priority as the number of highways expands and car speeds continue to increase. The most efficient security measures in use on the roads today are the crash barriers on highways.',
    img: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: 5,
    category: 'Industrial',
    date: '1 April 2026',
    author: 'Shyam Metalics',
    title: 'Applications of Aluminium Coils in Packaging and Construction',
    excerpt: 'Aluminium is now among the top adaptable materials in the modern world because of its light properties, durability, strength, and resistance against corrosion.',
    img: 'https://images.unsplash.com/photo-1558444479-c86e105573b2?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: 6,
    category: 'Overview',
    date: '27 March 2026',
    author: 'Shyam Metalics',
    title: 'From Blast Furnace to Finished Steel: A Step-by-Step Overview',
    excerpt: 'From the processing of iron ore to the finished steel products, each stage requires a significant amount of energy and technical precision.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    isFeatured: false
  }
];

const SidebarItem = ({ title, date, index }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="py-6 border-b border-slate-100 group cursor-pointer"
  >
    <p className="text-[9px] font-black uppercase tracking-widest text-[#0145F2] mb-2">{date}</p>
    <h4 className="text-sm font-black font-headline uppercase text-slate-800 leading-tight group-hover:text-[#0145F2] transition-colors">
      {title}
    </h4>
  </motion.div>
);

export default function Blogs() {
  const [page, setPage] = useState(1);
  const featuredPost = BLOGS[0];
  const recentPosts = BLOGS.slice(1, 4);
  const sideFeatured = BLOGS.slice(3, 6);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-40 overflow-hidden relative">
      
      {/* Editorial Hero (Typography based - No Image) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-[#0145F2]/5 px-4 py-2 rounded-full border border-[#0145F2]/10">
                <span className="w-1.5 h-1.5 bg-[#0145F2] rounded-full animate-pulse"></span>
                <span className="text-[#0145F2] font-black text-[9px] uppercase tracking-[0.4em]">Corporate Editorial</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black font-headline tracking-tighter leading-[0.85] text-slate-900 uppercase italic">
                CORPORATE <br /> <span className="text-[#0145F2] not-italic">BLOGS.</span>
              </h1>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="max-w-md pb-4">
              <p className="text-slate-500 font-medium leading-relaxed italic text-lg">
                "Insights into industrial roadmaps, metallurgical excellence, and sustainable transformations driving global growth."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Triple-Column Editorial Hub */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-40 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Column 1: Featured List */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-40 space-y-8">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 border-b border-slate-200 pb-4">Featured Posts</h3>
              <div className="divide-y divide-slate-100">
                {sideFeatured.map((post, i) => (
                  <SidebarItem key={post.id} title={post.title} date={post.date} index={i} />
                ))}
              </div>
              <button className="pt-4 text-[#0145F2] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                SEE ALL FEATURED <span className="material-symbols-outlined text-sm">east</span>
              </button>
            </div>
          </div>

          {/* Column 2: Main Featured Hero Card */}
          <div className="lg:col-span-6">
            <AnimatedSection>
              <div className="group bg-white rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 p-6 hover:shadow-black/10 transition-all duration-700 h-full flex flex-col">
                <div className="relative rounded-[40px] overflow-hidden aspect-[16/10] mb-10 group-hover:shadow-[0_20px_50px_rgba(1,69,242,0.15)] transition-shadow">
                  <img src={featuredPost.img} className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={featuredPost.title} />
                  <div className="absolute top-8 left-8">
                    <span className="bg-[#0145F2] text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-2xl">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="px-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-slate-400 font-black text-[10px] uppercase tracking-widest">
                      <span>{featuredPost.date}</span>
                      <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                      <span>BY {featuredPost.author}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-headline text-slate-900 uppercase italic tracking-tighter leading-tight group-hover:text-[#0145F2] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-500 font-medium leading-relaxed italic text-lg">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div className="pt-10 flex items-center justify-between">
                    <button className="px-10 py-5 bg-[#0145F2] text-white font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-xl hover:scale-105 transition-transform flex items-center gap-4">
                      READ FULL ARTICLE <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </button>
                    <span className="material-symbols-outlined text-[6rem] text-slate-50 absolute -bottom-10 -right-10 pointer-events-none group-hover:text-[#0145F2]/5 transition-colors">
                      newspaper
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Column 3: Recent Posts */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-40 space-y-8">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 border-b border-slate-200 pb-4">Recent Posts</h3>
              <div className="divide-y divide-slate-100">
                {recentPosts.map((post, i) => (
                  <SidebarItem key={post.id} title={post.title} date={post.date} index={i} />
                ))}
              </div>
              <div className="pt-10 p-8 rounded-[32px] bg-slate-900 text-white relative overflow-hidden group">
                 <div className="relative z-10 space-y-4">
                    <p className="text-[#0145F2] font-black text-[9px] uppercase tracking-widest">Our Vision</p>
                    <h4 className="text-xl font-black uppercase italic leading-none">Stay Updated with <br /> Shyam</h4>
                    <input className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-xs placeholder:text-white/30 focus:outline-none" placeholder="Email Address" />
                    <button className="w-full py-4 bg-[#0145F2] text-white font-black uppercase tracking-widest text-[9px] rounded-xl">Subscribe</button>
                 </div>
                 <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[8rem] text-white/5 group-hover:scale-110 transition-transform">mail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32 relative z-10">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((post, i) => (
            <StaggerItem key={post.id}>
              <div className="group bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-xl hover:shadow-black/5 transition-all duration-500 h-full flex flex-col">
                <div className="h-64 overflow-hidden relative">
                   <img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                   <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[#0145F2] text-[8px] font-black uppercase tracking-widest border border-[#0145F2]/10">
                        {post.category}
                      </span>
                   </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                   <div className="space-y-4">
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{post.date}</p>
                      <h3 className="text-xl font-black font-headline uppercase text-slate-900 leading-tight italic group-hover:text-[#0145F2] transition-colors">{post.title}</h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3 italic">{post.excerpt}</p>
                   </div>
                   <button className="mt-8 text-[#0145F2] font-black uppercase tracking-widest text-[10px] flex items-center gap-2 group/btn">
                      READ MORE <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-2 transition-transform">east</span>
                   </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Pagination */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-12 gap-8">
          <button className="flex items-center gap-4 text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-[#0145F2] transition-colors group">
             <span className="material-symbols-outlined text-sm group-hover:-translate-x-2 transition-transform">west</span> PREVIOUS
          </button>
          
          <div className="flex items-center gap-4">
            {[1, 2, '...', 36].map((num, i) => (
              <button 
                key={i}
                className={`w-10 h-10 rounded-full font-black text-[10px] transition-all flex items-center justify-center ${
                  num === 1 ? 'bg-[#0145F2] text-white shadow-xl shadow-[#0145F2]/30' : 'text-slate-400 hover:bg-slate-100'
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-4 text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-[#0145F2] transition-colors group">
             NEXT <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">east</span>
          </button>
        </div>
      </section>

      <div className="absolute bottom-[-1px] left-0 right-0 z-0 overflow-hidden leading-[0]">
        <WaveCanvas height={200} flip={false} intensity={1.2} />
      </div>

      <style jsx>{`
        .font-headline { font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  )
}
