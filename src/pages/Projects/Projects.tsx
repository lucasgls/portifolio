import { ProjectsNavigation, ProjectsIntro, ProjectsList } from './index'
import type { NavigationProps } from './types'

interface ProjectsProps extends NavigationProps {}

export function Projects({ onNavigate }: ProjectsProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:top-6">
        <ProjectsNavigation onNavigate={onNavigate} />
      </div>
      
      <main className="pt-[100px] max-w-[1200px] mx-auto px-4 pb-20 md:pt-[120px] md:px-8 md:pb-16 sm:px-3 sm:pt-[90px]">
        <ProjectsIntro />
        <ProjectsList />
      </main>
    </div>
  )
}