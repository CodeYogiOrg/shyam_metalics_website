import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const startTime = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 5600, suffix: ' Cr', label: 'Revenue (FY24)', color: '#FF6B00' },
  { value: 5.6, suffix: ' MTPA', label: 'Production Capacity', color: '#00D4FF' },
  { value: 98.5, suffix: '%', label: 'Quality Compliance', color: '#FF006E' },
  { value: 15, suffix: '+', label: 'States Covered', color: '#00FFFF' },
  { value: 5000, suffix: '+', label: 'Team Members', color: '#FF8533' },
  { value: 3, suffix: '', label: 'Manufacturing Plants', color: '#4A5F7F' },
];

const achievements = [
  { title: 'ISO 9001:2015', desc: 'Quality Management Certified' },
  { title: 'ISO 14001:2015', desc: 'Environmental Management' },
  { title: 'BIS Certified', desc: 'All Products Bureau of Indian Standards' },
  { title: 'SA 8000', desc: 'Social Accountability Standard' },
];

export default function StatsSection() {
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
        style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{
            color: '#00FFFF',
            fontSize: '12px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            By The Numbers
          </p>

          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.2,
          }}>
            Numbers That<br />
            <span style={{ color: '#00FFFF' }}>Speak Volumes</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
          marginBottom: '80px',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                padding: '40px 24px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '2px',
                background: stat.color,
              }} />

              <div style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                color: stat.color,
                fontFamily: 'monospace',
                marginBottom: '8px',
              }}>
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2000 + i * 200}
                />
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '12px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                margin: 0,
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}>
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              style={{
                padding: '24px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255,107,0,0.15), rgba(0,212,255,0.15))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                flexShrink: 0,
              }}>
                &#10003;
              </div>
              <div>
                <h4 style={{
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 600,
                  margin: '0 0 4px',
                }}>
                  {ach.title}
                </h4>
                <p style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '13px',
                  margin: 0,
                }}>
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
