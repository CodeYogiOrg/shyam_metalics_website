import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    classification: '',
    industry: '',
    country: '',
    phone: '',
    inquiry: '',
    privacy: false,
    updates: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required.';
    if (!formData.classification) newErrors.classification = 'Please select a classification.';
    if (!formData.industry) newErrors.industry = 'Please select an industry.';
    if (!formData.country) newErrors.country = 'Please select a country.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
    if (!formData.inquiry.trim()) newErrors.inquiry = 'Please enter your inquiry.';
    if (!formData.privacy) newErrors.privacy = 'You must acknowledge the privacy policy.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        name: '', email: '', company: '', classification: '', industry: '', country: '', phone: '', inquiry: '', privacy: false, updates: false
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  return (
    <div className="relative pt-32 pb-24 min-h-screen">
      {/* Cinematic Dark Image Background */}
      <div className="absolute inset-0 z-[-2] bg-[#030A14] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=2560" 
          className="w-full h-full object-cover opacity-20"
          alt="Modern futuristic corporate architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030A14] via-[#030A14]/80 to-transparent z-[2]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection>
          <div className="mb-14">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-[#0145F2] mb-4 block font-bold">Global Connectivity</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-white">
              GET IN <span className="text-[#0145F2]">TOUCH.</span>
            </h1>
            <p className="max-w-xl text-slate-400 text-lg leading-relaxed font-medium">
              Tell us about your requirements and our team will get in touch with the right solutions.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <AnimatedSection direction="left" className="lg:col-span-7">
            {/* Cinematic Redesigned Form */}
            <div className="bg-[#0A1628]/60 backdrop-blur-2xl border border-white/10 p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.3)] rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0145F2]/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-20 text-center min-h-[400px]"
                  >
                    <div className="w-20 h-20 bg-[#22C55E]/10 rounded-full flex items-center justify-center mb-6 border border-[#22C55E]/20">
                      <span className="material-symbols-outlined text-5xl text-[#22C55E]">check_circle</span>
                    </div>
                    <h2 className="text-3xl font-black font-headline text-white tracking-tight mb-4">Request Submitted</h2>
                    <p className="max-w-sm text-slate-400 font-medium">Thank you for reaching out to Shyam Metalics. Our team will review your inquiry and get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 relative" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="font-label text-[10px] uppercase tracking-widest text-[#0145F2] font-bold px-1">Full Name <span className="text-red-500">*</span></label>
                        <input name="name" value={formData.name} onChange={handleChange} className={`w-full bg-[#030A14]/50 border ${errors.name ? 'border-red-500/50 focus:ring-red-500/30' : 'border-white/10 focus:ring-[#0145F2]/30 focus:border-[#0145F2]/50'} p-3.5 text-white font-medium transition-all rounded-lg outline-none placeholder:text-slate-600`} placeholder="John Doe" type="text" />
                        {errors.name && <p className="text-red-500 text-[10px] uppercase tracking-wider pl-1 font-bold">{errors.name}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="font-label text-[10px] uppercase tracking-widest text-[#0145F2] font-bold px-1">Email Address <span className="text-red-500">*</span></label>
                        <input name="email" value={formData.email} onChange={handleChange} className={`w-full bg-[#030A14]/50 border ${errors.email ? 'border-red-500/50 focus:ring-red-500/30' : 'border-white/10 focus:ring-[#0145F2]/30 focus:border-[#0145F2]/50'} p-3.5 text-white font-medium transition-all rounded-lg outline-none placeholder:text-slate-600`} placeholder="john@company.com" type="email" />
                        {errors.email && <p className="text-red-500 text-[10px] uppercase tracking-wider pl-1 font-bold">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="font-label text-[10px] uppercase tracking-widest text-[#0145F2] font-bold px-1">Company Name <span className="text-red-500">*</span></label>
                        <input name="company" value={formData.company} onChange={handleChange} className={`w-full bg-[#030A14]/50 border ${errors.company ? 'border-red-500/50 focus:ring-red-500/30' : 'border-white/10 focus:ring-[#0145F2]/30 focus:border-[#0145F2]/50'} p-3.5 text-white font-medium transition-all rounded-lg outline-none placeholder:text-slate-600`} placeholder="Global Industries Ltd." type="text" />
                        {errors.company && <p className="text-red-500 text-[10px] uppercase tracking-wider pl-1 font-bold">{errors.company}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="font-label text-[10px] uppercase tracking-widest text-[#0145F2] font-bold px-1">Phone Number <span className="text-red-500">*</span></label>
                        <input name="phone" value={formData.phone} onChange={handleChange} className={`w-full bg-[#030A14]/50 border ${errors.phone ? 'border-red-500/50 focus:ring-red-500/30' : 'border-white/10 focus:ring-[#0145F2]/30 focus:border-[#0145F2]/50'} p-3.5 text-white font-medium transition-all rounded-lg outline-none placeholder:text-slate-600`} placeholder="+91 XXXXX XXXXX" type="tel" />
                        {errors.phone && <p className="text-red-500 text-[10px] uppercase tracking-wider pl-1 font-bold">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <label className="font-label text-[10px] uppercase tracking-widest text-[#0145F2] font-bold px-1">Classification <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <select name="classification" value={formData.classification} onChange={handleChange} className={`w-full bg-[#030A14]/50 border ${errors.classification ? 'border-red-500/50' : 'border-white/10'} focus:border-[#0145F2]/50 p-3.5 pr-10 text-slate-300 font-medium transition-all rounded-lg outline-none appearance-none cursor-pointer`}>
                            <option value="" className="bg-[#0A1628] text-slate-400">Select Option</option>
                            <option value="business" className="bg-[#0A1628]">Business Inquiry</option>
                            <option value="personal" className="bg-[#0A1628]">Personal or Consumer Inquiry</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-3 top-3.5 text-slate-500 pointer-events-none">expand_more</span>
                        </div>
                        {errors.classification && <p className="text-red-500 text-[10px] uppercase tracking-wider pl-1 font-bold">{errors.classification}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="font-label text-[10px] uppercase tracking-widest text-[#0145F2] font-bold px-1">Industry <span className="text-red-500">*</span></label>
                        <div className="relative">
                           <select name="industry" value={formData.industry} onChange={handleChange} className={`w-full bg-[#030A14]/50 border ${errors.industry ? 'border-red-500/50' : 'border-white/10'} focus:border-[#0145F2]/50 p-3.5 pr-10 text-slate-300 font-medium transition-all rounded-lg outline-none appearance-none cursor-pointer`}>
                             <option value="" className="bg-[#0A1628] text-slate-400">Select Industry</option>
                             <option value="technology" className="bg-[#0A1628]">Technology</option>
                             <option value="manufacturing" className="bg-[#0A1628]">Manufacturing</option>
                             <option value="retail" className="bg-[#0A1628]">Retail</option>
                             <option value="healthcare" className="bg-[#0A1628]">Healthcare</option>
                             <option value="other" className="bg-[#0A1628]">Other</option>
                           </select>
                           <span className="material-symbols-outlined absolute right-3 top-3.5 text-slate-500 pointer-events-none">expand_more</span>
                        </div>
                        {errors.industry && <p className="text-red-500 text-[10px] uppercase tracking-wider pl-1 font-bold">{errors.industry}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="font-label text-[10px] uppercase tracking-widest text-[#0145F2] font-bold px-1">Country <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <select name="country" value={formData.country} onChange={handleChange} className={`w-full bg-[#030A14]/50 border ${errors.country ? 'border-red-500/50' : 'border-white/10'} focus:border-[#0145F2]/50 p-3.5 pr-10 text-slate-300 font-medium transition-all rounded-lg outline-none appearance-none cursor-pointer`}>
                            <option value="" className="bg-[#0A1628] text-slate-400">Select Country</option>
                            <option value="india" className="bg-[#0A1628]">India</option>
                            <option value="usa" className="bg-[#0A1628]">USA</option>
                            <option value="uk" className="bg-[#0A1628]">UK</option>
                            <option value="other" className="bg-[#0A1628]">Other</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-3 top-3.5 text-slate-500 pointer-events-none">expand_more</span>
                        </div>
                        {errors.country && <p className="text-red-500 text-[10px] uppercase tracking-wider pl-1 font-bold">{errors.country}</p>}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-label text-[10px] uppercase tracking-widest text-[#0145F2] font-bold px-1">Inquiry <span className="text-red-500">*</span></label>
                      <textarea name="inquiry" value={formData.inquiry} onChange={handleChange} className={`w-full bg-[#030A14]/50 border ${errors.inquiry ? 'border-red-500/50 focus:ring-red-500/30' : 'border-white/10 focus:ring-[#0145F2]/30 focus:border-[#0145F2]/50'} p-3.5 text-white font-medium transition-all resize-none rounded-lg outline-none placeholder:text-slate-600`} placeholder="Describe your structural requirements..." rows="4"></textarea>
                      {errors.inquiry && <p className="text-red-500 text-[10px] uppercase tracking-wider pl-1 font-bold">{errors.inquiry}</p>}
                    </div>

                    <div className="flex flex-col gap-3 py-2">
                       <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} className="w-5 h-5 rounded border-white/20 bg-white/5 text-[#0145F2] focus:ring-[#0145F2] focus:ring-offset-0" />
                          <span className="text-sm text-slate-400 font-semibold group-hover:text-white transition-colors">I acknowledge Privacy Policy</span>
                       </label>
                       {errors.privacy && <p className="text-red-500 text-[10px] uppercase tracking-wider font-bold mb-1 -mt-1">{errors.privacy}</p>}
                       
                       <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" name="updates" checked={formData.updates} onChange={handleChange} className="w-5 h-5 rounded border-white/20 bg-white/5 text-[#0145F2] focus:ring-[#0145F2] focus:ring-offset-0" />
                          <span className="text-sm text-slate-400 font-semibold group-hover:text-white transition-colors">Receive email updates</span>
                       </label>
                    </div>

                    <motion.button 
                      type="submit"
                      whileHover={{ scale: 1.01, boxShadow: '0 10px 30px rgba(1, 69, 242,0.4)' }} 
                      whileTap={{ scale: 0.98 }} 
                      className="w-full py-4 bg-[#0145F2] hover:bg-[#0135B7] transition-colors text-[#FFFFFF] font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 rounded-lg mt-4"
                    >
                      SUBMIT
                      <span className="material-symbols-outlined text-sm">send</span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A1628]/60 backdrop-blur-2xl p-7 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0145F2]/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl shrink-0">
                  <span className="material-symbols-outlined text-[#0145F2]">factory</span>
                </div>
                <div>
                  <h3 className="font-label text-[10px] uppercase tracking-widest text-[#0145F2] font-bold mb-1">Primary Office</h3>
                  <p className="text-xl font-bold mb-1 text-white tracking-tight">Jamuria Hub</p>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed">
                    Village & P.O. Jamuria, District Paschim Bardhaman,<br />
                    West Bengal - 713336, India
                  </p>
                </div>
              </div>
            </div>

            {/* Cinematic Animated Contact Card */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-gradient-to-br from-[#0145F2]/10 to-[#0138C7]/30 backdrop-blur-2xl p-8 md:p-10 rounded-xl relative overflow-hidden shadow-[0_20px_50px_rgba(1,56,199,0.2)] border border-[#0145F2]/30"
            >
               <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#0145F2]/40 rounded-full blur-[80px] pointer-events-none"></div>
               <div className="absolute bottom-[-10%] left-[-20%] w-40 h-40 bg-[#F36630]/20 rounded-full blur-[60px] pointer-events-none"></div>
               
               <h3 className="font-[Inter] text-[10px] uppercase tracking-widest text-[#FFC107] mb-3 font-bold">Contact Shyam</h3>
               <h2 className="text-3xl font-black font-headline text-white tracking-tighter mb-4 leading-tight">
                 LET US KNOW HOW WE<br/>CAN HELP YOU
               </h2>
               
               <p className="text-slate-300 font-medium text-sm mb-7 leading-relaxed">
                 Whether you want product info, partnership opportunities, or just a general query, we are here to listen. Fill the form, and our team will get back to you soon.
               </p>

               <div className="w-full h-px bg-white/20 my-7"></div>

               <div className="text-slate-300 font-medium text-sm mb-7 leading-relaxed">
                 For urgent matters, you can also reach out to us at <a href="mailto:contact@shyamgroup.com" className="text-white font-bold hover:text-[#F36630] transition-colors">contact@shyamgroup.com</a> or call
                 <div className="block mt-4">
                   <a href="tel:03365216521" className="text-white font-bold text-lg tracking-wider hover:text-[#FFC107] transition-colors">033 6521 6521</a><br/>
                   <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mt-2 mb-1">or dial our toll-free number</span>
                   <a href="tel:18002022233" className="text-[#0145F2] font-headline text-3xl font-black tracking-tighter hover:text-white transition-colors bg-white/10 inline-block px-4 py-1 rounded-lg">1800 202 2233</a>
                 </div>
               </div>
               
               <div className="flex items-center gap-4 text-white font-bold text-sm tracking-wide mt-8">
                 <span className="w-12 h-0.5 bg-[#FFC107]"></span>
                 Looking forward to hearing from you.
               </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
