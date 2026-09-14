// App entry point
import { InteractiveCursor } from './components/ui/InteractiveCursor';

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Leadership } from './components/sections/Leadership';
import { Contact } from './components/sections/Contact';
import { CommandPalette } from './components/ui/CommandPalette';

function App() {
  return (
    <>
      <InteractiveCursor />
      <CommandPalette />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-260px] left-[-220px] w-[700px] h-[700px] rounded-full blur-[110px] bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)] animate-[drift1_34s_ease-in-out_infinite]" />
        <div className="absolute top-[30%] right-[-240px] w-[560px] h-[560px] rounded-full blur-[110px] bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] animate-[drift2_40s_ease-in-out_infinite]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Leadership />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-[15px] font-black text-[#111827] bg-[#fde047] border-t-4 border-[#111827] uppercase">
         © 2026 Royson Menezes. All rights reserved.
      </footer>
    </>
  );
}

export default App;
