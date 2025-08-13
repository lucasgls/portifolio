import lucasLogo from '../../../assets/icon-face-whiteBG.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="mb-6">
                <a href="https://www.instagram.com/lucassgls/" target="_blank">
                    <img
                        src={lucasLogo}
                        className="h-40 p-3 rounded-full transition-all duration-300 hover:drop-shadow-[0_0_2em_rgba(244,244,244,0.67)]"
                        alt="Lucas logo"
                    />
                </a>
            </div>

            <div className="mb-6">
                <h1 className="text-4xl font-bold text-white/90 mb-2 leading-tight">Lucas Gabriel Lima Silva</h1>
                <p className="text-white/70 text-lg mb-3">Estudante de Engenharia de Software</p>
                <p className="text-white/70 text-base">
                    <a
                        href="https://www.alura.com.br/artigos/backend?srsltid=AfmBOorHIurbTU-VeUMK_uNDc7URi0UyhLlSD8AVWeMf_j1eYFgNifek"
                        target='_blank'
                        className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                    >
                        Backend
                    </a>
                    <span className="mx-1">|</span>
                    <span>Java</span>
                    <span className="mx-1">|</span>
                    <span>Spring Boot</span>
                    <span className="mx-1">|</span>
                    <span>MySQL</span>
                </p>
            </div>

            <div className="flex gap-4">
                <a
                    href="https://www.linkedin.com/in/lucasgls/"
                    target='_blank'
                    className="text-2xl text-white/70 hover:text-blue-400 transition-colors duration-200"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/lucasgls"
                    target='_blank'
                    className="text-2xl text-white/70 hover:text-white transition-colors duration-200"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.instagram.com/lucassgls/"
                    target='_blank'
                    className="text-2xl text-white/70 hover:text-pink-400 transition-colors duration-200"
                >
                    <FaInstagram />
                </a>
            </div>
        </div>
    )
}