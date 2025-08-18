import { FaHome, FaGraduationCap, FaCog, FaUser } from 'react-icons/fa'
import type { NavigationProps } from '../types'

type TechnologiesNavigationProps = NavigationProps;

export function TechnologiesNavigation({ onNavigate }: TechnologiesNavigationProps) {
    return (
        <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[30px] border border-[rgba(255,255,255,0.12)] rounded-[20px] px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-500 ease-out hover:shadow-[0_12px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.18)] animate-[slideIn_0.6s_ease-out]">
            <div className="flex items-center gap-2">
                <button 
                    onClick={() => onNavigate('home')}
                    className="group flex items-center gap-2 px-4 py-2 rounded-[14px] text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.12)] hover:text-[rgba(255,255,255,0.9)] transition-all duration-500 ease-out text-[14px] font-[500] hover:scale-105 hover:shadow-[0_4px_16px_rgba(255,255,255,0.1)] active:scale-95 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    <FaHome className="text-[14px] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">Home</span>
                </button>
                <button 
                    onClick={() => onNavigate('projects')}
                    className="group flex items-center gap-2 px-4 py-2 rounded-[14px] text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.12)] hover:text-[rgba(255,255,255,0.9)] transition-all duration-500 ease-out text-[14px] font-[500] hover:scale-105 hover:shadow-[0_4px_16px_rgba(255,255,255,0.1)] active:scale-95 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    <FaGraduationCap className="text-[14px] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">Projetos</span>
                </button>
                <button className="group flex items-center gap-2 px-5 py-2.5 rounded-[16px] text-[rgba(255,255,255,0.95)] bg-[rgba(255,255,255,0.15)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out text-[15px] font-[600] scale-105 hover:scale-110 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    <FaCog className="text-[15px] relative z-10 transition-all duration-300 group-hover:rotate-180 group-hover:scale-110" />
                    <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">Tecnologias</span>
                </button>
                <button 
                    onClick={() => onNavigate('about')}
                    className="group flex items-center gap-2 px-4 py-2 rounded-[14px] text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.12)] hover:text-[rgba(255,255,255,0.9)] transition-all duration-500 ease-out text-[14px] font-[500] hover:scale-105 hover:shadow-[0_4px_16px_rgba(255,255,255,0.1)] active:scale-95 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    <FaUser className="text-[14px] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">Sobre</span>
                </button>
            </div>
        </div>
    )
}