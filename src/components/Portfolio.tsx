import React from 'react';
import { motion } from 'motion/react';

const row1 = [
  { id: 1, title: 'Gothic Reverie', src: 'https://github.com/user-attachments/assets/166d9a77-17f7-426a-9c0a-bba76798fbfc', shape: 'square' },
  { id: 2, title: 'Cyber Chrome', src: 'https://github.com/user-attachments/assets/9be64d58-3330-4a87-acee-c8984c088c31', shape: 'square' },
  { id: 3, title: 'Neon Noir', src: 'https://github.com/user-attachments/assets/4a5c0f9e-6479-4f71-84c9-fd7884d6f666', shape: 'square' },
  { id: 4, title: 'Ethereal Void', src: 'https://github.com/user-attachments/assets/23611219-b2f4-47e8-af1f-ec3e0267d0e6', shape: 'square' },
];

const row2 = [
  { id: 5, title: 'Y2K Dreams', src: 'https://github.com/user-attachments/assets/38322cd8-afa3-4f55-ad96-650c1fb2454a', shape: 'square' },
  { id: 6, title: 'Crimson Tide', src: 'https://github.com/user-attachments/assets/f3b9aeca-36de-4a9c-88a3-91025e953abf', shape: 'square' },
  { id: 7, title: 'Urban Decay', src: 'https://github.com/user-attachments/assets/6678fdec-4b38-4f48-8409-9f38a70b2344', shape: 'square' },
  { id: 8, title: 'Solar Flare', src: 'https://github.com/user-attachments/assets/4f3ed342-4b74-4432-aa14-542be3f5d03d', shape: 'square' },
];

const row3 = [
  { id: 9, title: 'Brand Identity', src: 'https://github.com/user-attachments/assets/3807e057-41f3-46fb-b82b-95baa570376b', shape: 'portrait' },
  { id: 10, title: 'UI/UX', src: 'https://github.com/user-attachments/assets/97a0c241-9ede-47c7-8cc1-1e5bebaf1b32', shape: 'landscape' },
  { id: 11, title: 'Typography', src: 'https://github.com/user-attachments/assets/01bed944-2726-4b82-9ac3-cf963c3ef7fa', shape: 'portrait' },
  { id: 12, title: 'Packaging', src: 'https://github.com/user-attachments/assets/404918c5-76a7-4a0c-a783-6d103eb86c76', shape: 'landscape' },
];

const row4 = [
  { id: 13, title: 'Editorial', src: 'https://github.com/user-attachments/assets/51e7b42d-d61e-4f71-8017-4e9d4ae54fa1', shape: 'landscape' },
  { id: 14, title: 'Poster', src: 'https://github.com/user-attachments/assets/f6979b02-ba6b-4de8-b86a-5f9e6f030586', shape: 'portrait' },
  { id: 15, title: 'Web Design', src: 'https://github.com/user-attachments/assets/0138f2cb-0ba3-408b-9592-8ca883ebf26d', shape: 'landscape' },
  { id: 16, title: 'Logo', src: 'https://github.com/user-attachments/assets/a7f0346e-4880-4f6a-a095-651a9ec60b0a', shape: 'portrait' },
];

const MarqueeTrack = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
  // Duplicate items to create a seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden w-full py-4 items-center">
      <div className={`flex w-max gap-4 md:gap-6 px-2 md:px-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} pause-on-hover items-center`}>
        {duplicatedItems.map((item, idx) => {
          let dimensions = 'w-[200px] md:w-[300px] h-[200px] md:h-[300px]';
          if (item.shape === 'landscape') {
            dimensions = 'w-[300px] md:w-[450px] h-[240px] md:h-[360px]';
          } else if (item.shape === 'portrait') {
            dimensions = 'w-[192px] md:w-[288px] h-[240px] md:h-[360px]';
          }
          
          return (
            <div 
              key={`${item.id}-${idx}`} 
              className={`relative overflow-hidden rounded-[1.5rem] glass-card p-2 shrink-0 ${dimensions}`}
            >
            <div className="w-full h-full rounded-xl overflow-hidden relative group">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-20">
      <section className="relative z-10 pt-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="flex flex-col items-center mb-16 px-6"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/30 font-serif uppercase text-center">
            Illustration
          </h2>
          <div className="w-24 h-[1px] bg-white/30 mt-6" />
        </motion.div>

        <div className="w-full flex flex-col gap-4 md:gap-6">
          <MarqueeTrack items={row1} />
          <MarqueeTrack items={row2} reverse={true} />
        </div>
      </section>

      <section className="relative z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="flex flex-col items-center mb-16 px-6"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/30 font-serif uppercase text-center">
            Design
          </h2>
          <div className="w-24 h-[1px] bg-white/30 mt-6" />
        </motion.div>

        <div className="w-full flex flex-col gap-4 md:gap-6">
          <MarqueeTrack items={row3} />
          <MarqueeTrack items={row4} reverse={true} />
        </div>
      </section>


    </div>
  );
}
