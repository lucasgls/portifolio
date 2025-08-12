import ProjectsNavigation from './ProjectsNavigation/ProjectsNavigation'
import ProjectsIntro from './ProjectsIntro/ProjectsIntro'
import ProjectsList from './ProjectsList/ProjectsList'
import ProjectsFooter from './ProjectsFooter/ProjectsFooter'

interface ProjectsProps {
  onNavigate: (page: 'home' | 'projects') => void
}

export default function Projects({ onNavigate }: ProjectsProps) {
  return (
    <div className="projects-page">
      <ProjectsNavigation onNavigate={onNavigate} />
      
      <main className="projects-main">
        <ProjectsIntro />
        <ProjectsList />
        <ProjectsFooter />
      </main>
    </div>
  )
}