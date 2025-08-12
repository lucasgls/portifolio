import { FaFolderOpen, FaMicrochip, FaGraduationCap, FaUser } from 'react-icons/fa'

interface NavigationButtonsProps {
  onNavigate: (page: 'home' | 'projects') => void
  currentPage: 'home' | 'projects'
}

export default function NavigationButtons({ onNavigate }: NavigationButtonsProps) {
  const handleNavigation = (page: 'home' | 'projects') => {
    onNavigate(page)
  }

  return (
    <div className="container">
      <div className="container1">
        <button onClick={() => handleNavigation('projects')}>
          <FaFolderOpen />
          <p>Projetos</p>
        </button>

        <button>
          <FaMicrochip />
          <p>Tecnologias</p>
        </button>
      </div>

      <div className="container2">
        <button>
          <FaGraduationCap />
          <p>Estudos</p>
        </button>

        <button>
          <FaUser />
          <p>Sobre</p>
        </button>
      </div>
    </div>
  )
}