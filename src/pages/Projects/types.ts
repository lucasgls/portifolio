export interface NavigationProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'technologies') => void
}

export type PageType = 'home' | 'projects' | 'about' | 'technologies'