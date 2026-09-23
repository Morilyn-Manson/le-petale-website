'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  const [isMounted, setIsMounted] = useState(false);

  const pcImages = ['/mv01.jpg', '/mv02.jpg', '/mv03.jpg'];
  const spImages = ['/mv01_sp.jpg', '/mv02_sp.jpg', '/mv03_sp.jpg'];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <>
        <img
          src="/mv01.jpg"
          alt="メインヴィジュアル PC"
          className="hidden md:block w-full h-auto"
        />
        <img
          src="/mv01_sp.jpg"
          alt="メインヴィジュアル SP"
          className="block md:hidden w-full h-auto"
        />
      </>
    );
  }

  return (
    <>
      {/* 1. PC版スライダー */}
      <div className="hidden md:block w-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="w-full h-auto"
        >
          {pcImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`メインヴィジュアル PC ${index + 1}`}
                className="block w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. SP版スライダー */}
      <div className="block md:hidden w-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="w-full h-auto"
        >
          {spImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`メインヴィジュアル SP ${index + 1}`}
                className="block w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}