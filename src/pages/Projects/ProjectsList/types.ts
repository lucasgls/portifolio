export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  emoji: string
  preview?: {
    type: 'image' | 'video'
    url: string
    alt?: string
  }
}