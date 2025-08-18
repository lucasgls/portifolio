import { getCategorizedTechnologies } from '../data/technologiesData'
import type { Technology } from '../types'
import {
  Code,
  Layers,
  HardDrive,
  Wrench,
  Cloud
} from 'lucide-react'

interface TechnologyCardProps {
  technology: Technology
}

function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-8 transition-all duration-300 hover:border-[rgba(100,108,255,0.5)] hover:transform hover:scale-[1.02] group hover:shadow-lg">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Ícone da tecnologia */}
        <div className="flex-shrink-0">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl border border-[var(--border-color)] group-hover:border-[rgba(100,108,255,0.3)] transition-all duration-300 shadow-sm"
            style={{ backgroundColor: `${technology.color}15` }}
          >
            <i className={technology.icon} style={{ color: technology.color, fontSize: '32px' }}></i>
          </div>
        </div>

        {/* Nome da tecnologia */}
        <div>
          <h3 className="text-[16px] text-[var(--text-primary)] font-semibold">
            {technology.name}
          </h3>
        </div>
      </div>
    </div>
  )
}

interface CategorySectionProps {
  title: string
  icon: React.ReactNode
  technologies: Technology[]
}

function CategorySection({ title, icon, technologies }: CategorySectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-[20px] text-[var(--text-primary)] font-semibold flex items-center gap-2 mb-6">
        <span className="text-lg">{icon}</span>
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            icon={<Code className="text-yellow-400" />}
            technologies={categorizedTechnologies.languages}
          />

          <CategorySection
            title="Frameworks & Bibliotecas"
            icon={<Layers className="text-blue-400" />}
            technologies={categorizedTechnologies.frameworks}
          />

          <CategorySection
            title="Bancos de Dados"
            icon={<HardDrive className="text-blue-600" />}
            technologies={categorizedTechnologies.databases}
          />

          <CategorySection
            title="Ferramentas & DevOps"
            icon={<Wrench className="text-blue-500" />}
            technologies={categorizedTechnologies.tools}
          />

          <CategorySection
            title="Cloud & Infraestrutura"
            icon={<Cloud className="text-blue-400" />}
            technologies={categorizedTechnologies.cloud}
          />
        </div>
      </div>
    </div>
  )
}