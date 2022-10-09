import React from 'react';
import heroLeftBottom from 'assets/hero-bottom.png';

const ThirdContent = () => {
  return (
    <>
      <div className="bg-black w-full h-auto lg:pt-16 pt-2">
        <div className="flex justify-center items-center">
          <div className="w-[100%] lg:h-[400px] h-[560px] flex justify-center py-8 relative">
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="w-[244px] h-[325px] absolute left-0 bottom-0 flex flex-end"
            >
              <img src={heroLeftBottom} alt="hero-left-bottom" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="w-[600px] h-auto"
            >
              <h1 className="lg:text-center text-left lg:ml-0 ml-[34px] text-white font-bold text-[32px] mb-6">
                You’re all set.
              </h1>
              <p className="lg:text-center text-left lg:ml-0 ml-[34px] lg:w-[600px] w-[340px] text-white text-lg res-mob-thirdtext">
                The wise man therefore always holds in these matters to this
                principle of selection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdContent;
