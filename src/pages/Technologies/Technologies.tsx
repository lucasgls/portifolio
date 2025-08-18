import { TechnologiesNavigation } from './TechnologiesNavigation/TechnologiesNavigation'
import { TechnologiesIntro } from './TechnologiesIntro/TechnologiesIntro'
import { TechnologiesContent } from './TechnologiesContent/TechnologiesContent'

interface TechnologiesProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'technologies' | 'blog') => void
}

export function Technologies({ onNavigate }: TechnologiesProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <TechnologiesNavigation onNavigate={onNavigate} />
      </div>
      
      <main className="pt-[120px] max-w-[1200px] mx-auto px-8 pb-16 md:pt-[100px] md:px-4">
        <TechnologiesIntro />
        <TechnologiesContent />
      </main>
    </div>
  )
}