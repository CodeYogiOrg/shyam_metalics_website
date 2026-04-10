import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

export default function StatCard({ value, label, prefix = '', suffix = '' }) {
  const [isHovered, setIsHovered] = useState(false)
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  
  const rounded = useTransform(count, (latest) => {
    if (value.includes('.') || suffix === 'MTPA') {
       return latest.toFixed(1)
    }
    return Math.round(latest)
  })

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
      const controls = animate(count, numericValue, {
        duration: 2.5,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [isInView, value, count])

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-64 glass-card rounded-2xl overflow-hidden border border-[#0145F2]/15 shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(1,69,242,0.15)] hover:border-[#0145F2]/30 group"
      style={{ background: 'rgba(1, 69, 242, 0.03)' }}
    >
      {/* Background Glow */}
      <div className={`absolute -right-10 -top-10 w-40 h-40 bg-[#0145F2]/5 rounded-full blur-[60px] transition-all duration-700 ${isHovered ? 'opacity-80 scale-150' : 'opacity-40'}`} />
      <div className={`absolute -left-10 -bottom-10 w-40 h-40 bg-[#0145F2]/5 rounded-full blur-[60px] transition-all duration-700 ${isHovered ? 'opacity-80 scale-150' : 'opacity-40'}`} />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8">
        <motion.div
          className="text-5xl font-black font-headline text-on-surface mb-2 flex items-center"
          animate={isHovered ? { scale: 1.05, color: '#0145F2' } : { scale: 1, color: '#0D1117' }}
        >
          <span className="text-[#0145F2]">{prefix}</span>
          <motion.span ref={countRef}>{rounded}</motion.span>
          <span className="text-[#0145F2] ml-1">{suffix}</span>
        </motion.div>
        
        <div className="h-0.5 w-12 bg-[#0145F2]/20 mb-4 transition-all duration-500 group-hover:w-20 group-hover:bg-[#0145F2]" />
        
        <p className="font-label text-xs md:text-sm uppercase tracking-[0.2em] text-on-surface-variant font-bold text-center leading-relaxed">
          {label}
        </p>

        {/* Dynamic Indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          className="absolute bottom-0 left-0 h-1 bg-[#0145F2]/30"
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  )
}

