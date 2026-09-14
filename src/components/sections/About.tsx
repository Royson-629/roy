import { motion } from 'framer-motion';
import { aboutStats } from '../../data/content';

export const About = () => {
  return (
    <section id="about" className="section-padding min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 100, rotate: -5 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className="w-full fun-card bg-[#f472b6] p-[clamp(20px,4vw,60px)] origin-center -mx-4 lg:mx-0 shadow-[10px_10px_0px_0px_#111827]"
      >
        <div className="fun-card bg-[#fffbea] p-[clamp(24px,5vw,80px)] rotate-[2deg] border-4 border-[#111827] shadow-[12px_12px_0px_0px_rgba(17,24,39,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-center">
            
            {/* Avatar - Pop Art Style */}
            <div className="relative mx-auto w-full max-w-[300px] lg:max-w-none">
              <motion.div 
                animate={{ rotate: 5 }}
                transition={{ repeat: Infinity, duration: 4, repeatType: 'mirror', ease: 'easeInOut' }}
                className="absolute inset-0 bg-[#fde047] rounded-[24px] border-4 border-[#111827] translate-x-4 translate-y-4" 
              />
              <motion.div 
                animate={{ rotate: -5 }}
                transition={{ repeat: Infinity, duration: 5, repeatType: 'mirror', ease: 'easeInOut' }}
                className="absolute inset-0 bg-[#60a5fa] rounded-[24px] border-4 border-[#111827] -translate-x-3 -translate-y-2" 
              />
              
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="relative border-4 border-[#111827] rounded-[24px] bg-white overflow-hidden aspect-square fun-card shadow-[4px_4px_0px_0px_#111827]"
              >
                <img 
                  src="/profile.jpg" 
                  alt="Royson D'Souza" 
                  className="w-full h-full object-cover mix-blend-multiply filter contrast-125 saturate-150"
                />
              </motion.div>
            </div>

            {/* Bio Content */}
            <div>
              <div className="eyebrow bg-[#4ade80] text-[#111827] mb-8 shadow-[2px_2px_0px_0px_#111827]">Identity</div>
              
              <h2 className="text-[clamp(22px,2.5vw,32px)] leading-relaxed text-[#111827] font-bold mb-8">
                I'm a final-year BCA student at St. Aloysius building microservices using <span className="text-[#f472b6] font-black underline decoration-4 underline-offset-4 pointer-events-none">Spring Boot</span> while letting <span className="text-[#60a5fa] font-black underline decoration-4 underline-offset-4 pointer-events-none">Antigravity AI handle the React.</span> I started off writing basic Servlets and JDBC until I realized saving time is better than <motion.span whileHover={{ scale: 1.1, rotate: -5 }} className="bg-[#fde047] px-2 py-1 rounded-md border-4 border-[#111827] shadow-[4px_4px_0px_0px_#111827] inline-block cursor-pointer mx-1 active:translate-y-1 active:shadow-none transition-shadow">suffering.</motion.span>
              </h2>

              <p className="text-[18px] text-[#4b5563] mb-12 font-bold max-w-2xl leading-relaxed">
                When I'm not organizing university-wide IT fests or leading my contingent to overall championships, I'm probably desperately trying to center a div. Seeking an internship where I can write scalable code and drink free coffee.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 lg:gap-8">
                <StatCard value={aboutStats.cgpa.toFixed(2)} label="CGPA" color="#fde047" index={0} />
                <StatCard value={String(aboutStats.shipped)} label="Projects" color="#60a5fa" index={1} />
                <StatCard value={String(aboutStats.championships)} label="Championships" color="#4ade80" index={2} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const StatCard = ({ value, label, color, index }: { value: string; label: string; color: string; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50, rotate: 10 }}
    whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -3 : 3 }}
    viewport={{ once: true, margin: '-50px' }}
    whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? -5 : 5, y: -10 }}
    whileTap={{ scale: 0.9, rotate: 0, y: 0, boxShadow: '0px 0px 0px 0px #111827', translateY: '4px', translateX: '4px' }}
    transition={{ type: 'spring', stiffness: 300, damping: 15, delay: index * 0.1 }}
    className="flex flex-col border-4 border-[#111827] p-5 rounded-2xl shadow-[6px_6px_0px_0px_#111827] cursor-pointer touch-manipulation"
    style={{ backgroundColor: color }}
  >
    <span className="text-[40px] font-black text-[#111827] mb-0 tracking-tight leading-none">{value}</span>
    <span className="text-[14px] font-black tracking-wider text-[#111827] uppercase mt-2">{label}</span>
  </motion.div>
);
