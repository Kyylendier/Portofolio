import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        <div className="w-full flex items-center justify-center">
          <div className="w-full lg:w-auto flex items-center justify-center space-x-4">
            <div className="flex items-center justify-between w-full lg:w-[500px] h-auto border border-[#7042f861] bg-[#0300145e] px-4 py-2 sm:px-6 sm:py-3 rounded-full text-gray-200 text-xs sm:text-sm md:text-base">
              <a href="#about-me" className="cursor-pointer hover:text-purple-400 transition-colors">
                About me
              </a>
              <a href="#skills" className="cursor-pointer hover:text-purple-400 transition-colors">
                Skills
              </a>
              <a href="#experience" className="cursor-pointer hover:text-purple-400 transition-colors">
                Exp & Ed
              </a>
              <a href="#projects" className="cursor-pointer hover:text-purple-400 transition-colors">
                Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;