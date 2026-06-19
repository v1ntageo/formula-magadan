import { siteData } from '@/lib/data'
import { PhoneLink } from '@/components/ui/PhoneLink'

export function Footer() {
  return (
    <footer id="contacts" className="bg-black/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Три блока по центру */}
        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-16 items-center lg:items-start text-center lg:text-left">
          {/* О компании */}
          <div className="flex flex-col items-center 800:items-start">
            <img src="/images/logo.svg" alt="Формула" className="h-15 w-auto mb-2" />
            <p className="text-gray-400 text-sm leading-relaxed text-center 800:text-left max-w-64">
              {siteData.subTagline}. Быстрое обслуживание, качественные материалы и удобный график работы.
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Контакты
            </h4>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 sm:gap-6 lg:gap-4 xl:gap-10">
              <div>
                <p className="text-xs text-gray-500 mb-1">Автомойка</p>
                {siteData.services[0].phones.map((phone) => (
                  <PhoneLink key={phone} phone={phone} variant="footer" className="block text-sm mb-1" />
                ))}
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Автомагазин</p>
                {siteData.services[1].phones.map((phone) => (
                  <PhoneLink key={phone} phone={phone} variant="footer" className="block text-sm mb-1" />
                ))}
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Шиномонтаж</p>
                {siteData.services[2].phones.map((phone) => (
                  <PhoneLink key={phone} phone={phone} variant="footer" className="block text-sm mb-1" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Свяжитесь с нами */}
          <div className="max-w-xs">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Свяжитесь с нами
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${siteData.email}`}
                className="group flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" viewBox="0 -3 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.74379 2L10.8531 6.9765C11.5417 7.4585 12.4583 7.4585 13.1469 6.9765L20.2562 2H3.74379zM22 3.22066L14.2938 8.615C12.9166 9.5791 11.0834 9.5791 9.70615 8.615L2 3.22066V15C2 15.5523 2.44772 16 3 16H21C21.5523 16 22 15.5523 22 15V3.22066zM3 0H21C22.6569 0 24 1.34315 24 3V15C24 16.6569 22.6569 18 21 18H3C1.34315 18 0 16.6569 0 15V3C0 1.34315 1.34315 0 3 0z" />
                </svg>
                {siteData.email}
              </a>
              <a
                href="https://yandex.ru/maps/?text=Автокомплекс+Формула+Магадан"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.06999 4.59988C2.86999 1.13988 8.07999 1.13988 8.86999 4.59988C9.33999 6.62988 8.04999 8.34988 6.92999 9.41988C6.10999 10.1999 4.81999 10.1899 3.99999 9.41988C2.88999 8.34988 1.59999 6.62988 2.06999 4.59988Z" />
                  <path d="M15.07 16.5999C15.87 13.1399 21.11 13.1399 21.91 16.5999C22.38 18.6299 21.09 20.3499 19.96 21.4199C19.14 22.1999 17.84 22.1899 17.02 21.4199C15.89 20.3499 14.6 18.6299 15.07 16.5999Z" />
                  <path d="M12 5H14.68C16.53 5 17.39 7.29 16 8.51L8.01001 15.5C6.62001 16.71 7.48001 19 9.32001 19H12" />
                  <path d="M5.48622 5.5H5.49777" strokeWidth="2" />
                  <path d="M18.4862 17.5H18.4978" strokeWidth="2" />
                </svg>
                Проложить маршрут
              </a>
              {/* Социальные сети */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-1">          
                <a
                  href="https://t.me/formula_magadan49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#26A5E4] transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.86 4.325-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z" />
                  </svg>
                </a>
                <a
                  href="https://max.ru/u/f9LHodD0cOLjA3xIsaVJCU5RKc7jGjttrMATFtZ1tDCpzy0FU78tRSK31qA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#8A2BE2] transition-colors"
                  aria-label="Макс"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 1373 1360" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2301_6)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M701.341 1355.28C566.447 1355.28 503.782 1335.66 395.148 1257.1C326.011 1345.48 108.383 1414.24 98.7996 1296.38C98.7996 1208.07 78.8616 1133.67 56.8728 1051.79C29.942 951.461 0 839.856 0 677.662C0 290.927 319.238 0 697.78 0C1076.23 0 1373 305.072 1373 681.433C1373 1057.74 1066.77 1355.29 701.321 1355.29L701.341 1355.28ZM706.803 334.384C522.629 324.8 378.912 451.781 347.219 650.551C320.949 815.167 367.497 1015.74 407.293 1025.83C426.081 1030.58 474.16 991.937 503.762 962.476C552.531 993.878 608.444 1018.23 670.619 1021.43C859.714 1031.27 1027.25 884.234 1037.18 696.329C1047.11 508.414 895.909 344.238 706.813 334.384H706.803Z" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Автокомплекс «Формула», Магадан. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}