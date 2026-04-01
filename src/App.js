import React, { useState, useCallback } from 'react';
import Scene from './components/three/Scene';
import Navbar from './components/ui/Navbar';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollIndicator from './components/ui/ScrollIndicator';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProductsSection from './components/sections/ProductsSection';
import ProcessSection from './components/sections/ProcessSection';
import StatsSection from './components/sections/StatsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/ui/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useMousePosition } from './hooks/useMousePosition';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const { scrollProgress, currentSection } = useScrollProgress();
  const { mouse } = useMousePosition();

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="app">
      <LoadingScreen onComplete={handleLoadComplete} />

      <Scene
        scrollProgress={scrollProgress}
        mouseX={mouse.x}
        mouseY={mouse.y}
      />

      {loaded && (
        <>
          <Navbar currentSection={currentSection} />
          <ScrollIndicator />

          <div className="content-wrapper">
            <HeroSection />
            <AboutSection />
            <ProductsSection />
            <ProcessSection />
            <StatsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
