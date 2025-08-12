import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from './projectsData'
// Removendo a importação do getTechIcon pois não será mais usado
// import { getTechIcon } from './techIcons'

export default function ProjectsList() {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={project.id} className={`project-card ${isEven ? 'image-right' : 'image-left'}`}>
            <div className="project-content">
              <div className="project-header">
                <div className="project-title-section">
                  <span className="project-emoji">{project.emoji}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-item">
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {project.preview && (
              <div className="project-preview">
                {project.preview.type === 'image' ? (
                  <img 
                    src={project.preview.url} 
                    alt={project.preview.alt || project.title}
                    className="preview-image"
                  />
                ) : (
                  <video 
                    src={project.preview.url} 
                    className="preview-video"
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
  )
}