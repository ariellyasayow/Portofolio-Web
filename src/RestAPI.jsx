// src/RestAPI.jsx
import { Header } from "./components/Header/Header";
import { Landing } from "./components/LandingPage/Landing";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Skill } from "./components/SkillPage/Skill";
import { Footer } from "./components/Footer/Footer"; 

export default function RestAPI() {
  const heroData = {
    role: "UI/UX Designer & Frontend Dev",
    name: "Ariellya Sayow", 
    bio: "I simply enjoy bridging the gap between complex technical problems and intuitive digital experiences.",
    avatar: "/profile.jpg" 
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <Header />
      
      {/* Kirim data statis ke Landing */}
      <Landing hero={heroData} />
      
      {/* Komponen lain sudah mandiri (datanya ada di dalam file masing-masing) */}
      <About />
      <Project />
      <Skill />
      <Footer />
    </div>
  );
}