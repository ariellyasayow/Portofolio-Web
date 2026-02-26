import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Landing = ({ hero }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hero) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden pt-32 pb-20 font-['Poppins',sans-serif]"
    >
      {/* Background Parallax Soft Gradients */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#F5E6CA] blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#EFEBE4] blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <motion.div 
            className="lg:col-span-7 text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* ROLE TAG */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-[1px] bg-[#4A332C]"></div>
              <p className="text-[#8D6E63] text-xs font-bold tracking-[0.4em] uppercase">
                {hero.role}
              </p>
            </motion.div>

            {/* MAIN HEADLINE */}
            <h1 className="text-6xl md:text-8xl font-['Playfair_Display',serif] font-bold text-[#4A332C] leading-[1.05] mb-8">
              {hero.name.split(' ')[0]} <br />
              <span className="italic font-light text-[#A1887F] ml-12 md:ml-24">
                {hero.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            {/* BIO */}
            <p className="max-w-md text-[#795C53] text-lg font-light leading-relaxed mb-12 border-l-2 border-[#F5E6CA] pl-6 italic">
              "{hero.bio}"
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-6 relative z-20">
              <a
                href="#projects"
                className="group relative px-10 py-4 bg-[#4A332C] text-white text-[10px] font-bold tracking-[0.2em] uppercase overflow-hidden transition-all"
              >
                <span className="relative z-10">View Project</span>
                <div className="absolute inset-0 bg-[#5D4037] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a
                href="#contact"
                className="px-10 py-4 border border-[#4A332C] text-[#4A332C] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#4A332C] hover:text-white transition-all"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: ARTISTIC IMAGE */}
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-[#D7CCC8] rounded-2xl group-hover:top-0 group-hover:right-0 transition-all duration-700"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-[400px] md:w-80 md:h-[500px] rounded-2xl overflow-hidden shadow-[30px_30px_60px_rgba(0,0,0,0.05)] grayscale hover:grayscale-0 transition-all duration-1000">
                <img
                  src={hero.avatar}
                  alt={hero.name}
                  className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR - Safely positioned at bottom right */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-6">
        <p className="text-[9px] tracking-[0.6em] font-bold text-[#4A332C] uppercase vertical-text opacity-40">Scroll</p>
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-20 bg-gradient-to-b from-[#4A332C] to-transparent opacity-30"
        />
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};