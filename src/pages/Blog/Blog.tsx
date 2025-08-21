import { BlogNavigation } from './BlogNavigation/BlogNavigation'
import { BlogIntro } from './BlogIntro/BlogIntro'
import { BlogContent } from './BlogContent/BlogContent'

interface BlogProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'blog' | 'technologies') => void
}

export function Blog({ onNavigate }: BlogProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:top-6">
        <BlogNavigation onNavigate={onNavigate} />
      </div>
      
      <main className="pt-[100px] max-w-[1200px] mx-auto px-4 pb-20 md:pt-[120px] md:px-8 md:pb-16 sm:px-3 sm:pt-[90px]">
        <BlogIntro />
        <BlogContent />
      </main>
    </div>
  )
}