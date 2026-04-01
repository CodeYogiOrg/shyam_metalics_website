import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 1.5 + i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function HeroSection() {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      padding: '0 20px',
      marginTop: "40px",
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <motion.p
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            color: '#FF6B00',
            fontSize: '13px',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: '10px',
          }}
        >
          Premium Steel Manufacturing
        </motion.p>

        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            color: '#fff',
            fontSize: 'clamp(40px, 8vw, 100px)',
            fontWeight: 800,
            lineHeight: 1,
            margin: '0 0 20px 0',
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FF6B00 40%, #FF006E 70%, #3B82F6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Forging the<br />
          Future of Steel
        </motion.h1>

        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(14px, 1.8vw, 20px)',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          Leading manufacturer of TMT bars, structural steel, and ferro alloys.
          Engineering excellence through cutting-edge metallurgy.
        </motion.p>

        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(255,107,0,0.5), 0 0 60px rgba(255,0,110,0.2)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #FF6B00, #FF006E)',
              border: 'none',
              color: '#fff',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 4px 25px rgba(255,107,0,0.35)',
              fontFamily: 'inherit',
            }}
          >
            Explore Products
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#3B82F6', boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              border: '1.5px solid rgba(59,130,246,0.4)',
              color: '#fff',
              padding: '16px 40px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              fontFamily: 'inherit',
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
