"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      {/* Judul "Keahlian Saya" */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] md:text-[25px]'
      >
        <h1 className="orbitron text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:text-[35px] md:py-8">
          Keahlian Saya
        </h1>
        Setiap bintang adalah tujuan, setiap langkah adalah pencapaian.
      </motion.div>

      {/* Kutipan */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className='exo2 text-[20px] text-gray-200 mb-10 mt-[10px] text-center md:text-[16px]'
      >
        "Berjuanglah dan terbanglah hingga tetes darah terakhir dan tetes bahan bakar terakhir, hingga detak jantung terakhir"
      </motion.div>
    </div>
  );
};

export default SkillText;