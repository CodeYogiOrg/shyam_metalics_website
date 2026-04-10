import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

const principles = [
  {
    title: 'Operational Integrity',
    desc: 'There are no shortcuts in steel and no shortcuts in how we operate. We remain truthful in the little things, steadfast in the difficult ones, and transparent about what we believe in. It is this daily discipline that keeps our operations robust and credible.',
    image: 'https://shyammetalics.com/static/media/Teamwork%20Keynote%20Presentation%20in%20Yellow%20Blue%20White%20Illustrative%20Style.zip%20-%202.dfb8d04b165c897a3954.webp',
    video: 'https://cdn.pixabay.com/vimeo/305590333/industry-19717.mp4?width=1280&hash=d3d7d0a2f4da1b9d4c1d2e1b8c0a8c0a8c0a8c0a'
  },
  {
    title: 'Manufacturing Excellence',
    desc: 'Producing great steel requires more than equipment; it requires consistency, care, and keen attention to detail. At Shyam Metalics, we concentrate on the basics. Every plant run, every process tweak, and every end product is all about our dedication to doing better today than yesterday.',
    image: 'https://shyammetalics.com/static/media/Ab1.bee3a2329169b4e8d05f_11zon.6cb32ee4982b9e3c77cf.webp'
  },
  {
    title: 'Responsible Innovation',
    desc: 'Some innovations make headlines. Ours builds trust. At Shyam Metalics, we are interested in what really delivers: solutions that enhance productivity, lower their footprint, and enable sustainable growth. It\'s not about getting there first but about creating better and doing it the right way.',
    image: 'https://images.jdmagicbox.com/v2/comp/sambalpur/a2/9999px663.x663.140602080700.f3a2/catalogue/shyam-metalics-and-energy-limited-sambalpur-ho-sambalpur-cement-manufacturers-shzvqsq2ko.jpg'
  },
  {
    title: 'Sustainable Impact',
    desc: 'Growth means nothing if it\'s not responsible at our company. That\'s why we\'re investing in cleaner energy, smarter resource use, and circular processes that reduce waste across our plants. From reusing slag to cutting emissions, we\'re making sure progress doesn\'t come at the planet\'s cost.',
    image: 'https://shyammetalics.com/static/media/sustainble.35f41f38744965c3a3ea.webp'
  }
]

const cafeFeatures = [
  {
    title: 'Nutritious & Balanced Meals',
    desc: 'Daily menus curated with a focus on employee health, energy, and wellbeing.',
    icon: 'restaurant'
  },
  {
    title: 'On-Site Nutritionist Support',
    desc: 'Expert consultations and personalised guidance to help employees make informed nutritional decisions.',
    icon: 'health_and_safety'
  },
  {
    title: 'Work-Ready Café Environment',
    desc: 'A modern, Wi-Fi enabled space ideal for informal meetings, collaboration, and focused work sessions.',
    icon: 'coffee'
  }
]

