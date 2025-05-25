'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'  // ✅ Import Autoplay module
import 'swiper/css'

const images = [
  '/images/slider-image-banner-1 (1).jpg',
  '/images/new-banner-image-1.jpg',
  '/images/slider-image-banner-2.jpg',
  '/images/slider-image-banner-4.jpg',
  '/images/slider-image-banner-3.jpg'
]

export default function ClientSlider() {
    return (
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`slide-${i}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }
