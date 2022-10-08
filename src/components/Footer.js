import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0B24FB] w-full h-[67px] py-4">
        <div className="flex justify-between px-14 py-2">
          <p className="text-center text-base font-semibold py-1 text-white">
            wknd@2020
          </p>
          <div className="w-auto h-auto border-2 border-white rounded-full p-2">
            <p className="text-xs text-white text-center">alpha version 0.1</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
