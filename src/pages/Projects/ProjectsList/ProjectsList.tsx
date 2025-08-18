import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from './projectsData'

export function ProjectsList() {
  return (
    <div className="max-w-[900px] mx-auto">
      {/* Card de fundo estilo folha A4 */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-12 mb-16 max-w-[800px] mx-auto">
          {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div 
            key={project.id} 
            className={`bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 transition-all duration-300 relative overflow-hidden flex gap-10 items-start hover:border-[rgba(100,108,255,0.5)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
              isEven ? 'flex-row' : 'flex-row-reverse'
            } md:flex-col md:gap-5 md:p-6 sm:p-5`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[1.8rem] leading-none md:text-2xl">{project.emoji}</span>
                  <h3 className="text-[22px] text-[var(--text-primary)] m-0 font-semibold md:text-xl">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center w-8 h-8 bg-transparent border border-[var(--border-color)] rounded text-[var(--text-secondary)] no-underline transition-all duration-300 text-sm hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)]"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center w-8 h-8 bg-transparent border border-[var(--border-color)] rounded text-[var(--text-secondary)] no-underline transition-all duration-300 text-sm hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)]"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-[15px]">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="flex items-center gap-1.5 bg-[rgba(100,108,255,0.1)] border border-[rgba(100,108,255,0.2)] px-2.5 py-1.5 rounded text-[11px]"
                  >
                    <span className="text-[var(--text-primary)] font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {project.preview && (
              <div className="flex-none w-[300px] rounded-md overflow-hidden border border-[var(--border-color)] aspect-video md:flex-auto md:w-full">
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
          </div>
        );
      })}
        </div>
      </div>
    </div>
  )
}