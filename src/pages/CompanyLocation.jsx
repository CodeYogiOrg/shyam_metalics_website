import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

const locations = [
  {
    id: 1,
    title: 'Corporate Office',
    address: 'P-19, Plate No: D-403, CPT Colony, Taratala Road, Kolkata – 700088, West Bengal',
    phone: '033 6521 6521',
    details: [
      //   'CIN: L40101WB2002PLC095491',
      //   'For queries: Mr. Birendra Kumar Jain',
      //   'compliance@shyamgroup.com'
    ],
    mapQuery: 'Shyam Metalics and Energy Limited, Taratala Road, Kolkata',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 2,
    title: 'Shyam Metalics Office',
    address: 'SS Chambers, 5 CR Avenue, Princep Street, 2nd Floor, Kolkata – 700072, West Bengal',
    mapQuery: 'Shyam Metalics SS Chambers Princep Street Kolkata',
    images: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 3,
    title: 'SMEL Sambalpur Plant',
    address: 'Vill- Pandloi, P.O - Lapanga, Beside Rengali, Sambalpur – 768212, Odisha',
    mapQuery: 'Shyam Metalics Sambalpur Plant Odisha',
    images: [
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 4,
    title: 'SSPL Jamuria Plant',
    address: 'Village: Dasna, P.S: Jamuria, P.O: Bahadurpur, District: Paschim Bardhaman, West Bengal – 713362',
    mapQuery: 'Shyam Metalics Jamuria Plant West Bengal',
    images: [
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 5,
    title: 'SSPL Pakuria Plant',
    address: 'NH-6, Domjur, Pakuria, Lakshmanpur, Howrah, West Bengal – 711114',
    mapQuery: 'Shyam Metalics Pakuria Plant Howrah',
    images: [
      'https://images.unsplash.com/photo-1565615820515-da949c830424?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 6,
    title: 'SSPL Mangalpur Plant',
    address: 'G-6, Mangalpur Industrial Estate, P.O.-Baktarnagar, P.S.-Raniganj, Dist.-Paschim Bardhaman, Pin-713347',
    mapQuery: 'Shyam Metalics Mangalpur Plant West Bengal',
    images: [
      'https://images.unsplash.com/photo-1589793907316-f9401554212e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbbc?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 7,
    title: 'RIL Kharagpur Plant',
    address: 'Saha Chowk, Rakha Jungle, Kharagpur, Paschim Midnapur, West Bengal – 721301',
    mapQuery: 'Shyam Metalics Kharagpur Plant West Bengal',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 8,
    title: 'SSPL Indore Plant',
    address: 'Plot No. 164C, Industrial Area, Pithampur Industrial Area, Madhya Pradesh – 454774',
    mapQuery: 'Shyam Metalics Indore Pithampur',
    images: [
      'https://images.unsplash.com/photo-1518709362343-41bbd65f57ae?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

function LocationCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Plant Location"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="absolute bottom-4 left-6 flex gap-1.5 z-10 transition-transform duration-300 group-hover:translate-y-[-5px]">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${current === i ? 'bg-[#0145F2] w-6' : 'bg-white/40'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

function LocationCard({ location, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ x: isEven ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`flex w-full mb-16 ${isEven ? 'justify-start' : 'justify-end'}`}
    >
      <motion.div
        whileHover={{ y: -8, shadow: '0 30px 60px rgba(1,69,242,0.18)' }}
        className="w-full lg:w-[66%] bg-white/90 backdrop-blur-3xl border border-[#0145F2]/10 rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-500 h-auto md:h-[380px]"
      >
        {/* Left Section: Vertical Stack of [Image | Map] */}
        <div className="w-full md:w-[44%] flex flex-col border-r border-[#0145F2]/5 shrink-0">
          <div className="shrink-0 h-[210px]">
            <LocationCarousel images={location.images} />
          </div>
          <div className="flex-grow h-[170px] relative">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.1) brightness(0.95) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            {/* Soft overlay on map */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0145F2]/5 to-transparent"></div>
          </div>
        </div>

        {/* Right Section: Detailed Content */}
        <div className="w-full md:w-[56%] p-6 md:p-8 flex flex-col justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#0145F2] font-black uppercase tracking-[0.3em] text-[8px] mb-3 block">Official Unit</span>
            <h3 className="text-2xl md:text-3xl font-black font-headline text-slate-900 uppercase mb-6 tracking-tighter leading-tight">
              {location.title}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0145F2]/5 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#0145F2] text-xl">location_on</span>
                </div>
                <div>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-0.5 opacity-50">Postal Address</p>
                  <p className="text-slate-800 font-bold leading-relaxed text-sm md:text-base line-clamp-3">{location.address}</p>
                </div>
              </div>

              {location.phone && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0145F2]/5 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#0145F2] text-xl">phone_in_talk</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-0.5 opacity-50">Direct Contact</p>
                    <p className="text-slate-900 font-black text-lg tracking-tight">{location.phone}</p>
                  </div>
                </div>
              )}

              {location.details && (
                <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 gap-4">
                  {location.details.map((detail, i) => (
                    <p key={i} className="text-slate-500 text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2]"></span>
                      {detail}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CompanyLocation() {
  return (
    <div className="relative pt-32 pb-[250px] bg-[#F0F4FF] min-h-screen z-0 overflow-x-hidden">
      {/* Cinematic Hero Background */}
      <div className="absolute top-[82px] left-0 w-full h-[600px] z-0 overflow-hidden">
        <img
          src="/company_location.jpeg"
          alt="Company Location Background"
          className="w-full h-full object-cover opacity-90 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#F0F4FF]/60 to-[#F0F4FF]"></div>
        <div className="absolute inset-0 bg-[#0145F2]/10 mix-blend-multiply"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection>
          <div className="mb-24">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-[#0145F2] mb-4 block font-bold">Strategic Industrial Footprint</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-slate-900 uppercase">
              COMPANY <br /> <span className="text-[#0145F2]">LOCATIONS.</span>
            </h1>
            <p className="max-w-xl text-slate-600 font-medium leading-relaxed">
              Explore our nationwide presence from high-tech corporate offices to heavy manufacturing hubs powering the future of metalics.
            </p>
          </div>
        </AnimatedSection>

        {/* Locations List */}
        <div className="flex flex-col mb-32">
          {locations.map((loc, i) => (
            <LocationCard key={loc.id} location={loc} index={i} />
          ))}

          {/* Need Assistance CTA */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={`flex w-full ${locations.length % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="w-full lg:w-[90%] bg-gradient-to-br from-[#0145F2] to-[#0126BA] px-12 py-16 rounded-[48px] flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group border border-white/10"
            >
              <div className="absolute top-[-50%] right-[-100%] w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-black/10 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10 text-center md:text-left mb-10 md:mb-0">
                <span className="text-white/60 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Connect with us</span>
                <h3 className="text-4xl md:text-5xl font-black font-headline text-white uppercase mb-4 tracking-tight">Need Assistance?</h3>
                <p className="text-white/70 font-medium leading-relaxed max-w-lg text-lg">
                  Speak with our representatives for institutional inquiries, product specifications, or strategic partnerships.
                </p>
              </div>

              <Link
                to="/contact-us"
                className="relative z-10 px-14 py-7 bg-white text-[#0145F2] font-black uppercase tracking-widest text-xs rounded-[32px] shadow-2xl hover:bg-slate-50 hover:shadow-white/20 transition-all flex items-center gap-4 group/btn"
              >
                GET IN TOUCH
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="material-symbols-outlined text-lg"
                >
                  east
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-[-1px] left-0 right-0 z-0 overflow-hidden leading-[0]">
        <WaveCanvas height={200} flip={false} intensity={1.2} />
      </div>
    </div>
  )
}
