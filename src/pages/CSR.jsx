import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

const pillars = [
  {
    id: 'health',
    title: 'Rural Health and Wellness',
    label: 'SEHAT INITIATIVE',
    content: "Our healthcare programs under SEHAT have reached over 18,800 people through mobile clinics, vaccination drives, and sanitation efforts. We organise annual medical and eye camps, offer regular health checkups at our plant, and provide safe drinking water systems. We support emergency and maternity needs in remote regions and run both a free health clinic and a homoeopathy clinic, ensuring accessible care close to where people live.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    icon: 'medical_services'
  },
  {
    id: 'education',
    title: 'Education and Digital Access',
    label: 'DIGITAL EMPOWERMENT',
    content: "Education is a big part of how we give back. We’ve supported over 1,600 students through rural tuition centers, school upgrades, and learning materials. We run a free coaching centre for students from low-income families, a computer training centre in Odisha, and literacy programmes for nearby villages. These initiatives help young people improve their reading skills and learn the digital know-how they need to grow.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    icon: 'school'
  },
  {
    id: 'skills',
    title: 'Skill Development',
    label: 'SKILL INDIA',
    content: "From sewing and computer training to small business development, our Skill India initiative helps community members earn an income, gain confidence, and build a better future for their families. We focus on practical skills that translate directly into employment or entrepreneurship opportunities. Whether it's stitching leading to tailoring work, or computer literacy, each program aims to create lasting economic impact.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtIOUM8RHDnuhfR6S3LcrrOcN4obvXNJrQQ&s",
    icon: 'handyman'
  },
  {
    id: 'environment',
    title: 'Environmental Commitment',
    label: 'SUSTAINABLE FUTURE',
    content: "At Shyam Metalics, environmental responsibility is at the heart of everything we do. We recycle industrial by-products, manage water responsibly, and invest in clean energy. Our plants operate with advanced pollution control technologies, ensuring compliance with the highest environmental standards. Sustainability isn't just our duty; it's our commitment to the generations ahead.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    icon: 'eco'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Sustainability',
    label: 'VILLAGE REVIVAL',
    content: "We work to make our villages cleaner, greener, and better connected. Our projects focus on water conservation through check dams, ponds, and solar-powered irrigation. We also invest in community infrastructure like village sanitation programs, temple restoration, and road repairs that ensure safe, easy travel. These efforts strengthen both livelihood opportunities and environmental resilience.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
    icon: 'construction'
  },
  {
    id: 'sports',
    title: 'Sports and Youth Engagement',
    label: 'FOOTBALL ACADEMY',
    content: "Sports bring people together. Our football team, supported by Shyam SEL & Power Ltd, receives full kits and regular training. Through the SSPL Football Academy, we help young players from rural areas improve their game, stay healthy, and build confidence. Football creates discipline, teamwork, and aspiration. For many players, it opens doors to professional opportunities.",
    img: "https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80&w=1200",
    icon: 'sports_soccer'
  }
];

