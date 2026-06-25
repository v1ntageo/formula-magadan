'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'
import { siteData } from '@/lib/data'
import { Lightbox } from '@/components/ui/Lightbox'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <section id="gallery" className="py-12 lg:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Автокомплекс «Формула»
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Посмотрите как у нас
            </p>
          </div>

          <div className="relative gallery-swiper-wrapper px-12">
            <Swiper
              modules={[Navigation, Autoplay, EffectCoverflow]}
              effect="coverflow"
              loop={true}
              centeredSlides={true}
              slidesPerView="auto"
              spaceBetween={20}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{
                nextEl: '.gallery-button-next',
                prevEl: '.gallery-button-prev',
              }}
              breakpoints={{
                320: { slidesPerView: 1.2, spaceBetween: 12 },
                640: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              {siteData.gallery.map((src, index) => (
                <SwiperSlide key={index}>
                  <button
                    onClick={() => setLightboxIndex(index)}
                    className="cursor-pointer w-full overflow-hidden rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    <img
                      src={src}
                      alt={`Фото ${index + 1}`}
                      className="w-full h-auto aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="gallery-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button className="gallery-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={siteData.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : siteData.gallery.length - 1))}
          onNext={() => setLightboxIndex((prev) => (prev! < siteData.gallery.length - 1 ? prev! + 1 : 0))}
        />
      )}
    </>
  )
}