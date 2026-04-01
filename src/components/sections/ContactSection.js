import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. We will get back to you shortly.');
  };

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  };

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
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left: Info */}
        <div>
          <p style={{
            color: '#FF6B00',
            fontSize: '12px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Get In Touch
          </p>

          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 700,
            marginBottom: '20px',
            lineHeight: 1.2,
          }}>
            Let's Build<br />
            <span style={{
              background: 'linear-gradient(90deg, #FF6B00, #FF006E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Together</span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '15px',
            lineHeight: 1.8,
            marginBottom: '40px',
          }}>
            Whether you need bulk steel supplies, custom specifications,
            or want to explore partnership opportunities, we're here to help.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { label: 'Corporate Office', value: 'Kolkata, West Bengal, India' },
              { label: 'Email', value: 'info@shyammetalics.com' },
              { label: 'Phone', value: '+91 33 2283 0540' },
            ].map((item) => (
              <div key={item.label} style={{
                padding: '16px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
              }}>
                <p style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  margin: '0 0 4px',
                }}>
                  {item.label}
                </p>
                <p style={{ color: '#fff', fontSize: '15px', margin: 0, fontWeight: 500 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            padding: '40px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Tell us about your requirements..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: '120px',
            }}
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(255,107,0,0.4), 0 0 60px rgba(255,0,110,0.2)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, #FF6B00, #FF006E)',
              border: 'none',
              color: '#fff',
              padding: '16px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              marginTop: '8px',
              fontFamily: 'inherit',
              boxShadow: '0 4px 25px rgba(255,107,0,0.35)',
            }}
          >
            Send Inquiry
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
