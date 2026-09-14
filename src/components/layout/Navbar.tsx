import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'leadership', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = [
    { name: 'About', href: '#about', color: '#f472b6', rotate: -3 },
    { name: 'Skills', href: '#skills', color: '#60a5fa', rotate: 2 },
    { name: 'Projects', href: '#projects', color: '#fde047', rotate: -2 },
    { name: 'Achievements', href: '#achievements', color: '#4ade80', rotate: 4 },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="flex items-center justify-between w-full max-w-[880px] px-4 py-3 rounded-[999px] bg-white border-[4px] border-[#111827] shadow-[6px_6px_0px_0px_#111827]"
        >
          <a href="#" className="font-['Inter_Tight'] font-black text-[20px] ml-2 tracking-tight z-10 block select-none text-[#111827] uppercase">
            ROYSON MENEZES<span className="text-[#f472b6] animate-pulse">.</span>
          </a>
          
          <div className="hidden md:flex relative items-center gap-1 text-[15px] font-black uppercase tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 transition-colors z-10 rounded-full ${isActive ? 'text-[#111827]' : 'text-gray-400 hover:text-[#111827]'}`}
                  onClick={() => setActiveSection(link.href.substring(1))}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border-[3px] border-[#111827]"
                      style={{ backgroundColor: link.color }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden md:block z-10">
            <motion.a 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95, y: 4, boxShadow: '0px 0px 0px 0px #111827' }}
              href="#contact" 
              className="inline-block text-[15px] font-black uppercase px-6 py-2.5 rounded-full bg-[#f472b6] text-[#111827] border-[3px] border-[#111827] shadow-[4px_4px_0px_0px_#111827]"
            >
              Let's talk!
            </motion.a>
          </div>

          <button 
            className="md:hidden z-10 flex flex-col items-center justify-center w-12 h-12 rounded-full bg-[#fde047] border-[3px] border-[#111827] shadow-[4px_4px_0px_0px_#111827] gap-1 transition-transform active:scale-95 active:translate-y-1 active:translate-x-1 active:shadow-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-1 bg-[#111827] block rounded-full"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-1 bg-[#111827] block rounded-full"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-1 bg-[#111827] block rounded-full"
            />
          </button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#111827]/80 backdrop-blur-md flex flex-col items-center justify-center gap-6 p-4 perspective-1000"
          >
            {[...navLinks, { name: 'Contact', href: '#contact', color: '#fde047', rotate: -5 }].map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: link.rotate }}
                exit={{ opacity: 0, scale: 0.5, rotate: 0 }}
                whileTap={{ scale: 0.9, rotate: 0, zIndex: 100 }}
                transition={{ 
                  delay: 0.05 * i, 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 15 
                }}
                className="w-full max-w-[280px] border-4 border-[#111827] shadow-[8px_8px_0px_0px_#111827] rounded-3xl py-5 text-center font-['Inter_Tight'] text-3xl font-black text-[#111827] uppercase active:shadow-[2px_2px_0px_0px_#111827] transition-shadow disabled:pointer-events-none"
                style={{ backgroundColor: link.color }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
