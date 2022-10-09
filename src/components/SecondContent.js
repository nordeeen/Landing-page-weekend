import React from 'react';
import firstImg from 'assets/weekend-1.png';
import secondImg from 'assets/weekend-2.png';
import thirdImg from 'assets/weekend-3.png';
import ovalArrow from 'assets/oval-arrow-right.png';

const SecondContent = () => {
  return (
    <>
      <div className="w-full h-auto pt-9 bg-black">
        <div className="flex lg:justify-center lg:items-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-white text-[32px] lg:text-center text-left lg:ml-0 ml-[34px] font-extrabold pb-5"
          >
            Help & Tips
          </h1>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex justify-center items-center"
        >
          <div className="w-[1000px] lg:h-[200px] h-[600px]">
            <div className="flex justify-between lg:flex-row flex-col lg:ml-0 ml-[34px]">
              {/* Card Image Slider */}
              <div className="w-[311px] relative lg:mb-0 mb-4">
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
              <div className="w-[311px] relative lg:mb-0 mb-4">
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
              <div className="w-[311px] relative lg:mb-0 mb-4">
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
