import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import MainContent from './MainContent';

const WrapperContent = () => {
  return (
    <>
      <div className="w-full h-auto bg-gray-300">
        <Header />
        <Navbar />
        <MainContent />
      </div>
    </>
  );
};

export default WrapperContent;
