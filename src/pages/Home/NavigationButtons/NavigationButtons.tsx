import { FaFolderOpen, FaMicrochip, FaGraduationCap, FaUser } from 'react-icons/fa'

export default function NavigationButtons() {
  return (
    <div className="container">
      <div className="container1">
        <button>
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