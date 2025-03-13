"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Experience = () => {
  // Data Pengalaman
  const experiences = [
    {
      title: "PKL di Birutecno Inc / Soca AI",
      description:
        "Pada tahun 2024 saya pernah PKL di perusahaan ini. Saat PKL di sini saya mendapatkan job sebagai UI/UX untuk website Gracia App, dan QA untuk website Pelatihan Bahasa Jepang",
    },
    {
      title: "TEFA ( Teaching Factory )",
      description:
        "Pada tahun 2023 ada proyek yang disediakan oleh sekolah. Saya mendapatkan bagian di website Keraton Kesepuhan Cirebon. Job saya disini sebagai Front-End. ",
    },
    {
      title: "E-Rapor",
      description:
        "Pada tahun 2025 ada proyek yang disediakan oleh sekolah. Saya mendapatkan bagian di website E-Rapor. Job saya disini sebagai Postman ",
    },
  ];

  // Data Pendidikan
  const educations = [
    {
      title: "SDN ",
      description:
        "Saya bersekolah di SMKN 4 Bandung dengan jurusan Rekayasa Perangkat Lunak (RPL).",
    },
    {
      title: "SMP Sebelas Maret",
      description:
        "Mengikuti kursus online tentang pengembangan web dan ilmu komputer.",
    },
    {
      title: "SMKN 4 Bandung",
      description:
        "Saya bersekolah di SMKN 4 Bandung dengan jurusan Rekayasa Perangkat Lunak (RPL).",
    },
  ];

  return (
    <div
      id="experience"
      className="flex flex-col relative items-center justify-center min-h-screen w-full h-full overflow-hidden bg-[#030013]"
    >
      {/* Judul "Pengalaman dan Pendidikan" */}
      <motion.div
        variants={slideInFromTop}
        className="orbitron text-[40px] font-medium text-center text-gray-200 z-[5]"
      >
        Pengalaman
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          dan{" "}
        </span>
        Pendidikan
      </motion.div>

      {/* Konten Pengalaman dan Pendidikan */}
      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-10 mt-20 z-[10] px-4 md:px-10 lg:px-20">
        {/* Pengalaman (Kiri) */}
        <div className="w-full md:w-1/2 flex flex-col items-end">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={slideInFromLeft(0.5 + index * 0.2)}
              className="w-full max-w-[400px] mb-8 text-right"
            >
              <div className="orbitron text-white text-lg text-left font-semibold whitespace-nowrap">
                {exp.title}
              </div>
              <div className="exo2 text-gray-400 text-sm mt-2 text-left break-words">
                {exp.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Garis Pembatas Tengah */}
        <div className="hidden md:flex w-[2px] h-[400px] bg-gradient-to-b from-purple-500 to-cyan-500 mx-10"></div>

        {/* Pendidikan (Kanan) */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              variants={slideInFromRight(0.5 + index * 0.2)}
              className="w-full max-w-[400px] mb-8 text-left"
            >
              <div className="orbitron text-white text-lg font-semibold whitespace-nowrap">
                {edu.title}
              </div>
              <div className="exo2 text-gray-400 text-sm mt-2 text-left break-words">
                {edu.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Teks Bawah */}
      <div className="absolute z-[20] bottom-[10px] px-[5px] hidden md:block">
        {" "}
        {/* Sembunyikan di mobile, tampilkan di tablet dan desktop */}
        <div className="orbitron text-[20px] font-medium text-center text-gray-300 max-[425px]:text-[14px] max-[425px]:px-2">
          Pendidikan adalah roket, pengalaman adalah bahan bakar, dan
          bintang-bintang adalah tujuan kita.
        </div>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-25">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="absolute w-full h-full object-cover rounded-xl border-[#030013]"
          src="/Nebula.mp4"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Efek gradient atas dan bawah */}
        <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-[#030013] to-transparent"></div>
        <div className="absolute top-0 w-full h-[100px] bg-gradient-to-b from-[#030013] to-transparent"></div>
      </div>
    </div>
  );
};

export default Experience;
