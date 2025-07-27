import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/carousel.css';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const CarouselComponent = () => {
  const slides = [
    {
      id: 1,
      image: 'https://picsum.photos/id/1011/1920/1080', 
      title: 'Capturing Moments',
      description: 'Explore the beauty of the world through my lens.',
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/1015/1920/1080',
      title: 'Innovative Solutions',
      description: 'Crafting elegant and functional web experiences.',
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/1019/1920/1080',
      title: 'Creative Visions',
      description: 'Bringing ideas to life with code and design.',
    },
    {
      id: 4,
      image: 'https://picsum.photos/id/1022/1920/1080',
      title: 'Digital Landscapes',
      description: 'Where technology meets artistry.',
    },
    {
      id: 5,
      image: 'https://picsum.photos/id/1025/1920/1080',
      title: 'My Journey',
      description: 'A showcase of my skills and passion.',
    },
  ];

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
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

            <div className="absolute bottom-0 left-0 flex flex-col items-start justify-end text-white text-left p-8 z-20 w-full h-full">
              <p className="font-Inter text-lg mb-2 uppercase tracking-widest">
                {slide.title}
              </p>
              <h2 className="text-4xl md:text-6xl font-bold font-EB-Garamond leading-tight" >
                {slide.description}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComponent;
