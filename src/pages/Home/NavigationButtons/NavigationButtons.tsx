import { FaFolderOpen, FaMicrochip, FaGraduationCap, FaUser, FaPen } from 'react-icons/fa';

interface NavigationButtonsProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'technologies' | 'blog') => void
}

export default function NavigationButtons({ onNavigate }: NavigationButtonsProps) {
  const handleNavigation = (page: 'home' | 'projects' | 'about' | 'technologies' | 'blog') => {
    onNavigate(page)
  }

  return (
    <div className="flex gap-3 flex-wrap justify-center items-center my-4">
      <div className="flex flex-col gap-4">
        <button
          onClick={() => handleNavigation('projects')}
          className="flex items-center justify-center gap-3 text-sm px-3 py-2 w-48 h-12 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/90 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] backdrop-blur-[8px]"
        >
          <span>Projetos</span>
          <FaFolderOpen className="text-lg" />
        </button>

        <button
          onClick={() => handleNavigation('technologies')}
          className="flex items-center justify-center gap-3 text-sm px-3 py-2 w-48 h-12 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/90 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] backdrop-blur-[8px]"
        >
          <span>Tecnologias</span>
          <FaMicrochip className="text-lg" />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => handleNavigation('about')}
          className="flex items-center justify-center gap-3 text-sm px-3 py-2 w-48 h-12 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/90 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] backdrop-blur-[8px]"
        >
          <FaUser className="text-lg" />
          <span>Sobre</span>
        </button>

        <button
          onClick={() => handleNavigation('blog')}
          className="flex items-center justify-center gap-3 text-sm px-3 py-2 w-48 h-12 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/90 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] backdrop-blur-[8px]"
        >
          <FaPen className="text-lg" />
          <span>Blog</span>
        </button>
      </div>
    </div>
  )
}