import { useRef, useState } from "react";
import { motion } from "framer-motion";

// --- KOMPONEN PROJECT CARD (Tetap sama, sudah sangat elegan) ---
const ProjectCard = ({ project }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <article
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
      className={`group relative flex-none w-[320px] md:w-[450px] h-[400px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 snap-center ${
        project.link ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      <img 
        src={project.images[0]} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B15] via-[#2D1B15]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 mix-blend-overlay z-10"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.4), transparent 60%)`
        }}
      />

      <div className="relative z-20 flex flex-col justify-end h-full p-8 md:p-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <p className="text-[#F5E6CA] text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {project.subtitle}
        </p>
        
        <h3 className="text-3xl md:text-4xl font-['Playfair_Display',serif] font-bold text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-[150ms]">
          {project.title}
        </h3>
        
        <div className="overflow-hidden">
          <div className="opacity-0 max-h-0 group-hover:max-h-[150px] group-hover:opacity-100 transition-all duration-700 delay-200">
            <p className="text-sm font-light text-gray-200 leading-relaxed mb-6">
              {project.desc}
            </p>
            
            {project.link ? (
              <span className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#F5E6CA] border-b border-[#F5E6CA] pb-1 hover:text-white hover:border-white transition-colors">
                View Project <span className="text-[14px] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </span>
            ) : (
              <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#A1887F] italic border-b border-transparent pb-1">
                Visual Showcase Only
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};


// --- KOMPONEN UTAMA PROJECT ---
export const Project = () => {
  // Ref untuk mengontrol scroll container
  const scrollContainerRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: "U-Need",
      subtitle: "Web Development",
      desc: "An exclusive digital marketplace for Universitas Klabat students. Bridging student entrepreneurs with seamless Instagram & WhatsApp integration.",
      images: ["/Uneed.png"], 
      link: "https://github.com/ariellyasayow/Uneed.git",
    },
    {
      id: 2,
      title: "Mobile Portfolio",
      subtitle: "UI/UX Design",
      desc: "A visually refined mobile portfolio application emphasizing intuitive user flows and clean aesthetics to showcase professional work.",
      images: ["/Porto-mobile.jpeg"],
      link: "https://github.com/ariellyasayow/Portofolio-mobiel-app.git",
    },
    {
      id: 3,
      title: "SkyBlue Wash",
      subtitle: "Desktop App • C#",
      desc: "Comprehensive desktop point-of-sale system tailored for carwash businesses, streamlining transactions and operational management.",
      images: ["/skyblue.jpeg"],
      link: null, 
    },
    {
      id: 4,
      title: "Roll a Ball",
      subtitle: "Game Dev • Unity",
      desc: "Engaging 3D interactive game focusing on physics-based movement, item collection, and obstacle avoidance mechanics.",
      images: ["/RollaBall.jpeg"],
      link: null, 
    }
  ];

  // Fungsi untuk menggulir ke kiri atau kanan
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Menghitung seberapa jauh harus scroll (lebar card + gap)
      const scrollAmount = window.innerWidth < 768 ? 340 : 480; 
      const currentScrollPosition = scrollContainerRef.current.scrollLeft;
      
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? currentScrollPosition - scrollAmount : currentScrollPosition + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-32 bg-[#FAFAFA] font-['Poppins',sans-serif]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section dengan Tombol Navigasi */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
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
          
          {/* Bagian Kanan Header: Teks & Tombol */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <p className="text-[#A1887F] text-[10px] font-bold tracking-[0.5em] uppercase hidden md:block">
              Explore Projects
            </p>
            
            {/* Navigasi Tombol Estetik */}
            <div className="flex gap-4">
              <button 
                onClick={() => scroll("left")}
                aria-label="Scroll Left"
                className="w-14 h-14 rounded-full border border-[#D7CCC8] flex items-center justify-center text-[#4A332C] hover:bg-[#4A332C] hover:text-[#F5E6CA] hover:border-[#4A332C] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#A1887F]"
              >
                {/* Ikon Panah Kiri SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <button 
                onClick={() => scroll("right")}
                aria-label="Scroll Right"
                className="w-14 h-14 rounded-full border border-[#D7CCC8] flex items-center justify-center text-[#4A332C] hover:bg-[#4A332C] hover:text-[#F5E6CA] hover:border-[#4A332C] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#A1887F]"
              >
                {/* Ikon Panah Kanan SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* --- AREA HORIZONTAL SCROLL --- */}
        <motion.div
          ref={scrollContainerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-nowrap overflow-x-auto gap-8 pb-12 pt-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          <div className="flex-none w-[20px] md:w-[100px]"></div>
        </motion.div>

      </div>
    </section>
  );
};