import React from 'react';
import heroLeftBottom from 'assets/hero-bottom.png';

const ThirdContent = () => {
  return (
    <>
      <div className="bg-black w-full h-auto pt-16">
        <div className="flex justify-center items-center">
          <div className="w-[100%] h-[400px] flex justify-center py-8 relative">
            <div className="w-[244px] h-[325px] absolute left-0 bottom-0 flex flex-end">
              <img src={heroLeftBottom} alt="hero-left-bottom" />
            </div>
            <div className="w-[600px] h-auto">
              <h1 className="text-center text-white font-bold text-[32px] mb-6">
                You’re all set.
              </h1>
              <p className="text-center text-white text-lg">
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
