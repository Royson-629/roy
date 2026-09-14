import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Target, Code, Trophy, Map, Phone, X } from 'lucide-react';

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const togglePalette = useCallback(() => {
    setIsOpen((prev) => !prev);
    setSearch('');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        togglePalette();
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, togglePalette]);

  const links = [
    { name: 'Home', href: '#home', icon: Compass, color: '#fde047' },
    { name: 'About', href: '#about', icon: Target, color: '#f472b6' },
    { name: 'Skills', href: '#skills', icon: Code, color: '#60a5fa' },
    { name: 'Projects', href: '#projects', icon: Search, color: '#4ade80' },
    { name: 'Achievements', href: '#achievements', icon: Trophy, color: '#a78bfa' },
    { name: 'Leadership', href: '#leadership', icon: Map, color: '#fb923c' },
    { name: 'Contact', href: '#contact', icon: Phone, color: '#38bdf8' },
  ];

  const filteredLinks = links.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#111827]/40 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4 overflow-hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="w-full max-w-[640px] bg-white border-[4px] border-[#111827] rounded-3xl shadow-[12px_12px_0px_0px_#111827] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center px-6 py-5 border-b-[4px] border-[#111827] gap-4 bg-[#fde047]">
                <Search size={26} strokeWidth={3} className="text-[#111827]" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent outline-none text-[#111827] text-2xl font-black placeholder:text-[#111827]/50 border-none"
                  autoFocus
                />
                <button
                  className="p-1 hover:bg-[#111827]/10 rounded-full text-[#111827] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} strokeWidth={3} />
                </button>
              </div>

              <div className="max-h-[350px] overflow-y-auto p-4 scrollbar-none flex flex-col gap-2">
                {filteredLinks.length > 0 ? (
                  filteredLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-6 py-4 rounded-xl border-2 border-transparent hover:border-[#111827] hover:shadow-[4px_4px_0px_0px_#111827] transition-all group outline-none focus:border-[#111827] focus:shadow-[4px_4px_0px_0px_#111827]"
                      style={{ backgroundColor: 'white' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = link.color}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      onFocus={(e) => e.currentTarget.style.backgroundColor = link.color}
                      onBlur={(e) => e.currentTarget.style.backgroundColor = 'white'}
                    >
                      <link.icon size={24} strokeWidth={2.5} className="text-[#111827]" />
                      <span className="text-[18px] font-bold text-[#111827] uppercase">
                        {link.name}
                      </span>
                    </a>
                  ))
                ) : (
                  <div className="px-6 py-10 text-center font-bold text-[#111827]/50 text-xl">
                    No matching zones found.
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
