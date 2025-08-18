import { getCategorizedTechnologies } from '../data/technologiesData'
import type { Technology } from '../types'

interface TechnologyCardProps {
  technology: Technology
}

function TechnologyCard({ technology }: TechnologyCardProps) {
  const getLevelColor = (level: Technology['level']) => {
    switch (level) {
      case 'beginner':
        return 'text-yellow-400'
      case 'intermediate':
        return 'text-blue-400'
      case 'advanced':
        return 'text-green-400'
      default:
        return 'text-gray-400'
    }
  }

  const getLevelText = (level: Technology['level']) => {
    switch (level) {
      case 'beginner':
        return 'Iniciante'
      case 'intermediate':
        return 'Intermediário'
      case 'advanced':
        return 'Avançado'
      default:
        return 'N/A'
    }
  }

  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:transform hover:scale-[1.02] group">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl border border-[var(--border-color)] group-hover:border-[rgba(100,108,255,0.3)] transition-all duration-300"
            style={{ backgroundColor: `${technology.color}15` }}
          >
            {technology.icon}
          </div>
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] text-[var(--text-primary)] font-semibold">
              {technology.name}
            </h3>
            <span className={`text-[12px] font-medium px-2 py-1 rounded-full bg-[var(--bg-primary)] ${getLevelColor(technology.level)}`}>
              {getLevelText(technology.level)}
            </span>
          </div>
          
          <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
            {technology.description}
          </p>
          
          <div className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: technology.color }}
            ></div>
            <span className="text-[12px] text-[var(--text-secondary)] capitalize">
              {technology.category === 'language' ? 'Linguagem' :
               technology.category === 'framework' ? 'Framework' :
               technology.category === 'database' ? 'Banco de Dados' :
               technology.category === 'tool' ? 'Ferramenta' :
               technology.category === 'cloud' ? 'Cloud' : technology.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface CategorySectionProps {
  title: string
  emoji: string
  technologies: Technology[]
}

function CategorySection({ title, emoji, technologies }: CategorySectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-[20px] text-[var(--text-primary)] font-semibold flex items-center gap-2 mb-6">
        <span className="text-lg">{emoji}</span>
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>
    </section>
  )
}

export function TechnologiesContent() {
  const categorizedTechnologies = getCategorizedTechnologies()

  return (
    <div className="max-w-[900px] mx-auto">
      {/* Card de fundo estilo folha A4 */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
        <div className="space-y-12">
          <CategorySection
            title="Linguagens de Programação"
            emoji="💻"
            technologies={categorizedTechnologies.languages}
          />
          
          <CategorySection
            title="Frameworks & Bibliotecas"
            emoji="🚀"
            technologies={categorizedTechnologies.frameworks}
          />
          
          <CategorySection
            title="Bancos de Dados"
            emoji="🗄️"
            technologies={categorizedTechnologies.databases}
          />
          
          <CategorySection
            title="Ferramentas & DevOps"
            emoji="🛠️"
            technologies={categorizedTechnologies.tools}
          />
          
          <CategorySection
            title="Cloud & Infraestrutura"
            emoji="☁️"
            technologies={categorizedTechnologies.cloud}
          />
        </div>
      </div>
    </div>
  )
}