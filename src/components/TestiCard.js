import React, { useEffect } from 'react';
import arrowRight from 'assets/oval-arrow-right.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Autoplay,
//   Virtual,
// } from 'swiper/core';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { getTestimonial } from 'store/reducers';

import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Navigation } from 'swiper';

// SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const SliderTesti = props => {
  return (
    <div className="w-[247px] h-[140px] bg-[#FFFFFF] p-5 res-wrapper-slider">
      <h1 className="text-black font-black text-left text-[32px] leading-[37.54px]">
        {props.title}
      </h1>
      <div className="w-[207px] h-auto mt-2">
        <p className="text-xs text-black text-left">{props.desc}</p>
      </div>
    </div>
  );
};

const TestiCard = () => {
  const dispatch = useDispatch();
  const { testi } = useSelector(state => state);

  useEffect(() => {
    dispatch(getTestimonial());
  }, [dispatch]);

  return (
    <>
      <div
        className="w-full h-auto flex justify-center items-center px-40 
      bg-[#EEBECE] res-wrapper"
      >
        {/* Behind Color Black Card */}
        <div className="bg-[black] w-full h-[80px] absolute left-0 right-0 mt-20 res-cek" />
        {/* Arrow Left */}
        <a href="/">
          <img
            src={arrowRight}
            alt="arrow-right"
            className="w-[32px] h-[32px] rotate-180 mr-[50px] mt-9 res-mob-arrow"
          />
        </a>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {testi?.map(data => {
            return (
              <SwiperSlide key={data.id}>
                <SliderTesti title={data.by} desc={data.testimony} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* Arrow Right */}
        <a href="/">
          <img
            src={arrowRight}
            alt="arrow-right"
            className="w-[32px] h-[32px] mr-[50px] rotate-96 absolute res-mob-arrow"
          />
        </a>
      </div>
    </>
  );
};

export default TestiCard;