export default function LifeAtShyam() {
  return (
    <div className="relative pt-32  bg-[#F0F4FF] overflow-hidden min-h-screen">
      {/* Cinematic Hero Background */}
      <div className="absolute top-[82px] left-0 w-full h-[600px] z-0 overflow-hidden">
        <img
          src="/lifeatshyam.jpeg"
          alt="Life at Shyam Background"
          className="w-full h-full object-cover opacity-90 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#F0F4FF]/60 to-[#F0F4FF]"></div>
        <div className="absolute inset-0 bg-[#0145F2]/10 mix-blend-multiply"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 mb-20 md:mb-24">
        <AnimatedSection>
          <div className="">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-[#0145F2] mb-4 block font-bold">People-First Philosophy</span>
            <h1 className="font-headline text-6xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-white uppercase">
              LIFE AT <br /> <span className="text-[#0145F2]">SHYAM.</span>
            </h1>
            <div className="max-w-3xl space-y-3">
              <p className="text-slate-800 text-xl font-bold leading-relaxed">
                At Shyam Metalics, it all starts with our people. Behind every machine and process are individuals who show up with focus, integrity, and a deep sense of responsibility.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                We've built a culture that values contribution over titles and learning over routine. Whether it's an engineer fine-tuning production on the floor or someone streamlining logistics behind the scenes, every role matters, and every person has the space to grow.
              </p>
              <div className="pt-4">
                <span className="inline-flex items-center gap-4 bg-white/80 backdrop-blur px-6 py-3 rounded-2xl border border-[#0145F2]/10 shadow-lg">
                  <span className="w-3 h-3 bg-[#0145F2] rounded-full animate-pulse"></span>
                  <span className="text-[#0145F2] font-black tracking-widest text-xs">20,000+ EMPLOYEES ACROSS PLANTS & OFFICES</span>
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* WAVE 1 (Flipped) */}
      <WaveCanvas height={200} flip={true} intensity={1.5} />

      {/* 2. CORE VALUES ZIGZAG */}
      <section className="bg-slate-900 mt-14 overflow-hidden py-24 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          {principles.map((item, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-40 last:mb-0 ${index % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
              <AnimatedSection direction={index % 2 === 0 ? 'left' : 'right'} className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#0145F2]/20 rounded-[48px] blur-2xl group-hover:bg-[#0145F2]/30 transition-all duration-700"></div>
                  <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                    <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt={item.title} />
                  </div>
                  {/* Floating badge */}
                  <div className={`absolute bottom-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} hidden md:flex w-16 h-16 bg-[#0145F2] rounded-full items-center justify-center border-4 border-slate-900 shadow-2xl z-20`}>
                    <span className="material-symbols-outlined text-white text-3xl">verified</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction={index % 2 === 0 ? 'right' : 'left'} className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="space-y-6">
                  <span className="text-[#0145F2] font-black tracking-[0.4em] uppercase text-[10px]">Principles in action</span>
                  <h2 className="text-4xl md:text-6xl font-black font-headline text-white tracking-tighter uppercase leading-none">
                    {item.title}
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  <div className="pt-4">
                    <button className="flex cursor-pointer items-center gap-4 text-white font-bold tracking-widest text-xs hover:text-[#0145F2] transition-all group">
                      LEARN CORE VALUES
                      <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">east</span>
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* WAVE 2 (Flipped) */}
      <div className="relative h-20 md:h-32  z-20">
        <WaveCanvas height={150} flip={true} intensity={1.5} />
      </div>

      {/* 3. EMPLOYEE CORNER */}
      <section className="bg-[#F0F4FF] pt-32 pb-28 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="text-center mb-24">
              <span className="text-[#0145F2] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Inclusive Culture</span>
              <h2 className="text-5xl md:text-7xl font-black font-headline text-slate-900 tracking-tighter uppercase mb-8">
                EMPLOYEE <span className="text-[#0145F2]">CORNER.</span>
              </h2>
              <p className="text-slate-600 text-xl font-medium max-w-3xl mx-auto leading-relaxed italic">
                "A culture of innovation, collaboration, and success."
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-10">
                <div className="bg-white/80 backdrop-blur p-10 rounded-[40px] border border-[#0145F2]/10 shadow-xl">
                  <h4 className="text-2xl font-black font-headline text-slate-900 uppercase mb-4 tracking-tight">Diversity as Strength</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    At Shyam Metalics, people come first. We’re committed to creating a workplace where every individual feels respected, supported, and inspired to do their best. Diversity isn’t just welcomed, it’s seen as a strength that drives innovation and better decision-making across all levels.
                  </p>
                  <Link to="#" className="mt-8 inline-flex items-center gap-4 text-[#0145F2] font-black tracking-widest text-xs uppercase hover:underline">
                    More Information <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                </div>

                <div className="bg-[#0145F2]/5 backdrop-blur p-10 rounded-[40px] border border-[#0145F2]/10">
                  <h4 className="text-2xl font-black font-headline text-slate-900 uppercase mb-4 tracking-tight">Recognition & Reward</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    We believe great performance deserves recognition. That’s why we celebrate achievements and encourage a culture where excellence is noticed and rewarded. Employee well-being is deeply important to us, and we maintain safe, clean, and efficient spaces.
                  </p>
                  <Link to="#" className="mt-8 inline-flex items-center gap-4 text-[#0145F2] font-black tracking-widest text-xs uppercase hover:underline">
                    More Information <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="space-y-4 pt-12">
                  <img className="rounded-[40px] h-72 w-full object-cover shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJgaFiuM46VmYFVIJwkFu_RpUTuxnwP3kXw&s" alt="Team 1" />
                  <img className="rounded-[40px] h-56 w-full object-cover shadow-2xl" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Team 2" />
                </div>
                <div className="space-y-4">
                  <img className="rounded-[40px] h-56 w-full object-cover shadow-2xl" src="https://shyammetalics.com/static/media/employee3.ff7bb7ef3ab3debc4216.webp" alt="Team 3" />
                  <img className="rounded-[40px] h-72 w-full object-cover shadow-2xl" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Team 4" />
                </div>
                {/* Floating Video Placeholder Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 backdrop-blur rounded-full border border-white/30 flex items-center justify-center p-2 shadow-2xl">
                  <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden flex items-center justify-center group cursor-pointer">
                    <span className="material-symbols-outlined text-white text-5xl group-hover:scale-125 transition-transform">play_circle</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WAVE 3 (Flipped) */}
      {/* <div className="relative h-20 md:h-32 -mt-16 z-20">
        <WaveCanvas height={150} flip={true} intensity={1.8} />
      </div> */}

      {/* 4. CAFE ABOLI SECTION */}
      <section className="bg-slate-900 pt-20 pb-28 text-white relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <AnimatedSection direction="left">
              <div className="rounded-[48px] overflow-hidden aspect-[16/10] shadow-2xl border border-white/10 group">
                <img src="https://shyammetalics.com/static/media/aboli.84616b3f7393e475717e.webp" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-1000" alt="Cafe Aboli" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-6">
                <span className="text-[#0145F2] font-black tracking-[0.3em] uppercase text-xs">Wellness First</span>
                <h2 className="text-5xl md:text-6xl font-black font-headline uppercase tracking-tighter leading-none">
                  CAFE <span className="text-[#0145F2]">ABOLI.</span>
                </h2>
                <p className="text-[#0145F2] font-black tracking-widest text-sm uppercase">Nourishing People Enabling Performance</p>
                <div className="space-y-6 font-medium text-slate-400 text-lg leading-relaxed">
                  <p>Café Aboli is an integral part of our commitment to fostering a positive and high-performing workplace environment. Designed as a multifunctional space, the café offers employees a comfortable setting to unwind, collaborate informally, or continue work in a relaxed ambience.</p>
                  <p>The café serves a thoughtfully curated menu with a focus on balanced and nutritious meals. To further support employee health, we have an in-house certified nutritionist who provides dietary guidance and regular awareness sessions.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cafeFeatures.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 p-10 rounded-[32px] h-full hover:bg-[#0145F2]/10 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-[#0145F2] flex items-center justify-center mb-8 shadow-xl">
                    <span className="material-symbols-outlined text-white text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="text-xl font-black font-headline uppercase mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Nutritionist Section Details */}
          <div className="mt-32 pt-32 border-t border-white/10 grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <h3 className="text-4xl font-black font-headline uppercase tracking-tight">On-Site <span className="text-[#0145F2]">Nutritionist Support.</span></h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  Our on-site nutritionist plays a crucial role in supporting employee health through personalised diet plans, wellness counselling, and periodic health-awareness initiatives.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#0145F2]">check_circle</span>
                    <p className="text-slate-300 font-medium">Tailored nutritional guidance to help employees adopt sustainable healthy habits.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#0145F2]">check_circle</span>
                    <p className="text-slate-300 font-medium">Periodic workshops and awareness sessions are conducted to ensure everyone benefits practical insights.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#0145F2]">check_circle</span>
                    <p className="text-slate-300 font-medium">Approach integrates wellness into everyday workplace routines, fostering better productivity.</p>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-[#0145F2] p-3 rounded-[48px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
                <div className="relative z-10 overflow-hidden rounded-[32px]">
                  <video
                    src="https://shyammetalics.com/static/media/Nutritionist.e9a588142642f2b7c46e.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-[#F0F4FF] pt-12 pb-0 relative overflow-hidden">
        <div className="max-w-[7xl] mx-auto px-6 md:px-12 relative z-10">
          <AnimatedSection>
            <div className=" rounded-t-[80px] p-16 md:p-24 text-center text-white relative overflow-hidden group shadow-[0_-20px_100px_rgba(1,69,242,0.2)]">
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0145F2]/20 blur-[150px] animate-pulse"></div>
              <div className="relative z-10">
                <span className="text-[#0145F2] font-black tracking-[0.5em] uppercase text-xs mb-6 block font-bold">The Journey Starts Here</span>
                <h2 className="text-6xl md:text-8xl font-black text-black font-headline uppercase tracking-tighter leading-none mb-10">
                  COME BUILD <br /> <span className="text-[#0145F2]">WHAT MATTERS.</span>
                </h2>
                <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-16">
                  Be part of a team that values integrity, innovation, and impact on the ground, in the plant, and beyond.
                </p>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-6 px-13 py-6 bg-[#0145F2] text-white font-black uppercase tracking-[0.2em] text-sm rounded-[32px] shadow-[0_20px_50px_rgba(1,69,242,0.3)] hover:scale-105 active:scale-95 transition-all group"
                >
                  EXPLORE OPPORTUNITIES
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">trending_flat</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
