import React from 'react'
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMysql, SiNpm, SiDocker } from 'react-icons/si'

export const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: React.ReactElement } = {
    'JavaScript': <SiJavascript className="tech-icon js" />,
    'TypeScript': <SiTypescript className="tech-icon ts" />,
    'React': <SiReact className="tech-icon react" />,
    'Node.js': <SiNodedotjs className="tech-icon node" />,
    'MySQL': <SiMysql className="tech-icon mysql" />,
    'AWS': <span className="tech-icon aws">AWS</span>,
    'NPM': <SiNpm className="tech-icon npm" />,
    'Docker': <SiDocker className="tech-icon docker" />,
    'Ubuntu': <span className="tech-icon ubuntu">Ubuntu</span>,
    'VPS': <span className="tech-icon vps">VPS</span>,
    'SSL': <span className="tech-icon ssl">SSL</span>
  }
  return iconMap[tech] || <span className="tech-icon">{tech}</span>
}