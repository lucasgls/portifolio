import { Project } from './types'

export const projects: Project[] = [
  {
    id: 1,
    title: "todo-app",
    emoji: "📝",
    description: "API REST para uma aplicação de gestão de tarefas, construída com Java e o ecossistema Spring (Spring Boot, Security, JPA, Flyway, JWT). O foco principal do projeto foi o desenvolvimento do back-end.",
    technologies: ["Java", "Spring Boot", "Security", "JPA", "Flyway", "JWT"],
    githubUrl: "https://github.com/lucasgls/todo-app",
    preview: {
      type: 'image',
      url: 'https://github.com/user-attachments/assets/fa216836-c22c-4f8f-9c88-c5d2f7b6610d',
      alt: 'LRU Cache Performance Demo'
    }
  },
  {
    id: 2,
    title: "IAnalisador",
    emoji: "🤖",
    description: "Projeto do senai, onde devemos criar uma solução com Azure/IA para solucionar problemas reais",
    technologies: ["Azure", "Python"],
    githubUrl: "https://github.com/sidorares/node-mysql2",
    preview: {
      type: 'image',
      url: 'https://github.com/user-attachments/assets/fa216836-c22c-4f8f-9c88-c5d2f7b6610d',
      alt: 'MySQL2 Client Demo'
    }
  },

]