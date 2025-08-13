import { FaHome, FaGraduationCap, FaCog, FaUser } from 'react-icons/fa'
import type { NavigationProps } from '../types'

interface ProjectsNavigationProps extends NavigationProps {}

export function ProjectsNavigation({ onNavigate }: ProjectsNavigationProps) {
    return (
        <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[30px] border border-[rgba(255,255,255,0.12)] rounded-[20px] px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-1">
                <button 
                    onClick={() => onNavigate('home')}
                    className="flex items-center gap-2 px-4 py-2 rounded-[14px] text-[rgba(255,255,255,0.9)] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] text-[14px] font-[500]"
                >
                    <FaHome className="text-[14px]" />
                    <span>Home</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-[14px] text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.12)] hover:text-[rgba(255,255,255,0.9)] transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] text-[14px] font-[500]">
                    <FaGraduationCap className="text-[14px]" />
                    <span>Estudos</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-[14px] text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.12)] hover:text-[rgba(255,255,255,0.9)] transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] text-[14px] font-[500]">
                    <FaCog className="text-[14px]" />
                    <span>Tecnologias</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-[14px] text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.12)] hover:text-[rgba(255,255,255,0.9)] transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] text-[14px] font-[500]">
                    <FaUser className="text-[14px]" />
                    <span>Sobre</span>
                </button>
            </div>
        </div>
    )
}