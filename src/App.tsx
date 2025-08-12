
import './App.css'
import { Linkedin, Github, Instagram, FolderKanban, Microchip, GraduationCap, PersonStanding, Copy} from 'lucide-react';
import { Header } from './components/header';

function App() {

  return (
    <>
      <Header />

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
            <Copy
              size={"20"}
            />
          </button>
        </div>
      </div>

      <p>
        By <code>Lucas Gabriel</code> seu futuro engenheiro.
      </p>
    </>
  )
}

export default App
