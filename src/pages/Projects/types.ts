export interface NavigationProps {
  onNavigate: (page: 'home' | 'projects') => void
}

export type PageType = 'home' | 'projects'