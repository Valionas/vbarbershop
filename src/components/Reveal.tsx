import { useEffect, useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in ms. */
  delay?: number
  /** Extra class on the wrapper. */
  className?: string
  as?: keyof HTMLElementTagNameMap
}

/** Scroll-triggered reveal: fades + slides children in when they enter the viewport. */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as as 'div'
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {}

  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  )
}
