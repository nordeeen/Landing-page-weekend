import React from 'react';
import heroNav from 'assets/hero-nav.png';

const Header = () => {
  return (
    <>
      <nav className="lg:w-full w-[100px] h-[67px] bg-white py-3 lg:px-52 px-0 lg:ml-0 ml-[20px]">
        <div className="flex justify-start items-center w-[200px]">
          <div className="w-[33px] h-[33px] mx-2">
            <img src={heroNav} alt="hero" />
          </div>
          <div>
            <h2 className="text-xs text-black">Good Morning</h2>
            <p className="text-base font-bold text-black">Fellas</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
