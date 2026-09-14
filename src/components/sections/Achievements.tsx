import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Hand } from 'lucide-react';
import { achievements } from '../../data/content';

export const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  return (
    <section id="achievements" className="py-32 relative min-h-screen flex flex-col justify-center overflow-x-hidden bg-[#fde047]">
      {/* Background polka dots for fun */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#111827 3px, transparent 3px)', backgroundSize: '32px 32px' }} />

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="px-[clamp(24px,6vw,40px)] max-w-[1200px] mx-auto w-full mb-8 text-center relative z-10"
      >
        <div className="eyebrow bg-[#f472b6] text-[#111827] shadow-[2px_2px_0px_0px_#111827]">Wins</div>
        <h2 className="section-title text-[#111827] bg-white inline-block px-8 py-4 border-4 border-[#111827] shadow-[8px_8px_0px_0px_#111827] rotate-[-2deg]">Trophy Cabinet</h2>
        
        {/* Navigation Indicator & Controls */}
        <div className="mt-8 flex justify-center items-center">
          {/* Mobile Swipe Indicator */}
          <div className="md:hidden flex items-center gap-2 text-[#111827] font-black uppercase tracking-widest bg-white/50 px-4 py-2 rounded-full border-2 border-dashed border-[#111827]">
            Swipe cards <Hand className="w-5 h-5 ml-1 animate-[bounce_1s_infinite] rotate-90" />
          </div>

          {/* Desktop Arrow Controls */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="bg-white border-4 border-[#111827] shadow-[4px_4px_0px_0px_#111827] text-[#111827] p-3 rounded-full hover:bg-[#60a5fa] hover:scale-110 active:scale-95 active:shadow-none transition-all touch-manipulation"
            >
              <ChevronLeft strokeWidth={4} size={28} />
            </button>
            <button 
              onClick={scrollRight}
              className="bg-white border-4 border-[#111827] shadow-[4px_4px_0px_0px_#111827] text-[#111827] p-3 rounded-full hover:bg-[#60a5fa] hover:scale-110 active:scale-95 active:shadow-none transition-all touch-manipulation"
            >
              <ChevronRight strokeWidth={4} size={28} />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="relative w-full overflow-hidden z-10" ref={containerRef}>
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 md:gap-16 px-[clamp(24px,6vw,40px)] pb-32 pt-8 overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth"
        >
          {achievements.map((achievement, idx) => (
            <AchievementCard key={idx} achievement={achievement} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  
  // Parallax subtle rotation
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 10 : -10, index % 2 === 0 ? -10 : 10]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotate }}
      initial={{ opacity: 0, y: 150, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      whileHover={{ y: -20, scale: 1.05 }}
      whileTap={{ scale: 0.95, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.1 }}
      className="group relative flex-none w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[450px] snap-center rounded-[32px] cursor-grab active:cursor-grabbing touch-pan-x"
    >
      <div className="aspect-[4/5] w-full relative bg-white border-4 border-[#111827] shadow-[12px_12px_0px_0px_#111827] rounded-[32px] p-5 flex flex-col pointer-events-none">
        
        {/* Polarized Image area */}
        <div className="w-full h-[55%] rounded-[20px] overflow-hidden border-4 border-[#111827] mb-6 bg-[#111827] relative">
          <img 
            src={achievement.image} 
            alt={achievement.title} 
            className="w-full h-full object-cover filter contrast-125 saturate-150 group-hover:scale-110 transition-transform duration-700 ease-[0.19,1,0.22,1]"
          />
        </div>

        {/* Content area: Never hidden on mobile, robustly displayed */}
        <div className="flex-1 flex flex-col justify-start">
          <div className="flex gap-2 mb-2 flex-wrap">
            <div className="text-xs md:text-sm font-black text-[#f472b6] uppercase tracking-widest border-2 border-[#f472b6] inline-block w-max px-3 py-1 rounded-full bg-[#fdf2f8]">
              {achievement.date}
            </div>
            <div className="text-xs md:text-sm font-black text-[#111827] uppercase tracking-widest border-2 border-[#111827] inline-block w-max px-3 py-1 rounded-full bg-[#fde047] shadow-[2px_2px_0px_0px_#111827] rotate-[2deg]">
              {achievement.result}
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#111827] leading-[1.1] mb-2 uppercase">
            {achievement.title}
          </h3>
          <div className="text-[16px] md:text-[18px] font-black text-[#60a5fa] uppercase border-b-4 border-[#60a5fa] inline-block w-max pb-1 mb-4">
            {achievement.event}
          </div>
          
          <p className="text-[15px] font-black text-[#4b5563] line-clamp-3 leading-snug">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
