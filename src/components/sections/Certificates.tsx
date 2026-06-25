'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { siteData } from '@/lib/data'
import { Lightbox } from '@/components/ui/Lightbox'
import 'swiper/css'
import 'swiper/css/navigation'

export function Certificates() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <section className="py-12 lg:py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Наши сертификаты
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Работаем только с оригинальной продукцией
            </p>
          </div>

          <div className="relative px-20 certificates-swiper-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              loop={true}
              centeredSlides={false}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                nextEl: '.certs-button-next',
                prevEl: '.certs-button-prev',
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 6 },
                320: { slidesPerView: 1, spaceBetween: 6 },
                380: { slidesPerView: 2, spaceBetween: 8 },
                500: { slidesPerView: 3, spaceBetween: 8 },
                640: { slidesPerView: 4, spaceBetween: 10 },
                768: { slidesPerView: 5, spaceBetween: 12 },
                1024: { slidesPerView: 6, spaceBetween: 12 },
                1280: { slidesPerView: 7, spaceBetween: 12 },
              }}
            >
              {siteData.certificates.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full">
                    <button
                      onClick={() => setLightboxIndex(index)}
                      className="cursor-pointer w-full bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
                    >
                      <img
                        src={src}
                        alt={`Сертификат ${index + 1}`}
                        className="w-full h-auto object-contain "
                        loading="lazy"
                      />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="certs-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button className="certs-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={siteData.certificates}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : siteData.certificates.length - 1))}
          onNext={() => setLightboxIndex((prev) => (prev! < siteData.certificates.length - 1 ? prev! + 1 : 0))}
        />
      )}
    </>
  )
}