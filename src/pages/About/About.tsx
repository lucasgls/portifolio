import { AboutNavigation } from './AboutNavigation/AboutNavigation'
import { AboutIntro } from './AboutIntro/AboutIntro'
import { AboutContent } from './AboutContent/AboutContent'

interface AboutProps {
  onNavigate: (page: 'home' | 'projects' | 'about') => void
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <AboutNavigation onNavigate={onNavigate} />
      </div>
      
      <main className="pt-[120px] max-w-[1200px] mx-auto px-8 pb-16 md:pt-[100px] md:px-4">
        <AboutIntro />
        <AboutContent />
      </main>
    </div>
  )
}