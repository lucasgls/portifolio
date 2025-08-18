import type { Technology } from '../types'

export const technologiesData: Technology[] = [
  // Linguagens
  {
    id: 'java',
    name: 'Java',
    category: 'language',
    icon: 'devicon-java-plain',
    description: 'Minha linguagem Principal',
    color: '#f89820'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'language',
    icon: 'devicon-typescript-plain',
    description: 'Minha linguagem que utilizo no Front por ser tipada e ter uma base semelhante a do Java',
    color: '#3178c6'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'language',
    icon: 'devicon-python-plain',
    description: 'Linguagem que uso para projetos rápidos, MVPs por sua simplicidade',
    color: '#ffff00'
  },

  // Frameworks
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'framework',
    icon: 'devicon-spring-plain',
    description: 'Framework Java para criação de aplicações robustas e escaláveis.',
    color: '#6db33f'
  },
  {
    id: 'react',
    name: 'React',
    category: 'framework',
    icon: 'devicon-react-original',
    description: 'Biblioteca JavaScript para construção de interfaces.',
    color: '#61dafb'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'framework',
    icon: 'devicon-tailwindcss-plain',
    description: 'Framework CSS utility-first para criação rápida de interfaces modernas.',
    color: '#06b6d4'
  },

  // Bancos de Dados
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    icon: 'devicon-mysql-plain',
    description: 'Meu banco de dados fav <3.',
    color: '#4479a1'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    icon: 'devicon-postgresql-plain',
    description: 'Banco de dados relacional avançado com recursos robustos e alta performance.',
    color: '#336791'
  },

  // Ferramentas
  {
    id: 'docker',
    name: 'Docker',
    category: 'tool',
    icon: 'devicon-docker-plain',
    description: 'Plataforma de containerização para desenvolvimento e deploy de aplicações.',
    color: '#2496ed'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tool',
    icon: 'devicon-git-plain',
    description: 'Sistema de controle de versão distribuído para gerenciamento de código.',
    color: '#f05032'
  },

  // Cloud
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    icon: 'devicon-amazonwebservices-original',
    description: 'Plataforma de serviços em nuvem para hospedagem e escalabilidade de aplicações.',
    color: '#ff9900'
  },
  {
    id: 'azure',
    name: 'Azure',
    category: 'cloud',
    icon: 'devicon-azure-plain',
    description: 'Plataforma de computação em nuvem da Microsoft para soluções enterprise.',
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