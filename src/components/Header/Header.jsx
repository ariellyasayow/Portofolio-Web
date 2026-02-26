import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop - 150 &&
            scrollPosition < offsetTop + offsetHeight - 150
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      if (menuOpen) closeMenu();
    }
  };

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#F5E6CA]/50 transition-all duration-300">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo Minimalis (Inisial A.P) */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={(e) => handleClick(e, "#home")}
        >
          <div className="relative">
            <span className="font-['Playfair_Display'] font-bold text-2xl text-[#4A332C] tracking-tighter">
              A<span className="text-[#A1887F]">.</span>P
            </span>
            {/* Dekorasi garis kecil di bawah logo */}
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#4A332C] group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>

        {/* Desktop Navigation dengan Framer Motion */}
        <nav className="hidden md:flex items-center gap-2 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-6 py-2 text-[11px] font-bold tracking-[0.2em] transition-colors duration-500 ${
                  isActive ? "text-[#F5E6CA]" : "text-[#8D6E63] hover:text-[#4A332C]"
                }`}
              >
                {/* Indikator Aktif (Kapsul yang meluncur) */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#4A332C] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-[#4A332C] transition-colors duration-300"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#F5E6CA]/50 shadow-xl px-6 py-8 flex flex-col gap-4"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-center text-xs font-bold tracking-[0.3em] py-3 transition-all ${
                    isActive ? "text-[#4A332C] scale-110" : "text-[#A1887F]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};