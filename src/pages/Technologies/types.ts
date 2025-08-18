export interface NavigationProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'technologies') => void
}

export type PageType = 'home' | 'projects' | 'about' | 'technologies'

export interface Technology {
  id: string
  name: string
  category: 'language' | 'framework' | 'database' | 'tool' | 'cloud'
  icon: string
  description: string
  level: 'beginner' | 'intermediate' | 'advanced'
  color: string
}