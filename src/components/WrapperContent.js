import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const WrapperContent = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-300">
        <Header />
        <Navbar />
      </div>
    </>
  );
};

export default WrapperContent;
