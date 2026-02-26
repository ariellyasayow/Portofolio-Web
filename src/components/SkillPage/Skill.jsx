import { motion } from "framer-motion";

export const Skill = () => {
  const coreSkills = [
    "UI/UX Design", "Figma", "React Native", "Python", "C#", "HTML5", "CSS3"
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

  // Varian Animasi untuk Container (Parent)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Jeda antar elemen anak
      },
    },
  };

  // Varian Animasi untuk Elemen Anak (Child)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group p-10 border border-[#F5E6CA] rounded-3xl hover:bg-[#4A332C] transition-all duration-500 cursor-default"
                >
                  <p className="text-[#D7CCC8] text-[9px] font-bold uppercase tracking-[0.3em] mb-4 group-hover:text-[#F5E6CA] transition-colors">
                    Capability / 0{index + 1}
                  </p>
                  <h3 className="text-2xl font-['Playfair_Display',serif] text-[#4A332C] group-hover:text-white group-hover:italic transition-all duration-300">
                    {skill}
                  </h3>
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
                <motion.div key={index} variants={itemVariants} className="relative group">
                  {/* Vertical Line Decor */}
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
              className="mt-24 p-10 bg-[#FAFAFA] rounded-2xl border border-dashed border-[#D7CCC8] relative overflow-hidden group"
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