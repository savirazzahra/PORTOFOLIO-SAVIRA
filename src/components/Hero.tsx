import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative mb-8"
      >
        {/* Profile Photo Container */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full glass-panel overflow-hidden flex items-center justify-center">
          <img
            src="https://github.com/user-attachments/assets/94a3fd78-deca-485e-b374-2aa277e3afd0"
            alt="Profile"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Shine Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-full">
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
          </div>
        </div>

        {/* Floating Y2K Star */}
        <motion.div
          className="absolute -top-4 -right-4 text-white/80"
          style={{ willChange: "transform" }}
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
        >
          <Sparkles size={48} strokeWidth={1} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40 font-serif uppercase">
          SAVIRA AZ ZAHRA ARNINDHITA
        </h1>
        
        <motion.div 
          className="inline-block glass-pill px-6 py-3 mt-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <p className="text-sm md:text-lg font-medium tracking-[0.2em] uppercase text-white/80">
            Illustrator & Graphic Designer
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
