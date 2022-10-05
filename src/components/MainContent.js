import React from 'react';
import Navbar from './Navbar';
import bgContent from '../assets/bg-content.png';
import heroContent from 'assets/Bitmap.png';

// w-[1366px] h-[800px]
// w-[1366px] h-[731.43px]
const MainContent = () => {
  return (
    <>
      <div className="absolute w-full h-[800px] bg-[#EEBECE]">
        <Navbar />
        <div
          style={{ backgroundImage: `url(${bgContent})` }}
          className="w-full h-[731.43px] left-0 top-0"
        >
          <div className="flex justify-center items-center">
            <div className="my-[128px] text-center">
              <p className="text-white uppercase text-[62px] font-extrabold leading-[51px]">
                weekend from home
              </p>
              <p className="text-white text-[21px] leading-[25px] italic my-4">
                Stay active with a little workout.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src={heroContent}
                alt="hero"
                className="w-[184px] h-[305px]"
              />
              <div className="w-[231px] h-[59px] rounded-[29px] bg-white absolute -right-6 bottom-9">
                <p className="text-center text-2xl py-3">Let's Go</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
