import { FaFolderOpen, FaCog, FaUser, FaPen } from 'react-icons/fa';

interface NavigationButtonsProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'technologies' | 'blog') => void
  currentPage?: 'home' | 'projects' | 'about' | 'technologies' | 'blog'
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
          className="group flex items-center justify-center gap-3 text-sm px-3 py-2 w-48 h-12 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/90 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 ease-out backdrop-blur-[8px] hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] active:scale-95 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">Projetos</span>
          <FaFolderOpen className="text-lg relative z-10 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </button>

        <button
          onClick={() => handleNavigation('technologies')}
          className="group flex items-center justify-center gap-3 text-sm px-3 py-2 w-48 h-12 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/90 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 ease-out backdrop-blur-[8px] hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] active:scale-95 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">Tecnologias</span>
          <FaCog className="text-lg relative z-10 transition-all duration-300 group-hover:rotate-180 group-hover:scale-110" />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => handleNavigation('about')}
          className="group flex items-center justify-center gap-3 text-sm px-3 py-2 w-48 h-12 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/90 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 ease-out backdrop-blur-[8px] hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] active:scale-95 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          <FaUser className="text-lg relative z-10 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">Sobre</span>
        </button>

        <button
          onClick={() => handleNavigation('blog')}
          className="group flex items-center justify-center gap-3 text-sm px-3 py-2 w-48 h-12 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/90 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 ease-out backdrop-blur-[8px] hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] active:scale-95 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          <FaPen className="text-lg relative z-10 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">Blog</span>
        </button>
      </div>
    </div>
  )
}