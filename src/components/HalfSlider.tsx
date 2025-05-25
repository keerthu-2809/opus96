'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const images = [
  '/images/slider-image-banner-1 (1).jpg',
  '/images/slider-image-banner-3.jpg',
  '/images/new-banner-image-1.jpg',
  '/images/slider-image-banner-2.jpg',
  '/images/slider-image-banner-4.jpg',
]

export default function HalfSlider() {
  return (
    <Swiper id = "gallery"
      modules={[Autoplay]}
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full h-full"
      slidesPerView={1.5}      // Show 1 full + 1 partial
      spaceBetween={10}        // Space between slides
      centeredSlides={true}    // Center active
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img
            src={src}
            alt={`slide-${i}`}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
