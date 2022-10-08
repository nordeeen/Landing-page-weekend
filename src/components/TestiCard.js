import React from 'react';
import arrowRight from 'assets/oval-arrow-right.png';

const TestiCard = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center absolute top-[1240px]">
        {/* Arrow Left */}
        <a href="/">
          <img
            src={arrowRight}
            alt="arrow-right"
            className="w-[32px] h-[32px] rotate-180 mr-[50px]"
          />
        </a>
        {/* Card Slide 1 */}
        <div className="flex justify-between gap-3">
          <div className="w-[247px] h-[140px] bg-[#FFFFFF] p-5">
            <h1 className="text-black font-black text-left text-[32px] leading-[37.54px]">
              Blue Kicks
            </h1>
            <div className="w-[207px] h-auto mt-2">
              <p className="text-xs text-black text-left">
                Places where you can leverage tools and software to free up time
                to focus on growing the business.
              </p>
            </div>
          </div>
          {/* Card Slide 2 */}
          <div className="w-[247px] h-[140px] bg-[#FFFFFF] p-5">
            <h1 className="text-black font-black text-left text-[32px] leading-[37.54px]">
              Angelus
            </h1>
            <div className="w-[207px] h-auto mt-2">
              <p className="text-xs text-black text-left">
                All those apps took me months to get running. Now the site
                practically runs itself!
              </p>
            </div>
          </div>
          {/* Card Slide 3 */}
          <div className="w-[247px] h-[140px] bg-[#FFFFFF] p-5">
            <h1 className="text-black font-black text-left text-[32px] leading-[37.54px]">
              SoYoung
            </h1>
            <div className="w-[207px] h-auto mt-2">
              <p className="text-xs text-black text-left">
                Unless you have a truly unique product, it will be very hard to
                differentiate and gain brand traction
              </p>
            </div>
          </div>
        </div>
        {/* Arrow Right */}
        <a href="/">
          <img
            src={arrowRight}
            alt="arrow-right"
            className="w-[32px] h-[32px] ml-[50px]"
          />
        </a>
      </div>
    </>
  );
};

export default TestiCard;
