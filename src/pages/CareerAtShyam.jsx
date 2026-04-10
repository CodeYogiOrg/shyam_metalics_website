import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

const JOBS = [
  { id: 1, title: "Project / Institutional Sales", location: "East", salary: "Not Disclosed", dept: "Sales" },
  { id: 2, title: "Project Sales", location: "North", salary: "Not Disclosed", dept: "Sales" },
  { id: 3, title: "TMT Sales Head", location: "PAN India", salary: "Not Disclosed", dept: "Sales" },
  { id: 4, title: "TMT Sales (Senior Profile)", location: "PAN India", salary: "Not Disclosed", dept: "Sales" },
  { id: 5, title: "SS TIG / MIG Wire Sales", location: "West", salary: "Not Disclosed", dept: "Sales" },
  { id: 6, title: "SS / Wire Rod Sales", location: "North", salary: "Not Disclosed", dept: "Sales" },
  { id: 7, title: "Structural Business Head", location: "PAN India", salary: "Not Disclosed", dept: "Leadership" },
  { id: 8, title: "Leadership Profile – Sales", location: "PAN India", salary: "Not Disclosed", dept: "Leadership" },
  { id: 9, title: "Brand Manager", location: "Head Office", salary: "Not Disclosed", dept: "Marketing" },
  { id: 10, title: "Finance Head", location: "Jamuria", salary: "Not Disclosed", dept: "Finance" },
  { id: 11, title: "Accounts & Commercial (Plant Fund Control – Inter CA+)", location: "Plant Location", salary: "Not Disclosed", dept: "Finance" },
  { id: 12, title: "Blast Furnace Operation Head", location: "Plant Location", salary: "Not Disclosed", dept: "Operations" },
  { id: 13, title: "BF Operation Head", location: "Plant Location", salary: "Not Disclosed", dept: "Operations" },
  { id: 14, title: "DRI Operations", location: "Plant Location", salary: "Not Disclosed", dept: "Operations" },
  { id: 15, title: "Rolling Mill", location: "Kharagpur Plant", salary: "Not Disclosed", dept: "Operations" },
  { id: 16, title: "WRM Operation Head", location: "Plant Location", salary: "Not Disclosed", dept: "Operations" },
  { id: 17, title: "Bright Bar Operation Head", location: "Plant Location", salary: "Not Disclosed", dept: "Operations" },
  { id: 18, title: "BA Line Head", location: "Plant Location", salary: "Not Disclosed", dept: "Operations" },
  { id: 19, title: "Raw Material Operations (RMHS)", location: "Plant Location", salary: "Not Disclosed", dept: "Operations" },
  { id: 20, title: "Overall Raw Material Head", location: "Head Office", salary: "Not Disclosed", dept: "Procurement" },
  { id: 21, title: "Iron Ore Procurement - Manager", location: "HO / Site", salary: "Not Disclosed", dept: "Procurement" },
  { id: 22, title: "Iron Ore Procurement – General Manager", location: "Head Office", salary: "Not Disclosed", dept: "Procurement" },
  { id: 23, title: "SS Scrap Sourcing & Costing General Manager", location: "Head Office", salary: "Not Disclosed", dept: "Procurement" },
  { id: 24, title: "SS Import Raw Material", location: "Head Office", salary: "Not Disclosed", dept: "Procurement" },
  { id: 25, title: "Logistics Head", location: "Head Office", salary: "Not Disclosed", dept: "Logistics" },
  { id: 26, title: "Railway Liaisoning", location: "Site / HO", salary: "Not Disclosed", dept: "Logistics" },
  { id: 27, title: "Plant HR Head", location: "Sambalpur", salary: "Not Disclosed", dept: "HR" },
  { id: 28, title: "Plant HR", location: "Indore", salary: "Not Disclosed", dept: "HR" },
  { id: 29, title: "SS Flat HR", location: "Plant / HO", salary: "Not Disclosed", dept: "HR" },
  { id: 30, title: "Employee Engagement", location: "HO / Plant", salary: "Not Disclosed", dept: "HR" },
  { id: 31, title: "Admin Manager", location: "Plant / HO", salary: "Not Disclosed", dept: "Admin" },
  { id: 32, title: "Talent Head – Stainless Steel", location: "Head Office", salary: "Not Disclosed", dept: "HR" },
  { id: 33, title: "Ferro Alloys – Strategic Leadership", location: "PAN India", salary: "Not Disclosed", dept: "Leadership" },
  { id: 34, title: "CRM Project – Technical Head", location: "Head Office", salary: "Not Disclosed", dept: "Technology" },
];

