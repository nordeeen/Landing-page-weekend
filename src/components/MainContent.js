import React from 'react';

const MainContent = () => {
  return (
    <>
      <div className="w-full h-auto bg-black pt-80">
        {/* TEXT POV */}
        <div className="flex justify-center items-center">
          <div className="w-[619px] h-auto">
            <h1 className="text-center text-white uppercase text-[32px] pb-28 font-extrabold">
              pov
            </h1>
            <p className="text-center text-lg text-white">
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
          <div className="w-[619px] h-auto">
            <h1 className="text-center text-white uppercase text-[32px] pb-20 font-extrabold">
              resources
            </h1>
            <p className="text-center text-lg text-white">
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
