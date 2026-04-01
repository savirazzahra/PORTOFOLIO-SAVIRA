import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Mail, Phone, User, X } from 'lucide-react';

function MagneticButton({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ willChange: "transform" }}
      className="glass-pill px-8 py-4 md:px-12 md:py-6 flex items-center gap-4 group hover:bg-white/10 transition-colors duration-300 relative overflow-hidden w-full justify-center"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <span className="text-xl md:text-3xl font-bold tracking-widest uppercase font-serif relative z-10">
        {children}
      </span>
      <motion.div
        className="relative z-10 bg-white text-black rounded-full p-2 md:p-3"
        whileHover={{ scale: 1.2, rotate: -45 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ArrowRight size={24} strokeWidth={3} />
      </motion.div>
    </motion.button>
  );
}

function CollaborateSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-[340px] md:w-[480px] h-[140px] flex items-center justify-center mt-8" style={{ perspective: '1000px' }}>
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d', willChange: "transform" }}
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 15 }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <MagneticButton onClick={() => setIsFlipped(true)}>
            Let's Collaborate
          </MagneticButton>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}
        >
          <div className="glass-pill w-full h-full px-6 py-4 md:px-8 md:py-6 flex flex-col justify-center gap-2 md:gap-3 relative bg-black/60 backdrop-blur-xl border border-white/20 rounded-[2rem] md:rounded-[3rem] text-left shadow-2xl">
            <button 
              onClick={() => setIsFlipped(false)} 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors z-20 p-2"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-3 text-white/90">
              <User size={18} className="text-white/60 shrink-0" />
              <span className="font-medium text-sm md:text-base truncate">@zarradee</span>
            </div>
            
            <div className="flex items-center gap-3 text-white/90">
              <Mail size={18} className="text-white/60 shrink-0" />
              <a href="mailto:arnindhita05@gmail.com" className="font-medium text-sm md:text-base hover:text-white transition-colors truncate">arnindhita05@gmail.com</a>
            </div>
            
            <div className="flex items-center gap-3 text-white/90">
              <Phone size={18} className="text-white/60 shrink-0" />
              <a href="https://wa.me/62895342153926" className="font-medium text-sm md:text-base hover:text-white transition-colors truncate">+62 895 342 153 926</a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringSocials, setIsHoveringSocials] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="relative z-10 py-32 flex flex-col items-center justify-center text-center overflow-hidden">
      <AnimatePresence>
        {isHoveringSocials && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
            className="fixed pointer-events-none z-[100] text-white font-sans text-[10px] tracking-widest uppercase bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-xl"
            style={{ 
              left: mousePos.x + 15, 
              top: mousePos.y + 15 
            }}
          >
            Click!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="space-y-8 flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 font-serif uppercase max-w-4xl leading-tight px-4">
          turning your visual concepts into reality.
        </h2>
        
        <CollaborateSection />
      </motion.div>
      
      <div className="absolute bottom-6 left-0 w-full flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-12 text-sm md:text-base font-medium tracking-widest uppercase text-white/40">
        <span>© 2026 Savira Az Zahra Arnindhita</span>
        <div 
          className="flex gap-6 items-center mt-4 md:mt-0"
          onMouseEnter={() => setIsHoveringSocials(true)}
          onMouseLeave={() => setIsHoveringSocials(false)}
        >
          <a href="https://www.instagram.com/zarradee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-none">Instagram</a>
          <a href="https://www.behance.net/saviraarnindh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-none">Behance</a>
          <a href="https://www.linkedin.com/in/savira-az-zahra-arnindhita-63a273326" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-none">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
