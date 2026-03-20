'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

export function RevealOnScroll({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode
  className?: string
  delayMs?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (!first) return
        if (first.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.12,
        rootMargin: '60px',
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      className={`landing-reveal ${visible ? 'landing-reveal-visible' : ''} ${className ?? ''}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}

