'use client'

import { useState } from 'react'
import { siteData } from '@/lib/data'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Услуги', href: '#services' },
    { label: 'Контакты', href: '#contacts' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <a href="#" className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="Формула" className="h-15 w-auto" />
          </a>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacts"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Позвонить
            </a>
          </nav>

          {/* Мобильная кнопка меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+79248509999"
                className="bg-red-600 hover:bg-red-700 text-white text-center px-4 py-3 rounded-lg text-sm font-semibold mt-2"
              >
                Позвонить
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}