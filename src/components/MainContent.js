import React from 'react';

const MainContent = () => {
  return (
    <>
      <div className="w-full h-auto bg-black lg:pt-60">
        {/* TEXT POV */}
        <div className="flex justify-center items-center">
          <div className="w-[619px] h-auto lg:ml-0 ml-[34px]">
            <h1 className="lg:text-center text-left text-white uppercase text-[32px] lg:pb-28 pb-10 font-extrabold">
              pov
            </h1>
            <p className="lg:text-center text-lg text-white lg:w-[619px] w-[320px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* TEXT RESOURCES */}
        <div className="flex justify-center items-center text-white mt-20 pb-20">
          <div className="w-[619px] h-auto lg:ml-0 ml-[34px]">
            <h1 className="lg:text-center text-left text-white text-[32px] lg:pb-20 pb-10 font-extrabold">
              Resource
            </h1>
            <p className="lg:text-center text-left text-lg text-white lg:w-[619px] w-[320px]">
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
