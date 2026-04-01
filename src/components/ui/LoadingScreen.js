import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            onComplete?.();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 25 + 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          {/* Animated logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '3px solid transparent',
              borderTopColor: '#FF6B00',
              borderRightColor: '#00D4FF',
              boxShadow: '0 0 40px rgba(255,107,0,0.2), inset 0 0 40px rgba(0,212,255,0.1)',
            }}
          />

          {/* Brand */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              color: '#fff',
              fontSize: '24px',
              fontWeight: 300,
              letterSpacing: '8px',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Shyam<span style={{ color: '#FF6B00', fontWeight: 700 }}>Metal</span>
          </motion.h2>

          {/* Progress bar */}
          <div style={{
            width: '200px',
            height: '2px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '1px',
            overflow: 'hidden',
          }}>
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #FF6B00, #00D4FF)',
                borderRadius: '1px',
              }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Percentage */}
          <motion.span
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '12px',
              letterSpacing: '3px',
              fontFamily: 'monospace',
            }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
