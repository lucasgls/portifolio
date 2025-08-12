import { FaArrowLeft } from 'react-icons/fa'

interface ProjectsNavigationProps {
    onNavigate: (page: 'home' | 'projects') => void
}

export default function ProjectsNavigation({ onNavigate }: ProjectsNavigationProps) {
    return (
        <nav className="projects-nav">
            <button
                onClick={() => onNavigate('home')}
                className="nav-back-button"
            >
                <FaArrowLeft />
                <span>Voltar</span>
            </button>
            <h1 className="nav-title">Projetos</h1>
        </nav>
    )
}