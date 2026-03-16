import { motion } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Abstract Gothic Cross / Star 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-white/10"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Star size={120} strokeWidth={0.5} />
      </motion.div>

      {/* Abstract Gothic Cross / Star 2 */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 text-white/5"
        animate={{
          rotate: [360, 0],
          y: [0, 30, 0],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Sparkles size={180} strokeWidth={0.5} />
      </motion.div>
      
      {/* Abstract Blur Orbs */}
      <motion.div 
        className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-red-900/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-black/40 blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
