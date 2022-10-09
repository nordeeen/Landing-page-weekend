import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Navbar from './Navbar';
import TestiCard from './TestiCard';
import MainContent from './MainContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';
import Footer from './Footer';

const WrapperContent = () => {
  useEffect(() => {
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="w-full h-auto res-mob-wrapper">
        <Header />
        <Navbar />
        <TestiCard />
        <MainContent />
        <SecondContent />
        <ThirdContent />
        <Footer />
      </div>
    </>
  );
};

export default WrapperContent;
