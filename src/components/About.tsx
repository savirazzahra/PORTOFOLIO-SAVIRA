import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="relative z-10 py-16 md:py-24 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass-panel p-8 md:p-12 rounded-[2rem] relative overflow-hidden text-center md:text-left group"
        >
          {/* Smooth Shine Effect */}
          <div className="absolute inset-0 w-[200%] -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine pointer-events-none" style={{ animationDuration: '4s' }} />

          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="flex-1 space-y-6 text-lg md:text-xl leading-relaxed text-white/80 font-sans font-light">
              <p>
                Saya <strong className="text-white font-semibold">Savira Az Zahra Arnindhita</strong>, mahasiswi D4 Desain Grafis UNESA yang berbasis di Surabaya. Saya mengombinasikan ketelitian detail dalam ilustrasi naratif dengan pendekatan minimalis-elegan dalam desain grafis. Bagi saya, desain yang kuat adalah yang mampu menyampaikan pesan secara fungsional melalui kesederhanaan yang estetis.
              </p>
            </div>
          </div>
          
          {/* Decorative star */}
          <motion.div
            className="absolute -bottom-6 -right-6 text-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={120} strokeWidth={0.5} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
