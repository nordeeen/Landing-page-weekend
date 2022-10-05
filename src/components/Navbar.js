import React from 'react';
import heroNav from '../assets/hero-nav.png';

const Navbar = () => {
  return (
    <>
      <nav className="w-[1366px] h-[67px] bg-[#FFFFFF] left-0 top-0 flex">
        <div className="w-[33px] h-[33px] absolute left-[213px] top-[17px]">
          <img src={heroNav} alt="hero-nav" />
        </div>
        <div className="absolute w-[82px] h-[14px] left-[259px] top-[17px]">
          <p
            className="
          text-xs"
          >
            Good Morning
          </p>
        </div>
        <div className="absolute w-[47px] h-[19px] left-[259px] top-[31px] ">
          <p className="text-base font-bold text-[#000000]">Fellas</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
