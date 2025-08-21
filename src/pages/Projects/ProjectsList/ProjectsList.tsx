import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from './projectsData'

export function ProjectsList() {
  return (
    <div className="max-w-[900px] mx-auto">
      {/* Card de fundo estilo folha A4 */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-4 mb-16 sm:gap-6 md:grid-cols-2 md:gap-6">
          {projects.map((project) => {
        return (
          <div 
            key={project.id} 
            className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-3 transition-all duration-300 relative overflow-hidden hover:border-[rgba(100,108,255,0.5)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] sm:p-4 md:p-4"
          >
            {project.preview && (
              <div className="w-full h-[120px] sm:h-[140px] md:h-[140px] rounded-md overflow-hidden border border-[var(--border-color)] mb-2 sm:mb-3">
                {project.preview.type === 'image' ? (
                  <img 
                    src={project.preview.url} 
                    alt={project.preview.alt || project.title}
                    className="w-full h-full object-cover block transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <video 
                    src={project.preview.url} 
                    className="w-full h-full object-cover block bg-[var(--bg-primary)]"
                    controls
                    preload="metadata"
                  >
                    Seu navegador não suporta vídeos.
                  </video>
                )}
              </div>
            )}
            
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <span className="text-lg">{project.emoji}</span>
              <h3 className="text-sm sm:text-base text-[var(--text-primary)] m-0 font-bold leading-tight flex-1">{project.title}</h3>
              <div className="flex gap-0.5 sm:gap-1">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-transparent border border-[var(--border-color)] rounded text-[var(--text-secondary)] no-underline transition-all duration-300 text-xs hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)]"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-transparent border border-[var(--border-color)] rounded text-[var(--text-secondary)] no-underline transition-all duration-300 text-xs hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)]"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-[var(--text-secondary)] leading-relaxed mb-2 sm:mb-3 text-xs sm:text-sm">{project.description}</p>
            
            <div className="flex flex-wrap gap-1 mb-1 sm:mb-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-1 py-0.5 sm:px-1.5 bg-[rgba(100,108,255,0.1)] text-[var(--accent-color)] rounded text-[10px] sm:text-xs font-medium border border-[rgba(100,108,255,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        );
      })}
        </div>
      </div>
    </div>
  )
}