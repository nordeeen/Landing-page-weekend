/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const SecondContent = () => {
  return (
    <>
      <div className="absolute w-full h-screen bg-black flex justify-center items-center">
        <div className="relative top-[-300px] w-[900px] h-[200px] flex justify-between items-center py-10">
          <a
            href="/"
            className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full mt-[55px]"
          >
            <span className="text-[blue] text-3xl font-bold">←</span>
          </a>
          <div className="w-[247px] h-[140px] bg-[#FFFFFF] mx-3 py-2 shadow-sm z-20">
            <h1 className="text-4xl font-black text-center">Blu Kicks</h1>
            <div className="w-[207px] h-[42px]">
              <p className="text-xs font-normal px-[20px] mt-5">
                Places where you can leverage tools and software to free up time
                to focus on growing the business.
              </p>
            </div>
          </div>
          <div className="w-[247px] h-[140px] bg-[#FFFFFF] mx-3 py-2 shadow-sm z-20">
            <h1 className="text-4xl font-black text-center">Blu Kicks</h1>
            <div className="w-[207px] h-[42px]">
              <p className="text-xs font-normal px-[20px] mt-5">
                Places where you can leverage tools and software to free up time
                to focus on growing the business.
              </p>
            </div>
          </div>
          <div className="w-[247px] h-[140px] bg-[#FFFFFF] mx-3 py-2 shadow-sm z-20">
            <h1 className="text-4xl font-black text-center">Blu Kicks</h1>
            <div className="w-[207px] h-[42px]">
              <p className="text-xs font-normal px-[20px] mt-5">
                Places where you can leverage tools and software to free up time
                to focus on growing the business.
              </p>
            </div>
          </div>
          <a
            href="/"
            className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full mt-[55px]"
          >
            <span className="text-[blue] text-3xl font-bold">→</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default SecondContent;
