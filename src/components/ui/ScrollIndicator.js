import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {/* <motion.span
        style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '10px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
        }}
      >
        Scroll
      </motion.span> */}
      {/* <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '20px',
          height: '32px',
          borderRadius: '10px',
          border: '1.5px solid rgba(255,255,255,0.3)',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '6px',
        }}
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '3px',
            height: '8px',
            borderRadius: '2px',
            background: 'linear-gradient(180deg, #FF6B00, transparent)',
          }}
        />
      </motion.div>*/}
    </motion.div>
  );
}
