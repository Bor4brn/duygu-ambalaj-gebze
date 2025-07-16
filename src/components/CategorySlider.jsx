'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

export default function CategorySlider({ items }) {
  return (
    <div className="my-12">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map(cat => (
          <SwiperSlide key={cat.name}>
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <div className="w-32 h-32 relative mb-3">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-center font-bold text-[#172f61]">
                {cat.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
