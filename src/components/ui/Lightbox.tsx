'use client'

import { useEffect, useCallback } from 'react'

interface LightboxProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (currentIndex < 0 || currentIndex >= images.length) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Закрыть — крестик */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 text-white/70 hover:text-white text-3xl cursor-pointer transition-colors"
        aria-label="Закрыть"
      >
        ✕
      </button>

      {/* Счётчик */}
      <div className="absolute top-4 left-4 z-20 text-white/50 text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Изображение */}
      <img
        src={images[currentIndex]}
        alt={`Изображение ${currentIndex + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain z-10 pointer-events-none"
      />

      {/* Зоны клика */}
      <div className="absolute inset-0 z-10 flex">
        <div
          onClick={onPrev}
          className="w-[15%] h-full cursor-pointer group flex items-center justify-start pl-4"
        >
          <span className="text-white/30 group-hover:text-white/80 text-5xl transition-colors">‹</span>
        </div>
        <div
          onClick={onClose}
          className="w-[70%] h-full cursor-pointer"
        />
        <div
          onClick={onNext}
          className="w-[15%] h-full cursor-pointer group flex items-center justify-end pr-4"
        >
          <span className="text-white/30 group-hover:text-white/80 text-5xl transition-colors">›</span>
        </div>
      </div>
    </div>
  )
}