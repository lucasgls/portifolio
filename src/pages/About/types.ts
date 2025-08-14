export interface NavigationProps {
  onNavigate: (page: 'home' | 'projects' | 'about') => void
}

export type PageType = 'home' | 'projects' | 'about'