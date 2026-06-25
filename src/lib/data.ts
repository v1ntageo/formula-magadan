import { SiteData } from '@/types'

export const siteData: SiteData = {
  companyName: 'Формула',
  tagline: 'Автомойка • Автомагазин • Грузовой Шиномонтаж',
  subTagline: 'Формула качества для вашего автомобиля',
  email: 'formula_magadan@mail.ru',
  address: 'Магадан, ул. Продольная, 30',
  
  services: [
    {
      id: 'carwash',
      title: 'Автомойка',
      description: 'Профессиональная мойка автомобилей по предварительной записи.',
      phones: ['+7 (924) 850-44-88', '21-44-88'],
      schedule: 'Ежедневно с 09:00 до 21:00',
      icon: '🚗',
    },
    {
      id: 'shop',
      title: 'Автомагазин',
      description: 'Большой выбор аккумуляторов, автохимии, масел, аксессуаров, автозапчастей и расходных материалов.',
      phones: ['+7 (924) 850-99-99', '212-999'],
      schedule: 'Ежедневно с 09:00 до 01:00',
      icon: '🛒',
    },
    {
      id: 'tire',
      title: 'Грузовой шиномонтаж',
      description: 'Сезонная замена шин, ремонт проколов и профессиональное обслуживание.',
      phones: ['+7 (902) 508-05-50', '660-550'],
      schedule: 'с 09:00 до 18:00',
      scheduleNote: 'Воскресенье выходной',
      icon: '🔧',
    },
  ],

  selfService: {
    title: 'Автомойка самообслуживания',
    description: 'Современные посты самообслуживания для быстрого и качественного ухода за автомобилем.',
    schedule: 'Ежедневно с 09:00 до 01:00',
  },

  heroButtons: [
    {
      text: 'Записаться на мойку',
      action: 'tel:+79248504488',
      variant: 'primary',
    },
    {
      text: 'Позвонить',
      action: 'tel:+79248509999',
      variant: 'secondary',
    },
    {
      text: 'Проложить маршрут',
      action: 'https://yandex.ru/maps/?text=Автокомплекс+Формула+Магадан',
      variant: 'secondary',
    },
  ],

  certificates: [
    '/images/certificates/cert-1.webp',
    '/images/certificates/cert-2.webp',
    '/images/certificates/cert-3.webp',
    '/images/certificates/cert-4.webp',
    '/images/certificates/cert-5.webp',
    '/images/certificates/cert-6.webp',
    '/images/certificates/cert-7.webp',
    '/images/certificates/cert-8.webp',
    '/images/certificates/cert-9.webp',
    '/images/certificates/cert-10.webp',
    '/images/certificates/cert-11.webp',
    '/images/certificates/cert-12.webp',
    '/images/certificates/cert-13.webp',
    '/images/certificates/cert-14.webp',
    '/images/certificates/cert-15.webp',
  ],

  gallery: [
    '/images/gallery/gallery-1.webp',
    '/images/gallery/gallery-2.webp',
    '/images/gallery/gallery-3.webp',
    '/images/gallery/gallery-4.webp',
    '/images/gallery/gallery-5.webp',
    '/images/gallery/gallery-6.webp',
    '/images/gallery/gallery-7.webp',
    '/images/gallery/gallery-8.webp',
    '/images/gallery/gallery-9.webp',
  ],
}