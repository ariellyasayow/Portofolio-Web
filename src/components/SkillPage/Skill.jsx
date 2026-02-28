import { useRef, useState } from "react";
import { motion } from "framer-motion";

// --- KOMPONEN SPOTLIGHT CARD ---
const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(245, 230, 202, 0.5)' }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1); 
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-[#F5E6CA] bg-white overflow-hidden p-10 transition-colors duration-500 hover:border-[#D7CCC8] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};


// --- KOMPONEN UTAMA SKILL ---
export const Skill = () => {
  const coreSkills = [
    "UI/UX Design", "Figma", "React Native", "Python", "C#", "HTML/CSS"
  ];

  const CERTIFICATES = [
    {
      title: "Network Administrator (JNA)",
      issuer: "Kominfo (DTS - VSGA)",
      year: "2025",
      desc: "Sertifikasi Kompetensi BNSP"
    },
    {
      title: "Young Entrepreneurs",
      issuer: "Universitas Indonesia",
      year: "2025",
      desc: "Business Case - Semifinalist"
    },
    {
      title: "Proxocoris",
      issuer: "Unklab Computer Science",
      year: "2025",
      desc: "Business Plan - Appreciation"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-32 bg-white font-['Poppins',sans-serif] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-['Playfair_Display',serif] font-bold text-[#4A332C] mb-6">
            Expertise <span className="italic font-light text-[#A1887F]">&</span> Awards
          </h2>
          <div className="w-24 h-[1px] bg-[#D7CCC8]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* KOLOM KIRI: Technical Stack */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#A1887F] font-bold mb-12 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#D7CCC8]"></span>
              Technical Stack
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SpotlightCard className="group cursor-default shadow-sm hover:shadow-md">
                    <p className="text-[#A1887F] text-[9px] font-bold uppercase tracking-[0.3em] mb-4 group-hover:text-[#8D6E63] transition-colors">
                      Capability / 0{index + 1}
                    </p>
                    {/* HAPUS EFEK MIRING DI SINI (group-hover:italic dihilangkan) */}
                    <h3 className="text-2xl font-['Playfair_Display',serif] text-[#4A332C] transition-all duration-300">
                      {skill}
                    </h3>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* KOLOM KANAN: Achievements */}
          <motion.div 
            className="lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#A1887F] font-bold mb-12 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#D7CCC8]"></span>
              Achievements
            </h2>
            
            <div className="space-y-16 pl-2">
              {CERTIFICATES.map((cert, index) => (
                <motion.div key={index} variants={itemVariants} className="relative group cursor-default">
                  <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#F5E6CA] group-hover:bg-[#4A332C] transition-colors"></div>
                  
                  <span className="text-[10px] font-bold text-[#A1887F] tracking-[0.3em] uppercase block mb-2">
                    {cert.year} — {cert.issuer}
                  </span>
                  <h3 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#4A332C] group-hover:text-[#8D6E63] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[#A1887F] text-sm mt-3 font-light italic leading-relaxed">
                    {cert.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quote Minimalis */}
            <motion.div 
              variants={itemVariants}
              className="mt-24 p-10 bg-[#FAFAFA] rounded-2xl border border-dashed border-[#D7CCC8] relative overflow-hidden group hover:bg-white transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#4A332C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <p className="text-[#795C53] text-sm leading-relaxed italic font-light">
                "Technical skill is mastery over complexity, while design is the art of making it simple."
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};