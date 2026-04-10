import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection className="text-center mb-16">
          <span className="font-bold text-xl tracking-[0.3em] uppercase text-[#0145F2] mb-4 block">Testimonials</span>
          <h1 className="text-6xl md:text-8xl font-black font-headline uppercase tracking-tighter leading-none mb-8">
            VOICES OF <span className="text-[#0145F2]">TRUST</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Every great relationship starts with trust. These are the stories of our clients sharing their experience with Shyam Metalics.
          </p>
        </AnimatedSection>
        
        {/* Placeholder for more content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* More testimonials can be added here later */}
           <div className="p-12 border-2 border-dashed border-[#0145F2]/10 rounded-[40px] flex items-center justify-center">
              <p className="text-on-surface-variant/40 font-bold uppercase tracking-widest text-xs">Full Testimonial Grid Loading...</p>
           </div>
        </div>
      </div>
    </div>
  )
}
