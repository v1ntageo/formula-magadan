'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ButtonProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  href: string
  className?: string
}

export function Button({ children, variant, href, className = '' }: ButtonProps) {
  const router = useRouter()
  const isPhone = href.startsWith('tel:')
  const isExternal = href.startsWith('http')
  const isAnchor = href.startsWith('#')

  const baseClasses =
    'cursor-pointer inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95'

  const variants = {
    primary: 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/25',
    secondary:
      'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50',
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (isPhone) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  if (isAnchor) {
    return (
      <button
        onClick={() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        className={classes}
      >
        {children}
      </button>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}