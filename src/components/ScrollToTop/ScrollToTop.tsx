import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-white/8 backdrop-blur-xl border border-white/12 rounded-2xl flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-2'
      } hover:bg-white/12 hover:scale-105 hover:border-white/20 active:scale-95 active:transition-none`}
      aria-label="Voltar ao topo"
    >
      <svg 
        className="w-5 h-5 text-white/90 transition-transform duration-200 ease-out" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  )
}

export default ScrollToTop