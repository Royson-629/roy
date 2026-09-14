import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { journey } from '../../data/content';

export const Leadership = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section id="leadership" className="section-padding min-h-screen bg-[#4ade80] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="mb-24 text-center relative z-10"
      >
        <div className="eyebrow bg-[#fde047] text-[#111827] shadow-[2px_2px_0px_0px_#111827]">Journey</div>
        <h2 className="section-title text-[#111827] bg-white inline-block px-8 py-3 rounded-2xl border-4 border-[#111827] shadow-[8px_8px_0px_0px_#111827] rotate-[2deg]">How I got here</h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto z-10" ref={containerRef}>
        {/* Thick outline pipeline */}
        <div className="absolute left-[39px] lg:left-1/2 top-0 bottom-0 w-[8px] bg-[#111827] -translate-x-1/2 origin-top rounded-full shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" />
        
        {/* Animated fill line inside the pipeline */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-[39px] lg:left-1/2 top-0 bottom-0 w-[8px] bg-[#f472b6] -translate-x-1/2 origin-top z-10 rounded-full" 
        />

        <div className="flex flex-col gap-16 lg:gap-24">
          {journey.map((item, idx) => (
            <TimelineItem key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: typeof journey[0]; index: number }) => {
  const colors = ['#fde047', '#60a5fa', '#fffbea', '#f472b6'];
  const bgColor = colors[index % colors.length];
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, x: 0, rotate: isEven ? -2 : 2 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.1 }}
      className={`relative flex items-center justify-between w-full flex-col lg:flex-row ${
        isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Node dot chunk */}
      <motion.div 
        whileHover={{ scale: 1.3, rotate: 15 }}
        whileTap={{ scale: 0.9, rotate: -15, boxShadow: '0px 0px 0px 0px #111827' }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="absolute left-[39px] lg:left-1/2 w-[32px] h-[32px] rounded-full bg-white border-[5px] border-[#111827] -translate-x-1/2 z-20 flex items-center justify-center shadow-[4px_4px_0px_0px_#111827] cursor-pointer"
      >
        <div className="w-[12px] h-[12px] rounded-full bg-[#f472b6] animate-ping" />
      </motion.div>

      <div className="hidden lg:block lg:w-[45%]" />

      {/* Content Chunk */}
      <div className={`w-full pl-24 lg:pl-0 lg:w-[45%] ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
        <motion.div 
          whileHover={{ scale: 1.05, rotate: isEven ? -4 : 4, y: -5 }}
          whileTap={{ scale: 0.95, y: 0, boxShadow: '0px 0px 0px 0px #111827' }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="fun-card p-6 md:p-8 outline-none border-4 border-[#111827] shadow-[8px_8px_0px_0px_#111827] cursor-grab active:cursor-grabbing touch-manipulation"
          style={{ backgroundColor: bgColor }}
        >
          <div className="inline-block px-4 py-2 bg-white border-[3px] border-[#111827] rounded-xl text-sm md:text-md font-black text-[#111827] tracking-widest mb-6 shadow-[4px_4px_0px_0px_#111827]">
            {item.year}
          </div>
          <h4 className="text-xl md:text-3xl font-black text-[#111827] mb-4 tracking-tight uppercase leading-[1.1]">
            {item.title}
          </h4>
          <p className="text-[#4b5563] font-bold leading-relaxed text-[16px] md:text-[18px]">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
