'use client'

import { useState } from 'react'
import { siteData } from '@/lib/data'
import { Card } from '@/components/ui/Card'
import { PhoneLink } from '@/components/ui/PhoneLink'
import { Modal } from '@/components/ui/Modal'

const serviceIcons: Record<string, React.ReactNode> = {
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

const servicePhones: Record<string, string> = {
  carwash: '+79248504488',
  shop: '+79248509999',
  tire: '+79025080550',
}

export function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="services" className="py-12 lg:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Полный спектр услуг для вашего автомобиля в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.services.map((service) => (
              <Card key={service.id} className="flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  {serviceIcons[service.id]}
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.phones.map((phone) => (
                    <PhoneLink key={phone} phone={phone} className="block text-sm" />
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-gray-500 text-xs flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 15 15" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"/>
                    </svg>
                    {service.schedule}
                  </p>
                  {service.scheduleNote && (
                    <p className="text-gray-500 text-xs mt-1">{service.scheduleNote}</p>
                  )}
                </div>

                <div className="mt-auto">
                  {service.id === 'shop' ? (
                    <div className="flex gap-3">
                      <a
                        href={`tel:${servicePhones.shop}`}
                        className="flex-1 cursor-pointer inline-flex items-center justify-center px-4 py-4 text-base font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-center"
                      >
                        Позвонить
                      </a>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex-1 cursor-pointer inline-flex items-center justify-center px-4 py-4 text-base font-semibold rounded-lg transition-all duration-300 bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/25"
                      >
                        Написать
                      </button>
                    </div>
                  ) : (
                    <a
                      href={`tel:${servicePhones[service.id]}`}
                      className="w-full cursor-pointer inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-center"
                    >
                      Позвонить
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно — только для магазина */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold text-white mb-2">Связаться с магазином</h2>
        <p className="text-gray-400 text-sm mb-6">
          Выберите удобный способ связи, и мы ответим вам в ближайшее время
        </p>
        <div className="grid grid-cols-1 gap-3">
          <a
            href="https://t.me/formula_magadan49"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <svg className="w-8 h-8 text-[#26A5E4] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.86 4.325-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
            </svg>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">Telegram</div>
              <div className="text-gray-400 text-xs">Написать в Telegram</div>
            </div>
          </a>

          <a
            href="https://max.ru/u/f9LHodD0cOLjA3xIsaVJCU5RKc7jGjttrMATFtZ1tDCpzy0FU78tRSK31qA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <svg className="w-8 h-8 text-[#8A2BE2] shrink-0" viewBox="0 0 1373 1360" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M701.341 1355.28C566.447 1355.28 503.782 1335.66 395.148 1257.1C326.011 1345.48 108.383 1414.24 98.7996 1296.38C98.7996 1208.07 78.8616 1133.67 56.8728 1051.79C29.942 951.461 0 839.856 0 677.662C0 290.927 319.238 0 697.78 0C1076.23 0 1373 305.072 1373 681.433C1373 1057.74 1066.77 1355.29 701.321 1355.29L701.341 1355.28ZM706.803 334.384C522.629 324.8 378.912 451.781 347.219 650.551C320.949 815.167 367.497 1015.74 407.293 1025.83C426.081 1030.58 474.16 991.937 503.762 962.476C552.531 993.878 608.444 1018.23 670.619 1021.43C859.714 1031.27 1027.25 884.234 1037.18 696.329C1047.11 508.414 895.909 344.238 706.813 334.384H706.803Z"/>
            </svg>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">МАКС</div>
              <div className="text-gray-400 text-xs">Написать в МАКС</div>
            </div>
          </a>

        </div>
      </Modal>
    </>
  )
}