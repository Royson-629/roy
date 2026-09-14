import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="section-padding min-h-screen bg-[#fffbea] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="mb-24 text-center"
      >
        <div className="eyebrow bg-[#60a5fa] text-[#111827] shadow-[2px_2px_0px_0px_#111827]">Selected work</div>
        <h2 className="section-title">Things I've shipped</h2>
        <p className="section-subtitle mx-auto">
          Three projects, three different problems — built to work, not just to look pretty.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12 lg:gap-32">
        {projects.map((project, index) => {
          const colors = ['#f472b6', '#4ade80', '#fde047'];
          const bgColors = ['#fdf2f8', '#f0fdf4', '#fefce8'];
          return (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              accentColor={colors[index % colors.length]} 
              cardBg={bgColors[index % bgColors.length]}
            />
          );
        })}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, accentColor, cardBg }: { project: typeof projects[0]; index: number; accentColor: string; cardBg: string }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 150, rotate: isEven ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className="group fun-card p-[clamp(24px,5vw,60px)] relative overflow-hidden"
      style={{ backgroundColor: cardBg }}
    >
      <div className="flex flex-col items-start w-full gap-8">
        
        <div className="flex flex-col w-full">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="inline-block self-start font-black text-[13px] tracking-wider uppercase px-4 py-2 rounded-xl mb-6 border-[3px] border-[#111827] shadow-[4px_4px_0px_0px_#111827] select-none"
            style={{ backgroundColor: accentColor }}
          >
            {project.tag}
          </motion.div>
          
          <h3 className="text-[clamp(36px,4vw,48px)] font-black mb-6 tracking-tight text-[#111827] leading-none uppercase">
            {project.title}
          </h3>
          
          <p className="text-[#4b5563] text-[18px] font-bold leading-[1.65] mb-8 max-w-3xl">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[14px] font-black text-[#111827] px-4 py-2 rounded-xl bg-white border-[3px] border-[#111827] shadow-[3px_3px_0px_0px_#111827] select-none">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, y: 4, boxShadow: '0px 0px 0px 0px #111827' }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-3 font-black text-[18px] uppercase px-8 py-4 rounded-full bg-white text-[#111827] md:bg-[#111827] md:text-white border-[4px] border-[#111827] md:hover:bg-white md:hover:text-[#111827] shadow-[6px_6px_0px_0px_#111827] transition-colors w-max touch-manipulation"
            >
              View Project
              <ArrowUpRight strokeWidth={4} size={24} />
            </motion.a>

            {/* @ts-ignore - repo is added in content.ts dynamically */}
            {project.repo && (
              <motion.a 
                href={project.repo} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 4, boxShadow: '0px 0px 0px 0px #111827' }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="inline-flex items-center gap-3 font-black text-[18px] uppercase px-8 py-4 rounded-full bg-[#fde047] text-[#111827] border-[4px] border-[#111827] hover:bg-white shadow-[6px_6px_0px_0px_#111827] transition-colors w-max touch-manipulation"
              >
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
