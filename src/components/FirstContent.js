import React from 'react';
import bgContent from 'assets/bg-home.svg';
import heroContent from 'assets/Bitmap.png';
import heroRight from 'assets/Hero-Content-Right.png';
import pathPinkRight from 'assets/path-pink-right-second.png';
import smallOval from 'assets/small-oval.png';
import SecondContent from './SecondContent';

// w-[1366px] h-[800px]
// w-[1366px] h-[731.43px] left-0 top-0
const FirstContent = () => {
  return (
    <>
      <div className="absolute w-full h-screen bg-[#EEBECE]">
        <div
          style={{
            backgroundImage: `url(${bgContent})`,
          }}
          className="w-full h-[725px] bg-[#EEBECE]"
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
              <div className="w-[231px] h-[59px] rounded-[29px] bg-white absolute -right-6 bottom-9 text-center">
                <button className="text-center text-2xl py-3 text-black outline-none">
                  Let's Go
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EEBECE] text-white w-full h-screen flex justify-center items-center">
          <div className="flex absolute right-[1px] bottom-[-255px]">
            <img
              src={heroRight}
              alt="hero-right"
              className="w-[95px] h-[158px] object-contain relative right-[-58px]"
            />
            <img
              src={pathPinkRight}
              alt="path-pink-right"
              className="w-[60px] h-[158px] object-contain"
            />
          </div>
          <div className="w-[619px] h-[160px] px-auto">
            <p className="text-right text-black">
              <span className="text-blue-900">Deffinition;</span> a practice or
              exercise to test or improve one's fitness for athletic
              competition, ability, or performance to exhaust (something, such
              as a mine) by working to devise, arrange, or achieve by resolving
              difficulties. Merriam-Webster.com Dictionary.
            </p>
            <p className="text-right mt-6 my-20">-weekend team</p>
            <div className="flex flex-col">
              <h2 className="text-black-900 flex justify-center text-4xl font-extrabold text-center">
                Testimonial
              </h2>
              <img
                src={smallOval}
                alt="oval"
                className="w-[89px] h-[89px] object-contain mt-[2px] ml-[-180px]"
              />
            </div>
          </div>
        </div>
        <SecondContent />
      </div>
    </>
  );
};

export default FirstContent;
