import { FolderKanban, Microchip, GraduationCap, PersonStanding } from 'lucide-react'

export function NavigationButtons() {
  return (
    <div className="container">
      <div className="container1">
        <button>
          <FolderKanban />
          <p>Projetos</p>
        </button>

        <button>
          <Microchip />
          <p>Tecnologias</p>
        </button>
      </div>

      <div className="container2">
        <button>
          <GraduationCap />
          <p>Estudos</p>
        </button>

        <button>
          <PersonStanding />
          <p>Sobre</p>
        </button>
      </div>
    </div>
  )
}