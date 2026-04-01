import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const TypewriterText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <motion.p 
      className="text-white/70 text-center max-w-3xl mx-auto mt-8 text-sm md:text-base leading-relaxed font-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.02 } },
        hidden: {}
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex !== words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.p>
  );
};

export default function FeaturedProjects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-24 pt-10">
      {/* Project Tata Boga */}
      <section className="relative z-10 max-w-5xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/30 font-serif uppercase text-center">
            Project Tata Boga
          </h2>
          <div className="w-16 h-[1px] bg-white/30 mt-6" />
          
          <TypewriterText text="Where culinary meets design: A collaborative leaflet project with the Culinary Arts department. Inspired by Central Java, it merges the elegance of batik motifs with deep brown accents—a perfect blend of function and a tribute to the richness of Nusantara heritage." />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            "https://github.com/user-attachments/assets/a8544c99-e401-44fd-8119-c48a91705aa2",
            "https://github.com/user-attachments/assets/569a328a-94fb-4421-9a35-9b01431f5110"
          ].map((imgSrc, index) => {
            const item = index + 1;
            return (
              <motion.div
                key={`tataboga-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              >
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  whileHover={{ scale: 1.02, zIndex: 40 }}
                  onClick={() => setSelectedImage(imgSrc)}
                  style={{ willChange: "transform" }}
                  className="glass-card rounded-[1.5rem] overflow-hidden aspect-video group relative cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <span className="text-white/30 font-mono text-sm tracking-widest uppercase">Landscape {item}</span>
                  </div>
                  <img 
                    src={imgSrc} 
                    alt={`Tata Boga Template ${item}`}
                    className="w-full h-full object-cover relative z-10 opacity-80 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Project Degamon */}
      <section className="relative z-10 max-w-5xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/30 font-serif uppercase text-center">
            Degamon
          </h2>
          <div className="w-16 h-[1px] bg-white/30 mt-6" />
          
          <TypewriterText text='"Degamon" is a second-semester assignment focused on character creation, where we design a monster by merging two randomly selected animals. The project is inspired by Pokémon, but renamed "Degamon" where "Dega" stands for Desain Grafis (Graphic Design). My character is named Sycheluck, a monster that is a fusion between a butterfly and a wolf.' />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            "https://github.com/user-attachments/assets/fdc0756d-d1fc-4ab9-84f9-c1a15cf9c22b",
            "https://github.com/user-attachments/assets/5c5ad0c6-e6f4-4064-a329-b4fb94b97a73",
            "https://github.com/user-attachments/assets/92ee0a5f-c04e-4fcc-9e26-b9a075217e82"
          ].map((imgSrc, index) => {
            const item = index + 1;
            return (
              <motion.div
                key={`degamon-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              >
                <motion.div
                  animate={{ y: [-12, 12, -12] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                  whileHover={{ scale: 1.02, zIndex: 40 }}
                  onClick={() => setSelectedImage(imgSrc)}
                  style={{ willChange: "transform" }}
                  className="glass-card rounded-[1.5rem] overflow-hidden aspect-[3/4] group relative cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <span className="text-white/30 font-mono text-sm tracking-widest uppercase">Portrait {item}</span>
                  </div>
                  <img 
                    src={imgSrc} 
                    alt={`Degamon Template ${item}`}
                    className="w-full h-full object-cover relative z-10 opacity-80 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* T-Shirt Illustration */}
      <section className="relative z-10 max-w-6xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/30 font-serif uppercase text-center">
            T-Shirt Illustration
          </h2>
          <div className="w-16 h-[1px] bg-white/30 mt-6" />
          
          <TypewriterText text="This t-shirt is the ultimate embodiment of bold, expressive streetwear. Featuring a striking electric blue base, the design creates a high voltage contrast with vibrant, neon colored graffiti accents. Engineered for those who dare to stand out, this piece merges urban aesthetics with a futuristic glow, ensuring you remain the center of attention. It’s more than just a tee it’s an iconic statement piece for the modern street-style enthusiast." />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
          {[
            "https://github.com/user-attachments/assets/526b2e66-4b61-40a9-80fc-ad242a7fdbef",
            "https://github.com/user-attachments/assets/78668069-648f-4628-b9d9-c13e764d2f77"
          ].map((imgSrc, index) => {
            const item = index + 1;
            return (
              <motion.div
                key={`tshirt-${index}`}
                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.3, type: "spring", bounce: 0.4 }}
                className="w-full max-w-md"
              >
                <motion.div
                  animate={{ y: [-15, 15, -15], rotate: [-1, 1, -1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  whileHover={{ scale: 1.05, zIndex: 40, rotate: index % 2 === 0 ? 2 : -2 }}
                  onClick={() => setSelectedImage(imgSrc)}
                  style={{ willChange: "transform" }}
                  className="glass-card rounded-[2rem] overflow-hidden aspect-[3/4] group relative cursor-pointer shadow-[0_0_40px_rgba(0,255,255,0.1)] hover:shadow-[0_0_60px_rgba(0,255,255,0.2)] transition-shadow duration-500 border border-white/10"
                >
                  <div className="absolute inset-0 flex items-center justify-center z-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                    <span className="text-white/30 font-mono text-sm tracking-widest uppercase">Portrait {item}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={imgSrc} 
                    alt={`T-Shirt Illustration ${item}`}
                    className="w-full h-full object-cover relative z-10 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 mt-10 md:mt-16">
          {[
            "https://github.com/user-attachments/assets/9879f1c7-0fcd-41dd-848e-e4002dfed8e4",
            "https://github.com/user-attachments/assets/8115de5f-1f09-4426-874c-b7262f76f515"
          ].map((imgSrc, index) => {
            const item = index + 1;
            return (
              <motion.div
                key={`tshirt-landscape-${index}`}
                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? 5 : -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.3, type: "spring", bounce: 0.4 }}
                className="w-full max-w-2xl"
              >
                <motion.div
                  animate={{ y: [-15, 15, -15], rotate: [-1, 1, -1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  whileHover={{ scale: 1.05, zIndex: 40, rotate: index % 2 === 0 ? -2 : 2 }}
                  onClick={() => setSelectedImage(imgSrc)}
                  style={{ willChange: "transform" }}
                  className="glass-card rounded-[2rem] overflow-hidden aspect-video group relative cursor-pointer shadow-[0_0_40px_rgba(0,255,255,0.1)] hover:shadow-[0_0_60px_rgba(0,255,255,0.2)] transition-shadow duration-500 border border-white/10"
                >
                  <div className="absolute inset-0 flex items-center justify-center z-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                    <span className="text-white/30 font-mono text-sm tracking-widest uppercase">Landscape {item}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={imgSrc} 
                    alt={`T-Shirt Illustration Landscape ${item}`}
                    className="w-full h-full object-cover relative z-10 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300, bounce: 0.5 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
