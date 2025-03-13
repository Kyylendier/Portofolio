import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Proyek Saya
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/keraton.png"
          title="Keraton Kesepuhan Cirebon"
          description="Sebuah website yang dibuat untuk menceritakan tentang keraton, dan pemesanan tiket ke keraton. Saya dalam proyek ini bekerja sebagai tim, di proyek ini saya mendapatkan bagian sebagai Front End."
        />
        <ProjectCard
          src="/GraciaApp.png"
          title="Gracia App"
          description="Sebuah website yang digunakan untuk mengatur penduduk di sebuah komplek. Saya dalam proyek ini bekerja sebagai tim, di proyek ini saya mendapatkan bagian sebagai UI/UX."
        />
        <ProjectCard
          src="/JepangTraining.png"
          title="Pusat Pelatihan Bahasa Jepang"
          description="Sebuah website yang dibuat untuk pelatihan bahasa Jepang. Saya dalam proyek ini bekerja sebagai tim, di proyek ini saya mendapatkan bagian sebagai Quality Assurance."
        />
        <ProjectCard
          src="/bot.png"
          title="Bot Whatsapp"
          description="Project yang saya buat untuk digunakan pada grup pembaca komik yang dibuat."
        />
        <ProjectCard
          src="/E-Rapor.png"
          title="E-Rapor"
          description="Sebuah website yang digunakan untuk mengelola nilai, melihat, mengupload, dan mendownload. Saya dalam proyek ini bekerja sebagai tim, di proyek ini saya mendapatkan bagian sebagai Postman."
        />
        <ProjectCard
          src="/ErwinRommel.png"
          title="Editing Video"
          description="Dimasa senggang saya, saya mencoba untuk belajar mengedit beberapa video tentang video pesawat, manhwa, sejarah dan lain sebagainnya."
        />
      </div>
    </div>
  );
};

export default Projects;
