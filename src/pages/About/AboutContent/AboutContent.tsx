import euPhoto from '../../../assets/eu.jpeg'
import { Settings, Target } from 'lucide-react'

export function AboutContent() {
  return (
    <div className="max-w-[900px] mx-auto">
      {/* Card de fundo estilo folha A4 */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
        <div className="space-y-8">

      <section className="max-w-[800px] mx-auto">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] md:p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">

            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl border border-[var(--border-color)] overflow-hidden">
                <img 
                  src={euPhoto} 
                  alt="Lucas" 
                  className="w-full h-full object-cover"
                />
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
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] md:p-6">
          <h3 className="text-[22px] text-[var(--text-primary)] font-semibold mb-6 flex items-center gap-2">
            <span className="text-lg">🌐</span>
            Conecte-se comigo
          </h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">

            <a 
              href="https://github.com/lucasgls" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:bg-[rgba(100,108,255,0.05)] group"
            >
              <svg className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[#646cff]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-[15px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">GitHub</span>
            </a>


            <a 
              href="https://linkedin.com/in/lucasgls" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:bg-[rgba(100,108,255,0.05)] group"
            >
              <svg className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[#646cff]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-[15px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">LinkedIn</span>
            </a>


            <a 
              href="https://instagram.com/lucassgls" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:bg-[rgba(100,108,255,0.05)] group"
            >
              <svg className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[#646cff]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-[15px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">Instagram</span>
            </a>


            <a 
              href="mailto:lucasglsilva7@gmail.com" 
              className="flex items-center gap-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-4 py-3 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:bg-[rgba(100,108,255,0.05)] group"
            >
              <svg className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[#646cff]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
              <span className="text-[15px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">Email</span>
            </a>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  )
}