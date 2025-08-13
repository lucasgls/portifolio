import { FaArrowLeft } from 'react-icons/fa'

interface ProjectsNavigationProps {
    onNavigate: (page: 'home' | 'projects') => void
}

export default function ProjectsNavigation({ onNavigate }: ProjectsNavigationProps) {
    return (
        <nav className="fixed top-0 left-4 right-4 bg-[rgba(36,36,36,0.95)] backdrop-blur-[10px] border-b border-[var(--border-color)] rounded-b-xl px-8 py-4 flex items-center gap-8 z-[1000] h-[70px] md:left-2 md:right-2 md:px-4 md:h-[60px]">
            <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 bg-transparent text-[var(--text-secondary)] border border-[var(--border-color)] px-4 py-2 rounded-md text-[15px] cursor-pointer transition-all duration-300 hover:text-[var(--text-primary)] hover:border-[var(--primary-color)] hover:bg-[rgba(100,108,255,0.1)] sm:[&>span]:hidden"
            >
                <FaArrowLeft />
                <span>Voltar</span>
            </button>
            <h1 className="text-[28px] text-[var(--text-primary)] m-0 font-semibold md:text-xl">Projetos</h1>
        </nav>
    )
}