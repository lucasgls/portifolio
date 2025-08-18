export interface NavigationProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'technologies' | 'blog') => void
}

export type PageType = 'home' | 'projects' | 'about' | 'technologies' | 'blog'