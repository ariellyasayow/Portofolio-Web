import { useEffect, useRef, useState } from "react";

// NAMA DIGANTI DARI Contact KE Footer AGAR MATCH DENGAN RestAPI.jsx
export const Footer = ({ contactData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Karena di RestAPI.jsx kamu memanggil <Footer /> tanpa props, 
  // kita beri proteksi agar tidak error jika contactData kosong
  const email = contactData?.email || "sayowariellya@gmail.com";
  const github = contactData?.social?.github || "https://github.com/ariellya";
  const linkedin = contactData?.social?.linkedin || "https://www.linkedin.com/in/ariellya-sayow-108419355";

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-32 bg-[#4A332C] text-[#F5E6CA] font-['Poppins',sans-serif] overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display',serif] font-bold leading-tight mb-8">
              Let’s create <br />
              <span className="italic font-light text-[#A1887F]">something</span> iconic.
            </h2>
            <div className="w-24 h-[1px] bg-[#A1887F] mb-8"></div>
            <p className="text-[#A1887F] text-lg max-w-md font-light leading-relaxed">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className={`space-y-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            <div className="group">
              <p className="text-[10px] uppercase tracking-[0.5em] mb-4 text-[#A1887F] font-bold">Direct Inquiry</p>
              <a 
                href={`mailto:${email}`} 
                className="text-2xl md:text-4xl font-['Playfair_Display',serif] hover:italic hover:pl-6 transition-all duration-500 border-b border-[#A1887F]/30 pb-4 block group-hover:border-[#F5E6CA]"
              >
                {email}
              </a>
            </div>

            <div className="flex flex-wrap gap-12">
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-[0.5em] mb-3 text-[#A1887F] font-bold">LinkedIn</p>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-white transition-colors block group-hover:italic">
                  Ariellya Putri
                </a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-[0.5em] mb-3 text-[#A1887F] font-bold">GitHub</p>
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-white transition-colors block group-hover:italic">
                  @ariellya
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-[#A1887F]/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest uppercase opacity-40">
          <p>© 2026 Ariellya Putri Sayow. All rights reserved.</p>
          <p className="italic font-['Playfair_Display',serif] lowercase tracking-normal text-sm">designed with a touch of luxury & code.</p>
        </div>

      </div>
    </section>
  );
};