import Image from 'next/image'
import { siteData } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import backgroundImage from '@/../public/images/background.webp'

export function Hero() {
  const heroButtons = [
    {
      text: 'Записаться',
      action: '#services',
      variant: 'primary' as const,
    },
    {
      text: 'Позвонить',
      action: '#contacts',
      variant: 'secondary' as const,
    },
    {
      text: 'Проложить маршрут',
      action: 'https://yandex.ru/maps/?text=Автокомплекс+Формула+Магадан',
      variant: 'secondary' as const,
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Фото для десктопа */}
        <div className="absolute inset-0 hidden sm:block">
          <Image
            src={backgroundImage}
            alt="Автокомплекс Формула в Магадане"
            fill
            className="object-cover object-[80%_center] lg:object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Фото для мобильных */}
        <div className="absolute inset-0 block sm:hidden">
          <Image
            src="/images/background-mobile.webp"
            alt="Автокомплекс Формула в Магадане"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/80" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #fff 25%, transparent 25%), linear-gradient(-45deg, #fff 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #fff 75%), linear-gradient(-45deg, transparent 75%, #fff 75%)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 lg:py-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
          Автокомплекс{' '}
          <span className="text-red-500 drop-shadow-lg">
            «{siteData.companyName}»
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-3 drop-shadow-md">
          {siteData.tagline}
        </p>

        <p className="text-base text-white mb-10 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Ваш надежный автокомплекс для обслуживания автомобиля. У нас вы можете воспользоваться автомойкой, приобрести автозапчасти, автотовары и выполнить грузовой шиномонтаж в одном месте.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          {heroButtons.map((btn) => (
            <Button key={btn.text} variant={btn.variant} href={btn.action}>
              {btn.text}
            </Button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}