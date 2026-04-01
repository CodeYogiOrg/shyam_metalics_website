import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    num: '01',
    title: 'Raw Material Sourcing',
    desc: 'Premium iron ore and coal sourced from captive mines ensuring consistent quality and supply chain reliability.',
    color: '#FF6B00',
    gradient: 'linear-gradient(135deg, #FF6B00, #FF8533)',
  },
  {
    num: '02',
    title: 'Smelting & Reduction',
    desc: 'State-of-the-art blast furnaces and rotary kilns reduce iron ore into high-purity sponge iron at controlled temperatures.',
    color: '#00D4FF',
    gradient: 'linear-gradient(135deg, #00D4FF, #0088FF)',
  },
  {
    num: '03',
    title: 'Steel Making',
    desc: 'Advanced induction and electric arc furnaces transform raw materials into molten steel with precise chemical composition.',
    color: '#FF006E',
    gradient: 'linear-gradient(135deg, #FF006E, #FF3385)',
  },
  {
    num: '04',
    title: 'Rolling & Shaping',
    desc: 'Continuous casting and modern rolling mills shape billets into TMT bars, structural sections, and wire rods.',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #00FFFF, #00D4FF)',
  },
  {
    num: '05',
    title: 'Quality Assurance',
    desc: 'Every batch undergoes rigorous testing - tensile strength, chemical analysis, and dimensional accuracy per BIS standards.',
    color: '#FF8533',
    gradient: 'linear-gradient(135deg, #FF8533, #FFB366)',
  },
];

function ProcessStep({ step, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{
        display: 'flex',
        gap: '40px',
        alignItems: 'flex-start',
        padding: '40px 0',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
      }}
    >
      {/* Step number */}
      <div style={{
        minWidth: '80px',
        height: '80px',
        borderRadius: '20px',
        background: step.gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        fontWeight: 900,
        color: '#000',
        fontFamily: 'monospace',
        boxShadow: `0 10px 30px ${step.color}30`,
        flexShrink: 0,
      }}>
        {step.num}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3 style={{
          color: '#fff',
          fontSize: '24px',
          fontWeight: 700,
          margin: '0 0 12px',
        }}>
          {step.title}
        </h3>
        <p style={{
          color: 'rgba(255,255,255,0.45)',
          fontSize: '15px',
          lineHeight: 1.7,
          margin: 0,
          maxWidth: '500px',
        }}>
          {step.desc}
        </p>
      </div>

      {/* Progress indicator */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
        style={{
          position: 'absolute',
          left: '39px',
          top: '120px',
          bottom: '-1px',
          width: '2px',
          background: `linear-gradient(to bottom, ${step.color}, transparent)`,
          transformOrigin: 'top',
          display: index === steps.length - 1 ? 'none' : 'block',
        }}
      />
    </motion.div>
  );
}

export default function ProcessSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section style={{
      minHeight: '200vh',
      position: 'relative',
      zIndex: 2,
      padding: '120px 40px',
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{
            color: '#FF006E',
            fontSize: '12px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Our Process
          </p>

          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 700,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            From Ore to<br />
            <span style={{ color: '#FF006E' }}>Finished Product</span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Our integrated manufacturing process ensures quality at every stage,
            from raw material to the final product.
          </p>
        </div>

        {steps.map((step, i) => (
          <ProcessStep key={step.num} step={step} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
