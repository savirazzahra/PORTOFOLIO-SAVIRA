import { motion } from 'motion/react';
import { Sparkles, Brush, Aperture, Figma, Palette, PenTool } from 'lucide-react';

const IconC = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M14.5 9a3.5 3.5 0 1 0 0 6" />
  </svg>
);

const skills = [
  { name: 'Ibis Paint X', score: 10, icon: Brush, color: 'text-pink-300' },
  { name: 'Lightroom', score: 9.5, icon: Aperture, color: 'text-blue-400' },
  { name: 'Figma', score: 9, icon: Figma, color: 'text-purple-400' },
  { name: 'Clip Studio Paint', score: 8.5, icon: Palette, color: 'text-indigo-300' },
  { name: 'Canva', score: 8.5, icon: IconC, color: 'text-cyan-300' },
  { name: 'Corel Draw', score: 7, icon: PenTool, color: 'text-green-300' },
];

const softSkills = [
  "Visual & Verbal Communication",
  "Time Management",
  "Adaptability",
  "Attention to Detail",
  "Resilience to Criticism",
  "Collaboration & Teamwork"
];

export default function Skills() {
  return (
    <section className="relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="flex flex-col items-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/30 font-serif uppercase">
          Skill
        </h2>
        <div className="flex items-center gap-2 mt-4 opacity-70">
          <Sparkles size={16} />
          <span className="text-sm uppercase tracking-[0.2em] font-medium">Software Mastery</span>
          <Sparkles size={16} />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group cursor-default"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className={`p-3 rounded-2xl glass-panel bg-white/5 ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/90">
                    {skill.name}
                  </h3>
                  <span className="text-lg font-mono font-medium text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {skill.score}/10
                  </span>
                </div>
              </div>
              
              {/* Progress Bar Container */}
              <div className="h-2.5 w-full bg-black/40 rounded-full overflow-hidden relative z-10 border border-white/10 shadow-inner">
                <motion.div
                  className={`h-full w-full bg-gradient-to-r from-white/40 to-white rounded-full origin-left`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: skill.score / 10 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), type: "spring", bounce: 0.2 }}
                  style={{ willChange: "transform" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-32 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-2xl md:text-4xl font-serif italic text-white/80 mb-10">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm md:text-base text-white/90 font-medium tracking-wide cursor-default transition-colors shadow-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
