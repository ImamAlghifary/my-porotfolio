import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/carousel.css';
import slides from '../data/experienceData';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const CarouselComponent = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
      className="w-full h-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full min-h-[420px] h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full min-h-[400px] h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

            <div className="absolute bottom-0 left-0 flex flex-col items-start justify-end text-white text-left p-8 z-20 w-full h-full">
              <p className="font-Inter text-lg mb-2 uppercase tracking-widest">
                {slide.title}
              </p>
              <h2 className="text-2xl md:text-6xl font-bold font-EB-Garamond leading-tight" >
                {slide.description}
              </h2>
              {slide.link && slide.link.trim !== '' && (
                <a href={slide.link} target="_blank" className='text-2xl border-b-4 p-1 mt-3 hover:text-teal hover:border-teal'>Report</a>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComponent;
