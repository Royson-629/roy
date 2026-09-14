import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const InteractiveCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Extra bouncy spring for playfully following the mouse
  const cursorX = useSpring(0, { stiffness: 800, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 800, damping: 20 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsMobile(!mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsMobile(!e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    cursorX.set(x);
    cursorY.set(y);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.fun-card') ||
        target.closest('.fun-button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, [x, y, cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed top-0 left-0 pointer-events-none z-[400] mix-blend-difference"
      animate={{
        width: isHovered ? 40 : 16,
        height: isHovered ? 40 : 16,
        backgroundColor: isHovered ? '#f472b6' : '#60a5fa', // pink on hover, blue normally
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
    >
      <div className="w-full h-full rounded-full border-2 border-white opacity-50" />
    </motion.div>
  );
};
