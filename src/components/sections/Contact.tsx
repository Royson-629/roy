import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

export const Contact = () => {
  return (
    <section id="contact" className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f472b6]">
      
      {/* Playful background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #111827 25%, transparent 25%, transparent 75%, #111827 75%, #111827), linear-gradient(45deg, #111827 25%, transparent 25%, transparent 75%, #111827 75%, #111827)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }} />
      
      <div className="relative z-10 w-full max-w-4xl fun-card bg-[#fffbea] p-[clamp(32px,8vw,100px)] text-center rotate-[-1deg] border-[6px]">
        <motion.div
           initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           viewport={{ once: true, margin: "-10%" }}
           transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <div className="eyebrow bg-[#60a5fa] text-[#111827] mx-auto mb-8 shadow-[4px_4px_0px_0px_#111827] border-4">What's next?</div>
          
          <h2 className="text-[clamp(40px,8vw,90px)] font-black tracking-tighter leading-none mb-10 text-[#111827] uppercase">
            Let's build <br/><span className="text-[#fde047] inline-block" style={{ WebkitTextStroke: '3px #111827', textShadow: '6px 6px 0px #111827' }}>something fun.</span>
          </h2>
          
          <p className="text-[#4b5563] font-bold text-[18px] md:text-[22px] max-w-xl mx-auto mb-16 leading-relaxed bg-white/50 p-6 rounded-3xl border-4 border-dashed border-[#111827]">
            Open to backend internships and full-stack opportunities — especially in and around Bengaluru.
          </p>

          <motion.a 
            whileHover={{ scale: 1.05, rotate: -2, y: -2 }}
            whileTap={{ scale: 0.95, y: 8, boxShadow: '0px 0px 0px 0px #111827', rotate: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            href="mailto:menezesroyson19@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-[#4ade80] text-[#111827] px-8 md:px-10 py-5 md:py-6 rounded-full font-black text-xl md:text-2xl border-[5px] border-[#111827] shadow-[12px_12px_0px_0px_#111827] uppercase touch-manipulation cursor-pointer select-none"
          >
            <span className="relative z-10">Get in touch</span>
            <span className="relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-[4px] border-[#111827] group-hover:rotate-45 group-hover:scale-110 group-active:rotate-90 group-active:scale-95 transition-transform duration-300 shadow-[4px_4px_0px_0px_#111827]">
              <ArrowRight strokeWidth={5} size={28} />
            </span>
          </motion.a>

          <div className="mt-24 flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <SocialLink href="mailto:menezesroyson19@gmail.com" icon={<Mail size={28} strokeWidth={3} />} label="Email" color="#fde047" />
            <SocialLink href="tel:+918618251629" icon={<Phone size={28} strokeWidth={3} />} label="Phone" color="#60a5fa" />
            <SocialLink href="https://www.linkedin.com/in/royson-adrin-menezes-a28363311" icon={<LinkedinIcon />} label="LinkedIn" color="#4ade80" />
            <SocialLink href="https://github.com/Royson-629" icon={<GithubIcon />} label="GitHub" color="#f472b6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label, color }: { href: string, icon: React.ReactNode, label: string, color: string }) => (
  <motion.a 
    whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
    whileTap={{ scale: 0.9, rotate: -5, y: 4, boxShadow: '0px 0px 0px 0px #111827' }}
    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-[#111827] bg-white border-[4px] border-[#111827] px-5 py-3 rounded-2xl shadow-[6px_6px_0px_0px_#111827] touch-manipulation select-none"
    aria-label={label}
    style={{ borderBottomColor: color, borderBottomWidth: '8px' }}
  >
    {icon}
    <span className="font-black text-[18px] uppercase hidden sm:block">{label}</span>
  </motion.a>
);
