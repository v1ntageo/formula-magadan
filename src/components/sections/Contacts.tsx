import { siteData } from '@/lib/data'
import { PhoneLink } from '@/components/ui/PhoneLink'

const contactIcons: Record<string, React.ReactNode> = {
  carwash: (
    <svg className="w-8 h-8 text-red-600/80 shrink-0" viewBox="0 0 50 50" fill="currentColor">
      <path d="M43 6v-4h-36v4h-7v43h4v-39h3v4h36v-4h3v39h4v-43zm-.948 23l-6.525-11.125c-.259-.481-.91-.875-1.446-.875h-18.163c-.536 0-1.187.394-1.445.875l-6.524 11.125c-1.072 0-1.949.9-1.949 2v10c0 1.1.877 2 1.949 2h2.051v3c0 1.65 1.213 3 2.82 3h.975c1.607 0 3.205-1.35 3.205-3v-3h16v3c0 1.65 1.597 3 3.205 3h.975c1.607 0 2.82-1.35 2.82-3v-3h2.052c1.071 0 1.948-.9 1.948-2v-10c0-1.1-.877-2-1.948-2zm-30.693 8c-1.345 0-2.436-1.119-2.436-2.5s1.091-2.5 2.436-2.5c1.346 0 2.436 1.119 2.436 2.5s-1.09 2.5-2.436 2.5zm1.461-8l4.436-8.106c.24-.492.875-.894 1.41-.894h12.667c.536 0 1.171.402 1.41.894l4.437 8.106h-24.36zm25.821 8c-1.345 0-2.436-1.119-2.436-2.5s1.091-2.5 2.436-2.5c1.346 0 2.437 1.119 2.437 2.5s-1.092 2.5-2.437 2.5z"/>
    </svg>
  ),
  shop: (
    <svg className="w-8 h-8 text-red-600/80 shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M29,8l-2,11L9.4,21.8C8.6,21.9,8,22.6,8,23.4v0C8,24.3,8.7,25,9.6,25H27"/>
      <path d="M5,4L5,4c2.3,0,3.8,2.4,2.8,4.5L7,10l4,11"/>
      <line x1="3" y1="4" x2="5" y2="4"/>
      <line x1="7" y1="10" x2="28" y2="10"/>
      <circle cx="11" cy="27" r="2"/>
      <circle cx="24" cy="27" r="2"/>
    </svg>
  ),
  tire: (
    <svg className="w-8 h-8 text-red-600/80 shrink-0" viewBox="0 0 36 36" fill="currentColor">
      <path d="M27.989 19.977c-.622 0-1.225.078-1.806.213L15.811 9.818a8.02 8.02 0 0 0 .212-1.806A8.012 8.012 0 0 0 8.012 0C7.11 0 5.91.916 6.909 1.915l2.997 2.997s.999 1.998-.999 3.995s-3.996.998-3.996.998L1.915 6.909C.916 5.91 0 7.105 0 8.012a8.012 8.012 0 0 0 8.012 8.012a8.02 8.02 0 0 0 1.806-.212l10.371 10.371a7.963 7.963 0 0 0-.213 1.806A8.012 8.012 0 0 0 27.988 36c.901 0 2.101-.916 1.102-1.915l-2.997-2.997s-.999-1.998.999-3.995s3.995-.999 3.995-.999l2.997 2.997c1 .999 1.916-.196 1.916-1.102a8.012 8.012 0 0 0-8.011-8.012z"/>
    </svg>
  ),
}

export function Contacts() {
  return (
    <section className="py-6 sm:py-12 lg:py-20 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Контакты
        </h2>
        <p className="text-gray-400 mb-12">
          Свяжитесь с нами удобным способом
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {siteData.services.map((service) => (
            <div key={service.id} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex justify-center mb-3">
                {contactIcons[service.id]}
              </div>
              <h3 className="text-white font-semibold mb-3">{service.title}</h3>
              <div className="flex flex-col items-center">
                {service.phones.map((phone) => (
                  <PhoneLink key={phone} phone={phone} className="block text-sm mb-1" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <a
          href={`mailto:${siteData.email}`}
          className="group inline-flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors text-lg"
        >
          <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" viewBox="0 -3 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.74379 2L10.8531 6.9765C11.5417 7.4585 12.4583 7.4585 13.1469 6.9765L20.2562 2H3.74379zM22 3.22066L14.2938 8.615C12.9166 9.5791 11.0834 9.5791 9.70615 8.615L2 3.22066V15C2 15.5523 2.44772 16 3 16H21C21.5523 16 22 15.5523 22 15V3.22066zM3 0H21C22.6569 0 24 1.34315 24 3V15C24 16.6569 22.6569 18 21 18H3C1.34315 18 0 16.6569 0 15V3C0 1.34315 1.34315 0 3 0z"/>
          </svg>
          {siteData.email}
        </a>
      </div>
    </section>
  )
}