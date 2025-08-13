import ProjectsNavigation from './ProjectsNavigation/ProjectsNavigation'
import ProjectsIntro from './ProjectsIntro/ProjectsIntro'
import ProjectsList from './ProjectsList/ProjectsList'

interface ProjectsProps {
  onNavigate: (page: 'home' | 'projects') => void
}

export default function Projects({ onNavigate }: ProjectsProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <ProjectsNavigation onNavigate={onNavigate} />
      </div>
      
      <main className="pt-[140px] max-w-[1200px] mx-auto px-8 pb-16 md:pt-20 md:px-4">
        <ProjectsIntro />
        <ProjectsList />
      </main>
    </div>
  )
}