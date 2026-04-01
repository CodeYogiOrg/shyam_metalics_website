import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Director, Kumar Constructions',
    text: 'Shyam Metalics TMT bars have been our go-to choice for the past 8 years. Exceptional quality and consistent supply have made them an invaluable partner in our construction projects.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'VP Procurement, National Infra Ltd',
    text: 'The structural steel products from Shyam Metalics meet the highest industry standards. Their commitment to quality and timely delivery sets them apart from competitors.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'CEO, Patel Steel Traders',
    text: 'As a distributor, reliability is everything. Shyam Metalics delivers consistently superior products with excellent support. Our clients trust the brand implicitly.',
    rating: 5,
  },
  {
    name: 'Sunita Reddy',
    role: 'Chief Engineer, State PWD',
    text: 'For government infrastructure projects, we need certified quality. Shyam Metalics BIS-certified products give us the confidence we need for critical structures.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative',
      zIndex: 2,
      padding: '120px 40px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '900px', margin: '0 auto', width: '100%', textAlign: 'center' }}
      >
        <p style={{
          color: '#FF006E',
          fontSize: '12px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Testimonials
        </p>

        <h2 style={{
          color: '#fff',
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 700,
          marginBottom: '60px',
          lineHeight: 1.2,
        }}>
          Trusted by<br />
          <span style={{ color: '#FF006E' }}>Industry Leaders</span>
        </h2>

        {/* Main testimonial */}
        <div style={{
          position: 'relative',
          minHeight: '250px',
          marginBottom: '40px',
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                padding: '50px 40px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.06)',
                position: 'relative',
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '30px',
                fontSize: '80px',
                color: 'rgba(255,107,0,0.1)',
                fontFamily: 'Georgia, serif',
                lineHeight: 1,
              }}>
                &ldquo;
              </div>

              {/* Stars */}
              <div style={{ marginBottom: '20px' }}>
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <span key={i} style={{ color: '#FF6B00', fontSize: '16px', marginRight: '4px' }}>
                    &#9733;
                  </span>
                ))}
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '18px',
                lineHeight: 1.8,
                fontStyle: 'italic',
                margin: '0 0 30px',
                fontWeight: 300,
              }}>
                {testimonials[active].text}
              </p>

              <div>
                <h4 style={{
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 600,
                  margin: '0 0 4px',
                }}>
                  {testimonials[active].name}
                </h4>
                <p style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '13px',
                  margin: 0,
                }}>
                  {testimonials[active].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.2 }}
              style={{
                width: active === i ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: active === i
                  ? 'linear-gradient(90deg, #FF6B00, #FF006E)'
                  : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
