import { useState, useEffect, useCallback } from 'react';

export function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [velocity, setVelocity] = useState(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? y / maxScroll : 0;
    const vh = window.innerHeight;
    const section = Math.floor(y / vh);

    setVelocity(y - scrollY);
    setScrollY(y);
    setScrollProgress(progress);
    setCurrentSection(section);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Get progress within a specific vh range (e.g., 0-100vh returns 0-1)
  const getSectionProgress = useCallback((startVh, endVh) => {
    const vh = window.innerHeight;
    const start = startVh * vh / 100;
    const end = endVh * vh / 100;
    const progress = (scrollY - start) / (end - start);
    return Math.max(0, Math.min(1, progress));
  }, [scrollY]);

  return { scrollY, scrollProgress, currentSection, velocity, getSectionProgress };
}
