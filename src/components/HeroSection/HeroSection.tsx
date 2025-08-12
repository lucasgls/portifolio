import lucasLogo from '../../assets/icon-face-whiteBG.png'
import { Linkedin, Github, Instagram} from 'lucide-react';

export function HeroSection () {
    return(
    <>
        <div className="header">
            <a href="https://www.instagram.com/lucassgls/" target="_blank">
                <img src={lucasLogo} className="logo" alt="Lucas logo"/>
            </a>
        </div>

        <div className='bio-header'>
            <h1>Lucas Gabriel Lima Silva</h1>
            <p>Estudante de Engenharia de Software</p>
            <p>
                <a href="https://www.alura.com.br/artigos/backend?srsltid=AfmBOorHIurbTU-VeUMK_uNDc7URi0UyhLlSD8AVWeMf_j1eYFgNifek" target='_blank'>
                    <u>Backend</u>
                </a>
                | Java | Spring Boot | MySQL
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
    </>    
    )
}