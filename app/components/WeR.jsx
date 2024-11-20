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
          delay: 3000,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='flex flex-col min-h-[770px] pl-10 pr-0 pt-10 pb-10 text-[#fffef8]  my-6 mx-0'>
          {/* <SwipIndiv/> */}

          <img src="https://venga.com/_next/static/media/spain.306cdab4.webp" className='rounded-[16px] absolute inset-0 w-full h-full z-[-2] object-cover' />
          <h2 class="m-0 p-0 box-border  z-[1] font-extrabold text-[90px] leading-[85%] tracking-[-0.02em] uppercase max-w-[940px] mb-auto">
            <div class="m-0 p-0 box-border">
            <div class="m-0 p-0 box-border inline-flex">
                <span class="m-0 p-0 box-border opacity-100 transform-none">w</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">’</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
            </div>
            <div class="m-0 p-0 box-border inline-flex">
                <span class="m-0 p-0 box-border opacity-100 transform-none">a</span>
            </div>
            <div class="m-0 p-0 box-border inline-flex">
                <span class="m-0 p-0 box-border opacity-100 transform-none">V</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">t</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">u</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">a</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">l</span>
            </div>
            <div class="m-0 p-0 box-border inline-flex">
                <span class="m-0 p-0 box-border opacity-100 transform-none">A</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">s</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">s</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">t</span>
            </div>
            <div class="m-0 p-0 box-border inline-flex">
                <span class="m-0 p-0 box-border opacity-100 transform-none">S</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">v</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">c</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
            </div>
            <div class="m-0 p-0 box-border inline-flex">
                <span class="m-0 p-0 box-border opacity-100 transform-none">P</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">o</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">v</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">d</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
            </div>
            <div class="m-0 p-0 box-border inline-flex">
                <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">n</span>
            </div>
            <div class="m-0 p-0 box-border inline-flex">
                <span class="m-0 p-0 box-border opacity-100 transform-none">P</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">o</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">l</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">a</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">n</span>
                <span class="m-0 p-0 box-border opacity-100 transform-none">d</span>
            </div>
            </div>
           </h2>
    <div class="m-0 p-0 box-border flex justify-between z-[1] items-center">
        <div class="m-0 p-0 box-border  font-medium text-[24px] leading-[130%] tracking-[0.01em] max-w-[530px]">
            <div class="m-0 p-0 text-black box-border">
                <div class="m-0 p-0 box-border text-black inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">V</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">n</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">g</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">a</span>
                </div>
                <div class="m-0 p-0 box-border text-black inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">s</span>
                </div>
                <div class="m-0 p-0 box-border text-black inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">g</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">s</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">t</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">d</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">a</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">s</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">a</span>
                </div>
                <div class="m-0 p-0 box-border text-black inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">V</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">t</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">u</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">a</span>
                    <span class="m-0 p-0 box-border text-black opacity-100 transform-none">l</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">A</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">s</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">s</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">t</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">S</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">v</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">c</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">P</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">o</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">v</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">d</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">w</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">t</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">h</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">t</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">h</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">M</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">n</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">s</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">t</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">y</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">o</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">f</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">F</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">n</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">a</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">n</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">c</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">o</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">f</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">t</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">h</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">R</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">p</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">u</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">b</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">l</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">c</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">o</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">f</span>
                </div>
                <div class="m-0 p-0 box-border inline-flex">
                    <span class="m-0 p-0 box-border opacity-100 transform-none">P</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">o</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">l</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">a</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">n</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">d</span>
                    <span class="m-0 p-0 box-border opacity-100 transform-none">.</span>
                </div>
            </div>
        </div>
        <div class="m-0 p-[24px] box-border flex items-center bg-[rgb(255,_254,_248)] rounded-tl-[16px] rounded-br-none rounded-tr-none rounded-bl-[16px] min-w-[246px]">
            <img alt="flag-pl" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" src="/_next/static/media/PL.48c1e8c6.svg" class="border-none m-0 p-0 box-border w-[32px] h-[32px] rounded-[16px] mr-[16px] text-transparent"></img>
            <div class="m-0 p-0 box-border">
                <div class="m-0 p-0 box-border  font-bold text-[16px] tracking-[normal] text-[rgb(17,_26,_41)] leading-[100%] uppercase">
                    <div class="m-0 p-0 box-border">
                        <div class="m-0 p-0 box-border inline-flex">
                            <span class="m-0 p-0 box-border opacity-100 transform-none">M</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">n</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">s</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">t</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">r</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">y</span>
                        </div>
                        <div class="m-0 p-0 box-border inline-flex">
                            <span class="m-0 p-0 box-border opacity-100 transform-none">o</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">f</span>
                        </div>
                        <div class="m-0 p-0 box-border inline-flex">
                            <span class="m-0 p-0 box-border opacity-100 transform-none">F</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">i</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">n</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">a</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">n</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">c</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">e</span>
                        </div>
                    </div>
                </div>
                <div class="m-0 p-0 box-border  font-medium text-[16px] tracking-[0.01em] text-[rgb(17,_26,_41)] leading-[100%]">
                    <div class="m-0 p-0 box-border">
                        <div class="m-0 p-0 box-border inline-flex">
                            <span class="m-0 p-0 box-border opacity-100 transform-none">№</span>
                        </div>
                        <div class="m-0 p-0 box-border inline-flex">
                            <span class="m-0 p-0 box-border opacity-100 transform-none">R</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">D</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">W</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">W</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">-</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">1</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">1</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">9</span>
                            <span class="m-0 p-0 box-border opacity-100 transform-none">2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col min-h-[770px] text-[#fffef8] pl-10 pr-0 pt-10 pb-10 my-6 mx-0'>
          <img src="https://venga.com/_next/static/media/poland.cdcda472.webp" className='rounded-[16px] absolute inset-0 w-full h-full object-cover' />
        </SwiperSlide>
       
      </Swiper>
    </>
  )
}

export default WeR
