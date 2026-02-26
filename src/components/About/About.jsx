import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#FFFFFF] font-['Poppins',sans-serif] overflow-hidden"
    >
      {/* Ornamen Background Estetik (Sangat Tipis) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5E6CA] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EFEBE4] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          
          {/* Bagian Kiri: Heading Minimalis */}
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display',serif] font-bold text-[#4A332C] leading-tight mb-8">
              A Bit <br />
              <span className="text-[#A1887F] italic font-light">About</span> Me.
            </h2>
            <div className="w-16 h-[2px] bg-[#D7CCC8] mb-8"></div>
            <p className="text-[#A1887F] text-[10px] uppercase tracking-[0.5em] font-bold">
              Creative Profile
            </p>
          </motion.div>

          {/* Bagian Kanan: Teks Editorial */}
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-8 text-[#795C53] text-lg md:text-xl font-light leading-relaxed text-justify">
              
              {/* Paragraf 1 dengan Drop Cap */}
              <p>
                <span className="float-left text-6xl md:text-7xl font-['Playfair_Display',serif] text-[#4A332C] leading-none pr-3 pt-2 font-bold">
                  H
                </span>
                ello! I am currently an Informatics student in my sixth semester at <span className="font-medium text-[#4A332C]">Universitas Klabat</span>. My academic path has fostered a deep focus in <span className="font-medium text-[#4A332C]">UI/UX Design</span>, driven by a passion for creating intuitive interfaces that bridge the gap between human needs and digital solutions.
              </p>

              {/* Paragraf 2 */}
              <p>
                Beyond technical frameworks, I find immense inspiration in the gaming industry. I am particularly captivated by how <span className="font-medium text-[#4A332C]">visual storytelling</span> and <span className="font-medium text-[#4A332C]">immersive graphics</span> can elevate a user's experience—a philosophy I strive to translate into every project I develop.
              </p>

              {/* Paragraf Penutup yang Lebih Subtly Professional */}
              <motion.div 
                className="pt-6 border-t border-[#F5E6CA]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-['Playfair_Display',serif] italic text-2xl text-[#8D6E63] leading-relaxed">
                  "Blending aesthetic intuition with logical precision to build meaningful digital experiences."
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};