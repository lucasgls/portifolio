import euPhoto from '../../../assets/eu.jpeg'
import { Settings, Target } from 'lucide-react'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'

export function AboutContent() {
  return (
    <div className="max-w-[900px] mx-auto">
      {/* Card de fundo estilo folha A4 */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
        <div className="space-y-8">

          <section className="max-w-[800px] mx-auto">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] md:p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">

                <div className="flex-shrink-0 mt-6">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-[var(--border-color)] overflow-hidden">
                    <img
                      src={euPhoto}
                      alt="Lucas"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Ícones de contato abaixo da foto */}
                  <div className="flex justify-center gap-2 mt-4 flex-wrap">
                    <a
                      href="https://wa.me/5519998991823"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:bg-[rgba(100,108,255,0.05)] group"
                    >
                      <FaWhatsapp className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[#25D366] transition-colors duration-300" />
                    </a>

                    <a
                      href="https://linkedin.com/in/lucasgls"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:bg-[rgba(100,108,255,0.05)] group"
                    >
                      <FaLinkedin className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[#0077B5] transition-colors duration-300" />
                    </a>

                    <a
                      href="mailto:lucasglsilva7@gmail.com"
                      className="flex items-center justify-center w-10 h-10 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:bg-[rgba(100,108,255,0.05)] group"
                    >
                      <svg className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[#EA4335] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.hackerrank.com/profile/lucasgls"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:bg-[rgba(100,108,255,0.05)] group"
                    >
                      <svg className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[#00EA64] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908c0-.141-.115-.258-.258-.258H8.156c-.141 0-.258.115-.258.258v9.833c0 .141.115.258.258.258h1.549c.141 0 .258-.115.258-.258V12.18h4.074v4.561c0 .141.115.258.258.258h1.549c.141 0 .258-.115.258-.258V6.908c0-.141-.115-.258-.258-.258h-1.549z" />
                      </svg>
                    </a>

                    <a
                      href="https://leetcode.com/u/lucasgls"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:bg-[rgba(100,108,255,0.05)] group"
                    >
                      <svg className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[#FFA116] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                      </svg>
                    </a>
                  </div>
                </div>


                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed flex-1">
                  <h2 className="text-[22px] text-[var(--text-primary)] font-semibold mb-4">Quem sou eu</h2>
                  <p className="text-[15px]">
                    Olá! Sou Lucas, estudante de Engenharia de Software na USF e apaixonado por desenvolvimento backend.
                    Minha jornada na programação começou aos 16 anos no ensino médio quando descobri o poder de criar soluções
                    que conectam pessoas e resolvem problemas reais através da tecnologia.
                  </p>
                  <p className="text-[15px]">
                    Atualmente programo com Java e Spring Boot, criando APIs robustas e escaláveis.
                    Tenho experiência prática com MySQL e PostgreSQL além de implementar
                    arquiteturas baseadas em microsserviços. Meu foco está em escrever código limpo,
                    performático e que seja fácil de manter e evoluir.
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section className="max-w-[800px] mx-auto">
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)]">
                <h3 className="text-[22px] text-[var(--text-primary)] font-semibold mb-4 flex items-center gap-2">
                  <Settings size={20} className="text-[var(--accent-color)]" />
                  Habilidades Backend
                </h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-center gap-2 text-[15px]">
                    <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                    Java & Spring Boot
                  </li>
                  <li className="flex items-center gap-2 text-[15px]">
                    <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                    MySQL & PostgreSQL
                  </li>
                  <li className="flex items-center gap-2 text-[15px]">
                    <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                    APIs REST & GraphQL
                  </li>
                  <li className="flex items-center gap-2 text-[15px]">
                    <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                    Docker & Kubernetes
                  </li>
                  <li className="flex items-center gap-2 text-[15px]">
                    <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                    AWS, Azure & Microsserviços
                  </li>
                </ul>
              </div>


              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)]">
                <h3 className="text-[22px] text-[var(--text-primary)] font-semibold mb-4 flex items-center gap-2">
                  <Target size={20} className="text-[var(--accent-color)]" />
                  Especialidades
                </h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-center gap-2 text-[15px]">
                    <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                    Desenvolvimento Backend
                  </li>
                  <li className="flex items-center gap-2 text-[15px]">
                    <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                    Bancos de Dados Relacionais
                  </li>
                  <li className="flex items-center gap-2 text-[15px]">
                    <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                    Arquitetura de Software Limpa
                  </li>
                  <li className="flex items-center gap-2 text-[15px]">
                    <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                    Testes & Debug
                  </li>
                  <li className="flex items-center gap-2 text-[15px]">
                    <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                    Aprendizado Contínuo
                  </li>
                </ul>
              </div>
            </div>
          </section>



          <section className="max-w-[800px] mx-auto">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)]">
              <h3 className="text-[22px] text-[var(--text-primary)] font-semibold mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-[var(--accent-color)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Cursos / Certificações
              </h3>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2 text-[15px]">
                  <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                  Java Completo - Programação Orientada a Objetos
                </li>
                <li className="flex items-center gap-2 text-[15px]">
                  <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                  Spring Boot & Spring Framework
                </li>
                <li className="flex items-center gap-2 text-[15px]">
                  <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                  Banco de Dados MySQL & PostgreSQL
                </li>
                <li className="flex items-center gap-2 text-[15px]">
                  <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                  Docker & Containerização
                </li>
                <li className="flex items-center gap-2 text-[15px]">
                  <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                  AWS Cloud Practitioner
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}