export default function CSR() {
  return (
    <div className="bg-surface overflow-hidden">

      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 ">

        <div className="max-w-[1440px] mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 ">
            <div className='mb-32 space-y-10'>
              <AnimatedSection>
                <div className="inline-flex items-center mb-10 space-x-2 backdrop-blur px-6 mb-10 py-2 rounded-full border border-[#0145F2] shadow-2xl">
                  <span className="w-2 h-2 bg-[#0145F2] rounded-full animate-pulse"></span>
                  <span className="font-bold text-[10px] uppercase tracking-[0.4em] text-black ">Community & Impact</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h1 className="text-7xl font-black tracking-tighter leading-[0.8] text-black uppercase italic">
                  Our <br /> <span className="text-[#0145F2] not-italic">Responsibility.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="text-xl text-black leading-relaxed max-w-xl font-bold">
                  At Shyam Metalics, responsibility is more than a principle; It’s a promise we live by every day.
                  <span className="text-[#0145F2] font-black"> We grow with the people we serve.</span>
                </p>
              </AnimatedSection>
            </div>


            <AnimatedSection delay={0.6}>
              <div className="grid grid-cols-2 gap-8 pb-20 border-t border-white/10">
                <div>
                  <h4 className="text-4xl font-black text-black italic">200K+</h4>
                  <p className="text-xs uppercase tracking-widest text-[#0145F2] font-black">LIVES IMPACTED</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-black italic">50+</h4>
                  <p className="text-xs uppercase tracking-widest text-[#0145F2] font-black">VILLAGES SUPPORTED</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="right" className="hidden lg:block relative group">
            <div className="absolute -inset-4 bg-[#0145F2]/20 rounded-[48px] blur-3xl group-hover:bg-[#0145F2]/30 transition-all duration-700"></div>
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/4.5]">
              <img
                src="https://media.istockphoto.com/id/1488419015/photo/hands-holding-puzzle-business-problem-solving-concept.jpg?s=612x612&w=0&k=20&c=FAKiIeX0aEV6LGlyv-evP3CO1CMCBX1VFPNbBRDpRUQ="
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                alt="Industrial Social Impact"
              />
            </div>
            {/* Floating Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute -bottom-10 -left-10 glass-card p-10 rounded-[32px] border border-white/10 max-w-sm"
            >
              <p className="text-black text-sm font-bold italic leading-relaxed">
                "At Shyam Metalics, we measure our success not just in tonnes of steel, but in lives transformed and communities empowered."
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* <WaveCanvas height={200} flip={false} intensity={1.5} /> */}

      {/* Philosophy & Mission Section */}
      <section className="py-28 px-6 md:px-12 bg-[#F0F4FF] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <span className="text-[#0145F2] font-black tracking-[0.4em] uppercase text-xs">A Trusted Relationship</span>
              <h2 className="text-7xl font-black font-headline text-slate-900 tracking-tighter uppercase leading-none italic">
                Our <span className="text-[#0145F2]">Philosophy.</span>
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed font-bold">
                At Shyam Metalics, community work isn't a checkbox—it's a relationship built over time. Our philosophy is simple: listen first, act thoughtfully, and stay consistent.
              </p>
              <p className="text-black text-lg leading-relaxed font-medium">
                We don't chase quick fixes. Instead, we work to become a steady, trusted presence. This means understanding real needs and making commitments we can keep. It's about building something sustainable where our involvement creates lasting value.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            <AnimatedSection direction="right">
              <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-slate-100 group hover:border-[#0145F2]/20 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-[#0145F2]/5 flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-[#0145F2] text-3xl">rocket_launch</span>
                </div>
                <h4 className="text-3xl font-black font-headline uppercase mb-4 text-slate-800 italic">Our Mission</h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  We believe in uplifting communities because humanity is our greatest responsibility. Every initiative is thoughtfully planned and aligned with local priorities to ensure meaningful outcomes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <div className="h-40 rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Community 1" />
                </div>
                <div className="h-40 rounded-3xl overflow-hidden shadow-xl bg-slate-900 flex items-center justify-center">
                  <p className="text-[#0145F2] font-black text-4xl">500+</p>
                  <p className="text-white text-[10px] absolute translate-y-10 uppercase tracking-widest font-black">PROJECTS</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.6} />

      {/* Modular CSR Pillars Stage */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="max-w-[1440px] mx-auto space-y-40">
          {pillars.map((item, index) => (
            <div key={item.id} className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
              <AnimatedSection direction={index % 2 === 0 ? 'left' : 'right'} className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#0145F2]/10 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="relative aspect-[16/10] rounded-[48px] overflow-hidden border border-white/5 shadow-2xl">
                    <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt={item.title} />
                  </div>
                  {/* Floating Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className={`absolute bottom-10 ${index % 2 === 0 ? '-right-10' : '-left-10'} w-16 h-16 bg-[#0145F2] text-white rounded-full flex items-center justify-center shadow-2xl z-20`}
                  >
                    <span className="material-symbols-outlined  text-3xl">add</span>
                  </motion.button>
                </div>
              </AnimatedSection>

              <AnimatedSection direction={index % 2 === 0 ? 'right' : 'left'} className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="space-y-8">
                  <span className="text-[#0145F2] font-black tracking-[0.5em] uppercase text-xs">{item.label}</span>
                  <h2 className="text-4xl md:text-5xl font-black font-headline text-black tracking-tighter uppercase italic leading-none">
                    {item.title.split(' ')[0]} <br /> <span className="text-[#0145F2] not-italic">{item.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
                    {item.content}
                  </p>
                  <div className="pt-8 flex flex-wrap gap-6">
                    <button className="px-10 py-4 bg-blue-300 border-2 text-center border-blue-400 text-white font-black uppercase tracking-widest text-[12px] cursor-pointer rounded-2xl hover:bg-[#0145F2] transition-all group">
                      READ MORE
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.5} />

      {/* Expanded Focus Areas & Specific Projects */}
      <section className="py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-32">
              <span className="text-[#0145F2] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Sustainable Growth</span>
              <h2 className="text-5xl md:text-7xl font-black font-headline text-slate-900 tracking-tighter uppercase leading-none italic">
                CSR <span className="text-[#0145F2]">FOCUS.</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tag: 'Project Kalpavriksha',
                title: 'Education & Digital',
                desc: 'Digital Education Hubs and coding literacy programs in underserved rural regions.',
                img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600"
              },
              {
                tag: 'Project Uday',
                title: 'Skill & Livelihood',
                desc: 'Empowering local youth and women through entrepreneurship and small business training.',
                img: "https://www.yuvaparivartan.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-03-07-at-2.11.43-PM.jpg"
              },
              {
                tag: 'Project Sehat',
                title: 'Health & Wellness',
                desc: 'Mobile clinics, maternal health support, and specialized camps for rural families.',
                img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=600"
              },
            ].map((proj) => (
              <StaggerItem key={proj.tag}>
                <div className="group bg-slate-50 p-8 rounded-[40px] border border-slate-200 hover:bg-[#0145F2] transition-all duration-700 h-full flex flex-col justify-between overflow-hidden relative">
                  <div className="space-y-6">
                    <span className="px-4 py-2 bg-[#0145F2]/10 text-[#0145F2] text-[10px] font-black uppercase tracking-widest rounded-full group-hover:bg-white/20 group-hover:text-white">
                      {proj.tag}
                    </span>
                    <h3 className="text-2xl pt-4 font-black text-black font-headline uppercase group-hover:text-white transition-colors">{proj.title}</h3>
                    <p className="text-slate-500 font-medium group-hover:text-white/80 transition-colors">{proj.desc}</p>
                  </div>
                  <div className="mt-8 rounded-3xl overflow-hidden h-40">
                    <img src={proj.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={proj.title} />
                  </div>
                  {/* Hover Accent */}
                  <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[10rem] text-[#0145F2]/5 group-hover:text-white/5 transition-colors">circle</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Football Academy Special Stage */}
      {/* <section className="bg-slate-900 py-40 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0145F2]/10 blur-[150px] rounded-full translate-y-[-20%] translate-x-[20%]"></div>
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-full bg-[#0145F2] flex items-center justify-center p-3">
                <span className="material-symbols-outlined text-white text-3xl">sports_soccer</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black font-headline uppercase text-white tracking-tighter leading-none italic">
                Shyam Metalics <br /> <span className="text-[#0145F2] not-italic">Football Academy.</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed italic">
                "Sports bring people together and give young people a chance to grow."
              </p>
              <div className="pt-8">
                <button className="px-16 py-8 bg-[#0145F2] text-white font-black uppercase tracking-[0.4em] text-xs rounded-full shadow-[0_20px_50px_rgba(1,69,242,0.3)] hover:scale-105 active:scale-95 transition-all">
                  LEARN SOCIAL IMPACT
                </button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4 pt-12">
                <img className="rounded-[40px] h-72 w-full object-cover shadow-2xl border border-white/5 grayscale" src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=600" alt="Football 1" />
                <div className="bg-[#0145F2] p-8 rounded-[40px] shadow-2xl text-center">
                  <p className="text-white text-3xl font-black italic">1,600+</p>
                  <p className="text-white/70 text-[9px] uppercase tracking-widest font-black">STUDENTS SUPPORTED</p>
                </div>
              </div>
              <div className="space-y-4">
                <img className="rounded-[40px] h-56 w-full object-cover shadow-2xl border border-white/5" src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80&w=600" alt="Football 2" />
                <img className="rounded-[40px] h-72 w-full object-cover shadow-2xl border border-white/5 grayscale saturate-50" src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=600" alt="Football 3" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* FINAL CSR CTA */}
      <section className="bg-white py-20 text-center relative px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-black font-headline uppercase tracking-tighter leading-none italic text-slate-900">
              EMPOWERING LIVES <br /> <span className="text-[#0145F2]">BEYOND BUSINESS.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
              We believe in uplifting communities through education, healthcare, and skill development. Because humanity is our greatest responsibility."
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <button className="px-12 py-6 bg-slate-900 cursor-pointer text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-[#0145F2] transition-colors shadow-2xl">
                GET INVOLVED
              </button>
              <button className="px-12 py-6 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest text-[10px] rounded-2xl transition-colors">
                DOWNLOAD ANNUAL CSR REPORT
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <WaveCanvas height={200} flip={false} intensity={1.5} />

    </div>
  )
}
