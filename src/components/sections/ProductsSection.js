import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    title: 'TMT Bars',
    subtitle: 'Fe-500D & Fe-550D',
    desc: 'High-strength thermo-mechanically treated bars for superior construction. Earthquake-resistant with excellent bendability.',
    icon: '01',
    color: '#FF6B00',
  },
  {
    title: 'Structural Steel',
    subtitle: 'Angles, Channels & Beams',
    desc: 'Precision-manufactured structural steel sections for infrastructure, industrial, and commercial construction projects.',
    icon: '02',
    color: '#3B82F6',
  },
  {
    title: 'Ferro Alloys',
    subtitle: 'Ferro Manganese & Silico Manganese',
    desc: 'Premium ferro alloys produced in submerged arc furnaces. Essential for steel production and metallurgical applications.',
    icon: '03',
    color: '#FF006E',
  },
  {
    title: 'Sponge Iron',
    subtitle: 'DRI / HBI',
    desc: 'High-quality direct reduced iron manufactured using state-of-the-art rotary kilns with strict quality control.',
    icon: '04',
    color: '#FF6B00',
  },
  {
    title: 'Billets & Blooms',
    subtitle: 'MS Billets & Blooms',
    desc: 'Semi-finished steel products serving as raw material for downstream manufacturing of long steel products.',
    icon: '05',
    color: '#3B82F6',
  },
  {
    title: 'Wire Rod',
    subtitle: 'Low & High Carbon',
    desc: 'Premium wire rods for diverse applications including wire drawing, fastener manufacturing, and construction.',
    icon: '06',
    color: '#FF006E',
  },
];

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '40px 30px',
        background: hovered
          ? 'rgba(255,255,255,0.05)'
          : 'rgba(255,255,255,0.02)',
        borderRadius: '20px',
        border: `1px solid ${hovered ? product.color + '40' : 'rgba(255,255,255,0.05)'}`,
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-8px)' : 'none',
        boxShadow: hovered ? `0 20px 40px ${product.color}15` : 'none',
      }}
    >
      {/* Glow effect on hover */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `radial-gradient(circle at 50% 50%, ${product.color}08, transparent 50%)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      {/* Number */}
      <span style={{
        fontSize: '48px',
        fontWeight: 900,
        color: product.color,
        opacity: 0.15,
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontFamily: 'monospace',
      }}>
        {product.icon}
      </span>

      {/* Color bar */}
      <div style={{
        width: '40px',
        height: '3px',
        background: product.color,
        borderRadius: '2px',
        marginBottom: '20px',
        transition: 'width 0.3s',
        ...(hovered ? { width: '60px' } : {}),
      }} />

      <h3 style={{
        color: '#fff',
        fontSize: '22px',
        fontWeight: 700,
        margin: '0 0 4px',
      }}>
        {product.title}
      </h3>

      <p style={{
        color: product.color,
        fontSize: '12px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        margin: '0 0 16px',
        fontWeight: 500,
      }}>
        {product.subtitle}
      </p>

      <p style={{
        color: 'rgba(255,255,255,0.4)',
        fontSize: '14px',
        lineHeight: 1.7,
        margin: 0,
      }}>
        {product.desc}
      </p>

      {/* Arrow */}
      <motion.div
        animate={{ x: hovered ? 5 : 0, opacity: hovered ? 1 : 0.3 }}
        style={{
          marginTop: '20px',
          color: product.color,
          fontSize: '20px',
        }}
      >
        &#8594;
      </motion.div>
    </motion.div>
  );
}

export default function ProductsSection() {
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
        style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}
      >
        <p style={{
          color: '#3B82F6',
          fontSize: '12px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Our Products
        </p>

        <h2 style={{
          color: '#fff',
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 700,
          marginBottom: '16px',
          lineHeight: 1.2,
        }}>
          Comprehensive Steel<br />
          <span style={{
            background: 'linear-gradient(90deg, #3B82F6, #FF006E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Product Portfolio</span>
        </h2>

        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '16px',
          maxWidth: '600px',
          margin: '0 auto 60px',
          lineHeight: 1.7,
        }}>
          From raw materials to finished products, we deliver the complete
          range of steel solutions for every industry.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          textAlign: 'left',
        }}>
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
