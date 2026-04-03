import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { WaveSection } from '../components/WaveDivider'

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <WaveSection waves={4} className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C3D809]/10 blur-[160px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9AAE07]/5 blur-[140px] rounded-full translate-y-1/3 -translate-x-1/4"></div>
        <div className="max-w-[1440px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="inline-flex items-center space-x-4">
                <span className="w-12 h-[1px] bg-[#C3D809]"></span>
                <span className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant font-bold">JOIN THE LEGACY</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] metallic-text">
                Building the Future Together
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <p className="text-xl text-on-surface/70 leading-relaxed max-w-lg font-light">
                At Shyam Metalics, we forge more than just steel. We forge careers that redefine industrial excellence through innovation and unwavering integrity.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.8}>
              <div className="flex flex-wrap gap-6 pt-4">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-5 molten-gradient text-[#1a1c00] font-bold text-sm tracking-widest uppercase rounded-lg shadow-xl shadow-[#C3D809]/20">
                  Explore Opportunities
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-5 border border-outline-variant/30 text-on-surface font-bold text-sm tracking-widest uppercase hover:bg-surface-container-high transition-all duration-300 rounded-lg">
                  Our Culture
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection direction="right" className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C3D809]/20 to-transparent rounded-2xl"></div>
            <img className="rounded-2xl shadow-2xl object-cover w-full h-[600px] border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" alt="Cinematic wide shot of a modern clean industrial facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjmHhL2k-D0vzDMQ9nzegkaDSyRiZKccs3oQ-BGqWQ77samcb8XefNenIefepp-XwVpLxjc_7uPS7Mh5tacgp3dadBBgx0XalnuuO-tfaNNLxIolOoxR90J5XIhLqLWeZPifD2a2lpIJPw34mVVqyb8LnV_HNYScE6uY4lHkEbgVvqftLZY_j04ydQRrrI-YySNbUV-QRxxcjROdcG7cy6Q30k5Hue9GAgbeEv_wZPEST7Tofl2sbA3knm_RaGhpHe3Sodbnd61a8" />
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="absolute -bottom-8 -left-8 glass-card p-8 rounded-xl border border-white/5 electric-glow max-w-xs">
              <span className="material-symbols-outlined text-[#C3D809] text-4xl mb-4">precision_manufacturing</span>
              <h4 className="font-bold text-lg mb-2">15,000+ Professionals</h4>
              <p className="text-sm text-on-surface/60 font-label">A collective force driving global infrastructure.</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </WaveSection>

      {/* Core Values */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-black tracking-tight mb-6">Built on Values</h2>
                <p className="text-on-surface/60 text-lg">Our DNA is etched in the furnace of industrial grit and corporate ethics.</p>
              </div>
              <div className="font-label text-4xl font-thin text-outline-variant opacity-30 tracking-tighter">01 / VALUES</div>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]" staggerDelay={0.1}>
            <StaggerItem className="md:col-span-8">
              <div className="glass-card rounded-2xl p-12 flex flex-col justify-end relative overflow-hidden group border border-white/5 h-full">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl">verified_user</span>
                </div>
                <h3 className="text-4xl font-black mb-4">Integrity</h3>
                <p className="text-on-surface/60 text-lg max-w-md">Transparency is the core of our operations. We operate with radical honesty at every level of our manufacturing and corporate structure.</p>
              </div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4">
              <div className="bg-[#C3D809] rounded-2xl p-12 flex flex-col justify-between group hover:scale-[0.98] transition-transform h-full">
                <span className="material-symbols-outlined text-[#1a1c00] text-5xl">trending_up</span>
                <div>
                  <h3 className="text-4xl font-black text-[#1a1c00] mb-4">Excellence</h3>
                  <p className="text-[#2a2d00]">Never settling for 'enough'. Pushing the boundaries of metallurgy.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4">
              <div className="bg-[#C3D809]/10 glass-card rounded-2xl p-12 flex flex-col justify-between border border-white/5 h-full">
                <span className="material-symbols-outlined text-[#C3D809] text-5xl">groups</span>
                <div>
                  <h3 className="text-3xl font-black mb-4">People</h3>
                  <p className="text-on-surface/60">Empowering our workforce to lead with autonomy and creativity.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem className="md:col-span-8">
              <div className="bg-surface-container-high rounded-2xl p-12 flex items-center gap-12 group h-full">
                <div className="hidden lg:block w-48 h-32 overflow-hidden rounded-xl">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Industrial professional engineer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxy-5udyLMAGPeXkr-B2OnuRi51gnR3MJ-yRLeLyyc97bdgbh4kgNlNbAYgcKb3KNn6n4wg6xyQmb376poMl3AsJROm98KtFhBwK7ruTXwj1A4r4FXDuG51vdvcgX0w45oQg7a4Envwn2Q2xug-S8BphrFxUx5t8ctPzMepxBabbdpmGrTzKpiz2VSgZC7r5GaB3fKSBBFd2DmLbDe4dRTFk1K6z2weNkEEKon_rtVM4On4ePrWCv9wP8zqerwM6g2MKGv_ZC_8nI" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-2">Social Impact</h3>
                  <p className="text-on-surface/60">Growing together with the communities we serve through education and health initiatives.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Life at Shyam */}
      <WaveSection waves={3} className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img className="rounded-xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Modern collaborative workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFE1WcuuBRgDqngu7JcmS33KSMskxed9wi1kEeP2-JP3RohFo2wKHqlGo63AGdmk86BdIpanqBQwtEd4MlFmPGLDA9HP_nRTAAxXT7yt__ffWRPAeRZH1Wy-KRgcaYMhl2Q2bvRP9G8fbMZ0MdS7k07u3Lo_5OySXsKA2FpPM0YwhFPso66V2wGCvnYbBlCFFBtF9crrVpFvHJ5nawbSMCx6Ep07Jdh2tI_q7kYNviqOovs08COc66pq7A_8WECvSL4rMDRZygSTE" />
                  <img className="rounded-xl h-48 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Diverse group of young professionals" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW2D_TztAjsQabnF1LC5bCu9jQSKm-zhU-AJru55_WFY8pVDi-dbebrMmEdp-f8wm4B6oFyfLXy-wdPblhKkh50AJjO_Yjm09MAMFGju1jZC8vB5a60UFGhFAQl_LKR0S6FgRJj2pnCEAMgCYHngSFue5GCqH4uhRqAU7b_sPP21aHzAj3JhDaOTHuw6h9jdRtOPmsPBxebodgEljPYAulFpgKaCeTAGWPNeKLg1cS5w3E6IHweRWrZcCK28SANFm9ft2o9RiX1ZY" />
                </div>
                <div className="space-y-4">
                  <img className="rounded-xl h-48 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Elegant glass-walled boardroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ20PFKmvQAP_PzLdFPzM9QrsBc23Q87ese4ER4N7SnwGPnmgvr7SXcBjVfxflq4TEhwRCOJXASF1rWB9HyvMN32C9EazZI-GT665umH8Qk7e67h3otNBUrOfwaLUnGe978hrdFZYR2oERKfwItZmouGQP21GKfTbhmh7qrcukKZtfbfC3e9b98sx2dyevISwxYiz1QLNyZ2jwimdZ1_T0t24EnVWWUdovVaPDGbpJNScvBWUIELQTjOpPMJVooIAFOfosGskjcoQ" />
                  <img className="rounded-xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Steel and glass skyscraper at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh1p0EAjwx0P7o1Qv6iFI5YsBy9t2dTrf1TBn_XZWV-Urkwp6JCfVybvskXMPo51CWDiLnYztUoNJb-M9MpRtqY5qoOnquTVDN2YgJBtJn_HIYSsxFXdL0gjVrrc_obSyiJxoDBPTx86rAGC_o9TDVp3Gt4RegluzFH3t1m4QCCl7HqvIrhNunX5NrvZ1z8QeBKNOL95Tnmk4IhWiqdFYYvHR76NPmub8if-CkorSAYlqww3lUwIM4tiTRIo08eLHUDfiWQkSRkBM" />
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="space-y-12">
              <h2 className="text-6xl font-black tracking-tight leading-tight">Life Inside the <span className="text-[#C3D809]">Powerhouse</span></h2>
              <p className="text-lg text-on-surface/60 leading-relaxed">We offer more than just a job. We offer a high-performance ecosystem where talent meets technology.</p>
              <div className="space-y-6">
                {[
                  { icon: 'health_and_safety', title: 'Holistic Wellness', desc: 'Comprehensive healthcare, mental health support, and fitness stipends.' },
                  { icon: 'school', title: 'Constant Learning', desc: 'Global certification programs and continuous leadership training.' },
                  { icon: 'flight', title: 'Global Mobility', desc: 'Opportunities to work across international business units and joint ventures.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-6 p-6 rounded-xl hover:bg-surface-container-low transition-colors group">
                    <div className="w-14 h-14 rounded-lg bg-[#C3D809]/10 flex items-center justify-center text-[#C3D809] shrink-0 group-hover:bg-[#C3D809] group-hover:text-[#1a1c00] transition-all">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-sm text-on-surface/50 font-label">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </WaveSection>

      {/* Open Roles */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C3D809]/10 blur-[120px] rounded-full translate-y-1/2"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
              <h2 className="text-5xl font-black tracking-tight">Open Opportunities</h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { dept: 'Engineering', loc: 'Kolkata, India', title: 'Senior Metallurgical Engineer', desc: 'Optimize furnace operations and lead innovation in high-grade alloy production.' },
              { dept: 'Technology', loc: 'Remote / Kolkata', title: 'Lead AI Architect (Industry 4.0)', desc: 'Develop predictive maintenance models for our next-gen digital manufacturing twin.' },
              { dept: 'Operations', loc: 'Sambalpur, Odisha', title: 'Plant Operations Manager', desc: 'Scale production efficiency while maintaining world-class safety protocols.' },
              { dept: 'Sustainability', loc: 'New Delhi', title: 'Director of ESG Strategy', desc: 'Drive our mission for zero-carbon steel and circular economy initiatives.' },
            ].map((job) => (
              <StaggerItem key={job.title}>
                <motion.div whileHover={{ y: -5, borderColor: 'rgba(195,216,9,0.3)' }} className="group glass-card p-10 rounded-2xl border border-white/5 transition-all duration-500 cursor-pointer flex justify-between items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#C3D809]/10 text-[#C3D809] text-[10px] font-black uppercase tracking-widest">{job.dept}</span>
                      <span className="text-on-surface/30 text-xs font-label">{job.loc}</span>
                    </div>
                    <h3 className="text-3xl font-bold group-hover:text-[#C3D809] transition-colors">{job.title}</h3>
                    <p className="text-on-surface/60 max-w-md">{job.desc}</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform duration-300">arrow_forward_ios</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection delay={0.2}>
            <div className="mt-20 text-center">
              <motion.button whileHover={{ scale: 1.05, backgroundColor: '#C3D809', color: '#1a1c00' }} whileTap={{ scale: 0.95 }} className="px-12 py-6 border border-[#C3D809] text-[#C3D809] font-black tracking-[0.2em] uppercase transition-all duration-500 rounded-lg">
                View All 42 Open Positions
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 bg-[#1a181a] relative overflow-hidden text-center">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none italic">DON'T JUST WORK.<br /> <span className="text-[#C3D809]">REINVENT AN INDUSTRY.</span></h2>
            <p className="text-xl text-zinc-400 font-light">Join the ranks of the visionary. Apply to Shyam Metalics today.</p>
            <div className="flex justify-center">
              <motion.button whileHover={{ scale: 1.05, backgroundColor: '#C3D809', color: '#1a1c00' }} whileTap={{ scale: 0.95 }} className="group flex items-center gap-6 px-12 py-6 bg-zinc-100 text-zinc-950 font-black tracking-widest uppercase transition-all duration-300">
                Join the Foundry
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">bolt</span>
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
