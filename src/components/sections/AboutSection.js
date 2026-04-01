import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const milestones = [
  { year: '2002', title: 'Founded', desc: 'Shyam Metalics established in West Bengal' },
  { year: '2005', title: 'Expansion', desc: 'First integrated steel plant commissioned' },
  { year: '2012', title: 'Growth', desc: 'Capacity expanded to 2 MTPA' },
  { year: '2018', title: 'Innovation', desc: 'Advanced ferro alloy production begins' },
  { year: '2021', title: 'IPO', desc: 'Successfully listed on NSE & BSE' },
  { year: '2024', title: 'Future', desc: 'Capacity expansion to 11.6 MTPA underway' },
];

function StatCounter({ value, suffix, label }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <motion.span
        style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #FF6B00, #FF006E)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {inView ? value : 0}{suffix}
      </motion.span>
      <p style={{
        color: 'rgba(255,255,255,0.5)',
        fontSize: '13px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginTop: '8px',
      }}>
        {label}
      </p>
    </motion.div>
  );
}

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative',
      zIndex: 2,
      padding: '120px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}
      >
        <p style={{
          color: '#FF6B00',
          fontSize: '12px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Our Story
        </p>

        <h2 style={{
          color: '#fff',
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 700,
          marginBottom: '24px',
          lineHeight: 1.2,
        }}>
          Two Decades of<br />
          <span style={{
            background: 'linear-gradient(90deg, #FF6B00, #FF006E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Steel Excellence</span>
        </h2>

        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '16px',
          maxWidth: '700px',
          margin: '0 auto 60px',
          lineHeight: 1.8,
        }}>
          From our inception, we have been driven by a singular vision: to become
          India's most efficient and sustainable steel manufacturer, delivering
          superior products that build the future.
        </p>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginBottom: '80px',
          padding: '40px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
          <StatCounter value={5.6} suffix=" MTPA" label="Capacity" />
          <StatCounter value={20} suffix="+" label="Years" />
          <StatCounter value={3} suffix="" label="Plants" />
          <StatCounter value={5000} suffix="+" label="Employees" />
        </div>

        {/* Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
        }}>
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              style={{
                padding: '30px 20px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #FF6B00, #FF006E, #3B82F6)',
              }} />
              <span style={{
                color: '#FF6B00',
                fontSize: '24px',
                fontWeight: 800,
                fontFamily: 'monospace',
              }}>
                {m.year}
              </span>
              <h4 style={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: 600,
                margin: '8px 0 4px',
              }}>
                {m.title}
              </h4>
              <p style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '13px',
                lineHeight: 1.5,
                margin: 0,
              }}>
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
