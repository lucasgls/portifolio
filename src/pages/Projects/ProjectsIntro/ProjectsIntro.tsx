export default function ProjectsIntro() {
  return (
    <div className="mb-16 max-w-[1200px] mx-auto">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-xl p-6 w-full flex items-start gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.1)] relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[rgba(100,108,255,0.8)] before:rounded-l-xl md:p-5 md:gap-3.5 sm:p-4 sm:gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <span className="text-lg text-[rgba(100,108,255,0.9)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] md:text-base sm:text-sm">📌</span>
        </div>
        <div className="flex-1">
          <h4 className="text-[15px] font-semibold text-[rgba(255,255,255,0.9)] m-0 mb-2 tracking-[0.5px] text-shadow-[0_1px_2px_rgba(0,0,0,0.1)] md:text-[13px] sm:text-[11px]">NOTA</h4>
          <p className="text-[13px] text-[rgba(255,255,255,0.8)] m-0 leading-relaxed text-shadow-[0_1px_2px_rgba(0,0,0,0.1)] md:text-[11px] sm:text-[11px]">
            Esses são meus projetos pessoais, desenvolvidos com diferentes tecnologias e abordagens, 
            com o objetivo de demonstrar minhas habilidades e conhecimentos na área de desenvolvimento.
          </p>
        </div>
      </div>
    </div>
  )
}