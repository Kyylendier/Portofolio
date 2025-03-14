"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Menghindari hydration error

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-32 md:mt-40 lg:mt-48 xl:mt-64 w-full z-[20]"
    >
      {/* Bagian Kiri (Teks dan Konten) */}
      <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-center md:text-center lg:text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] md:py-[8px] px-[8px] md:px-[10px] border border-[#7042f88b] opacity-[0.9] inline-block mx-auto md:mx-auto lg:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[8px] md:mr-[10px] h-4 w-4 md:h-5 md:w-5 inline-block" />
          <h1 className="orbitron Welcome-text text-[12px] md:text-[13px] inline-block">
            &quot;Pioneer of the Cosmic Horizon&quot;
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="orbitron flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto md:mx-auto lg:mx-0"
        >
          Halo, Saya
          <div className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
            <TypeAnimation
              sequence={[
                "",
                1200,
                "KEYZA AMARTYA",
                1000,
                "RPL STUDENT",
                1000,
                "FRONTEND DEV",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="exo2 text-sm sm:text-base md:text-lg text-gray-400 my-4 md:my-5 max-w-[600px] mx-auto md:mx-auto lg:mx-0"
        >
          &apos;Saya adalah siswa RPL SMKN 4 Bandung yang sedang belajar
          pemrograman. Saya punya pengalaman dasar di front-end dan API testing,
          dan saat ini sedang memiliki minat untuk mengembangkan skill saya di
          bagian backend. Saya selalu semangat belajar hal baru dan ingin terus
          berkembang!
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="orbitron py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] md:max-w-[200px] mx-auto md:mx-auto lg:mx-0 text-sm md:text-base"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/cv/CV_Keyza Amartya Alfathiin.pdf";
            link.download = "CV_Keyza Amartya.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download CV
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center mt-8 lg:mt-0"
      >
        <div className="relative overflow-hidden rounded-xl lg:ml-32 xl:ml-52 max-w-[200px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[420px]">
          <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-t from-red-600 to-red-500 animate-pulse">
            <div className="w-full h-full rounded-xl bg-black"></div>
          </div>
          <Image
            src="/Keyzanung.jpg"
            alt="work icons"
            height={420}
            width={420}
            className="object-cover opacity-70 filter contrast-100 rounded-xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
