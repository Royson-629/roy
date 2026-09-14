import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { HeroObject } from '../3d/HeroObject';

export const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 7.5], fov: 45 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} color="#fff" />
          <directionalLight position={[-5, -10, -5]} intensity={0.6} color="#f472b6" />
          <Suspense fallback={null}>
            <HeroObject />
          </Suspense>
        </Canvas>
      </div>

      <div className="z-10 relative mt-10 md:mt-0 max-w-4xl mx-auto w-full px-4">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: -2 }}
          whileHover={{ scale: 1.1, rotate: 2, y: -4 }}
          whileTap={{ scale: 0.9, y: 0, boxShadow: '2px 2px 0px 0px #111827' }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-4 border-[#111827] shadow-[6px_6px_0px_0px_#111827] mb-12 hover:shadow-[4px_4px_0px_0px_#111827] transition-shadow cursor-crosshair mx-auto select-none"
        >
          <span className="w-4 h-4 rounded-full bg-[#4ade80] border-[3px] border-[#111827] animate-[pulse_1s_infinite_alternate]" />
          <span className="font-black text-[#111827] uppercase text-[12px] md:text-sm tracking-widest mt-0.5">Open to roles in Bengaluru</span>
        </motion.div>
        
        {/* Playful Staggered Name */}
        <h1 className="text-[clamp(65px,14vw,160px)] leading-[0.8] mb-8 font-black uppercase text-[#111827] tracking-tighter" style={{ WebkitTextStroke: '2px #111827' }}>
          <motion.div 
            initial={{ y: 80, opacity: 0, rotate: 5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="flex justify-center items-center flex-wrap gap-2 md:gap-4 relative z-10"
          >
             <motion.span whileHover={{ y: -10, rotate: -4, color: '#fde047' }}>R</motion.span>
             <motion.span whileHover={{ y: -10, rotate: 4, color: '#fde047' }}>o</motion.span>
             <motion.span whileHover={{ y: -10, rotate: -4, color: '#fde047' }}>y</motion.span>
             <motion.span whileHover={{ y: -10, rotate: 4, color: '#fde047' }}>s</motion.span>
             <motion.span whileHover={{ y: -10, rotate: -4, color: '#fde047' }}>o</motion.span>
             <motion.span whileHover={{ y: -10, rotate: 4, color: '#fde047' }}>n</motion.span>
          </motion.div>
          <motion.div 
            initial={{ y: 80, opacity: 0, rotate: -5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="text-[#f472b6] relative"
          >
             Menezes
             {/* Sticker decoration */}
             <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
               className="absolute -right-4 md:-right-12 -top-6 md:-top-10 text-3xl md:text-5xl"
             >
               ✨
             </motion.div>
          </motion.div>
        </h1>
        
        <motion.p 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
          className="text-[clamp(18px,2.5vw,28px)] font-bold text-[#4b5563] max-w-2xl mx-auto mt-8 bg-white/50 backdrop-blur-sm p-4 rounded-3xl border-4 border-dashed border-[#111827] shadow-[8px_8px_0px_0px_rgba(17,24,39,0.1)]"
        >
          Building backends with <span className="bg-[#fde047] text-[#111827] px-2 py-0.5 rounded-xl border-4 border-[#111827] rotate-[4deg] inline-block shadow-[4px_4px_0px_0px_#111827] hover:rotate-[-2deg] transition-all cursor-crosshair active:shadow-none active:translate-y-1">Java & Spring Boot</span> that just work.
        </motion.p>
      </div>

      {/* Marquee Tape at the bottom for extra playfulness */}
      <div className="absolute bottom-10 left-0 w-[120%] rotate-[-2deg] bg-[#60a5fa] border-y-4 border-[#111827] flex overflow-hidden py-3 z-30 shadow-[0_8px_0px_0px_rgba(17,24,30,0.2)]">
        <motion.div 
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap text-[#111827] font-black uppercase text-xl md:text-3xl tracking-widest gap-8"
        >
          {Array(10).fill('AVAILABLE FOR INTERNSHIPS • JAVA WIZARD • ALWAYS SHIPPING • ').map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
