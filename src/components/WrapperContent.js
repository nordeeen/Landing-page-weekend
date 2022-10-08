import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import MainContent from './MainContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';
import Footer from './Footer';

const WrapperContent = () => {
  return (
    <>
      <div className="w-full h-auto">
        <Header />
        <Navbar />
        <MainContent />
        <SecondContent />
        <ThirdContent />
        <Footer />
      </div>
    </>
  );
};

export default WrapperContent;
