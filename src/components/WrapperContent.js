import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import MainContent from './MainContent';
import SecondContent from './SecondContent';

const WrapperContent = () => {
  return (
    <>
      <div className="w-full h-auto">
        <Header />
        <Navbar />
        <MainContent />
        <SecondContent />
      </div>
    </>
  );
};

export default WrapperContent;
