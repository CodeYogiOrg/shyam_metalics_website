import { useState, useEffect, useRef } from 'react';

export function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Smooth interpolation
  useEffect(() => {
    let raf;
    const lerp = () => {
      smoothMouse.current.x += (mouse.x - smoothMouse.current.x) * 0.05;
      smoothMouse.current.y += (mouse.y - smoothMouse.current.y) * 0.05;
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(raf);
  }, [mouse]);

  return { mouse, smoothMouse: smoothMouse.current };
}
