import { motion } from 'framer-motion';
import { skills } from '../../data/content';

export const Skills = () => {
  const topRow = [...skills.development, ...skills.development, ...skills.development];
  const bottomRow = [...skills.tools, ...skills.tools, ...skills.tools, ...skills.tools];

  return (
    <section id="skills" className="section-padding min-h-screen flex flex-col justify-center overflow-hidden bg-[#60a5fa]">
      <div className="mb-20 text-center lg:text-left fun-card p-8 md:p-12 rotate-[1deg] w-max max-w-full mx-auto lg:mx-0">
        <div className="eyebrow bg-[#fde047] text-[#111827]">Toolbox</div>
        <h2 className="section-title text-[#111827]">What I build with</h2>
        <p className="section-subtitle mx-auto lg:mx-0 text-[#111827] font-bold">
          A backend-first stack, with just enough frontend to ship complete products.
        </p>
      </div>

      <div className="relative -mx-[24px] lg:-mx-[40px] flex flex-col gap-10">
        
        {/* Development Row */}
        <div className="flex gap-8 w-max animate-[scrollLeft_30s_linear_infinite] hover:[animation-play-state:paused]">
          {topRow.map((skill, index) => (
            <SkillPill key={`top-${index}`} name={skill.name} level={skill.level} color="#4ade80" />
          ))}
        </div>

        {/* Tools Row */}
        <div className="flex gap-8 w-max animate-[scrollRight_25s_linear_infinite] hover:[animation-play-state:paused] ml-[-20%]">
          {bottomRow.map((skill, index) => (
            <SkillPill key={`bottom-${index}`} name={skill.name} level={skill.level} color="#f472b6" />
          ))}
        </div>

      </div>
    </section>
  );
};

const SkillPill = ({ name, level, color }: { name: string; level: string; color: string }) => (
  <motion.div 
    whileHover={{ scale: 1.1, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-6 md:px-8 py-4 md:py-5 rounded-full cursor-default select-none transition-shadow border-[3px] border-[#111827] shadow-[6px_6px_0px_0px_rgba(17,24,39,0.3)] hover:shadow-[10px_10px_0px_0px_#111827] bg-white group"
  >
    <div className="w-4 h-4 rounded-full border-2 border-[#111827] shrink-0" style={{ backgroundColor: color }} />
    <span className="font-black text-[20px] text-[#111827] leading-none">{name}</span>
    <span className="text-sm font-bold text-[#6b7280] bg-gray-100 px-3 py-1 rounded-full border-2 border-gray-300 group-hover:border-[#111827] group-hover:text-[#111827] origin-left transition-colors">
      {level}
    </span>
  </motion.div>
);
