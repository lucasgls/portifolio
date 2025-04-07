
import lucasLogo from './assets/icon-face-whiteBG.png'
import './App.css'
import { Linkedin, Github, Instagram, FolderKanban, Microchip, GraduationCap, PersonStanding, Copy} from 'lucide-react';

function App() {

  return (
    <>
      <div className='header'>

        <a href="https://www.instagram.com/lucassgls/" target="_blank">
          <img src={lucasLogo} className="logo" alt="React logo" />
        </a>

      </div>

      <div className='bio-header'>

        <h1>Lucas Gabriel Lima Silva</h1>
        <p>Estudante de Engenharia de Software</p>

        <p >
          <a href="https://www.alura.com.br/artigos/backend?srsltid=AfmBOorHIurbTU-VeUMK_uNDc7URi0UyhLlSD8AVWeMf_j1eYFgNifek" target='_blank'>
            <u> Backend</u>
          </a>
          | .Net | C# | ASP.NET Core
        </p>

      </div>
      <div className='social'>

        <div className='linkedin'>
          <a href="https://www.linkedin.com/in/lucasgls/" target='_blank'>
            <Linkedin />
          </a>
        </div>

        <div className='github'>
          <a href="https://github.com/lucasgls" target='_blank'>
            <Github />
          </a>
        </div>

        <div className='instagram'>
          <a href="https://www.instagram.com/lucassgls/" target='_blank'>
            <Instagram />
          </a>
        </div>

      </div>

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

      <p>
        By <code>Lucas Gabriel</code> seu futuro engenheiro.
      </p>
      <p className="read-the-docs">
        Clique aqui para copiar meu e-mail de contato  
        <a href="mailto:lucasglsilva7@gmail.com" className="email-link"> lucasglsilva7@gmail.com</a>
        <Copy/>  
      </p>
    </>
  )
}

export default App
