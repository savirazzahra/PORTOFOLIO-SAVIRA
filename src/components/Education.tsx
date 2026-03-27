import { motion } from 'motion/react';
import { GraduationCap, Sparkles } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      period: "2024 - 2028",
      school: "Universitas Negeri Surabaya",
      details: "Fakultas Vokasi, Prodi Desain Grafis"
    },
    {
      period: "2021 - 2024",
      school: "SMA Negeri 12 Surabaya",
      details: "Jurusan IPA"
    }
  ];

  return (
    <section className="relative z-10 py-10 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="flex flex-col items-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/30 font-serif uppercase">
          Education
        </h2>
        <div className="flex items-center gap-2 mt-4 opacity-70">
          <GraduationCap size={16} />
          <span className="text-sm uppercase tracking-[0.2em] font-medium">Academic Background</span>
          <GraduationCap size={16} />
        </div>
      </motion.div>

      <div className="space-y-6">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2, type: "spring", bounce: 0.4 }}
            className="glass-card p-6 md:p-8 rounded-[1.5rem] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/90">
                  {item.school}
                </h3>
                <p className="text-white/60 font-sans font-light text-lg">
                  {item.details}
                </p>
              </div>
              <div className="shrink-0">
                <span className="text-sm font-mono font-medium text-white/80 bg-white/10 px-4 py-2 rounded-full border border-white/10 inline-block">
                  {item.period}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
