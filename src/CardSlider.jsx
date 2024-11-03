import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import cardImg1 from './assets/cardImg1.avif';
import cardImg2 from './assets/cardImg2.avif';
import cardImg3 from './assets/cardImg3.avif';
import cardImg4 from './assets/cardImg4.avif';
import cardImg5 from './assets/cardImg5.avif';
import cardImg6 from './assets/cardImg6.avif';
import cardImg7 from './assets/cardImg7.avif';
import cardImg8 from './assets/cardImg8.avif';
import cardImg9 from './assets/cardImg9.avif';
import cardImg10 from './assets/cardImg10.avif';
import cardImg11 from './assets/cardImg11.avif';
import cardImg12 from './assets/cardImg12.avif';

const CardSlider = () => {
  return (
    <div className='flex justify-center bg-[#141414] pt-80 pb-10'>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }} 
        style={{
          color:'white'
        }}
      >
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg1} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg2} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg3} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg4} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg5} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg6} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg7} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg8} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg9} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
          <img src={cardImg10} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg11} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-72 h-80 hover:scale-105'>
            <img src={cardImg12} alt="" className='w-full h-full rounded-3xl hover:rounded-none' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSlider;

