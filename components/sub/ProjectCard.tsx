import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover" // Tinggi dikurangi sedikit untuk tablet
      />

      <div className="relative p-2 sm:p-3 md:p-3.5 lg:p-4"> {/* Padding untuk tablet sedikit dikurangi */}
        <h1 className="orbitron text-lg sm:text-xl md:text-lg lg:text-2xl font-semibold text-white">
          {title}
        </h1> {/* Ukuran teks di tablet dikurangi */}
        <p className="exo2 mt-1 sm:mt-1.5 md:mt-1.5 lg:mt-2 text-sm sm:text-base md:text-sm lg:text-base text-gray-300 text-justify">
          {description}
        </p> {/* Ukuran teks di tablet dikurangi */}
      </div>
    </div>
  );
};

export default ProjectCard;
