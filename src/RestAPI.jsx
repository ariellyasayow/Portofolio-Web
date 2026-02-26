// src/RestAPI.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { Landing } from "./components/LandingPage/Landing";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Skill } from "./components/SkillPage/Skill";
// TAMBAHKAN IMPORT INI:
import { Footer } from "./components/Footer/Footer"; 

const API_BASE = "http://localhost:3000"; 

export default function RestAPI() {
  const [data, setData] = useState({
    hero: null,
    about: null,
    projects: [],
    skills: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Ambil data dari API
        const [heroRes, aboutRes, projectsRes, skillsRes] = await Promise.all([
            axios.get(`${API_BASE}/hero`),
            axios.get(`${API_BASE}/about`),
            axios.get(`${API_BASE}/projects`),
            axios.get(`${API_BASE}/skills`),
        ]);

        setData({
          hero: heroRes.data || {},
          about: aboutRes.data || {},
          projects: projectsRes.data || [],
          skills: skillsRes.data || [],
        });
      } catch (err) {
        console.error("Failed to load data from API:", err.message);
        setError(
          "Gagal mengambil data dari server. Pastikan json-server aktif."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#FAFAFA] text-[#4A332C] min-h-screen flex items-center justify-center font-serif text-xl">
        LOADING COLLECTION...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white text-red-800 min-h-screen flex items-center justify-center font-mono text-xl">
        {error}
      </div>
    );
  }

  return (
    <>
      <Header />
      {data.hero && <Landing hero={data.hero} />}
      {data.about && <About about={data.about} />}
      <Project projects={data.projects || []} />
      <Skill skills={data.skills || []} />
      {/* Sekarang Footer sudah ter-import dan aman dipanggil */}
      <Footer />
    </>
  );
}