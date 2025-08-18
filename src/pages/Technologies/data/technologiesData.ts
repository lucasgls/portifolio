import type { Technology } from '../types'

export const technologiesData: Technology[] = [
  // Linguagens
  {
    id: 'java',
    name: 'Java',
    category: 'language',
    icon: '☕',
    description: 'Linguagem principal para desenvolvimento backend, com foco em APIs robustas e escaláveis.',
    level: 'advanced',
    color: '#f89820'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'language',
    icon: '🟨',
    description: 'Linguagem versátil para desenvolvimento frontend e backend, essencial para aplicações web.',
    level: 'intermediate',
    color: '#f7df1e'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'language',
    icon: '🔷',
    description: 'Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade do código.',
    level: 'intermediate',
    color: '#3178c6'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'language',
    icon: '🐍',
    description: 'Linguagem para automação, scripts e desenvolvimento de APIs simples e eficientes.',
    level: 'intermediate',
    color: '#3776ab'
  },

  // Frameworks
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'framework',
    icon: '🍃',
    description: 'Framework Java para criação de aplicações enterprise com configuração mínima.',
    level: 'advanced',
    color: '#6db33f'
  },
  {
    id: 'react',
    name: 'React',
    category: 'framework',
    icon: '⚛️',
    description: 'Biblioteca JavaScript para construção de interfaces de usuário interativas.',
    level: 'intermediate',
    color: '#61dafb'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'framework',
    icon: '🎨',
    description: 'Framework CSS utility-first para criação rápida de interfaces modernas.',
    level: 'intermediate',
    color: '#06b6d4'
  },

  // Bancos de Dados
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    icon: '🐬',
    description: 'Sistema de gerenciamento de banco de dados relacional amplamente utilizado.',
    level: 'advanced',
    color: '#4479a1'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    icon: '🐘',
    description: 'Banco de dados relacional avançado com recursos robustos e alta performance.',
    level: 'intermediate',
    color: '#336791'
  },

  // Ferramentas
  {
    id: 'docker',
    name: 'Docker',
    category: 'tool',
    icon: '🐳',
    description: 'Plataforma de containerização para desenvolvimento e deploy de aplicações.',
    level: 'intermediate',
    color: '#2496ed'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tool',
    icon: '📝',
    description: 'Sistema de controle de versão distribuído para gerenciamento de código.',
    level: 'advanced',
    color: '#f05032'
  },
  {
    id: 'maven',
    name: 'Maven',
    category: 'tool',
    icon: '📦',
    description: 'Ferramenta de automação e gerenciamento de dependências para projetos Java.',
    level: 'intermediate',
    color: '#c71a36'
  },

  // Cloud
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    icon: '☁️',
    description: 'Plataforma de serviços em nuvem para hospedagem e escalabilidade de aplicações.',
    level: 'beginner',
    color: '#ff9900'
  },
  {
    id: 'azure',
    name: 'Azure',
    category: 'cloud',
    icon: '🌐',
    description: 'Plataforma de computação em nuvem da Microsoft para soluções enterprise.',
    level: 'beginner',
    color: '#0078d4'
  }
]

export const getCategorizedTechnologies = () => {
  return {
    languages: technologiesData.filter(tech => tech.category === 'language'),
    frameworks: technologiesData.filter(tech => tech.category === 'framework'),
    databases: technologiesData.filter(tech => tech.category === 'database'),
    tools: technologiesData.filter(tech => tech.category === 'tool'),
    cloud: technologiesData.filter(tech => tech.category === 'cloud')
  }
}