import React from 'react';
import bgContent from 'assets/bg-content.png';
import hero from 'assets/Bitmap.png';
import heroRight from 'assets/hero-right.png';
import smallOval from 'assets/small-oval.png';

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-screen bg-[#EEBECE] relative">
        {/* bgImage Content */}
        <div className="relative w-auto h-screen">
          <img
            src={bgContent}
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </div>
        {/* TEXT WEEKEND */}
        <div className="-top-0 left-0 right-0 absolute">
          <h1 className="text-center font-extrabold text-6xl text-white uppercase mt-20">
            weekend from home
          </h1>
          <p className="text-center italic text-1xl text-white mt-2">
            Stay active with a little workout.
          </p>
          {/* Hero Content */}
          <div className="flex justify-center items-center py-20 relative">
            <img
              src={hero}
              alt=""
              style={{ width: '184px', height: '305px' }}
            />
            <button className="bg-white py-4 px-[80px] rounded-3xl absolute mt-[165px] text-center outline-none">
              Let's Go
            </button>
          </div>
        </div>
        <div className="bg-[#EEBECE] w-auto h-screen flex justify-center items-center pt-40">
          <img
            src={heroRight}
            alt="hero-right"
            style={{
              width: '125px',
              height: '125px',
              position: 'absolute',
              right: '0px',
              bottom: '-250px',
            }}
          />
          <div className="w-[619px] h-auto">
            <p className="text-xl text-black font-bold text-right">
              <span className="text-blue-600">Deffinition;</span> a practice or
              exercise to test or improve one's fitness for athletic
              competition, ability, or performance to exhaust (something, such
              as a mine) by working to devise, arrange, or achieve by resolving
              difficulties. Merriam-Webster.com Dictionary.
            </p>
            <h2 className="text-xl text-white italic text-right pt-7">
              -weekend team
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#EEBECE]">
          <div className="w-[800px] h-[200px] py-9">
            <img
              src={smallOval}
              alt="small-oval"
              style={{ width: '89px', height: '89px', objectFit: 'contain' }}
            />
            <h2 className="text-center text-3xl py-2 text-white font-bold">
              Testimonial
            </h2>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
