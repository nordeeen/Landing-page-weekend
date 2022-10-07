import React from 'react';
import firstImg from 'assets/weekend-1.png';
import secondImg from 'assets/weekend-2.png';
import thirdImg from 'assets/weekend-3.png';
import ovalArrow from 'assets/oval-arrow-right.png';

const SecondContent = () => {
  return (
    <>
      <div className="w-full h-auto pt-9 bg-black">
        <div className="flex justify-center items-center">
          <h1 className="text-white text-[32px] text-center font-extrabold pb-5">
            Help & Tips
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[1000px] h-[200px]">
            <div className="flex justify-between">
              {/* Card Image Slider */}
              <div className="w-[311px] relative">
                <div className="w-[311px] h-[72px] bg-black absolute bottom-0 mix-blend-normal opacity-[.5]">
                  <div className="p-2 flex justify-between">
                    <div className="w-[218px] h-[38px]">
                      <p className="text-base text-left text-white p-2">
                        Start quickly with simple steps
                      </p>
                    </div>
                    <a href="/#" className="flex items-center">
                      <img
                        src={ovalArrow}
                        alt="oval-arrow"
                        className="w-[32px] h-[32px] object-contain"
                      />
                    </a>
                  </div>
                </div>
                <img src={firstImg} alt="first-img" />
              </div>

              {/* Card Image Slider */}
              <div className="w-[311px] relative">
                <div className="w-[311px] h-[72px] bg-black absolute bottom-0 mix-blend-normal opacity-[.5]">
                  <div className="p-2 flex justify-between">
                    <div className="w-[218px] h-[38px]">
                      <p className="text-base text-left text-white p-2">
                        Run smoothly at vero eos et accusamus
                      </p>
                    </div>
                    <a href="/#" className="flex items-center">
                      <img
                        src={ovalArrow}
                        alt="oval-arrow"
                        className="w-[32px] h-[32px] object-contain"
                      />
                    </a>
                  </div>
                </div>
                <img src={secondImg} alt="second-img" />
              </div>

              {/* Card Image Slider */}
              <div className="w-[311px] relative ">
                <div className="w-[311px] h-[72px] bg-black absolute bottom-0 mix-blend-normal opacity-[.5]">
                  <div className="p-2 flex justify-between">
                    <div className="w-[218px] h-[38px]">
                      <p className="text-base text-left text-white p-2">
                        Denounce with righteous indignation
                      </p>
                    </div>
                    <a href="/#" className="flex items-center">
                      <img
                        src={ovalArrow}
                        alt="oval-arrow"
                        className="w-[32px] h-[32px] object-contain"
                      />
                    </a>
                  </div>
                </div>
                <img src={thirdImg} alt="third-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondContent;
