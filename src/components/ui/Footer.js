import React from 'react';
import { motion } from 'framer-motion';

const footerLinks = {
  Company: ['About Us', 'Leadership', 'Careers', 'Sustainability', 'CSR'],
  Products: ['TMT Bars', 'Structural Steel', 'Ferro Alloys', 'Sponge Iron', 'Wire Rods'],
  Resources: ['Certifications', 'Downloads', 'Blog', 'Media', 'FAQ'],
  Connect: ['Contact Us', 'Dealer Locator', 'Investor Relations', 'Grievance'],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      position: 'relative',
      zIndex: 2,
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '80px 40px 40px',
    }}>
      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}>
        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '60px',
        }}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: '10px' }}>
                    <motion.button
                      whileHover={{ color: '#FF6B00', x: 4 }}
                      style={{
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: '13px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        fontFamily: 'inherit',
                        display: 'inline-block',
                        transition: 'color 0.2s',
                      }}
                    >
                      {link}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{
          padding: '40px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '40px',
        }}>
          <div>
            <h4 style={{ color: '#fff', fontSize: '18px', margin: '0 0 4px' }}>
              Stay Updated
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', margin: 0 }}>
              Get the latest news and product updates.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '12px 20px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                width: '250px',
                fontFamily: 'inherit',
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #FF6B00, #FF8533)',
                border: 'none',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: '12px',
            margin: 0,
          }}>
            &copy; 2024 Shyam Metalics and Energy Ltd. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((link) => (
              <button
                key={link}
                style={{
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '12px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: 'inherit',
                }}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, rotate: -180 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              transition: 'border-color 0.3s',
            }}
          >
            &#8593;
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
