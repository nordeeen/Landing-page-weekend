import React from 'react';
import Navbar from './Navbar';
import FirstContent from './FirstContent';

// w-[1366px] h-[2805px]
// className="bg-white  w-[1366px] h-[2805px]"

const Container = () => {
  return (
    <>
      <div>
        <Navbar />
        <FirstContent />
      </div>
    </>
  );
};

export default Container;
