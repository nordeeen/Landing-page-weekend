import React from 'react';
import bgContent from 'assets/bg-content.png';
import hero from 'assets/Bitmap.png';
import heroRight from 'assets/hero-right.png';
import smallOval from 'assets/small-oval.png';

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-auto bg-[#EEBECE] relative">
        {/* bgImage Content */}
        <div className="relative w-auto h-screen">
          <img
            src={bgContent}
            alt=""
            className="w-[100%] h-auto object-cover res-mob-bg res-mob"
          />
        </div>
        {/* TEXT WEEKEND */}
        <div className="-top-0 left-0 right-0 absolute">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-center font-extrabold lg:text-6xl text-white uppercase mt-20 res-mob-title"
          >
            weekend from home
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center italic text-1xl text-white mt-2"
          >
            Stay active with a little workout.
          </p>
          {/* Hero Content */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex justify-center items-center py-20 relative"
          >
            <img src={hero} alt="" className="w-[184px] h-[305px]" />
            <a
              href="/#"
              className="bg-white py-4 px-[80px] rounded-3xl absolute mt-[165px] text-center outline-none hover:-translate-y-2 transition-all duration-500"
            >
              Let's Go
            </a>
          </div>
        </div>
        <div className="bg-[#EEBECE] w-auto h-screen flex justify-center items-center lg:pt-40 -mt-[250px]">
          <img
            src={heroRight}
            alt="hero-right"
            className="w-[125px] h-[125px] absolute lg:top-[650px] top-[620px] right-0"
          />
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-once="false"
            className="lg:w-[619px] w-[390px] h-auto lg:px-0 px-8 pt-60 res-mob-text"
          >
            <p className="lg:text-xl text-[18px] text-black font-bold text-right">
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
        <div className="flex justify-center items-center bg-[#EEBECE] res-mob-oval">
          <div className="w-[800px] lg:h-[200px] h-[0px] pb-[30px]">
            <img
              src={smallOval}
              alt="small-oval"
              className="w-[89px] h-[89px] object-contain lg:mt-0 -mt-[220px] lg:ml-0 ml-[50px]"
            />
            <h2 className="lg:text-center text-left lg:ml-0 ml-[34px] lg:mt-0 -mt-6 text-3xl text-white font-bold">
              Testimonial
            </h2>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
