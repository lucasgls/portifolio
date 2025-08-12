
import './App.css'
import { FolderKanban, Microchip, GraduationCap, PersonStanding, Copy } from 'lucide-react';
import { HeroSection } from './components/HeroSection/HeroSection';

function App() {

  return (
    <>
      <HeroSection />

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
      
      <div className='container-copy'>
        <p>Você pode entrar em contato comigo por aqui:</p>
        <div className='copyDiv'>
          <input 
            value="lucasglsilva7@gmail.com"
            className="copyInput"
            name='text'
            type="text" 
            readOnly>
          </input>
          <button className='copyButton'>
            <Copy />
          </button>
        </div>
      </div>
      
      <p>By `Lucas Gabriel` seu futuro engenheiro.</p>
    </>
  )
}

export default App
