'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';
import SwipIndiv from './SwipIndiv';


const WeR = () => {
  return (
    <>
      <Swiper
      tag="section"
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='flex flex-col min-h-[770px] text-[#fffef8] pt-10 pr-0 pb-10 pl-10 my-6 mx-0'>
          {/* <SwipIndiv/> */}
          <img src="https://venga.com/_next/static/media/spain.306cdab4.webp" className='rounded-[16px]' />
        </SwiperSlide>
        <SwiperSlide className='flex flex-col min-h-[770px] text-[#fffef8] pt-10 pr-0 pb-10 pl-10 my-6 mx-0'>
          <img src="https://venga.com/_next/static/media/poland.cdcda472.webp" className='rounded-[16px]' />
        </SwiperSlide>
       
      </Swiper>
    </>
  )
}

export default WeR
