import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { WaveSection } from '../components/WaveDivider'

export default function Community() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-24 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <span className="font-label text-[#C3D809] font-semibold tracking-[0.3em] uppercase block mb-4">Social Responsibility</span>
          <h1 className="text-7xl md:text-9xl font-headline font-black tracking-tighter leading-none mb-8">
            Empowering <span className="text-[#C3D809] italic">Communities</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            At Shyam Metalics, we believe in growing together with the communities that surround our operations. Our CSR programs focus on education, healthcare, and sustainable livelihoods.
          </p>
        </AnimatedSection>
      </section>

      {/* Impact Stats */}
      <WaveSection waves={3} className="py-24 px-6 md:px-12 bg-surface-container-lowest">
        <StaggerContainer className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { val: '200K+', label: 'Lives Impacted Yearly' },
            { val: '50+', label: 'Villages Supported' },
            { val: '15,000+', label: 'Students Educated' },
            { val: '25+', label: 'Health Camps Annually' },
          ].map((s) => (
            <StaggerItem key={s.label}>
              <div className="group">
                <motion.div whileHover={{ scale: 1.1 }} className="text-5xl md:text-6xl font-black font-headline text-on-surface group-hover:text-[#C3D809] transition-colors mb-2">{s.val}</motion.div>
                <div className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </WaveSection>

      {/* Focus Areas */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-black font-headline tracking-tighter mb-4 uppercase">Focus Areas</h2>
            <div className="h-1 w-24 bg-[#C3D809] mb-16"></div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'school', title: 'Education & Skill Development', desc: 'Operating schools, digital literacy centers, and vocational training programs across 50+ villages in West Bengal and Odisha. Our scholarship programs support underprivileged students pursuing engineering and technical degrees.' },
              { icon: 'medical_services', title: 'Healthcare Access', desc: 'Mobile health clinics provide free medical checkups, vaccinations, and emergency care to remote communities. We also support specialized health camps for eye care, maternal health, and chronic disease management.' },
              { icon: 'forest', title: 'Environment & Sustainability', desc: 'Large-scale afforestation drives, water conservation projects, and clean energy installations in rural areas. Our goal is to plant 1 million trees by 2030 across our operational regions.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div whileHover={{ y: -8 }} className="glass-card p-10 rounded-xl border border-white/5 hover:border-[#C3D809]/30 transition-all duration-500 group h-full">
                  <div className="w-16 h-16 rounded-full bg-[#C3D809]/10 flex items-center justify-center mb-8 border border-[#C3D809]/30 group-hover:bg-[#C3D809] group-hover:text-[#1a1c00] transition-all">
                    <span className="material-symbols-outlined text-3xl text-[#C3D809] group-hover:text-[#1a1c00]">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#C3D809] transition-colors">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Shyam Foundation */}
      <WaveSection waves={3} className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="left">
            <span className="font-label text-[#C3D809] tracking-[0.3em] uppercase text-xs mb-4 block">The Shyam Foundation</span>
            <h2 className="text-5xl font-black font-headline tracking-tighter mb-8">Building Futures,<br /><span className="text-[#C3D809]">Beyond Metal.</span></h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              The Shyam Foundation is our dedicated CSR arm that designs and implements community development programs. From building school infrastructure to providing clean drinking water, the foundation works at the grassroots level.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Women Empowerment', desc: 'Self-help groups and micro-enterprise programs for rural women.' },
                { title: 'Sports & Culture', desc: 'Sponsoring local sports tournaments and preserving cultural heritage.' },
                { title: 'Disaster Relief', desc: 'Rapid response teams and relief distribution during natural calamities.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#C3D809] mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute -inset-10 bg-[#C3D809]/5 blur-[100px] rounded-full"></div>
              <div className="relative aspect-[4/3] bg-surface-container-high rounded-2xl overflow-hidden">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Community development program with children and educators" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUmm0g3BjcZsmOoA0hsAdPPeRJhAMqlVnGMIRs2Q83idgqPHoIJHUV3y9eTFLHCH7WhoW_olWlIwf3FUx8gTZJLVdliOkGAzCy4CrblZ-7XESQY_D0eqq8eUcgiUqgenpUtutqqe-PmgevHZMpppUWiKnGH4bv7z2GLwbnYfA4ugnWfevRODT30U_BsN1m_WMZazWWGJKvHhQjuBuSdRAeRd7CkbDuZe2uOUebIWbuPNEH0PJqA01ewJNq1OLoI-Xi1ik2Bkpf6M8" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </WaveSection>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-surface text-center">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-extrabold text-zinc-100 mb-6">Join Us in Making a Difference</h2>
            <p className="text-zinc-400 text-lg mb-10">Partner with the Shyam Foundation to create lasting impact in communities across India.</p>
            <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(195,216,9,0.3)' }} whileTap={{ scale: 0.95 }} className="bg-[#C3D809] text-[#1a1c00] px-12 py-5 font-bold uppercase tracking-widest">Get Involved</motion.button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
