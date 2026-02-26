import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// --- KOMPONEN GALERI GAMBAR (Dengan Border Samar & Shadow Elegan) ---
const ProjectImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0); 
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3500); // Waktu diubah sedikit jadi 3.5 detik agar lebih santai
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="relative w-full h-full flex items-center justify-center lg:justify-start group">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} - view ${idx + 1}`}
          // Menambahkan border-black/5 agar gambar web yang putih tidak "bocor" ke background
          className={`absolute max-w-full max-h-full object-contain transition-all duration-1000 ease-in-out drop-shadow-[0_20px_50px_rgba(74,51,44,0.15)] rounded-xl border border-black/5 ${
            idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
      ))}
    </div>
  );
};

export const Project = () => {
  const projectsData = [
    {
      id: 1,
      title: "U-Need",
      subtitle: "Web Development • Campus Platform",
      desc: "An exclusive digital marketplace for Universitas Klabat students. Bridging student entrepreneurs with seamless Instagram & WhatsApp integration.",
      images: ["/Uneed.png", "/Uneed2.png", "/Uneed3.png"],
      link: "https://github.com/ariellyasayow/Uneed.git",
      type: "github"
    },
    {
      id: 2,
      title: "Mobile Portfolio",
      subtitle: "UI/UX Design • Mobile App",
      desc: "A visually refined mobile portfolio application emphasizing intuitive user flows and clean aesthetics to showcase professional work.",
      images: ["/Porto-mobile.jpeg"],
      link: "https://github.com/ariellyasayow/Portofolio-mobiel-app.git",
      type: "github"
    },
    {
      id: 3,
      title: "Carwash POS",
      subtitle: "Desktop Application • C#",
      desc: "Comprehensive desktop point-of-sale system tailored for carwash businesses, streamlining transactions and operational management.",
      images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"],
      link: "#", 
      type: "github"
    },
    {
      id: 4,
      title: "Roll a Ball",
      subtitle: "Game Development • Unity",
      desc: "Engaging 3D interactive game focusing on physics-based movement, item collection, and obstacle avoidance mechanics.",
      images: ["/RollaBall.jpeg"],
      link: null, 
      type: "visual"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectsData[activeIndex];

  // Variasi Animasi Berurutan (Staggered) untuk Teks
  const textContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const textItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-32 bg-[#FAFAFA] font-['Poppins',sans-serif] min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display',serif] font-bold text-[#4A332C] mb-6">
              Selected <span className="italic font-light text-[#A1887F]">Works</span>
            </h2>
            <div className="w-24 h-[1px] bg-[#D7CCC8]"></div>
          </div>
          <p className="text-[#A1887F] text-[10px] font-bold tracking-[0.5em] uppercase mt-8 md:mt-0">
            A Curated Exhibition / 2024 — 2026
          </p>
        </motion.div>

        {/* --- MAIN SHOWCASE AREA --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24 items-center min-h-[500px]">
          
          {/* Kiri: Gambar Besar */}
          <div className="w-full lg:w-3/5 h-[350px] md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, filter: "blur(8px)", scale: 0.98 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(8px)", scale: 1.02 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} // Custom cubic-bezier untuk efek super smooth
                className="w-full h-full"
              >
                <ProjectImageGallery images={activeProject.images} title={activeProject.title} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Kanan: Deskripsi Proyek dengan Animasi Staggered */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                variants={textContainerVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full"
              >
                {/* Nomer Urut */}
                <motion.div variants={textItemVariant} className="flex items-center gap-4 mb-6">
                  <span className="text-3xl md:text-4xl font-['Playfair_Display',serif] italic text-[#A1887F]">
                    0{activeIndex + 1}
                  </span>
                  <div className="h-[1px] w-12 bg-[#D7CCC8]"></div>
                </motion.div>

                {/* Subtitle */}
                <motion.p variants={textItemVariant} className="text-[10px] font-bold tracking-[0.3em] text-[#A1887F] uppercase mb-4">
                  {activeProject.subtitle}
                </motion.p>

                {/* Title */}
                <motion.h3 variants={textItemVariant} className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-bold text-[#4A332C] mb-6 leading-tight">
                  {activeProject.title}
                </motion.h3>

                {/* Description */}
                <motion.p variants={textItemVariant} className="text-[#795C53] font-light text-sm md:text-base leading-relaxed mb-10 italic opacity-90">
                  {activeProject.desc}
                </motion.p>
                
                {/* Link / Button */}
                <motion.div variants={textItemVariant}>
                  {activeProject.link ? (
                    <a 
                      href={activeProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      // Group class untuk mentrigger animasi panah saat teks di-hover
                      className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#4A332C] border-b border-[#4A332C] pb-1 hover:text-[#A1887F] hover:border-[#A1887F] transition-all"
                    >
                      View Case Study
                      {/* Animasi panah diagonal ala awwwards */}
                      <span className="text-[14px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#D7CCC8] italic border-b border-transparent pb-1">
                      Visual Showcase Only
                    </span>
                  )}
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- THUMBNAIL NAVIGATION (Accessible) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {projectsData.map((project, index) => (
            <button 
              key={project.id}
              onClick={() => setActiveIndex(index)}
              aria-label={`View project ${project.title}`}
              // Mengubah div menjadi button demi aksesibilitas keyboard (UX yang baik)
              className={`relative group aspect-video overflow-hidden rounded-xl transition-all duration-700 shadow-sm hover:shadow-lg focus:outline-none ${
                activeIndex === index 
                  ? "ring-2 ring-[#4A332C] ring-offset-4 ring-offset-[#FAFAFA] opacity-100 scale-[1.02]" 
                  : "opacity-50 hover:opacity-100 grayscale hover:grayscale-0"
              }`}
            >
              {/* Overlay yang lebih halus */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#4A332C]/60 via-transparent to-transparent transition-opacity duration-500 ${activeIndex === index ? 'opacity-0' : 'opacity-100 group-hover:opacity-50'}`}></div>
              
              <img 
                src={project.images[0]} 
                alt={`${project.title} thumbnail`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute bottom-3 left-4 right-4 text-left transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                 <p className="text-[10px] md:text-[11px] font-bold tracking-widest text-white uppercase drop-shadow-md truncate opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.title}
                 </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};