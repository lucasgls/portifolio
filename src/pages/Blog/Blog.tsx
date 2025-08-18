import { BlogNavigation } from './BlogNavigation/BlogNavigation'
import { BlogIntro } from './BlogIntro/BlogIntro'
import { BlogContent } from './BlogContent/BlogContent'

interface BlogProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'blog' | 'technologies') => void
}

export function Blog({ onNavigate }: BlogProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <BlogNavigation onNavigate={onNavigate} />
      </div>
      
      <main className="pt-[120px] max-w-[1200px] mx-auto px-8 pb-16 md:pt-[100px] md:px-4">
        <BlogIntro />
        <BlogContent />
      </main>
    </div>
  )
}