const cultureCards = [
  {
    title: "Career Growth",
    desc: "Clear pathways to learn, lead, and grow your career confidently.",
    icon: "trending_up",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Competitive Pay",
    desc: "Industry-aligned compensation with performance bonuses and regular salary reviews.",
    icon: "payments",
    img: "https://www.shutterstock.com/image-photo/businessman-hand-pointing-competitive-salary-600nw-2635685171.jpg"
  },
  {
    title: "Employee Recognition",
    desc: "Your work is recognized through awards, bonuses and public acknowledgement.",
    icon: "workspace_premium",
    img: "https://cdn.sanity.io/images/grix75fu/production/711b2eff5d671ba1c84c59729fca4010c790c4d0-1574x835.jpg"
  },
  {
    title: "Inclusive Culture",
    desc: "A workplace where every voice is heard and respected.",
    icon: "diversity_3",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
  }
];

export default function CareerAtShyam() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'success' or 'error'
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', cv: null });

  const filteredJobs = useMemo(() => {
    return JOBS.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.dept.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 3000);
      return;
    }
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setIsApplying(false);
      setSelectedJob(null);
      setFormData({ name: '', email: '', phone: '', cv: null });
    }, 2500);
  };

  return (
    <div className="bg-surface overflow-hidden pt-24 relative">
      {/* Cinematic Hero Background */}
      <div className="absolute top-[82px] left-0 w-full h-[600px] z-0 overflow-hidden">
        <img
          src="/careeratshyam.jpeg"
          alt="Careers at Shyam Background"
          className="w-full h-full object-cover opacity-90 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#F0F4FF]/60 to-[#F0F4FF]"></div>
        <div className="absolute inset-0 bg-[#0145F2]/10 mix-blend-multiply"></div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[60vh] mb-22 flex items-center pt-32 px-6 md:px-12 bg-transparent">

        <div className="max-w-[1440px] mx-auto w-full relative z-10 text-center md:text-left flex flex-col items-center md:items-start space-y-8 -mt-[34px]">
          <AnimatedSection delay={0.2}>
            <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur px-4 py-2 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-[#0145F2] rounded-full animate-pulse"></span>
              <span className="font-bolder text-[10px] uppercase tracking-[0.4em] text-[#0145F2] font-black">Careers @ Shyam Metalics</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.85] text-white uppercase italic">
              ENGINEERING <br /> <span className="text-[#0145F2] not-italic">EXCELLENCE.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl font-medium">
              We aren't just making steel; we're redefining an industry. Join our high-performance team and build a legacy that lasts for generations.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.8}>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('job-board').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#0145F2] text-white font-black text-xs tracking-widest uppercase rounded-full shadow-2xl hover:scale-105 transition-transform"
              >
                View Jobs
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveCanvas height={200} flip={true} intensity={1.5} />

      {/* Why Work With Us */}
      <section className="py-24 px-6 md:px-12 bg-[#F0F4FF]">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-24">
              <span className="text-[#0145F2] font-black tracking-[0.5em] uppercase text-xs mb-4 block">Our Culture</span>
              <h2 className="text-5xl md:text-7xl font-black font-headline text-slate-900 tracking-tighter uppercase leading-none">
                WHY WORK <span className="text-[#0145F2]">WITH US?</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureCards.map((card, i) => (
              <StaggerItem key={i}>
                <div className="group bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img src={card.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={card.title} />
                  </div>
                  <div className="p-8 space-y-4 flex-grow">
                    <div className="w-12 h-12 rounded-2xl bg-[#0145F2] flex items-center border-2 hover:border-slate-900 justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors duration-500">
                      <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                    </div>
                    <h4 className="text-xl font-black font-headline uppercase text-slate-800 tracking-tight">{card.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{card.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Job Board */}
      <section id="job-board" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-black font-headline tracking-tighter uppercase text-slate-900">Job <span className="text-[#0145F2]">Opportunities</span></h2>
                <p className="text-slate-500 font-medium">Discover your next milestone at Shyam Metalics.</p>
              </div>

              <div className="relative w-full md:w-[400px]">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-900">search</span>
                <input
                  type="text"
                  placeholder="Search jobs, locations, or depts..."
                  className="w-full pl-14 pr-6 py-4 rounded-full text-slate-900 border-2 border-slate-900 bg-white focus:outline-none focus:border-[#0145F2] focus:ring-4 focus:ring-[#0145F2]/5 transition-all text-sm font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <StaggerItem key={job.id}>
                  <div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-lg hover:shadow-xl hover:border-[#0145F2]/20 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-2 h-full bg-[#0145F2] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-[#0145F2]/10 text-[#0145F2] text-[10px] font-black uppercase tracking-widest">{job.dept}</span>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">location_on</span> {job.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black font-headline uppercase text-slate-800 tracking-tight leading-tight">{job.title}</h3>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                        <span className="material-symbols-outlined text-sm">payments</span>
                        Salary: {job.salary}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="px-6 py-3 border-2 border-slate-900 cursor-pointer text-slate-900 font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => { setSelectedJob(job); setIsApplying(true); }}
                        className="px-6 py-3 bg-slate-900 text-white cursor-pointer font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-[#0145F2] transition-colors shadow-lg shadow-black/10"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">search_off</span>
                <p className="text-slate-400 font-medium">No roles found matching "{searchTerm}". Try a different term.</p>
              </div>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) { setSelectedJob(null); setIsApplying(false); } }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => { setSelectedJob(null); setIsApplying(false); }}
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center hover:bg-[#0145F2] hover:text-white transition-all z-20"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>

              <div className="flex-grow overflow-y-auto p-12 custom-scrollbar">
                {!isApplying ? (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-[#0145F2]/10 text-[#0145F2] text-[10px] font-black uppercase tracking-widest">
                        {selectedJob.dept}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black font-headline uppercase text-slate-900 tracking-tighter leading-none italic">
                        {selectedJob.title}
                      </h2>
                      <div className="flex items-center gap-6 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg text-[#0145F2]">location_on</span> {selectedJob.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg text-[#0145F2]">payments</span> Salary: {selectedJob.salary}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 rounded-3xl bg-[#0145F2]/5 border-2 border-slate-900 space-y-2">
                        <span className="material-symbols-outlined text-[#0145F2]">assignment_ind</span>
                        <h4 className="font-black text-[#0145F2] text-xs uppercase tracking-widest">Full Time</h4>
                        <p className="text-xs text-slate-500 uppercase font-black">Industrial Role</p>
                      </div>
                      <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-900 space-y-2">
                        <span className="material-symbols-outlined text-[#0145F2]">calendar_today</span>
                        <h4 className="font-black text-[#0145F2] text-xs uppercase tracking-widest">Immediate Joiner</h4>
                        <p className="text-xs text-slate-500 uppercase font-black">Open Priority</p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <h4 className="text-sm font-black uppercase tracking-widest text-[#0145F2]">About the Role</h4>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        At Shyam Metalics, we are looking for a visionary {selectedJob.title} to join our {selectedJob.dept} division in {selectedJob.location}.
                        As part of our leadership core, you will be responsible for driving operational excellence and ensuring our steel manufacturing processes remain world-class.
                      </p>
                      <ul className="space-y-3">
                        {['Strategic planning & execution', 'Stakeholder management', 'Driving Innovation 4.0', 'Collaborative Leadership'].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2] mt-2 shrink-0"></span>
                            <span className="text-slate-600 font-medium text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8">
                      <button
                        onClick={() => setIsApplying(true)}
                        className="w-full py-6 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-[#0145F2] transition-all shadow-xl shadow-[#0145F2]/20"
                      >
                        Apply for this position
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-4xl font-black font-headline uppercase text-slate-900 tracking-tight leading-none italic">Apply <br /> <span className="text-[#0145F2] not-italic">Form.</span></h2>
                      <p className="text-slate-500 font-medium text-sm">Position: {selectedJob.title}</p>
                    </div>

                    <form onSubmit={handleApplySubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-700">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full p-4 rounded-xl text-slate-900 border-2 border-slate-700 bg-slate-50 focus:outline-none focus:border-[#0145F2] transition-all font-medium text-sm"
                          placeholder="Ex: Rajesh Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-700">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full p-4 rounded-xl border-2 text-slate-900 border-slate-700 bg-slate-50 focus:outline-none focus:border-[#0145F2] transition-all font-medium text-sm"
                          placeholder="rajesh@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-700">Phone Number</label>
                        <input
                          type="tel"
                          required
                          className="w-full p-4 rounded-xl border-2 text-slate-900 border-slate-700 bg-slate-50 focus:outline-none focus:border-[#0145F2] transition-all font-medium text-sm"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50 flex flex-col items-center justify-center text-center group hover:border-[#0145F2]/50 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-4xl text-slate-300 group-hover:text-[#0145F2] transition-colors mb-2">upload_file</span>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Upload Resume (PDF)</p>
                        <p className="text-[10px] text-slate-400">Max size: 5MB</p>
                      </div>

                      <div className="pt-6 relative">
                        <button
                          type="submit"
                          disabled={formStatus === 'success'}
                          className={`w-full py-6 font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all shadow-xl ${formStatus === 'success' ? 'bg-green-500 text-white shadow-green-500/20' : 'bg-slate-900 text-white hover:bg-[#0145F2] shadow-black/20'
                            }`}
                        >
                          {formStatus === 'success' ? 'Application Sent' : 'Submit Application'}
                        </button>

                        <AnimatePresence>
                          {formStatus === 'success' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="absolute -top-12 left-0 right-0 py-3 bg-green-500 text-white text-center rounded-xl text-[10px] font-black uppercase tracking-widest"
                            >
                              Data Geted Succefully
                            </motion.div>
                          )}
                          {formStatus === 'error' && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="absolute -top-12 left-0 right-0 py-3 bg-red-500 text-white text-center rounded-xl text-[10px] font-black uppercase tracking-widest"
                            >
                              Invalid Details. Please try again.
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #0145F2; }
        .font-headline { font-family: 'Inter', sans-serif; }
      `}</style>

      <WaveCanvas height={200} flip={false} intensity={1.5} />
    </div>
  )
}
